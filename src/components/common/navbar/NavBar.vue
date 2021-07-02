<template>
  <div class="navbar">
    <div class="right">
      <slot name="right"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="left">
      <slot name="left"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .navbar{
    height: 44px;
    display: flex;
    text-align: center;
    line-height: 44px;
  }

  .right,
  .left{
    width: 40px;
  }
  .center{
    flex:1;
  }
</style>
