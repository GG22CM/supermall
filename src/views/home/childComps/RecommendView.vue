<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends:{
      type: Array,
      default: ()=>[]
    }
  }
}
</script>

<style scoped>
  .recommend{
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 14px;
    justify-content: space-around;
    padding: 10px 0px 25px;
    border-bottom: 10px solid #ccc;
  }

  .recommend img{
    width: 80px;
    margin-bottom: 8px;
  }

</style>
