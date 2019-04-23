<template>
  <div id="echart">
      <h1>树形图标如下:</h1>
      <div id="myChart" :style="{width: '600px', height: '300px',margin:'0 auto',}"></div>
      <h1>线状图标如下:</h1>
      <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
  </div>
</template>

<script>
export default {
  name:'echart',
  data(){
     return{
         Vue_charts:{},
         orgOptions:{},
     }
  },
  mounted(){
    this.drawLine();
    this.drawXian();
  },
  methods: {
    drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({         
            tooltip: {},
            xAxis: {
                data: ["","","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [15, 20, 36, 10, 10, 20]
            }]
        });
    },
    drawXian(){
        this.orgOptions = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true
        }]
      }
    },
  }

}
</script>

<style>
   #echart{
       width: 1000px; 
       margin: 30px auto;
   }
   #echart h1{
       font-size: 64px;
   }
</style>
