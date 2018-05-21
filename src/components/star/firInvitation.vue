<template>
  <div class="wrapper">
    <mt-header fixed title="一级邀请">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
       <!-- <div class="invit-list">
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
       </div> -->
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
              <p :class='{resident: a, bronze: b, silver: c, gold: d,brilliant: e}'>{{item.ident}}</p>
              <p class="invit-date">{{item.date}}</p>
            </div>
           </div>
           <!-- <div class="match-pop">
             <div class="invit-info">
              <p class="invit-name">{{item.name}}</p>
              <p class="invit-phone">{{item.phone}}</p>
            </div>
            <div class="invit-msg">
              <p :class="['invit-ident',isBronze?'bronze':''||isSilver?'silver':''||isGold?'gold':''||isBrilliant?'brilliant':'']">{{item.ident}}</p>
              <p class="invit-date">{{item.date}}</p>
            </div>
           </div> -->
         </div>
       </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import '../../assets/less/firInvit.less';
.resident{
  color: #999;
}
.bronze{
  color:  rgba(78, 204, 155, 0.8);
}
.silver{
  color: rgba(57, 129, 255, 0.8);
}
.gold{
  color: rgba(236, 191, 82, 0.8);
}
.brilliant{
  color: rgba(236, 100, 82, 0.8);
}
</style>
<script>
export default {
  data () {
    return {
      a: true,
      b: false,
      c: false,
      d: false,
      e: false,
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
          ident: 'SG白银时代',
          date: '2018-05-22'
        },
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
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].ident)
      if (this.items[i].ident == 'SG青铜时代') {
        this.b = true;
        break;
      }else if (this.items[i].ident == 'SG白银时代') {
        this.c = true;
        continue;
      }
    }
  }
}
</script>
