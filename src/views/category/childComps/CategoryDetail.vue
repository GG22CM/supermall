<template>
  <div class="categoryDetail">
    <scroll class="content" ref="scroll">
      <sub-category @imgLoad="imgLoad" :subcategory="subcategory"/>
      <tab-control @spanClick="spanClick" :titles="['综合','新品','销量']"/>
      <goods :goods-list="subDetail[currentType]"/>
    </scroll>
  </div>
</template>

<script>
import {debounce} from "common/util";


/**
 * 导入混入
 */
import {imgLoadListener} from "common/mixin";

import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";

import SubCategory from "./SubCategory";


export default {
  name: "CategoryDetail",
  mixins: [imgLoadListener],
  components: {
    Scroll,
    TabControl,
    Goods,
    SubCategory,
  },
  props: {
    subcategory: {
      type: Array,
      default: [],
    },
    subDetail: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      imgLoadFunction: null,
      typeList: ['pop','new','sell'],
      currentIndex: 0
    }
  },
  computed: {
    currentType(){
      return this.typeList[this.currentIndex];
    }
  },
  mounted() {
    this.imgLoadFunction=debounce(this.$refs.scroll.refresh)
  },

  deactivated() {
    this.$bus.$off('imgLoad',this.imgLoadListener)
  },
  methods: {
    imgLoad(){
      this.imgLoadFunction()
    },
    spanClick(index){
      this.currentIndex=index;
    }
  }
}
</script>

<style scoped>
  .categoryDetail{
    height: 100%
  }

  .content{
    height: 100%;
    overflow: hidden;
  }
</style>
