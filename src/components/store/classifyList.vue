<template>
  <div class="wrapper">
    <mt-header fixed :title="title">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
      <router-link to="/car" class="icon icon-car" slot="right"></router-link>
    </mt-header>
    <div class="classifyList">
      
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    this.title = this.$route.params.name
  }
}
</script>
