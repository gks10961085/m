<template>
    <main>
        <header>
            <mt-header fixed >
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            </mt-header>
        </header>
        <div class="xbo">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in lunbo">
                    <img :src="item.src" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="xcon">
            <ul>
                <li v-for="(item,index) in list">
                    <h1>{{item.h1}}</h1>
                    <p class="xprice">{{item.price}}</p>
                    <span>{{item.fenqi}}</span>
                    <p class="xtitle">{{item.title}}</p>
                </li>
            </ul>
        </div>
        <div class="xfooter">
            <ul>
                <li class="cusser">
                    <img src="../assets/images/客服.png" alt="">
                    <p>客服</p>  
                </li>
                <li class="clo">
                    <img src="../assets/images/收藏.png" alt="">
                    <p>收藏</p>
                </li>
                <li class="car">
                    <img src="../assets/images/car.png" alt="">
                    <p>购物车</p>
                </li>
                <li class="in">
                    <p>加入购物车</p>
                </li>
                <li class="sho">
                    <p>立即购买</p>
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    data(){
        return{
            lunbo:[
                {
                    src:'./src/assets/images/xh1.jpg'
                },
                {
                    src:'./src/assets/images/xh2.jpg'
                },
                {
                    src:'./src/assets/images/xh3.jpg'
                },
                {
                    src:'./src/assets/images/xh4.jpg'
                }
            ],
            list:[
                {
                    h1:'魅族 17',
                },
                {
                    price:'¥ 3699.00',
                },
                {
                    fenqi:'分期价 ￥331.36x12期',
                },
                {
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                },
            ]
        }
    }
}
</script>

<style>
    .mint-header {
        background-color: white;
        color: #000;
        height: 60px;
    }
    .mintui{
        font-size: 40px;
    }
    .mint-button--normal {
        display: inline-block;
        padding: 0 12px;
    }
    .xbo{
        width: 60%;
        margin: 35px 150px;
        transform: translateZ(0);
        overflow: hidden;
    }
    .xbo .mint-swipe-items-wrap{
        padding-bottom: 103.73%;
    }
    .xbo img{
        width: 100%;
    }
    .xbo .mint-swipe-indicator {
        width: 15px;
        height: 15px;
    }
    .xbo .mint-swipe-indicator {
        background: #e5e5e5;
    }
    .xbo .mint-swipe-indicator.is-active {
        background: #008cff;
    }
</style>

<style scoped> 
    .xcon li{
        margin: 2%;
    }
    .xcon li::after{
        position: absolute;
        content: "";
        width: 100%;
        height: .1vw;
        background: #e5e5e5;
        left: 0%;
        bottom: 110vw;
    }
    .xcon h1{
        color: #333;
        font-size: 35px;
    }
    .xcon .xprice{
        color: #f0415f;
        font-size: 40px;
    }
    .xcon span{
        font-size: 35px;
        color: #f0415f;
    }
    .xcon .xtitle{
        color: #f0415f;
        font-size: 3.172vw;
        line-height: 53px;
        font-weight:700;
    }
    .xdone ul{
        width: 100%;
        overflow: hidden;
    }
    .xdone li{
        margin: 6% 14%;
        float: left;
    }
    .xdone p{
        font-size: 35px;
    }
    .xfooter{
        width: 100%;
        height: 100px;
        border: 2px solid #e5e5e5;
        position: fixed;
        bottom: 0;
        overflow: hidden;
    }
    .xfooter li{
        float: left;
        text-align: center;
    }
    .cusser{
        width: 12%;
        border: 1px solid #e5e5e5;
    }
    .cusser img{
        margin-top: 16%;
    }
    .cusser p{
        font-size: 28px;
    }
    .clo{
        width: 12%;
        border: 1px solid #e5e5e5;
    }
    .clo img{
        margin-top: 16%;
    }
    .clo p{
        font-size: 28px;
    }
    .car{
        width: 12%;
        border: 1px solid #e5e5e5;
    }
    .car img{
        margin-top: 16%;
    }
    .car p{
        font-size: 28px;
    }
    .in{
        width: 31%;
        border: 1px solid #e5e5e5;
        font-size: 35px;
        line-height: 98px;
        background: #008cff;
        color: white;
    }
    .sho{
        width: 31%;
        border: 1px solid #e5e5e5;
        font-size: 35px;
        line-height: 98px;
        background:  red;
        color: white;
    }
</style>