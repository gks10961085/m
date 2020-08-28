<template>
    <div >
        <div class="header"> 
            <h1>魅族官网</h1> 
           <span @click="back()">X</span>
        </div>
        <div class="nav"> 
            <ul class="one">
                <li v-for="(item,index) in list">
                    <router-link :to="item.path">
                    <img :src="item.src" class="src">
                    <p>{{item.title}}</p>
                    </router-link>
                    
                </li>
            </ul>  
            <ul class="two">
                <li v-for="(item,index) in list1">
                   <router-link :to="item.path">
                    <img :src="item.src" class="src">
                    <p>{{item.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data(){ 
        return{
            list:[
                {
                   path:'/person',
                   src:'./src/assets/images/person.png',
                   title:'个人中心' 
                },
                {
                   path:'/order',
                   src:'./src/assets/images/order.png',
                   title:'我的订单' 
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
                },
                {
                    path:'/address',
                    src:'./src/assets/images/address.png',
                    title:'我的地址'
                },
                {
                    path:'/collection',
                    src:'./src/assets/images/collection.png',
                    title:'我的收藏'
                }
                ],
            list1:[
                 { 
                    path:'/product' ,        
                    src:'./src/assets/images/product.png',
                    title:'产品' 
                 },
                 {
                   path:'flyme',
                   src:'./src/assets/images/flyme.png',
                   title:'flyme' 
                 },
                 {
                   path:'/clound',          
                   src:'./src/assets/images/clound.png',
                   title:'云服务' 
                 },
                 {  
                     path:'/shop',    
                    src:'./src/assets/images/shop.png',
                    title:'专卖店' 
                 },
                 {  
                     path:'service',    
                    src:'./src/assets/images/service.png',
                    title:'服务支持' 
                 },
                 {  
                     path:'/community',    
                    src:'./src/assets/images/community.png',
                    title:'社区' 
                 },
                 { 
                     path:'/app',
                    src:'./src/assets/images/app.png',
                    title:'App下载' 
                 },
                 {
                     path:'/government',
                    src:'./src/assets/images/government.png',
                    title:'政企定制' 
                 },
                  {
                      path:'/meizu17',
                     src:'./src/assets/images/meizu17.jpg',
                     title:'魅族17系列'
                 },
                 {
                     path:'t',
                     src:'./src/assets/images/16t.png',
                     title:'魅族16T'
                 },
                 {   
                     path:'old',
                     src:'./src/assets/images/old.jpg',
                     title:'以旧换新'
                 },
                 {
                     path:'/m',
                     src:'./src/assets/images/m.png',
                     title:'M码通道'
                 },
             ],
            
        } 
        },
        methods:{
            back(){
                this.$router.replace('/recommend')
            }
        }
    }  
</script>

<style scoped>
    .header{
        height:4vh;
        width:100%; 
        position:relative;
    }
    .header h1{
        position:absolute;
        left:41%;
        top:20%;
        font-size: 35px;
    }
    .header span{
        position:absolute;
        right:2%;
        top:30%;
        font-size: 30px;
    }
    .nav{
        height:96%;
        width:100%;
        
    }
    .one{
        width:100%;
        height:33vh;
        background-color:#ffffff;
    }
    .one li{
        float:left;
        width:25%;
        text-align:center;
    }
    .one li img{
        width:60%;
       
        margin-top:4vh;
    }
    .one li p{
        text-align:center;
        font-size: 25px;
    }
    .two{
        width:100%;
        height:33vh;
        background-color:#fafafa;
    }
    .two li{
        float:left;
        width:25%;
        text-align:center;
    }
    .two li img{
        width:60%;
        
        margin-top:2vh;
    }
    .two li p{
        text-align:center;
        font-size: 25px;
    }
</style>