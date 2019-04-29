<template>
    <nav class="nav">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"      
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="is in list">                                        
        <el-menu-item v-bind:key="is.id"><router-link :to='is.url'>{{is.name}}</router-link></el-menu-item>
        <!--
          <el-submenu v-else='' v-bind:key="is.id">
                <template slot="title">{{is.name}}</template>                
                <el-menu-item v-for="childer in is.children" v-bind:key="childer.id"><router-link :to='childer.url'>{{childer.name}}</router-link></el-menu-item>                
        </el-submenu>  
         -->
      </template>
    </el-menu>    
    <div class="sear">
        <div class="input_content"><el-input v-model="input" placeholder="请输入内容"></el-input></div>
        <div class="input_sear"><el-button type="primary" icon="el-icon-search">搜索</el-button></div>
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
          children:[]            
        },
        {
          id: 2,
          name: "心情随笔",
          url: "/xqsb",
          is_block: "nav_css1",
          children:[]    
        },
        {
          id: 3,
          name: "聊天室",
          url: "javascript:void",
          is_block: "nav_css1",
          children:[]
        },
        {
          id: 4,
          name: "记录心情",
          url: "/jsxq",
          is_block: "nav_css1",
          children:[]
        },
        {
          id: 5,
          name: "个人归档",
          url: "/grgd",
          is_block: "nav_css1",
          children:[]
        },
        {
          id: 6,
          name: "table与echart",
          url: "/echart",
          is_block: "nav_css1",
          children:[]
        },
        {
          id: 7,
          name: "关于我",
          url: "/gyw",
          is_block: "nav_css1",
          children:[]
        }
      ],
      activeIndex: "1",     
      input: ''
      }
  },
 
}
</script>

<style scoped>
   .nav{display: -webkit-flex; justify-content: center; flex-wrap: nowrap; background: rgb(84, 92, 100);width: 100%; min-width: 1140px;}
   .sear{ margin-top: 10px; margin-left: 100px; display: -webkit-flex; flex-wrap: nowrap;}
   .sear .input_content{ width: 200px; margin-left: -70px;}
   .sear .input_sear{ width: 60px;}
</style>
