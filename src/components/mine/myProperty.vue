<template>
  <div class="wrapper">
    <div class="moduleHead">
      <a href="javascript:history.go(-1);"></a>
      我的资产
    </div>
    <div class="property-tab" >
      <mt-navbar  v-model="selected">
        <mt-tab-item :id="index" v-for="(tabName,index) in tabTxt" :key="index" class="asc">{{tabName}}</mt-tab-item>
      </mt-navbar>
      <div>
      </div>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="0" class="property-container">
         <div class="pc-head-container">
           <p class="pc-head-title">K矿石总数</p>
           <p class="pc-head-num"><span>99999.00</span><router-link :to="{path:'/smelting/K'}"><span class="smelting fr">熔炼 >></span></router-link></p>
           <div class="pc-head-freeze">
             <p>冻结K矿石：<span>10000.00</span></p>
           </div>
         </div>
          <div class="pc-record-container">
            <p class="pc-record-title">收支记录</p>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">日常收取</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">+5</p>
            </div>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">熔炼</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">-25</p>
            </div>
          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="1" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">S矿石总数</p>
            <p class="pc-head-num"><span>99999.00</span><router-link :to="{path:'/smelting/S'}"><span class="smelting fr">熔炼 >></span></router-link></p>
            <div class="pc-head-freeze">
              <p>冻结S矿石：<span>10000.00</span></p>
            </div>
          </div>
          <div class="pc-record-container">
            <p class="pc-record-title">收支记录</p>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">日常收取</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">+5</p>
            </div>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">熔炼</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">-25</p>
            </div>

          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="2" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">SG矿币总数</p>
            <p class="pc-head-num"><span>99999.00</span></p>
            <div class="pc-head-freeze">
              <p>冻结SG矿币：<span>10000.00</span></p>
            </div>
          </div>
          <div class="pc-record-container">
            <p class="pc-record-title">收支记录</p>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">熔炼</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">+5</p>
            </div>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">消费</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">-25</p>
            </div>

          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="3" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">SG金币总数</p>
            <p class="pc-head-num"><span>99999.00</span></p>
            <div class="pc-head-freeze">
              <p>冻结SG金币：<span>10000.00</span></p>
            </div>
          </div>
          <div class="pc-record-container">
            <p class="pc-record-title">收支记录</p>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">熔炼</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">+5</p>
            </div>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">商城消费</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">-25</p>
            </div>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">赠送他人</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">-25</p>
            </div>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">他人赠送</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">+25</p>
            </div>

          </div>
        </mt-tab-container-item>
        <mt-tab-container-item :id="4" class="property-container">
          <div class="pc-head-container">
            <p class="pc-head-title">原力总数</p>
            <p class="pc-head-num"><span>99999.00</span></p>
            <div class="pc-head-freeze">
              <p>冻结原力：<span>10000.00</span></p>
            </div>
          </div>
          <div class="pc-record-container">
            <p class="pc-record-title">收支记录</p>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">系统赠送</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">+5</p>
            </div>
            <div class="pc-record-list">
              <div class="pc-record-list-container fl">
                <p class="pc-record-list-title">日常提炼</p>
                <p class="pc-record-list-time">2018-05-22</p>
              </div>
              <p class="pc-record-list-data fr">-25</p>
            </div>

          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: 0,
      tabTxt: ['K矿石', 'SG矿石', 'SG矿石', 'SG金币', '原力值']
    }
  }
}
</script>

<style scoped>
  @import '../../assets/less/myProperty.less';
</style>
