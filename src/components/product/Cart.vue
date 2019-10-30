<template>
  <div>
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr class>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">Name product</th>
          <th scope="col">price</th>
          <th scope="col">quantity</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in cartItems" :key="index">
          <th scope="row">{{item.productInfo.id}}</th>
          <td>
            <div class="text-center">
              <img :src="item.productInfo.url" class="rounded img-product-table" alt="..." />
            </div>
          </td>
          <td>
            <p>{{item.productInfo.title}}</p>
          </td>
          <td>{{item.productInfo.priceDiscount}}</td>
          <td>
            <input type="text" class="el-input__inner" v-model="item.quantity" />
          </td>
          <td>
            <a @click="removeCart(item)" class="text-danger">
              <i title="Delete" class="fa fa-close">Delete</i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // cartItems: this.$store.getters.cartItems
    };
  },
  mounted() {
    // console.log(this.cartItems);
    // this.cartItems.forEach(el => console.log(el));
  },
  computed: {
    cartItems() {
      if (this.$store.state.cartData.length) {
        return this.$store.state.cartData;
      } else {
        return this.$store.getters.cartItems;
      }
    }
  },
  methods: {
    removeCart(x) {
      this.$store.commit("removeCart", x);
    },
    changeQuty() {}
  },
  watch: {
    cartItems: {
      handler() {},
      deep: true
    }
  }
};
</script>