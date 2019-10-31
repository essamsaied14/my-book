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
    },

  },
  mutations: {
    AddCartItem(state, product) {

      /** Check if aready products in cart data in local storage */
      if (localStorage.getItem('cartData')) {
        state.cartData = JSON.parse(localStorage.getItem('cartData'));
      }
      state.cartData.push(product);

      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      // console.log('store', state.cartData)
      // console.log('lstorage', JSON.parse(localStorage.getItem('cartData')))

    },

    removeCart(state, product) {

      // console.log(product);
      if (localStorage.getItem('cartData')) {
        state.cartData = JSON.parse(localStorage.getItem('cartData'));
      }
      Array.prototype.forEach.call(state.cartData, childProduct => {
        if (product.productInfo.id == childProduct.productInfo.id) {

          state.cartData.splice(state.cartData.indexOf(childProduct), 1);
        }

      });
      localStorage.setItem("cartData", JSON.stringify(state.cartData));

    },
    AddWishlist(state, product) {
      if (localStorage.getItem('wishList')) {
        state.wishList = JSON.parse(localStorage.getItem('wishList'));
      }
      state.wishList.push(product);

      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
    removeWishlist(state, product) {
      if (localStorage.getItem('wishList')) {
        state.wishList = JSON.parse(localStorage.getItem('wishList'));

      }
      Array.prototype.forEach.call(state.wishList, childwishlist => {
        if (product.id == childwishlist.id) {
          state.wishList.splice(state.wishList.indexOf(childwishlist), 1);
        }
      })

      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
    increment() {
      if (this.fullData.quantity < 10) {
        this.fullData.quantity++;
      }
    },
    decrement() {
      if (this.fullData.quantity > 1) {
        this.fullData.quantity--;
      }
    },

  }
})