<template>  
  <content class="con">          
    <div class="gyw">
      <div class="title">Hello,I am ZhuPengFei</div>
      <div class="content">
        <p style="text-align:center"><img src="@/assets/images/my_pic.jpg" width="300px" /></p>
        <p
          style="text-indent: 50px;"
        >我是一个web前端工程师,没事喜欢一个人研究不同的技术(主要vue,javascript,html5)、热爱打游戏、喜欢的游戏(dota,war3,吃鸡,王者荣耀),大家可以加我的联系方式。</p>
      </div>
    </div>
  </content>
</template>

<script>

export default {};
</script>

<style scoped>
.con {
  display: block;
  background:url("~@/assets/images/1.jpg") no-repeat center;
  background-size:100%;
  padding: 25px 0px;
}
.gyw {
  width: 1000px;
  height: 900px;
  margin: 0 auto; 
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.gyw .title {
  font-size: 64px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC";
}
.gyw .content {
  text-align: left;
  font-size: 24px;
  width: 500px;
  line-height: 35px;
  color: crimson;
}

</style>
