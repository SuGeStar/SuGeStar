<template>
<div class="wrapper">
  <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>
      绑定银行卡
    </div>
  <div class="addBankCard">
   <div class="cell">
      <mt-field label="持卡人" placeholder="请输入持卡人姓名" v-model="username"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号码" v-model="phoneNum"></mt-field>
      <mt-field label="卡号" placeholder="请输入银行卡号" v-model="cardID"></mt-field>
      <div class="cell-select" @click="bankPull">
        <mt-field label="开户行" placeholder="请选择开户行" v-model="bank" readonly>
        <i class="icon icon-pull"></i>
        </mt-field>
      </div>
      <div class="box" v-show="box">
        <ul>
          <li @click="bankselcet(index)" v-for="(bank,index) in bankList" :key="index">{{bank.bank_name}}</li>
        </ul>
      </div>
      <div class="cell-select" @click="Province">
        <mt-field label="开户省份" placeholder="请选择开户省份" v-model="province" readonly>
          <i class="icon icon-pull"></i>
        </mt-field>
      </div>
      <div class="box" v-show="provinceShow">
        <ul>
          <li @click="provselcet(index)" v-for="(prov,index) in provinceList" :key="index">{{prov.province}}</li>
        </ul>
      </div>
      <div class="cell-select" @click="bankCity">
        <mt-field label="开户城市" placeholder="请选择开户城市" v-model="city" readonly>
          <i class="icon icon-pull"></i>
        </mt-field>
      </div>
      <div class="box" v-show="cityShow">
        <ul>
          <li @click="cityselcet(index)" v-for="(city,index) in cityList" :key="index">{{city.area}}</li>
        </ul>
      </div>
      <div class="cell-select" @click="bankCode">
        <mt-field label="开户支行" placeholder="请选择开户支行" v-model="branch" :id="code" readonly>
          <i class="icon icon-pull"></i>
        </mt-field>
      </div>
      <div class="box" v-show="bankShow">
        <ul>
          <li @click="bankcodeselcet(index)" v-for="(bank,index) in bankCodeList" :key="index" :id="bank.code">{{bank.name}}</li>
        </ul>
      </div>
      <mt-field label="身份证号" placeholder="请输入身份证号" v-model="identity"></mt-field>
   </div>
    <div class="btn">
      <mt-button class="button" @click="submit">确定</mt-button>
    </div>
  </div>
</div>
</template>
<style lang="less" scoped>
@import "../../assets/less/addBankCard.less";
</style>
<script>
import { Toast } from 'mint-ui';
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      username: '',
      phoneNum: '',
      cardID: '',
      bank: '',
      province: '',
      city: '',
      branch: '',
      identity: '',
      code: '',
      z_tel: /^1(3|4|5|6|7|8|9)\d{9}$/,
      // 身份证号码判断
      z_idNumber: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      // 银行卡号判断
      z_cardid: /^([1-9]{1})(\d{14}|\d{18})$/,
      box: false,
      provinceShow: false,
      cityShow: false,
      bankShow: false,
      bankList: [],
      provinceList: [],
      cityList: [],
      bankCodeList: []
    }
  },
  methods: {
    bankselcet (index) {
      // console.log(index)
      this.bank = this.bankList[index].bank_name
      this.box = false
    },
    provselcet (index) {
      this.province = this.provinceList[index].province
      this.provinceShow = false
    },
    cityselcet (index) {
      this.city = this.cityList[index].area
      this.cityShow = false
    },
    bankcodeselcet (index) {
      this.branch = this.bankCodeList[index].name
      this.code = this.bankCodeList[index].code
      this.bankShow = false
    },
    bankPull () {
      // 获取开户行列表
      this.$http.get(url + 'bankList')
      .then(response => {
        // console.log(response)
        this.bankList = response.data.data
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
      this.box = true
    },
    Province () {
      if (this.bank == '') {
        Toast('请选择开户行');
        return false
      }
      // 获取开户行所在省份
      this.$http.get(url + 'bankProvince?bank='+this.bank)
      .then(response => {
        // console.log(response)
        this.provinceList = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
      this.provinceShow = true
    },
    bankCity () {
      if (this.bank == '') {
        Toast('请选择开户行');
        return false
      }
      if (this.province == '') {
        Toast('请选择开户省份');
        return false
      }
      // 开户行所在城市
      this.$http.get(url + 'bankCity?bank='+this.bank+'&province='+this.province)
      .then(response => {
        // console.log(response)
        this.cityList = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
      this.cityShow = true
    },
    bankCode () {
      if (this.bank == '') {
        Toast('请选择开户行');
        return false
      }
      if (this.province == '') {
        Toast('请选择开户省份');
        return false
      }
      if (this.city == '') {
        Toast('请选择开户城市');
        return false
      }
      // 开户支行
      this.$http.get(url + 'bankCodeList?bank='+this.bank+'&province='+this.province+'&area='+this.city)
      .then(response => {
        // console.log(response)
        this.bankCodeList = response.data.data
      })
      .catch(error => {
        console.log(error)
      })
      this.bankShow = true
    },
    submit () {
      if (this.username == '') {
        Toast('请输入持卡人姓名');
        return false
      } 
      if (!this.phoneNum) {
        Toast('请填写电话号码!')
        return false
      }
      if (this.z_tel.test(this.phoneNum) === false) {
        Toast('您的电话号码格式有误!')
        return false
      }
      if (this.cardID == '') {
        Toast('请输入银行卡号')
        return false
      }
      if (this.z_cardid.test(this.cardID) == false) {
        Toast('您输入的银行卡号有误!')
        return false
      }
      if (this.bank == '') {
        Toast('请选择开户行');
        return false
      }
      if (this.province == '') {
        Toast('请选择开户省份');
        return false
      }
      if (this.city == '') {
        Toast('请选择开户城市');
        return false
      }
      if (this.branch == '') {
        Toast('请选择开户支行');
        return false
      }
      if (this.identity == '') {
        Toast('请输入身份证号');
        return false
      }else if (this.z_idNumber.test(this.identity) === false) {
        Toast('您的身份证号码格式有误!')
        return false
      }
      let form = this.$qs.stringify({
        token: token,
        bank: this.bank,
        account: this.username,
        id_number: this.identity,
        card: this.cardID,
        bank_code: this.code,
        bank_code_name: this.branch,
        phone: this.phoneNum
      })
      this.$http.post(url+'addBankCard', form)
      .then(response => {
        // 添加银行卡
        // console.log(response)
        if (response.data.code == 200) {
          this.$router.replace('/bindBankCard')
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
      })
    },
  }
}
</script>
