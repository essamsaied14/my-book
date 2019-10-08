<template >
  <div>
    <h1>Products Page</h1>

    <product-card v-for="(x,y) in 10" :key="x">{{y}}</product-card>
  </div>
</template>