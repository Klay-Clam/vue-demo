// 初始化组件
<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">首页</router-link></li>
          <li><router-link to="/time-entries">计划列表</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="container" id="app">
      <div class="col-sm-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
export default {
  name: 'app',
  components:{'sideBar':Sidebar}
} 
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
header{
  width: 100%;
  height: 100px;
  background-color: #eeeeee;
}
header img{
  width: 100px;
  height: 100px;
  line-height: 100px;
}

/* footer style */
.footer {
    background-color: #80BD01;
    position: fixed;
    bottom: 0;
    left:0;
    height: 100px;
    width: 100%;
    font-family: 'Avenir',Helvetica,Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
}
.footer ul{
    list-style: none;
    border:none;
    background-color: none;
    margin:0;
    width:100%;
    height: 100px;
    padding: 0;
    text-align: center;
}
.footer li{
    display: inline;
    /* height: 100px; */
}
.footer li a{
    display:inline-block; 
    padding:0; 
    height:100px;
    width: 17%; 
    line-height:100px;
    text-decoration: none;
}
.footer li a:active{
    color: white;
}
.footer li a:hover{
    color: white;
    cursor: pointer;
}
</style>
