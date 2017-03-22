<template>
    <Layout description="练习">
        <div class="article-row row">
            <div class="article-summary col-sm-6">
                <Loading></Loading>
                <div>Loading加载</div>
            </div>
            <div class="article-summary col-sm-6">
                <ReactLogo size="12px"></ReactLogo>
                <div>LOGO for react</div>
            </div>
        </div>
        <div class="article-row row">
            <div class="article-summary col-sm-12">
                <ColorPicker></ColorPicker>
            </div>
        </div>
        <nav aria-label="..." class="content-pagination">
            <ul class="pagination">
                <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#" aria-label="Next"><span aria-hidden="true">»</span></a></li>
            </ul>
        </nav>
    </Layout>
</template>
<style rel="stylesheet/less" lang="less">
    .article-row {
        padding: 15px;
        border-bottom: 1px solid #ddd;
    }

    .article-summary {
        margin: auto;
        vertical-align: bottom;
    }

    .content-pagination {
        text-align: center;
    }

    .pagination {
        margin: 20px auto;
    }


</style>
<script>
    import {Layout, Loading, ReactLogo, ColorPicker} from '../../components';
    export default {
        name: 'home',
        components: {
            Loading,
            ReactLogo,
            ColorPicker,
            Layout,
        },
        created(){
            this.$store.commit('SET_NAV_BAR_INDEX',{
                index: 1
            });
        }
    }
</script>
