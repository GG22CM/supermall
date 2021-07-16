<template>
  <div class="navbar bottomBoxShadow">

    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
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
    width: 60px;
  }
  .center{
    flex:1;
  }

  .bottomBoxShadow{
    box-shadow: 0 1px 6px rgba(100,100,100,0.1);
  }
</style>
