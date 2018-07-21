<template>
<div class="wrapper">
  <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="3" :style="{height: slideHeight + 'px'}">
    <slide v-for="(slide,i) in slides" :key="i" :index="i" :style="{width: slideWidth + 'px', height: slideHeight + 'px'}">
      <img :src="slide.src">
    </slide>
  </carousel-3d>
</div>
</template>

<script type="text/babel">
  export default {
    data() {
      return {
        slideWidth: 300,
        slideHeight: 200,
        slides: [
          {
            src: 'http://c.hiphotos.baidu.com/image/pic/item/09fa513d269759eeef490028befb43166d22df3c.jpg'
          },
          {
            src: 'http://f.hiphotos.baidu.com/image/pic/item/960a304e251f95cacc952852c5177f3e660952f5.jpg'
          },
          {
            src: 'http://c.hiphotos.baidu.com/image/pic/item/a5c27d1ed21b0ef4b129b3b9d1c451da80cb3e17.jpg'
          },
        ]
      };
    },
    methods: {
      
    },
    created() {
      
    },
    mounted() {
      
    }
  };
</script>
