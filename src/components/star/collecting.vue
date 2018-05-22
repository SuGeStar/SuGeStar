<template>
    <canvas id="canvas" class="canvas">
    </canvas>
</template>
<style lang="less" scoped>

</style>
<script>
/** @author：chenjinzhu;
  * @prop:  energy:[{id:string,num:number}];
  * @event: energyClick(id:string);
  * @relyOn: ocanvas;
  * @createTime: 2018/5/20;
*/
import oCanvas from 'ocanvas';
export default {
    data() {
        return {
            canvasNode: null,
            corresponding:[
                '5','37','258','1357','12569','134679','1345679','12346789','123456789'
            ],
            position: [
                    { x: 50, y: 50 },
                    { x: 120, y: 130 },
                    { x: 75, y: 180 },
                    { x: 170, y: 30 },
                    { x: 220, y: 120 },
                    { x: 270, y: 60 },
                    { x: 330, y: 110 },
                    { x: 260, y: 160 },
                    { x: 340, y: 220 }
            ]
        }
    },
    props: ['energy'],
    mounted() {
        let canvas = document.querySelector('canvas')
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight / 2.5;
        this.createCanvas(window.innerWidth, window.innerHeight / 2.5);
    },
    watch: {
        energy: 'drawEnergy'
    },
    methods: {
        createCanvas(w, h) {
            var bollx = w / 2, bolly = h - 60;
            this.canvas = oCanvas.create({
                canvas: "#canvas"
            });
            let boll = this.canvas.display.image({
                x: bollx,
                y: bolly,
                origin: { x: "center", y: "center" },
                image: require("../../assets/image/index-tiqu.png"),
                width: 40
            });
            this.canvas.addChild(boll);
            var bollText = this.canvas.display.text({
                x: bollx,
                y: bolly + 40,
                origin: { x: "center", y: "center" },
                font: "normal 14px sans-serif",
                text: "正在提取中...",
                fill: "#ccc"
            });
            var isState=1;
            function bollAnimal() {
                boll.animate({
                    rotation: isState*360
                }, {
                        duration: 'long',
                        easing: "linear",
                        callback: function() {
                            isState++;
                            bollAnimal();
                        }
                    })
            };
            bollAnimal();
            this.canvas.addChild(bollText);
        },
        drawEnergy(enerayItems) {
            let self = this,
                canvasObj = {},
                enerayItemsLength = enerayItems.length;
            if (enerayItemsLength == 0) {
                return;
            }
            let positionCorresponding = this.corresponding[enerayItemsLength-1];
            let position=[];
            positionCorresponding.split('').forEach(element=>{
                position.push(this.position[element-1])
            });
            enerayItems.forEach((item, index) => {
                canvasObj['image' + index] = this.canvas.display.image({
                    x: position[index].x,
                    y: position[index].y,
                    origin: { x: "center", y: "center" },
                    image: require("../../assets/image/index-zuanshi.png"),
                    width: 30,
                });
                createAninmal(canvasObj['image' + index], 'element.abs_y == position[index].y ? position[index].y - 10 : position[index].y', index, '', createAninmal);
                this.canvas.addChild(canvasObj['image' + index]);
                canvasObj['imageText' + index] = this.canvas.display.text({
                    x: position[index].x,
                    y: position[index].y + 20,
                    origin: { x: "center", y: "center" },
                    font: "normal 12px sans-serif",
                    text: enerayItems[index].num + 'k',
                    fill: "#ccc"
                });
                createAninmal(canvasObj['imageText' + index], 'element.abs_y == position[index].y + 20 ? position[index].y + 20 - 10 : position[index].y + 20', index, '', createAninmal);
                this.canvas.addChild(canvasObj['imageText' + index]);
                bindClick(canvasObj['image' + index], index);
            });
            function createAninmal(element, Expression, index, speed, callBack) {
                speed = speed ? speed : 'normal';
                element.animate(
                    { y: eval(Expression) },
                    {
                        easing: "linear",
                        queue: "move",
                        duration: speed,
                        callback: function() {
                            callBack && callBack(element, Expression, index, speed, callBack)
                        }
                    })
            };
            function bindClick(element, index) {
                element.bind('click tap', function handler() {
                    let top = element.abs_y;
                    element.stop();
                    canvasObj['imageText' + index].stop();
                    element.unbind('click tap', handler);
                    createAninmal(element, 'element.abs_y-20', index, 'normal', function() {
                        self.canvas.removeChild(canvasObj['image' + index]);
                    })
                    createAninmal(canvasObj['imageText' + index], 'element.abs_y-63', index, 'normal', function() {
                        self.canvas.removeChild(canvasObj['imageText' + index]);
                    });
                    self.$emit('energyClick', self.energy[index].id);
                });
            }
        }
    },
}
</script>
