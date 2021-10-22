import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePostulant from '../components/home-postulant'
import WatchJob from '../components/watch-job'
import Postulation from "../components/postulation-step-1";
import Postulation2 from '../components/postulation-step-2';
import Postulation3 from '../components/postulation-step-3'
import ConfirmationPostulation from '../components/confirmation-postulation'
import CreateInterview from '../components/create-interview'
Vue.use(VueRouter)

const routes = [

  {
    path: '/home-postulant',
    name: 'home-postulant',
    component: HomePostulant
  },
  {
    path: '/watch-job',
    name: 'watchjob',
    component: WatchJob
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

  },
  {
    path:'/watch_job/postulation',
    name: 'Postulation',
    component: Postulation
  },
  {
    path:'/watch_job/postulation2',
    name: 'Postulation-step-2',
    component: Postulation2
  },
  {
    path:'/watch_job/postulation3',
    name: 'postulation-step-3',
    component: Postulation3
  },
  {
    path: '/watch_job/confirmation',
    name: 'confirmation-postulation',
    component: ConfirmationPostulation
  },
  {
    path: '/create-ad',
    name: 'create_job_ad',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/create-job-ad')
  },
  {
    path: '/choose-postulant',
    name: 'choose_postulant',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/choose-postulant')
  },
  {
    path: '/home-employer',
    name: 'home_employer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/home-employer')
  },
  {
    path: '/approved-postulant',
    name: 'approved_postulant',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/approved-postulant')
  },
  {
    path: '/contract',
    name: 'contract',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/contract')
  },
  {
    path: '/create-interview',
    name: 'create-interview',
    component: CreateInterview
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
