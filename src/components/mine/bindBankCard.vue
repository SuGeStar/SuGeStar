<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>
      绑定银行卡
    </div>
    <div class="card-container">
      <div class="card-list" v-for="(card, $index) in cardList" :key="$index">
        <div class="bcImg"><img src="../../assets/image/card.png" alt=""></div>
        <div class="bcInfo">
          <p class="bcName">{{card.cardName}}</p>
          <p class="bcNum">{{card.cardNum}}</p>
        </div>
        <div class="bcDo">
          <span class="icon icon-delete" @click="deleteBC(cardList, card, $index)"></span>
          <input type="radio" :id="$index" name="def" @click="setDef()" v-bind:checked="card.def == 1">
          <label :for="$index"> 设为默认</label>
        </div>
      </div>
    </div>
    <div class="addBC">
      添加银行卡
    </div>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui'
export default {
  data () {
    return {
      token: '',
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
    deleteBC (ele, card, idx) {
      ele.splice(idx, 1)
    },
    // 设置默认
    setDef () {
      // console.log('aa')
      MessageBox.confirm('确定执行此操作?').then(action => {
        this.$root.reload()
      })
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/bindBankCard.less";
</style>
