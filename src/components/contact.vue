<template>
    <main>
        <div class="header">
            <span @click="go()" class="one"> < </span>
            <span>联系客服</span>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in list">
                    <router-link :to="item.path">
                    <img :src="item.src" alt="">
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="footer">
            <ul>
                <li v-for="(item,index) in list1">
                    <p>{{item.title}}</p>
                </li>
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
                    src:'./src/assets/images/contact.png',
                    path:'/con'
                },
                {
                    src:'./src/assets/images/phone.png',
                    path:'/phone'
                },
                {
                    src:'./src/assets/images/num.png',
                    path:'/num'
                },
            ],
            list1:[
                {
                    title:'你还可以：' 
                },
                {
                    title:'1、关注“魅族科技”微信公众号，直接对话微信客服' 
                },
                {
                    title:'2、关注“魅族care”微博，了解资讯' 
                },
            ]
            }
        },

        methods:{
        go(){
            this.$router.replace('/center')
        }
        } 
    }
</script>
<style scoped>
    .header{
        height:5vh;
        width:100%;
        text-align:center;
        border-bottom:1px solid red;
    }
    .header span{
        font-size:30px;
       
    }
    .header .one{
        float:left;
        
    }
    .nav{
        height:80vh;
        
    }
    .nav li{
        text-align:center;
        margin-top:10px;
    }
    .nav img{
        width:50%;
    }
    p{
        line-height:4vh;
    }
</style>