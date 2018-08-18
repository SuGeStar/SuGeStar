<template>
  <div class="wrapper">
    <mt-header fixed title="星球区块">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="relation">
      <div class="relation-box tabbar">
        <div class="relation-list">
          <p class="title">α区</p>
          <div class="left-list" v-for="(relation,index) in leftList" :key="index">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>{{relation.realname}}</p>
              </div>
              <div class="right-box" v-if="relation.left !== null && relation.right !== null">
                <div class="box">
                  <p>{{relation.left.realname}}</p>
                </div>
                <div class="box">
                  <p>{{relation.right.realname}}</p>
                </div>
              </div>
              <div class="right-box" v-if="relation.left == null || relation.right == null">
                <div class="box">
                  <p v-if="relation.left !== null">{{relation.left.realname}}</p>
                  <p class="short" v-else>发现者</p>
                </div>
                <div class="box">
                  <p v-if="relation.right !== null">{{relation.right.realname}}</p>
                  <p class="short" v-else @click="shortPeo(relation.id,relation.invite_code)">探索者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relation-list">
          <p class="title">β区</p>
          <div class="left-list" v-for="(relation,index) in rightList" :key="index">
            <div class="list-box tabbar">
              <div class="left-box">
                <p>{{relation.realname}}</p>
              </div>
              <div class="right-box" v-if="relation.left !== null && relation.right !== null">
                <div class="box">
                  <p>{{relation.left.realname}}</p>
                </div>
                <div class="box">
                  <p>{{relation.right.realname}}</p>
                </div>
              </div>
              <div class="right-box" v-if="relation.left == null || relation.right == null">
                <div class="box">
                  <p v-if="relation.left !== null">{{relation.left.realname}}</p>
                  <p class="short" v-else>发现者</p>
                </div>
                <div class="box">
                  <p v-if="relation.right !== null">{{relation.right.realname}}</p>
                  <p class="short" v-else @click="shortPeo(relation.id, relation.invite_code)">探索者</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <mt-popup v-model="popupVisible1" popup-transition="popup-fade" class="invit-pop">
      <div class="popBtn" @click="place">
        安置
      </div>
      <div class="popBtn" @click="share">
        分享
      </div>
    </mt-popup>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/relation.less';
</style>
<script>
import { url } from '../../assets/js/mobile.js'
import { Toast } from 'mint-ui'
let token = localStorage.getItem('token')
export default {
  data () {
    return {
      rightList: [],
      leftList: [],
      id: '',
      invite_code: '',
      popupVisible1: false
    }
  },
  created () {
    this.$http.get(url + 'branches?token='+token)
    .then(response => {
      console.log(response)
      if (response.data.data.left[0].id == null && response.data.data.right[0].id == null) {
        Toast({
           message: '您还没有邀请好友升级哟~',
           position: 'bottom',
           duration: 2000
        })
        this.$router.replace('/my')
      } else {
        this.leftList = response.data.data.left
        this.rightList = response.data.data.right
      }
    })
    .catch(error => {
      console.log(error)
      Toast('服务器出问题啦ミﾟДﾟ彡快去告诉程序猿')
    })
  },
  methods: {
    shortPeo (e, code) {
      console.log(e)
      console.log(code)
      this.popupVisible1 = true
      this.id = e
      this.invite_code = code
    },
    place () {
      this.$router.push({
        path: '/place',
        query: {invite_code: this.invite_code}
      })
    },
    share (id) {
      console.log(id)
      this.$router.push({
        name: 'relatShare',
        params: {id: this.id}
      })
    }
  }
}
</script>
