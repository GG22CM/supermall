<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :class="{controlActive: index==currentIndex}">
      <span @click="spanClick(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default: []
    }
  },
  data(){
    return {
      currentIndex: 0
    }
  },
  methods: {
    spanClick(index){
      this.currentIndex=index;
      this.$emit('spanClick',index)
    }
  }
}
</script>

<style scoped>
  .tab-control{
    width: 100%;
    height: 40px;
    display: flex;
    line-height: 40px;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control>div{
    flex: 1;
  }

  .tab-control span{
    padding: 3px;
  }

  .controlActive{
    color:  var(--color-high-text);
  }

  .controlActive span{
   border-bottom: 2px solid var(--color-tint);
  }

</style>
