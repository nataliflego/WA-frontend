import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Pocetna from '@/views/Pocetna.vue'
import PretraziBolest from '@/views/PretraziBolest.vue'

import { Auth } from '@/services'


const router = createRouter({
  mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'pocetna',
      component: Pocetna
    },
    {
      path: '/pretrazibolest',
      name: 'PretraziBolest',
      component: () => import(/* webpackChunkName: "about" */ '@/views/PretraziBolest.vue')  //Komponenta koja se montira kada se path unese u URL traku preglednika

    },
    {
      path: '/registracija',
      name: 'Registracija',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Registracija.vue')

    },
    {
      path: '/prijava',
      name: 'Prijava',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Prijava.vue')
    },
    {
      path: '/dodajiskustvo',
      name: 'Dodajiskustvo',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Dodajiskustvo.vue')
    },
    {
      path: '/iskustva',
      name: 'Iskustva',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Iskustva.vue')
    },
    {
      path: '/iskustva2/:searchTerm', //definiran dinamicki parametar
      name: 'Iskustva2',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Iskustva2.vue')
    },
    {
      path: '/detaljno/:id',
      name: 'Detaljno',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Detaljno.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {      //   DELA!!
  const korisnik = Auth.dajkorisnika();
  if (to.name == 'Dodajiskustvo' && !korisnik) next({ name: 'Prijava' })
  else next()
})

/* router.beforeEach((to, from, next) => {
  const otvorenestranice = ["pocetna", "PretraziBolest", "Registracija", "Prijava", 'Detaljno', 'Iskustva2'];   // DODAT JOS KAD NACINIS VIEWSE (views Bolest)
  const prijavapotrebna = !otvorenestranice.includes(to.path);
  const korisnik = Auth.dajkorisnika();
  //potreban login ali nema korisnika
  if (prijavapotrebna && !korisnik) {
    return next('/prijava');
  }

  next();
}) */

export default router
