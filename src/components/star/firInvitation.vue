<template>
  <div class="wrapper">
    <mt-header fixed title="我的邀请">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
      <div class="invit-head">
        <p class="invit-time">{{dats.date}}</p>
        <p class="invit-people">总人数：{{dats.people}}
          <i class="icon icon-pull"></i>
        </p>
      </div>
      <div class="invit-list" v-for="(item,index) in items" :key="index">
        <div class="invit-match">
          <div class="match-pop">
            <div class="invit-info">
            <p class="invit-name">{{item.name}}</p>
            <p class="invit-phone">{{item.phone}}</p>
          </div>
          <div class="invit-msg">
            <p>{{item.ident}}</p>
            <p class="invit-date">{{item.date}}</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/firInvit.less';
</style>
<script>
export default {
  data () {
    return {
      dats: {
        date: '2018-05',
        people: '20'
      },
      items: [
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: '居民',
          date: '2018-05-22'
        },
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: '居民',
          date: '2018-05-22'
        },
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: '居民',
          date: '2018-05-22'
        },
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: '居民',
          date: '2018-05-22'
        }
      ]
    }
  },
  created () {
    for (let i = 0; i < this.items.length; i++) {
      
    }
  },
  methods: {
  }
}
</script>
