<template>
  <div class="wrapper">
    <mt-header fixed title="修改昵称">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="change">
      <input type="text" placeholder="请输入您要修改的昵称" v-model="value">
      <div class="btnBox">
        <mt-button class="btn" @click="change">确定</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  methods: {
    change () {
      console.log(this.value)
    }
  }
}
</script>
<style lang="less" scoped>
.change{
  margin-top: 1rem;
  input{
    border: none;
    width: 100%;
    background-color: #fff;
    height: 0.85rem;
    padding-left: 0.2rem;
    font-size: 0.26rem;
  }
  .btnBox{
    width: 80%;
    margin: .2rem auto;
    .btn{
      margin-top: 0.68rem;
      width: 100%;
      box-shadow: 0 0 0;
      background: url('../../assets/image/invit-btn.png') no-repeat center;
      color: #fff;
    }
  }
}
</style>
