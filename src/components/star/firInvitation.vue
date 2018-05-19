<template>
  <div class="wrapper">
    <mt-header fixed title="一级邀请">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
       <div class="invit-list">
         <div class="invit-mismatch" v-for="item in mismatch" :key="item.id">
           <div class="invit-info">
            <p class="invit-name">{{item.name}}</p>
            <p class="invit-phone">{{item.phone}}</p>
           </div>
           <div class="invit-msg">
            <p :class="['invit-ident',isBronze?'bronze':''||isSilver?'silver':''||isGold?'gold':''||isBrilliant?'brilliant':'']">{{item.ident}}</p>
            <p class="invit-date">{{item.date}}</p>
           </div>
         </div>
       </div>
       <div class="invit-list" v-for="(item,index) in items" :key="index">
         <div class="invit-match">
           <div class="match-header">
             <div>
               邀请获得奖励：<span>{{item.ylz}}</span>原力值
             </div>
           </div>
           <div class="match-pop">
             <div class="invit-info">
              <p class="invit-name">{{item.name}}</p>
              <p class="invit-phone">{{item.phone}}</p>
            </div>
            <div class="invit-msg">
              <p :class="['invit-ident',isBronze?'bronze':''||isSilver?'silver':''||isGold?'gold':''||isBrilliant?'brilliant':'']">{{item.ident}}</p>
              <p class="invit-date">{{item.date}}</p>
            </div>
           </div>
           <div class="match-pop">
             <div class="invit-info">
              <p class="invit-name">{{item.name}}</p>
              <p class="invit-phone">{{item.phone}}</p>
            </div>
            <div class="invit-msg">
              <p :class="['invit-ident',isBronze?'bronze':''||isSilver?'silver':''||isGold?'gold':''||isBrilliant?'brilliant':'']">{{item.ident}}</p>
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
      isBronze: false,
      isSilver: false,
      isGold: false,
      isBrilliant: false,
      mismatch: [
        {
          name: '李四',
          phone: '15515515500',
          ident: 'SG星球居民',
          date: '2018-05-22'
        },
        {
          name: '李四',
          phone: '15515515500',
          ident: 'SG星球居民',
          date: '2018-05-22'
        },
        {
          name: '李四',
          phone: '15515515500',
          ident: 'SG星球居民',
          date: '2018-05-22'
        }
      ],
      items: [
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: 'SG青铜时代',
          date: '2018-05-22'
        },
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: 'SG白银时代',
          date: '2018-05-22'
        },
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: 'SG黄金时代',
          date: '2018-05-22'
        },
        {
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: 'SG钻石时代',
          date: '2018-05-22'
        }
      ]
    }
  },
  created () {
  }
}
</script>
