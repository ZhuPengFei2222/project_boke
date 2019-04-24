<template>
  <div id="index">          
    <content class="content">
      <div class="left">
        <div class="hdp">
          <el-carousel :interval="5000" arrow="never" loop="flase">
            <el-carousel-item v-for="item in pic" :key="item">
              <h3>
                <img :src="item.pic_url" width="400" height="300">
              </h3>
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="hdp_bq">
          <div class="bx_hdq">
            <h3>关于博主</h3>
            <p>个人资料：男，九零后，IT男，双子座，IT界最不着调的程序员 爱好：打游戏</p>
          </div>
          <div
            class="bx_hdq"
            style="border-top:0; border:1px solid #CCEFF5; background-color:#FAFCFD"
          >
            <h3>关于博客</h3>
            <p>欢迎大家来猪博客跑堂儿，有任何问题咨询，发邮件给我就行。</p>
          </div>
        </div>
        <div style="clear:both"></div>
        <div class="content_sy">  
           <h2>
                <span><router-link to="/jsxq">更多</router-link></span>
                <b>最新</b>文章
            </h2>       
            <div v-for="item in hello" v-bind:key="item.id" class="con_one">
                <figure>
                    <router-link :to="item.router"><img :src="item.pic_href"  :alt="item.list" style="width: 167.5px; height: 137px; display: block;" /></router-link>                  
                </figure>
                <div class="figure_right">
                   <h3><router-link :to="item.router">{{item.list}}</router-link></h3>
                   <p>{{chartString(item.content)}}<router-link :to="item.router">[[详情]]</router-link></p>
                   <p><span class="dtime f_r">{{item.data}}</span><span class="viewnum f_r">{{item.Onclick}}</span></p>
                </div>
                <div style="clear:both"></div>
            </div>
        </div>
      </div>
      {{bb()}}
      <slot name="v-right"></slot>      
      <div style="clear:both"></div>     
    </content>   
  </div> 
</template>

<script>
export default {
  name: "index", 
  data() {
    return {
      pic: [
        {
          pic_url: require("@/assets/images/swiper/1.jpg")
        },
        {
          pic_url: require("@/assets/images/swiper/2.jpg")
        },
        {
          pic_url: require("@/assets/images/swiper/3.jpg")
        },
        {
          pic_url: require("@/assets/images/swiper/4.jpg")
        }
      ],     
    };
  },
  props:{
    hello:{
       type:Array,
       required:true
     }
  },
  watch:{
    
  }, 
  computed:{
     
      
  },
  methods:{
     chartString:function(obj){
         return obj.length > 90 ? obj.slice(0, 90) + "..." : obj.content; 
     },
     bb : function(){
         return this.$store.state.content;
     }
  },
  created: {
    //this.Axios.get(url,parmas:{a:1}).then(res=>{},res=>{})   
    
  },  
};
</script>

<style>

.content {
  width: 1000px;
  display: block;
  margin: 30px auto;
}
.left {
  float: left;
  width: 570px;
}
.hdp {
  float: left;
  width: 400px;
  height: 250px;
  vertical-align: middle;
}

.hdp_bq {
  float: left;
  width: 165px;
  color: #b3b3b3;
  font-size: 12px;
}
.hdp_bq h3 {
  font-size: 28px;
  color: #475669;
}
.hdp_bq .bx_hdq {
  padding: 16px;
  border: 1px solid #ffcc00;
}
.hdp_bq .bx_hdq p {
  margin-top: 10px;
  line-height: 20px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.content_sy h2 {
    font-size: 22px;
    font-weight: bold;
    line-height: 36px;
    color: #333;
    border-bottom: #db6d4c 4px solid;
    padding: 6px 0px;
}
.content_sy h2 span {
    float: right;
    font-size: 12px;
    font-weight: normal;
}
.content_sy h2 span a {
    display: inline-block;
    padding: 0 5px;
    color: #666!important;
}

.con_one{
    padding: 30px 0;
    position: relative;
    border-bottom: #BFAB86 1px solid;    
    overflow: hidden;
}

.con_one:hover{
    background-color: #fff;
}

.con_one figure {
    float: left;
    width: 25%;
    overflow: hidden;
    cursor: pointer;
}
.con_one .figure_right{float: left; width: 70%; margin-left: 2%;}
.con_one .figure_right h3{font-size: 16px;font-weight: bold;transition: all .5s;margin-bottom: 10px;}
.con_one .figure_right h3 a{color: #474645!important;}
.con_one .figure_right p{color: #777; font-size: 12px; line-height: 24px;}
.con_one .figure_right p a{ color: #759b08!important; padding-left: 5px;}
.con_one .figure_right p span { margin: 0 10px 0 0; padding-left: 20px;}
.con_one .figure_right p .dtime{background: url("~@/assets/images/mynewsbg.png") no-repeat center;background-position: 0px -47px;}
.con_one .figure_right p .viewnum{background: url("~@/assets/images/mynewsbg.png") no-repeat center;background-position: 0px -72px;}
</style>
