<template>
  <div class="wrapper">
    <div class="applyPop">
      <div class="goods-psd">
        <p class="apply-title">
          请输入支付密码
        </p>
        <p>确认支付 <span>{{password}}</span> </p>
        <div class="psd-container">
          <input class="psd-input" type="password" readonly v-for="(value,index) in passwordGroup" :key="index" :value="passwordGroup.value">
        </div>
      </div>
      <div class="input-pan">
        <div class="pan-num" v-for="(value,num) in number" :key="num" @click="inputPsd(value)">{{value}}</div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/applypop.less';
</style>

<script>
export default {
  data () {
    return {
      password: '111',
      passwordGroup: [0,1,2,3,4,5],
      number: ['1','2','3','4','5','6','7','8','9','取消','0','删除'],
      pasgroup: []
    }
  },
  methods: {
    inputPsd (value) {
      switch (value) {
        case '取消':
        //   *******
          break;
        case '删除':
          break;
        default:
          
      }
    }
  }
}
</script>
