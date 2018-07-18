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
            <mt-field label="验证码" placeholder="请输入您的验证码" @input="code" v-model="form.verifyCode" class="verifyCode"></mt-field>
            <mt-button v-bind:disabled="disabled" class="verifyCode-btn" type="default" @click="sendsms">{{verificationCodeTxt}}</mt-button>
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
import api from '@/assets/js/api.js'
import { Toast, MessageBox } from 'mint-ui';
export default {
  data () {
    return {
      form: {
        phone: '',
        verifyCode: ''
      },
      disabled: false,
      verificationCodeTxt: '获取验证码',
      id: this.$route.params.id
    }
  },
  methods: {
    sendsms () {
      var regex = /^1(3|4|5|6|7|8|9)\d{9}$/
      if (!regex.test(this.form.phone)) {
        Toast({
          message: '请输入正确的手机号码',
          position: 'middle',
          duration: 2000
        });
        return false;
      } else {
        api.sendSms({
          'phone': this.form.phone
        })
        .then((res) => {
          console.log(res)
          if (res.code == 200) {
            Toast({
              message: res.msg
            })
            this.ctimer(60)
          }
        })
      }
      // this.$router.push({
      //   path: '/resetPassword/'+this.id
      // })
    },
    // 倒计时
    ctimer (time) {
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
    code() {
      if (this.form.phone !== '') {
        if (this.form.verifyCode.length == 4) {
          // 判断验证码是否正确
          api.checkSmsCode({
            'phone': this.form.phone,
            'code': this.form.verifyCode
          })
          .then ((res) => {
            console.log(res)
            if (res.code == 200) {
              Toast({
                message: res.msg
              })
              this.$router.push('/resetPassword/'+this.id+'/'+this.form.phone)
            }
          })
        }
      } else {
        
      }
    },
    checkCode () {
      
    }
  },
  mounted () {
    
  }
}
</script>
