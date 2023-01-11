import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Pocetna from '@/views/Pocetna.vue'
import UpisiBolest from '@/views/UpisiBolest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'pocetna',
      component: Pocetna
    },
    {
      path: '/upisibolest',
      name: 'UpisiBolest',
      component: () => import(/* webpackChunkName: "about" */ '@/views/UpisiBolest.vue')  //Komponenta koja se montira kada se path unese u URL traku preglednika

    }
  ]
})

export default router
