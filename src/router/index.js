import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Watch from '../views/Watch/Watch'
import Login from '../views/Login/Login'
import Comic from "../views/Comic/Comic"
import Dashboard from "@/views/Dashboard/Main"
import Test from "@/views/Test"

import Error from "@/views/Error/Main"
import DeviceNotSupport from "@/views/Error/DeviceNotSupport";

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
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    },
    {
      path: "/error",
      name: "Error",
      component: Error,
      children: [
        {
          path: "device-not-support",
          name: "DeviceNotSupport",
          component: DeviceNotSupport
        }
      ]
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
