<template>
  <div class="body">
    <img src="@/assets/happy.gif">
    <!-- 添加用户名，用你注册的用户名Welcome -->
    <p>{{msg}} !</p>
    <h3>{{userName}} ~</h3>
    <p>{{msg2}}</p>
    <p>{{msg3}}</p>
  </div>
</template>

<script>
import Bill from '@/components/Payments'
export default {
  name: 'user',
  data () {
    return {
      msg: 'Hello',
      msg2: '天啦噜，又到了月末了!!!!!!',
      msg3: '赶快登陆查看您的账单吧~',
      userName: Bill.userName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body{
  margin-left: 25%;
  margin-top: 5%;
}
h3{
  color: red;
}
</style>
