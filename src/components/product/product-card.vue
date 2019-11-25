<template >
  <div class="row">
    <div class="col-lg-4 col-md-6 mb-5" v-for="product in products" :key="product.id">
      <div class="product-item">
        <h2>{{ product.id }} Album ID : {{ product.albumId }}</h2>
        <figure>
          <img :src="product.url" alt="Image" class="img-fluid" ter />
        </figure>
        <div class="px-4">
          <h3>
            <a href="#">{{product.title}}</a>
          </h3>
          <div class="mb-3">
            <span class="meta-icons mr-3">
              <a href="#" class="mr-2">
                <span class="icon-star text-warning"></span>
              </a> 5.0
            </span>
            <span class="meta-icons mr-3">
              <span class>{{product.price}}</span>
            </span>
            <span class="meta-icons mr-3">
              <del>
                <span class>{{product.priceDiscount}}</span>
              </del>
            </span>
            <wishlist-product :product="product"></wishlist-product>
            <!-- <span class="meta-icons wishlist">
              <a href="#" class="mr-2">
                <span class="icon-heart"></span>
              </a> 29
            </span>-->
          </div>
          <p class="mb-4">{{product.title}}</p>

          <div>
            <a href="#" class="btn btn-black mr-1 rounded-0" @click="addToCart(product)">Add Cart</a>
            <router-link
              :to="{name:'single-product', params:{id: product.id}}"
              href="#"
              class="btn btn-black btn-outline-black ml-1 rounded-0"
            >View</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["products"],

  methods: {
    addToCart(item) {
      item.quantity = this.$store.state.quantity;
      this.$store.commit("AddCartItem", item);
      // this.products = this.$store.state.products;
      // this.$store.commit("AddCartItem", this.products);
    }
  },

  created() {
    // this.getData();
  }
};
</script>