<template>
  <div id="jsxq">    
    <content class="content">
      <div class="left">
        <div class="content_sy">
          <h2>
            <span>
              <router-link to="/">回到主页</router-link>
            </span>
            <b>最新</b>文章
          </h2>
          <div v-for="item in content" v-bind:key="item.id" class="con_one">
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
      <slot name="v-right" v-bind:hello="content"></slot>
      <div style="clear:both"></div>
    </content>   
  </div>
</template>

<script>
export default {
  name: "jsxq",
  data() {
    return {
      content: [
        {
          id: 1,
          list: "加油加油加油新的一天",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router: "/content/1",
          pic_href: require("@/assets/images/content/w1.jpg"),
          content:
            "今天又是失业的一天，在家里撸vue,很多家公司要求会vue,自己都学习了下，感觉很简单。多学还是有好处的、平时打游戏打多了。怪自己不够努力！！真的很烦。这已经是失业快一个月了~~vue相对还是比较简单把！！",
          Onclick: "30"
        },
        {
          id: 2,
          list: "2019年，新的开始",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router: "/content/2",
          pic_href: require("@/assets/images/content/w2.jpeg"),
          content:
            "1:这世上所有的久处不厌，都是因为用心。新的一周，早安！2:新的一周又开始啦，元气满满再出发，继续努力，星期一，早安！3:不管什么天气，记得随时带上自己的阳光。新的一周，新的开始！4:在变幻的生命里，岁月是最大的小偷，尽自己所能，不辜负，不遗憾。5:想编织未来的美梦，现在正是时候，掌握现在，拥有一切，拥有生命，周一，早安！",
          Onclick: "30"
        },
        {
          id: 3,
          list: "记录地铁一幕",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router: "/content/3",
          pic_href: require("@/assets/images/content/w3.jpg"),
          content:
            "晚上下班回家，坐地铁的时候，看见一个男生，约莫二十出头的年纪，他一边打电话一边啜泣，他说今天一天都在公司培训，没有时间看手机。故意压低沙哑的嗓音，说一切都好，让听筒对面的那个人放心。我不知道电话对面那个人是谁，是父母，还是爱人，总之是他在意的人，他一接起电话，眼泪就流下来了。他低着头，努力掩饰着那个真实的自己。挂掉电话，他一直在沉思，依旧抽泣着，好像比刚才更悲伤了。我抬头看了看周围那些陌路人，疲惫的神态里藏着他们自己的故事，挂着淡淡的微笑，藏匿着说不出的无奈。我知道，没有人会注意这些，低着头玩消消乐的那个姑娘，一关又一关的闯着；还有那个挎着紫色的背包的那个大姐，手扶着把手，摇摇晃晃的撞到了身边的人，很歉意得摆摆手；还有那个嚷着吃糖果的小女孩，扎着可爱的冲天辫，咿咿呀呀得喊着糖，糖，摇晃着妈妈的手，妈妈宠溺地看着闺女，摸摸她的头，说下了地铁就给她买。",
          Onclick: "30"
        },
        {
          id: 4,
          list: "《活着》书评",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router: "/content/4",
          pic_href: require("@/assets/images/content/w4.jpeg"),
          content:
            "前一段时间，利用晚上空闲时间看完的。我和同事说，我要看《活着》这本书，听别人说这是一本让人绝望的书。同事说，你在孕期中，就不要看这么悲观的书了。我说没有绝望哪来的希望，我还是执拗的翻开这本书，印入眼帘的一个枯瘦的老人...",
          Onclick: "30"
        },
        {
          id: 5,
          list: "2018上半年，琐碎心情",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router: "/content/5",
          pic_href: require("@/assets/images/content/w5.jpg"),
          content:
            "18年已过多半，我依旧还是那句，真的好久好久没有更新博客了。记得18年初的时候，曾计划着这一年游遍大江南北，和朋友排好的日程，旅行不是一次出行，也不只是一个假期。旅行是一个过程，一次发现。是一个自我发现的过程。真正的旅行让我们直面自我。旅行不仅让我们看到世界，更让我们看到自己在其中的位置。究竟，是我们创造了旅行。究竟，是我们创造了旅行。",
          Onclick: "30"
        }
      ]
    };
  },  
  methods:{
     chartString:function(obj){
         return obj.length > 90 ? obj.slice(0, 90) + "..." : obj.content; 
     }
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
