import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

//  注册两个插件
Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter()

router.map({
  '/Home': {
    component: Home
  },
  'time-entries': {
    component: TimeEntries,
    subRoutes: {
      '/log-time': {
        component: LogTime
      }
    }
  }
})

router.redirect({
  '*': '/Home'
})

router.start(App, '#app')
