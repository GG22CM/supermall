<template>
  <div class="check-box" :class="{checked:isChecked}" :style="{width: cRadius+'px',height: cRadius+'px'}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: {
    isChecked:{
      type:Boolean,
      default: true
    },
    cRadius: {
      type:Number,
      default: 20
    }
  }
}
</script>

<style scoped>
  .check-box{

    border-radius: 50%;
    border:2px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .checked{
    background-color: var(--color-tint);
    border: none;
  }
</style>
