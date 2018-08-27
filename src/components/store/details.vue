 <template>
<div class="wrapper">
    <mt-header fixed title="商品详情">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
  <div class="swiperContianer">
    <div class="swiperCenter">
      <div class="the-swiper">
        <mt-swipe class="det-swiper" :show-indicators="true" :auto="4000">
          <mt-swipe-item v-for="(swiper,index) in swiperBox" :key="index">
            <img cover :src="getImg(swiper)" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="the-txt">
        <h3>{{goodsInfo.goods_name}}</h3>
        <p>星币 <span>{{showGold}}</span> + ¥ <span>{{showPrice}}</span></p>
        <s>¥ {{totalPrice}}</s>
        <button @click="format(2)">立即购买</button>
      </div>
    </div>
  </div>
  <div class="detail-pic">
    <p><span></span>图文详情</p>
    <div class="detail-table">
      <i v-for="(ifo , index) in info" :key="index"><span>{{ifo.key}}</span><span>{{ifo.value}}</span></i>
    </div>
    <div class="details-imgBox">
      <img v-for="(img,index) in imgBox" :key="index" :src="getImg(img)" alt="">
    </div>
  </div>
  <mt-popup v-model="popupVisible" class="deta-pop" position="bottom">
    <div class="spec-box">
      <div class="spec">
        <div class="spec-header">
          <div class="spec-imgBox">
            <img :src="getImg(goodsInfo.default_img)" alt="">
          </div>
          <div class="spec-info">
            <p>星币 <span class="spec-pic">{{finalGold}}</span> +¥ <span class="spec-pic">{{finalPrice}}</span></p>
            <p><i>库存</i>: <span class="spec-num">{{number}}</span></p>
          </div>
        </div>
        <div class="spec-con">
          <div class="goods-sku">
            <div class="goods-skuColor">
              <p>{{goodsInfo.color_name}}</p>
              <div class="con-gg">
                <span v-for="(skuItem,index) in colorList" :key="index" :class="{active:index===color}" @click="active(index,skuItem)">{{skuItem}}</span>
              </div>
            </div>
            <div class="goods-skuColor">
              <p>{{goodsInfo.size_name}}</p>
              <div class="con-gg">
                <span v-for="(skuItem,index) in specList" :key="index" :class="{active:index===spec}" @click="activeSpec(index,skuItem)">{{skuItem.size}}</span>
              </div>
            </div>
            <div class="con-buy">
              <p>购买数量</p>
              <div class="esc-count">
                <p class="cti-sub cti" @click="numSub">-</p>
                <input type="number" class="cti-number" readonly="" :value="value">
                <p class="cti-add cti" @click="numAdd">+</p>
              </div>
            </div>
          </div>
        </div>
        <div class="spec-foot">
          <div>
            <p @click="defaultBtn(1)"><span>加入购物车</span></p>
            <p @click="defaultBtn(2)"><span class="buy-now">立即购买</span></p>
          </div>
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
import { Toast } from 'mint-ui';
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      whichWay: false,
      goodsId: 0,
      goodsInfo: [],
      swiperBox: [],
      showPrice: 0,
      showGold: 0,
      finalColor: '',
      finalSize: '',
      finalPrice: 0,
      finalGold: 0,
      finalTypeId: '',
      number: '5',
      popupVisible: true,
      imgBox: [],
      color: 0,
      spec: 0,
      colorList: [],
      specList: [],
      value: 1,
      whichDo: 0,
      shopCarNum: 0,
      shopCarShow: true,
      totalPrice: '',
      info: [],
      row: 0,
      getImg (url) {
        return 'http://img.sugebei.com/' + url
      }
    }
  },
  methods: {
    // 底部加入购物车    立即购买
    format (idx) {
      this.popupVisible = true
      this.whichDo = idx
      switch (idx) {
        case 0:
          this.whichWay = false
          break;
        case 1:
          this.whichWay = true
          break;
        case 2:
          this.whichWay = true
          break;
      }
    },
    // 选择颜色
    active (index, e) {
      this.color = index
      this.finalColor = e
    },
    // 选择规格
    activeSpec (index, e) {
      this.spec = index
      this.finalSize = e.size
      this.finalPrice = e.cash
      this.finalGold = e.gold
      this.number = e.stock
      this.finalTypeId = e.id
    },
    // 商品数量加
    numSub () {
      if (this.value <= 1) {
        Toast({
          message: '当前已是最小成交数量',
          position: 'bottom',
          duration: 2000
        });
      } else {
        this.value--;
        this.$emit('input', {res: this.value, other: '--'})
      }
    },
    // 商品数量减
    numAdd () {
      if (this.value < this.number) {
        this.value++;
        this.$emit('input', {res: this.value, other: '++'})
      } else {
        Toast({
          message: '已达到最大购买数量',
          position: 'bottom',
          duration: 2000
        });
      }
    },
    // 确定按钮执行事件
    defaultBtn (e) {
      this.popupVisible = false
      var did
      if (e === 0) {
        did = this.whichDo
      } else {
        did = e
      }
      switch (did) {
        case 1:
          // 添加到购物车
          // console.log(this.goodsInfo)
          let form = this.$qs.stringify({
            token: token,
            product_id: this.goodsInfo.id,
            num: this.value,
            shop_id: this.goodsInfo.store_id,
            shop_name: this.goodsInfo.store_name,
            spec_id: this.finalTypeId,
            specification: this.finalColor
          })
          this.$http.post(url + 'addToCart', form)
            .then(res => {
              // console.log(res)
              if (res.data.code == 200) {
                Toast('加入购物车成功!')
                this.shopCarNum = this.shopCarNum + this.value
              }
            })
            .catch(err => {
              console.log(err)
            })
          break;
        case 2:
          var finalData = {
            // 商品数量
            shopCount: this.value,
            // 选中状态下商品单价--现金
            shopPrice: this.finalPrice,
            //  选中状态下商品单价--星币
            shopGold: this.finalGold,
            // 选中的颜色（状态1）
            shopColor: this.finalColor,
            // 选中的尺寸（状态2）
            shopSize: this.finalSize,
            // 商品ID
            shopId: this.goodsInfo.id,
            // 商品状态2 ID
            shopTypeId: this.finalTypeId,
            // 商品默认图片
            shopImg: this.goodsInfo.default_img,
            // 商品名字
            shopName: this.goodsInfo.goods_name,
            // 商品状态1名称
            shopTypeName1: this.goodsInfo.color_name,
            // 商品状态2名称
            shopTypeName2: this.goodsInfo.size_name
          }
          localStorage.setItem('finalData',JSON.stringify(finalData))
          this.$router.push({
            path: '/confirmOrder'
          })
          break;
      }
    }
  },
  created () {
    let self = this
    self.goodsId = this.$route.params.goodsId
    this.$http.get(url + 'goodsInfo?goods_id=' + self.goodsId)
      .then(res => {
        self.goodsInfo = res.data.data
        self.swiperBox = self.goodsInfo.main_img
        self.imgBox = self.goodsInfo.detail_img
        self.colorList = self.goodsInfo.color
        self.specList = self.goodsInfo.specs
        self.showPrice = self.goodsInfo.specs[0].cash
        self.showGold = self.goodsInfo.specs[0].gold
        self.finalColor = self.goodsInfo.color[0]
        self.finalSize = self.goodsInfo.specs[0].size
        self.finalPrice = self.goodsInfo.specs[0].cash
        self.finalGold = self.goodsInfo.specs[0].gold
        self.finalTypeId = self.goodsInfo.specs[0].id
        self.number = self.goodsInfo.specs[0].stock
        self.totalPrice = self.goodsInfo.specs[0].total
        self.info = self.goodsInfo.infos
      })
      .catch(err => {
        console.log(err)
      })
    // 获取购物车数量
    this.$http.get(url + 'numCart?token=' + token)
      .then(res => {
        if (res.data.data == 0) {
          this.shopCarShow = false
        } else {
          this.shopCarNum = res.data.data
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>
