<template>
  <div class="detailInfo">
    <detail-nav-bar ref="navBar" @navClick="navClick"/>
    <scroll class="content" ref="scroll" :probeType="3" @scroll="contentScroll">
      <detail-swiper :imgs="topImgs" @imgLoad="swiperImgLoad"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop-info="shopInfo"/>
      <detail-goods-info :goods-info="detailInfo" @imgLoad="goodsInfoImgLoad"/>
      <detail-params-info ref="params" :params-info="paramsInfo"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods ref="recommend" :goods-list="recommendInfo"/>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>
    <back-up @click.native="backUpClick" v-show="isShowBackUp"/>
  </div>
</template>

<script>

import Scroll from "components/common/scroll/Scroll";
import Goods from "components/content/goods/Goods";



import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottomBar from "./childComps/DetailBottomBar";


/**
 * 导入网络请求相关函数
 */
import {getDetail,GoodsInfo,Shop,GoodsParams,getRecommends} from "network/detail";

/**
 * 导入防抖函数
 */
import {debounce} from "common/util";

/**
 * 导入mixin对象
 */
import {imgLoadListener} from "common/mixin";
import {backUpBtn} from "common/mixin";

/**
 * 导入actions中的方法
 */
import {mapActions} from 'vuex';



export default {
  name: "Detail",
  mixins: [imgLoadListener,backUpBtn],
  components: {
    Scroll,
    Goods,
    DetailSwiper,
    DetailNavBar,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailBottomBar,
  },
  data(){
    return {
      id: 0,
      topImgs: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themes: [],
      getOffsetTops: null,
      currentIndex: 0
    }
  },
  created() {
    /**
     * 储存获取offsetTop的函数
     */
    this.getOffsetTops = debounce(()=>{
      this.themes=[];
      this.themes.push(0);
      this.themes.push(this.$refs.params.$el.offsetTop);
      this.themes.push(this.$refs.comment.$el.offsetTop);
      this.themes.push(this.$refs.recommend.$el.offsetTop);
      this.themes.push(Number.MAX_SAFE_INTEGER);
      // console.log(this.themes)
    },500)

    this.id=this.$route.params.id

    getDetail(this.id).then(res =>{

      //console.log(res)
      let data=res.result

      this.topImgs=data.itemInfo.topImages;

      this.goods=new GoodsInfo(data.itemInfo,data.columns,data.shopInfo.services);

      this.shopInfo=new Shop(data.shopInfo);

      this.detailInfo=data.detailInfo

      this.paramsInfo=new GoodsParams(data.itemParams.info,data.itemParams.rule);
      //console.log(this.paramsInfo);

      if(data.rate.list && data.rate.list[0]){
        this.commentInfo=data.rate.list[0];
        // console.log(this.commentInfo);

      }
    })

    /**
     * 取得推荐数据
     */
    getRecommends().then(res =>{
      this.recommendInfo=res.data.list;
      //console.log(this.recommendInfo);
    })
  },
  destroyed() {
    this.$bus.$off('imgLoad',this.imgLoadListener)
  },
  methods: {
    /**
     * 将store中的action加入进来
     */
    ...mapActions(['addCartList']),

    /**
     * 事件监听
     */
    swiperImgLoad() {
      //console.log('我被执行了！');
      this.$refs.scroll.refresh();
    },
    goodsInfoImgLoad() {
      this.imgLoadListener();

      this.getOffsetTops();
    },
    navClick(index){
      this.$refs.scroll.scrollTo(0,-this.themes[index],300);
    },
    contentScroll(position){
      let currentTop = -position.y;
      let length = this.themes.length
      for(let i=0;i<length-1;i++){
        if(this.currentIndex!=i && (currentTop >= this.themes[i] && currentTop < this.themes[i+1])){
          this.currentIndex = i;
          this.$refs.navBar.currentIndex=this.currentIndex;
        }
      }
      /**
       * 判断backUp是否显示
       */
      this.judgmentShow(position)
    },
    addToCart(){
      this.goodsProperty={};
      this.goodsProperty.title=this.goods.title;
      this.goodsProperty.desc=this.goods.desc;
      this.goodsProperty.image=this.topImgs[0];
      this.goodsProperty.id=this.id;
      this.goodsProperty.price=this.goods.nowPrice;
      this.addCartList(this.goodsProperty).then(res => this.$toast.showToast(res));

    }
  }
}
</script>

<style scoped>
  .detailInfo{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
  }

  .content{
    height: calc(100% - 44px - 57px);
    overflow: hidden;
    position: relative;
  }

</style>
