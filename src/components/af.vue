<template>
    <main>
    <div class='header'>
        <img src="../assets/images/bag1.png">
    </div>
    <div class='nav'>
        <img src="../assets/images/bag1.1.png" @click="back()">
        <p>支持所有 Android 机型安装使用</p>
    </div>
    </main>
</template>
<script>
    export default{
        methods:{
            back(){
                alert("正在下载");
            }
           }
    }
</script>

<style scoped>
   .header img{
        height:80vh;
        width:100%;
    }
    .nav{
        text-align:center;
    }
    .nav img{
        height:7vh;
        width:60%;
    }
</style>