import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Watch from '../views/Watch/Watch'
import Login from '../views/Login/Login'
import Comic from "../views/Comic/Comic"
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: "/watch",
      name: "Watch",
      component: Watch
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/comic",
      name: "Comic",
      component: Comic
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
