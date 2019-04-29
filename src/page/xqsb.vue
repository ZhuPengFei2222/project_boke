<template>
  <content class="content" v-wechat-title="$route.meta.title">
    <div class="left">
      <div class="topnews">
        <h2>
          <span>
            <router-link to='/'>返回首页&gt;&gt;</router-link>
          </span>
          <b>心情</b>随笔
        </h2>
        <div class="mood" v-for="item in xqsb_list" v-bind:key="item.id">
           <span class="tutime">2016-06-12</span>
           <p>{{item.content}}</p>
        </div>
      </div>
    </div>
    <slot name="v-right"></slot>
    <div style="clear:both"></div>
  </content>
</template>

<script>
export default {
  data() {
    return {
      xqsb_list:[
          {
              id:"1",
              data:"2019-06-12",
              content:"出来混，迟早会还的"
          },
          {
              id:"2",
              data:"2019-03-08",
              content:"不是所有鱼都生活在同一片海洋里。"
          },
          {
              id:"3",
              data:"2019-02-12",
              content:" 当你老了，白发苍苍，睡意朦胧，在炉前打盹，慢慢吟诵，梦见你当年的双眼，那柔美的光芒与青幽的晕影。 "
          },
          {
              id:"4",
              data:"2019-01-25",
              content:"你问我那么拼干嘛，我说我是一个惜时惜命的人。"
          },
          {
              id:"5",
              data:"2018-12-02",
              content:"岁月催人老，愿不忘初心。"
          },
          {
              id:"6",
              data:"2018-11-10",
              content:"你若盛开。清风徐来"
          },
          {
              id:"7",
              data:"2018-03-08",
              content:"年轻吗？不要紧，听过几首歌，爱过几个人，就老了。"
          },
          {
              id:"8",
              data:"2017-09-25",
              content:"已过了喜欢炫耀的年纪。遇到喜欢的事情就努力去做。"
          },
          {
              id:"9",
              data:"2016-03-03",
              content:"纵使家财万贯，难买太阳不下山"
          }
      ]
    };
  }
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
.topnews {
    margin: 20px 0;
}
.topnews h2 {
    font-size: 16px;
    font-weight: bold;
    line-height: 36px;
    color: #333;
    border-bottom: #db6d4c 4px solid;
}
.topnews h2 span {
    float: right;
    font-size: 12px;
    font-weight: normal;
}
.topnews h2 span a {
    display: inline-block;
    padding: 0 5px;
    color: #666!important;
}
.mood {    
    background: #fafafa;
    border: 1px solid #e0e0e0;
    color: #4d4d4d;
    line-height: 22px;
    padding-top: 21px;
    padding-left: 20px;
    padding-right: 77px;
    padding-bottom: 27px;
    margin-bottom: 10px;
    border-radius: 5px;
}
.tutime {
    background: url("~@/assets/images/datepng.png") no-repeat left center;
    padding-left: 20px;
    font-size: 14px;
    
}
.mood p {
    margin-top: 5px;
    font-size: 14px;
    word-break: break-all;
}
</style>
