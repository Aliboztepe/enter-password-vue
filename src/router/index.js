import Vue from 'vue'
import VueRouter from 'vue-router'
import PasswordView from '../views/EnterPassword.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/password',
    name: 'password',
    component: PasswordView
  },
]

const router = new VueRouter({
  routes
})

export default router
