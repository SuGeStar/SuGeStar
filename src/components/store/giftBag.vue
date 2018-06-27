<template>
    <div class="wrapper">
      <mt-header fixed title="星球大礼包">
        <a href="javascript:history.go(-1);" slot="left">
          <mt-button icon="back"></mt-button>
        </a>
      </mt-header>
      <div class="gift-bag-container">
        <div class="each-gift-bag-list" v-for="(gift,idx) in giftList" :key="idx">
          <div class="gift-container">
             <div class="each-gift-bag fl" v-for="(eachGift,_idx) in gift" :key="_idx" style="">
                <div class="gift-img">
                  <img :src="eachGift.imgSrc" alt="">
                </div>
                <p class="gift-name">{{eachGift.giftName}}</p>
                <p class="gift-price">{{eachGift.giftPrice}}22</p>
                <input type="radio" :name="eachGift.giftBelong">
             </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
        giftList:[
          [
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '真艾宝',
              giftPrice: '180',
              giftBelong: '1'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '女装',
              giftPrice: '132',
              giftBelong: '1'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '男装',
              giftPrice: '20',
              giftBelong: '1'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '鞋子',
              giftPrice: '100',
              giftBelong: '1'
            }
          ],
          [
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '童装',
              giftPrice: '270',
              giftBelong: '2'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '零食',
              giftPrice: '98',
              giftBelong: '2'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '家电',
              giftPrice: '1000',
              giftBelong: '2'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '数码',
              giftPrice: '800',
              giftBelong: '2'
            }

          ],
          [
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '男鞋',
              giftPrice: '99',
              giftBelong: '3'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '保健品',
              giftPrice: '321',
              giftBelong: '3'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '化妆品',
              giftPrice: '123',
              giftBelong: '3'
            },
            {
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '毒品',
              giftPrice: '100000',
              giftBelong: '3'
            }
            /*{
              imgSrc: 'http://ofkzpykzq.bkt.clouddn.com/goods_pic.png',
              giftName: '鞋子',
              giftPrice: '100',
              giftBelong: '2'
            }*/
          ]
        ],
        _width:0
      }
    },
  mounted () {
      // $(".each-gift-bag").css
      // console.log();
    (this.giftList).forEach(function (item) {
        console.log(item.length);
        // this._width = item.length*2.3
      })
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/giftBag.less";
</style>
