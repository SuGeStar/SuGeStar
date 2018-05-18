<template>
  <div class="login-container">
    <div class="login-title">SG星球登录</div>
    <div class="login-form">
      <div><span>账号</span><input type="text" placeholder="请输入账号" v-model="username"></div>
      <div style="margin-top: .22rem"><span>密码</span><input type="password" placeholder="请输入密码" v-model="password"></div>
    </div>
    <button v-on:click="login">登录</button>
    <p><router-link to=""><span class="fl">忘记密码？</span></router-link><router-link to=""><span class="fr">没有账号？立即注册</span></router-link></p>
  </div>
</template>
<style lang="less" scoped>
  @import "../../assets/less/login";
</style>
<script>
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      if (!this.username) {
        Toast('登录账号不能为空!')
      }
    }
  },
  mounted () {}
}
</script>
