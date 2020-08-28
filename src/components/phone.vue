<template>
    <main>
        <div class="phtop">
            <ul>
                <li v-for="(item,index) in list">
                    <img :src="item.src" alt="">
                </li>
            </ul> 
        </div>
        <div class="phcon">
            <ul>
                <li v-for="(item,index) in list1">
                    <img :src="item.src" alt="">
                    <h2>{{item.h2}}</h2>
                    <p>{{item.title}}</p>
                    <span>{{item.price}}</span>
                </li>
            </ul>
        </div>
        <div class="phdonw">
            <ul>
                <li v-for="(item,index) in list2">
                    <img :src="item.src" alt="">
                </li>
            </ul> 
        </div>
        <div class="phreconment">
            <ul>
                <li class="recontop">
                    <p>为您推荐</p>
                </li>
            </ul>
        <div class="recondonw">
            <ul>
                <li v-for="(item,index) in list3">
                    <img :src="item.src" alt="">
                    <h2>{{item.name}}</h2>
                    <span>{{item.price}}</span>
                </li>
            </ul>
        </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    src:'./src/assets/images/ph1.jpg'
                }
            ],
            list1:[
                {
                    src:'./src/assets/images/ph2.jpg',
                    h2:'魅族 17 Pro',
                    title:'【限时领券至高立省200 | 购17 Pro赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 | 煅烧陶瓷机身 | mSmart 5G 快省稳系统方案',
                    price:'￥4299',
                },
                {
                    src:'./src/assets/images/ph3.jpg',
                    h2:'魅族 17',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥3699',
                },
                {
                    src:'./src/assets/images/ph4.jpg',
                    h2:'魅族 17 Pro 晓芳窑艺术典藏版',
                    title:'这艺术 科技极了',
                    price:'￥9999',
                },
                {
                    src:'./src/assets/images/ph5.jpg',
                    h2:'魅族 16T',
                    title:'6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段',
                    price:'￥1999',
                },
                {
                    src:'./src/assets/images/ph6.jpg',
                    h2:'魅族 16s Pro',
                    title:'高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC',
                    price:'￥2699',
                },
                {
                    src:'./src/assets/images/ph7.jpg',
                    h2:'魅族 16Xs',
                    title:'极边全面屏 | 4800W AI三摄 | 疾速屏下指纹 | 4000mAh大电池 | 高通骁龙675 | Onemind 3.0 | 绚丽多彩新色系',
                    price:'￥1499',
                },
                {
                    src:'./src/assets/images/ph5.jpg',
                    h2:'魅族 16T',
                    title:'6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段',
                    price:'￥1999',
                },
                {
                    src:'./src/assets/images/ph3.jpg',
                    h2:'魅族 17',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥3699',
                },
            ],
            list2:[
                {
                    src:'./src/assets/images/ph8.jpg'
                }
            ],
            list3:[
                {
                    src:'./src/assets/images/17.png',
                    name:'魅族 17',
                    price:'￥1234'
                },
                {
                    src:'./src/assets/images/17pro.png',
                    name:'魅族 17pro',
                    price:'￥1234'
                },{
                    src:'./src/assets/images/ph5.jpg',
                    name:'魅族 16T',
                    price:'￥1234'
                },{
                    src:'./src/assets/images/ac2.jpg',
                    name:'魅族 POP2 真无线蓝牙耳机', 
                    price:'￥1234'
                },{
                    src:'./src/assets/images/acc6.jpg',
                    name:'魅族中国红 Type-C 金属编织线',
                    price:'￥39'
                },
                {
                    src:'./src/assets/images/acc10.jpg',
                    name:'魅族超充 USB-C 移动电源',
                    price:'￥169'
                },
                {
                    src:'./src/assets/images/acc1.jpg',
                    name:'魅族无线超充板',
                    price:'￥169'
                },
                {
                    src:'./src/assets/images/acc9.jpg',
                    name:'Lifeme PD 快充线', 
                    price:'￥299'
                },
            ]
        }
    }
}
</script>

<style scoped>
    .phtop img{
        width: 100%;
        margin-top: 10px;
    }
    .phcon ul{
        overflow: hidden;
    }
    .phcon li{
        width: 48%;
        text-align: center;
        float: left;
        margin-right: 15px;
    }
    .phcon img{
        width: 100%;
    }
    .phcon li h2{
        display: block;
        height:  2.5556rem;
        line-height: .5556rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        color: #333;
        font-size: 3.8888vw;
        line-height: 36px;
    }
    .phcon li p{
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-left: 15px;
        font-size: 26px;
        line-height: 55px;
    }
    .phcon span{
        color: #c00;
        line-height: 55px;
        font-size: 28px;
    }
    .phdonw img{
        width: 100%;
    }
    .phreconment{
        background-color: #f7f7f7;
        overflow: auto;
    }
    .phreconment .recontop{
        width: 100%;
        height: 136px;
        text-align: center;
    }
    .recontop p{
        font-size: 40px;
        padding-top: 40px;
    }
    .recondonw{
        width: 100%;
        overflow: auto;
    }
    .recondonw ul{
        width: 360%;
    }
    .recondonw li{
        width: 12%;
        float: left;
        margin-right: 10px;
        text-align: center;
        background: white;
    }
    .recondonw li img{
        width:100%; 
    }
    .recondonw h2{
        display: block;
        height: 2.5556rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 500;
        color: #333;
        font-size: 3.8888vw;
        line-height: 36px;
    }
    .recondonw span{
        color: #c00;
        line-height: 55px;
        font-size: 28px;
    }
</style>