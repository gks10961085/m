<template>
    <main>
        <span @click="go()"> < </span>
        <h1>M码通道</h1>
    </main>
</template>

<script>
    export default{
       
           methods:{
            go(){
                this.$router.replace('/center')
            }
           }
    }
</script>
<style scoped>
    span{
        font-size:20px;
    }
</style>