<template>
  <div v-if="Object.keys(shopInfo).length" class="shopInfo">
    <div class="shopTitle"><img :src="shopInfo.logo" alt="">{{shopInfo.name}}</div>
    <div class="shopFeature">
      <div class="left">
        <div>
          <p>{{shopInfo.sells | showSell}}</p>
          <p>总销量</p>
        </div>
        <div>
          <p>{{shopInfo.goodsCount}}</p>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div v-for="item in shopInfo.score">{{item.name}}<span :class="{better: item.isBetter}">{{item.score}}</span></div>
      </div>
    </div>
    <div class="comeIn">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showSell(sellCount){
      return (sellCount/10000).toFixed(1)+'万'
    }
  }
}
</script>

<style scoped>
  .shopInfo{
    border-bottom: 5px solid #eee;
    padding-bottom: 30px;
  }

  .shopTitle{
    padding: 20px 10px;
    font-size: 18px;
    color: rgb(155,155,155);
    display: flex;
    align-items: center;

  }
  .shopTitle img{
    width: 60px;
    margin-right: 10px;
  }

  .shopFeature{
    display: flex;
    text-align: center;
    padding: 0px 20px;
    color: var(--color-text);
    margin-bottom: 10px;
  }
  .right,.left{
    flex: 1;
  }

  .left{
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: relative;
  }

  .left p:first-of-type{
    font-size: 20px;
    padding-bottom: 5px;
  }

  .left p:last-of-type{
    font-size: 14px;

  }

  .left::after{
    content: "";
    width: 1px;
    display: block;
    height: 50px;
    position: absolute;
    background-color: #ccc;
    right: -15px;
  }

  .right{
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .right div{
    width: 50%;
    text-align: left;
    height: 30px;
    line-height: 20px;
    white-space: nowrap;
  }

  .right div span{
    display: inline-block;
    width: 20px;
    margin-left: 20px;
    position: relative;
  }

  .comeIn{
    text-align: center;
  }

  .comeIn span{
    display: inline-block;
    width: 150px;
    font-size: 14px;
    background-color: #f2f5f8;
    padding: 5px 15px;
    border-radius: 999rem;
  }

  .right div span::after{
    content: "低";
    position: absolute;
    right: -200%;
    background-color:  #5ea732;
    /*better*/
    /*background-color:  #f13e3a;*/

    color: #fff;
    padding: 0 2px;
  }

  .right div span{
    color: #5ea732;
  }

  .right div span.better{
    color: #f13e3a;
  }

  .right div span.better::after{
    content: "高";
    background-color: #f13e3a;
  }
</style>
