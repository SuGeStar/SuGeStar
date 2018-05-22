<template>
  <section class="pay-mask" @click="close_mask" v-show="payshow">
  <p class="container">
    <p class="pay_title">请输入支付密码</p>
      <p class="flex f-d-r pay_content">
        <p class="ipt_pay">
          <input type="password" maxlength="1" disabled>
        </p>
        <p class="ipt_pay">
          <input type="password" maxlength="1" disabled>
        </p>
        <p class="ipt_pay">
          <input type="password" maxlength="1" disabled>
        </p>
        <p class="ipt_pay">
          <input type="password" maxlength="1" disabled>
        </p>
        <p class="ipt_pay">
          <input type="password" maxlength="1" disabled>
        </p>
        <p class="ipt_pay">
          <input type="password" maxlength="1" disabled>
        </p>
      </p>
    </p>
    <footer>
      <ul class="pay_btn">
        <li @click="btnpassword($event)">1</li>
        <li @click="btnpassword($event)">2</li>
        <li @click="btnpassword($event)">3</li>
        <li @click="btnpassword($event)">4</li>
        <li @click="btnpassword($event)">5</li>
        <li @click="btnpassword($event)">6</li>
        <li @click="btnpassword($event)">7</li>
        <li @click="btnpassword($event)">8</li>
        <li @click="btnpassword($event)">9</li>
        <li class="b9"></li>
        <li @click="btnpassword($event)">0</li>
        <li class="b9" @click="btndelete">删除</li>
      </ul>
    </footer>
  </section>
</template>
<script>
export default {
  props: {
    payshow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      index: -1
    };
  },
  created() {},
  mounted() {
    $(".ipt_pay input:first").focus();
  },
  methods: {
    btnpassword(e) {
      var obj = e.currentTarget;
      var payinput = $(".ipt_pay input");
      if (this.index < 5) {
        this.index++;
        $(payinput[this.index]).val($(obj).text());
      }
      if (this.index == 5) {
        var pay_pwd = "";
        var payinput = $(".ipt_pay input");
        for (var i = 0; i < payinput.length; i++) {
          pay_pwd += $(payinput[i]).val();
        }
        console.log(pay_pwd);
      }
    },
    btndelete() {
      var payinput = $(".ipt_pay input");
      if (this.index >= 0) {
        $(payinput[this.index]).val("");
        this.index--;
      }
    },
    close_mask() {
      this.payshow = false;
    }
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
}
section {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: rgba(0, 0, 0, 0.6);
}
.container {
  position: absolute;
  top: 4rem;
  background: #fff;
  border-radius: 5px;
  margin: 0 0.533333rem;
  padding-bottom: 0.266667rem;
}
.pay_title {
  position: relative;
  font-size: 0.48rem;
  text-align: center;
  color: #333;
  height: 1.333333rem;
  line-height: 1.333333rem;
  border-bottom: 1px solid #ddd;
}
.close {
  position: absolute;
  right: 0.2rem;
  top: 0.2rem;
  width: 0.72rem;
  height: 0.72rem;
}
.pay_content {
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  margin: 0.533333rem 0.533333rem 0.333333rem 0.533333rem;
}
.ipt_pay {
  width: 100%;
  height: 1.333333rem;
  border-left: 1px solid #ddd;
}
.ipt_pay input {
  border: 0;
  height: 100%;
  width: 100%;
  text-align: center;
  font-size: 0.88rem;
  background: #fff;
}
footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  font-weight: 600;
}
.pay_btn {
}
.pay_btn li {
  width: 33.3333%;
  float: left;
  height: 1.333333rem;
  line-height: 1.333333rem;
  text-align: center;
  background: #fff;
  font-size: 0.48rem;
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.pay_btn li:active {
  background: #c2c2c2;
}
.b9:active {
  background: #fff !important;
}
.b9 {
  background: #c2c2c2 !important;
}
</style>