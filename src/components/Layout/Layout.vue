<template>
    <div class="layout">
        <NavBar></NavBar>
        <div class="layout-body container">
            <div class="layout-nav row">
                <div class="col-sm-4 time">
                    北京时间：{{date}}
                </div>
                <div class="col-sm-8 hidden-xs type">
                    分类：{{description}}
                </div>
            </div>
            <div class="layout-main row">
                <section class="layout-sidebar col-sm-4 hidden-xs">链接</section>
                <section class="layout-content col-sm-8 col-xs-12">
                    <slot></slot>
                </section>
            </div>
        </div>
        <footer class="layout-footer"></footer>
    </div>
</template>
<style>
    .layout-main {
        min-height: 800px;
        overflow: hidden;
        box-shadow: 0 0 0 1px #eee;
    }
    .layout-sidebar {
        margin-bottom: -10000px;
        padding-bottom: 10000px;
        background-color: #eee;
    }
    .layout-content {
        margin-bottom: -10000px;
        padding-bottom: 10000px;
    }

    .layout-footer {
        margin-top: 50px;
        height: 100px;
        line-height: 100px;
        background-color: #26272b;
    }
    .layout-body {
        position: relative;
        margin-top: -60px;
        background-color: #fff;
        z-index: 2;
    }
    .layout-nav>* {
        height: 60px;
        border-bottom: 1px solid #eeeeee;
    }

    .layout-nav .time {
        line-height: 60px;
        text-align: center;
        font-size: 20px;
        color: #fff;
        background-color: #62bbc3;
    }
    .layout-nav .type {
        line-height: 60px;
        font-size: 18px;
        color: #999;
    }
</style>
<script>
    import NavBar from '../NavBar/NavBar.vue';
    export default {
        name: 'layout',
        props: {
            description: {
                type: String,
                default: '',
                required: true,
            }

        },
        created: function () {
            this.date = this.FormatDate('yyyy-MM-dd hh:mm:ss');
            this.timer = setInterval(()=>{
                this.date = this.FormatDate('yyyy-MM-dd hh:mm:ss');
            },1000);
        },
        data: function () {
          return {
              timer: {},
              date: ''
          }
        },
        methods: {
            FormatDate(fmt) {
                // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
                // (new Date()).Format("yyyy-M-d h:m:s.S")  ==> 2006-7-2 8:9:4.18
                let _date = new Date();
                let o = {
                    "M+": _date.getMonth() + 1,
                    "d+": _date.getDate(),
                    "h+": _date.getHours(),
                    "m+": _date.getMinutes(),
                    "s+": _date.getSeconds(),
                    "q+": Math.floor((_date.getMonth() + 3) / 3),
                    "S": _date.getMilliseconds()
                };
                if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_date.getFullYear() + "").substr(4 - RegExp.$1.length));
                for (let k in o)
                    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
                return fmt;
            }
        },
        destroyed() {
            clearInterval(this.timer)
        },
        components: {
            NavBar
        }
    }
</script>
