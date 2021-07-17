import Vue from "vue";
import App from "./App.vue";

import axios from "axios";
import { store } from "./store/index";

import { router } from "./router/index";
import vuetify from '@/plugins/vuetify' // path to vuetify export
Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: (h) => h(App)
}).$mount("#app");