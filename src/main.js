// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'    //  swiper < 6.x
// import VeeValidate from 'vee-validate'

import App from './App'
import router from './router'

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
// Vue.use(VeeValidate)
Vue.component('Loading',Loading);
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

axios.defaults.withCredentials = true ;


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next);

  if(to.meta.requiresAuth){
        console.log('請驗證');
        const api = `${process.env.APIPATN}/api/user/check`;
        axios.post(api).then((response) => {
        console.log(response.data)
        if(response.data.success){
            next();
        }else{
          next({
            path:'/login',
          })
        }
      });
    }else{
      next();
    }
  }
);