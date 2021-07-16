<template>
  <div v-show="chooseList.length" class="chooseList">
    <scroll ref="scroll" class="content ignoreContent">
      <div class="listItem" :class="{active: currentIndex==index}" v-for="(item,index) in chooseList" @click="itemClick(index)">{{item.title}}</div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
export default {
  name: "ChooseBar",
  components: {
    Scroll
  },
  data(){
    return {
      currentIndex: 0,
    }
  },
  props: {
    chooseList: {
      type: Array,
      default: []
    }
  },
  watch: {
    chooseList(newValue,oldValue){
      this.$nextTick(()=>{
        this.$refs.scroll.refresh();
      })

    }

  },
  methods: {
    itemClick(index){
      this.currentIndex=index;
      this.$emit('itemClick',index)
    }
  }
}
</script>

<style scoped>
  .chooseList{
    height: calc(100%);
    width: 80px;
    background-color: #eee;
  }

  .content{
    position: absolute;
    top: 44px;
    left: 0;
    overflow: hidden;

  }
  .ignoreContent{
    bottom: 49px;
  }

  .listItem{
    width: 80px;
    padding: 15px 0;
    background-color: #eee;
    text-align: center;
    font-size: 13px;
    box-sizing: border-box;
  }

  .active{
    background-color: #fff;
    border-left: 3px solid red;
    color: #DD4A68;
  }

</style>
