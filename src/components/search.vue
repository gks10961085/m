<template>
    <main>
        <header class="search">
            <mt-header fixed >
                <router-link to="/" slot="left">
                    <mt-button icon="back"></mt-button>
                    
                </router-link>
            </mt-header>
            <p class="but">搜索</p> 
            <mt-search>

            </mt-search>
 
        </header>
        <div class="searchcon">
            <ul>
                <p>大家都在搜</p>
                <li v-for="(item,index) in list">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
        <div class="searchdonw">
            <ul>
                <li v-for="(item,index) in list1">
                    <p>{{item.record}}</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    title:'魅族 POP2'
                },{
                    title:'魅族 17pro'
                },
            ],
            list1:[
                {
                    record:'历史记录'
                }
            ]
        }
    }
}
</script>

<style>
    .mint-header {
        background-color: white;
        color: #000;
        height: 120px;
        width: 10%;
        overflow: hidden;
    }
    .mintui{
        font-size: 40px;
        margin: 20px;
        overflow: hidden;
    }
    .mint-button--normal {
        display: inline-block;
        padding: 0 12px;
        overflow: hidden;
    }
    .mint-searchbar{
        background-color: #eee;
        margin: 23px 116px;
        border-radius: 40px;
        position: relative;
        overflow: hidden;
    }
    .mint-search {
        height: 12vh;
        overflow: hidden;
    }
    .mint-searchbar-inner{
        background-color: #eee;
        height: 55px;
        overflow: hidden;
    }
    .mint-searchbar-core{
        background-color: #eee;
        font-size: 26px;
    }
    .mint-searchbar-inner .mintui-search {
        font-size: 35px;
        color: #d9d9d9;
        overflow: hidden;
    }
    .mint-searchbar-cancel {
        color: black;
        font-size: 26px;
        overflow: hidden;
    }
</style>
<style scoped>  
    .but{
        float: right;
        position: absolute;
        top: 40px;
        right: 18px;
        font-size: 40px;
        float: right;
    }
    .search::after{
        position: absolute;
        content: "";
        width: 100%;
        height: .2vw;
        background: #e5e5e5;
        left: 0%;
        bottom: 160vw;
        overflow: hidden;
    }
    .searchcon p{
        font-size: 35px;
        margin-left: 40px;
    }
    .searchcon ul{
        overflow: hidden;
    }
    .searchcon li{
        border: 1px solid black;
        width: 31%;
        text-align: center;
        margin-left: 40px;
        border-radius: 45px;
        margin-top: 20px;
        float: left;
    }
    .searchcon span{
        font-size: 35px;
        line-height: 65px;
        margin: 40px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .searchcon{
        position: relative;
    }
    .searchcon::after{
        position: absolute;
        content: "";
        width: 100%;
        height: 2.2vw;
        background: #e5e5e5;
        left: 0%;
        bottom: -23vw;
        overflow: hidden;
    }
    .searchdonw{
        margin-top: 210px;
    }
    .searchdonw p{
        font-size: 35px;
        margin-left: 40px;
    }
</style>