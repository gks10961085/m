import VueRouter from 'vue-router';

import first from '../../components/first.vue'
import recommend from '../../components/recommend.vue'
import phone from '../../components/phone.vue'
import acoust from '../../components/acoust.vue'
import acce from '../../components/acce.vue'
import life from '../../components/life.vue'
import xhqx from '../../components/xhqx.vue'
import mz from '../../components/mz.vue'
import photo from '../../components/photo.vue'
import cycle from '../../components/cycle.vue'
import search from '../../components/search.vue'

import page from '../../components/page.vue'
import person from '../../components/person.vue'
import order from '../../components/order.vue'
import red from '../../components/red.vue'
import my from '../../components/my.vue'
import address from '../../components/address.vue'
import collection from '../../components/collection.vue'
import product from '../../components/product.vue'
import flyme from '../../components/flyme.vue'
import clound from '../../components/clound.vue'
import shop from '../../components/shop.vue'
import service from '../../components/service.vue'
import community from '../../components/community.vue'
import app from '../../components/app.vue'
import government from '../../components/government.vue'
import meizu17 from '../../components/meizu17.vue'
import t from '../../components/t.vue'
import old from '../../components/old.vue'
import m from '../../components/m.vue'
import contact from '../../components/contact.vue'
import feedback from '../../components/feedback.vue'
import center from '../../components/center.vue'
import num from '../../components/num.vue'
import af from '../../components/af.vue'
import as from '../../components/as.vue'
import at from '../../components/at.vue'

export default new VueRouter({
    routes:[
            {
                path:'/',
                component:first,
                children:[
            {
                    path:'/recommend',
                    component:recommend
                },
                {
                    path:'/phone',
                    component:phone
                },
                {
                    path:'/acoust',
                    component:acoust
                },
                {
                    path:'/acce',
                    component:acce
                },
                {
                    path:'/life',
                    component:life
                },
            ],
            redirect:'/recommend'
        },
        {
            path:'/xhqx',
            component:xhqx
        },
        {
            path:'/mz',
            component:mz
        },
        {
            path:'/photo',
            component:photo
        },
        {
            path:'/cycle',
            component:cycle
        },
        {
            path:'/search',
            component:search
        },
        {
            path:'/page',
            component:page
        },
        {
            path:'/person',
            component:person
        },
        {
            path:'/order',
            component:order
        },
        {
            path:'/red',
            component:red
        },
        {
            path:'/my',
            component:my
        },
        {
            path:'/address',
            component:address
        },
        {
            path:'/collection',
            component:collection
        },
        {
            path:'/product',
            component:product
        },
        {
            path:'/flyme',
            component:flyme
        },
        {
            path:'/clound',
            component:clound
        },
        {
            path:'/shop',
            component:shop
        },
        {
            path:'/service',
            component:service
        },
        {
            path:'/community',
            component:community
        },
        {
            path:'/app',
            component:app,
            children:[
                {
                    path:'/af',
                    component:af
                },
                {
                    path:'/as',
                    component:as
                },
                {
                    path:'/at',
                    component:at
                },
            ],
        },
        {
            path:'/government',
            component:government, 
        },
        {
            path:'/meizu17',
            component:meizu17,
            
        },
        {
            path:'/old',
            component:old
        },
        {
            path:'/m',
            component:m
        },
        {
            path:'/t',
            component:t
        },
        {
            path:'/contact',
            component:contact
        },
        {
            path:'/feedback',
            component:feedback
        },
       
        // {
        //     path:'/login',
        //     component:login
        // },
        {
            path:"/center",
            component:center
        },
        {
            path:'/num',
            component:num
        },
        {
            path:'/*',
            redirect:'/recommend'
        },
    ]
})