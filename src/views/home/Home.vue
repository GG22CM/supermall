<template>
  <div id="home">
    <nav-bar class="navBar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" class="tab-control" @spanClick="spanClick" ref="tabControl2" v-show="isTabShow"/>
    <scroll class="content ignoreContent"
            ref="scroll"
            @scroll="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <swiper-main :banner="banners" @swiperImgLoad.once="swiperImgLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles="['流行','新款','精选']" class="tab-control" @spanClick="spanClick" ref="tabControl1"/>
      <goods :goods-list="defaultGoodsName"/>
    </scroll>
    <back-up @click.native="backUpClick" v-show="isShowBackUp"/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import Goods from "components/content/goods/Goods";
import Scroll from "components/common/scroll/Scroll";

import SwiperMain from "./childComps/SwiperMain";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import {getMultiData,getHomeListData} from "network/home";


import {imgLoadListener,backUpBtn} from "common/mixin";

/**
 * 导入常量
 */
import {BACK_UP_SHOW_POSITION} from "common/const";

export default {
  name: "Home",
  mixins: [imgLoadListener,backUpBtn],
  components: {
    NavBar,
    TabControl,
    Goods,
    Scroll,
    SwiperMain,
    RecommendView,
    FeatureView
  },
  data(){
    return{
       banners:[],
       recommends:[],
       goods: {
         pop: {page: 0,list: []},
         new: {page: 0,list: []},
         sell: {page: 0,list: []}
       },
      defaultGoods: 'pop',
      tabOffsetTop: 0,
      isTabShow: false
    }
  },
  computed: {
    defaultGoodsName(){
      return this.goods[this.defaultGoods].list;
    }
  },
  created() {
    this.getMultiData();
    this.getHomeListData('pop');
    this.getHomeListData('new');
    this.getHomeListData('sell');
  },
  mounted(){
  },
  activated() {
    //console.log(this.onLeaveY);
    this.$refs.scroll.scrollTo(0,this.onLeaveY,0);

  },
  deactivated() {
    this.onLeaveY=this.$refs.scroll.getY();
    // console.log(this.onLeaveY);
    this.$bus.$off('imgLoad',this.imgLoadListener);

  },
  methods: {
    /**
     * 事件监听相关方法
     */
    spanClick(index) {
      switch (index){
        case 0:
          this.defaultGoods='pop';
          break;
        case 1:
          this.defaultGoods='new';
          break;
        case 2:
          this.defaultGoods='sell';
          break;
      }
      this.$refs.tabControl1.currentIndex=index;
      this.$refs.tabControl2.currentIndex=index;
    },


    scroll(position){
      //console.log(position)
      this.judgmentShow(position)
      this.isTabShow=(-position.y)>this.tabOffsetTop
    },


    goodsItemImgLoad(){
      if(this.$refs.scroll){
        this.$refs.scroll.refresh()
      }

    },

    //监听轮播图加载完成事件
    swiperImgLoad(){
      //获取tabControl组件的offsetTop,为了给这个组件做定位
      this.tabOffsetTop=this.$refs.tabControl1.$el.offsetTop;
      //console.log(this.tabOffsetTop)
    },

    //上拉加载更多
    loadMore(){
      this.getHomeListData(this.defaultGoods);
    },
    /**
     * 网络请求的方法
     */
    getMultiData(){
      getMultiData().then(res=>{
        this.banners=res.data.banner.list
        this.recommends=res.data.recommend.list
      })
    },
    getHomeListData(type){
      const page=this.goods[type].page+1;
      getHomeListData(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++
        //结束上拉加载更多事件,先刷新，但好像并没有什么大用
        this.$refs.scroll.refresh();
        this.$refs.scroll.finishPullUp();
      })
    }
  }
}
</script>

<style scoped>
  #home{

    height: 100vh;
    position: relative;
  }
  .navBar{
    background-color: var(--color-tint);
    color: white;

  }

  .tab-control{
    position: relative;
    background-color: #fff;
    z-index: 9;
  }


  .content{
    position: absolute;
    top: 44px;

    left: 0;
    right: 0;
    overflow: hidden;
  }

  .ignoreContent{
    bottom: 49px;
  }

</style>
