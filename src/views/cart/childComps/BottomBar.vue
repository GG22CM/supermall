<template>
  <div class="bottomBar">
    <div class="bottomSelector"   @click="bottomCheckBoxClick">
         <check-box id="bottomCheckBox" :cRadius="25" :is-checked="isSelectAll"/>
         全选
    </div>
    <div class="bottomPrice">
      合计:￥{{totalPrice}}
    </div>
    <div class="bottomCalc">
      <div>去结算({{totalLength}})</div>
    </div>
  </div>
</template>

<script>

import {mapGetters} from "vuex";

import CheckBox from "components/common/checkBox/CheckBox";
export default {
  name: "BottomBar",
  components: {
    CheckBox
  },
  computed: {
    ...mapGetters(['cartList','cartListLength']),

    totalPrice(){
      return this.cartList.filter( item => item.checked)
                          .reduce((pre,cur)=>pre+cur.count*cur.price,0)
                          .toFixed(2)
    },
    totalLength(){
      return this.cartList.filter( item => item.checked).length
    },
    isSelectAll(){
      if(!this.cartListLength) return false
      return !this.cartList.find( item => !item.checked)
    }
  },
  methods: {
    bottomCheckBoxClick(){
      if(!this.cartList.find( item => !item.checked)){
        this.cartList.forEach( item => item.checked = false)
      }else{
        this.cartList.forEach( item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
  .bottomBar{
    height: 40px;
    background-color: #eee;
    display: flex;
    line-height: 40px;
  }


  .bottomSelector{
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }

  .bottomSelector #bottomCheckBox{
    margin-right: 5px;
  }

  .bottomPrice{
    flex: 1;

  }

  .bottomCalc{
    width: 100px;
    background-color: red;
    color: white;
    text-align: center;
  }
</style>
