<template>
    <main>
        <div class="topaco">
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
                    src:'./src/assets/images/acto.jpg'
                }
            ],
            list1:[
                {
                    src:'./src/assets/images/ac1.jpg',
                    h2:'魅族 HD60 降噪耳机',
                    title:'【夏日限时特惠999元】索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 | 轻奢品质',
                    price:'￥1099',
                },
                {
                    src:'./src/assets/images/ac2.jpg',
                    h2:'魅族 POP2 真无线蓝牙耳机',
                    title:'蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适',
                    price:'￥399',
                },
                {
                    src:'./src/assets/images/ac3.jpg',
                    h2:'魅族 HIFI 解码耳放',
                    title:'【夏日限时特惠119元】高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线 | 音乐发烧友必备',
                    price:'￥169',
                },
                {
                    src:'./src/assets/images/ac4.jpg',
                    h2:'魅族 EP3C 耳机',
                    title:'【夏日限时特惠99元】Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜',
                    price:'￥129',
                },
                {
                    src:'./src/assets/images/ac5.jpg',
                    h2:'魅族 EP63NC 无线降噪耳机',
                    title:'【夏日限时特惠299元】AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分钟畅听3小时',
                    price:'￥399',
                },
                {
                    src:'./src/assets/images/ac6.jpg',
                    h2:'魅族 16Xs',
                    title:'极边全面屏 | 4800W AI三摄 | 疾速屏下指纹 | 4000mAh大电池 | 高通骁龙675 | Onemind 3.0 | 绚丽多彩新色系',
                    price:'￥499',
                },
                {
                    src:'./src/assets/images/ac7.jpg',
                    h2:'魅族 16T',
                    title:'6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段',
                    price:'￥89',
                },
                {
                    src:'./src/assets/images/ac8.jpg',
                    h2:'魅族 17',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥129',
                },
                {
                    src:'./src/assets/images/ac11.jpg',
                    h2:'魅族 17',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥299',
                },
                {
                    src:'./src/assets/images/ac10.jpg',
                    h2:'魅族 17',
                    title:'【限时领券立省200 | 购魅族17赠全新壳膜套装 | 学生购机享精美礼品】高通骁龙 865 | UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 重量平衡设计 | mSmart 5G 快省稳系统方案 | 30W有线超充',
                    price:'￥429',
                },
                {
                    src:'./src/assets/images/ac9.jpg',
                    h2:'魅族蓝牙音频接收器',
                    title:'独立音频芯片 | 一键控制 | 6小时续航 | 轻巧设计',
                    price:'￥89',
                },
            ],
        }
    }
}
</script>

<style scoped>
    .topaco img{
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