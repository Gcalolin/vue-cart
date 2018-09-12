<template>
<div class="cart-list-wrapper">
  <div class="cart-item" v-if="cartGoodsList.length!=0" v-for="(item, index) in cartGoodsList" :key="index" >
    <img :src="item.thumb" alt="">
    <div class="goods-info">
      <p class="goods-title">{{item.title}}</p>
      <p class="goods-money">￥{{item.money}}</p>
      <div class="btn-group">
        <div class="change">
          <button class="decrease" @click="reduceGoods(item)">-</button>
          <input type="number" v-model.number="item.num" @blur="handleBlur(item)">
          <button class="increase" @click="increaseGoods(item)">+</button>
        </div>
        <button class="count" @click="modifyNum(item,10)">10</button>
        <button class="count" @click="modifyNum(item,20)">20</button>
        <button class="count" @click="modifyNum(item,50)">50</button>
        <button class="count" @click="modifyNum(item,100)">100</button>
      </div>
    </div>
    <div class="operate-delete" @click="deleteGoods(index, item)">删除</div>
  </div>
  <div class="cart-empty" v-if="cartsMoney===0"> 
    <i class="icon-empty"></i>
    <span>购物车为空</span>
  </div>

  <!-- 结算 -->
  <div class="carts-money" v-if="cartsMoney!==0">
      合计  <span style="color: #f13329;">￥{{cartsMoney}} </span>
      <button class="pay">结算</button>
  </div>
</div>
</template>

<script type="text/javascript">
  import { mapGetters,mapActions,mapState } from 'vuex'
  export default {
    data() {
      return {
      }
    },
    created() {
      
    },
    computed: {
      ...mapState({
        cartGoodsList: state => state.cart.cart
      }),
      ...mapGetters({
        'cartsMoney': 'cart/cartsMoney'
      })
    },
    methods: {
      ...mapActions({
        'deleteGoodsFromCart': 'cart/delete_goods_from_cart',
        'reduceGoodsFromCart': 'cart/reduce_goods_from_cart',
        'addGoodsFromCart': 'cart/add_goods_from_cart',
        'modifyGoodsNumFromCart': 'cart/modify_goods_num_from_cart'
      }),
      /*删除商品*/
      deleteGoods(index, goods) {
        this.deleteGoodsFromCart(goods)
      },
      reduceGoods(goods) {
        this.reduceGoodsFromCart(goods)
      },
      increaseGoods(goods) {
        this.addGoodsFromCart(goods)
      },
      modifyNum(goods,num) {
        this.modifyGoodsNumFromCart({goods, num})
      },
      /*监听购物车修改商品数量*/
      handleBlur(goods) {
        /*计算购物车的数量*/
        let num = goods.num == '' ? 1 : goods.num
        console.log('num', num)
        this.modifyGoodsNumFromCart({goods, num})
      }
    }
  }
</script>

<style lang="scss" scoped>
  html,body,p {
    margin: 0 !important;
    padding: 0 !important; 
  }
  .cart-list-wrapper {
    margin-bottom: 55px;
  }
  .cart-empty {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    .icon-empty {
      display: inline-block;
      background: url('../assets/pic_blank@3x.png') no-repeat;
      width: 200px;
      height: 200px;
      background-size: 100%;
    }
    span {
      font-size: 16px;
    }
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding: 10px 0;
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
  .carts-money {
    font-size: 18px;
    background: #e3e3e3;
    width: 100%;
    height: 50px;
    line-height: 50px;
    .pay {
      background: #f13329;
      border: none;
      float: right;
      width: 70px;
      height: 100%;
      color: #fff;
      font-size: 15px;
    }
  }
</style>
