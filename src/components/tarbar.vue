<template>
  <div class="tabbar-wrapper">
    <ul class="tarbar-container border-top-1px">
      <router-link tag="li" class="tarbar-item tabbar-homepage" :to="{path: '/'}" exact>
        <i></i>
        首页
      </router-link>
      <router-link tag="li" class="tarbar-item tabbar-cart" :to="{name: 'cart'}">
        <i ref="cartIcon"></i>
        <!-- 购物车小球的徽标 -->
        <span class="cart-blank-circle" id="cartNum"></span>
        <span class="cart-num" v-show="cartNum">{{ cartNum }}</span>
        购物车
      </router-link>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import { mapGetters } from 'vuex'
  export default {
    data() {
      return {
        
      }
    },
    computed: {
      ...mapGetters({
        'cartNum': 'cart/cartNum'
      })
    }
  }
</script>

<style lang="scss" scoped>
.tarbar-container {
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(125, 125, 125, 0.8);
  position: fixed;
  display: flex;
  flex-direction: row;
  padding: 3px 0;
  margin: 0 auto;
  max-width: 414px;
  margin: 0 auto;
  z-index: 500;
  box-sizing: border-box;
  /*基础导航item*/
  .tarbar-item {
    flex: 0 1 50%;
    text-align: center;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    color: #808080;
    /*激活状态*/
    &.active {
      color: #f13329;
    }
    /*公用i标签*/
    i {
      background-repeat: no-repeat;
      font-size: 18px;
    }
  }

  /*首页*/
  .tabbar-homepage {
    i {
      background: url('../assets/home_normal@3x.png');
      width: 21px;
      height: 21px;
      background-size: 100%;
    }
    &.active {
      i {
        background: url('../assets/home_click@3x.png');
        width: 21px;
        height: 21px;
        background-size: 100%;
      }
    }
  }
  .cart-num,
  .cart-blank-circle {
    width: 17px;
    height: 17px;
    line-height: 19px;
    padding: 0;
    text-align: center;
    top: 0;
    right: 70px;
    display: inline-block;
    color: #ffffff;
    position: absolute;
    border-radius: 50%;
    transition: all .1s ease-out;
    font-size: 12px;
    z-index: 99;
    transform: scale(0.8);
  }
  .cart-num {
    background: #f13329;
  }
  /*购物车*/
  .tabbar-cart {
    i {
      background: url('../assets/cart_normal@3x.png');
      width: 21px;
      height: 21px;
      background-size: 100%;
    }
    &.active {
      i {
        background: url('../assets/cart_click@3x.png');
        width: 21px;
        height: 21px;
        background-size: 100%;
      }
    }
  }
}
</style>