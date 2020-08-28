<template>
    <main>
        <div class="header">
            <h1 @click="go()"><</h1>
            <ul>
                <li>
                    <router-link to="/login">
                    <img src="../assets/images/login.png" alt="">
                    <p>登录</p>
                    </router-link>
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
            <ul>
                <li><p @click="m()">M码通道</p></li>
                <li><p @click="old()">以旧换新</p></li>
                <li>
                    <router-link to="/contact"><p>联系客服</p></router-link>
                </li>
                <li><router-link to="/feedback"><p>意见反馈</p></router-link></li>
            </ul>
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
            go(){
                this.$router.go(-1)
            },
            m(){
                this.$router.replace('/m')
            },
            old(){
                this.$router.replace('/old')
            }
        }
    }
</script>

<style scoped>
    .header{
        height:25vh;
        width:100%;
        background:blue
        
    }
    .header h1{
        font-size:30px;
    }
    .header ul{
        text-align:center;
    }
    .header img{
        height:15vh;
        width:30%;
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
        background:#f7f7f7;
    }
    .footer li{
        height:5vh;
    }
    .footer p{
        font-size:20px;
        
    }
</style>