<template>
  <div class="toast" :class="{toastActive:isShow}" ref="toast">
    {{message}}
  </div>
</template>

<script>
export default {
  name: "Toast",
  data(){
    return {
      message: '成功',
      isShow: false
    }
  },
  methods: {
    showToast(message,duration=1000){
      //清除过渡
      this.$refs.toast.style.transition="none"
      this.message=message
      this.isShow=true
      setTimeout(() =>{
        this.isShow = false
        //添加过渡，实际上是改变透明度而不是v-show
        this.$refs.toast.style.transition="opacity 1s"
      },duration)
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(0,0,0,.7);
    color: white;
    padding: 10px 20px;
    z-index: 999;
  }

  .toast{
    opacity: 0;
  }

  .toastActive{
    opacity: 1;

  }

</style>
