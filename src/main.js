import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
import "jquery-ui";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";
let owl_carousel = require('owl.carousel');
window.fn = owl_carousel;
import "../src/assets/css/jquery.fancybox.min.css"
import "../src/assets/fonts/flaticon/font/flaticon.css"
import "./assets/app.scss";

// links index html
import "../src/assets/fonts/icomoon/style.css";
// import "../src/assets/css/aos.css"
import "../src/assets/css/style.css";

// import BootstrapVue from "bootstrap-vue";
// Vue.use(BootstrapVue);

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import scss from "./assets/style/app.scss";
// Vue.use(scss);
import SiteHeader from "./views/layout/header.vue";
import SiteFooter from "./views/layout/footer.vue";
import carousel from "./views/pages/HomeComponent.vue";
import productspage from "./views/pages/ProductsPage.vue";
import ProductCard from "./components/product/product-card.vue";
import UpdatesNotification from "./views/pages/UpdatesNotification.vue";
import FeaturedProducts from "./views/pages/FeaturedProducts.vue";
import featuredcard from "./components/product/featured-products-card.vue";
import ContactUs from "./views/pages/ContactUs.vue";




Vue.component("site-header", SiteHeader);
Vue.component("site-footer", SiteFooter);
Vue.component("site-carousel", carousel);
Vue.component("site-products", productspage);
Vue.component("product-card", ProductCard);
Vue.component("updates-notification", UpdatesNotification);
Vue.component("featured-products", FeaturedProducts);
Vue.component("featured-products-card", featuredcard);
Vue.component("contact-us", ContactUs);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");