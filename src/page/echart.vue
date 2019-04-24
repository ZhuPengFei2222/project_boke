<template>
  <div id="echart">     
      <span style="font-family: 'PingFang SC'; font-size:14px;margin-right:10px;">请输入添加文字:<input type="text" placeholder="请输入内容" id="text1" style="line-height:30px;height:30px;text-indent:5px;margin-left:10px;"><span v-show="w_f" style="color:red;font-family: 'PingFang SC'; font-size:14px;margin-left:10px;">:请输入文字</span></span>
      <span style="font-family: 'PingFang SC'; font-size:14px;margin-right:10px;">请输入添加数字:<input type="text" placeholder="请输入内容" id="text2" style="line-height:30px;height:30px;text-indent:5px;margin-left:10px;"><span v-show="w_f" style="color:red;font-family: 'PingFang SC'; font-size:14px;margin-left:10px;">:请输入数字</span></span>
      <el-button type="primary" v-on:click="font_add()">添加</el-button>
      <el-button type="info" v-on:click="compute()">绘制eCharts图</el-button><span v-show="table_f" style="color:red;font-family: 'PingFang SC'; font-size:14px;margin-left:10px;">表格不能为空</span>
      <el-button type="info" v-on:click="sum_solt()" style="margin-left:10px;">表格数字排序</el-button>            
      <el-table
      :data="tableData"
      style="width: 100%;margin-top:20px">
      <el-table-column
        prop="name"
        label="文字"
        align="center"
        width="300">
      </el-table-column>
      <el-table-column
        prop="sum"
        label="数字"
        align="center"
        width="300">
      </el-table-column>
      <el-table-column        
        align="center"       
        label="移去">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="deleteRow(scope.$index, tableData)">移除</el-button>
        </template>
      </el-table-column>
     </el-table>
      <h1 style="margin-top:20px;">树形图标如下:</h1>
      <div id="myChart" :style="{width: '800px', height: '300px',margin:'0 auto',}"></div>
      <h1>线状图标如下:</h1>      
  </div>
</template>

<script>
import { all } from 'q';
export default {
  name:'echart',
  data(){
     return{
         names:[],
         sums:[],
         w_f:false,
         table_f:false,
         tableData: []         
     }
  },
  
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
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
                data: this.sums
            }]
        });
    },   
    font_add(){      
       let str = /^\S+$/;
       let sum = /^[0-9]+$/;       
       let array =  { "name" : document.getElementById('text1').value, "sum" : document.getElementById('text2').value};                            
       if(str.test(document.getElementById('text1').value) && sum.test(document.getElementById('text2').value)){
            this.w_f = false;
            this.tableData.push(array);
       }
       else{ this.w_f = true;}       
       
    },
    compute(){
        console.log(this.tableData);
        if(this.tableData.length != 0){
            this.table_f = false;
            this.tableData.map(item =>{
                 this.names.push(item.name);
                 this.sums.push(item.sum);
                 this.drawLine();                
            })
            this.names = [];
            this.sums = [];
        }
        else{ this.table_f = true;}
    },
    sum_solt(){
       //this.tableData[1] = { name : "ss" , sum : "1"};      
       if(this.tableData.length != 0){           
               for(var i = 0; i < this.tableData.length - 1 ; i++){
                 for(var j = 0; j < this.tableData.length - i - 1; j++){
                     if(this.tableData[j].sum > this.tableData[j+1].sum){
                       var temp = {"name":this.tableData[j].name,"sum":this.tableData[j].sum};
                       //console.log(temp);
                       this.tableData[j].name = this.tableData[j+1].name;
                       this.tableData[j].sum =this.tableData[j+1].sum;
                       this.tableData[j+1].name = temp.name;
                       this.tableData[j+1].sum = temp.sum;
               }
             }               
          }              
       }       
    },
    deleteRow(index, rows){
        rows.splice(index, 1);
    }
  }

}
</script>

<style>
   #echart{
       width: 1000px; 
       margin: 30px auto;
   }
   #echart h1{
       font-size: 32px;
       padding-bottom: 20px;
   }
</style>
