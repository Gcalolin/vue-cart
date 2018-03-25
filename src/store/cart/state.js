export default {
  /*购物车*/
  cart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
}