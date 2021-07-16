<template>
  <swiper class="detailSwiper">
    <swiper-item v-for="item in imgs">
      <img :src="item" alt="" @load="imgLoad">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  name: "DetailSwiper",
  components: {SwiperItem, Swiper},
  props: {
    imgs: {
      type:Array,
      default: []
    }
  },
  data(){
    return {
      isImgLoad: false
    }
  },
  methods: {
    //只执行一次轮播图的imgLoad
    imgLoad(){
      if(!this.isImgLoad){
        this.isImgLoad=true;
        this.$emit('imgLoad');
      }
    }
  }
}
</script>

<style scoped>
  .detailSwiper{
    height: 350px;
  }
</style>
