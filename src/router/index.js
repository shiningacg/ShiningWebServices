import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Watch from '../views/Watch/Watch'
import Login from '../views/Login/Login'
import Comic from "../views/Comic/Comic"
import Dashboard from "@/views/Dashboard/Main"
import Test from "@/views/Test"

import Error from "@/views/Error/Main"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/latest',
    component: Home,
    children: [
      {
        path: "latest",
        name: "Latest",
        component: () => import("@/views/Home/Latest")
      },
      {
        path: "project",
        name: "Project",
        component: () => import("@/views/Home/Project")
      }
    ]
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch
  },
  {
    path: "/info/:id",
    name: "Info",
    component: () => import("@/views/Info/Main")
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
    component: Dashboard,
    children: [
      {
        path: "/",
        redirect: "/dashboard/user",
        name: "home"
      },
      {
        path: "new",
        name: "New",
        component: () => import("@/views/Dashboard/New/New")
      },
      {
        path: "manage",
        name: "Manage",
        component: () => import("@/views/Dashboard/Manage/Main"),
        children: [{
          path: "edit/:id",
          name: "Editor",
          component: () => import("@/views/Dashboard/Manage/Setting")
        },
          { path: "",
            name: "Home",
            component: () => import("@/views/Dashboard/Manage/Show")
          }
        ]
      },
      {
        path: "user",
        name: "User",
        component: () => import("@/views/Dashboard/User/User")
      }
    ]
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
        component: () => import("@/views/Error/DeviceNotSupport")
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
