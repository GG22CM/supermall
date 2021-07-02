<template>
  <div class="tabbar-item" @click="btnClick" :style="fontColor">
    <slot name="iconFont"></slot>
    <slot name="text"></slot>
<!--    <p class="iconfont icon-Homehomepagemenu"></p>-->
<!--    <p>首页</p>-->
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: {
     path: String,
     activeColor: {
       type: String,
       default: "red"
     }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path)!=-1
    },
    fontColor(){
      return this.isActive?{color:this.activeColor}:{}
    }
  },
  methods: {
    btnClick(){
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
  .tabbar-item{
    flex: 1;
    text-align: center;
    padding-top: 5px;
  }

  .tabbar-item p{
    height: 50%;
  }

  .tabbar-item p:nth-of-type(1){
    font-size: 25px;

  }
  .tabbar-item p:nth-of-type(2){
    margin-top: 3px;
    font-size: 14px;

  }
</style>
