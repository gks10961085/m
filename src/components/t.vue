<template>
    <main>
        <div class="header">
            <span @click="go()"> < </span>
        </div>
        <div class="nav">
        <mt-swipe :auto="4000">
            <mt-swipe-item><img src="../assets/images/17.png"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/17pro.png"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/17.png"></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/17pro.png"></mt-swipe-item>
        </mt-swipe>
        </div>
        <div class="footer">
            <h1>魅族16T</h1>
            <ul>
                <li v-for="(item,index) in list">
                    <p>{{item.title}}</p>
                </li>
            </ul>
        </div>
        <div class="fin">
            <ul>
             <li><img src="../assets/images/ia.png" class='ia'>
             <p class="a">客服</p></li>
             <li><img src="../assets/images/ib.png" class='ib'>
             <p class="b">收藏</p></li>
            <li><img src="../assets/images/car.svg" class='ic'>
            <p class="c">购物车</p></li>
            <li><p class="d">加入购物车</p></li>
           <li><p class="e">立即购买</p></li>
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
                    title:'￥3699.00' 
                },
                {
                    title:'分期价 ￥331.36 x 12期' 
                },
                {
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充' 
                },
            ]
        }
        }
    }
</script>
<style scoped>
    .header{
        height:5vh;
        width:100%;
    }
    span{
        font-size:30px;
        position:fixed;
        left:5px;
        top:1px;
    }
    .nav{
        height:30vh;
        width:100%;
        border-bottom:1px solid #cccccc;
        text-align:center
    }
    .nav img{
        width:50%;
    }
    .footer{
        height:30vh;
        width:100%;
    }
    .footer h1{
        margin-top:10px;
        margin-left:10px;
        color: #333;
        font-size: 16px;
    }
    .footer p{
        line-height:4vh;
        margin-left:10px;
        color:#f0415f
    }
    .fin li{
        float:left;
        text-align:center;
        
    }
    .a{
        line-height:3vh;
        width:12%;
        position:fixed;
        right:88%;
        bottom:0%;
       
    }
    .ia{
        position:fixed;
        right:91%;
        bottom:3%;
        width:8%;
    }
    .b{
        line-height:3vh;
        width:12%;
        position:fixed;
        right:77%;
        bottom:0%;
        
    }
    .ib{
        position:fixed;
        right:80%;
        bottom:3%;
        width:6%;
    }
    .c{
        line-height:3vh;
        width:11%;
        position:fixed;
        right:66%;
        bottom:0%;
       
    }
    .ic{
        position:fixed;
        right:68%;
        bottom:3%;
        width:7%;
    }
    .d{
        line-height:7vh;
        width:33%;
        background:blue;
        position:fixed;
        right:33%;
        bottom:0%;

    }
    .e{
        line-height:7vh;
        width:33%;
        background:red;
        position:fixed;
        right:0%;
        bottom:0%;
    }
</style>