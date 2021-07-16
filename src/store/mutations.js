import {INCR_OLD_GOODS_COUNT,PUSH_CART_LIST} from "./mutations-const";


export default {
  [INCR_OLD_GOODS_COUNT](state,payload){
    payload.count++;
  },
  [PUSH_CART_LIST](state,payload){
    payload.checked=true;
    state.cartList.push(payload);
  }
}
