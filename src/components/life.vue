<template>
    <main>
        <div class="lifetop">
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
                    src:'./src/assets/images/life.jpg'
                }
            ],
            list1:[
                {
                    src:'./src/assets/images/li1.jpg',
                    h2:'Lifeme 双肩包',
                    title:'【夏日特惠259元】创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配',
                    price:'￥299',
                },
                {
                    src:'./src/assets/images/li2.jpg',
                    h2:'Pandaer 「17」系列 T恤',
                    title:'潮酷印花 | 丝绸手感 | 100％长绒棉',
                    price:'￥49',
                },
                {
                    src:'./src/assets/images/li3.jpg',
                    h2:'Pandaer 「17」系列 果冻包',
                    title:'【APP积分兑换40元优惠券】潮酷印花 | 超大容量 | 透亮设计',
                    price:'￥99',
                },
                {
                    src:'./src/assets/images/li4.jpg',
                    h2:'Lifeme 相机包',
                    title:'相机包新搭配 | 一机两镜超大容量 | 加厚防冲击材料',
                    price:'￥129',
                },
                {
                    src:'./src/assets/images/li5.jpg',
                    h2:'魅族防飞溅声波电动牙刷',
                    title:'【8.26 APP限时抢购199元 | 前往魅族商城APP抢购专区选购】智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护',
                    price:'￥299',
                },
                {
                    src:'./src/assets/images/li6.jpg',
                    h2:'魅族极简都市双肩包',
                    title:'【夏日限时特惠129元】650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',
                    price:'￥179',
                },
                {
                    src:'./src/assets/images/li7.jpg',
                    h2:'魅族路由器 极速版',
                    title:'天生不凡 快狠稳',
                    price:'￥199',
                },
                {
                    src:'./src/assets/images/li4.jpg',
                    h2:'Lifeme 相机包',
                    title:'相机包新搭配 | 一机两镜超大容量 | 加厚防冲击材料',
                    price:'￥129',
                },
                {
                    src:'./src/assets/images/li5.jpg',
                    h2:'魅族防飞溅声波电动牙刷',
                    title:'【8.26 APP限时抢购199元 | 前往魅族商城APP抢购专区选购】智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护',
                    price:'￥299',
                },
                {
                    src:'./src/assets/images/li6.jpg',
                    h2:'魅族极简都市双肩包',
                    title:'【夏日限时特惠129元】650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅',
                    price:'￥179',
                },
                {
                    src:'./src/assets/images/li7.jpg',
                    h2:'魅族路由器 极速版',
                    title:'天生不凡 快狠稳',
                    price:'￥199',
                },
            ],
        }
    }
}
</script>

<style scoped>
    .lifetop img{
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