<template>
  <div class="wrapper">
    <mt-header fixed title="升级大礼包">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="gift">
      <div class="notice">购买须知：购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知购买须知</div>
      <ul>
        <li>
          <router-link to="/giftOrder/1">
            <p>礼包一</p>
            <img src="../../assets/image/gift.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/giftOrder/2">
            <p>礼包二</p>
            <img src="../../assets/image/gift.png" alt="">
          </router-link>
        </li>
        <li>
          <router-link to="/giftOrder/3">
            <p>礼包三</p>
            <img src="../../assets/image/gift.png" alt="">
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.gift{
  margin-top: 1rem;
  .notice{
    background-color: #fff;
    padding: 0.2rem;
  }
  ul{
    margin-top: 0.2rem;
    li{
      background-color: #fff;
      padding: 0.2rem;
      border-bottom: 0.5px solid #ccc;
      p{
        border-left: 3px solid #3d83ff;
        padding-left: 0.2rem;
        margin-bottom: 0.2rem;
      }
      img{
        width: 100%;
      }
    }
  }
}
</style>
<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      
    }
  }
}
</script>
