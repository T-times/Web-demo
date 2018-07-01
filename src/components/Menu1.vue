<template>
  <div class="container">
    <div>
    <router-view/>
  </div>
    <div class="footer">
      <p>092216115陶应健@2018.6</p></div>
  </div>
</template>
<script>
export default {
  name: 'App'
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
  background-color: #eee;
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
  background-color: green;
  border-bottom: 1px dotted #999;
  padding: 10px;
  margin: 5px;
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
