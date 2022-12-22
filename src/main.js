//import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'
import VueMq from 'vue-mq'

//import bootstrap from 'bootstrap' 
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// Vue.use(require('bootstrap-vue/dist/bootstrap-vue.common.min'));

// createApp(App).use(router).mount('#app') (za vue3)

new Vue({

    router,
    render: h => h(App),

}).$mount('#app')

Vue.use(VueMq, {
    breakpoints: {
        mobile: 450,
        tablet: 900,
        laptop: 1250,
        desktop: Infinity,
    }
})
