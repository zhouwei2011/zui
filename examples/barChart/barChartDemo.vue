<template>
    <div class="bar-chart-demo">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <p class="subtitle">分行式横向柱状图带数值</p>
            <div class="gallery">
                <zrx-bar-chart :echartData="echartData"></zrx-bar-chart>
            </div>
            <h2 class="title"></h2>
            <p class="subtitle">横向柱状图带数值</p>
            <div class="gallery">
                <zrx-bar-chart isHorizontal :echartData="echartData"></zrx-bar-chart>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">x轴显示的段数</h2>
            <div class="gallery">
                <zrx-bar-chart :echartData="echartData" :xAxisNum="7"></zrx-bar-chart>
            </div>
            <div class="describe">xAxisNum, 数字类型,默认为5</div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">前几条横柱高亮颜色</h2>
            <div class="gallery">
                <zrx-bar-chart :echartData="echartData" :lightNum="3"></zrx-bar-chart>
            </div>
            <div class="describe">lightNum, 数字类型,默认为1</div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">页面固定展示几项数据</h2>
            <div class="gallery">
                <zrx-bar-chart :echartData="echartDataOne" :itemNum="5"></zrx-bar-chart>
            </div>
            <div class="describe">itemNum, 数字类型,默认不传，按每一项的高度itemHeight占据页面，超出页面可以滚动；传入的数据需要过滤成itemNum的条数</div>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'dropTreeDemo',
    data() {
        return {
            echartData: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局',
                    '市生态环境县委分局',
                    '市生态环境县委分局'
                ],
                seriesData: [2440, 1000, 600, 400, 300, 200, 100]
            },
            echartDataOne: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局'
                ],
                seriesData: [2440, 1000, 600, 400, 300]
            }
        }
    }
}
</script>

<style scoped lang="scss">
.bar-chart-demo {
    h2 {
        margin: 20px 0;
    }
    .gallery {
        width: 600px;
        height: 300px;
    }
}
</style>