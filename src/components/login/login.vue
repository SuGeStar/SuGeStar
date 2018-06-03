<template>
  <div class="login-container">
    <div class="login-title">SG星球登录</div>
    <div class="login-form">
      <div><span>账号</span><input type="text" placeholder="请输入账号" v-model="username"></div>
      <div style="margin-top: .22rem"><span>密码</span><input type="password" placeholder="请输入密码" v-model="password"></div>
    </div>
    <button @click="login">登录</button>
    <p><router-link to=""><span class="fl">忘记密码？</span></router-link><router-link to=""><span class="fr">没有账号？立即注册</span></router-link></p>
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
        this.$http.post(url+'login', form)
        .then(response => {
          console.log(response)
          if (response.data.code == 200) {
            localStorage.setItem('user_id', response.data.data.userinfo.id)
            localStorage.setItem('user_level', response.data.data.userinfo.level)
            localStorage.setItem('token', response.data.data.token)
            this.$router.push('/index')
          }
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
  },
  mounted () {}
}
</script>
