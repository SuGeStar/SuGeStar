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
          <li>
            <mt-field label="原密码" placeholder="请输入原密码" v-model="form.oldpsd" type="password" class="phone"></mt-field>
          </li>
          <li>
            <mt-field label="新密码" placeholder="请输入新密码" v-model="form.newpsd" type="password" class="phone"></mt-field>
          </li>
          <li>
            <mt-field label="确认密码" placeholder="请再次输入新密码" v-model="form.againpsd" type="password" class="phone"></mt-field>
          </li>
        </ul>
        <mt-button class="resetBtn" type="default">确认</mt-button>
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
export default {
  data () {
    return {
      form: {
        oldpsd: '',
        newpsd: '',
        againpsd: ''
      },
      disabled: false,
      verifyCodeBtnText: '获取验证码'
    }
  },
  methods: {
    sendsms () {

    }
  }
}
</script>

