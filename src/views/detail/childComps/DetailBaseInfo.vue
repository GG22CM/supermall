<template>
  <div v-if="Object.keys(goods).length" class="goodsInfo">
    <div class="title">{{goods.title}}</div>
    <div class="price">
      <span class="newPrice">{{ goods.newPrice }}</span><span class="oldPrice">{{ goods.oldPrice }}</span><span class="distinct">{{goods.discount}}</span>
    </div>
    <div class="columns">
      <span>{{ goods.columns[0] }}</span><span>{{ goods.columns[1] }}</span><span>{{theSpecial}}</span>
    </div>
    <div class="services">
      <span v-for="index in goods.services.length-1">
        <img :src="goods.services[index-1].icon" alt="">{{ goods.services[index-1].name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    theSpecial(){
      return this.goods.services[this.goods.services.length-1].name
    }
  }
}
</script>

<style scoped>
  .goodsInfo{
    padding: 5px;
    height: 210px;
    border-bottom: 5px solid #eee;
  }

  .goodsInfo>div{
    margin:  5px;
  }
  .title{
    padding: 10px 0px;
    color: var(--color-text);

  }

  .price{
  }
  .price>span{
    margin-right: 10px;
  }
  .newPrice{
    color: var(--color-high-text);
    font-size: 26px;
  }

  .oldPrice{
    font-size: 16px;
    text-decoration: line-through;
  }
  .distinct{
    display: inline-block;
    background-color: var(--color-tint);
    color: #fff;
    padding: 5px;
    position: relative;
    bottom: 10px;
    border-radius: 999rem;
    font-size: 14px;
  }


  .services,
  .columns{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #aaa;
    padding-bottom: 10px;
    box-shadow: 0px 1px 1px rgba(100,100,100,0.2);
    height: 40px;
    line-height: 40px;
  }

  .services{
    box-shadow: none;
    color:var(--color-text);
  }

  .services img{
    width: 14px;
    margin-right: 2px;
  }

</style>
