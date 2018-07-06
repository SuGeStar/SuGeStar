<template>
  <div class="wrapper">
    <div class="applyPop">
      <div class="goods-psd">
        <p style="margin: 0.2rem" class="apply-title">
          请输入支付密码
        </p>
        <!-- <p style="margin: 0.2rem">确认支付 <span>{{password}}</span> </p> -->
        <div class="psd-container">
          <input class="psd-input" type="password" readonly v-for="(value,index) in passwordGroup" :key="index" :value="value.value">
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
      popupVisible1: true,
      realInput: '',
      // password: '111',
      passwordGroup: [],
      number: ['1','2','3','4','5','6','7','8','9','取消','0','删除'],
      pasgroup: [],
      currentInputIndex:-1
    }
  },
  props: ['password'],
  created() {
    this.initPasswordGroup();
  },
  watch: {
    currentInputIndex (val) {
      if(val == 5){
        console.log(this.pasgroup)
        // sessionStorage.setItem('password',this.pasgroup)
        this.$emit('hidden')
        let password = this.pasgroup
        // this.$emit('passwordClick',password)
        // console.log(password)
      }else if(val <= -1){
        this.currentInputIndex = -1
      }
    }
  },
  methods: {
    inputPsd (value) {
      switch (value) {
        case '取消':
          this.$emit('hidden')
          this.currentInputIndex = -1
          this.pasgroup = []
          this.initPasswordGroup ()
          break;
        case '删除':
          this.pasgroup.pop()
          console.log(this.pasgroup)
          // this.currentInputIndex 下标值,删除添加时改变
          this.passwordGroup[this.currentInputIndex].value = null
          this.currentInputIndex--
          console.log(this.passwordGroup)
          break;
        default:
          this.pasgroup.push(value)
          this.currentInputIndex++
          this.passwordGroup[this.currentInputIndex].value = value
          // let password = this.pasgroup
          // this.$emit('passwordClick',this.pasgroup)
      }
    },
    initPasswordGroup () {
      this.passwordGroup=[];
      for(var i=0;i<6;i++){
        this.passwordGroup.push({
            value:null
        })
      }
    }
  }
}
</script>
