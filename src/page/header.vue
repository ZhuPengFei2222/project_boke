<template>
    <header class="header">        
      <div class="head_content">
        <div class="transition-box animated bounceInLeft" style="margin-top:5%;">欢迎来到我的博客</div>        
        <div class="transition-box animated bounceInLeft">小猪</div>        
      </div>
    </header>
</template>

<script>
import 'animate.css'
export default {
  name:'header',
  data(){
    return {        
        
     }
  }
}
</script>

<style>
  .header{ height: 200px; background: url('~@/assets/images/top_b.jpg'); display: -webkit-flex;  flex-direction: column }
  .head_content{ width: 1000px; margin:0 auto;}
  .header:after{ content: " "; clear:both; zoom: 1;}
  .header::before{ content: " "; clear: both; zoom: 1;}
  .transition-box {
     color: #fff;
     font-size: 32px;
     font-weight: bold;        
  }
</style>
