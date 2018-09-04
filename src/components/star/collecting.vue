<template>
	<canvas id="canvas" class="canvas">
	</canvas>
</template>
<style lang="less" scoped>
</style>
<script>
import oCanvas from 'ocanvas';
import { Toast } from 'mint-ui'
let token = localStorage.getItem('token')
export default {
  data() {
    return {
      canvasNode: null,                   //提前声明，准备承接ocanvas对象
      corresponding:[
        '5','37','258','1357','12569','134679','1345679','12346789','123456789'
      ],                                 //个数与位置对应关系数组
      position:
        [
          { x: 100, y: 185 },
          { x: 75, y: 125 },
          { x: 140, y: 260 },
          { x: 145, y: 70 },
          { x: 180, y: 160 },
          { x: 223, y: 80 },
          { x: 295, y: 100 },
          { x: 215, y: 240 },
          { x: 290, y: 230 }
        ]                                  //砖石位置数组
    }
  },
  props: ['energy'],                          //组件需要接收的属性
  mounted() {
    let canvas = document.querySelector('canvas')                               //获取canvas dom节点
    canvas.width = window.innerWidth;                                           //canvas定宽
    canvas.height = window.innerHeight / 2;                                   //canvas定高
    this.createCanvas(window.innerWidth, window.innerHeight / 2.5);            //调用createCanvas方法，传入宽高
  },
  watch: {
    energy: 'drawEnergy'                                                        // 监控组件接收属性 energy的变化，如变化，则调用drawEnergy方法
  },
  methods: {
    createCanvas(w, h) {
      var bollx = w / 2, bolly = h - 38;                                      // 确定星球的位置
      this.canvas = oCanvas.create({
        canvas: "#canvas"                                                   // 创建oCanvas实例，并挂载至提前声明的this.canvas对象上
      });
      let boll = this.canvas.display.image({                                  //调用oCanvas实例的display.object中的image方法，传入对应参数，建立图片对象
        x: bollx,                                                           //目标偏离左上角的水平位置
        y: bolly,                                                           //目标偏离左上角的垂直位置
        origin: { x: "center", y: "center" },                               //确定中心店
        // image: require("../../assets/image/index-tiqu.png"),                //图片地址
        width: 0                                                          //指定图片大小
      });
      // this.canvas.addChild(boll);         // this.canvas.addChild(boll);                                             //调用oCanvas实例addChild方法，传入需要绘制至canvas上的oCanvas对象
      var bollText = this.canvas.display.text({                               //同上，调用text方法，建立文字对象
        x: bollx,
        y: bolly +30,
        origin: { x: "center", y: "center" },
        font: "normal 14px Arial",                                           //字体
        // text: "正在提取中...",                                               //文本内容
        fill: "#ccc"                                                        //颜色
      });
      var isState=1;                                                          //星球旋转一周的次数
      function bollAnimal() {                                                 //制定旋转动画
        boll.animate({                                                      //调用星球实例的animate方法，
          rotation: isState*360                                           //制定动画效果，rotation为角度偏转
        }, {
          duration: 'long',                                           //持续时间:只接受三个值  short：500ms   normal：1000ms   long：2000ms
          easing: "linear",                                           //动画线性：参考css3
          callback: function() {                                      //动画完成回调
            isState++;                                              //次数++，重新计算偏转角度
            bollAnimal();                                           //调用自身，形成无限动画
          }
        })
      };
      //bollAnimal();                                                           //调用动画函数
      // this.canvas.addChild(bollText);                                         //添加
    },
    drawEnergy (enerayItems) {
      let self = this,                                                       //提前保存this对象 此时this指当前vue组件实例，供之后使用
        canvasObj = {},                                                    //创建一个空对象，后面用来呈放canvas对象及动画对象
        enerayItemsLength = enerayItems.length;                            //获取一下能量的个数，(能量是由父组件传递下来的属性)
      if (enerayItemsLength == 0) {
        return;                                                           //如果能量个数为0，直接结束函数，以免下面内容报错
      }
      let positionCorresponding = this.corresponding[enerayItemsLength-1];   //根据个数判断一下该取位置数组中哪个元素
      let position=[];                                                       //声明一个空数组   用来呈放位置数组
      let randomArray = new Array(10).fill(0).map((v,i)=>i+9).sort(()=>0.5 - Math.random()).filter((v,i)=>i<enerayItemsLength);
      positionCorresponding.split('').forEach(element=>{
        position.push(this.position[element-1])
        // 遍历上一步取出的字符串，在提前制定好的位置数组中取出对应项
      });

      enerayItems.forEach((item, index) => {                                 //遍历能量集合，生成canvas对象，存入刚创建的canvasObj对象中，用来准备声明动画
        canvasObj['image' + index] = this.canvas.display.image({
          x: position[index].x,                                           //位置
          y: position[index].y,
          origin: { x: "center", y: "center" },
          image: require("../../assets/image/index-zuanshi.png"),         //图片地址
          width: 30, //宽度大小
          height: 25
        });
        let randomNum = randomArray[index];
        createAninmal(canvasObj['image' + index], 'element.abs_y == position[index].y ? position[index].y - '+randomNum+': position[index].y', index, '', createAninmal);  //调用创建动画函数
        this.canvas.addChild(canvasObj['image' + index]);                  //将生成好及添加好动画的对象添加到ocanvas对象上
        canvasObj['imageText' + index] = this.canvas.display.text({        //同时创建文字
          x: position[index].x,
          y: position[index].y + 20,
          origin: { x: "center", y: "center" },
          font: "normal 13px sans-serif",                                 // 字体
          text: enerayItems[index].ore + 'k',                             //字体内容
          fill: "#ccc"                                                    //字体颜色
        });
        createAninmal(canvasObj['imageText' + index], 'element.abs_y == position[index].y + 20 ? position[index].y + 20 - '+randomNum+' : position[index].y + 20', index, '', createAninmal);  //给文字创建动画
        this.canvas.addChild(canvasObj['imageText' + index]);               //将文字对象也添加到ocanvas对象上
        bindClick(canvasObj['image' + index], index);                       //给星球绑定点击事件
      });
      /**
      *@element        //对象
      *@Expression     //动画字符串表达式
      *@index          //索引
      *@speed         //速度  默认为normal
      *@callBack      //动画完成时执行的操作
       */
      function createAninmal(element, Expression, index, speed='long', callBack) {          //创建对象函数
        element.animate(                                                                    //调用对象的element方法
          { y: eval(Expression) },                                                        //动画效果，此处仅需在y轴上移动，然后将字符串表达式转换成javaScript代码
          {                                                                               //eval有一定的性能问题，不建议学习
            easing: "linear",                                                           //线性动画
            queue: "move",
            duration: speed,                                                            //次序时间
            callback: function() {
              callBack && callBack(element, Expression, index, speed, callBack)       //如果存在callBack参数，则调用callBack   此处是对在自身进行调用
            }
          })
      };
      function bindClick(element, index) {
        // 绑定点击事件函数
        element.bind('click tap', function handler() {
          if (!token) {
            Toast({
              message: '您还为登录，请先登录',
              position: 'middle',
              duration: 2000
            })
          }else {
            let top = element.abs_y;                                                        //获取当前对象的Y轴值
            element.stop();                                                                 //停止当前对象动画，此处是砖石
            canvasObj['imageText' + index].stop();                                          //通过index找到文字，停止动画
            element.unbind('click tap', handler);                                           //同时解除点击事件
            createAninmal(element, 'element.abs_y-20', index, 'short', function() {        //对砖石创建动画
              self.canvas.removeChild(canvasObj['image' + index]);                        //回调函数内移除砖石
            })
            createAninmal(canvasObj['imageText' + index], 'element.abs_y-63', index, 'short', function() {
              self.canvas.removeChild(canvasObj['imageText' + index]);                   //对文字操作，逻辑同砖石
            });
            self.$emit('energyClick', self.energy[index].id);                           //传播事件，携带能量id；
          }
        })
      }
    }
  }
}
</script>
