<template>
  <div class="wrapper">
    <mt-header fixed title="验证身份">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="proofIdent">
      <div class="proof-list">
        <ul>
          <li class="proof-bg">1.验证身份</li>
          <li>2.重置密码</li>
        </ul>
      </div>
      <div class="regform">
        <ul class="proof-phone">
          <li>
            <mt-field label="手机号" placeholder="请输入手机号码" v-model="form.phone" type="tel" class="phone"></mt-field>
          </li>
          <li>
            <mt-field label="验证码" placeholder="请输入您的验证码" v-model="form.verifyCode" class="verifyCode"></mt-field>
            <mt-button v-bind:disabled="disabled" class="verifyCode-btn" type="default" @click="sendsms">{{verifyCodeBtnText}}</mt-button>
          </li>
        </ul>
      </div>
    </div>
  </div> 
</template>
<style lang="less" scoped>
@import '../../assets/less/proofIdent.less';
</style>
<script>
import { Toast, MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      form: {
        phone: '',
        verifyCode: ''
      },
      disabled: false,
      verifyCodeBtnText: '获取验证码'
    }
  },
  methods: {
    sendsms () {
      var regex = /^(?=\d{11}$)^1(?:3\d|4[57]|5[^4\D]|66|7[^249\D]|8\d|9[89])\d{8}$/g;
      if (!regex.test(this.form.phone)) {
        Toast({
          message: '请输入正确的手机号码',
          position: 'bottom',
          duration: 2000
        });
        return false;
      }
      this.$router.push('/resetPassword')
    }
  }
}
</script>
