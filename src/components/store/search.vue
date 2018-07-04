<template>
  <div class="wrapper">
    <div class="search">
      <header>
        <a class="icon icon-back" href="javascript:history.go(-1);"></a>
        <div class="search-input">
          <div class="inputBox">
            <label class="icon icon-search searchIcon" for="search"></label>
            <input type="text" id='search' placeholder='搜索商品' />
          </div>
        </div>
        <button class="search-button" @click="search">取消</button>
      </header>
      <div class="content">
        <div class="cont-box">
          <p>历史搜索</p>
          <div class="search-desc">
            <span>
              真艾宝
            </span>
            <span>
              羽绒服
            </span>
            <span>
              棉袄
            </span>
          </div>
        </div>
        <div class="cont-box hot-search">
          <p>热门搜索</p>
          <div class="search-desc">
            <span>
              真艾宝
            </span>
            <span>
              羽绒服
            </span>
            <span>
              棉袄
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/search.less';
</style>

<script>
export default {
  data () {
    return {
      value: ''
    };
  },
  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  },
  methods: {
    search () {
      console.log('11111')
    }
  }
}
</script>
