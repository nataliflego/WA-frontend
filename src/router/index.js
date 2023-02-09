import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Pocetna from '@/views/Pocetna.vue'
import UpisiBolest from '@/views/UpisiBolest.vue'

import { Auth } from '@/services'


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
      path: '/forma',
      name: 'Forma',
      component: () => import(/* webpackChunkName: "about" */ '@/views/Forma.vue')
    },
  ]
})

router.beforeEach((to, from, next) => {      //   DELA!!
  const korisnik = Auth.dajkorisnika();
  if (to.name == 'Forma' && !korisnik) next({ name: 'Prijava' })
  else next()
})

/*router.beforeEach((to, from, next) => {
  const otvorenestranice = ["pocetna", "UpisiBolest", "Registracija", "Prijava"];   // DODAT JOS KAD NACINIS VIEWSE (views Bolest)
  const prijavapotrebna = !otvorenestranice.includes(to.path);
  const korisnik = Auth.dajkorisnika();

  if (prijavapotrebna && !korisnik) {
    next('/Prijava');   // mislin da triba pojt na registraciju
    //return;
  } else next();
  /* if (prijavapotrebna && korisnik) {
    next('/Prijava');
    return;
  } */

//next();
//})

export default router
