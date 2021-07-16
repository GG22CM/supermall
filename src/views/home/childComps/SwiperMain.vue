<template>
  <swiper ref="swiper" v-if="banner.length">
    <swiper-item v-for="(item,index) in banner" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load.once="imgLoad">
      </a>
    </swiper-item>
  </swiper>

</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper';

export default {
  name: "SwiperMain",
  props: {
    banner:{
      type:Array,
      default(){
        return []
      }
    }

  },
  components: {
    Swiper,
    SwiperItem
  },

  methods:{
    stopTimer(){
      this.$refs.swiper.stopTimer();
    },
    startTimer(){
      this.$refs.swiper.startTimer();
    },
    imgLoad() {
      this.$emit('swiperImgLoad');
    }
  }
}
</script>

<style scoped>

</style>
