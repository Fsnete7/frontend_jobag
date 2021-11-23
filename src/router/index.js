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
<<<<<<< Updated upstream
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')

=======
    component: () => import('../views/About.vue')
>>>>>>> Stashed changes
  },
  {
    path:'/watch_job/postulation',
    name: 'Postulation',
<<<<<<< Updated upstream
    component: Postulation
=======
    component: () => import('../components/postulation-step-1')
>>>>>>> Stashed changes
  },
  {
    path:'/watch_job/postulation2',
    name: 'Postulation-step-2',
<<<<<<< Updated upstream
    component: Postulation2
=======
    component: () => import('../components/postulation-step-2')
>>>>>>> Stashed changes
  },
  {
    path:'/watch_job/postulation3',
    name: 'postulation-step-3',
<<<<<<< Updated upstream
    component: Postulation3
=======
    component: () => import('../components/postulation-step-3')
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
    path: '/joob-offer/:id/choose-postulant',
    name: 'choose-postulant',
    component: () => import('../components/choose-postulant')
  },
  {
    path: '/:id/home-employer',
    name: 'home-employer',
>>>>>>> Stashed changes
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
