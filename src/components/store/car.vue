<template>
<div class="wrapper">
	<mt-header fixed title="购物车">
		<a href="javascript:history.go(-1);" slot="left">
			<mt-button icon="back"></mt-button>
		</a>
	</mt-header>
	<div class="car">
		<ul class="car-box">
			<li class="list-box" v-for="(carItem,index) in carList" :key="index">
				<div class="car-list">
					<div class="car-title">
						<label class="cart-checkbox">
							<input class="" data-storeId=""	type="checkbox" name="cart-checkbox">
							<i :class="['icon','icon-checkbox',isSelect?'select':'']"></i>
						</label>
						<span>{{carItem.title}}</span>
					</div>
					<div class="car-content">
						<div class="check-box">
							<label class="cart-checkbox">
								<input class="" data-storeId=""	type="checkbox" name="cart-checkbox">
								<i class="icon icon-checkbox"></i>
							</label>
						</div>
						<div class="img-box">
							<img :src="carItem.img" alt="">
						</div>
						<div class="info-box">
							<h3>{{carItem.name}}</h3>
							<p class="info-desc">颜色：{{carItem.color}}，尺寸：{{carItem.size}}</p>
							<div class="esc-count">
								<p class="cti-sub cti" @click="numSub">-</p>
								<input type="number" class="cti-number" readonly="" :value="carItem.result">
								<p class="cti-add cti" @click="numAdd">+</p>
							</div>
							<p class="car-price">{{carItem.price}} </p>
							<p>或{{carItem.skg}}</p>
						</div>
						<div class="delete-btn">
							<p class="icon icon-delete"></p>
							<p>删除</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
	<div class="footer">
		<label class="cart-checkbox">
			<input class="" data-storeId=""	type="checkbox" name="cart-checkbox">
			<i :class="['icon','icon-checkbox',isSelect?'select':'']"></i>
			<span>全选</span>
		</label>
		<div class="foot-total">
			<span>合计:</span>
			<div class="total-price">
				<p>{{totPrice}}元</p>
				<p>或{{totmony}}+严选积分{{totsgk}}</p>
			</div>
		</div>
		<div class="foot-sure">
			结算
		</div>
	</div>
</div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data () {
    return {
			carList: [
				{
					title: '五月真艾',
					img: 'http://www.sgyxmall.com//Upload/goods/store_37/2018-05-03/5aea7227b5443.jpg',
					name: '真艾宝',
					color: '如图',
					size: '如图',
					result: '1',
					price: '￥169',
					skg: '¥96.00+严选积分100.00'
				},
				{
					title: '五月真艾',
					img: 'http://www.sgyxmall.com//Upload/goods/store_37/2018-05-03/5aea7227b5443.jpg',
					name: '真艾宝',
					color: '如图',
					size: '如图',
					result: '1',
					price: '￥169',
					skg: '¥96.00+严选积分100.00'
				},
				{
					title: '五月真艾',
					img: 'http://www.sgyxmall.com//Upload/goods/store_37/2018-05-03/5aea7227b5443.jpg',
					name: '真艾宝',
					color: '如图',
					size: '如图',
					result: '1',
					price: '￥169',
					skg: '¥96.00+严选积分100.00'
				},
				{
					title: '五月真艾',
					img: 'http://www.sgyxmall.com//Upload/goods/store_37/2018-05-03/5aea7227b5443.jpg',
					name: '真艾宝',
					color: '如图',
					size: '如图',
					result: '1',
					price: '￥169',
					skg: '¥96.00+严选积分100.00'
				},
				{
					title: '五月真艾',
					img: 'http://www.sgyxmall.com//Upload/goods/store_37/2018-05-03/5aea7227b5443.jpg',
					name: '真艾宝',
					color: '如图',
					size: '如图',
					result: '1',
					price: '￥169',
					skg: '¥96.00+严选积分100.00'
				},
				{
					title: '五月真艾',
					img: 'http://www.sgyxmall.com//Upload/goods/store_37/2018-05-03/5aea7227b5443.jpg',
					name: '真艾宝',
					color: '如图',
					size: '如图',
					result: '1',
					price: '￥169',
					skg: '¥96.00+严选积分100.00'
				},
				{
					title: '五月真艾',
					img: 'http://www.sgyxmall.com//Upload/goods/store_37/2018-05-03/5aea7227b5443.jpg',
					name: '真艾宝',
					color: '如图',
					size: '如图',
					result: '1',
					price: '￥169',
					skg: '¥96.00+严选积分100.00'
				},
			],
			number: '5',
			isSelect: true,
			totPrice: '100',
			totmony: '￥10',
			totsgk: '90'
    }
	},
  methods: {
   numSub () {
			if (this.result <= 1) {
				console.log('1111')
				Toast({
					message: '当前已是最小成交数量',
					position: 'bottom',
					duration: 2000
				});
			}else {
				this.result--;
				this.$emit('input', {res: this.result, other: '--'})
			}
		},
		numAdd () {
			if (this.result < this.number) {
				this.result++;
				this.$emit('input', {res: this.result, other: '++'})
			} else {
				Toast({
					message: '已达到最大购买数量',
					position: 'bottom',
					duration: 2000
				});
			}
		},
  }
}
</script>
<style lang="less" scoped>
@import "../../assets/less/car.less";
</style>
