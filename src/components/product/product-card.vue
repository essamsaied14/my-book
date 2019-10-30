<template >
  <div class="row">
    <div class="col-lg-4 col-md-6 mb-5" v-for="product in products.slice(0, 9)" :key="product.id">
      <div class="product-item">
        <figure>
          <img :src="product.url" alt="Image" class="img-fluid" ter />
        </figure>
        <div class="px-4">
          <h3>
            <a href="#">{{product.title}}</a>
          </h3>
          <div class="mb-3">
            <span class="meta-icons mr-3">
              <a href="#" class="mr-2">
                <span class="icon-star text-warning"></span>
              </a> 5.0
            </span>
            <span class="meta-icons mr-3">
              <span class>$111</span>
            </span>
            <wishlist-product :product="product"></wishlist-product>
            <!-- <span class="meta-icons wishlist">
              <a href="#" class="mr-2">
                <span class="icon-heart"></span>
              </a> 29
            </span>-->
          </div>
          <p class="mb-4">{{product.title}}</p>
          <div>
            <a href="#" class="btn btn-black mr-1 rounded-0">Cart</a>
            <router-link
              :to="{name:'single-product', params:{id: product.id}}"
              href="#"
              class="btn btn-black btn-outline-black ml-1 rounded-0"
            >View</router-link>
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
      //     fetch('https://jsonplaceholder.typicode.com/posts/1')
      // .then(response => response.json())
      // .then(json => console.log(json));
      products: []

      // {
      //   name: "product-1",
      //   desc:
      //     "Oud Trat is one of the most luxurious oud specials for the influential people, because it is one of the finest scents that gives you strength and attractiveness.Tourat forest specialists search for it for you.It ",
      //   imgSrc:
      //     "http://images.squarespace-cdn.com/content/v1/5aa83bad9772ae97813540d0/1546342351907-4R2L1N4GITARI03VU9N0/ke17ZwdGBToddI8pDm48kJPo64LO3YZG-4f-ST8EfI9Zw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGunbRojLjYM_qWg5xABZ5ZcuB4bj617U7w2cj588VrBRur-lC0WofN0YB1wFg-ZW0/cover_UC95Q8VU77.png"
      // },
      // {
      //   name: "product-2",
      //   desc:
      //     "Oud Trat is one of the most luxurious oud specials for the influential people, because it is one of the finest scents that gives you strength and attractiveness.Tourat forest specialists search for it for you.It ",
      //   imgSrc:
      //     "https://timedotcom.files.wordpress.com/2015/06/521811839-copy.jpg"
      // },
      // {
      //   name: "product-3",
      //   desc:
      //     "Oud Trat is one of the most luxurious oud specials for the influential people, because it is one of the finest scents that gives you strength and attractiveness.Tourat forest specialists search for it for you.It ",
      //   imgSrc:
      //     "https://images-na.ssl-images-amazon.com/images/I/41JYDubvTvL._SX258_BO1,204,203,200_.jpg"
      // }
    };
  },

  methods: {
    getData() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .then(response => {
          this.products = response.data;

          //console.log(this.products);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>