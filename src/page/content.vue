<template>
    <div id="content">           
       <content class="content">
         <div class="left">             
                 <div v-for="item in r_content" v-bind:key="item.id">
                     <div v-if="item!=''" v-wechat-title="$route.meta.title=item.list">
                        <div class="news_title">{{item.list}}</div>
                        <div class="news_author"><span class="au01">{{item.name}}</span><span class="au02">{{item.data}}</span></div>
                        <div class="news_content" v-html="item.content"></div>
                     </div>
                 </div>             
         </div>
         <slot name="v-right"></slot>
         <div style="clear:both"></div>             
       </content>      
    </div>
</template>

<script>
export default {
   name:"content",
   data(){
     return {
       id:this.$route.params.id,      
     }    
   }, 
   props:{
      hello:{
          type:Object,
          required:true
      }
   }, 
   computed:{      
      r_content:function(){                    
          return this.s_hello.map(item=>{
              if(item.id == this.id){                  
                  return item;
              }    
              else{
                  return ""
              }          
          })          
      }, 
      s_hello:function(){
          return this.hello.jlrz
      }        
   },
   watch:{       
         '$route'( to ){
             this.id = to.params.id;                                       
         }
   },   
}
</script>

<style scoped>
 .content {
  width: 1000px;
  display: block;
  margin: 30px auto;
 }
 .left {
  float: left;
  width: 570px;
 }
 .news_title {
    font-size: 24px;
    font-weight: 400;
    padding: 20px 0 10px 0;
    color: #38485A;
}
 .news_author {
    width: 100%;
    color: #999999;
    line-height: 18px;
}
.news_author span {
    margin-right: 20px;
    padding-left: 20px;
}
.au01 {
    background: url("~@/assets/images/author2.png") no-repeat left center;
}
.au02 {
    background: url("~@/assets/images/date.png") no-repeat left center;
}
.news_content{ margin-top: 20px; line-height: 30px; text-indent: 20px; color: #5d5d5d; font-size: 16px;}
</style>
