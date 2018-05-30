<template>
<div class="wrapper">
	<mt-header fixed title="商品详情">
		<a href="javascript:history.go(-1);" slot="left">
			<mt-button icon="back"></mt-button>
		</a>
	</mt-header>
	<div class="details">
		<mt-swipe class="det-swiper" :show-indicators="false" :auto="4000">
			<mt-swipe-item v-for="swiper in swiperBox" :key="swiper.id">
				<img cover :src="swiper.img" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<div class="det-info">
			<h3>{{title}}</h3>
			<p class="det-price">结算价：<span>{{price}}</span> <i>或{{sgk}}</i></p>
		</div>
		<div class="det-format" @click="format">
			<p>选择数量规格</p>
			<i class="icon icon-right"></i>
		</div>
		<div class="det-details">
			<h3 class="details-title">商品详情</h3>
			<div class="details-imgBox">
				<img v-for="img in imgBox" :key="img.id" :src="img.pic" alt="">
			</div>
		</div>
	</div>
	<div class="footer-box">
		<router-link to="/car">
			<div class="buyicon">
				<i class="icon icon-car"></i>
			</div>
		</router-link>
		<p @click="format">加入购物车</p>
		<p @click="format" class="deta-buy">立即购买</p>
	</div>
	<mt-popup v-model="popupVisible" class="deta-pop" position="bottom">
		<div class="spec-box">
			<div class="spec">
				<div class="spec-header">
					<div class="spec-imgBox">
						<img :src="this.swiperBox[0].img" alt="">
					</div>
					<div class="spec-info">
						<p>结算价: <span class="spec-pic">{{price}}</span></p>
						<p>会员价: <span class="spec-sgk">{{sgk}}</span></p>
						<p>库存: <span class="spec-num">{{number}}</span></p>
					</div>
				</div>
				<div class="spec-con">
					<div class="goods-sku">
						<div class="goods-skuColor">
							<p>颜色分类</p>
							<div class="con-gg">
								<span v-for="(skuItem,index) in colorList" :key="index" :class="{active:index===color}" @click="active(index)">{{skuItem.name}}</span>
							</div>
						</div>
						<div class="goods-skuColor">
							<p>尺寸规格</p>
							<div class="con-gg">
								<span v-for="(skuItem,index) in specList" :key="index" :class="{active:index===spec}" @click="activeSpec(index)">{{skuItem.item}}</span>
							</div>
						</div>
						<div class="con-buy clearfix">
							<p>购买数量</p>
						</div>
					</div>
				</div>
				<div class="spec-foot">
					<mt-button type="default" class="default-btn">确认</mt-button>
				</div>
			</div>
		</div>
	</mt-popup>
</div> 
</template>
<style lang="less" scoped>
@import "../../assets/less/details.less";
</style>
<script>
export default {
	data () {
		return {
			swiperBox: [
				{
					img: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c6b86511.jpg'
				},
				{
					img: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c6b78300.jpg'
				},
				{
					img: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c6b78300.jpg'
				},
				{
					img: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c6b78300.jpg'
				}
			],
			title: '男式潮牌男装青少年男士T恤短袖丝光棉体恤啦啦啦啦9603#',
			price: '￥87.00',
			sgk: '¥79.00+严选积分 8.00',
			number: '100',
			popupVisible: true,
			imgBox: [
				{
					pic: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c71dd2d6.jpg'
				},
				{
					pic: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c71dd2d6.jpg'
				},
				{
					pic: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c71dd2d6.jpg'
				},
				{
					pic: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c71dd2d6.jpg'
				},
				{
					pic: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c71dd2d6.jpg'
				},
				{
					pic: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c71dd2d6.jpg'
				},
				{
					pic: 'http://www.sgyxmall.com//Upload/goods/store_88/2018-05-24/5b066c71dd2d6.jpg'
				}
			],
			color: 0,
			spec: 0,
			colorList: [
				{
					name: '金色'
				},
				{
					name: '焦糖色'
				},
				{
					name: '黑色'
				},
				{
					name: '灰色'
				},
				{
					name: '枣红色'
				},
				{
					name: '金色'
				},
				{
					name: '金色'
				},
				{
					name: '金色'
				},
				{
					name: '金色'
				},
				{
					name: '金色'
				}
			],
			specList: [
				{
					item: 'M'
				},
				{
					item: 'L'
				},
				{
					item: 'XL'
				},
				{
					item: 'XXL'
				},
				{
					item: 'XXXL'
				},
			]
		}
	},
	methods: {
		format () {
			this.popupVisible = true
		},
		active (index) {
			this.color = index
		},
		activeSpec (index) {
			this.spec = index
		}
	}
}  
</script> 
