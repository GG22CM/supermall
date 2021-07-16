<template>
  <div class="cart">
    <nav-bar class="navBar">
      <div slot="center">购物车({{cartListLength}})</div>
    </nav-bar>

    <cart-list/>

    <bottom-bar/>
  </div>
</template>

<script>

/**
 * 导入Vuex中的getters
 */
import {mapGetters} from "vuex"

import NavBar from "components/common/navbar/NavBar";

import CartList from "./childComps/CartList";
import BottomBar from "./childComps/BottomBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    BottomBar
  },
  computed: {
    ...mapGetters(['cartListLength'])
  }
}
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .navBar{
    color: white;
    background-color: var(--color-tint);
  }
</style>
