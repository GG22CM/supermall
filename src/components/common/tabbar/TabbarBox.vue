<template>
  <div class="tabbar-box">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabbarBox"
}
</script>

<style scoped>
  .tabbar-box{
    height: 49px;
    display:flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    background-color: #ccc;
    box-shadow: 0 -2px 1px rgba(100,100,100,0.4);
  }
</style>
