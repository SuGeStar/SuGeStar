<template>
  <div class="wrapper">
    <mt-header fixed title="我的团队">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <div class="team">
      <div class="team-head">
        <p>提示：第{{floor}}层另招募{{lesspeo}}人，即可拿到{{moregold}}金币</p>
        <div class="team-exist">
          <p>直推人数：<span>{{invitpeo}}</span></p>
          <p>旗下人数：<span>{{allpeo}}</span></p>
        </div>
      </div>
      <div class="team-content" >
        <router-link :to="{path: '/relation'}" :class="[isNull(index) ? 'nullFloor' : 'floor']" v-for="(progress,index) in progressBox" :key="index" > 
          <div class="team-floor">
            第{{progress.floor}}维度
          </div>
          <vm-progress class="progress"  :percentage="progress.percentage" :text-inside="true" :stroke-width="18" :strokeColor="progress.color"></vm-progress>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import "../../assets/less/team.less";
</style>

<script>
import api from '@/assets/js/api.js'
export default {
  data() {
    return {
      floor: "2",
      lesspeo: "3",
      moregold: "350",
      invitpeo: "3",
      allpeo: "10",
      progressBox: [
        {
          id: 0,
          floor: '1',
          percentage: 100,
          color: '#a288d2'
        },
        {
          id: 1,
          floor: '2',
          percentage: 75,
          color: '#03a8f7'
        },
        {
          id: 2,
          floor: '3',
          percentage: 50,
          color: '#f0b026'
        },
        {
          id: 3,
          floor: '4',
          percentage: 25,
          color: '#1ad3a7'
        },
        {
          id: 4,
          floor: '5',
          percentage: 0,
          color: '#1ad3a7'
        }
      ]
    };
  },
  mounted() {
    api.occupancyRate()
      .then((res)=>{
        console.log(res)
        this.progressBox = res.data
        this.progressBox[1].color = '#a288d2'
        this.progressBox[2].color = '#f0b026'
        this.progressBox[3].color = '#1ad3a7'
        this.progressBox[4].color = '#03a8f7'
        for (let i = 0; i < this.progressBox.length; i++) {
          if (this.progressBox[i].percentage == 0) {
            
          }
        }
      })
  },
  methods: {
   isNull (index) {

   }
  }
};
</script>
