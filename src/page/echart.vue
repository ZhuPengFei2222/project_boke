<template>
  <div id="echart" v-wechat-title="$route.meta.title">
    <span style="font-family: 'PingFang SC'; font-size:14px;margin-right:10px;">
      请输入添加文字:
      <input
        type="text"
        placeholder="请输入内容"
        id="text1"
        style="line-height:30px;height:30px;text-indent:5px;margin-left:10px;width:110px"
      >
      <span
        v-show="w_f"
        style="color:red;font-family: 'PingFang SC'; font-size:14px;margin-left:10px;"
      >:请输入文字</span>
    </span>
    <span style="font-family: 'PingFang SC'; font-size:14px;margin-right:10px;">
      请输入添加数字:
      <input
        type="text"
        placeholder="请输入内容"
        id="text2"
        style="line-height:30px;height:30px;text-indent:5px;margin-left:10px;width:110px"
      >
      <span
        v-show="w_f"
        style="color:red;font-family: 'PingFang SC'; font-size:14px;margin-left:10px;"
      >:请输入数字</span>
    </span>
    <el-button type="primary" v-on:click="font_add()">添加</el-button>
    <el-button type="info" v-on:click="compute()">绘制eCharts图</el-button>
    <span
      v-show="table_f"
      style="color:red;font-family: 'PingFang SC'; font-size:14px;margin-left:10px;"
    >表格不能为空</span>
    <el-button type="info" v-on:click="sum_solt()" style="margin-left:10px;">{{table_sort}}</el-button>
    <el-button type="info" v-on:click="table_clear()" style="margin-left:10px;">清空</el-button>
    <el-table :data="tableData" style="width: 100%;margin-top:20px">
      <el-table-column prop="name" label="文字" align="center" width="300"></el-table-column>
      <el-table-column prop="value" label="数字" align="center" width="300"></el-table-column>
      <el-table-column align="center" label="移去">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="deleteRow(scope.$index, tableData)">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div v-show="charts">
      <h1 style="margin-top:20px;">树形图标如下:</h1>
      <div id="myChart_bar" :style="{width: '800px', height: '300px',margin:'0 auto',}"></div>
      <h1>线状图标如下:</h1>
      <div id="myChart_line" :style="{width: '800px', height: '300px',margin:'0 auto',}"></div>
      <h1>饼形图标如下:</h1>
      <div id="myChart_pie" :style="{width: '800px', height: '300px',margin:'0 auto',}"></div>
    </div>

    <div class="suanfa">
         
    </div>

   <h1 style="text-align:center;margin-top:50px; font-size:38px;">_____________ 滑动幻灯片 _____________</h1>
   <el-carousel :interval="4000" type="card" height="500px" style=" margin-top: 30px;">
    <el-carousel-item v-for="item in pic" :key="item">
      <h3><img :src="item" width="500" /></h3>
    </el-carousel-item>
    </el-carousel>
    
  </div>
</template>

<script>
function srot_small_big(a,b){
              return a.value - b.value
}
function srot_big_small(a,b){
              return b.value - a.value
}  
export default {
  name:'echart',
  data(){
     return{
         names:[],
         values:[],
         w_f:false,
         table_f:false,
         charts:false,
         tableData: [],                
         pic:[require("@/assets/images/echart/1.jpg"),require("@/assets/images/echart/2.jpg"),require("@/assets/images/echart/3.jpg"),require("@/assets/images/echart/4.jpg"),require("@/assets/images/echart/5.jpg")],
         table_sort:"表格数字排序"
     }
  },
  created(){  
     if(window.localStorage!=0){             
       var getLoadStroage = localStorage.getItem('array');
       this.tableData = JSON.parse(getLoadStroage);
     }
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart_bar'))
        // 绘制图表
        myChart.setOption({         
            tooltip: {},
            xAxis: {
                data: this.names
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: this.values
            }]
        });
    },
    drawXian(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart_line'))
        // 绘制图表
        myChart.setOption({         
            tooltip: {},
            xAxis: {
                data: this.names
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'line',
                data: this.values
            }]
        });
    },
    drawpie(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart_pie'));       
       
        // 绘制图表
        myChart.setOption({         
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
            },            
            series: [{
                name:'销量',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                  normal: {
                     show: false,
                     position: 'center'
                  },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                      }
                   }
                },
                labelLine: {
                      normal: {
                      show: false
                   }
                 },  
                            
                data:this.tableData
            }]
        });
    },
    font_add(){      
       let str = /^\S+$/;
       let value = /^[0-9]+$/;       
       let array =  { "name" : document.getElementById('text1').value, "value" : document.getElementById('text2').value};                            
       if(str.test(document.getElementById('text1').value) && value.test(document.getElementById('text2').value)){
            this.w_f = false;
            this.tableData.push(array);
            localStorage.setItem('array',JSON.stringify(this.tableData));
       }
       else{ this.w_f = true;}       
       
    },       
    compute(){        
        //console.log(this.tableData);
        if(this.tableData.length != 0){
            this.charts = true;
            this.table_f = false;
            this.tableData.map(item =>{
                 this.names.push(item.name);
                 this.values.push(item.value);
                 this.drawLine();     
                 this.drawXian();     
                 this.drawpie();      
            })
            this.names = [];
            this.values = [];
        }
        else{ this.table_f = true;}
    },
    sum_solt(){         
       if(this.tableData.length != 0){                        
          if(this.table_sort == "表格数字排序" || this.table_sort == "表格数字排序(从大到小)"){            
            this.tableData.sort(srot_small_big); 
            this.table_sort = "表格数字排序(从小到大)";
          }
          else{           
            this.tableData.sort(srot_big_small); 
            this.table_sort = "表格数字排序(从大到小)";
          }
                
       }       
    },
    srot_small_big(a,b){
              return a.value - b.value
    },
    srot_big_small(a,b){
              return b.value - a.value
    },
    deleteRow(index, rows){        
        rows.splice(index, 1);                        
        localStorage.setItem('array',JSON.stringify(this.tableData));        
    },
    table_clear(){
        this.tableData = [];
        localStorage.clear();
    }
  }  
}
</script>

<style scoped>
#echart {
  width: 1000px;
  margin: 30px auto;
}
#echart h1 {
  font-size: 24px;
  padding-bottom: 20px;
}
  
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .suanfa{ margin-top: 30px;}

</style>
