<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:history.go(-1);"></a>
      我的资产
    </div>
    <div class="property-tab" >
      <mt-navbar  v-model="selected">
        <mt-tab-item :id="index" v-for="(tabName,index) in tabTxt" :key="index">{{tabName}}</mt-tab-item>
      </mt-navbar>
      <div>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="0">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item :id="1">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item :id="2">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '0',
      tabTxt: ['K矿石', 'SG矿石', 'SG矿石', 'SG金币', '原力值']
    }
  }
}
</script>

<style scoped>
  @import '../../assets/less/myProperty.less';
</style>
