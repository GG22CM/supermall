<template>
  <div>
    <nav-bar class="navColor">
      <div slot="center">购物街</div>
    </nav-bar>
    <swiper-main :banner="banners"/>
    <recommend-view :recommends="recommends"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import SwiperMain from "./childComps/SwiperMain";
import RecommendView from "./childComps/RecommendView";

import {getMultiData} from "network/home";


export default {
  name: "Home",
  components: {
    NavBar,
    SwiperMain,
    RecommendView
  },
  data(){
    return{
       banners:[],
       recommends:[]
    }
  },
  created() {
    getMultiData().then(res=>{
      this.banners=res.data.banner.list
      this.recommends=res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  .navColor{
    background-color: var(--color-tint);
    color: white;
  }
</style>
