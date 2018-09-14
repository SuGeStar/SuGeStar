<template>
  <div class="wrapper">
    <mt-header fixed title="星球动态">
      <a href="javascript:history.go(-1);" slot="left">
        <mt-button icon="back"></mt-button>
      </a>
    </mt-header>
    <!--<div class="miji">
      <img src="../../assets/image/miji-bg.png">
      <ul class="miji-content">
        <li>
          <div class="miji-tit">
            <img src="../../assets/image/miji-wz.png">
          </div>
          <div class="miji-desc">
            SG星球是一个“价值共享平台”，帮助用户构建星球居民身份，挖掘自身价值，从而实现“让价值的贡献者参与价值分享”。
          </div>
        </li>
        <li>
          <div class="miji-tit">
            <img src="../../assets/image/miji-sk.png">
          </div>
          <div class="miji-desc">
            矿石是基于个人星球活动产生的奖励。SG星球上有两种矿石，需要消耗原力值开采出的矿石为S矿石，不需要消耗原力值开采出的矿石为K矿石。
          </div>
        </li>
        <li>
          <div class="miji-tit">
            <img src="../../assets/image/miji-sg.png">
          </div>
          <div class="miji-desc">
            <p>
              通过K矿石熔炼得到的即为SG矿币，可用于在星球商城购物时抵扣现金使用。
            </p>
            <p>
              通过S矿石熔炼得到的即为SG金币，除可在商城购物时抵扣现金使用之外，还具有赠送（转赠他人）、升级身份、与平台交易等用途。
            </p>
          </div>
        </li>
        <li>
          <div class="miji-tit">
            <img src="../../assets/image/miji-ylz.png">
          </div>
          <div class="miji-desc">
            <p>
              原力值是用户获取S矿石的影响因子，原力值越高，获得的S矿石就越多。
            </p>
            <p>
              获得S矿石，需要消耗用户当前的原力值（S矿石每天产量固定。按照用户当前的原力值，固定消耗，固定产出）。
            </p>
          </div>
        </li>
        <li>
          <div class="miji-tit">
            <img src="../../assets/image/miji-owen.png">
          </div>
          <div class="miji-desc">
            <p>1、用户可通过升级身份获取原力值：</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;① 升级为青铜时代，获得1000原力值</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;② 升级为白银时代，获得10000原力值</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;③ 升级为黄金时代，获得30000原力值</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;④ 升级为钻石时代，获得100000原力值</p>
            <p>2、升级过身份的用户可通过邀请获取原力值：</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;① 首次升级身份的用户，获得的原力值处于冻结状态；</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;② 首次邀请两人入驻SG星球，即可解封原力值（必须与邀请人同级）；</p>
            <p> &nbsp;&nbsp;&nbsp;&nbsp;③ 原力值解封之后，每成功邀请两人入驻SG星球，则赠送邀请人相应的原力值（若被
            请人身份等级低于邀请人，则按被邀请人等级赠送相应的原力值；若被邀请人身份等级高
            于邀请人，则按邀请人等级赠送相应的原力值）；</p>
          </div>
        </li>
      </ul>
    </div>-->
    <div class="dynamicContainer">
      <div class="dynamicTxt"></div>
      <router-link to="/starBase"><div class="treng_pic1 treng_pic"></div></router-link>
      <router-link to="/starSecret"><div class="treng_pic2 treng_pic"></div></router-link>
    </div>
  </div>
</template>
<style lang="less" scoped>
  @import '../../assets/less/miji.less';
</style>
