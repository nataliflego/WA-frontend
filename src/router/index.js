import { createRouter, createWebHistory } from 'vue-router'  // te funkcije stvaraju povijest na koju se korisnik može vratiti i konstruirati objekt usmjerivača za Vue


/* import bootstrap from 'bootstrap' */
import Pocetna from '../views/Pocetna.vue'
import UpisiBolest from '../views/UpisiBolest.vue'
//Vue.use(BootstrapVue)

const routes = [
  {
    path: '/',
    name: 'pocetna',
    component: Pocetna
  },
  {
    path: '/upisibolest',
    name: 'UpisiBolest',/* 
    component: () => import(/* webpackChunkName: "about" */ /*'../views/UpisiBolest.vue') */ //Komponenta koja se montira kada se path unese u URL traku preglednika
    component: UpisiBolest
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes  // skraceno od routes: routes
});

export default router

