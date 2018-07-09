<template>
  <div class="wrapper">
    <div class="demo">
      <div @click="pop">父组件</div>
     <applyPop @hidden="hiddenShow" @password="passwordGro" :password="password"  v-show="applyPop_pop_up"></applyPop>
     <!-- <child :message="parentMsg" @listenTo="showMsg" v-show="applyPop_pop_up"></child> -->
    </div>
  </div>
</template>
<script>
import applyPop from '../comp/applyPop.vue'
import child from '../comp/child.vue'
export default {
  data () {
    return {
      parentMsg: 'a',
      password: [],
      applyPop_pop_up: false
    }
  },
  components: {
    applyPop,
    child
  },
  methods: {
    pop () {
      this.applyPop_pop_up = true
    },
    hiddenShow () {
      
    },
    passwordGro (e) {
      console.log(e)
      // console.log(this.password)
    },
    showMsg (e) {
      console.log(e)
    }
  },
}
</script>
