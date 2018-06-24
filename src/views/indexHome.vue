<template>
  <div class="goods-list">
    <div class="goods-item" v-for="(item, index) in goodsData" :key="index">
      <img src="https://img.alicdn.com/imgextra/i2/1757237602/TB2.YxKaRsmBKNjSZFFXXcT9VXa_!!1757237602-0-item_pic.jpg_430x430q90.jpg" alt="">
      <div class="goods-info">
        <p class="goods-title">{{item.title}}</p>
        <p class="goods-money">￥{{item.money}}</p>
      </div>
      <div class="add-cart" @click="addCart(item)">加入购物车</div>
    </div>
  </div>
</template>
<script>
  import goodsData from '../js/goodsData.js'
  export default {
    data() {
      return {
        goodsData: []
      }
    },
    created() {
      this.goodsData = goodsData
    },
    methods: {
      /*点击加入购物车*/
      addCart(goods) {
        /*先判断购物车中是否存在该商品*/
        let hasGoods = this.$store.getters['cart/hasGoods'](goods)
        console.log('hasGoods', hasGoods)
        /*如果不存在则添加到购物车，如果存在则+1*/
        if (!hasGoods) {
          goods.num = 1
          this.$store.dispatch('cart/create_goods_to_cart', goods)
        }else {
          this.$store.dispatch('cart/add_goods_from_cart', goods)
        }
      }
    },
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
  .goods-list {
    .goods-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding-bottom: 5px;
      img {
        width: 100px;
        height: 100px;
      }
      .goods-info {
        width: 160px;
      }
      .goods-money {
        color: #f13329;
      }
      .add-cart {
        color: #7bbfea;
      }
    }
  }
</style>