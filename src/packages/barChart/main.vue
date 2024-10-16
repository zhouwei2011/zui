<!-- 分行式横向柱状图 -->
<template>
    <div :class="['zrx-bar-chart', isHorizontal && 'zrx-bar-chart-horizontal']">
        <div class="zrx-bar-chart-content" ref="chartContent" v-if="echartData.xAxisData.length">
            <div class="zrx-bar-chart-scroll-box" :style="computedScrollBoxStyle()">
                <div
                    class="zrx-bar-chart__item"
                    v-for="(xAxis, index) in echartData.xAxisData"
                    :key="'content' + index"
                    :style="!itemNum ? `height: ${itemHeight}px` : ``"
                    @mouseenter="mouseenter(index)"
                    @mouseleave="mouseleave(index)"
                >
                    <div class="zrx-bar-chart__left">
                        <span class="zrx-bar-chart__title" :title="xAxis">{{ xAxis }}</span>
                    </div>
                    <div class="zrx-bar-chart__right">
                        <div
                            :class="['zrx-bar-chart__bar', index < lightNum && 'light']"
                            :ref="`bar-${index}`"
                            :style="`min-width:${seriesPercent[index] ? 2 : 0}px;width:${seriesPercent[index]}%;`"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="zrx-bar-chart-value-box" v-if="indexBar != -1" :style="computedValueBoxStyle()">{{ echartData.seriesData[indexBar] | thousandFormat }}</div>
        <div class="zrx-bar-chart-axis" v-if="echartData.xAxisData.length">
            <div class="zrx-bar-chart__item" v-for="(xAxis, index) in xAxisNum + 1" :key="'xAxis' + index">
                <div class="zrx-bar-chart__bottom">{{ ((xAxis - 1) * (maxWidth / xAxisNum)) | thousandFormat }}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'zrxBarChart',
    components: {},
    props: {
        echartData: {
            type: [Object],
            default: () => {
                return {
                    xAxisData: [],
                    seriesData: []
                }
            }
        },
        xAxisNum: {
            // x轴显示几段
            type: [Number],
            default: () => 5
        },
        lightNum: {
            // 前几条横柱高亮颜色
            type: [Number],
            default: () => 1
        },
        itemHeight: {
            // 每一项的高度
            type: [Number],
            default: () => 48
        },
        itemNum: {
            // 页面固定展示几项数据
            type: [Number],
            default: () => 0
        },
        isHorizontal: {
            // 文字和柱状图左右排布
            type: [Boolean],
            default: () => false
        }
    },
    data() {
        return {
            seriesPercent: [],
            maxWidth: 0,
            indexBar: -1
        }
    },
    watch: {
        echartData: {
            handler() {
                this.init()
            },
            deep: true
        }
    },
    created() {},
    mounted() {
        this.init()
    },
    methods: {
        init() {
            const num = this.echartData.seriesData
            let maxNum = Math.max(...num)
            const temp = parseInt(Math.log10(maxNum))
            maxNum = (parseInt(maxNum / Math.pow(10, temp)) + 1) * Math.pow(10, temp)
            const singleNum = Math.ceil(Math.ceil(maxNum / this.xAxisNum) / Math.pow(10, temp - 1))
            maxNum = singleNum * this.xAxisNum * Math.pow(10, temp - 1)
            this.maxWidth = maxNum
            const arr = []
            this.echartData.seriesData.forEach(item => {
                arr.push((item / this.maxWidth) * 100)
            })
            this.seriesPercent = arr
        },
        // 计算页面固定展示几项数据的样式还是滚动
        computedScrollBoxStyle() {
            const style = !this.itemNum
                ? ``
                : `display: grid;
                    grid-template-columns: calc(100%);
                    grid-template-rows: repeat(${this.itemNum}, 1fr);
            `
            return style
        },
        mouseenter(index) {
            this.indexBar = index
        },
        mouseleave(index) {
            this.indexBar = -1
        },
        computedValueBoxStyle() {
            if (!this.$refs['bar-' + this.indexBar]) return
            const barRef = this.$refs['bar-' + this.indexBar][0]
            const scrollTop = this.$refs.chartContent.scrollTop
            const numWidth = (this.echartData.seriesData[this.indexBar] + '').length * 10 + 8
            let style = ``
            let left = 0
            let top = 0
            let transform = ''
            if (this.isHorizontal) {
                const rightNodeWidth = barRef.parentNode.offsetWidth
                const rleft = (rightNodeWidth * this.seriesPercent[this.indexBar]) / 100
                left = rleft + numWidth > rightNodeWidth + 20 ? rightNodeWidth + 90 + 20 - numWidth : rleft + 90
                top = barRef.offsetTop
                transform = `translate(8px, 0)`
            } else {
                const rightNodeWidth = barRef.parentNode.offsetWidth
                const rleft = (rightNodeWidth * this.seriesPercent[this.indexBar]) / 100
                if (rleft - numWidth / 2 < 0) {
                    left = 0
                    transform = `translate(0, -20px)`
                } else {
                    left = rleft
                    transform = `translate(-50%, -20px)`
                }
                top = barRef.offsetTop
            }
            style = `left: ${left}px;top: ${top - scrollTop}px;transform: ${transform}`
            return style
        }
    },
    computed: {},
    filters: {
        thousandFormat(val) {
            // 如果是空，则返回空
            if ([null, undefined, '', NaN, Infinity, -Infinity].includes(val)) {
                return ''
            }
            return Math.ceil(val)
                .toString()
                .replace(/(\d{1,3})(?=(\d{3})+(\.\d*)?$)/g, '$&,')
        }
    }
}
</script>
