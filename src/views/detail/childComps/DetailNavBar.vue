<template>
  <nav-bar>
    <div slot="left" class="left" @click="back"><img src="~assets/img/common/back.svg" alt=""></div>
    <div slot="center" class="center">
      <div v-for="(item,index) in items" @click="itemClick(index)" :class="{active: currentIndex==index}">{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "detailNavBar",
  data(){
    return {
      items: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  components: {
    NavBar
  },
  methods: {
    itemClick(index){
      this.currentIndex=index
      this.$emit('navClick',index);
    },
    back(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
  .center{
    display: flex;
  }
  .center>div{
    flex: 1;
    text-align: center;
    font-size: 14px;
  }

  .left{
    margin-top:6px;
  }

  .active{
    color:var(--color-high-text)
  }
</style>
