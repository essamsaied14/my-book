import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './views/pages/HomeComponent.vue'
import Productspage from './views/pages/ProductsPage.vue'
import SingelPage from './components/product/SingelPage.vue'
import CheckOut from "./components/product/CheckOut.vue";
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: HomeComponent,
      name: 'Home'
    },
    {
      path: '/products',
      component: Productspage,
      name: 'Productspage'
    },
    {
      path: '/single-page/:id',
      component: SingelPage,
      name: 'single-product',
      props: true
    }, {
      path: '/checkout-page/item',
      component: CheckOut,
      name: 'checkout-page',
      // props: true
    }
  ]
})