<template>
    <main>
        <div>
            <span @click="go()" class='header'> < </span>
            <ul>
            <li v-for="(item,index) in list">
                <router-link :to="item.path">
                    <span class='nav'>{{item.con}}</span>
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default{
        methods:{
            go(){
                this.$router.replace('/page')
            }
           },
        data(){
        return{
            list:[
                {
                    path:'/af',
                    con:'商城app'
                },
                 {
                    path:'/as',
                    con:'社区app'
                },
                 {
                    path:'/at',
                    con:'服务app'
                },
            ]
        }
        }
    }
</script>
<style scoped>
    div{
        height:5vh;
        width:100%;
        background:#fd31a6
    }
    .header{
        font-size:30px;
        position:fixed;
    }
    li{
        float:left;
    }
    .nav{
        font-size:30px;
        margin:5px 17px;
         
    }
</style>