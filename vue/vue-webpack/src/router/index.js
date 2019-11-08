// 1.安装vue-royter
// 2在src下创建router文件夹 创建index.js配置文件
// 在入口文件中引入配置文件 挂载路由

import Vue from 'vue'
import VueRouter from 'vue-router'
import dongtai from 'components/dongtai/index.vue'
import np from 'components/np.vue'

Vue.use(VueRouter)

export default new VueRouter({
    // 书写路由列表
    routes:[
       {
           path:'/'
       },
      {
        path:'/dongtai',
        component: dongtai
    },{
        path:'/np',
        component:np
    }

]
})