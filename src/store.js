import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartData: []
  },
  getters: {
    cartItems() {
      return JSON.parse(localStorage.getItem('cartData'));
    }
  },
  mutations: {
    AddCartItem(state, product) {

      /** Check if aready products in cart data in local storage */
      if (localStorage.getItem('cartData')) {
        state.cartData = JSON.parse(localStorage.getItem('cartData'));
      }
      state.cartData.push(product);

      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    }
  },
  actions: {

  }
})