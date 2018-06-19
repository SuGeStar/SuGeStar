<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>设置
    </div>
    <div class="set-container">
      <div class="set-list">
        <router-link to="/addressManage/set"><p>收货地址管理</p></router-link>
      </div>
      <div class="set-list">
        <router-link to="/changename">
          <p>修改昵称</p>
        </router-link>
      </div>
      <div class="set-list">
        <router-link :to="{path:'/proofIdent/1'}">
          <p>修改登录密码</p>
        </router-link>
      </div>
      <div class="set-list">
        <router-link :to="{path:'/proofIdent/2'}">
          <p>修改支付密码</p>
        </router-link>
      </div>
      <div class="set-list">
        <router-link to="/information">
          <p>个人资料管理</p>
        </router-link>
      </div>
      <div class="set-list">
        <p>银行卡管理</p>
      </div>
    </div>
    <mt-button type="primary" plain size="normal" @click="quitLogin">退出登录</mt-button>
  </div>
</template>

<script>
export default {
  methods: {
    // 退出登录
    quitLogin: function () {
      localStorage.removeItem('token')
      localStorage.removeItem('user_id')
      localStorage.removeItem('user_level')
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/set.less";
</style>
