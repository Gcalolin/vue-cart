<template>
  <div class="cart-item">
    <img src="https://img.alicdn.com/imgextra/i2/1757237602/TB2.YxKaRsmBKNjSZFFXXcT9VXa_!!1757237602-0-item_pic.jpg_430x430q90.jpg" alt="">
    <div class="goods-info">
      <p class="goods-title">户外运动舒适两件套男士</p>
      <div class="btn-group">
        <div class="change">
          <button class="decrease">-</button>
          <input type="number">
          <button class="increase">+</button>
        </div>
        <button class="count" >10</button>
        <button class="count" >20</button>
        <button class="count" >50</button>
        <button class="count" >100</button>
      </div>
    </div>
    <div class="operate-delete">删除</div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {

      }
    },
    methods: {

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
