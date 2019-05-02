<template>
  <div id="jsxq" v-wechat-title="$route.meta.title">    
    <content class="content">
      <div class="left">
        <div class="content_sy">
          <h2>
            <span>
              <router-link to="/">回到主页</router-link>
            </span>
            <b>最新</b>文章
          </h2>
          <div v-for="item in revercontent" v-bind:key="item.id" class="con_one">
            <figure>
              <router-link :to="item.router">
                <img
                  :src="item.pic_href"
                  :alt="item.list"
                  style="width: 167.5px; height: 137px; display: block;"
                >
              </router-link>
            </figure>
            <div class="figure_right">
              <h3>
                <router-link :to="item.router">{{item.list}}</router-link>
              </h3>
              <p>
                {{chartString(item.content)}}
                <router-link :to="item.router">[[详情]]</router-link>
              </p>
              <p>
                <span class="dtime f_r">{{item.data}}</span>
                <span class="viewnum f_r">{{item.Onclick}}</span>
              </p>
            </div>
            <div style="clear:both"></div>
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
  name: "grgd",
  data() {
    return {
        content:[]
    };
  },  
  props:{
    hello:{
     type:Object,
     required:true
    }
  },
  computed:{
     revercontent(){
         return this.hello.grgd
     },     
  },
  methods:{
     chartString:function(obj){
         return obj.length > 90 ? obj.slice(0, 90) + "..." : obj.content; 
     }
  },
};
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
  color: #666 !important;
}

.con_one {
  padding: 30px 0;
  position: relative;
  border-bottom: #bfab86 1px solid;
  overflow: hidden;
}

.con_one:hover {
  background-color: #fff;
}

.con_one figure {
  float: left;
  width: 25%;
  overflow: hidden;
  cursor: pointer;
}
.con_one .figure_right {
  float: left;
  width: 70%;
  margin-left: 2%;
}
.con_one .figure_right h3 {
  font-size: 16px;
  font-weight: bold;
  transition: all 0.5s;
  margin-bottom: 10px;
}
.con_one .figure_right h3 a {
  color: #474645 !important;
}
.con_one .figure_right p {
  color: #777;
  font-size: 12px;
  line-height: 24px;
}
.con_one .figure_right p a {
  color: #759b08 !important;
  padding-left: 5px;
}
.con_one .figure_right p span {
  margin: 0 10px 0 0;
  padding-left: 20px;
}
.con_one .figure_right p .dtime {
  background: url("~@/assets/images/mynewsbg.png") no-repeat center;
  background-position: 0px -47px;
}
.con_one .figure_right p .viewnum {
  background: url("~@/assets/images/mynewsbg.png") no-repeat center;
  background-position: 0px -72px;
}
</style>
