<template>
  <div class="view" id="app">   
    <v-header></v-header>
    <v-nav></v-nav>
    <router-view v-bind:hello="content">
      <div slot="v-right">
        <v-right v-bind:hello="content"></v-right>
      </div>
    </router-view> 
    <v-footer></v-footer>    
  </div>
</template>

<script>

import header from "./page/components/header";
import nav from "./page/components/nav";
import right from "./page/components/right";
import footer from "./page/components/footer";
export default {
  data() {
    return {
       content: {
        "jlrz":
        [{
          id: 1,
          list: "加油加油加油新的一天",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router:"/contents/1",
          pic_href:require("@/assets/images/content/w1.jpg"),
          content:"<p>今天又是失业的一天，在家里撸vue,很多家公司要求会vue,自己都学习了下，感觉很简单。多学还是有好处的、平时打游戏打多了。怪自己不够努力！！真的很烦。这已经是失业快一个月了~~vue相对还是比较简单把！！</p><p style='text-indent:0px'><img src='"+require("./assets/images/content/1/1.jpg")+"' style='width:100%;margin-top:10px' /></p><p>努力努力努力努力！！！！！！！！</p>",
          Onclick: "30"
        },
        {
          id: 2,
          list: "2019年，新的开始",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router:"/contents/2",
          pic_href:require("@/assets/images/content/w2.jpeg"),
          content:"<p>1:这世上所有的久处不厌，都是因为用心。新的一周，早安！</p><p>2:新的一周又开始啦，元气满满再出发，继续努力，星期一，早安！</p><p>3:不管什么天气，记得随时带上自己的阳光。新的一周，新的开始！</p><p>4:在变幻的生命里，岁月是最大的小偷，尽自己所能，不辜负，不遗憾。</p><p>5:想编织未来的美梦，现在正是时候，掌握现在，拥有一切，拥有生命，周一，早安！</p>",
          Onclick: "30"
        },
        {
          id: 3,
          list: "记录地铁一幕",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router:"/contents/3",
          pic_href:require("@/assets/images/content/w3.jpg"),
          content:"<p>晚上下班回家，坐地铁的时候，看见一个男生，约莫二十出头的年纪，他一边打电话一边啜泣，他说今天一天都在公司培训，没有时间看手机。故意压低沙哑的嗓音，说一切都好，让听筒对面的那个人放心。我不知道电话对面那个人是谁，是父母，还是爱人，总之是他在意的人，他一接起电话，眼泪就流下来了。他低着头，努力掩饰着那个真实的自己。挂掉电话，他一直在沉思，依旧抽泣着，好像比刚才更悲伤了。我抬头看了看周围那些陌路人，疲惫的神态里藏着他们自己的故事，挂着淡淡的微笑，藏匿着说不出的无奈。我知道，没有人会注意这些，低着头玩消消乐的那个姑娘，一关又一关的闯着；还有那个挎着紫色的背包的那个大姐，手扶着把手，摇摇晃晃的撞到了身边的人，很歉意得摆摆手；还有那个嚷着吃糖果的小女孩，扎着可爱的冲天辫，咿咿呀呀得喊着糖，糖，摇晃着妈妈的手，妈妈宠溺地看着闺女，摸摸她的头，说下了地铁就给她买。</p><p>我下了地铁，坐在候车的椅子上开始写这篇文字。我觉得我应该记录下来，说不定我明天看到的这一切将永远不会出现。生活依旧继续，故事依旧书写，我依旧会遇到不同的陌路人，悲痛与欢笑洒落在每个角落里，不以物喜不以己悲，平和的调整心态。那个哭泣的男生多么像刚来北京的我，一个人在天桥上，委屈无人倾诉，带着一张涂满辣酱的手撕饼，就着风咽到肚子里，透心凉的感觉只有自己清楚，看着天桥下来来往往的车辆，那五光十色的霓虹灯闪烁着耀眼的光芒，而自己却身单力薄，感觉这个城市很大，很大。爸妈打电话也总是报喜不报忧，总觉得自己很强大，穿上沉重的盔甲扮演着无所不能的角色，每当老妈一句还好吗？击溃内心所有的防线，情绪倾泻而来。</p>",
          Onclick: "30"
        },
        {
          id: 4,
          list: "《活着》书评",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router:"/contents/4",
          pic_href:require("@/assets/images/content/w4.jpeg"),
          content:"<p>前一段时间，利用晚上空闲时间看完的。我和同事说，我要看《活着》这本书，听别人说这是一本让人绝望的书。同事说，你在孕期中，就不要看这么悲观的书了。我说没有绝望哪来的希望，我还是执拗的翻开这本书，印入眼帘的一个枯瘦的老人，拉着一头老黄牛，在夕阳西下讲着曾经好几十年前发生的事，这个老人叫富贵。</p><p>从前的他是一个纨绔子弟，整天出入于赌场，家产败光了，爹被气死了，一下子由阔少爷变成一个穿粗布破衫的平民老百姓。本想着安稳的过过穷苦日子，下田耕地，一辈子就这样平平淡淡的过着也挺好。可谁知，娘病了，去城里找郎中的途中被抓了壮丁，一走好几年，没有了音信。过了几年，摸爬滚打死里逃生回来了，女儿凤霞却哑了，记得离家的时候凤霞扯着衣角嚷嚷着爹爹，可如今却不会说话了。苦难总是来得猝不及防，可总归是活着有点盼头。儿子有庆已长大了，一双儿女，破败的茅屋，困难里还是有甜甜的味道。</p><p>在那个年代，经历了人民公社，大炼钢铁，文化大革命，闹饥荒，所有的一切似乎命中注定的砸到富贵这一家人身上。儿子有庆突然死去，富贵不愿告诉生病的妻子，一个人抱着有庆冰凉的身体，他不曾想，曾经那个脱掉鞋子跑步跑的飞快的小伙子一下子就没了，那个疼惜羊羔每天都去喂草的小伙子没了，就这样没了，他感慨着老天不公，生命无常。月亮照在路上，像是洒满了盐，那种伤口上撒盐的比喻似乎是为他量身定制，他狠自己没有在有庆活着的时候疼惜他，他责备懊悔都无济于事，当生命结束的那一刻，就如烛台前的蜡烛一样，灭了就是灭了。我强忍着泪水继续读，读到凤霞生娃大出血也没有命，再也看不下去了，命运多么不公，生命里的难得的温情被一次次撕扯的粉碎。凤霞走了，家珍走了，凤霞的丈夫在一次出工的时候也走了，独留下一个苦命的儿苦根。苦根跟着外公，他还不知道什么是苦难，什么是死亡，他只知道现在疼他爱他的只有外公一个人了。可是独留的苦根也走了，留给富贵的只有一生的回忆，一世的孤独。他用自己积攒的钱买了一头老黄牛，那头老黄头成了富贵倾诉的对象，他总是喊着有庆，凤霞，家珍的名字，每一个名字都是一段温情，曾经拥有的时候，他不懂的珍惜，可如今那份温情成了追忆的年华，他却迫切的想抓住。</p>",
          Onclick: "30"
        },
        {
          id: 5,
          list: "2018上半年，琐碎心情",
          name: "猪",
          data: "2019-04-21 17:25:38 ",
          router:"/contents/5",
          pic_href:require("@/assets/images/content/w5.jpg"),
          content:"<p>18年已过多半，我依旧还是那句，真的好久好久没有更新博客了。记得18年初的时候，曾计划着这一年游遍大江南北，和朋友排好的日程，旅行不是一次出行，也不只是一个假期。旅行是一个过程，一次发现。是一个自我发现的过程。真正的旅行让我们直面自我。旅行不仅让我们看到世界，更让我们看到自己在其中的位置。究竟，是我们创造了旅行。究竟，是我们创造了旅行。</p><p>人生就像一次旅行，在乎的不是目的地，而是沿途的风景，以及看风景的心情。旅行不会因为美丽的风景终止。走过的路成为背后的风景，不能回头不能停留，若此刻停留，将会错过更好的风景，保持一份平和，保持一份清醒。享受每一刻的感觉，欣赏每一处的风景，这就是人生。</p><p>如果你不出去走走，你就会以为这就是世界。所以，不旅行的人，只能看到世界的一页！</p><p>对未知的恐惧，对舒适的留恋将阻止我们成为一个旅行者走上的冒险旅程。可是，当你作出这样的选择，你就永远不会后悔。人生很多事情就像是旅行一样，当你做出决定并迈出第一步的时候，最困难的那部分其实就已经完成了。</p>",
          Onclick: "30"
        },
        {
          id: 6,
          list: "又是复杂的一天,面试了一家",
          name: "猪",
          data: "2019-04-24 20:34:01 ",
          router:"/contents/6",
          pic_href:require("@/assets/images/content/1/2.jpg"),
          content:"<p>今天又是复杂的一天,面试了一家，谈的很开心，感觉面试我的小姐姐的人很好，但是她说她们公司做电子商务的，我一般做的是门户网站，电子商务网站我知道 很多购物车等算法，自己却只知道的算法只有冒泡,快速，二叉树。</p><p>话说很好，但是很遗憾，还是平时积累知识少了。可惜了。可惜了。我要在努力努力，加油</p><img src='"+require("./assets/images/content/1/2.jpg")+"' style='width:100%;margin-top:10px' />",
          Onclick: "30"
        }],
        "grgd":
        [{
          id: 1000,
          list: "javascript:基本类型、引用类型、基本包装类型",
          name: "猪",
          data: "2019-04-30 17:25:38 ",
          router:"/contents/1000",
          pic_href:require("@/assets/images/content/w1000.jpg"),
          content:"<p>基本类型</p><p>string、number、boolean、undefined、Null、symbol(es6)</p><p>引用类型</p><p>Object、array</p><p>基本类型和引用类型的区别在于:</p><p>引用类型有属性和方法，当两个引用类型都指向一个值，改变一个值的属性，别一个也会发生变化！</p><p>基本包装类型</p><p>Boolean、Number、String</p><p>var s1='some text'</p><p>var s2=s1.substring(2);</p>",
          Onclick: "30"
        },
        {
          id: 1001,
          list: "javascript:cookie和localstorage sessionstorage的区别",
          name: "猪",
          data: "2019-04-30 17:25:38 ",
          router:"/contents/1001",
          pic_href:require("@/assets/images/content/w1000.jpg"),
          content:"<p>cookie:</p><p>内存大小4096字节(4kb),数据每次关闭打开浏览器都会再次发生信息给服务器请求</p><p>localstorage:</p><p>内存大小5mb,会把数据永久的保存在本地</p><p>sessionstorage:</p><p>关闭浏览器会直接释放掉</p>",
          Onclick: "50"
        },
        {
          id: 1002,
          list: "javascript:常用的数组排队方法",
          name: "猪",
          data: "2019-05-1 17:25:38 ",
          router:"/contents/1002",
          pic_href:require("@/assets/images/content/w1000.jpg"),
          content:"<p>push():</p><p>是将字符串添加到数组的末尾</p><p>var s = [];</p><p>for(let i =0;i<10;i++){s.push(i)}</p><p>console.log(s)</p><p>输出结果为：(10)[0,1,2,3,4,5,6,7,8,9]</p><p>unshift():</p><p>是将字符串添加到数组的前端</p><p>var s = [];</p><p>for(let i =0;i<10;i++){s.unshift(i)}</p><p>console.log(s)</p><p>输出结果为：(10)[9,8,7,6,5,4,3,2,1,0]</p><p>pop():</p><p>取数组的最后一项值</p><p>var d = [a,b,c,d,e]</p><p>var f = d.pop()</p><p>console.log(f)</p><p>输出结果为：e</p>",
          Onclick: "50"
        },
        {
          id: 1003,
          list: "javascript:常用的排序",
          name: "猪",
          data: "2019-05-1 17:25:38 ",
          router:"/contents/1003",
          pic_href:require("@/assets/images/content/w1000.jpg"),
          content:"<p>冒泡排序:</p><p>var sum = [1,3,2,5,4];</p><p>var array = [];</p><p>for(let i = 0 ; i < sum.length ; i++)</p><p>{</p><p>for(let j = 0; j < sum.length -1-i ; j++)</p><p>{</p><p>var temp = ;</p><p>}</p><p></p><p>}</p>",
          Onclick: "50"
        },
        {
          id: 1004,
          list: "css:盒子模型",
          name: "猪",
          data: "2019-05-1 17:25:38 ",
          router:"/contents/1004",
          pic_href:require("@/assets/images/content/w1000.jpg"),
          content:"<p style='text-indent:0px;text-align:center'><img src='"+require("./assets/images/hzmx.png")+"' /></p><p>盒子模型:分为content(width,height)、padding、margin、border</p><p>content为盒子大小</p><p>padding为内边距</p><p>margin为外边距</p><p>border为边线</p><p>盒子模型有2个属性:box-sizing:content-box(向外扩张);box-sizing:border-box(向内扩张)</p><p>box-sizing:content-box(向外扩张):宽高为200的盒子,设置paading:20px,宽高:240px,在设置border:20px,宽高:280px;</p><p>box-sizing:content-box(向内扩张):宽高为200的盒子,设置paading:20px,宽高:200px,在设置border:20px,宽高:200px;</p>",
          Onclick: "50"
        },
        {
          id: 1005,
          list: "javascript:常用的数组操作",
          name: "猪",
          data: "2019-05-02 17:25:38 ",
          router:"/contents/1005",
          pic_href:require("@/assets/images/content/w1000.jpg"),
          content:"<p>push：</p><p>把一个单位添加到数组的尾部</p><p>unshift：</p><p>把一个单位添加到数组的头部</p><p>sort(参数为行a,b)：</p><p>排序</p><p>slice(参数为行1,2,3,4)：</p><p>删除数据第几行</p><p>splice(参数为行第几行x,删除几行x)：</p><p>删除数据第几行</p>",
          Onclick: "50"
        },
        ] 
      },      
    };
  },  
 
  components: {
    "v-header": header,
    "v-nav": nav,
    "v-right": right,
    "v-footer": footer
  }, 
};
</script>

<style>
#app {
  width: 100%;
}
</style>
