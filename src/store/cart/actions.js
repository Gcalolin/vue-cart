import * as types from './types.js'

export default {
 /*添加商品到购物车*/
 create_goods_to_cart: ({commit}, goods) => {
  commit(types.CREATE_GOODS_TO_CART, goods)
  commit(types.UPDATE_CART)
 },
 /*删除购物车的商品*/
 delete_goods_from_cart: ({commit}, goods) => {
  commit(types.DELETE_GOODS_FROM_CART, goods)
  commit(types.UPDATE_CART)
 },
 /*购物车商品+1*/
 add_goods_from_cart: ({commit}, goods) => {
  commit(types.ADD_GOODS_FROM_CART, goods)
  commit(types.UPDATE_CART)
 },
 /*购物车商品-1*/
 reduce_goods_from_cart: ({commit}, goods) => {
  commit(types.REDUCE_GOODS_FROM_CART, goods)
  commit(types.UPDATE_CART)
 },
 modify_goods_num_from_cart: ({commit}, data) => {
  commit(types.MODIFY_GOODS_NUM_FROM_CART, data)
  commit(types.UPDATE_CART)
 },
 /*更新本地购物车*/
  update_cart: ({ commit }) => {
    commit(types.UPDATE_CART)
  }
}