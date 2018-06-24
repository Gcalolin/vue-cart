<template>
	<div>
		<goods-item v-for="(item, index) in goodsList" :product="item" :key="index"></goods-item>
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
		}
	}
</script>

<style lang="scss" scoped></style>