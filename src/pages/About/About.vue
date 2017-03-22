<template>
    <Layout description="About Me">
        <div class="about">
            <div class="wrapper about-me">
                <p class="title">About Me</p>
                <p class="info">
                    <img src="./../../assets/mr.png" alt="小小鸣人">
                    My name is HaoJun Wen(文皓均),come from SiChuan KaiJiang county. In 1991-06,at three o'clock
                    P.M, I was born of a peasant family with crying. At present,I am a web engineer, graduated from
                    SichuanLiGong University Of Science and Technology, and now am employed by ChuangJia in ChengDu. I am
                    enjoy reading book, programming, surfing the Internet, traveling,bike-riding.
                </p>
                <p class="info">Life as the weather, sometimes sunshine, sometimes calm, sometimes wind,sometimes
                    rain,,sometimes destroy everything.The website was,is and will be the
                    window which recording the colorful of my life.</p>
            </div>
        </div>
    </Layout>
</template>
<style rel="stylesheet/less" lang="less">
    .about {
        .title {
            margin: 2em;
            font-weight:600;
            font-size: 20px;
            text-align: center;
            line-height: 2;
        }
        .info {
            margin-top: 10px;
            font-size: 16px;
            text-indent: 2em;
            text-align: justify;
            img {
                float: left;
                width: 100px;
                height: 100px;
                margin: 10px 15px;
                border-radius: 50%;
                cursor: help;
            }
        }

    }
</style>

<script>
    import {Layout} from '../../components';
    export default {
        name: 'about',
        components: {
            Layout
        },
        created() {
            this.$store.commit('SET_NAV_BAR_INDEX',{
                index: 4
            });
        },
    }
</script>
