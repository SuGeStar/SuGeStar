<template>
  <div class="wrapper">
    <mt-header fixed title="升级">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="upgrade">
      <div class="cell-box">
        <mt-field label="发现者编号" v-model="recomID"></mt-field>
        <mt-field label="探索者编号" v-model="contact_code"></mt-field>
        <!-- <mt-field label="推荐人姓名" readonly  v-model="recomName"></mt-field> -->
        <mt-field label="真实姓名" placeholder="请输入您的真实姓名" v-model="username"></mt-field>
        <!--<mt-radio title="选择区间" v-model="value" :options="['左', '右',]"></mt-radio>-->
      </div>
      <div class="btn-box">
        <mt-button class="button" @click="upgrade">确认创建</mt-button>
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
    } }
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
import api from '@/assets/js/api.js'
let token = localStorage.getItem('token')
import { Toast } from 'mint-ui'
export default {
  data () {
    return {
      recomID: '',
      contact_code: '',
      recomName: '张三',
      username: '',
      apply_level: 2,
      value: '',
      valCode: 0,
      baseUserInfo: JSON.parse(localStorage.getItem('userinfo'))
    }
  },
  created () {
    this.username = this.baseUserInfo.realname
    api.getRecordCode()
      .then ((res) => {
        console.log(res)
        this.recomID = res.data.recommend_code
        this.contact_code = res.data.contact_code
      })
  },
  methods: {
    upgrade () {
      /*if (this.value == '左') {
        this.valCode = 1
      } else if (this.value == '右') {
        this.valCode = 2
      } else if (this.value == ''){
        Toast({
          message: '请选择区间',
          position: 'bottom',
          duration: 2000
        });
        return false
      }*/
      let form = this.$qs.stringify({
        apply_level: this.apply_level,
        token: token,
        recommend_code: this.recomID,
        contact_code: this.contact_code,
        // place: this.valCode
      })
      api.apply(form)
        .then(response => {
          if (response.code === 200) {
            Toast({
              message: response.msg,
              position: 'bottom',
              duration: 2000
            })
            localStorage.setItem('level', this.apply_level)
            this.$router.push('/index')
          } else {
            Toast({
              message: response.msg,
              position: 'bottom',
              duration: 2000
            })
          }
        })
        .catch(error => {
          console.log(error)
          Toast(error)
        })
    }
  }
}
</script>
