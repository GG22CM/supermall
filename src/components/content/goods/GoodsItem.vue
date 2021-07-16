<template>
  <div class="goods-item" @click="itemClick">
    <img v-lazy="showImg" alt="" @load="imgLoad">
    <div>
      <p>{{goods.title}}</p>
      <p><span>{{goods.orgPrice}}</span><span>{{goods.cfav}}</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showImg(){
      return this.goods.img||(this.goods.image || this.goods.show.img)
    }
  },
  methods: {
    imgLoad(){
      this.$bus.$emit("imgLoad")
    },
    itemClick(){
      this.$router.push('/detail/'+this.goods.iid);
    }

  }
}
</script>

<style scoped>
  .goods-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }


  .goods-item img{
    width: 100%;
  }

  .goods-item>div{
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .goods-item>div>p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    font-size: 15px;
    height: 20px;
    line-height: 20px;
  }

  .goods-item>div>p>span{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  span:last-of-type{
    position: relative;
  }

  span:last-of-type::before{
    content: '';
    width: 18px;
    height: 16px;
    display: inline-block;
    background-image: url("~assets/img/common/collect.svg");
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: -16px;
  }
</style>
