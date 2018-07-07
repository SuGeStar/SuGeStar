<template>
  <div class="wrapper">
    <mt-header fixed title="升级">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="upgrade">
      <div class="cell-box">
        <mt-field label="推荐人编号" readonly v-model="recomID"></mt-field>
        <mt-field label="节点人编号" readonly v-model="contact_code"></mt-field>
        <!-- <mt-field label="推荐人姓名" readonly  v-model="recomName"></mt-field> -->
        <mt-field label="真实姓名" placeholder="请输入您的真实姓名" v-model="username"></mt-field>
      </div>
      <div class="btn-box">
        <mt-button class="button" @click="upgrade">确认升级</mt-button>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.upgrade{
  margin-top: 1rem;
  .cell-box{
    .mint-cell{
      border-bottom: 1px solid #efefef;
      &:last-child{
        border-bottom: none;
      }
    }
  }
  .btn-box{
    width: 90%;
    margin: 1rem auto 0;
    .button{
      width: 100%;
      background: url('../../assets/image/invit-btn.png') no-repeat center;
      color: #fff;
    }
  }
}
</style>
<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      recomID: 'C4L63NB6',
      contact_code: '4J70MIUQ',
      recomName: '张三',
      username: '',
      apply_level: 2,
      baseUserInfo: JSON.parse(localStorage.getItem('userinfo'))
    }
  },
  created () {
    this.recomID = localStorage.getItem('recommend_code')
    this.contact_code = localStorage.getItem('contact_code')
    // this.recomName = this.baseUserInfo.realname
    this.username = this.baseUserInfo.realname
    // this.baseUserInfo.level = this.apply_level
    // console.log(localStorage.userinfo)
  },
  methods: {
    upgrade () {
      let form = this.$qs.stringify({
        apply_level: this.apply_level,
        token: token,
        recommend_code: this.recomID,
        contact_code: this.contact_code
      })
      this.$http.post(url+'apply', form)
      .then(response => {
        console.log(response)
        Toast({
          message: response.data.msg,
          position: 'bottom',
          duration: 2000
        })
        if (response.data.code == 200) {
          localStorage.setItem('level',this.apply_level)
          this.$router.push('/index')
        }
      })
      .catch(error => {
        console.log(error)
        Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
      })
    }
  }
}
</script>
