<template>
  <div class="category">
    <nav-bar class="navBar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="layout">
      <choose-bar @itemClick="choose" class="right" :choose-list="chooseList" ref="chooseBar"/>
      <category-detail class="left" :subcategory="subcategory" :sub-detail="subDetail"/>
    </div>
  </div>
</template>

<script>
/**
 * axios拿到数据
 */
import {getCategory,getSubcategory,getCategoryDetail} from "network/category";

import NavBar from "components/common/navbar/NavBar";

import ChooseBar from "./childComps/ChooseBar";
import CategoryDetail from "./childComps/CategoryDetail";

export default {
  name: "Category",
  components: {
    NavBar,
    ChooseBar,
    CategoryDetail,

  },
  data(){
    return {
      chooseList: [],
      subcategory: [],
      currentIndex: 0,
      subDetail: {
        'pop':[],
        'new':[],
        'sell':[]
      }
    }
  },
  created() {
    getCategory().then(res => {
      let data = res.data.category;
      console.log(data);
      this.chooseList = data.list;
      this.reloadData();
    })
  },
  methods: {
    choose(index){
      this.currentIndex=index;
      this.reloadData();
    },
    /**
     * 网络请求相关方法
     */
    getCategoryDetail(type){
      getCategoryDetail(this.chooseList[this.currentIndex].miniWallkey,type).then(res => {
        console.log(res);
        this.subDetail[type]=res
      })
    },
    getSubcategory(){
      getSubcategory(this.chooseList[this.currentIndex].maitKey).then(res => this.subcategory=res.data.list)
    },

    reloadData(){
      this.getSubcategory();
      this.getCategoryDetail('pop');
      this.getCategoryDetail('new');
      this.getCategoryDetail('sell');
    }
  }
}
</script>

<style scoped>
  .category{
    position: relative;
    height: 100vh;
  }
  .navBar{
    color: white;
    background-color: var(--color-tint);
    font-weight: bold;
  }

  .layout{
    display: flex;
    height: calc(100% - 44px - 49px);
  }
  .left{
    flex: 1
  }

</style>
