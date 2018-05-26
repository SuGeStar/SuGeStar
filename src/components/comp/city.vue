<template>
  <div class="wrapper">
    <div class="area-container">
      <div class="area-cancel"></div>
      <div class="area-box">
        <p class="a_title">所在地区</p>
        <p class="a_chose">
          <span :class="{'area_on':cls}" @click="choseAddress(0)">{{choseProvince}}</span>
          <span :class="{'area_on':cls1}" @click="choseAddress(1)">{{choseCity}}</span>
          <span :class="{'area_on':cls2}" @click="choseAddress(2)">{{choseDistrict}}</span>
        </p>
        <div class="area_center">
          <div class="area_con">
            <div class="area_province">
              <p v-for="(province,$index) in province" @click="getCity(province,$index)" :class="{'act':provinceIdx === $index}">{{province.name}}</p>
            </div>
            <div class="area_city">
              <p v-for="(city,$index) in city" @click="getDistrict(city,$index)" :class="{'act':cityIdx === $index}">{{city.name}}</p>
            </div>
            <div class="area_district">
              <p v-for="(district,$index) in district" @click="getAds(district,$index)" :class="{'act':districtIdx === $index}">{{district.name}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 初始化省份
      province: [],
      // 初始化城市
      city: [],
      // 初始化县区
      district: [],
      // 初始化选择按钮
      choseProvince: '请选择',
      choseCity: '请选择',
      choseDistrict: '请选择',
      // 初始化各项index值
      index_p: 0,
      index_c: 0,
      index_d: 0,
      // 初始化对应的class
      cls: true,
      cls1: false,
      cls2: false,
      // 初始化选择的地方
      address: '',
      addressArr: [],

      provinceIdx: -1,
      cityIdx: -1,
      districtIdx: -1
    }
  },
  methods: {
    // 请求省份
    getProvince () {
      this.$http.get('http://www.yuyulu.cn/city/1').then((value) => {
        this.province = JSON.parse(value.bodyText).data
      }, (error) => {
        console.log(error)
      })
    },
    getCity (pro,idx) {
      this.provinceIdx = idx
      this.index_p = pro.id
      this.cityIdx = -1
      this.districtIdx = -1
      this.choseProvince = pro.name
      this.choseCity = '请选择'
      this.choseDistrict = '请选择'
      this.cls = false
      this.cls1 = true
      this.cls2 = false
      this.district = []
      this.$http.get('http://www.yuyulu.cn/city/'+pro.id+'').then((value) => {
        this.city = JSON.parse(value.bodyText).data
      }, (error) => {
        console.log(error)
      })
    },
    getDistrict (city,idx) {
      this.cityIdx = idx
      this.index_c = city.id
      this.districtIdx = -1
      this.choseCity = city.name
      this.choseDistrict = '请选择'
      this.cls = false
      this.cls1 = false
      this.cls2 = true
      this.$http.get('http://www.yuyulu.cn/city/'+city.id+'').then((value) => {
        this.district = JSON.parse(value.bodyText).data
      }, (error) => {
        console.log(error)
      })
      $(".area_con").animate({
        left:"-3.23rem"
      });
    },
    getAds (dis,idx) {
      this.districtIdx = idx
      this.index_d = dis.id
      this.choseDistrict = dis.name
      this.address = this.choseProvince+' '+this.choseCity+' '+this.choseDistrict
      this.addressArr = [this.index_p, this.index_c, this.index_d]
    },
    choseAddress (idx) {
      switch (idx){
        case 0:
          this.cls = true
          this.cls1 = false
          this.cls2 = false
          $(".area_con").animate({
            left:"0"
          });
          break
        case 1:
          this.cls = false
          this.cls1 = true
          this.cls2 = false
          $(".area_con").animate({
            left:"0"
          });
          break
        case 2:
          if (this.choseDistrict != '请选择') {
            $(".area_con").animate({
              left:"-3.23rem"
            });
            this.cls = false
            this.cls1 = false
            this.cls2 = true
          }
          break
      }
    }
  },
  mounted () {
    this.getProvince()
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/city.less";
</style>
