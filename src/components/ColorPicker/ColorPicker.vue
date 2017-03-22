<template>
    <div class="colorPicker row">
        <div class="twod col-md-4" ref="containerTwod" :style="{background: twoRGB}">
            <div class="bg bg1"></div>
            <div class="bg bg2"></div>
            <div class="twod-pointer" ref="moveBarTwod" :style="{top: currentTopTwo,left:currentLeftTwo}"></div>
        </div>
        <div class="oned col-md-4 hidden-sm hidden-xs">
            <div class="oned-bg" ref="container">
                <div class="pointer" ref="moveBar" :style="{top: currentTop}"></div>
            </div>
        </div>
        <div class="display-color col-md-4 hidden-sm hidden-xs">
            <p><em>#</em><span :style="{backgroundColor: show16}">{{show16}}</span></p>
            <p><em>R</em><span>{{R}}</span></p>
            <p><em>G</em><span>{{G}}</span></p>
            <p><em>B</em><span>{{B}}</span></p><br>
            <p><em>H</em><span>{{H}}</span></p>
            <p><em>S</em><span>{{S}}</span></p>
            <p><em>L</em><span>{{L}}</span></p>
        </div>
    </div>
</template>
<script>
    import {mapMutations, mapGetters} from 'vuex';
    export default {
        name: 'ColorPicker',
        data() {
            return {
                H: 1,
                S: 2,
                L: 3
            }
        },
        mounted: function () {
            this.H = this.getHSL[0];
            this.S = this.getHSL[1];
            this.L = this.getHSL[2];
            let that = this;
            new this.draggable({//左边改变，计算S、B：
                container: this.$refs.containerTwod,
                handler: this.$refs.moveBarTwod,
                moveFun: function (opt) {
                    that.S = Math.round(opt.left / 4);
                    that.L = 100 - Math.round(opt.top / 4);
                    that.setHSL({
                        HSL: [that.H,that.S,that.L]
                    })
                }
            });
            new this.draggable({
                container: this.$refs.container,
                handler: this.$refs.moveBar,
                moveFun: function (opt) {//获得H(Hue，色调)  右边
                    that.H = Math.floor(opt.top * 360 / 400);
                    that.setHSL({
                        HSL: [that.H,that.S,that.L]
                    });
                }
            });
        },
        computed: {
            ...mapGetters([
                'getHSL',
            ]),
            rgb() {
                return this.hsv2rgb(this.H / 360, this.S / 100, this.L / 100);
            },
            R: function () {
                return this.rgb.r;
            },
            G: function () {
                return this.rgb.g;
            },
            B: function () {
                return this.rgb.b;
            },
            currentTop: function () {
                return (this.H*100/360) + "%";
            },
            currentTopTwo: function () {
                return (100 - this.L) + "%";
            },
            currentLeftTwo: function () {
                return this.S + "%";
            },
            twoRGB: function () {
                return this.getColor(400 - this.H, 400);
            },
            show16: function () {
                let str = 'rgb(' + this.rgb.r + ',' + this.rgb.g + ',' + this.rgb.b + ')';
                return this.rgbTo16(str);
            }
        },
        methods: {
            draggable: function (options) {
                let $this = this, doc = document.body,
                    container = options.container || $this.$refs.container,//滑动容器元素
                    handler = options.handler || $this.$refs.moveBar,//滑动元素
                    moveFun = options.moveFun || "";
                let oldLeft, oldTop, mouseX, mouseY, isDown = false, hasMove = false;
                let containerWidth = container.offsetWidth,
                    containerHeight = container.offsetHeight;
                container.addEventListener('mousedown', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    isDown = true;
                    if (e.target !== handler) {
                        oldLeft = e.offsetX;
                        oldTop = e.offsetY;
                        mouseX = e.clientX;
                        mouseY = e.clientY;
                        moveFun({
                            left: oldLeft,
                            top: oldTop
                        });

                    } else {
                        oldLeft = e.target.offsetLeft;
                        oldTop = e.target.offsetTop;
                        mouseX = e.clientX;
                        mouseY = e.clientY;
                    }
                });
                doc.addEventListener('mouseup', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    isDown = false;
                    if (hasMove) {
                        let pos = getCoordinate(e);
                        moveFun({
                            left: pos.left,
                            top: pos.top
                        });
                    }
                    hasMove = false;
                });
                doc.addEventListener('mousemove', function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    if (!isDown) {
                        return false;
                    }
                    hasMove = true;
                    let pos = getCoordinate(e);
                    moveFun({
                        left: pos.left,
                        top: pos.top
                    });
                });
                let getCoordinate = function (e) {
                    let event = e || window.e, dx = event.clientX - mouseX, dy = event.clientY - mouseY, x = 0, y = 0;
                    (oldLeft + dx <= 0) ? x = 0 : (oldLeft + dx >= containerWidth) ? x = containerWidth : x = (oldLeft + dx);
                    (oldTop + dy <= 0) ? y = 0 : (oldTop + dy >= containerHeight) ? y = containerHeight : y = (oldTop + dy);
                    return {left: x, top: y}
                };
            },
            getColor: function (top, height) { //获得色轮任意一度的颜色值。top：滑动离顶端的距离，height：柱子的高度
                let oneHeight = height / 6;
                let d = 0, rgbStr;
                if (top < oneHeight * 1) {
                    d = (top / oneHeight) * 255;
                    rgbStr = "rgb(255,0," + Math.round(d) + ")";

                } else if (top >= oneHeight && top < 2 * oneHeight) {
                    d = 255 - ((top - oneHeight) / oneHeight) * 255;
                    rgbStr = "rgb(" + Math.round(d) + ",0,255)";

                } else if (top >= 2 * oneHeight && top < 3 * oneHeight) {
                    d = ((top - 2 * oneHeight) / oneHeight) * 255;
                    rgbStr = "rgb(0," + Math.round(d) + ",255)";

                } else if (top >= 3 * oneHeight && top < 4 * oneHeight) {
                    d = 255 - ((top - 3 * oneHeight) / oneHeight) * 255;
                    rgbStr = "rgb(0,255," + Math.round(d) + ")";

                } else if (top >= 4 * oneHeight && top < oneHeight * 5) {
                    d = ((top - oneHeight * 4) / oneHeight) * 255;
                    rgbStr = "rgb(" + Math.round(d) + ",255,0)";

                } else {
                    d = 255 - ((top - oneHeight * 5) / oneHeight) * 255;
                    rgbStr = "rgb(255," + Math.round(d) + ",0)";
                }
                return rgbStr;
            },
            hsv2rgb: function (H, S, V) { //HSB(V)转换为RGB，0<=H<1，0<=S,V<=1
                let R, G, B;
                if (S == 0) {
                    R = G = B = V;
                } else {
                    let _H = H * 6;
                    if (_H == 6) {
                        _H = 0;
                    }
                    let i = Math.floor(_H);
                    let v1 = V * (1 - S);
                    let v2 = V * (1 - S * (_H - i ));
                    let v3 = V * (1 - S * (1 - (_H - i)));
                    if (i == 0) {
                        R = V;
                        G = v3;
                        B = v1;
                    } else if (i == 1) {
                        R = v2;
                        G = V;
                        B = v1;
                    } else if (i == 2) {
                        R = v1;
                        G = V;
                        B = v3;
                    } else if (i == 3) {
                        R = v1;
                        G = v2;
                        B = V;
                    } else if (i == 4) {
                        R = v3;
                        G = v1;
                        B = V;
                    } else {
                        R = V;
                        G = v1;
                        B = v2;
                    }
                }
                return {r: Math.round(R * 255), g: Math.round(G * 255), b: Math.round(B * 255)};
            },
            rgbTo16: function (rgb) {
                rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
                function hex(x) {
                    return ("0" + parseInt(x).toString(16)).slice(-2);
                }

                return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
            },
            ...mapMutations({
                setHSL: 'SET_COLOR_PICKER',
            })
        },
    }

</script>

<style rel="stylesheet/less" lang="less">
    .display-color {
        margin-top: 30px;
        p {
            line-height: 2;
            font-size: 20px;
            em {
                display: inline-block;
                width: 30px;
            }
            span {
                display: inline-block;
                width: 80px;
                text-align: center;
            }
        }
    }

    .twod {
        position: relative;
        width: 400px;
        height: 400px;
        z-index: 2;
    }

    .twod-pointer {
        position: absolute;
        top: 0;
        left: 0;
        margin-top: -5px;
        margin-left: -5px;
        width: 8px;
        height: 8px;
        background: transparent;
        border: 2px solid #fff;
        z-index: 6;
        border-radius: 50%;
        box-shadow: 0 0 2px 2px rgb(0, 0, 0);
        cursor: pointer;
    }

    .twod .bg1 {
        background: linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    }

    .twod .bg2 {
        background: linear-gradient(to bottom, transparent 0%, #000 100%);
    }

    .oned {
        position: relative;
        width: 50px;
        height: 400px;
        overflow: unset;
        cursor: pointer;
        z-index: 2;
    }

    .oned-bg {
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
        background: -o-linear-gradient(red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
        background: linear-gradient(red 0%, #ff0 17%, lime 33%, cyan 50%, blue 66%, #f0f 83%, red 100%);
    }

    .oned .pointer {
        position: absolute;
        top: 0;
        right: 4px;
        margin-top: -8px;
        width: 0;
        height: 0;
        border-right: 10px solid #000;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        z-index: 3;
    }

    .twod .bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
    }
</style>
