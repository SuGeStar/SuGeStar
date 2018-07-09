<template>
  <div class="wrapper">
    <mt-header fixed title="绑定银行卡">
      <a href="/set" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="card-container">
      <div class="card-list" v-for="(card, $index) in cardList" :key="$index">
        <div class="bcImg">
          <img :src="card.cardImg" alt="">
        </div>
        <div class="bcInfo">
          <p class="bcName">{{card.bank}}</p>
          <p class="bcNum">{{card.card}}</p>
        </div>
        <div class="bcDo">
          <span class="icon icon-delete" @click="deleteBC(cardList, card.id, $index)"></span>
          <input type="radio" :id="card.id" name="def" @click="setDef(card.id)" v-bind:checked="card.is_default == 1">
          <label :for="card.id"> 设为默认</label>
        </div>
      </div>
    </div>
    <router-link to="addBankCard">
      <div class="addBC">
        <img src="../../assets/image/add.png" alt="">
        <p>添加银行卡</p>
      </div>
    </router-link>
  </div>
</template>

<script>
let token = localStorage.getItem('token')
import { url } from '../../assets/js/mobile.js'
import { Toast,MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      id: '',
      cardList: [
        {
          cardImg: '',
          cardName: '中国建设银行（储蓄卡）',
          cardNum: '**** **** **** 760',
          def: '1'
        },
        {
          cardImg: '',
          cardName: '中国工商银行（储蓄卡）',
          cardNum: '**** **** **** 760',
          def: '0'
        },
        {
          cardImg: '',
          cardName: '中国农业银行（储蓄卡）',
          cardNum: '**** **** **** 760',
          def: '0'
        },
        {
          cardImg: '',
          cardName: '中国银行（储蓄卡）',
          cardNum: '**** **** **** 760',
          def: '0'
        }
      ]
    }
  },
  methods: {
    // 删除银行卡
    deleteBC (ele, id, idx) {
      let form = this.$qs.stringify({
        token: token,
        bank_id: id
      })
      this.$http.post(url+'delBank', form)
      .then(response => {
        console.log(response)
        if (response.data.code == 200) {
          ele.splice(idx, 1)
        } else {
          Toast({
            message: response.data.msg,
            position: 'bottom',
            duration: 2000
          })
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    },
    // 设置默认
    setDef (id) {
      console.log(id)
      let form = this.$qs.stringify({
        token: token,
        bank_id: id
      })
      this.$http.post(url+'setBankDefault', form)
      .then(response => {
        console.log(response)
        Toast({
          message: response.data.msg,
          position: 'bottom',
          duration: 2000
        })
      })
      .catch(error => {
        console.log(error)
      })
    }
  },
  mounted () {
    this.$http.get(url + 'getBankcard?token='+token)
    // 获取银行卡列表
    .then(response => {
      console.log(response)
      this.cardList = response.data.data
      for (var i = 0; i < this.cardList.length; i++) {
        this.cardList[i].cardImg = response.data.data[i].logo.bank_logo
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/bindBankCard.less";
</style>
