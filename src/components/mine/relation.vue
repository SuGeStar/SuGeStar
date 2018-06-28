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
              <div class="right-box">
                <div :class="['box',isNull ? 'short' : '' ]" v-for="(child,i) in relation.left.child" :key="i">
                  <!-- <p >{{child}}</p> -->
                  <p v-show="isDisnull">{{child.realname}}</p>
                  <span>推:{{relation.left.realname}}</span>
                </div>
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
          <div class="left-list" v-for="(relation,index) in list" :key="index">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>{{relation.right.realname}}</p>
                <span>推:{{relation.realname}}</span>
              </div>
              <div class="right-box">
                <div :class="['box',isNull ? 'short' : '' ]" v-for="(child,i) in relation.right.child" :key="i">
                  <p>{{child}}</p>
                  <span>推:{{relation.right.realname}}</span>
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="left-list">
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
                    缺人
                </div>
              </div>
            </div>
          </div> -->
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
      list: [],
      childList: [],
      isNull: false,
      isShow: false,
      isDisnull: true
    }
  },
  created () {
    this.$http.get(url + 'branches?token='+token)
    .then(response => {
      // console.log(response)
      this.list = response.data.data
      console.log(this.list[0])
      for (var i = 0; i < this.list.length; i++) {
        // this.childList = this.list[i].left.child
        console.log(this.list[i].right.child)
        if (this.list[i].left.child.left == null || this.list[i].left.child.right == null) {
          console.log('111')
          this.isNull = true
          this.list[i].left.child.left = '缺人'
          this.list[i].left.child.right = '缺人'
          this.list[i].right.child.left = '缺人'
          this.list[i].right.child.right = '缺人'
          return false
        } else {
          this.isNull = false
        }
      }
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>
