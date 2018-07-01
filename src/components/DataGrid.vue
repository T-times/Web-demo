<template>
            <article class="container">
            <section class="grid-template">
                <div class="grid-row title">
                    <div class="grid-col-1 white-border"><span v-on:click="sortBy('type')">收/支</span></div>
                    <div class="grid-col-2 white-border"><span>日期</span></div>
                    <div class="grid-col-3 white-border"><span>名称</span></div>
                    <div class="grid-col-2 white-border"><span v-on:click="sortBy('moneys')">金额</span></div>
                    <div class="grid-col-2 white-border"><span>类别</span></div>
                    <div class="grid-col-2 white-border"><span>备注</span></div>
                    <div class="grid-col-2 white-border"><span v-on:click="sortBy('')">-</span></div>
                </div>
                <div v-for="(bill,index) in filterItems" v-bind:class="index%2 ? 'grid-row gray-bg' : 'grid-row white-bg'">
                    <div class="grid-col-1 black-border">
                        <span>{{bill.type}}</span>
                    </div>
                    <div class="grid-col-2 black-border">
                        <span>{{bill.date}}</span>
                    </div>
                    <div class="grid-col-3 black-border">
                        <span>{{bill.name}}</span>
                    </div>
                    <div class="grid-col-2 black-border">
                        <span>${{bill.moneys}}</span>
                    </div>
                    <div class="grid-col-2 black-border">
                        <span>{{bill.categories}}</span>
                    </div>
                    <div class="grid-col-2 black-border">
                        <span>{{bill.details}}</span>
                    </div>
                    <div class="grid-col-2 black-border">
                        <button v-on:click="openEditDialog(bill)"><修改></button>
                        <button v-on:click="deleItem(bill)"><删除></button>
                    </div>
                    </div>
        </section>
                    <data-dialog v-bind:new-bill="newItem" v-bind:incomes="incomes" v-bind:pays="pays" :title="title" :mode="mode" v-on:update-item="updateItem" v-on:add-item="addItem"></data-dialog> 
                    <div class="container2">
                    <div class="btn grid-col-1">
                    <button v-on:click="openNewDialog" class="center pointer">新增数据</button>
                    </div>
                    <page-component :allpage="allPage" v-on:show-page="showPage"></page-component>
                    </div>
                    <!-- 父组件监听子组件抛出的事件并执行相应的方法 -->
    </article>
</template>
<script>
import MDialog from '@/components/MDialog'
import PageFooter from '@/components/PageFooter'                                        
import DataDialog from '@/components/DataDialog'
export default {
    name: 'DataGrid',
    props:{
            columns:Array,
            items:Array,        
            item:Object,
            incomes:Array,
            pays:Array,
            filterKey:String,
            searchColumn:String
        },
    components: {
        'data-dialog': DataDialog,
        'page-component': PageFooter
    },
    data: function() {
        return {
            sortKey: '',
            sortOrder: 1  ,     //1升序   -1降序
            newItem:{},
            mode:0,
            title:'',
            pageItems: 3,
            allPage: Math.ceil(this.items.length/this.pageItems),
            currentPage: 1
        }
    },
    computed: {
        filterItems: function () {
        	console.log('123333333333333333333333333',items);
            var items= this.items;
            console.log('123333333333333333333333333',items);
            var filterKey=this.filterKey;
            var sortKey = this.sortKey;
            var order = this.sortOrder;
            //搜索过滤
            if(filterKey){
                items = items.filter(function(row){
                    return String(row.name).indexOf(filterKey)>-1      //改为colname自定义搜索区域
                    console.log('3333333333333334444444444444444444444444',row.name);
                });
            }
            console.log('3333333333333334444444444444444444444444',items);
            this.allPage = Math.ceil(items.length/this.pageItems);
            //数据排序
            if(sortKey){
                items=items.slice().sort(function(a,b){
                    console.log('23233333',a);                     //利用控制台进行检测数据不显示问题
                    a=a[sortKey];
                    b=b[sortKey];
                    return (a===b?0: a>b?1:-1)*order;
                })
            }
            var start = (this.currentPage - 1)*this.pageItems;
            items=items.slice(start,start+this.pageItems);
            console.log('3333333333333334444444444444444444444444',items);
            return items;
        }
    },
    methods:{
        sortBy: function (key) {
            this.sortKey = key;
            this.sortOrder = this.sortOrder* -1;
        },
        copyItem: function (p) {
        var c={};
        for(var i in p) 
            {
                c[i]=p[i];
            }
        return c;
        },
        openNewDialog: function () {
            this.$children[0].show=true;//0代表第一个子组件
            this.mode=1;
            this.title="新增数据";
            this.newItem=this.copyItem(this.item);
        },
        openEditDialog: function (item) {
            this.$children[0].show=true;   //子组件
            this.mode=2;
            this.title="修改数据";
            this.newItem=this.copyItem(item);
        },
        addItem: function (item) {
            this.newItem.id = new Date().getTime();
            console.log(this.newItem.name);
            if(this.newItem.moneys == 0)
            {
                window.alert("金额未填写，请重新添加");
            }
            else if(this.newItem.name == '') 
            {
                window.alert("名称未填写，请重新添加");
            }
            else if(this.newItem.details == '')
            {
                window.alert("明细未填写，请重新添加");
            }
            else if(this.newItem.catEGORIES == '')
            {
                window.alert("类型未填写，请重新添加");
            }
            else {
            this.items.push(this.newItem);
            }
        },
        updateItem: function (item) {
            var index = this.findIndex(item.id);
            if(index > -1){
                this.items.splice(index,1,this.newItem);
            }
        },
        //删除确认弹窗组件
        deleItem: function (item) {
            if(window.confirm('你确定要取消交易吗？')){
                 //alert("确定");
                  var index=this.findIndex(item.id);
                if(index > -1) {
                console.log(index);
                this.items.splice(index,1)
        }
        else {
          // alert("取消");
          return false
        }
      }
    },
    findIndex: function (id) {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].id === id) {
          return i
        }
      }
      return -1
    },
    showPage: function (p) {
      this.currentPage = p
    }
  }
}
</script>

<style scoped>
body{
    margin:0;
    padding: 0;
    width:100%;
}
h1{
    text-align: center;
}
#app{
    display: flex;
    align-items: center;
    flex-direction: column;
}
/*数据表格*/
.grid-template{
    width: 95%;
    padding: 15px;
}
.container{
    display:flex;
    align-items:center;
    flex-direction:column;
    width:100%;
}
.container1{
    display:flex;
    align-items:center;
    flex-direction:column;
    -webkit-justify-content: center;
    justify-content: center;
    width:100%;
}
.container2{
    display:flex;
    align-items:center;
    flex-direction:row;
    width:100%;
/*  justify-content: center;*/
}
.grid-row{
    display: -webkit-flex;
    display: flex;
    width: 100%;
    margin: 0px auto;
    line-height: 35px;
    text-align: center;
}
.grid-row:hover{
    background-color: #333;
    cursor:pointer;
    color: orange;
}
.grid-row.title{
    background-color: #0090d3;
    line-height: 40px;
    color: #fff;
}
.grid-col-1{
    -webkit-flex: 1;
    flex: 1;
}
.grid-col-2{
      -webkit-flex: 2;
    flex:2;
}
.grid-col-3{
      -webkit-flex: 3;
    flex: 3;
}
.grid-col-4{
      -webkit-flex: 4;
    flex: 4;
}
.grid-col-5{
      -webkit-flex: 5;
    flex: 5;
}
.grid-col-6{
      -webkit-flex: 6;
    flex:6;
}
.grid-col-7{
      -webkit-flex: 7;
    flex:7;
}
.grid-col-8{
      -webkit-flex: 8;
    flex:8;
}
.grid-col-14{
      -webkit-flex: 14;
    flex:14;
}

.white-border{
    border: 1px solid #eee;
}

.black-border{
    border: 1px dotted #fff;
    margin: 1px;
}
.white-bg{
    background-color: #eee;
    color:#000;
}
.gray-bg{
    background-color: #fff3af;
    color:#000;
}
.search-bar{
    width: 95%;
    padding: 10px;
}
.dialog-row{
    display: -webkit-flex;
    display: flex;
    margin: 0px auto;
    line-height: 40px;
    text-align: center;
    border-bottom:2px dotted #000;
    margin-top: 1px;
    flex-wrap: wrap;
}
.dialog-row div{
    padding: 0px;
}
.select-list{
    display: flex;
    flex-wrap: wrap;
}
.select-list div{
    display: 50%;
}
.dialog-template{
    width:400px;
    border:1px solid #0090d3;
    margin:20px 0 20px 0;
    background-color:#fff;
    border-radius:5px;
    box-shadow:10px 10px 5px #888888;
    transform:rotateY(-80deg);
    transform-style:preserve-3d;
    opacity:1;
    visibility:hidden; 元素隐藏
    transition:0.5s ease-in-out;
}
.dialog-header{
    text-align:center;
    background-color: #0090d3;
    line-height: 40px;
    border: 1px dotted #eee;
    color:white;
}
.dialogs.dialog-template{
    width:400px;
    border:1px solid #0090d3;
    margin:20px 0 20px 0;
    background-color:#fff;
    border-radius:5px;
    box-shadow:10px 10px 5px #888888;
    transform:rotateY(-80deg);
    transform-style:preserve-3d;
    opacity:0;
    visibility:hidden;
    transition:0.5s ease-in-out;
}
.dialogs.active.dialog-template{
    transform:rotateY(0deg);
    opacity:1;
    visibility:visible;
    background-color:#fff;
}
.dialog-row{
    line-height:30px;
    padding:10px 30px  10px 30px;
    margin:8px;
    border-bottom:1px dotted #999;
}
.dialogs{
    width:400px;
    position:fixed;
    top:30px;
    left:40%;
    transform:translateX(-50%);
    visibility:hidden;
    perspective:1500px;
    z-index:2000;
}
.dialogs.active{
    visibility:visible;
}
.dialog-overlay{
    position:fixed;
    opacity:0;
    background-color:rgba(0,0,0,0.5);
    visibility:hidden;
    transition:0.5s ease-in;
    z-index:1000;
}
.dialogs.active~.dialog-overlay{
    visibility:visible;
    opacity:1;
}
.dialog-header{
    text-align:center;
    background-color: grey;
    line-height: 40px;
    color:#fff;
}
.btn{
    width:50%;
    text-align:right;
    cursor: pointer;
    display: flex;
    margin: 0px auto;
    padding: 10px;
    text-align: center;
}
.btn span{
    background-color: grey;
    margin:5px;
    line-height: 40px;
    color:#fff;
}
.padding{
    padding: 0px;
}
.padding5{
    padding: 5px;
}
.center{
    margin-top: 20px;
    margin-left: 45%;
}
input{
    outline: none;
}
input[type=text]{
    padding: 3px 6px;
    font-size: 1.2em;
    border:1px solid #ccc;
}
input[type=text]:focus{
    border-color: #0090d3;
    transition: .3s ease-in;
}
button{
    display: inline-block;
    box-sizing:border-box;
    background: #09dc33;
    color: #fff;
    border:1px solid #09dc33;
    border-radius: 3px;
    padding: 5px;
    outline: 0;
}
footer{
    background-color: black;
    color:white;
    text-align:center;
    line-height: 40px;
}
.pointer{
    cursor: pointer;
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
