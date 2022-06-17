import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/track',
      name: 'Track',
      // route level code-splitting
      // this generates a separate chunk (Track.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Track.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin/Admin.vue')
    },
    {
      path: '/admin/add-parcel',
      name: 'Parcel',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin/add-parcel.vue')
    },
    {
      path: '/admin/add-location',
      name: 'Location',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/admin/add-location.vue')
    },
    {
      path: '/cargo',
      name: 'Cargo',
      // route level code-splitting
      // this generates a separate chunk (Login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Cargo.vue')
    }
  ]
})

export default router
