import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
//import Opiniones from '@/views/Opiniones'
import NotFound from '@/views/NotFound.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones/:name',
    props: true,
    component: () => import(/* webpackChunkName: "Opiniones" */ '@/views/Opiniones.vue')
    
  },
  {
    path: '/administracion/:id',
    name: 'administracion',
    component: () => import(/* webpackChunkName: "Opiniones" */ '@/views/Administracion.vue')
  },
  {
    path:'/:pathMatch(.*)*',
    component: NotFound,
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
