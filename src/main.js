import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import { routes } from './routes.js'
import {store} from "./store/store";


// import axios from 'axios'
// const axiosInstance = axios.create({
//   baseURL: "http://localhost:3000"
// });
// Vue.prototype.$axios = axiosInstance;


Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
})
router.beforeEach((to, from, next) => {
  next();
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
