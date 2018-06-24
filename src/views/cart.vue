<template>
<div class="cart-list-wrapper">
  <div class="cart-item" v-for="(item, index) in cartGoodsList" :key="index">
    <img :src="item.thumb" alt="">
    <div class="goods-info">
      <p class="goods-title">{{item.title}}</p>
      <p class="goods-money">￥{{item.money}}</p>
      <div class="btn-group">
        <div class="change">
          <button class="decrease" @click="reduceGoods(item)">-</button>
          <input type="number" :value="item.num" @blur="handleBlur(item)" @input="handleChange(item)" ref="goodsNum">
          <button class="increase" @click="increaseGoods(item)">+</button>
        </div>
        <button class="count" >10</button>
        <button class="count" >20</button>
        <button class="count" >50</button>
        <button class="count" >100</button>
      </div>
    </div>
    <div class="operate-delete" @click="deleteGoods(index, item)">删除</div>
  </div>
</div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        cartGoodsList: []
      }
    },
    created() {
      this.cartGoodsList = this.$store.state.cart.cart
    },
    methods: {
      /*删除商品*/
      deleteGoods(index, goods) {
        this.$store.dispatch('cart/delete_goods_from_cart', goods)
      },
      reduceGoods(goods) {
        this.$store.dispatch('cart/reduce_goods_from_cart', goods)
      },
      increaseGoods(goods) {
        this.$store.dispatch('cart/add_goods_from_cart', goods)
      },
       /*监听购物车修改商品数量*/
      handleBlur(goods) {
        /*计算购物车的数量*/
        let num = goods.num == '' ? 1 : goods.num
        console.log('num', num)
        this.$store.dispatch('cart/modify_goods_num_from_cart', {
          goods: goods,
          num: num
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  html,body,p {
    margin: 0 !important;
    padding: 0 !important; 
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    img {
      width: 100px;
      height: 100px;
    }
    .goods-title{
      padding: 5px 0;
      width: 180px;
    }
    .goods-money {
      color: #f13329;
    }
    .operate-delete {
      color: #7bbfea;
    }
    .btn-group {
      input {
        width: 100px;
      }
      button{
        border: none;
        background-color: #fff;
        border: 1px solid #ccc;
      }
      .count {
        margin-top: 5px;
        width: 35px;
        height: 35px;
      }
    }
  }
</style>
