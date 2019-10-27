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
            <img :src="productInfo.url" alt="Image" class="img-fluid" />
          </div>

          <div class="col-md-5 ml-auto product-title-wrap">
            <span class="number">{{productInfo.id}}</span>
            <h3 class="text-black mb-4 font-weight-bold">About This Product : {{productInfo.id}}</h3>
            <p class="mb-4">{{productInfo.title}}</p>
            <p>{{productInfo.title}}</p>

            <div class="mb-4">
              <h3 class="text-black font-weight-bold h5">Price:</h3>
              <div class="price">
                <del class="mr-2">${{productInfo.price}}</del>
                ${{productInfo.priceDiscount}}
              </div>
            </div>
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
            <div class="el-input-number">
              <span role="button" class="el-input-number__decrease" @click="decrement">
                <i class="el-icon-minus"></i>
              </span>
              <span role="button" class="el-input-number__increase" @click="increment">
                <i class="el-icon-plus"></i>
              </span>
              <div class="el-input">
                <!---->
                <input
                  type="text"
                  autocomplete="off"
                  class="el-input__inner"
                  role="spinbutton"
                  aria-valuemax="10"
                  aria-valuemin="1"
                  aria-valuenow="1"
                  aria-disabled="undefined"
                  :value="count"
                />

                <!---->
                <!---->
                <!---->
                <!---->
              </div>
            </div>
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
      productInfo: {},
      num: 1,
      count: 1
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
          this.productInfo = response.data;
          /** Get Random Number  */
          // Math.random(MIN,MAX)
          this.productInfo.price = this.getRandomInt(500, 1000);
          this.productInfo.priceDiscount = this.getRandomInt(
            500,
            this.productInfo.price - 1
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
    increment() {
      if (this.count < 10) {
        this.count++;
      }
    },
    decrement() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addTocheck() {
      this.$store.commit("AddCartItem", this.productInfo);
    }
    // handleChange(value) {
    //   console.log(value);
    // }
  }
};
</script>