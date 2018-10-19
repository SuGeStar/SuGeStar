<template>
  <div class="reg-container">
    <h3 class="reg-title">YC星球区块创建</h3>
    <div class="reg-form">
      <div v-show="showCode"><span>发现者</span><input type="text" placeholder="" :readonly="true" v-model="invite_code"></div>
      <div v-show="showCode"><span>探索者</span><input type="text" placeholder="" :readonly="true" v-model="contact_code"></div>
      <div>
        <!--<span>手机号码</span>-->
        <input type="number" placeholder="手机号码" v-model="phoneNum"></div>
       <!--<div><span>图片验证</span>
        <input type="text" placeholder="图片验证码" v-model="pic" class="verificationCode">
        <img :src="imgSrc" alt="" @click="changePic()">
      </div>-->
      <div>
        <!--<span>验&nbsp;证&nbsp;&nbsp;码</span>-->
        <input type="number" placeholder="手机验证码" v-model="verificationCode" class="verificationCode">
        <i :class="{'haveSend':isSend}" @click="sendCode">{{verificationCodeTxt}}</i>
      </div>
      <div>
        <!--<span>登录密码</span>-->
        <input type="password" placeholder="登录密码" v-model="loginPsd"></div>
      <div>
        <!--<span>支付密码</span>-->
        <input type="password" placeholder="6位数字支付密码" v-model="applyPsd"></div>
      <!-- <div  @click="cityPop">
        <span>所属地区</span>
        <input type="text" placeholder="请选择省 市 县" v-model="locations" :readonly="true">
      </div>
      <div><span>优品账号</span><input type="text" placeholder="请输入您的优品账号" v-model="YPAccount"></div>
      <div><span>身份证号</span><input type="text" placeholder="请输入身份证号码" v-model="IDNumber"></div>-->
      <div>
        <!--<span>真实姓名</span>-->
        <input type="text" placeholder="真实姓名" v-model="realName"></div>
      <!-- <div><span>昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称</span><input type="text" placeholder="给自己起个名字吧~" v-model="nickName"></div>  -->
    </div>
    <button  @click="register">开启我的星球建设</button>
    <cityPop v-model="addressArr" @hidden="hiddenShow" v-show="cityPop_up"></cityPop>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import { url } from '../../assets/js/mobile.js'
import cityPop from '../comp/city.vue'
export default {
  data () {
    return {
      invite_code: '',
      contact_code: '',
      phoneNum: '',
      verificationCode: '',
      verificationCodeTxt: '发送验证码',
      loginPsd: '',
      applyPsd: '',
      // locations: [],
      // YPAccount: '',
      realName: '',
      // IDNumber: '',
      // nickName: '',
      addressArr: [],
      isSend: false,
      // 手机号
      z_tel: /^1(3|4|5|6|7|8|9)\d{9}$/,
      // 身份证
      // z_idNumber: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,
      cityPop_up: false,
      // imgSrc: 'http://www.sgyxmall.com/index.php?s=/Api/User/code',
      pic: '',
      showCode: false
    }
  },
  components: {
    cityPop
  },
  created () {
    // console.log(window.location.href)
    let url = window.location.href.substring()
    let arrObj = url.split('?')
    if (url.indexOf('?') == -1) {
      this.invite_code = ''
      this.contact_code = ''
    } else {
      this.showCode = true
      let str = window.location.href.substring(location.href.indexOf('=')+1)
      let recommend_code = str.split('&')[0]
      this.invite_code = recommend_code
      let contact_code = str.split('=')[1]
      this.contact_code = contact_code
      localStorage.setItem('recommend_code',recommend_code)
      localStorage.setItem('contact_code',contact_code)
    }
  },
  methods: {
    // 倒计时
    ctimer (time) {
      var t = time
      var that = this
      if (t > 0) {
        this.isSend = true
        this.verificationCodeTxt = t + 's后重发'
        t--
        setTimeout(function () {
          that.ctimer(t)
        }, 1000)
      } else {
        this.isSend = false
        this.verificationCodeTxt = '获取验证码'
      }
    },
    // 申请发送验证码
    sendCode () {
      if (!this.phoneNum) {
        Toast('请填写电话号码!')
        return false
      }
      if (this.z_tel.test(this.phoneNum) === false) {
        Toast('您的电话号码格式有误!')
        return false
      }
      if (this.isSend) {
        Toast('请稍后点击！')
        return false
      } else {
        this.$http.get(url + 'sendSms?phone=' + this.phoneNum )
          .then(response => {
            console.log(response)
            if (response.data.code == 200) {
              Toast({
                message: '发送成功',
                position: 'bottom',
                duration: 2000
              });
              this.ctimer(60)
            } else {
              Toast({
                message: response.data.message[0],
                position: 'bottom',
                duration: 2000
              });
            }
          })
          .catch(error => {
            Toast('网络延时，请稍后重试');
            console.log(error);
          })
      }
    },
    // 判断验证码是否正确
    /*code () {
      this.$http.get(url + 'checkSmsCode?phone=' + this.phoneNum +'&code='+this.verificationCode)
        .then(response => {
          console.log(response)
          if (response.data.code === 200) {
            Toast({
              message: response.data.msg,
              position: 'bottom',
              duration: 2000
            })
          } else {
            Toast({
              message: response.data.msg,
              position: 'bottom',
              duration: 2000
            });
          }
        })
        .catch(error => {
          console.log(error)
        })
    },*/
    // 所属地区
    hiddenShow (e) {
      this.locations = e[0]
      this.addressArr = e[1]
      let that = this
      that.cityPop_up = false
    },
    // 注册
    register () {
      if (!this.realName) {
        Toast('请填写您的真实姓名!')
        return false
      }
      if (!this.phoneNum) {
        Toast('请填写电话号码!')
        return false
      } if (this.z_tel.test(this.phoneNum) === false) {
        Toast('您的电话号码格式有误!')
        return false
      }
      if (!this.verificationCode) {
        Toast('请填写验证码!')
        return false
      }
      if (!this.loginPsd) {
        Toast('请填写登录密码!')
        return false
      } else if (this.loginPsd.length < 6 || this.loginPsd.length > 16) {
        Toast('请输入6-16位密码')
        return false
      }
      if (!this.applyPsd) {
        Toast('请填写支付密码!')
        return false
      } else if (this.applyPsd.length != 6) {
        Toast('支付密码只能是6位数字')
        return false
      }
      let form = this.$qs.stringify({
        invite_code: this.invite_code,
        contact_code: this.contact_code,
        password: this.loginPsd,
        code: this.verificationCode,
        phone: this.phoneNum,
        realname: this.realName,
        payment_password: this.applyPsd
      })
      this.$http.post(url+'register', form)
        .then(response => {
          console.log(response)
          Toast({
            message: response.data.msg,
            position: 'bottom',
            duration: 2000
          })
          if (response.data.code == 200) {
            this.$router.push('/login')
          }
        })
        .catch(error => {
          console.log(error)
          Toast('网络延时，请稍后重试')
        })
    },
    cityPop () {
      this.cityPop_up = true
    }
    // 请求图片验证
    /*changePic () {
      var time = new Date().getTime()
      this.imgSrc = 'http://www.sgyxmall.com/index.php?s=/Api/User/code/' + time
    }*/
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
@import "../../assets/less/register.less";
</style>
