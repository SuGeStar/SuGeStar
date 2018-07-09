<template>
  <div class="wrapper">
    <mt-header fixed title="我的推荐">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="firInvit">
       <div class="invit-list" v-for="index in items" :key="index.id">
         <div class="invit-match">
           <div class="match-pop">
             <div class="invit-info">
              <p class="invit-name">{{index.name}}</p>
              <p class="invit-phone">{{index.phone}}</p>
            </div>
            <div class="invit-msg">
              <p>{{index.date}}</p>
              <p :class="[!!isPlace?'place':'']">{{index.place}}</p>
            </div>
           </div>
         </div>
       </div>
       <div class="invit-place">
         <div class="invit-head">
            <p class="invit-time">{{dats.date}}</p>
            <p class="invit-people">总人数：{{dats.people}}
              <i class="icon icon-pull"></i>
            </p>
          </div>
         <div class="invit-list" v-for="index in items" :key="index.id">
          <div class="invit-match">
            <div class="match-pop">
              <div class="invit-info">
                <p class="invit-name">{{index.name}}</p>
                <p class="invit-phone">{{index.phone}}</p>
              </div>
              <div class="invit-msg">
                <p>{{index.date}}</p>
                <p :class="[!!isPlace?'place':'']">{{index.place}}</p>
              </div>
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
      isPlace: true,
      dats: {
        date: '2018-05',
        people: '20'
      },
      items: [
        {
          name: '张三(创世居民)',
          phone: '15515515500',
          date: '2018-05-22',
          place: 1
        },
        {
          name: '张三(创世居民)',
          phone: '15515515500',
          date: '2018-05-22',
          place: 1
        },
        {
          name: '张三(创世居民)',
          phone: '15515515500',
          date: '2018-05-22',
          place: 0
        },
        {
          name: '张三(创世居民)',
          phone: '15515515500',
          date: '2018-05-22',
          place: 0
        }
      ]
    }
  },
  created () {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].place == 1) {
        this.items[i].place = '已安置'
      } else {
        this.items[i].place = '未安置'
        this.isPlace = false
      }
    }
  }
}
</script>
