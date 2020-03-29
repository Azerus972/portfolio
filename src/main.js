/*!

=========================================================
* KM Portfolio - v1.1.0
=========================================================

* Copyright 2020 Azerus 'Kévin Marous' (https://www.kmarous.fr)
* Coded by www.kmarous.fr

=========================================================
*/

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
