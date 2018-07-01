<template >
        <article class="container1">
        <section v-bind:class="show ?'dialogs active dialog-template':'dialogs dialog-template'">
                        <div class="dialog-row dialog-header">
                                <div class="grid-col-8"><span>{{title}}</span></div>
                        </div>
                        <div class="dialog-row">
                                <div class="grid-col-4">
                                类型:
                                <input class="grid-col-2" type="radio" name="type" value="收入" v-model="newBill.type">收入
                                <input class="grid-col-2" type="radio" name="type"   value="支出" v-model="newBill.type">支出
                        </div>
                        </div>
                        <div class="dialog-row">
                        <div>
                                日 期: 
                                <input type="text" name="data" v-model.lazy.trim="newBill.date">
                        </div>
                        </div>
                        <div class="dialog-row">
                        <div>名 称: <input class="grid-col-6" type="text" name="name"  v-model.lazy.trim="newBill.name"></div>
                        </div>
                        <div class="dialog-row">
                                <div>金 额: <input type="text" name="moneys" v-model="newBill.moneys" ></div>
                        </div>
                        <div class="dialog-row">
                                <div>明 细: <input type="text" name="details"  v-model.lazy.trim="newBill.details"></div>
                        </div>
                        <div class="padding" v-if="newBill.type=='收入'">
                         <div class="dialog-row">
                                <div class="grid-col-4">收入类型:</div>
                                <div v-for="b in incomes">
                                <input class="grid-col-2" type="radio" name="收入" :value="b.pname" v-model.lazy.trim="newBill.catEGORIES">{{b.pname}}
                        </div>
                        </div>
                        </div>
                        <div class="padding" v-if="newBill.type=='支出'">
                        <div class="select-list dialog-row">
                        <div>支出类型:</div>
                        <br>
                            <div v-for="a in pays">
                            <input class="grid-col-1" type="radio" name="支出"  v-bind:value="a.pname" v-model.lazy.trim="newBill.catEGORIES">{{a.pname}}
                            </div> 
                         
                       	 </div>
                        </div>
                    <div class="btn dialog-row">
                        <div class="grid-col-4">
                        <button class="padding5 pointer" v-on:click="save">保存</button>
                        </div>
                        <div class="grid-col-4">
                        <button class="padding5 pointer" v-on:click="close">取消</button>
                    </div>
                    </div>
                </div>
            </section>
            <div class="dialog-overlay"></div>
        </article>
    </template>
<script>
export default {
  name: 'user',
  data () {
    return {
      msg: 'Hello Tady',
      msg2: '天啦噜，又到了月末了!!!!!!',
      msg3: '赶快登陆查看您的账单吧~'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

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
