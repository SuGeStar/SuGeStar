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
          <div class="left-list" v-for="(relation,index) in list" :key="index">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>{{relation.left.realname}}</p>
                <span>推:{{relation.realname}}</span>
              </div>
              <div class="right-box" v-if="Array.isArray(relation.left.child)">
                <div class="box" v-for="(childList,i) in relation.left.child" :key="i">
                  <p>{{childList}}</p>
                  <span>推:{{relation.childRela}}</span>
                </div>
                <!-- <div class="box">
                  <p>{{relation.childRightname}}</p>
                  <span>推:{{relation.childRela}}</span>
                </div> -->
              </div>
            </div>
          </div>
          <!-- <div class="left-list">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>左一</p>
                <span>推:王三</span>
              </div>
              <div class="right-box">
                <div class="box">
                  <p>左一一</p>
                  <span>推:王三</span>
                </div>
                <div class="box">
                  <p>左一二</p>
                  <span>推:王三</span>
                </div>
              </div>
            </div>
          </div>
          <div class="left-list">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>左一</p>
                <span>推:王三</span>
              </div>
              <div class="right-box">
                <div class="box">
                  <p>左一一</p>
                  <span>推:王三</span>
                </div>
                <div class="box short">
                  缺人
                </div>
              </div>
            </div>
          </div> -->
        </div>
        <div class="relation-list">
          <p class="title">右区</p>
          <div class="left-list">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>右一</p>
                <span>推:王三</span>
              </div>
              <div class="right-box">
                <div class="box">
                  <p>右一一</p>
                  <span>推:王三</span>
                </div>
                <div class="box">
                  <p>右一二</p>
                  <span>推:王三</span>
                </div>
              </div>
            </div>
          </div>
          <div class="left-list">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>右一</p>
                <span>推:王三</span>
              </div>
              <div class="right-box">
                <div class="box">
                  <p>右一一</p>
                  <span>推:王三</span>
                </div>
                <div class="box">
                  <p>右一二</p>
                  <span>推:王三</span>
                </div>
              </div>
            </div>
          </div>
          <div class="left-list">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>右一</p>
                <span>推:王三</span>
              </div>
              <div class="right-box">
                <div class="box">
                  <p>右一一</p>
                  <span>推:王三</span>
                </div>
                <div class="box short">
                  <!-- <p>左一二</p>
                  <span>推:王三</span> -->
                    缺人
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
      list: {},
      isNull: ''
    }
  },
  created () {

    this.$http.get(url + 'branches?token='+token)
    .then(response => {
      console.log(response)
      // let list = JSON.parse(JSON.stringify(response.data.data))
      // console.log(list[1].realname)
      // this.list = JSON.parse(JSON.stringify(response.data.data))
      this.list = response.data.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
