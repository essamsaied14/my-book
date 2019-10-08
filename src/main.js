import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
import "jquery-ui";
// import 'owl.carousel'; 

// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";

import "./assets/app.scss";
// links index html
import "../src/assets/fonts/icomoon/style.css";

import "../src/assets/css/style.css";
// import BootstrapVue from "bootstrap-vue";
// Vue.use(BootstrapVue);

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import scss from "./assets/style/app.scss";
// Vue.use(scss);
import SiteHeader from "./views/layout/header.vue";
import SiteFooter from "./views/layout/footer.vue";
import Car from "./views/pages/HomeComponent.vue";
import ProductCard from "./components/product/product-card.vue";

Vue.component("site-header", SiteHeader);
Vue.component("site-footer", SiteFooter);
Vue.component("site-car", Car);
Vue.component("product-card", ProductCard);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");