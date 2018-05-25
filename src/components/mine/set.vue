<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:window.history.go(-1)"></a>设置
    </div>
    <div class="set-container">
      <div class="set-list">
        <router-link to="/addressManage"><p>收货地址管理</p></router-link>
      </div>
      <div class="set-list">
        <p>修改昵称</p>
      </div>
      <div class="set-list">
        <router-link to="/proofIdent/1">
          <p>修改登录密码</p>
        </router-link>
      </div>
      <div class="set-list">
        <router-link to="/proofIdent/2">
          <p>修改支付密码</p>
        </router-link>
      </div>
      <div class="set-list">
        <p>个人资料</p>
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
      console.log('退出了')
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/set.less";
</style>
