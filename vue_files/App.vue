<template>
  <div id="app">
    <Checkout />
  </div>
</template>

<script>
import Checkout from "./components/Checkout.vue";

export default {
  name: "App",
  components: {
    Checkout,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #232323;
  font-size: 18px;
}
</style>
