<template >
  <div class="row">
    <div class="col-lg-4 col-md-6 mb-5" v-for="product in products.slice(0, 100)" :key="product.id">
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
              <span class>${{randy}}</span>
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
            <a href="#" class="btn btn-black mr-1 rounded-0">Cart</a>
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

  computed: {
    randy: function() {
      return Math.floor(Math.random() * (25 - 1 + 1)) + 1;
    }
  },
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
  },
  created() {
    // this.getData();
  }
};
</script>