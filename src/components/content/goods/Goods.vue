<template>
  <div v-show="goodsList.length" class="goods-list">
    <goods-item v-for="(item,index) in goodsList" :goods="item" ref="goodsItem"/>
  </div>
</template>

<script>
import GoodsItem from "./GoodsItem";

export default {
  name: "Goods",
  props: {
    goodsList: {
      type:Array,
      default: []
    }
  },
  components: {
    GoodsItem
  },
  mounted() {

  },
  watch: {
    goodsList(newValue,oldValue){
      console.log(newValue);
    }
  }
}
</script>

<style scoped>
  .goods-list{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding:2px;
  }
</style>
