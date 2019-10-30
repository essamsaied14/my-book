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
          <ul>
            <li></li>
            <li>
              <a href @click.prevent="filter='price'" :class="{selected:filter=='price'}">price</a>
            </li>
            <div @click="name()">name</div>

            <li>
              <a href @click.prevent="filter='rate'" :class="{selected:filter=='rate'}">rate</a>
            </li>
          </ul>
        </div>
        <product-card></product-card>
      </div>
    </div>
    <!-- <ul class="cartItems">
      <li v-for="(item,index) in cartItems" :key="index">
        <a>ID : {{item.id}} | Title : {{item.title}}</a>
      </li>
    </ul>-->
    <!-- {{cartItems}} -->
  </div>
</template>


 <script>
export default {
  data() {
    return {
      filter: "",
      productsData: this.$store.getters.cartItems
    };
  },
  // computed: {
  //   filterdProduct: function() {
  //     return filters[this.filter](this.product);
  //   }
  // },
  methods: {
    name() {
      console.log(this.productsData);
      return this.productsData.filter(function(product) {
        console.log("product");

        return product.id < 2;
      });
    },
    price: function(product) {
      return product.filter(function(pro) {
        return pro.price;
      });
    },
    rate: function(product) {
      return product.filter(function(pro) {
        return pro.rate;
      });
    }
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