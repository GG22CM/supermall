<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <tabbar-main/>
  </div>
</template>

<script>
import TabbarMain from "@/components/content/tabbarMain/TabbarMain";

export default {
  name: 'App',
  components: {
    TabbarMain
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
