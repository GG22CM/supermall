<template>
  <div class="bottomBar">
    <div>
      <div class="customer iconDiv"><div class="icon"></div>客服</div>
      <div class="shop iconDiv"><div class="icon"></div>店铺</div>
      <div class="favorite iconDiv"><div class="icon"></div>收藏</div>
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart(){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
  .bottomBar{
    height: 57px;
    text-align: center;
  }

  .bottomBar>div{
    display: flex;
    height: 100%;
  }

  .iconDiv{
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }

  .icon{
    background-image: url('~assets/img/detail/detail_bottom.png');
    background-size: cover;
    width: 25px;
    height: 25px;
    margin-bottom: 5px;
  }

  .customer .icon{
    background-position: 0 -60px;

  }
  .shop .icon{
    background-position: 0 -111px;

  }
  .favorite .icon{
    background-position: 0 2px;

  }


  .cart{
    flex: 4;
    line-height: 57px;
    background-color: yellow;
    color: #333;
  }

  .buy{
    flex: 3;
    line-height: 57px;
    background-color: var(--color-tint);
    color: white;
  }
</style>
