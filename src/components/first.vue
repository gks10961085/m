<template>
    <main>
        <header>
            <div class="sy">
                <router-link to="/search">
                    <img src="../assets/images/search.png" alt="" class="sea">
                </router-link>                
                <img src="../assets/images/logo.png" alt="" class="logo">
                <img src="../assets/images/购物车.png" alt="" class="car">
                <span class="menu">
                    <router-link to='page'>
                        <img src="../assets/images/右侧菜单.png" alt="">
                    </router-link>
                </span>
            </div>
        </header>
        
            <ul class="ft">
                <li v-for="(item,index) in list">
                    <router-link :to="item.path">
                        <p>{{item.con}}</p>
                    </router-link>
                </li>
            </ul>
        <router-view></router-view>
    </main>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    path:'/recommend',
                    con:'推荐'
                },
                {
                    path:'/phone',
                    con:'手机'
                },
                {
                    path:'/acoust',
                    con:'声学'
                },
                {
                    path:'/acce',
                    con:'配件'
                },
                {
                    path:'/life',
                    con:'生活'
                },
            ]
        }
    }
}
</script>

<style scoped>
    header{
        overflow: hidden;
    }
    .sy{
        overflow: hidden;
        position: relative;
    }
    .sy .sea{
        position: absolute;
        width: 45px;
        margin: 39px 36px;
    }
    .sy .car{
        position: absolute;
        width: 45px;
        margin: -87px 640px;
    }
    .ft{
        overflow: hidden;
    }
    .ft li{
        font-size: 32px;
        float: left;
       width: 20%;
       text-align: center;
    }
    .logo{
        width: 30%;
        margin: 13px 274px;
    }
    .menu{
       float:right;
       margin-top:-10%; 
       margin-right:4%;
       font-size: 30px;
    }
</style>