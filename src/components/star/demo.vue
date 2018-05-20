<template>
  <!-- <div>
    <div class="invit-list" v-for="(item,index) in mismatch" :key="index">
      <div class="invit-mismatch" >
        <div class="invit-info">
          <p class="invit-name">{{item.name}}</p>
          <p class="invit-phone">{{item.phone}}</p>
        </div>
        <div class="invit-msg">
          <p class="invit-ident">{{item.ident}}</p>
          <p :class="['invit-ident',!!isBronze?'bronze':'']">{{item.ident}}</p>
          <p class="invit-date">{{item.date}}</p>
        </div>
      </div>
    </div>
  </div> -->
  <div id="app" class="invit-msg">
    <p v-for='(data,key,index) in datas' :key="index" v-bind:class='{bronze:index==bronze}'>{{data.data}}</p>
  </div>
</template>
<style lang="less" scoped>
@import "../../assets/less/firInvit.less";
.invit-list {
  background-color: #fff;
  margin-top: 0.19rem;
  .invit-mismatch {
    padding: 0.26rem;
    border-bottom: 0.5px solid #ccc;
    &:last-child {
      border-bottom: 0;
    }
  }
  .invit-info,
  .invit-msg {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .invit-info {
    font-size: 0.26rem;
    margin-bottom: 0.3rem;
  }
  .invit-msg {
    font-size: 0.22rem;
    color: #999;
    .bronze {
      color: rgba(78, 204, 155, 0.8);
    }
    .silver {
      color: rgba(57, 129, 255, 0.8);
    }
    .gold {
      color: rgba(236, 191, 82, 0.8);
    }
    .brilliant {
      color: rgba(236, 100, 82, 0.8);
    }
  }
  .invit-match {
    font-size: 0.26rem;
    .match-header {
      display: flex;
      justify-content: space-between;
      color: #666;
      border-bottom: 0.5px solid #ccc;
      padding: 0.26rem;
    }
    .match-pop {
      padding: 0.26rem;
      border-bottom: 0.5px solid #ccc;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>

<script>
// export default {
//   data () {
//     return {
//       isBronze: false,
//       mismatch: [
//         {
//           name: '111',
//           phone: '128564455',
//           ident: '居民'
//         },
//         {
//           name: '111',
//           phone: '128564455',
//           ident: '青铜'
//         },
//         {
//           name: '111',
//           phone: '128564455',
//           ident: '白银'
//         },
//         {
//           name: '111',
//           phone: '128564455',
//           ident: '黄金'
//         },
//         {
//           name: '111',
//           phone: '128564455',
//           ident: '钻石'
//         }
//       ]
//     }
//   },
//   created () {
//     for (let index = 0; index < this.mismatch.length; index++) {
//       const element = this.mismatch[index]
//       console.log(element.ident)
//       if (element.ident === '青铜') {
//         this.isBronze = true
//         console.log(this)
//         break
//       } else {
//         console.log('222')
//       }
//     }
//   }
// }
export default {
  data () {
    return {
      datas: [
        {
          data: '测试1',
          ifAdd: 0
        },
        {
          data: '测试2',
          ifAdd: 1
        },
        {
          data: '测试3',
          ifAdd: 2
        }
      ],
      bronze: '0'
    }
  },
  created () {
  },
  methods: {
    addClassFun (index) {
      this.bronze = index
    }
  }
}
</script>
