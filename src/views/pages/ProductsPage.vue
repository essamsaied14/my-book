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
// export default {
//   data() {
//     // return {
//     //   cartItems: this.$store.getters.cartItems
//     // };
//   }
//   // mounted() {
//   //   console.log(this.cartItems);
//   //   // this.cartItems.forEach(el => console.log(el));
//   // }
// };
</script>