import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;
import "popper.js";
import "bootstrap";
import "jquery-ui";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// const random = require('random');
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel";
let owl_carousel = require("owl.carousel");
window.fn = owl_carousel;
import "../src/assets/css/jquery.fancybox.min.css";
import "../src/assets/fonts/flaticon/font/flaticon.css";
import "./assets/app.scss";
Vue.component('VueFontawesome', require('vue-fontawesome-icon/src/components/VueFontawesome.vue').default);

Vue.config.productionTip = false
// links index html
import "../src/assets/fonts/icomoon/style.css";
// import "../src/assets/css/aos.css"
import "../src/assets/css/style.css";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);
Vue.use(ElementUI);


// import BootstrapVue from "bootstrap-vue";
// Vue.use(BootstrapVue);

// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import scss from "./assets/style/app.scss";
// Vue.use(scss);
import SiteHeader from "./views/layout/header.vue";
import SiteFooter from "./views/layout/footer.vue";
import HomePage from "./views/pages/HomeComponent.vue";
import TopSection from "./views/pages/TopSection.vue";
import productspage from "./views/pages/ProductsPage.vue";
import ProductCard from "./components/product/product-card.vue";
import UpdatesNotification from "./views/pages/UpdatesNotification.vue";
import FeaturedProducts from "./views/pages/FeaturedProducts.vue";
import featuredcard from "./components/product/featured-products-card.vue";
import ContactUs from "./views/pages/ContactUs.vue";
import SingelPage from "./components/product/SingelPage.vue";
import DialogCheck from "./views/pages/DialogCheck.vue";
import WishlistProduct from "./components/product/WishlistProduct.vue";
import Favorite from "./views/pages/Favorite.vue";
import Cart from "./components/product/Cart.vue";
import CheckOut from "./components/product/CheckOut.vue";

Vue.component("site-header", SiteHeader);
Vue.component("site-footer", SiteFooter);
Vue.component("site-homepage", HomePage);
Vue.component("site-topsection", TopSection);
Vue.component("site-products", productspage);
Vue.component("product-card", ProductCard);
Vue.component("updates-notification", UpdatesNotification);
Vue.component("featured-products", FeaturedProducts);
Vue.component("featured-products-card", featuredcard);
Vue.component("contact-us", ContactUs);
Vue.component("singel-page", SingelPage);
Vue.component("dialog-check", DialogCheck);
Vue.component("wishlist-product", WishlistProduct);
Vue.component("favorite-product", Favorite);
Vue.component("Cart-product", Cart);
Vue.component("checkout-page", CheckOut);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    // this.$store.getters.cartItems
  },
  // data() {
  //   return {
  //     name: "I'm the root component"
  //   }
  // },
  render: h => h(App)
}).$mount("#app");