<template >
  <div>
    <div class="site-section" id="products-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-6 text-center">
            <h3 class="section-sub-title">Popular Products</h3>
            <h2 class="section-title mb-3">Our Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
          </div>
        </div>
        <div>
          <span>Filters :</span>
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item">
              <button @click="all()">All</button>
            </li>
            <li class="list-group-item">
              <button @click="albumId(1)">Album ID 1</button>
            </li>
            <li class="list-group-item">
              <button @click="albumId(2)">Album ID 2</button>
            </li>
            <li class="list-group-item">
              <button @click="Arrangement(productsSource)">A/z</button>
            </li>
            <li class="list-group-item">
              <button @click="Errangement(productsSource)">Z/a</button>
            </li>
          </ul>
        </div>
        <product-card :products="products"></product-card>
      </div>
    </div>
    <!-- <ul class="cartItems">
      <li v-for="(item,index) in cartItems" :key="index">
        <a>ID : {{item.id}} | Title : {{item.title}}</a>
      </li>
    </ul>-->
    <!-- {{cartItems}} -->
    <!-- word emit?? -->
  </div>
</template>


 <script>
export default {
  data() {
    return {
      filter: "",
      // productsSource: [],
      // products: [],
      sortedProducts: []

      // productsData: this.$store.getters.cartItems
    };
  },
  created() {
    this.getData();
  },
  // computed: {
  //   filterdProduct: function() {
  //     return filters[this.filter](this.product);
  //   }
  // },
  methods: {
    all() {
      // console.log(this.productsData);
      this.products = this.productsSource;
    },
    albumId: function(albumId) {
      var filteredProducts = [];
      filteredProducts = this.productsSource.filter(function(product) {
        // console.log(filteredProducts);
        return product.albumId == albumId;
      });

      this.products = filteredProducts;
    },

    Arrangement(arr) {
      // Set slice() to avoid to generate an infinite loop!
      this.sortedProducts = arr.sort(function(a, b) {
        // alert(b.title[0]);
        return a.title.charCodeAt(0) - b.title.charCodeAt(0);
      });
      // console.log(this.sortedProducts);
      // this.products = this.sortedProducts;
    },
    Errangement(arr) {
      // Set slice() to avoid to generate an infinite loop!
      this.sortedProducts = arr.sort(function(a, b) {
        return b.title.charCodeAt(0) - a.title.charCodeAt(0);
      });
    },

    getData() {
      this.$store.dispatch("getProducts");
    }
  },

  /** Computed */
  computed: {
    products() {
      return this.$store.state.products;
      // console.log(products);
    },
    productsSource() {
      return this.$store.state.productsSource;
    }
  },
  watch: {
    products() {},
    productsSource() {}
  }
};
</script>