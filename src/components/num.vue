<template>
<main>
    <div class="header">
        <span class="one" @click="go()"><</span>
        <span>账号问题</span>
    </div>
    <div class="nav">
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
        data(){
        return{
            list:[
                {
                    title:'为了给用户带来更好的服务体验，即日起 Flyme 将提供冻结 Flyme 账号、解冻 Flyme 账号、注销 Flyme 账号的增值服务。' 
                },
                {
                    title:' 1、冻结账号  ' 
                },
                {
                    title:'服务内容：Flyme 账号暂停登录，但保留当前账号信息。' 
                },
                {
                    title:'注：以下 3 种情况不能申请冻结账号 ' 
                },
                {
                    title:'1）账号有未支付或正在退款的订单； ' 
                },
                {
                    title:'2）账号已绑定开发者账号； ' 
                },
                {
                    title:'3）账号未退出所有绑定的设备。 ' 
                },
                {
                    title:'2、解冻账号  ' 
                },
                {
                    title:'服务内容：恢复账号使用 ' 
                },
                {
                    title:'3、注销账号 ' 
                },
                {
                    title:'服务内容：删除 Flyme 账号所有信息，包括但不限于实名认证、手机号、邮箱、昵称等信息。注销后，账号将永久不能登录，账户内金豆也会被清零。 ' 
                },
                {
                    title:'注：以下 5 种情况不能申请注销账号 ' 
                },
                {
                    title:'1）当前账号魅币存在余额、有未支付订单、有正在退款订单； ' 
                },
                
                {
                    title:'3）账号未退出所有绑定的设备； ' 
                },
                {
                    title:'4）账号有未过期的视频会员服务； ' 
                },
                {
                    title:'5）账号有未过期的付费云服务。 ' 
                },
                {
                    title:'4、如何申请 ' 
                },
                {
                    title:'如需申请上述服务，请您提供申请材料，编辑邮件发送至 mzzhfw@meizu.com 邮箱，工作人员在收到您的申请材料后将尽快审核并处理。 ' 
                },
                {
                    title:' 5、申请材料  ' 
                },
                {
                    title:' Flyme 账号（必须提供）、昵称、手持身份证照片（该身份证绑定了对应的 Flyme 账号） ' 
                },
            ]
        }
        },
        methods:{
        go(){
            this.$router.go(-1)
        }
        } 
    }
</script>
<style scoped>
    .header{
        height:5vh;
        width:100%;
        text-align:center;
        border-bottom:1px solid red;
    }
    .header span{
        font-size:30px;
       
    }
             .header .one{
        float:left;
    }
    .nav{
        height:90vh
    }
    .nav p{
        line-height:5vh
    }
</style>