<template>
  <div class="wrapper">
    <mt-header fixed title="二级邀请">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
       <div class="invit-list" v-for="index in items" :key="index.id">
         <div class="invit-match">
           <div class="match-header">
             <div>
              推荐人：<span>{{index.invitName}}</span>
             </div>
             <div>
               邀请获得奖励：<span>{{index.ylz}}</span>原力值
             </div>
           </div>
           <div class="match-pop">
             <div class="invit-info">
              <p class="invit-name">{{index.name}}</p>
              <p class="invit-phone">{{index.phone}}</p>
            </div>
            <div class="invit-msg">
              <p :class="['invit-ident',isBronze?'bronze':''||isSilver?'silver':''||isGold?'gold':''||isBrilliant?'brilliant':'']">{{index.ident}}</p>
              <p class="invit-date">{{index.date}}</p>
            </div>
           </div>
           <div class="match-pop">
             <div class="invit-info">
              <p class="invit-name">{{index.name}}</p>
              <p class="invit-phone">{{index.phone}}</p>
            </div>
            <div class="invit-msg">
              <p :class="['invit-ident',isBronze?'bronze':''||isSilver?'silver':''||isGold?'gold':''||isBrilliant?'brilliant':'']">{{index.ident}}</p>
              <p class="invit-date">{{index.date}}</p>
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
      items: [
        {
          invitName: '李四',
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: 'SG青铜时代',
          date: '2018-05-22'
        },
        {
          invitName: '李四',
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: 'SG白银时代',
          date: '2018-05-22'
        },
        {
          invitName: '李四',
          ylz: '1000',
          name: '张三',
          phone: '15515515500',
          ident: 'SG黄金时代',
          date: '2018-05-22'
        },
        {
          invitName: '李四',
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
