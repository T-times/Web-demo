<template  class="grid-col-1">
        <ul class="page-list">
                <li><a v-on:click="gotoPage(current - 1)" v-if="current > 1"><<</a></li>
                <li><a>{{current}}/{{allpage}}</a></li>
                <li><a v-on:click="gotoPage(current + 1)" v-if="current < allpage">>></a></li>
        </ul>
    </template>
    <script>
export default {
  name: 'PageFooter',
  data: function() {
    return {
      msg: 'hello',
      current: 1,
      allpage: 1
  }
  },
 props:{        
    allpage:Number
    },
    data: function() {
    return{
        current: 1
    }
    },
    methods: {
        gotoPage: function(p) {
            if(this.current == p)
                return;
        this.current = p;
        this.$emit('show-page',this.current);
    }
    },
    watch: {
        allpage: function() {
        this.current=1;
        this.$emit('show-page',this.current); //监听show-page换页，把子组件传给父组件
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.grid-col-1{
    -webkit-flex: 1;
    flex: 1;
}
.page-list li{
    list-style: none;
    display: inline-block;
    margin:0 5px;
}

.page-list li a{
    padding: 0.5em 1em;
    display: inline-block;
    border: 1px solid #ddd;
    background:#fff;
    color:#0E90D2;
}

.page-list li a:hover{
    background-color: #eee;
}

.page-list li.active a{
    background-color: #0E90D2;
    color:#fff;
}
</style>
