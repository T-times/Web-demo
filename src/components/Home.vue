<template>
  <div>
  <div class="body">
    <div class="logo">
          <div>
           <img src="@/assets/happy.gif">  
           <p>{{msg}}</p>
           <p>{{msg2}}</p>
          </div>
  </div>
    <div class="right">
       <!--  第二季菜单 -->
       <h1>记账小管家</h1>
       <div class="nav-tab">
        <div class="nav-item">
             <span>用户名：</span><input v-model.lazy.trim="userName" type="text" placeholder="请输入您的姓名">
        </div>
        <div class="nav-item">
           <span>密&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input v-model.lazy.trim="userPass" type="password" placeholder="请输入您的密码">        
        </div>
        <div class="nav-item">
          <button class="button1" v-on:click="login()">登陆</button>
          <button v-on:click="zhuce()">注册</button>
        </div>   
      </div>
      <transition name="slide-fade">
         <div class="tip-div">
             <span>{{tipMsg}}</span>
          </div>
       </transition>
<!--         <div>
          <router-view></router-view>
        </div> -->
    </div>
  </div>
    <footer>
        092216115陶应健@2018.6
    </footer>
</div>
</template>
<script>
 import Bill from '@/components/Payments'
export default{
  name: 'Home',
  data () {
    return {
      title: '记账小管家',
      msg: '天啦噜，又到了月末了!!!!!!',
      msg2: '赶快登陆查看您的账单吧~',
      userName: '',
      userPass: '',
      tipMsg: '',
      image: require('@/assets/logo.jpg')
    }
  },
  methods: {
    login: function(){
      if(this.userName.trim()==Bill.userName&&this.userPass.trim()==Bill.userPass){
        sessionStorage.setItem('userName',this.userName.trim());
        sessionStorage.setItem('userPass',this.userPass.trim());
        this.tipMsg='';
        this.$router.push('/content/user');
      }else{
        this.tipMsg='用户名或密码错误...';
      }
      this.userName='';
      this.userPass='';
    },
    zhuce: function(){
      this.$router.push('/content1/zhuce');
    }
  }
}
</script>
<style scoped>
  h1{
    margin-left: 200px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  img{
    width:80%;
    height:80%;
    margin-top: 20px;
  }
  span{
    margin-left: 150px;
  }
.tip-div{
  color:red;
  text-align: center;
}
/*动画*/
.slide-fade-enter-active {
  transition: all 2.2s ease;
}
.slide-fade-leave-active {
  transition: all 3.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(20px);
  opacity: 0;
}
  p{

  }
  .body{
    display: flex;
    flex-direction: row;
    margin:10px; 
  }
  .logo{
  display: flex;
  margin-left: 100px;
  flex:1;
  flex-wrap: wrap;
}
  .left{
    margin-left: 43%;
    display: flex;
  }
  .right{
    display: flex;
    flex-direction: column;
    flex:1;
  }
  .nav-tab{
  padding: 20px;
  opacity: 0.5; 
  /*background-color: #eee;*/
  border-radius: 5px;
}
/*button{
  padding: 5px;
  margin-left: 100px;
  margin-right: 10px;
  padding-right: 20px;
  padding-left: 20px;
}*/
button{
  background-color: green;
  border-radius: 5px;
  padding: 20px;
  margin-top:20px;
  margin-left: 80px;
}
.button1{
  background-color: green;
  border-radius: 5px;
  padding: 20px;
  margin-top:20px;
  margin-left: 150px;
}
.nav-item{
  padding: 10px;
  width: 500px;
  color: black;
  flex-direction: row;
  background-color: #eee;
  border-radius: 5px;
}
.nav-item.active{
  background-color: black;
}
/*footer{
  display: flex;
  margin-top: 50px; 
  margin-left: 20%;
  background-color: orange;
  align-items: center;
  text-align:center;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 2;
}*/
footer{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  text-align: center;
  padding: 0.2em;
  color: white;
  padding: 10px;
}
</style>
