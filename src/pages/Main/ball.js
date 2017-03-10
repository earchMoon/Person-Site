/**
 * Created by wen on 2017/3/9.
 */

let BallAnimate = function () {
    let canvas = document.getElementById("canvas"),
        ctx = canvas.getContext('2d'),
        gameID,
        Balls = [];

    let ball = function (x, y, vx, vy) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this._shadowBlur = 20;
        this._shadowColor = "#FFF";
        this.r = getRandom(4, 20) + this._shadowBlur;
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
            let x1 = this.r,
                y1 = 0,
                r1 = this.r * 0.2,
                x2 = this.r,
                y2 = this.r * 1.2,
                r2 = this.r * 2,
                grd = this.cacheCtx.createRadialGradient(x1, y1, r1, x2, y2, r2);
            grd.addColorStop(0, "#fff");
            grd.addColorStop(1, this.color);
            this.cacheCtx.save();
            this.cacheCtx.shadowBlur = this._shadowBlur;
            this.cacheCtx.shadowColor = this._shadowColor;
            this.cacheCtx.fillStyle = grd;
            this.cacheCtx.beginPath();
            this.cacheCtx.arc(this.r, this.r, this.r - this._shadowBlur, 0, 2 * Math.PI);
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

    let Game = function () {};
    Game.prototype.init = function () {
        for (let i = 0; i < 10; i++) {
            let b = new ball(getRandom(0, canvas.width), getRandom(0, canvas.height), getRandom(-5, 5), getRandom(-5, 5));
            Balls.push(b);
        }
    };

    Game.prototype.update = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < Balls.length; i++) {
            Balls[i].move();
        }
    };

    Game.prototype.loop = function () {
        let _this = this;
        _this.update();
        gameID = window.requestAnimationFrame(function () {
            _this.loop();
        });
    };

    Game.prototype.start = function () {
        let _that = this;
        _that.init();
        _that.loop();
    };

    Game.prototype.reStart = function () {
        let _this = this;
        Balls = [];
        _this.init();
        _this.update();
    };

    return Game;
};

function getRandom(a, b) {
    let num = Math.floor(Math.random() * (b - a) + a);
    num === 0 && ++num;
    return num;
}

export  {
    BallAnimate
};

