<template>
    <main>
        <div class="header">
            <span @click="back()"><</span>
            <router-link to='/baby'><span class="one">宝贝</span></router-link>
            <router-link to='/store'><span class="two">店铺</span></router-link>
        </div> 
    </main>
</template>

<script>
    export default{
        methods:{
            back(){
                this.$router.replace('/page')
            }
           }
    }
</script>

<style scoped>
    .header{
        height:10vh;
        width:100%;
    }
    
</style>