<template>
  <div class="site-section bg-light">
    <div class="container">
      <div class="row mb-5 justify-content-center">
        <div class="col-md-6 text-center">
          <h3 class="section-sub-title">Awesome Products</h3>
          <h2 class="section-title mb-3">Featured Products</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
        </div>
      </div>
      <div class="bg-white py-4 mb-4">
        <div class="row mx-4 my-4 product-item-2 align-items-start">
          <div class="col-md-6 mb-5 mb-md-0">
            <img :src="fullData.productInfo.url" alt="Image" class="img-fluid" />
          </div>

          <div class="col-md-5 ml-auto product-title-wrap">
            <span class="number">{{fullData.productInfo.id}}</span>
            <h3
              class="text-black mb-4 font-weight-bold"
            >About This Product : {{fullData.productInfo.id}}</h3>
            <p class="mb-4">{{fullData.productInfo.title}}</p>
            <p>{{fullData.productInfo.title}}</p>

            <div class="mb-4">
              <h3 class="text-black font-weight-bold h5">Price:</h3>
              <div class="price">
                <del class="mr-2">${{fullData.productInfo.price}}</del>
                ${{fullData.productInfo.priceDiscount}}
              </div>
            </div>
            <!-- <div class="el-input-number">
              <span role="button" class="el-input-number__decrease" @click="decrement">
                <i class="el-icon-minus"></i>
              </span>
              <span role="button" class="el-input-number__increase" @click="increment">
                <i class="el-icon-plus"></i>
              </span>
              <div class="el-input">
               
                <input
                  v-model="qty"
                  type="text"
                  autocomplete="off"
                  class="el-input__inner"
                  role="spinbutton"
                  aria-valuemax="10"
                  aria-valuemin="1"
                  aria-valuenow="1"
                  aria-disabled="undefined"
                />
              </div>
            </div>-->
            <quantity-page></quantity-page>
            <p>
              <a
                href="#"
                class="btn btn-black btn-outline-black rounded-0 d-block mb-2 mb-lg-0 d-lg-inline-block"
              >View Details</a>
              <a
                @click="addTocheck"
                href="#"
                class="btn btn-black rounded-0 d-block d-lg-inline-block"
              >Add To Cart</a>
            </p>

            <!-- <el-input-number class v-model="num" @change="handleChange" :min="1" :max="10"></el-input-number> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      productId: this.$route.params.id,
      // productInfo: {},
      fullData: {
        productInfo: {},
        quantity: 0
      },
      num: 1
      // quantity: 1
    };
  },
  created() {
    this.getSingleProduct(this.productId);
    // console.log(this.productId);
    // console.log(this.$store.state.cartData);
  },
  methods: {
    getSingleProduct(Id) {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos/" + Id)
        .then(response => {
          this.fullData.productInfo = response.data;
          /** Get Random Number  */
          // Math.random(MIN,MAX)
          this.fullData.productInfo.price = this.getRandomInt(500, 1000);
          this.fullData.productInfo.priceDiscount = this.getRandomInt(
            500,
            this.fullData.productInfo.price - 1
          );
        });

      /** Setting response data into product info */
    },
    /**function to  Get Random Number  */
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    // increment() {
    //   // if (this.fullData.quantity < 10) {
    //   //   this.fullData.quantity++;
    //   // }
    //   this.$store.commit("incrementes");
    // },
    // decrement() {
    //   // if (this.fullData.quantity > 1) {
    //   //   this.fullData.quantity--;
    //   // }
    //   this.$store.commit("decrementes");
    // },
    addTocheck() {
      this.fullData.quantity = this.$store.state.quantity;
      this.$store.commit("AddCartItem", this.fullData);
    }
    // handleChange(value) {
    //   console.log(value);
    // }
  }
  // computed: {
  //   qty() {
  //     return this.$store.state.quantity;
  //   }
  // },
  // watch: {
  //   decrement: {
  //     handler() {},
  //     deep: true
  //   },
  //   increment: {
  //     handler() {},
  //     deep: true
  //   },
  //   qty: {
  //     handler() {},
  //     deep: true
  //   }
  // }
};
</script>