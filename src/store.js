import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartData: [],
    wishList: []
  },
  getters: {
    cartItems() {
      return JSON.parse(localStorage.getItem('cartData'));
    },
    wishList() {
      return JSON.parse(localStorage.getItem('wishList'));
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

    },

    removeCart(state, product) {
      if (localStorage.getItem('cartData')) {
        state.cartData = JSON.parse(localStorage.getItem('cartData'));
      }
      state.cartData.splice(state.cartData.indexOf(product), 1);
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    AddWishlist(state, product) {
      if (localStorage.getItem('wishList')) {
        state.wishList = JSON.parse(localStorage.getItem('wishList'));
      }
      state.wishList.push(product);

      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    }

  }
})