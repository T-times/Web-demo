<template>
        <div class="canvas-wrapper">
          <!-- 在移动端上使用rem单位，需要设置父元素宽高 -->
         <canvas :id="canvasId" ></canvas>
        </div>
   </template>
<script>
    import sChart from '../../static/sChart.js'
    export default {
        name: 'Schart',
        data: function() {
            return{
                schart: null,
                opt: {}
            }
       },
        props:{
          canvasId: String,
          type: String,
          data: Array,
          options:Object
       },
        methods:{
        renderChart: function() {
            this.schart=null;//clean this it
            this.schart=new sChart(this.canvasId, this.type, this.data, this.options);
        }
    },
        mounted: function() {
        this.renderChart();
        },
        watch: {
        data: function() {
         this.renderChart();
       },
         type: function() {
          this.renderChart();
        }
    }
   }
</script>
<style scoped>
.canvas-wrapper{
    width: 100%;
    height: 300px;
}
footer{
    background-color: black;
    color:white;
    text-align:center;
    line-height: 40px;
}
</style>
