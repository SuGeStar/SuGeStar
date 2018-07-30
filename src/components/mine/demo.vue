<template>
<div class="wrapper">
  <div class="fixed"  id="searchBar">

  </div>
</div>
</template>

<style lang="less" scoped>
.wrapper {
  height: 1000px;
}
.fixed {
  position: fixed;
  bottom: 100px;
  top: 300px;/*开始处于距离顶部300px的位置，之后随着滚动条滚动top值改变，然后在top==100时停止*/
  left: 218px;
  box-sizing: border-box;
  z-index: 2;
  background-color: red;
  width: 100%;
  height: 100px;
}
</style>


<script type="text/babel">
  export default {
    data() {
      return {
        
      };
    },
    created() {
      
    },
    mounted() {
      // 给window添加一个滚动滚动监听事件
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll () { //改变元素#searchBar的top值
        console.log('1111')
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        var offsetTop = document.querySelector('#searchBar').offsetTop;
        console.log(offsetTop)
        if (scrollTop<=200) {
          offsetTop = 300 - Number(scrollTop);
          document.querySelector('#searchBar').style.top = offsetTop+'px';
        } else {
          document.querySelector('#searchBar').style.top = '100px';
        }
      }
    },
    destroyed () {//离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    }
  };
</script>
