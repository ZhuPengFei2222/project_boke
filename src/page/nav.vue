<template>
    <nav class="nav">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="is in list">                           
        <el-submenu v-bind:index='is.id' v-if='is.children' v-bind:key="is.id">
             <template slot="title">{{is.name}}</template>                
                <el-menu-item v-for="childer in is.children" v-bind:key="childer.id" v-bind:index="is.id + '-' + childer.id"><router-link :to='childer.url'>{{childer.name}}</router-link></el-menu-item>                
        </el-submenu>       
        <el-menu-item v-bind:index='is.id' v-else='' v-bind:key="is.id"><router-link :to='is.url'>{{is.name}}</router-link></el-menu-item>
      </template>
    </el-menu>    
    <div class="sear">
        <div style="width:200px"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
        <div style="width:60px"><el-button type="primary" icon="el-icon-search">搜索</el-button></div>
    </div>
   </nav>
</template>

<script>
export default {
  data(){
      return{
           list: [
        {
          id: 1,
          name: "首页",
          url: "/",
          is_block: "nav_css1",
          children:false            
        },
        {
          id: 2,
          name: "心情随笔",
          url: "/xqsb",
          is_block: "nav_css1",
          children:false    
        },
        {
          id: 3,
          name: "追忆过去与遥望未来",
          url: "javascript:void",
          is_block: "nav_css1",
          children:[
               {
                   id:"8",
                   name:"遥望未来",
                   url:"/ywwl",
                   is_block:"nav_css1"
               },
               {
                   id:"9",
                   name:"追忆过去",
                   url:"/zygq",
                   is_block:"nav_css1"
               },               
          ]        
        },
        {
          id: 4,
          name: "记录心情",
          url: "/jsxq",
          is_block: "nav_css1",
          children:false
        },
        {
          id: 5,
          name: "个人归档",
          url: "/grgd",
          is_block: "nav_css1",
          children:false
        },
        {
          id: 6,
          name: "echart",
          url: "/echart",
          is_block: "nav_css1",
          children:false
        },
        {
          id: 7,
          name: "关于我",
          url: "/gyw",
          is_block: "nav_css1",
          children:false
        }
      ],
      activeIndex: "1",
      activeIndex2: "1",
      input: ''
      }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
   .nav{display: -webkit-flex; justify-content: center; flex-wrap: nowrap; background: rgb(84, 92, 100)}
   .sear{ margin-top: 10px; margin-left: 100px; display: -webkit-flex; flex-wrap: nowrap;}
</style>
