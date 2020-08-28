<template>
    <main>
        <div class="topacce">
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
    </main>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    src:'./src/assets/images/acctop.jpg'
                }
            ],
            list1:[
                {
                    src:'./src/assets/images/acc1.jpg',
                    h2:'魅族无线超充板',
                    title:'【8.26 APP限时抢购149元 | 前往魅族商城APP抢购专区选购】魅族 17 Pro 适用 | 27W 无线快充 | 主动散热 | 智能静音 | 玉润设计',
                    price:'￥169',
                },
                {
                    src:'./src/assets/images/acc2.jpg',
                    h2:'Pandaer 「17」系列 手机壳',
                    title:'【APP积分兑换10元优惠券】魅族 17 / 魅族 17 Pro 适用 | Pandaer 家族 | 潮趣个性 | 官方适配',
                    price:'￥49',
                },
                {
                    src:'./src/assets/images/acc3.jpg',
                    h2:'魅族 17 系列 液态硅胶壳',
                    title:'魅族 17 / 魅族 17 Pro 适用 | 官方适配 | 魅族手感 | 柔韧保护',
                    price:'￥89',
                },
                {
                    src:'./src/assets/images/acc4.jpg',
                    h2:'魅族 Type-C 数据线',
                    title:'5A 大电流 | Type-C 接口 | 更快更方便',
                    price:'￥49',
                },
                {
                    src:'./src/assets/images/acc5.jpg',
                    h2:'魅族 Type-C 游戏专用线',
                    title:'Type-C 接口 | 5A大电流 | 弯头专为游戏设计 | 耐磨编织材料',
                    price:'￥49',
                },
                {
                    src:'./src/assets/images/acc6.jpg',
                    h2:'魅族中国红 Type-C 金属编织线',
                    title:'极边全面屏 | 4800W AI三摄 | 疾速屏下指纹 | 4000mAh大电池 | 高通骁龙675 | Onemind 3.0 | 绚丽多彩新色系',
                    price:'￥39',
                },
                {
                    src:'./src/assets/images/acc7.jpg',
                    h2:'魅族移动电源3',
                    title:'6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段',
                    price:'￥89',
                },
                {
                    src:'./src/assets/images/acc8.jpg',
                    h2:'魅族无线充电器',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥129',
                },
                {
                    src:'./src/assets/images/acc9.jpg',
                    h2:'Lifeme PD 快充线',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥299',
                },
                {
                    src:'./src/assets/images/acc10.jpg',
                    h2:'魅族超充 USB-C 移动电源',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥169',
                },
                {
                    src:'./src/assets/images/acc11.jpg',
                    h2:'魅族 V8 高配版高透保护膜',
                    title:'高透光率 助双眼捕捉每一颗像素的色彩',
                    price:'￥19',
                },
            ],
        }
    }
}
</script>

<style scoped>
    .topacce img{
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
</style>