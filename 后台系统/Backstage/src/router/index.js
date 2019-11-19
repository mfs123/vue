import Vue from 'vue'
import Router from 'vue-router'
import login from '../components/login/index.vue'
import fogjet from '../components/login/forjet.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login
    }, {
      path: '/forget',
      component: fogjet
    },
	
  ]
})
