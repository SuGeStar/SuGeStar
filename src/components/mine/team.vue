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
        <router-link :to="{path: '/relation/' + index}" class="floor" v-for="(progress,index) in progressBox" :key="index">
          <div class="team-floor">
            第{{progress.floor}}层
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
          floor: '1',
          percentage: 100,
          color: '#a288d2'
        },
        {
          floor: '2',
          percentage: 75,
          color: '#03a8f7'
        },
        {
          floor: '3',
          percentage: 50,
          color: '#f0b026'
        },
        {
          floor: '4',
          percentage: 25,
          color: '#1ad3a7'
        },
        {
          floor: '5',
          percentage: 0,
          color: '#1ad3a7'
        }
      ]
    };
  },
  mounted() {
    // this.drawLine();
  },
  methods: {
    // drawLine() {
    //   let mychart = this.$echarts.init(document.getElementById("echart"));
    //   绘制图表
    //   mychart.setOption({
    //     title: {},
    //     legend: {
    //       data: []
    //     },
    //     calculable: true,
    //     series: [
    //       {
    //         name: "我的团队",
    //         type: "funnel",
    //         left: "10%",
    //         top: 10,
    //         x2: 80,
    //         bottom: 150,
    //         width: "80%",
    //         height: {totalHeight} - y - y2,
    //         min: 0,
    //         max: 100,
    //         minSize: "40%",
    //         maxSize: "100%",
    //         sort: "ascending",
    //         gap: 0,
    //         label: {
    //           normal: {
    //             show: true,
    //             position: "inside"
    //           },
    //           emphasis: {
    //             textStyle: {
    //               fontSize: 20
    //             }
    //           }
    //         },
    //         labelLine: {
    //           normal: {
    //             length: 0,
    //             lineStyle: {
    //               width: 1,
    //               type: "solid"
    //             }
    //           }
    //         },
    //         itemStyle: {
    //           normal: {
    //             borderColor: "#fff",
    //             borderWidth: 1
    //           }
    //         },
    //         data: [
    //           { value: 20, name: "第1层(满员)", id: 1},
    //           { value: 40, name: "第二层(满员)", id: 2},
    //           { value: 60, name: "第三层(缺3人)", id: 3},
    //           { value: 80, name: "第四层(缺4人)", id: 4},
    //           { value: 100, name: "第五层(缺5人)", id: 5}
    //         ]
    //       }
    //     ]
    //   });
    //   mychart.on('click', function (params) {
    //       console.log(params)
    //       window.location.href = '/relation'
    //   });
    // }
  }
};
</script>
