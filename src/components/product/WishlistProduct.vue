<template>
  <div>
    <!-- v-loading.fullscreen.lock="loading"
    element-loading-text="xxxxx"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 52, 128,0.6)"-->
    <div v-if="like">
      <span @click="removeWishlist(product)" class="meta-icons wishlist red">
        <i class="icon-heart"></i>
        <!-- :class="liked" -->
      </span>
    </div>
    <div v-if="!like">
      <span @click="AddWishlist()" class="meta-icons wishlist blue">
        <i class="icon-heart"></i>
      </span>
    </div>
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
    // console.log(this.product);
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
    },
    wishList() {
      if (this.$store.state.wishList.length) {
        return this.$store.state.wishList;
      } else {
        return this.$store.getters.wishList;
      }
    }
  },
  methods: {
    AddWishlist() {
      this.$store.commit("AddWishlist", this.product);
      this.like = true;
    },
    removeWishlist(e) {
      this.$store.commit("removeWishlist", e);
      this.like = false;
    }
  },
  watch: {
    wishList: {
      handler() {},
      deep: true
    },
    like: {
      handler() {},
      deep: true
    }
  }
};
</script>
<style>
/* .like {
  color: rgb(230, 226, 40);
} */
.red {
  color: brown;
}
.blue {
  color: blue;
}
</style>