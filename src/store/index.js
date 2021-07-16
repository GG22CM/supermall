import Vue from 'vue';
import Vuex from 'vuex';

/**
 * 导入属性
 */
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

const state={
  cartList: [],

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
