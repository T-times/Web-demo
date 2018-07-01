<template>
	<div>
	<div class="right">
       <!--  第二季菜单 -->
       <h1>欢迎注册</h1>
       <div class="nav-tab">
        <div class="nav-item">
             <span>用&nbsp;&nbsp;户&nbsp;&nbsp;名：</span><input v-model.lazy.trim="userName" type="text" placeholder="请输入您的姓名">
        </div>
        <div class="nav-item">
           <span>密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span><input v-model.lazy.trim="userPass" type="password" placeholder="请输入您的密码">        
        </div>
        <div class="nav-item">
           <span>确认密码：</span><input v-model.lazy.trim="userPass1" type="password" placeholder="请再次输入您的密码">        
        </div>
        <div class="nav-item">
          <button class="button1" v-on:click="check()">注册</button>
          <button v-on:click="login()">登陆</button>
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
</template>
<script>
import Bill from '@/components/Payments'
export default {
  name: 'Zhuce',
  data () {
    return {
      userName: '',
      userPass: '',
      userPass1: '',
      tipMsg: ''
    }
  },
  methods: {
  check: function(){
      if(this.userPass==this.userPass1){
        this.tipMsg='';
        Bill.userName = this.userName;
        Bill.userPass = this.userPass;
        this.tipMsg='';
        if(window.confirm('恭喜你注册成功，希望现在返回到登陆页面？')){
                 //alert("确定");
                 this.$router.push('/');
			}
			else{
				//最好能刷新一下刚刚得数据
				this.$router.push('/content1/zhuce');
			}
      }else{
        this.tipMsg='密码不一致...';
      }
  },
  login: function(){
     this.$router.push('/');
  }
 }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .right{
    display: flex;
    flex-direction: column;
    flex:1;
  }
  span{
  	margin-left: 100px;
  }
  .button1{
  background-color: green;
  border-radius: 5px;
  padding: 20px;
  margin-top:20px;
  margin-left: 100px;
}
  .nav-tab{
  padding: 20px;
  opacity: 0.5; 
  /*background-color: #eee;*/
  border-radius: 5px;
}
button{
  background-color: green;
  border-radius: 5px;
  padding: 20px;
  margin-top:20px;
  margin-left: 80px;
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
</style>
