<template>
  <div class="wrapper">
    <mt-header fixed title="去支付">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <ul class="apply">
      <li class="apply-way">
        <router-link to="">
          <i class="icon icon-wx"></i>
          <p>微信支付</p>
        </router-link>
      </li>
      <li class="apply-way" @click="apllyPop">
        <router-link to="">
          <i class="icon icon-sgj"></i>
          <p>SG金币支付</p>
        </router-link>
      </li>
      <li class="apply-way">
        <router-link to="">
          <i class="icon icon-sgk"></i>
          <p>微信+SG矿币支付</p>
        </router-link>
      </li>
    </ul>
    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="mint-popup-1">
      <applyPop></applyPop>
    </mt-popup>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/store.less';
</style>
<script>
import applyPop from '../comp/applyPop.vue'
export default {
  data () {
    return {
      popupVisible1: false
    }
  },
  components: {
    applyPop
  },
  methods: {
    apllyPop () {
      this.popupVisible1 = true
    }
  }
}
</script>
