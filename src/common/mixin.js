import {debounce} from "./util";

import BackUp from "components/content/backUp/BackUp";

import {BACK_UP_SHOW_POSITION} from "./const";

export const imgLoadListener={
  data(){
    imgLoadListener: null
  },
  mounted() {
    //采用防抖处理
    this.imgLoadListener=debounce(()=>{
      if(this.$refs.scroll){
        this.$refs.scroll.refresh()
      }
    },500)
    this.$bus.$on("imgLoad", this.imgLoadListener);
  }
}

export const backUpBtn={
  data(){
    return  {
      isShowBackUp: false,
    }
  },
  components: {
    BackUp
  },
  methods: {
    backUpClick(){
      if(this.$refs.scroll){
        //console.log('我执行了！backUp');
        this.$refs.scroll.scrollTo(0,0)
      }
    },

    judgmentShow(position){
      this.isShowBackUp=(-position.y) > BACK_UP_SHOW_POSITION
    }
  }
}
