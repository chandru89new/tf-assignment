import Vue from "vue";
import VueI18n from "vue-i18n";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.sass";
import "./utils/filters";
import i18n from "@/utils/translations";

Vue.config.productionTip = false;
Vue.use(VueI18n);
new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
