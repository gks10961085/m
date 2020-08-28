<template>
    <main>
        <div class="bo">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item,index) in lunbo">
                    <img :src="item.src" alt="">
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="con">
            <span class="xt">
                <img src="../assets/images/sp1.png" alt="">
                魅族官方直供
            </span>
            <span class="xt">
                <img src="../assets/images/sp2.png" alt="">
                满80免运费
            </span>
            <span class="xt">
                <img src="../assets/images/sp3.png" alt="">
                7天无理由退货
            </span>
        </div>
        <div class="nav">
            <ul>
                <li v-for="(item,index) in list">
                    <router-link :to="item.path">
                            <img :src="item.src" alt="">
                            <p>{{item.title}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="cet">
            <ul>
                <li class="left">
                    <img src="../assets/images/p5.jpg" alt="">
                </li>
                <li class="right">
                    <img src="../assets/images/p6.png" alt="">
                </li>
                <li class="right">
                    <img src="../assets/images/p7.jpg" alt="">
                </li>
            </ul>
        </div>
        <div class="section">
            <h3>智能手机</h3>
            <img src="../assets/images/AG原野绿.jpg" alt="" class="top">
            <ul>
                <li v-for="(item,index) in list1">
                    <img :src="item.src" alt="">
                    <p class="product-name">{{item.title}}</p>
                    <span><em>{{item.con}}</em>{{item.arti}}</span>
                    <p class="price">{{item.price}}</p>
                </li>
            </ul>
        </div>
        <div class="audio">
            <h3>魅族声学</h3>
            <div class="audio-top">
                <ul>
                    <img src="../assets/images/s1.jpg" alt="">
                    <li>
                        <h4>魅族 HD60 降噪耳机</h4>
                        <p>索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质</p>
                        <span>￥ 1099</span>
                    </li>
                </ul>
            </div>
            <div class="section">
            <ul>
                <li v-for="(item,index) in list2">
                    <img :src="item.src" alt="">
                    <p class="product-name">{{item.title}}</p>
                    <span><em>{{item.con}}</em>{{item.arti}}</span>
                    <p class="price">{{item.price}}</p>
                </li>
            </ul>
            </div>
        </div>
        <div class="inte">
            <h3>智能配件</h3>
            <div class="inte-top">
                <ul>
                    <img src="../assets/images/z1.jpg" alt="">
                    <li>
                        <h4>魅族 HD60 降噪耳机</h4>
                        <p>索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质</p>
                        <span>￥ 1099</span>
                    </li>
                </ul>
            </div>
            <div class="section">
            <ul>
                <li v-for="(item,index) in list3">
                    <img :src="item.src" alt="">
                    <p class="product-name">{{item.title}}</p>
                    <span><em>{{item.con}}</em>{{item.arti}}</span>
                    <p class="price">{{item.price}}</p>
                </li>
            </ul>
            </div>
        </div>
        <div class="life">
            <h3>周边生活</h3>
            <div class="life-top">
                <ul>
                    <img src="../assets/images/sh1.jpg" alt="">
                    <li>
                        <h4>魅族 HD60 降噪耳机</h4>
                        <p>索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质</p>
                        <span>￥ 1099</span>
                    </li>
                </ul>
            </div>
            <div class="section">
            <ul>
                <li v-for="(item,index) in list4">
                    <img :src="item.src" alt="">
                    <p class="product-name">{{item.title}}</p>
                    <span><em>{{item.con}}</em>{{item.arti}}</span>
                    <p class="price">{{item.price}}</p>
                </li>
            </ul>
            </div>
        </div>
        <div class="vide">
            <h3>精彩视频</h3>
            <div class="section">
            <ul>
                <li v-for="(item,index) in list5">
                    <a :href="item.video">
                        <img :src="item.src" alt="">
                    </a>
                    <div class="aa">
                        <p :class="{'video-title':true,aa:item.title.length>15}">{{item.title}}</p>
                    </div>
                </li>
            </ul>
            </div>
        </div>
        <footer>
            <div>
                <ul>
                    <li v-for="(item,index) in list6">
                        <img :src="item.src" alt="">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <ol class="left">
                        <span class="ye">粤ICP备13003602号-2合字B2-20170010</span>
                        <span>营业执照©2018 Meizu All rights reserved</span>
                    </ol>
                    <ol class="right">
                        <img src="../assets/images/zg.png" alt="" class="zg">
                        <b>简体中文</b>
                    </ol>
                </ul>
            </div>
        </footer>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
        data(){
        return{
            lunbo:[
                {
                    src:'./src/assets/images/l2.jpg'
                },
                {
                    src:'./src/assets/images/l1.jpg'
                },
                {
                    src:'./src/assets/images/l3.jpg'
                },
                {
                    src:'./src/assets/images/l4.jpg'
                },
                {
                    src:'./src/assets/images/l5.jpg'
                },
                {
                    src:'./src/assets/images/l6.jpg'
                },
                {
                    src:'./src/assets/images/l7.jpg'
                },
            ],
            list:[
                {
                   src:'./src/assets/images/p1.png',
                   title:'相惠七夕' ,
                   path:'/xhqx',
                },
                {
                   src:'./src/assets/images/p2.jpg',
                   title:'魅族17' ,
                   path:'/mz',
                },
                {
                    src:'./src/assets/images/p3.png',
                    title:'影像大赛',
                    path:'/photo',
                },
                {
                    src:'./src/assets/images/p4.jpg',
                    title:'mCycle',
                    path:'/cycle',
                },
            ],
            list1:[
                {
                    src:'./src/assets/images/17.png',
                    title:'魅族17',
                    con:'免息',
                    arti:'限时领券立省200+限时赠壳膜套装',
                    price:'￥3699',
                },
                {
                    src:'./src/assets/images/17pro.png',
                    title:'魅族17pro',
                    con:'赠品',
                    arti:'限时领券至高立省200+限时赠壳膜套装',
                    price:'￥4699',
                },
            ],
            list2:[
                {
                    src:'./src/assets/images/s3.png',
                    title:'魅族EP63NC降噪耳机',
                    con:'特惠',
                    arti:'AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分钟畅听3小时',
                    price:'￥399',  
                },{
                    src:'./src/assets/images/s4.png',
                    title:'魅族 EP3C 耳机',
                    con:'特惠',
                    arti:'Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜',
                    price:'￥129',  
                },{
                    src:'./src/assets/images/s5.png',
                    title:'魅族 POP2 真无线蓝牙耳机',
                    con:'特惠',
                    arti:'蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
                    price:'￥399',  
                },{
                    src:'./src/assets/images/s6.png',
                    title:'魅族 HD60 头戴式蓝牙耳机',
                    con:'特惠',
                    arti:'40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质',
                    price:'￥499',  
                },{
                    src:'./src/assets/images/s7.png',
                    title:'魅族EP52 Lite蓝牙耳机',
                    con:'特惠',
                    arti:'11小时超长续航 | 快充15分钟畅听3小时轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水',
                    price:'￥129',  
                },{
                    src:'./src/assets/images/s8.png',
                    title:'魅族 EP2X 耳机',
                    con:'特惠',
                    arti:'一体式线控 | 3.5mm接口 | 流线设计',
                    price:'￥69',  
                },{
                    src:'./src/assets/images/s9.png',
                    title:'魅族 EP21 耳机',
                    con:'特惠',
                    arti:'三键一体式线控 | 3.5mm接口 ',
                    price:'￥89',  
                },{
                    src:'./src/assets/images/s10.png',
                    title:'魅族LIVE四单元耳机',
                    con:'特惠',
                    arti:'Knowles四动铁 双通道导音系统 现场级音乐表现',
                    price:'￥1099',  
                },{
                    src:'./src/assets/images/s11.png',
                    title:'魅族 HALO 激光蓝牙耳机',
                    con:'特惠',
                    arti:'炫酷夜跑神器 随性张扬',
                    price:'￥499',  
                },{
                    src:'./src/assets/images/s12.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200',  
                },
            ],
            list3:[
                {
                    src:'./src/assets/images/z3.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },
                {
                    src:'./src/assets/images/z4.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z5.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z6.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z7.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z8.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z9.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z10.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z11.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },{
                    src:'./src/assets/images/z12.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200', 
                },
            ],
            list4:[
                {
                    src:'./src/assets/images/sh3.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200',
                },
                {
                    src:'./src/assets/images/sh4.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200',
                },{
                    src:'./src/assets/images/sh5.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200',
                },{
                    src:'./src/assets/images/sh6.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200',
                },{
                    src:'./src/assets/images/sh7.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200',
                },{
                    src:'./src/assets/images/sh8.png',
                    title:'MEIZU UR 高端定制耳机  预约',
                    con:'特惠',
                    arti:'【预约专用】私人定制，为你而声',
                    price:'￥200',
                },
            ],
            list5:[
                {
                    src:'./src/assets/images/j1.jpg',
                    video:'./src/assets/media/hangmu.mp4',
                    title:'魅族 17 航母限定版重构热血旗舰：以梦为舰，热爱起航',
                },
                {
                    src:'./src/assets/images/j2.jpg',
                    video:'./src/assets/media/xfy.mp4',
                    title:'魅族 17 Pro 晓芳窑艺术典藏版：这艺术，科技极了',
                },{
                    src:'./src/assets/images/j3.jpg',
                    video:'./src/assets/media/HD60降噪.mp4',
                    title:'魅族 HD60降噪耳机：去噪，去躁',
                },{
                    src:'./src/assets/images/j4.jpg',
                    video:'./src/assets/media/16t-video.mp4',
                    title:'魅族 16T 大屏娱乐旗舰：玩出我的热爱',
                },{
                    src:'./src/assets/images/j5.jpg',
                    video:'./src/assets/media/Flyme8概念视频.mp4',
                    title:'Flyme 8 概念视频',
                },{
                    src:'./src/assets/images/j6.jpg',
                    video:'./src/assets/media/Flyme8功能视频.mp4',
                    title:'Flyme 8 功能视频',
                },{
                    src:'./src/assets/images/j7.jpg',
                    video:'./src/assets/media/aicy.mp4',
                    title:'Aicy',
                },{
                    src:'./src/assets/images/j8.jpg',
                    video:'./src/assets/media/安全家庭视频_1.mp4',
                    title:'安全家庭',
                },
            ],
            list6:[
                {
                    src:'./src/assets/images/电话.png',
                    title:'400-788-3333',
                },
                {
                    src:'./src/assets/images/消息.png',
                    title:'在线客服',
                },
            ]
        }
    }
}
</script>

<style>
    .bo .mint-swipe-items-wrap{
        padding-bottom: 51.73%;
    }
    .bo .mint-swipe{
        margin-top: 10px;
    }
</style>
<style scoped>
    .bo img{
        width: 100%;
    }
    .con{
        display: flex;
        justify-content: space-between;
        padding: 2.4vw 7.40741vw;
        text-align: center;
        background-color: #f7f7f7;
    }
    .xt{
        display: inline-block;
        font-size: 2.6vw;
        color: #999;
        position: relative;
    }
    .nav ul{
        overflow: hidden;
    }
    .nav li{
        float: left;
        width: 19%;
        margin: 3%;
        text-align: center
    }
    .nav img{
        width: 100%;
    }
    .nav p{
        color: #000;
        line-height: 3;
        font-size: 3.33333vw;
    }
    .cet ul{
        overflow: hidden;
    }
    .left img{  
        width: 50%;
        float: left;
    }
    .right img{
        width: 50%;
        float: right;
    }
    .section{
        margin-top: 13%;
    }
    .section h3{
        font-size: 45px;
        font-weight: 700;
        text-align: center;
    }
    .section h3::after{
        position: absolute;
        content: "";
        width: 7vw;
        height: .7vw;
        background: #008cff;
        left: 47%;
        bottom: -35vw;
    }
    .top{
        margin-top: 10%;
        width: 100%;
    }
    .section ul{
        overflow: hidden;
    }
    .section ul li{    
        width: 49%;
        float: left;
        margin-right: 1%;
    }
    .section ul img{
        margin-top: 2%;
        width: 100%;
    }
    .product-name{
        text-align: center;
        font-size: 35px;
        font-weight: 700;
        color: #333;
    }
    .section span{
        color: #c00;
        border: 1px solid #c00;
        line-height: 44px;
        margin: 6%;
        font-size: 28px;
        /* 文字多出部分变成省略号 */
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;    
    }
    .section em{
        float: left;
        padding: 0 10px;
        margin-right: 5%;
        color: #fff;
        background-color: #c00;
    }
    .price{
        text-align: center;
        font-size: 35px;
        font-weight: 700;
        color: #c00;
    }
    .audio{
        margin-top: 13%;
    }
    .audio h3{
        font-size: 45px;
        font-weight: 700;
        text-align: center;
    }
    .audio h3::after{
        position: absolute;
        content: "";
        width: 7vw;
        height: .7vw;
        background: #ff6363;
        left: 47%;
        bottom: -179vw;
    }
    .audio-top{
        margin-top: 8%;
        width: 100%;
        border: 1px solid black;
        background-color: #7063C9;
        overflow: hidden;
    }
    .audio-top img{
        width: 50%;
        float: left;
    }
    .audio-top li h4{
        color: white;
        width: 33.33333vw;
        overflow: hidden;
        font-size: 4.62963vw;
        padding: 2vw 3vw;
    }
    .audio-top li p{
        color: hsla(0,0%,100%,.7);
        font-size: 3.33333vw;
        padding: 2vw 3vw;
        overflow: hidden;
    }
    .audio-top li span{
        color: hsla(0,0%,100%,.7);
        font-size: 4.62963vw;
        overflow: hidden;
        padding: 0vw 3vw;
    }
    .inte{
        margin-top: 16%;
    }
    .inte h3{
        font-size: 45px;
        font-weight: 700;
        text-align: center;
    }
    .inte h3::after{
        position: absolute;
        content: "";
        width: 7vw;
        height: .7vw;
        background: #7143ff;
        left: 47%;
        bottom: -639vw;
    }
    .inte-top{
        margin-top: 70px;
        width: 100%;
        border: 1px solid black;
        background-color: #55C3C3;
        overflow: hidden;
    }
    .inte-top img{
        width: 50%;
        float: left;
    }
    .inte-top li h4{
        color: white;
        width: 33.33333vw;
        overflow: hidden;
        font-size: 4.62963vw;
        padding: 2vw 3vw;
    }
    .inte-top li p{
        color: hsla(0,0%,100%,.7);
        font-size: 3.33333vw;
        padding: 2vw 3vw;
        overflow: hidden;
    }
    .inte-top li span{
        color: hsla(0,0%,100%,.7);
        font-size: 4.62963vw;
        overflow: hidden;
        padding: 0vw 3vw;
    }
    .life{
        margin-top: 12%;
    }
    .life h3{
        font-size: 45px;
        font-weight: 700;
        text-align: center;
    }
    .life h3::after{
        position: absolute;
        content: "";
        width: 7vw;
        height: .7vw;
        background: #6fdc39;
        left: 47%;
        bottom: -1111vw;
    }
    .life-top{
        margin-top: 10%;
        width: 100%;
        border: 1px solid black;
        background-color: #55C3C3;
        overflow: hidden;
    }
    .life-top img{
        width: 50%;
        float: left;
    }
    .life-top li h4{
        color: white;
        width: 33.33333vw;
        overflow: hidden;
        font-size: 4.62963vw;
        padding: 2vw 3vw;
    }
    .life-top li p{
        color: hsla(0,0%,100%,.7);
        font-size: 3.33333vw;
        padding: 2vw 3vw;
        overflow: hidden;
    }
    .life-top li span{
        color: hsla(0,0%,100%,.7);
        font-size: 4.62963vw;
        overflow: hidden;
        padding: 0vw 3vw;
    }
    .vide{
        margin-top: 12%;
    }
    .vide h3{
        font-size: 45px;
        font-weight: 700;
        text-align: center;
    }
    .vide h3::after{
        position: absolute;
        content: "";
        width: 7vw;
        height: .7vw;
        background: #6fdc39;
        left: 47%;
        bottom: -1430vw;
    }
    .video-title{
        font-size: 3.33333vw;
        padding: 2vw 2vw;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        position: relative;
        width: 100%;
        padding-right: 3.33333vw;
        box-sizing: border-box;
    }
    .video-title:after{
        content: '';
        display: inline-block;
        width: 10%;
        width: 3.33333vw;
        height: 3.33333vw;
        background: url(../assets/images/bo1.png) no-repeat;
        background-size: cover;  
        right:0;
        margin-left: 10px;
    }
    .aa:after{
        position: absolute;
    }
    .vide ul img{
        width: 100%;
    }
    .vide ul li{
        margin-right: 7px;
    }
    .section video{
        display: block;
        width: 100%;
        height: 100%;
        text-align: center;
        background-repeat: no-repeat;
        background-position: 50%;
    }
    .aa{
        text-align: center;
    }
    footer{
        margin-top: 13%;
    }
    footer ul{
        overflow: hidden;
    }
    footer li{
        border: 1px solid black;
        width: 45%;
        text-align: center;
        background-color: #008cff;
        border-radius: 35px;
        float: left;
        margin: 2%;
        position: relative;
    }
    footer p{
        color: #fff;
        line-height: 9.72222vw;
        font-size: 5.25926vw;
        margin-left: 17%;
    }
    footer img{
        float: left;
        position: absolute;
        width: 47px;
        margin: 3% -43%;
    }
    footer .left{
        float: left;
        width: 50%;
        margin: 4% 2%;
    }
    footer .right{
        float: right;
        width: 30%;
        margin: 5% -13%;
    }
    footer span{
        font-size: 21px;
        color: #999;
    }
    .right b{
        font-size: 26px;
        position: relative;
    }
    .right .zg{
        position: absolute;
        width: 40px;
        margin: -1% -6%;
    }
</style>
