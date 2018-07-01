<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import Bill from '@/components/Payments'
export default {
  name: 'App',
   data () {
    return {
      userName: '',
      userPass: ''
    }
  },
  // mounted: function() {
  //   if(sessionStorage.getItem(userPass)==Bill.userPass&&sessionStorage.getItem(userName)==Bill.userName){
  //     this.$router.push('/content');
  //   }
  //   else
  //   {
  //     this.$router.push('/content1');
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.logo{
  left: 5%;
}
.right{
  display: flex;
}
img{
  width: 40%;
  height: 40%;
}

</style>
