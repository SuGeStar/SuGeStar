<template>
  <div class="wrapper">
    <div class="child">
      子组件
      <p>{{message}}</p>
      <button @click="sendMsg">向父组件传值</button>
    </div>
  </div>
</template>
<script>
export default {
  props:['message'],
  methods: {
    sendMsg(){
      console.log('11111')
      this.$emit('listenTo','来自子组件')
    }
  }
}
</script>

