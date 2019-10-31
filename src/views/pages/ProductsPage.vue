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
          <ul>
            <li>
              <button @click="all()">All</button>
            </li>
            <li>
              <button @click="albumId(1)">Album ID 1</button>
            </li>
            <li>
              <button @click="albumId(2)">Album ID 2</button>
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
      productsSource: [],
      products: []

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
        //console.log(_self.productsForFiltering);
        return product.albumId == albumId;
      });

      this.products = filteredProducts;
    },

    getData() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then(response => {
          this.products = response.data;
          this.productsSource = this.products;
          // this.productInfo.price = this.getRandomInt(500, 1000);
          // this.productInfo.priceDiscount = this.getRandomInt(
          //   500,
          //   this.productInfo.price - 1
          // );
          // this.$emit("allProducts", this.products);

          //console.log(this.products);
        });
    }
    // getRandomInt(min, max) {
    //   min = Math.ceil(min);
    //   max = Math.floor(max);
    //   return Math.floor(Math.random() * (max - min + 1)) + min;
    // }
  }
  // filters() {
  //   this.$store.commit("filters", this.product);
  // }
};
// export default {
//   data() {
//     // return {
//     //   myArray: [{}, {}, {}, {}]
//     // };
//   },
//   mounted() {
//     // this.myArray.splice(1, 1);
//     // console.log(this.myArray);
//     // this.cartItems.forEach(el => console.log(el));
//   }
// };
//
</script>