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
          <th scope="row">{{item.id}}</th>
          <td>
            <div class="text-center">
              <img :src="item.url" class="rounded img-product-table" alt="..." />
            </div>
          </td>
          <td>
            <p>{{item.title}}</p>
          </td>
          <td>{{item.priceDiscount}}</td>
          <td>
            <span @click="increment(item)">add</span>
            <input type="text" class="el-input__inner" v-model="item.quantity" />
            <span @click=" decrement(item)">-</span>
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
      mm: 0
      // cartItems: this.$store.getters.cartItems
    };
  },
  mounted() {
    console.log(this.cartItems);
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
    increment(item) {
      // if (this.fullData.quantity < 10) {
      //   this.fullData.quantity++;
      // }

      this.$store.state.quantity = item.quantity;
      this.$store.commit("incrementes");
      item.quantity = this.$store.state.quantity;
      // console.log(item);
    },
    decrement(item) {
      // if (this.fullData.quantity > 1) {
      //   this.fullData.quantity--;
      // }
      this.$store.state.quantity = item.quantity;
      this.$store.commit("decrementes");
      item.quantity = this.$store.state.quantity;
      console.log(this.cartItems);
    },
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