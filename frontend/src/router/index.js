import { createRouter, createWebHistory } from 'vue-router'
import Admission from '../views/Admission.vue'

const routes = [
  {
    path: '/',
    name: 'Admission',
    component: Admission
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
