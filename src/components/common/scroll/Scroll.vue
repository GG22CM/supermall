<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      click: true,
      pullUpLoad: this.pullUpLoad
    })
    console.log(this.scroll.scrollerHeight);
    //监听滚动事件
    if(this.probeType == 2 || this.probeType == 3)
    this.scroll.on('scroll',position=>this.$emit('scroll',position));
    //监听上拉加载更多事件
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        console.log('监听到上拉加载更多事件')
        this.$emit('pullingUp')})
    }

  },
  methods: {
    scrollTo(x,y,time=300){
      this.scroll&&this.scroll.scrollTo(x,y,time);
    },
    refresh(){
      //console.log('------')
      this.scroll&&this.scroll.refresh();
      //console.log('刷新操作执行了！');
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp();
    },
    getY(){
      return this.scroll.y
    }

  }
}
</script>

<style scoped>

</style>
