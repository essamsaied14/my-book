<template>
  <div>
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

        <!---->
        <!---->
        <!---->
        <!---->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      quantity: this.qty
    };
  },
  methods: {
    increment() {
      // if (this.fullData.quantity < 10) {
      //   this.fullData.quantity++;
      // }
      this.$store.commit("incrementes");
    },
    decrement() {
      // if (this.fullData.quantity > 1) {
      //   this.fullData.quantity--;
      // }
      this.$store.commit("decrementes");
    }
  },
  computed: {
    qty() {
      return this.$store.state.quantity;
    }
  },
  watch: {
    decrement: {
      handler() {},
      deep: true
    },
    increment: {
      handler() {},
      deep: true
    },
    qty: {
      handler() {},
      deep: true
    }
  }
};
</script>