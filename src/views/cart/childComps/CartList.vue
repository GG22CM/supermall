<template>
  <div class="cartList">
    <scroll class="content">
      <cart-list-item v-for="(item,index) in cartList"
                      :product="item"
                      :key="index"/>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

import Scroll from "components/common/scroll/Scroll";

import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  }
}
</script>

<style scoped>
  .cartList{
    height: calc(100% - 44px - 49px - 40px);
  }

  .content{
    height: 100%;
    overflow: hidden;

  }
</style>
