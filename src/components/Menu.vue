<template>
  <div id="app">
    <div class="main">
      <div class="nav">
          <img src="@/assets/welcome.gif">
          <router-link to="/content/user" :class="page=='User'?'nav-item active':'nav-item'"><p>用户信息</p></router-link>
          <router-link to="/content/manage" :class="page=='Manage'?'nav-item active':'nav-item'"><p>数据管理</p></router-link>
          <router-link to="/content/showchart" :class="page=='ShowChart'?'nav-item active':'nav-item'"><p>图表显示</p></router-link>
          <router-link to="/" :class="page=='User'?'nav-item active':'nav-item'"><p>退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</p></router-link>
      </div>
      <div class="page">
         <!--  用于渲染匹配的组件 -->
         <router-view/>
      </div>
    </div>
    <div class="footer">
      <p>092216115陶应健@2018.6</p></div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      page: ''
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
router-link p{
  padding: 20px;
  background-color: green;
  border-radius: 5px;
}

body{
  margin:0;
}
img{
  margin-top: 30px;
  margin-bottom: 60px;
  width: 60%;
  height: 10%;
}
.main{
  display: flex;
  background-color: #f5cd19;
  height: 1000px;
}
.nav{
  flex: 1;
  text-align: center;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav-item{
  background-color: #f5cd19;
  padding: 10px;
  text-decoration-line: none;
}
.nav-item:hover{
  background-color: #eee;
  width:100%;
  padding: 10px;
  text-decoration-line: none;
}
.page{
  flex: 4;
  background-color: #fff;
  padding: 1em;
}
.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  text-align: center;
  padding: 0.2em;
  color: white;
}
</style>
