<template>
    <main>
        <div class="header">
            <span @click="gogo()"><</span>
            <ul>
                <li>
                    <img src="../assets/images/zs.jpg" alt="">
                    <p>zs</p>
                </li>
            </ul>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in list">
                     <router-link :to="item.path">
                    <img :src="item.src" class="src">
                    <p>{{item.title}}</p>
                     </router-link>
                </li>
            </ul>
        </div>
        <div class="footer">
            <p @click="M()">M码通道</p>
            <p @click="old()">以旧换新</p>
            <p @click="ct">联系客服</p>
            <p @click="fb">意见反馈</p>
        </div>
    </main>
</template>

<script>
    export default{
        data(){ 
        return{
           list:[
                {
                   path:'/collection',
                   src:'./src/assets/images/collection.png',
                   title:'我的收藏' 
                },
                {
                    path:'/address',
                    src:'./src/assets/images/address.png',
                    title:'我的地址' 
                },
                {
                    path:'/red',
                    src:'./src/assets/images/red.png',
                    title:'我的红包'
                },
                {
                    path:'/my',
                    src:'./src/assets/images/my.png',
                    title:'我的优惠券'
                }
           ]
        } 
        },
        methods:{
            gogo(){
                this.$router.replace('/page')
            },
            M(){
                this.$router.replace('/m')
            },
            old(){
                this.$router.replace('/old')
            },
            ct(){
                this.$router.replace('/contact')
            },
            fb(){
                this.$router.replace('/feedback')
            }
        }
    }
</script>

<style scoped>
    .header{
        height:25vh;
        width:100%;
        background:blue;
    }
    .header span{
        font-size:30px;
    }
    .header ul{
        text-align:center;
    }
    .header img{
        height:15vh;
        width:30%;
        border-radius:50%
    }
    .header p{
        text-align:center;
        font-size:20px;
    }
    .nav{
        height:15vh;
        width:100%;
        background:#f7f7f7;
        margin:1vh 0;
    }
   .nav ul{
       width:100%;
       height:15vh;
   }
   .nav li{
       width:25%;
       float:left;
       text-align:center;
   }
    .nav img{
        width:80%;
        margin-top:1vh;
    }
    .footer{
        height:60vh;
    }
    .footer p{
        font-size:20px;
        margin:2vh 0px;
    }
</style>