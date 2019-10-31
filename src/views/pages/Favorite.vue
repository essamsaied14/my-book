<template>
  <div>
    <!-- Button trigger modal -->
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-black mr-1 rounded-0"
      data-toggle="modal"
      data-target="#exampleModalwishlist"
    >wishlist</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalwishlist"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalwishlist"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalwishlist">Modal title</h5>
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
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <!-- v-for="(item,index) in cartItems" :key="index" -->
                <tr v-for="(item,index) in wishList" :key="index">
                  <th scope="row">{{item.id}}</th>
                  <td>
                    <div class="text-center">
                      <img :src="item.url" class="rounded img-product-table" alt="..." />
                    </div>
                  </td>
                  <td>
                    <p>{{item.title}}</p>
                  </td>

                  <td>
                    <a @click="removeWishlist(item)" class="text-danger">
                      <i title="Delete" class="fa fa-close">Delete</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- <div class="modal-footer">
            <button type="button" class="btn btn-black mr-1 rounded-0" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-black mr-1 rounded-0">ckeckout</button>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // wishList: this.$store.getters.wishList
    };
  },

  mounted() {
    // console.log(this.wishList);
  },
  computed: {
    wishList() {
      if (this.$store.state.wishList.length) {
        return this.$store.state.wishList;
      } else {
        return this.$store.getters.wishList;
      }
    }
  },
  methods: {
    removeWishlist(e) {
      this.$store.commit("removeWishlist", e);
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