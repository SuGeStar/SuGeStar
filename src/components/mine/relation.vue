<template>
  <div class="wrapper">
    <mt-header fixed title="关系列表">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="relation">
      <div class="relation-box tabbar">
        <div class="relation-list">
          <p class="title">左区</p>
          <div class="left-list" v-for="(relation,index) in leftList" :key="index">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>{{relation.realname}}</p>
                <!-- <span>推:{{relation}}</span> -->
              </div>
              <div class="right-box" v-if="relation.left !== null && relation.right !== null">
                <div class="box">
                  <p>{{relation.left.realname}}</p>
                  <!-- <span>推:{{relation.left}}</span> -->
                </div>
                <div class="box">
                  <p>{{relation.right.realname}}</p>
                  <!-- <span>推:{{relation.left}}</span> -->
                </div>
              </div>
              <div class="right-box" v-if="relation.left == null || relation.right == null">
                <div class="box">
                  <p v-if="relation.left !== null">{{relation.left.realname}}</p>
                  <p class="short" v-else @click="shortPeo(relation.id)">缺人</p>
                  <!-- <span>推:{{relation.left}}</span> -->
                </div>
                <div class="box">
                  <p v-if="relation.right !== null">{{relation.rignt.realname}}</p>
                  <p class="short" v-else @click="shortPeo(relation.id)">缺人</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relation-list">
          <p class="title">右区</p>
          <div class="left-list" v-for="(relation,index) in rightList" :key="index">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>{{relation.realname}}</p>
                <!-- <span>推:{{relation}}</span> -->
              </div>
              <div class="right-box" v-if="relation.left !== null && relation.right !== null">
                <div class="box">
                  <p>{{relation.left.realname}}</p>
                  <!-- <span>推:{{relation.left}}</span> -->
                </div>
                <div class="box">
                  <p>{{relation.right.realname}}</p>
                  <!-- <span>推:{{relation.left}}</span> -->
                </div>
              </div>
              <div class="right-box" v-if="relation.left == null || relation.right == null">
                <div class="box">
                  <p v-if="relation.left !== null">{{relation.left.realname}}</p>
                  <p class="short" v-else @click="shortPeo(relation.id)">缺人</p>
                  <!-- <span>推:{{relation.left}}</span> -->
                </div>
                <div class="box">
                  <p v-if="relation.right !== null">{{relation.rignt.realname}}</p>
                  <p class="short" v-else @click="shortPeo(relation.id)">缺人</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/relation.less';
</style>
<script>
import { url } from '../../assets/js/mobile.js'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      rightList: [],
      leftList: []
    }
  },
  created () {
    this.$http.get(url + 'branches?token='+token)
    .then(response => {
      console.log(response)
      this.leftList = response.data.data.left
      this.rightList = response.data.data.right
    })
    .catch(error => {
      console.log(error)
      Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
    })
  },
  methods: {
    shortPeo (e) {
      console.log(e)
    }
  }
}
</script>
