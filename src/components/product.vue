<template>
    <main>
        <div class="header">
            <span @click="go()" class="one"> < </span>
            <span class="two"><img src="../assets/images/logo.png" alt=""></span>
            <span class="three"><router-link to='page'>┇</router-link></span>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in list" >
                    <img :src="item.pic" alt="" class="fri">
                    <p class="sec">{{item.title1}}</p>
                    <p class="thr">{{item.title2}}</p>
                    <img :src="item.src" alt="">
                </li>
                
            </ul>
        </div>
    </main>
</template>

<script>
    export default{
        methods:{
        go(){
            this.$router.replace('/page')
        }
        },
        data(){
            return{
                list:[
                    {
                        pic:'./src/assets/images/p17pro.png',
                        title1:'如你，才华横溢',
                        title2:'￥4299',
                        src:'./src/assets/images/17.png'
                    },
                    {
                        pic:'./src/assets/images/p17pro.png',
                        title1:'如你，才华横溢',
                        title2:'￥4299',
                        src:'./src/assets/images/17pro.png'
                    },
                    {
                        pic:'./src/assets/images/p17pro.png',
                        title1:'如你，才华横溢',
                        title2:'￥4299',
                        src:'./src/assets/images/17.png'
                    },
                    {
                        pic:'./src/assets/images/p17pro.png',
                        title1:'如你，才华横溢',
                        title2:'￥4299',
                        src:'./src/assets/images/17pro.png'
                    },
                ],
            }
        }
    }
</script>
<style scoped>
    .header{
        height:5vh;
        width:100%;
        text-align:center;
        overflow: hidden;
    }
    .header .one{
        font-size:20px;
        float:left;
    }
    .header .three{
        float:right;
        margin:5px 5px;
    }
    .header img{
        height:5vh; 
    }
    .nav {
        height:50vh;
        width:100%;
        margin-bottom:1vh;  
    }
    .nav li{
        float:left;
        text-align:center;
    }
    .nav img{
        width:30%;
    }
    .footer ul{
        height:44vh;
        width:100%;
        overflow: hidden;
    }
    .footer li{
        width: 48%;
        float:left;
        text-align:center;  
    }
    .footer img{
        width:100%;
    }
</style>