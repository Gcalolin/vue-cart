<template>
  <div class="product-wrapper border-left-bottom-1px">
    <!--封面图-->
    <img ref="thumb" :src="product.thumb" class="product-img">
    <!--商品信息-->
    <div class="product-info">
      <!--标题-->
      <p class="product-title" style="-webkit-box-orient: vertical;" >
        {{product.title}}
      </p>
      <!--商品价格-->
      <p class="product-price">
        <span class="gray-font-12">价值:￥{{product.money}}</span>
      </p>
      <!--购买按钮组-->
      <div class="btn-group">
        <!--立即参与-->
        <span class="buy">商品详情</span>
        <!--加入购物车-->
        <span class="add-cart"></span>
      </div>
    </div>
   </div>
</template>

<script>
 // import {
 //   mapGetters
 // } from 'vuex'

  export default {
    /*组件数据*/
    data() {
      return {};
    },
    props: {
      product: {
        type: Object
      },
      isRecomment: {
        type: Boolean
      },
      /*是否是购物车的热门推荐*/
      isCartRecomment: {
        type: Boolean,
        default: false
      },
     
    },
    /*组件方法*/
    methods: {
      /*加入购物车*/
      addCart(product) {
        /*判断商品是否已经在购物车中*/
        let hasGoods = this.$store.getters['cart/hasGoods'](product)
        if (hasGoods) {
          let shoppingCart = JSON.parse(localStorage.cart)
          let index = `p${product.id}`
          /*购物车的数量*/
          let num = shoppingCart[index].num
          let hadBought = shoppingCart[index].buy
          /*是否可以加入购物车*/
          /*商品非限购的且达到了剩余的数量*/
          if (num >= product.remainder) {
            this.toast('您已达到本期商品的购买上限')
            return
          }
          /*购物车中已经存在*/
          this.$store.dispatch('cart/add_goods_num_for_cart', product)
          if (this.isRecomment && !this.isCartRecomment) {
            this.toast('成功加入购物车')
          }
        } else {
          /*判断购物车是否已经超过了99件商品*/
          const MAX_CART_NUM = 99
          if (this.cartNum > MAX_CART_NUM-1) {
            this.toast('购物车已满，要增加商品请删除其他商品')
            return
          }
          /*不存在，往购物车中添加购买次数num=1和current_period=period*/
          product.num = 1
          product.pre_num = 1
          product.current_period = product.period
          this.$store.dispatch('cart/create_goods_to_cart', {
            product: product,
            type: PREFERENCE
          })
          if (this.isRecomment && !this.isCartRecomment) {
            this.toast('成功加入购物车')
          }
        }
        let target = this.$refs.thumb
        console.log(target)
        this.$emit('add', target)
      },
      /*进入商品详情页*/
      goPreferenceDetail() {
        this.$router.push({
          name: 'PreferencesInfo',
          params: {
            id: this.product.id,
            period: this.product.period
          }
        })
      },
      /*传递点击事件 显示弹窗*/
      questionStatus() {
        this.$emit('showQuestionAlert')
      }
    },
    /*组件加载完毕执行的操作*/
    mounted() {
    },
    /*引入的组件*/
    components: {},
    /*数据计算*/
    computed: {
      // ...mapGetters({
      //   cartNum: 'cart/cartNum'
      // })
    }
  };
</script>

<style lang="scss" scoped>
  @import '../scss/common.scss';
  .product-wrapper {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 13px;
    background: #ffffff;
    padding: 10px 15px;
    position: relative;
    width: 50%;
    float: left;
    /*商品封面图*/
    .product-img {
      display: block;
      border: none;
      width: 110px;
      height: 110px;
      margin: 0 auto 10px auto;
    }
    /*商品信息*/
    .product-info {
      .product-title {
        font-size: 13px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        height: 33px;
        /*width: 100%;*/
        width: 157px;
        line-height: 16px;
        padding: 3px 0;
        box-sizing: border-box;
        word-wrap: normal;
      }
      .product-price {
        font-size: 13px;
      }
    }
    /*购买按钮组*/
    .btn-group {
      margin-top: 5px;
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .buy {
        box-sizing: border-box;
        width:97px;
        height: 30px;
        line-height:30px;
        text-align: center;
        border-radius:107px;
        font-size: 12px;
        color: #f13329;
        border: 1px solid #f13329;
      }
      .add-cart {
        background: url('../assets/join_cart@3x.png') no-repeat;
        width: 35px;
        height: 35px;
        background-size: 100%;
        box-shadow: 0px 0px 10px 10px transparent;
      }
    }
}
</style>
