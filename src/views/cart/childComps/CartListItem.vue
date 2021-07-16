<template>
  <div class="productItem">
    <div class="item-selector">
      <check-box :is-checked="product.checked"
                 @click.native="checkBoxClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="">
    </div>
    <div class="item-desc">
      <p>{{product.title}}</p>
      <p>{{product.desc}}</p>
      <p>
        <span>￥{{product.price}}</span>
        <span>x&nbsp;{{product.count}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import CheckBox from "components/common/checkBox/CheckBox";
export default {
  name: "CartListItem",
  components: {
    CheckBox
  },
  props: {
    product: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    checkBoxClick(){
      this.product.checked=!this.product.checked
    }
  }
}
</script>

<style scoped>
  .productItem{
    height: 120px;

    display: flex;
    padding: 10px 0;
    border-bottom: 2px solid #eee;
  }
  .item-selector{
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .item-img{
    width: 100px;
    box-sizing: border-box;
    padding: 0 10px;
  }

  .item-img img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .item-desc{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  .item-desc p{
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

  }

  .item-desc p:first-of-type{
    color: #333;
    align-items: normal;
  }

  .item-desc p:nth-of-type(2){
    font-size: 14px;
    height: 30px;
    line-height: 16px;
    white-space: normal;
    display: -webkit-box;  /*  display: -webkit-box; 必须结合的属性 ，将对象作为弹性伸缩盒子模型显示  */
    -webkit-box-orient: vertical; /*  -webkit-box-orient 必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式  */
    -webkit-line-clamp: 2; /*  -webkit-line-clamp用来限制在一个块元素显示的文本的行数 */

  }

  .item-desc p:last-of-type{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-right: 20px;
  }

  .item-desc span:first-child{
    font-size: 20px;
    color: var(--color-high-text);
  }
  span:last-of-type{
    color: black;
  }
</style>
