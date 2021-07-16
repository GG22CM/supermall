<template>
  <div v-if="Object.keys(goodsInfo).length" class="goodsInfo">
    <div class="description">
      <div class="iconDesc"></div>
      <div class="title">{{goodsInfo.desc}}</div>
      <div class="iconDesc"></div>
    </div>
    <div class="imgs">
      <p>{{goodsInfo.detailImage[0].key}}</p>
      <img v-for="item in goodsInfo.detailImage[0].list" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      imgNums: 0
    }
  },
  mounted() {
    //console.log(this.goodsInfo);
  },
  methods: {
    imgLoad(){
        this.$emit('imgLoad')
    }
  }

}
</script>

<style scoped>
  .goodsInfo{
    border-bottom: 5px solid #eee;
    padding-bottom: 20px;
  }
  .description{
    width: 100%;
    padding: 20px;

  }

  .description .title{
    padding: 20px 10px;
    font-size: 15px;
  }

  .description .iconDesc{
    width: 25%;
    height: 1px;
    background-color: #0e4a7f;
    position: relative;
  }
  .description .iconDesc::before{
    content: "";
    display: inline-block;
    height: 5px;
    width: 5px;
    background-color: #101010;
    position: absolute;
    left: 0;
    bottom: -1px;
  }

  .description .iconDesc:last-of-type{
    transform: translateX(300%) rotateZ(180deg) ;
  }

  .imgs p{
    padding: 0 10px 10px 10px;
    font-size: 16px;
    color:black;
  }

  .imgs img{
    width: 100%;
  }
</style>
