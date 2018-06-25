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
        <mt-field label="推荐人姓名" readonly  v-model="recomName"></mt-field>
        <mt-field label="真实姓名" placeholder="请输入您的真实姓名" v-model="username"></mt-field>
      </div>
      <div class="btn-box">
        <mt-button class="button">确认升级</mt-button>
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
export default {
  data () {
    return {
      recomID: 'AASAF',
      recomName: '张三',
      username: ''
    }
  }
}
</script>
