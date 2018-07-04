<template>
  <div class="wrapper">
    <div class="gift">
      <ul>
        <li>
          <router-link to="/giftOrder/1">
            礼包1
          </router-link>
        </li>
        <li>
          <router-link to="/giftOrder/2">
            礼包2
          </router-link>
        </li>
        <li>
          <router-link to="/giftOrder/3">
            礼包3
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.gift{
  ul{
    li{
      background-color: #fff;
      padding: 0.2rem;
      border-bottom: 0.5px solid #ccc;
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
