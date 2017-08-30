import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path:'/home',
      name:'Home',
      component:Home
    },
    {
      path:'/time-entries',
      component:TimeEntries
    }]
})
