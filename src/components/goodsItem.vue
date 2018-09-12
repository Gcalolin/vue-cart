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
                <span class="add-cart" @click="addCart(product, $event)"></span>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,mapActions,mapState } from 'vuex'

export default {
    /*组件数据*/
    data() {
        return {};
    },
    props: {
        product: {
            type: Object
        },
    },
    /*组件方法*/
    methods: {
        ...mapActions({
            'createGoodsToCart': 'cart/create_goods_to_cart',
            'addGoodsFromCart': 'cart/add_goods_from_cart'
        }),
        /*加入购物车*/
        addCart(product) {

            //判断这件商品是否在购物车内
            let hasGoods = this.hasGoods(product)
            if (hasGoods) {
              //有，该商品的数量+1
              this.addGoodsFromCart(product)

            }else {
                //没有，购物车创建该商品
                product.num = 1
                this.createGoodsToCart(product)
            }

            let target = this.$refs.thumb
            this.$emit('addCart', target)
        },
    },
    /*组件加载完毕执行的操作*/
    mounted() {
    },
    /*引入的组件*/
    components: {},
    /*数据计算*/
    computed: {
        ...mapGetters({
            cartNum: 'cart/cartNum',
            hasGoods: 'cart/hasGoods'
        })
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
