<template>
  <div v-if="Object.keys(paramsInfo).length" class="paramsInfo">
   <div class="standard">
     <table v-for="item in paramsInfo.table">
       <tr v-for="trItem in item">
         <td v-for="tdItem in trItem">{{tdItem}}</td>
       </tr>
     </table>
   </div>
    <div class="info">
      <table>
        <tr v-for="item in paramsInfo.info" >
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
    <div v-if="paramsInfo.imgs && paramsInfo.imgs.length" class="imgDiv">
      <img :src="paramsInfo.imgs[0]" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamsInfo",
  props: {
    paramsInfo: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  mounted() {
    setTimeout(()=>{
      //console.log(this.paramsInfo.info);
    },3000)
  }
}
</script>

<style scoped>
  .paramsInfo{
    font-size: 14px;
    padding: 20px 10px;
    text-align: center;
    border-bottom: 5px solid #eee;
  }

  .paramsInfo table{
    width: 100%;
    padding: 0;

  }
  .paramsInfo table tr{
    display: flex;
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid #eee;
    line-height: 25px;

  }

  .paramsInfo table>tr>td:first-of-type{
    width: 20%;
    text-align: left;

  }

  .paramsInfo table>tr>td:nth-of-type(n+2){
    flex:1;
  }

  .standard{
    box-sizing: border-box;
    border-bottom: 5px solid #eee;

  }

  .standard table:last-of-type tr:last-of-type{
    border-bottom: none;
  }

  .info table{
    text-align: left;
  }


  .info table tr>td:first-of-type{
    width: 30%;
  }

  .imgDiv img{
    width: 100%;
  }


</style>
