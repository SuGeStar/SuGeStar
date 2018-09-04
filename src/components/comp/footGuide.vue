<template>
  <mt-tabbar fixed class="tabbar">
    <router-link to="/index" active-class="active">
      <mt-tab-item id="home">
        <i slot="icon" class="icon icon-star"></i>
        YC星球
      </mt-tab-item>
    </router-link>
    <router-link to="/store" active-class="active">
      <mt-tab-item id="classify">
        <i slot="icon" class="icon icon-shore"></i>
        星球商城
      </mt-tab-item>
    </router-link>
    <router-link to="/my" active-class="active">
      <mt-tab-item id="shop">
        <i slot="icon" class="icon icon-my"></i>
        我的基地
      </mt-tab-item>
    </router-link>
  </mt-tabbar>
</template>
<style lang="less" scoped>
.tabbar{
  justify-content: space-around;
}
.mint-tab-item{
padding:0!important;
}

</style>
