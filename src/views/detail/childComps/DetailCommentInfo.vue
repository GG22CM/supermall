<template>
  <div v-if="Object.keys(commentInfo).length" class="comment">
    <div class="title">
      <p>用户评价</p>
      <p>更多<img src="~assets/img/common/back.svg"/></p>
    </div>
    <div class="info">
      <div class="user">
        <img :src="commentInfo.user.avatar" alt="">{{commentInfo.user.uname}}
      </div>
      <div class="text">{{commentInfo.content}}</div>
      <div class="tail"><span>{{ commentInfo.created | showDate}}</span><span>{{commentInfo.style}}</span></div>
    </div>
    <div v-if="commentInfo.images && commentInfo.images.length" class="imgs">
      <img v-for=" item in commentInfo.images" :src="item" alt="" >
    </div>
  </div>
</template>

<script>
import {formatDate} from "common/util";

export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showDate(date){
      return formatDate(new Date(date), 'yyyy-MM-dd hh:mm');
    }
  }
}
</script>

<style scoped>
  .comment{
    padding: 0 10px 20px 10px;
    border-bottom: 5px solid #eee;
  }
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
  }

  .title p{
    padding: 20px 0px;
    color: #333;

  }

  .title p:last-of-type{
    display: flex;
    font-size: 15px;
    align-items: center;
  }
  .title img{
    margin-left: 10px;
    width: 15px;
    transform: rotate(180deg);

  }

  .info{
    padding: 10px 0px;
  }

  .info .user{
    display: flex;
    align-items: center;
    color: #333;
  }

  .info .user img{
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .text{
    padding: 10px;
    font-size: 15px;
  }
  .tail{
    padding: 0 10px;
    font-size: 12px;
  }

  .tail span{
    margin-right: 10px;
    color: hsl(180,40%,40%);
  }

  .imgs{
    display: flex;
  }

  .imgs img{
    margin: 2px;
    width:  70px;
    height: 70px;
  }

</style>
