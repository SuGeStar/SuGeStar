<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:history.go(-1);"></a>
      我的资产
    </div>
    <div class="property-tab" >
      <mt-navbar  v-model="selected">
        <mt-tab-item :id="index" v-for="(tabName,index) in tabTxt" :key="index" class="asc">{{tabName}}</mt-tab-item>
      </mt-navbar>
      <div>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="0" class="property-container">
         <div class="pc-head-container">
           <p>11111</p>
           <p></p>
           <div></div>
         </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="1">
        </mt-tab-container-item>
        <mt-tab-container-item :id="2">
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 0,
      tabTxt: ['K矿石', 'SG矿石', 'SG矿石', 'SG金币', '原力值']
    }
  }
}
</script>

<style scoped>
  @import '../../assets/less/myProperty.less';
</style>
