<template>
	<div>
		<goods-item 
			v-for="(item, index) in goodsList" 
			:product="item" 
			:key="index"
			@addCart="addCart" >
		</goods-item>
		<div style="height: 49px;width: 100%;clear: both;"></div>
	</div>
</template>

<script type="text/javascript">
	import goodsItem from '../components/goodsItem'
	import goodsData from '../js/goodsData'
	export default {
		data() {
			return {
				goodsList: []
			}
		},
		created() {
			this.goodsList = goodsData
		},
		components: {
			goodsItem
		},
		methods: {
			addCart(target) {
				this.$emit('addCart', target)
			}
		}
	}
</script>

<style lang="scss" scoped></style>