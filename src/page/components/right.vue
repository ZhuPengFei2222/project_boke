<template>
    <div class="right">   
      <div class="geren_right">        
        <template v-for="item in list">          
          <div v-bind:class="item.sfd" v-bind:key="item.id"><router-link :to="item.url">{{item.name}}</router-link></div>
        </template>        
      </div>
        <div class="content_w">
           <h3>最新文章</h3>
           <ul>           
               <li v-for="ins in hello" v-bind:key="ins.id">
                   <router-link :to="ins.router" replace>{{ins.list}}</router-link>
               </li>
           </ul>
        </div>
        <div class="content_y">
           <h3>友情链接</h3>
           <div class="yqlj">
             <ul>
                <li><a href="https://cn.vuejs.org/">vue学习网</a></li>
                <li><a href="http://www.runoob.com/react/react-tutorial.html">react学习网</a></li>
                <li><a href="http://www.w3school.com.cn/">w3school学习网</a></li>
             </ul>
             <div style="clear:both"></div>
           </div>
        </div>
    </div>    
   
</template>

<script>
export default {
   data(){
      return{
       list:[
           {
              id:"1",
              name:"最新动态",
              url:"/jsxq",
              sfd:"sfd_cls1"              
           },
           {
              id:"2",
              name:"心情随笔",
              url:"/xqsb",              
              sfd:"sfd_cls2"              
           },
           {
              id:"3",
              name:"韶华追忆",
              url:"",              
              sfd:"sfd_cls3"              
           },
           {
              id:"4",
              name:"网站首页",
              url:"/",              
              sfd:"sfd_cls4"              
           },
           {
              id:"5",
              name:"关于我",
              url:"/gyw",              
              sfd:"sfd_cls5"              
           },
           {
              id:"6",
              name:"淘宝广告",
              url:"",              
              sfd:"sfd_cls6"              
           },
       ],            
     }
   },
   props:{
      hello:{
          type:Array,
          required:true
      }
   }, 
   methods:{
     
   },
   created:{
     
   }
}
</script>

<style>
.right{ float: left; width: 400px; margin-left: 30px;}
.geren_right{ display: -webkit-flex; flex-wrap: wrap;}
.geren_right div{ width: 33%; height: 100px; text-align: center; line-height: 100px; font-size: 12px; box-sizing:border-box;}
.geren_right div a{ color: #000!important;}
.sfd_cls1{border: 1px solid #FFDD99;background-color: #FFF9ED;}
.sfd_cls2{border: 1px solid #D3D3D3;background-color: #F7F7F7;}
.sfd_cls3{border: 1px solid #FFCC00;background-color: #FFFFF7;}
.sfd_cls4{border: 1px solid #ADCD3C;background-color: #F2FDDB;}
.sfd_cls5{border: 1px solid #F8B3D0;background-color: #FFF5FA;}
.sfd_cls6{border: 1px solid #5C9CC0;background-color: #F2FAFF;}

.content_w{ margin-top: 20px;}
.content_w h3 {line-height: 40px;color: #38485A;font-size: 18px;border-bottom: 1px solid #E6E6E6;height: 40px;}
.content_w ul li{ margin-top: 15px; font-size:12px; list-style:lower-latin; margin-left: 20px; text-indent: 5px;}
.content_w ul li a{ color: #333!important;}

.content_y{ margin-top: 20px;}
.content_y h3 {line-height: 40px;color: #38485A;font-size: 18px;border-bottom: 1px solid #E6E6E6;height: 40px;}
.content_y .yqlj{background-color:#FFF; width: 100%; border: #e9e9e9 1px solid; box-sizing:border-box; margin-top: 20px; padding: 20px 0px;}
.content_y .yqlj ul li{float: left; width: 33%; text-align: center; font-size: 12px;}
.content_y .yqlj::after{ content: ""; clear: both; zoom: 1;}
.content_y .yqlj::before{ content: ""; clear: both; zoom: 1;}
.content_y .yqlj ul li a{color: #666!important;}
</style>
