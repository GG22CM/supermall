<template>
  <div v-show="subcategory.length" class="subcategory">
    <a class="item" :href="item.link" v-for="(item,index) in subcategory">
      <img @load="imgLoad" :src="item.image" alt="">{{item.title}}
    </a>
  </div>
</template>

<script>
export default {
  name: "SubCategory",
  props: {
    subcategory: {
      type: Array,
      default: []
    }
  },
  methods: {
    imgLoad(){
      this.$emit('imgLoad');
    }
  }
}
</script>

<style scoped>
  .subcategory{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 10px;
    padding-left: 10px;
  }

  .item{
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 12px;
  }

  .item img{
    width: 100%;
    margin-bottom: 10px;
  }

</style>
