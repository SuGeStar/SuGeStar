<template>
  <div class="reg-container">
    <h3 class="reg-title">SG星球注册</h3>
    <div class="reg-form">
      <div><span>推荐编号</span><input type="text" placeholder="" v-bind:readonly="true" v-model="recommendCode"></div>
      <div><span>手机号码</span><input type="number" placeholder="请输入手机号码" v-model="phoneNum"></div>
      <div>
        <span>验&nbsp;证&nbsp;&nbsp;码</span>
        <input type="number" placeholder="手机验证码" v-model="verificationCode" class="verificationCode">
        <i v-bind:class="{'haveSend':isSend}" @click="sendCode">{{verificationCodeTxt}}</i>
      </div>
      <div><span>登录密码</span><input type="password" placeholder="字母数字组合" v-model="loginPsd"></div>
      <div><span>支付密码</span><input type="password" placeholder="6位数字" v-model="applyPsd"></div>
      <div><span>所属地区</span><input type="text" placeholder="请选择省 市 县" v-model="locations" v-bind:readonly="true"></div>
      <div><span>优品账号</span><input type="text" placeholder="请输入您的优品账号" v-model="YPAccount"></div>
      <div><span>真是姓名</span><input type="text" placeholder="请输入您的真是姓名" v-model="realName"></div>
      <div><span>身份证号</span><input type="text" placeholder="请输入身份证号码" v-model="IDNumber"></div>
      <div><span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span><input type="text" placeholder="给自己起个名字吧~" v-model="nickName"></div>
    </div>
    <mt-button type="default" v-on:click="register">注册</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      recommendCode: '1023515',
      phoneNum: '',
      verificationCode: '',
      verificationCodeTxt: '发送验证码',
      loginPsd: '',
      applyPsd: '',
      locations: '',
      YPAccount: '',
      realName: '',
      IDNumber: '',
      nickName: '',
      isSend: false,
      z_tel: /^1(3|4|5|7|8|9)\d{9}$/
    }
  },
  methods: {
    // 倒计时
    ctimer: function (time) {
      var t = time
      var that = this
      if (t > 0) {
        this.isSend = true
        this.verificationCodeTxt = t + 's后重发'
        t--
        setTimeout(function () {
          that.ctimer(t)
        }, 1000)
      } else {
        this.isSend = false
        this.verificationCodeTxt = '获取验证码'
      }
    },
    // 申请发送验证码
    sendCode: function () {
      if (!this.phoneNum) {
        Toast('请填写电话号码!')
        return false
      } if (this.z_tel.test(this.phoneNum) === false) {
        Toast('您的电话号码格式有误!')
        return false
      } if (this.isSend) {
        Toast('请稍后点击！')
        return false
      } else {
        this.ctimer(10)
      };
    },
    // 注册
    register: function () {
      if (!this.phoneNum) {
        Toast('请填写电话号码!')
        return false
      } if (this.z_tel.test(this.phoneNum) === false) {
        Toast('您的电话号码格式有误!')
        return false
      } if (!this.verificationCode) {
        Toast('请填写验证码!')
        return false
      } if (!this.loginPsd) {
        Toast('请填写登录密码!')
        return false
      } if (!this.applyPsd) {
        Toast('请填写支付密码!')
        return false
      } if (!this.locations) {
        Toast('请选择归属地!')
        return false
      } if (!this.YPAccount) {
        Toast('请填写优品账号!')
        return false
      } if (!this.realName) {
        Toast('请填写真实姓名!')
        return false
      } if (!this.nickName) {
        Toast('给自己起一个昵称吧~')
        return false
      }
    }
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/register.less";
</style>
