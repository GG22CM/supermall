<template>
  <div>
    <tabbar-box>
      <tabbar-item path="/home">
        <p slot="iconFont" class="iconfont icon-Homehomepagemenu"></p>
        <p slot="text">首页</p>
      </tabbar-item>
      <tabbar-item path="/category">
        <p slot="iconFont" class="iconfont icon-categoryselected"></p>
        <p slot="text">分类</p>
      </tabbar-item>
      <tabbar-item path="/cart">
        <p slot="iconFont" class="iconfont icon-cart"></p>
        <p slot="text">购物车</p>
      </tabbar-item>
      <tabbar-item path="/profile">
        <p slot="iconFont" class="iconfont icon-profile"></p>
        <p slot="text">我的</p>
      </tabbar-item>
    </tabbar-box>
  </div>
</template>

<script>

import TabbarBox from "components/common/tabbar/TabbarBox";
import TabbarItem from "components/common/tabbar/TabbarItem";

export default {
  name: "TabbarMain",
  components: {
    TabbarBox,
    TabbarItem
  }
}
</script>

<style scoped>
  @import "~assets/font/font_tabbar/iconfont.css";

</style>
