<template>
  <div>
    <!-- Button trigger modal -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-black mr-1 rounded-0"
      data-toggle="modal"
      data-target="#exampleModal"
    >checkbox</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <table class="table table-hover">
              <thead class="thead-dark">
                <tr class>
                  <th scope="col">#</th>
                  <th scope="col">Image</th>
                  <th scope="col">Name product</th>
                  <th scope="col">price</th>
                  <th scope="col">quantity</th>
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
                  <td>{{item.quantity}}</td>
                  <td>
                    <a @click="removeCart(item)" class="text-danger">
                      <i title="Delete" class="fa fa-close">Delete</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-black mr-1 rounded-0" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-black mr-1 rounded-0">ckeckout</button>
          </div>
        </div>
      </div>
    </div>
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
    }
  },
  watch: {
    cartItems: {
      handler() {},
      deep: true
    }
  }
};
</script>