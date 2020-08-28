<template>
    <main>
    <div class="header">
        <span @click="go()" class="back"> < </span>
        <span>M码通道</span>
    </div>
    <div class="nav">
        <p><input type="text" placeholder="请输入M码"></p>
        <p><button @click="ok()">确认</button></p>
    </div>
    <div class="footer">
        <ul>
            <li v-for="(item,index) in list">
                <p>{{item.title}}</p>
            </li>
        </ul>
    </div>
    </main>
</template>

<script>
    export default{
           methods:{
            go(){
                this.$router.replace('/center')
            },
            ok(){
                alert("欢迎进入M码通道！")
            }
           },
           
           data(){
        return{
            list:[
                {
                    title:'关于M码' 
                },
                {
                    title:'M码是魅族为资深热心魅友提供的一项服务，用于魅族商城的新产品优先购买。' 
                },
                {
                    title:'获得资格' 
                },
                {
                    title:'1.官方不定期开放发码，请随时留意魅族社区动态，后续也将开放兑换机制；' 
                },
                {
                    title:'2.获得资格取决于帐号贡献度，如魅族社区的注册时长、帐号活跃度、发帖精华数量、版务服务、违规情况、参与魅友家活动等；' 
                },
                {
                    title:'3.每批次M码对应的产品和可购买数量会有不同，请留意发放当期的说明；' 
                },
                {
                    title:'4.当期收到M码，短期内如无特殊情况一般不会再次获得。' 
                },
                {
                    title:'使用说明' 
                },
                {
                    title:'1.有效期内，可以购买限定数量的指定机型。' 
                },
                {
                    title:'2.一个M码仅能使用一次，下单后作废，有效期及其他注意事项，请留意每次发布公告。' 
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
        text-align:center;
        border-bottom:1px solid grey;
    }
    span{
        font-size:30px;
    }
    .back{
        float:left;
    }
    .nav{
        text-align:center;
    }
    .nav input{
        width:80%;
        height:40px;
        border:1px solid gray;
        margin-top:20px;
    }
    button{
        height:40px;
        width:80%;
        margin:20px 0px;
    }
    .footer p{
        line-height:4vh;
    }
</style>