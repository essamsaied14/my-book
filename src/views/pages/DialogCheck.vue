<template>
  <div>
    <!-- Button trigger modal -->
    <!-- Button trigger modal -->

    <i
      type="button"
      class="btn btn-black mr-1 rounded-0 fa fa-cart"
      data-toggle="modal"
      data-target="#exampleModal"
    >cart</i>

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
            <Cart-product></Cart-product>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-black mr-1 rounded-0" data-dismiss="modal">Close</button>
            <router-link
              :to="{name:'checkout-page'}"
              type="button"
              class="btn btn-black mr-1 rounded-0"
            >ckeckout</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>