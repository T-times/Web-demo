<template>  
<div>
        <div>
            <div>
                <input type="radio" value="0" v-model="dataType">收支统计
                <input type="radio" value="1" v-model="dataType">支出类型
                <input type="radio" value="2" v-model="dataType">月份统计
            </div>
            <div>
                <input type="radio" value="bar" v-model="type">柱状图
                <input type="radio" value="line" v-model="type">直线图
                <input type="radio" value="pie" v-model="type">饼形
                <input type="radio" value="ring" v-model="type">环形
            </div>
        </div>
        <div>
           <schart :canvas-id="canvasId" :type="type" :data="showData" :options="options"></schart>
        </div>
    </div>
</template>

<script>
import Schart from '@/components/Schart'
import Bill from '@/components/Payments'
export default {
  name: 'ShowChart',
  components: {
   'schart': Schart
  },
  data: function() {
    return {
        dataType:0,//0-收支统计,1-支出统计
        canvasId:'bar',
        type:'bar',
        bills: Bill.bills,
        incomes: Bill.incomes,
        pays: Bill.pays,
        showData: [],
        options:{
            autoWidth: true,                // 设置宽高自适应
            showValue: false,               // 是否在图表中显示数值 topPadding: 50,                 // canvas 上边距
            bottomPadding: 50,              // canvas 下边距
            leftPadding: 50,                // canvas 左边距
            rightPadding: 0,                // canvas 右边距
            yEqual: 5,                      // y轴分成5等分
            bgColor: '#ffffff',             // 默认背景颜色
            fillColor: '#1E9FFF',           // 默认填充颜色
            axisColor: '#666666',           // 坐标轴颜色
            contentColor: '#eeeeee',        // 内容横线颜色
            title: '',                      // 图表标题
            titleColor: '#000000',          // 图表标题颜色
            titlePosition: 'top'            // 图表标题位置: top / bottom
        }
    }
},
		
    computed:{
        getChartData: function() {
            var items=new Array();
            //收支统计
            switch(Number(this.dataType)){
            case 0:
            items.push({name:'收入',value:0});
            items.push({name:'支出',value:0});
            for(var i=0; i<this.bills.length;i++){
                if(this.bills[i].type=="收入"){
                    items[0].value+=Number(this.bills[i].moneys);
                }
                else{
                    items[1].value+=Number(this.bills[i].moneys);
                }
            }
            this.options.title="收支统计";
            break
            case 1:
            for(var i=0;i<this.pays.length;i++){
            items.push({name:this.pays[i].pname,value:0});
            }
            for(var i=0;i<this.bills.length;i++){
                for(var j=0;j<this.pays.length;j++){
                     if(this.bills[i].categories==this.pays[j].pname){
                        items[j].value+=Number(this.bills[i].moneys);
                        break;
                    }
                }
            }
            this.options.title="支出统计";
            break
            case 2:
            for(var i=1; i<=12;i++)
            items.push({name:i+'月',value:0});
            for(var i=0; i<this.bills.length;i++){
				for(var j=1;j<=12;j++){
					var month=0;//2018-1-1
					if(this.bills[i].date.substr(6,1) == '-'){
						month=this.bills[i].date.substr(5,1);
					}else{
						month=this.bills[i].date.substr(5,2);
					}
					if(month == j){
					items[j-1].value+=this.bills[i].moneys;
					break;
					}
				}
            }
            this.options.title="月份统计";
            break;
        }
        this.showData=items;
        }
    },
    mounted: function() {
       this.getChartData;
    },
    watch: {
        dataType: function() { 
              this.getChartData;
		}
	}
      
  }
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
