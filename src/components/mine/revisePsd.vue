<template>
  <div class="wrapper">
    <mt-header fixed :title="title">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="proofIdent">
      <div class="regform">
        <ul class="reset-list">
          <li>
            <mt-field label="原密码" placeholder="请输入原密码" v-model="form.oldpsd" @blur.native.capture="verifyCode" type="password" class="phone"></mt-field>
          </li>
          <li>
            <mt-field label="新密码" placeholder="请输入新密码" v-model="form.newpsd" type="password" class="phone"></mt-field>
          </li>
          <li>
            <mt-field label="确认密码" placeholder="请再次输入新密码" v-model="form.againpsd" type="password" class="phone"></mt-field>
          </li>
        </ul>
        <mt-button class="resetBtn" @click="resetBtn" type="default">确认</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/proofIdent.less';
.proofIdent{
  margin-top: 0.1rem;
}
.mint-cell{
  text-align: left;
}
</style>
<script>
import { Toast } from 'mint-ui'
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      title: '',
      form: {
        oldpsd: '',
        newpsd: '',
        againpsd: ''
      },
      disabled: false,
      verifyCodeBtnText: '获取验证码',
      id: this.$route.params.id
    }
  },
  created () {
    if (this.id == 1) {
      this.title = '修改登录密码'
    } else {
      this.title = '修改支付密码'
    }
  },
  methods: {
    verifyCode () {
      if (this.id == 1) {
        // 判断原登录密码是否正确
        let form = this.$qs.stringify({
          token: token,
          password: this.form.oldpsd
        })
        api.verifyPasswd(form)
        .then((res) => {
          console.log(res)
        })
      } else {
        // 原支付密码是否正确
        let form = this.$qs.stringify({
          token: token,
          password: this.form.oldpsd
        })
        api.verifyPaymentPasswd(form)
        .then((res) => {
          console.log(res)
        })
      }
    },
    resetBtn () {
      if (this.form.newpsd !== this.form.againpsd) {
        Toast('您两次输入的密码不一致')
        this.form.newpsd = ''
        this.form.againpsd = ''
        return false
      }
      // 只能为数字
      var regex = /[^\d]/g;
      if (this.id == 2) {
        // 判断是否为重置支付密码
        if (this.form.newpsd.length !== 6 || regex.test(this.form.newpsd)){
          Toast({
            message: '请输入6位数字',
            position: 'middle',
            duration: 2000
          });
          this.form.newpsd = ''
        } else if (!regex.test(this.form.newpsd)) {
          // 调取重置支付密码接口
          let form = this.$qs.stringify({
            token: token,
            old_password: this.form.oldpsd,
            password: this.form.newpsd,
            password_confirm: this.form.againpsd
          })
          api.resetPayment(form)
          .then((res) => {
            console.log(res)
            Toast({
              message: res.msg
            })
            this.$router.replace('/set')
          })
        }
      } else {
        // 调取重置登录密码接口
        let form = this.$qs.stringify({
          token: token,
          old_password: this.form.oldpsd,
          password: this.form.newpsd,
          password_confirm: this.form.againpsd
        })
        api.resetPassword(form)
        .then((res) => {
          console.log(res)
          Toast({
            message: res.msg
          })
          localStorage.removeItem('token')
          localStorage.removeItem('userinfo')
          this.$router.replace('/login')
        })
      }
      
    }
  }
}
</script>

