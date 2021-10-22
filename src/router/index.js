import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePostulant from '../components/home-postulant'
import login from "@/components/login";
import register from "@/components/register";

Vue.use(VueRouter)

const routes = [

  {
    path: '/home-postulant',
    name: 'home-postulant',
    component: HomePostulant
  },
  {
    path: '/login',
    name: 'LogIn',
    component: login
  },
  {
    path: '/register',
    name: 'Register',
    component: register
  },
  {
    path: '/register-form/:type',
    name: 'RegisterForm',
    component: () => import('../components/register-form')
  },
  {
    path: '/my-interviews',
    name: 'my-interviews',
    component: () => import('../components/my-interviews')
  },
  {
    path: '/watch-job',
    name: 'watchjob',
    component: () => import('../components/watch-job')
  },
  {
    path: '/my-postulations',
    name: 'mypostulations',
    component: () => import('../components/my-postulations')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/watch_job/postulation',
    name: 'Postulation',
    component: () => import(/* webpackChunkName: "about" */ '../components/postulation-step-1')
  },
  {
    path:'/watch_job/postulation2',
    name: 'Postulation-step-2',
    component: () => import(/* webpackChunkName: "about" */ '../components/postulation-step-2')
  },
  {
    path:'/watch_job/postulation3',
    name: 'postulation-step-3',
    component: () => import(/* webpackChunkName: "about" */ '../components/postulation-step-3')
  },
  {
    path: '/watch_job/confirmation',
    name: 'confirmation-postulation',
    component: () => import('../components/confirmation-postulation')
  },
  {
    path: '/create-ad',
    name: 'create-ad',
    component: () => import('../components/create-job-ad')
  },
  {
    path: '/choose-postulant',
    name: 'choose_postulant',
    component: () => import('../components/choose-postulant')
  },
  {
    path: '/home-employer',
    name: 'home_employer',
    component: () => import('../components/home-employer')
  },
  {
    path: '/approved-postulant',
    name: 'approved_postulant',
    component: () => import('../components/approved-postulant')
  },
  {
    path: '/contract',
    name: 'contract',
    component: () => import('../components/contract')
  },
  {
    path: '/create-interview',
    name: 'create-interview',
    component: () => import('../components/create-interview')
  },
  {
    path: '/professional-profile',
    name: 'profile',
    component: () => import('../components/professional-profile')
  },
  {
    path: '/modify-job-ad',
    name: 'modify-job-ad',
    component: () => import('../components/modify-job-ad')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
