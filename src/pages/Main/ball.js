/**
 * Created by wen on 2017/3/9.
 */

let BallAnimate = function () {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d'),
        Balls = [];
    let ball = function (x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = getRandom(20, 40);
        this.colorFrom = "#fff";
        this._shadowBlur = 50;
        this._shadowColor = "#fff";
        this.color = "rgba(" + getRandom(0, 255) + "," + getRandom(0, 255) + "," + getRandom(0, 255) + ",1)";
        this.cacheCanvas = document.createElement("canvas");
        this.cacheCtx = this.cacheCanvas.getContext("2d");
        this.cacheCanvas.width = 2 * this.r;
        this.cacheCanvas.height = 2 * this.r;

        this.cache();
    };

    ball.prototype = {
        paint: function (ctx) {
            ctx.drawImage(this.cacheCanvas, this.x - this.r, this.y - this.r);
        },

        cache: function () {
            let x1 = this.x,
                y1 = this.y - this.r,
                r1 = this.r * 0.24,
                x2 = this.x,
                y2 = this.y - this.r * 0.4,
                r2 = this.r * 2.2,
                grd = this.cacheCtx.createRadialGradient(x1, y1, r1, x2, y2, r2);
            grd.addColorStop(0, this.colorFrom);
            grd.addColorStop(1, this.color);
            this.cacheCtx.shadowBlur = this._shadeBlur;
            this.cacheCtx.shadowColor = this._shadeColor;

            this.cacheCtx.save();
            this.cacheCtx.fillStyle = grd;
            this.cacheCtx.beginPath();
            this.cacheCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
            this.cacheCtx.closePath();
            this.cacheCtx.fill();
            this.cacheCtx.restore();
        },

        move: function () {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x > (canvas.width - this.r) || this.x < this.r) {
                this.x = this.x < this.r ? this.r : (canvas.width - this.r);
                this.vx = -this.vx;
            }
            if (this.y > (canvas.height - this.r) || this.y < this.r) {
                this.y = this.y < this.r ? this.r : (canvas.height - this.r);
                this.vy = -this.vy;
            }

            this.paint(ctx);
        }
    };

    let Game = {
        init: function () {
            for (let i = 0; i < 500; i++) {
                let b = new ball(getRandom(0, canvas.width), getRandom(0, canvas.height), getRandom(-10, 10), getRandom(-10, 10));
                Balls.push(b);
            }
        },

        update: function () {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < Balls.length; i++) {
                Balls[i].move();
            }
        },

        loop: function () {
            let _this = this;
            this.update();
            RAF(function () {
                _this.loop();
            })
        },

        start: function () {
            this.init();
            this.loop();
        }
    };

    window.RAF = (function () {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
                window.setTimeout(callback, 1000 / 400);
            };
    })();

    return Game;
};

function getRandom(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

export  {
    BallAnimate
};

