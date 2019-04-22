<template>    
    <footer>
        <div class="clearfox footer">
          <h1 class="animated bounceInLeft">很欢迎你来到猪的博客</h1>
          <p class="animated bounceInLeft">Release 2.6.1. Powered by jinkela-core 2.4.5.</p>        
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style>
  .clearfox::after{ clear: both; zoom: 1;}
  .clearfox::before{ clear: both; zoom: 1;}
  .footer{ background-color:gray; text-align: center; padding: 40px 0px;width: 100%; min-width: 1140px;}
  .footer h1{ color: #fff!important;}
  .footer p{ margin-top: 10px;color: #fff!important;}
</style>
