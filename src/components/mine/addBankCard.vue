<template>
<div class="wrapper">
  <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>
      绑定银行卡
    </div>
  <div class="addBankCard">
   <div class="cell">
      <mt-field label="持卡人" placeholder="请输入持卡人姓名" v-model="username"></mt-field>
      <mt-field label="卡号" placeholder="请输入银行卡号" v-model="cardID"></mt-field>
      <mt-field label="开户行" placeholder="请选择开户行" v-model="bank">
        <i class="icon icon-pull"></i>
      </mt-field>
      <mt-field label="开户省份" placeholder="请选择开户省份" v-model="province">
        <i class="icon icon-pull"></i>
      </mt-field>
      <mt-field label="开户城市" placeholder="请选择开户城市" v-model="city">
        <i class="icon icon-pull"></i>
      </mt-field>
      <mt-field label="开户支行" placeholder="请选择开户支行" v-model="branch">
        <i class="icon icon-pull"></i>
      </mt-field>
      <mt-field label="身份证号" placeholder="请输入身份证号" v-model="identity"></mt-field>
   </div>
    <div class="btn">
      <mt-button class="button">确定</mt-button>
    </div>
  </div>
</div>
</template>
<style lang="less" scoped>
@import "../../assets/less/addBankCard.less";
</style>
<script>
export default {
  data () {
    return {
      username: '',
      cardID: '',
      bank: '',
      province: '',
      city: '',
      branch: '',
      identity: ''
    }
  }
}
</script>
