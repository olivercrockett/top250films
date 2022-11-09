import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import(/* webpackChunkName: "movie" */ '../views/MovieInfo.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
