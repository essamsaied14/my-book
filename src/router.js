import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from './views/pages/HomeComponent.vue'
import Productspage from './views/pages/ProductsPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      component: HomeComponent
    },
    {
      path: '/products',
      component: Productspage
    }

  ]
})