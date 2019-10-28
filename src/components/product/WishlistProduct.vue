<template>
  <div>
    <!-- v-loading.fullscreen.lock="loading"
    element-loading-text="xxxxx"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 52, 128,0.6)"-->
    <template v-if="like">
      <span @click="removeProduct()" class="meta-icons wishlist">
        <i class="icon-heart" :class="liked"></i>
      </span>
    </template>
    <template v-if="!like">
      <span @click="AddWishlist()" class="meta-icons wishlist">
        <i class="icon-heart"></i>
      </span>
    </template>
  </div>
</template>
<script>
export default {
  data() {
    return {
      like: false
    };
  },
  props: ["product"],
  mounted() {
    console.log(this.product);
    // this.cartItems.forEach(el => console.log(el));
  },
  //   data() {
  //     return {
  //
  //       loading: false
  //     };
  //   },
  computed: {
    liked: function() {
      return this.like ? "like" : "";
    }
  },
  methods: {
    AddWishlist() {
      this.$store.commit("AddWishlist", this.product);
    },
    removeProduct() {}
  }
};
</script>
<style>
.like {
  color: rgb(230, 226, 40);
}
</style>