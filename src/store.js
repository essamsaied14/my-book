import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    quantity: 1,
    cartData: [],
    wishList: [],
    products: {},
    productsSource: {},
    priceDiscount: {}
  },
  getters: {
    cartItems() {
      return JSON.parse(localStorage.getItem("cartData"));
    },
    wishList() {
      return JSON.parse(localStorage.getItem("wishList"));
    },
    getRandomInt() {
      return function (payload) {
        payload.min = Math.ceil(payload.min);
        payload.max = Math.floor(payload.max);
        return (
          Math.floor(Math.random() * (payload.max - payload.min + 1)) +
          payload.min
        );
      };
    }
  },
  mutations: {
    incrementes(state) {
      if (state.quantity < 10) {
        state.quantity++;
      }
    },
    decrementes(state) {
      if (state.quantity > 1) {
        state.quantity--;
      }
    },
    AddCartItem(state, product) {
      /** Check if aready products in cart data in local storage */
      if (localStorage.getItem("cartData")) {
        state.cartData = JSON.parse(localStorage.getItem("cartData"));
      }
      state.cartData.push(product);

      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      // console.log('store', state.cartData)
      // console.log('lstorage', JSON.parse(localStorage.getItem('cartData')))
    },

    removeCart(state, product) {
      // console.log(product);
      if (localStorage.getItem("cartData")) {
        state.cartData = JSON.parse(localStorage.getItem("cartData"));
      }
      Array.prototype.forEach.call(state.cartData, childProduct => {
        if (product.productInfo.id == childProduct.productInfo.id) {
          state.cartData.splice(state.cartData.indexOf(childProduct), 1);
        }
      });
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
    },
    AddWishlist(state, product) {
      if (localStorage.getItem("wishList")) {
        state.wishList = JSON.parse(localStorage.getItem("wishList"));
      }
      product.like = true;
      state.wishList.push(product);

      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },
    removeWishlist(state, product) {
      if (localStorage.getItem("wishList")) {
        state.wishList = JSON.parse(localStorage.getItem("wishList"));
      }
      Array.prototype.forEach.call(state.wishList, childwishlist => {
        if (product.id == childwishlist.id) {
          childwishlist.like = false;
          state.wishList.splice(state.wishList.indexOf(childwishlist), 1);
        }

      });

      localStorage.setItem("wishList", JSON.stringify(state.wishList));
    },

    SET_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_PRODUCTS_SOURCE(state, payload) {
      state.productsSource = payload;
    }
    // SET_priceDiscount(state, payload) {
    //   state.priceDiscount = payload;
    // }
  },
  actions: {
    getProducts({
      commit,
      getters
    }) {
      return new Promise(resolve => {
        axios
          .get("https://jsonplaceholder.typicode.com/photos/")
          .then(response => {
            let products = response.data.slice(0, 3);

            products.forEach(function (element) {
              element.like = false;
              element.price = getters.getRandomInt({
                min: 500,
                max: 1000
              });
              element.priceDiscount = getters.getRandomInt({
                min: element.price - 1,
                max: 1000
              });
            });
            let productsSource = products;
            commit("SET_PRODUCTS", products);
            commit("SET_PRODUCTS_SOURCE", productsSource);
            resolve(response);
          });
      });
    }
  }
});