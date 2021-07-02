<template>
  <div id="hf-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="slideCount >1 && indicator">
        <div v-for="(item,index) in slideCount" class="indi-item" :class="{active:index==currentIndex-1}" :key="index"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props:{
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    //是否显示指针
    indicator: {
      type: Boolean,
      default: true
    }
  },
  data(){
    return {
      slideCount: 0,//item的个数
      totalWidth: 0,//每个item的宽度，其实是屏幕的宽度
      scrolling: false,//是否正在滚动
      swiperStyle: {},//swiper的样式对象，之后更改transform等属性都是通过这个样式对象
      currentIndex: 1 //当前滚动坐标，默认值为1
    }
  },
  mounted(){
    //在这个方法中需要做两件事，1.开启自动滚动，2.给内容前后添加元素,给数据传输时间3秒
    setTimeout(()=>{
      this.startTimer();

      this.handleDom()
    },3000)
  },
  methods: {
    /**
     * 定时器操作
     */
    startTimer(){
      this.playTimer=window.setInterval(()=>{
        //这里面应该开始滚动,向左滚动
        this.currentIndex++;
        this.scrollContent(-this.currentIndex*this.totalWidth);//这里面应该传入滚动距离
      },this.interval)
    },
    stopTimer(){
      //调用这个方法停止定时器
      window.clearInterval(this.playTimer);
    },

    /**
     * 滚动操作
     */
    scrollContent(position){//传入滚动的距离，正/负
      //1.设置滚动状态
      this.scrolling=true;
      //2.添加过渡并改变样式中的transform
      this.swiperStyle.transition="transform "+this.animDuration+"ms";
      this.setTransform(position);
      //3.检查滚动位置，最前端or最后端,抛出事件在此处抛出
      this.checkPosition();
      //4.滚动完成
      this.scrolling=false;
    },

    /**
     * 检查滚动位置
     */
    checkPosition(){
      //异步操作，在当前滚动动画结束后执行
      setTimeout(()=>{
        //检查当前位置
        //清除过渡效果，在下次调用scrollContent时会重新加上
        this.swiperStyle.transition="0ms"
        if(this.currentIndex>=this.slideCount+1){//末端
          this.currentIndex=1;
          this.setTransform(-this.currentIndex*this.totalWidth);//回到第一张，跳过动画
        }else if(this.currentIndex<=0){//前端
          this.currentIndex=this.slideCount;
          this.setTransform(-this.currentIndex*this.totalWidth);//回到最后一张，跳过动画
        }

        //抛出滚动结束后事件，返回当前项（除去克隆元素）的下标
        this.$emit("endTransform",this.currentIndex-1);
      },this.animDuration)
    },

    /**
     * 改变transfrom属性
     */
    setTransform(position){
      this.swiperStyle.transform=`translate3d(${position}px,0,0)`//es6写法
      this.swiperStyle['-webkit-transform']=`translate3d(${position}px,0,0)`
      this.swiperStyle['-ms-transform']=`translate3d(${position}px,0,0)`
      this.swiperStyle['-moz-transform']=`translate3d(${position}px,0,0)`
    },

    /**
     * 在内容前后加item(slide)
     */
    handleDom(){
      //拿到.slide和.swiper
      let swiper=document.querySelector(".swiper");
      let slides=document.querySelectorAll(".slide");

      //保存个数
      this.slideCount=slides.length;

      //判断数量
      if(slides.length>1){
        //拿到所需要的初始属性
        this.swiperStyle=swiper.style;
        this.totalWidth=swiper.offsetWidth;
        //克隆元素并添加
        swiper.insertBefore(slides[slides.length-1].cloneNode(true),swiper.firstChild);
        swiper.appendChild(slides[0].cloneNode(true));

        //将swiper向左移动一位，因为添加了一个元素，所以现在显示的是添加在最前面的元素
        this.setTransform(-this.totalWidth);
      }
    },


    /**
     * 下面是touch事件操作方法
     */

    touchStart(e){
     // console.log("执行了")
      //1.判断是否正在滚动
      if(this.scrolling) return;
      //2.停止定时器
      this.stopTimer();
      //3.记录手指位置
      this.startX=e.touches[0].pageX;
    },
    touchMove(e){
      //1.实时记录当前手指位置
      let currentX=e.touches[0].pageX;
      //2.计算position，移动的距离，正负
      this.moveDistance=currentX-this.startX;
      //3.此时的transform
      let currentTransform=this.moveDistance-this.currentIndex*this.totalWidth;
      //console.log(currentTransform);
      this.setTransform(currentTransform);

    },
    touchEnd(e){
      //判断移动量
      //去除正负符号（计算绝对值）
      let distance=Math.abs(this.moveDistance);
      //如果移动量为0，不进行任何操作
      if(distance==0){
        return;
      }else if(this.moveDistance>0 && distance>this.moveRatio*this.totalWidth ){
        //图片向右移动
        this.currentIndex--
      }else if(this.moveDistance<0 && distance>this.moveRatio*this.totalWidth){
        this.currentIndex++
      }

      //进行移动操作
      this.scrollContent(-this.currentIndex*this.totalWidth);

      //启动计时器
      this.startTimer();
    },

    /**
     * 将来的控制器，上一个下一个？
     */
    changeItem(num){
      //停止定时器
      this.stopTimer();

      this.currentIndex+=num;
      this.scrollContent(-this.currentIndex*this.totalWidth);

      //开启定时器
      this.startTimer();
    },
    pervious(){
      this.changeItem(-1);
    },
    next(){
      this.changeItem(1);
    }

  }
}
</script>

<style scoped>
  #hf-swiper{
    overflow: hidden;
    position: relative;
  }

  .swiper{
    display: flex;
  }

  .indicator{
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    position: absolute;
    bottom: 8px;
    width: 100%;
  }

  .indi-item{
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    margin: 0 5px;
  }

  .indi-item.active{
    background-color: rgba(212,62,46,1.0);
  }


</style>
