<template>
  <div class="wrapper">
    <mt-header fixed title="重置密码">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="proofIdent">
      <div class="proof-list">
        <ul>
          <li>1.验证身份</li>
          <li class="proof-bg">2.重置密码</li>
        </ul>
      </div>
      <div class="regform">
        <ul class="reset-list">
          <!-- <li>
            <mt-field label="原密码" placeholder="请输入原密码" v-model="form.oldpsd" type="password" class="phone"></mt-field>
          </li> -->
          <li>
            <mt-field label="手机号" :value="form.phone"  type="number" class="phone" readonly></mt-field>
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
.mint-cell{
  text-align: left;
}
</style>
<script>
import { Toast } from 'mint-ui'
import api from '@/assets/js/api.js'
export default {
  data () {
    return {
      form: {
        phone: '',
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
    this.form.phone = this.$route.params.phone
  },
  methods: {
    resetBtn () {
      if (this.form.newpsd !== this.form.againpsd) {
        Toast('您两次输入的密码不一致')
        this.form.newpsd = ''
        this.form.againpsd = ''
        return false
      }
      let data = this.$qs.stringify({
        phone: this.$route.params.phone,
        password: this.form.newpsd,
        password_confirm: this.form.againpsd
      })
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
          // 调取忘记支付密码接口
          api.forgetPaymentPassword(data)
          .then((res) => {
            console.log(res)
            Toast({
              message: res.msg
            })
            this.$router.replace('/set')
          })
        }
      } else {
        // 调取忘记登录密码接口
        // console.log('重置登录密码')
        // let form = this.$qs.stringify({
        //   phone: this.$route.params.phone,
        //   password: this.form.newpsd,
        //   password_confirm: this.form.againpsd
        // })
        api.forgetPassword(data)
        .then((res) => {
          console.log(res)
          if (res.code == 200) {
            Toast({
              message: res.msg
            })
            this.$router.replace('/login')
          }
        })
      }
    }
  }
}
</script>

