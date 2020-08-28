<template>
        <div class="header">
            <p><input type="text" placeholder="请输入用户名" class="user"></p>
            <p><input type="text" placeholder="请输入密码" class="password"></p>
            <router-link to="/center"><p>登录</p></router-link>
        </div>
</template>

<script>
    export default{
    }
</script>

<style scoped>
     .header{
        height:30vh;
        width:100%;
        margin-top:15vh;
    }
    .header p{
        text-align:center;
        margin-top:1vh;
        font-size:20px;
    }
    .header input{
        width:300px;
        height:40px;
        border:1px solid blue;
    }
</style>