<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="row justify-content-center">
            <div class="col-md-7 mb-5">
              <form action="#" class="p-5 bg-white">
                <h2 class="h4 text-black mb-5">Contact Form</h2>

                <div class="row form-group">
                  <div class="col-md-6 mb-3 mb-md-0">
                    <label class="text-black" for="fname">First Name</label>
                    <input type="text" id="fname" class="form-control rounded-0" />
                  </div>
                  <div class="col-md-6">
                    <label class="text-black" for="lname">Last Name</label>
                    <input type="text" id="lname" class="form-control rounded-0" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="email">Email</label>
                    <input type="email" id="email" class="form-control rounded-0" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="subject">Subject</label>
                    <input type="subject" id="subject" class="form-control rounded-0" />
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <label class="text-black" for="message">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="30"
                      rows="7"
                      class="form-control rounded-0"
                      placeholder="Write your notes or questions here..."
                    ></textarea>
                  </div>
                </div>

                <div class="row form-group">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      value="Send Message"
                      class="btn btn-black rounded-0 py-3 px-4"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-6">
          <Cart-product></Cart-product>
        </div>
      </div>
    </div>
    <!-- <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Image</th>
            <th scope="col">Name product</th>
            <th scope="col">price</th>
            <th scope="col">quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in checkout" :key="index">
            <th scope="row">{{item.productInfo.id}}</th>
            <td>
              <div class="text-center">
                <img :src="item.productInfo.url" class="rounded img-product-table" alt="..." />
              </div>
            </td>
            <td @click="changeQty">
              <p>{{item.productInfo.title}}</p>
            </td>
            <td>{{item.productInfo.priceDiscount}}</td>
            <div>
              <td>
                <input @ type="text" v-model="item.quantity" />
              </td>
            </div>
          </tr>
        </tbody>
      </table>
    </div>-->
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     checkout: JSON.parse(localStorage.getItem("cartData"))
  //   };
  // },
  // methods: {
  //   changeQty() {
  //     console.log(this.checkout);
  //   }
  // },
  // watch: {}
};
</script>