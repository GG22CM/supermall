import {INCR_OLD_GOODS_COUNT,PUSH_CART_LIST} from "./mutations-const";

export default {
  addCartList({state,commit}, payload){
    return new Promise((resolve,reject) => {
      let oldGoods=state.cartList.find( item => item.id==payload.id);

      if(oldGoods){
        commit(INCR_OLD_GOODS_COUNT,oldGoods);
        resolve('商品加一');
      }else{
        payload.count=1;
        commit(PUSH_CART_LIST,payload);
        resolve('加入购物车成功');
      }
    })
  },
}
