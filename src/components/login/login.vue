<template>
  <div class="login-container">
    <div class="login-title">YC星球登录</div>
    <div class="login-form">
      <div><i class="icon icon-account"></i><input type="text" placeholder="请输入账号" v-model="username"></div>
      <div style="margin-top: .22rem"><i class="icon icon-password"></i><input type="password" placeholder="请输入密码" v-model="password"></div>
    </div>
    <button @click="login()">登录</button>
    <p><router-link to="/proofIdent/1"><span class="fl">忘记密码？</span></router-link><router-link to="/register"><span class="fr">没有账号？去注册 >></span></router-link></p>
  </div>
</template>
<style lang="less" scoped>
  @import "../../assets/less/login";
</style>
<script>
import { url } from '../../assets/js/mobile.js'
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (!this.username) {
        Toast('登录账号不能为空!')
      } else {
        let form = this.$qs.stringify({
          phone: this.username,
          password: this.password
        })
        this.$http.post(url + 'login', form)
          .then(response => {
            console.log(response)
            if (response.data.code === 200) {
              localStorage.setItem('userinfo', JSON.stringify(response.data.data.userinfo))
              localStorage.setItem('level', response.data.data.userinfo.level)
              localStorage.setItem('token', response.data.data.token)
              window.location.href = '/#index'
              // this.$router.push('/index')
            } else {
              Toast({
                message: response.data.msg,
                position: 'bottom',
                duration: 3000
              })
            }
          })
          .catch(error => {
          console.log(error)
          Toast('网络延时，请稍后重试')
        })
      }
    }
  },
  mounted () {}
}
</script>
