<template>
  <div class="wrapper">
    <mt-header fixed title="个人资料">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="information">
      <ul>
        <li>
          <p>
            会员身份
          </p>
          <span>{{identity}}</span>
        </li>
        <li>
          <p>
            真实姓名
          </p>
          <span>{{name}}</span>
        </li>
        <li>
          <p>
            推荐编号
          </p>
          <span>{{recomid}}</span>
        </li>
        <li>
          <p>
            手机号
          </p>
          <span>{{phone}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.information{
  margin-top: 1rem;
  ul{
    li{
      display: flex;
      justify-content: space-between;
      padding: 0.2rem;
      background-color: #fff;
      border-bottom: 1px solid #e9e9e9;
      font-size: 0.27rem;
      &:last-child{
        border-bottom: none;
      }
      p{
        color: #333333;
      }
      span{
        color: #999999;
      }
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      userInfo: JSON.parse(localStorage.getItem('userinfo')),
      identity: '',
      name: '',
      recomid: '',
      phone: ''
    }
  },
  created () {
    console.log(localStorage.getItem('userinfo'))
    if (this.userInfo.level === 2) {
      this.identity = '创世居民'
    } else {
      this.identity = '居民'
    }
    this.name = this.userInfo.realname
    this.recomid = this.userInfo.invite_code
    this.phone = this.userInfo.phone
  }
}
</script>
