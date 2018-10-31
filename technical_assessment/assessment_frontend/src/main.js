
import Vue from 'vue'
import { routes } from './routes.js';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue'



// vue notifications 

//desktop notifications
import Notifications from 'vue-notification';

//use desktop notification
Vue.use(Notifications)
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
 
  routes,
  mode: 'history'
});

new Vue({
 
  el: '#app',
  router,
  render : h => h(App),

})


