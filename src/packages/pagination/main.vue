<template>
    <div class="zrx-pagination">
        <div :class="[position]" v-for="position in ['left', 'right']" :style="computeWrapStyle(position)">
            <template v-for="(item, index) in layoutComponent.filter(component => component.position === position)">
                <!-- 每页显示个数选择器 -->
                <el-select
                    size="small"
                    :class="['sizes']"
                    v-if="item.type === 'sizes' && ['normal', 'small'].includes(screenWidth) && !['small', 'mini'].includes(pagerSize)"
                    v-bind:value="pageSize"
                    placeholder="请选择"
                    v-on:change="sizeChange"
                    v-bind:key="index"
                    :popper-class="popperClass"
                    v-bind:disabled="disabled"
                >
                    <el-option v-if="typeof pageSizes === 'number'" :label="`${pageSizes}条/页`" :value="pageSizes"></el-option>
                    <template v-else-if="showPageSizes">
                        <el-option v-for="(n, i) in pageSizes" :key="i" :label="`${n}条/页`" :value="n"></el-option>
                    </template>
                </el-select>
                <!-- 上一页按钮 -->
                <div :class="['prev-group', screenWidth]" v-if="item.type === 'prev'">
                    <el-button
                        :class="['first-page-btn', background && 'background']"
                        v-on:click="clickFirstPage"
                        v-bind:key="`first-page-btn-${index}`"
                        v-bind:disabled="currentPage <= 1 || disabled"
                        v-if="['small', 'mini'].includes(screenWidth) && !['small', 'mini'].includes(pagerSize)"
                    >
                        <i class="icon"></i>
                    </el-button>
                    <el-button
                        :class="[background && 'background', 'prev-page-btn']"
                        v-on:click="prevClick"
                        v-bind:key="`prev-page-btn-${index}`"
                        v-bind:disabled="currentPage <= 1 || disabled"
                    >
                        <i v-if="!prevText" class="icon"></i>
                        <template v-else>{{ prevText }}</template>
                    </el-button>
                </div>
                <!-- 下一页按钮 -->
                <div :class="['next-group', screenWidth]" v-if="item.type === 'next'">
                    <el-button
                        :class="[background && 'background', 'next-page-btn']"
                        v-on:click="nextClick"
                        v-bind:key="`next-page-btn-${index}`"
                        v-bind:disabled="currentPage >= Math.ceil(total / pageSize) || disabled"
                    >
                        <i v-if="!nextText" class="icon"></i>
                        <template v-else>{{ nextText }}</template>
                    </el-button>
                    <el-button
                        :class="['last-page-btn', background && 'background']"
                        v-on:click="clickLastPage"
                        v-bind:key="`last-page-btn-${index}`"
                        v-bind:disabled="currentPage >= Math.ceil(total / pageSize) || disabled"
                        v-if="['small', 'mini'].includes(screenWidth) && !['small', 'mini'].includes(pagerSize)"
                    >
                        <i class="icon"></i>
                    </el-button>
                </div>
                <!-- 页码列表 pager -->
                <ul :class="['pager']" v-if="item.type === 'pager' && ['normal'].includes(screenWidth) && !['mini'].includes(pagerSize)" v-bind:style="computePagerStyle()">
                    <li
                        :class="['pager-item', background && 'background', n.type, n.active && 'active', disabled && 'disabled']"
                        v-for="(n, i) in pagerNums"
                        v-on:click="clickPager(n, i)"
                    >
                        {{ n.content }}
                    </li>
                </ul>
                <!-- 跳页元素 jumper -->
                <div :class="['jumper']" v-if="item.type === 'jumper' && !['small', 'mini'].includes(pagerSize)" v-bind:key="index">
                    <el-input-number
                        ref="jumper"
                        size="small"
                        type="number"
                        v-bind:value="currentPage"
                        v-on:change="currentChange"
                        :min="1"
                        :max="Math.ceil(total / pageSize)"
                        step-strictly
                        :step="1"
                        :controls="false"
                        v-bind:disabled="disabled"
                    ></el-input-number>
                    <span class="total-page">/{{ Math.ceil(total / pageSize) || 1 }}</span>
                    <el-button class="jump-btn" :class="[background && 'background']" v-bind:disabled="disabled">跳转</el-button>
                </div>
                <!-- 表示总条目数 total -->
                <span :class="['total']" v-if="item.type === 'total' && ['normal', 'small'].includes(screenWidth) && !['small', 'mini'].includes(pagerSize)" v-bind:key="index">
                    共{{ total }}条
                </span>
                <!-- slot 内容 -->
                <div :class="['slot']" v-if="item.type === 'slot' && ['normal', 'small'].includes(screenWidth) && !['small', 'mini'].includes(pagerSize)">
                    <slot></slot>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    name: 'zrxPagination',
    props: {
        // 是否使用小型分页样式
        // small: {
        // 	type: [Boolean],
        // 	default: function () {
        // 		return false
        // 	}
        // },
        pagerSize: {
            type: [String],
            default: function () {
                return ''
                // return 'small'
                // return 'mini'
            }
        },
        // 是否为分页按钮添加背景色
        background: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        // 每页显示条目个数
        pageSize: {
            type: [Number],
            default: function () {
                return 10
            }
        },
        // 总条目数
        total: {
            type: [Number],
            default: function () {
                return 0
            }
        },
        // 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性
        // pageCount: {
        // 	type: [Number],
        // 	default: function () {
        // 		return 0
        // 	}
        // },
        // 页码按钮的数量，当总页数超过该值时会折叠
        pagerCount: {
            type: [Number],
            default: function () {
                return 7
            }
        },
        // 当前页数
        currentPage: {
            type: [Number],
            default: function () {
                return 1
            }
        },
        // 组件布局，子组件名用逗号分隔，可选值 sizes, prev, pager, next, jumper, ->, total, slot
        layout: {
            type: [String],
            default: function () {
                return 'prev, pager, next, jumper, total'
            }
        },
        // 每页显示个数选择器的选项设置
        pageSizes: {
            type: [Number, Array],
            default: function () {
                return [10, 20, 30, 40, 50, 100]
            }
        },
        // 每页显示个数选择器的下拉框类名
        popperClass: {
            type: [String],
            default: function () {
                return ''
            }
        },
        // 替代图标显示的上一页文字
        prevText: {
            type: [String],
            default: function () {
                return ''
            }
        },
        // 替代图标显示的下一页文字
        nextText: {
            type: [String],
            default: function () {
                return ''
            }
        },
        // 是否禁用
        disabled: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        // 只有一页时是否隐藏
        // hideOnSinglePage: {
        // 	type: [Boolean],
        // 	default: function () {
        // 		return false
        // 	}
        // },
        // 类型
        // 不传或者为空的时候，默认使用宽屏模式 (adaptiveWidth 为 true 组件自适应宽度)
        // 传 small 的时候，使用小屏模式 (此时 adaptiveWidth 将失效)
        // 传 mini 的时候，使用 mini 屏模式 (此时 adaptiveWidth 将失效)
        // type: {
        // 	type: [String],
        // 	default: function () {
        // 		return ''
        // 	}
        // },
        // 是否自适应宽度
        adaptiveWidth: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        // 小屏模式触发边界宽度
        smallWidth: {
            type: [Number],
            default: function () {
                return 1440
            }
        },
        // mini 屏模式触发边界宽度
        miniWidth: {
            type: [Number],
            default: function () {
                return 1366
            }
        },
        pagerScreenWidth: {
            type: [String],
            default: function () {
                return 'normal'
                // return 'small'
                // return 'mini'
            }
        }
    },
    watch: {
        currentPage: function (newVal, oldVal) {
            const originNewVal = newVal
            const totalPager = Math.ceil(this.total / this.pageSize) || 1
            newVal < 1 && (newVal = 1)
            newVal > totalPager && (newVal = totalPager)
            if (originNewVal !== newVal) {
                this.$emit('current-change', newVal)
            }
            // if (newVal !== oldVal && this.currentPageWatchEnable && flag) {
            //     this.$emit('current-change', newVal)
            // } else if () {}
            // this.currentPageWatchEnable = true
        },
        pageSize: function (newVal, oldVal) {
            if (newVal !== oldVal && this.pageSizeWatchEnable) {
                this.$emit('size-change', newVal)
                if (this.currentPage !== 1) {
                    // this.currentPageWatchEnable = false
                    this.$emit('current-change', 1)
                }
            }
            this.pageSizeWatchEnable = true
        }
    },
    data: function () {
        return {
            screenWidth: '',
            // currentPageWatchEnable: true,
            pageSizeWatchEnable: true,
            // size: 1,
            // current: 1,
            // 分页器布局组件
            layoutComponent: []
        }
    },
    computed: {
        pagerNums: function () {
            const pagerCount = this.pagerCount < 5 ? 5 : this.pagerCount
            const totalPager = Math.ceil(this.total / this.pageSize) || 1
            const pagerList = []
            if (totalPager <= pagerCount) {
                for (let i = 1; i <= totalPager; i++) {
                    pagerList.push({
                        type: 'num',
                        active: i === this.currentPage,
                        content: i
                    })
                }
            } else {
                let prevCount = Math.ceil((pagerCount - 1) / 2)
                let nextCount = pagerCount - 1 - prevCount
                let flagIndex
                // if (this.current - prevCount > 1 && this.current + nextCount) {
                // if (this.current + nextCount > totalPager) {
                // 	nextCount = totalPager - this.current
                // 	prevCount = pagerCount - 1 - nextCount
                // }
                // 选中页前面足够放不下
                if (this.currentPage - prevCount <= 1) {
                    for (let i = 1; i < this.currentPage; i++) {
                        pagerList.push({ type: 'num', active: false, content: i })
                    }
                    pagerList.push({ type: 'num', active: true, content: this.currentPage })
                } else {
                    pagerList.push({ type: 'num', active: false, content: 1 })
                    pagerList.push({ type: 'prev', active: false, content: '...' })
                    let len = prevCount - 2
                    if (this.currentPage + nextCount > totalPager) {
                        len = pagerCount - (totalPager - this.currentPage) - 3 - (pagerCount === 5 ? 0 : 1)
                        // len = len + nextCount - (totalPager - this.current)
                        // len = len + nextCount - (totalPager - this.current)
                    }
                    for (let i = 0; i < len; i++) {
                        pagerList.push({ type: 'num', active: false, content: this.currentPage - len + i })
                        flagIndex === undefined && (flagIndex = pagerList.length - 1)
                    }
                    pagerList.push({ type: 'num', active: true, content: this.currentPage })
                }
                const len = pagerCount - pagerList.length - 2
                for (let i = 0; i < len; i++) {
                    this.currentPage + i + 1 < totalPager && pagerList.push({ type: 'num', active: false, content: this.currentPage + i + 1 })
                }
                // 选中页前面足够放得下
                if (this.currentPage + nextCount < totalPager) {
                    pagerList.push({ type: 'next', active: false, content: '...' })
                }
                if (this.currentPage + nextCount === totalPager) {
                    pagerList.push({ type: 'num', active: false, content: pagerList[pagerList.length - 1].content + 1 })
                }
                this.currentPage < totalPager && pagerList.push({ type: 'num', active: false, content: totalPager })
                if (pagerList.length < pagerCount) {
                    const spliceArr = []
                    if (flagIndex !== undefined) {
                        for (let i = 0; i < pagerCount - pagerList.length; i++) {
                            spliceArr.unshift({
                                type: 'num',
                                active: false,
                                content: pagerList[flagIndex].content - i - 1
                            })
                        }
                    }
                    pagerList.splice(flagIndex, 0, ...spliceArr)
                }
            }
            return pagerList
        },
        showPageSizes() {
            return this.pageSizes instanceof Array
        }
    },
    methods: {
        clickLastPage: function () {
            const currentPage = Math.ceil(this.total / this.pageSize)
            // this.currentPageWatchEnable = false
            this.$emit('current-change', currentPage)
            this.$emit('next-click', currentPage)
        },
        clickFirstPage: function () {
            // this.currentPageWatchEnable = false
            this.$emit('current-change', 1)
            this.$emit('prev-click', 1)
        },
        clickPager: function (item, index) {
            if (this.disabled) {
                return false
            }
            if (item.type === 'num') {
                // this.current = item.content
                // this.currentPageWatchEnable = false
                this.$emit('current-change', item.content)
            }
            if (item.type === 'prev') {
                let current = this.pagerNums[index + 1].content - 1
                current = current < 1 ? 1 : current
                // this.current = current < 1 ? 1 : current
                // this.currentPageWatchEnable = false
                this.$emit('current-change', current)
            }
            if (item.type === 'next') {
                let current = this.pagerNums[index - 1].content + 1
                const totalPager = Math.ceil(this.total / this.pageSize) || 1
                current = current > totalPager ? totalPager : current
                // this.currentPageWatchEnable = false
                this.$emit('current-change', current)
            }
        },
        computePagerStyle: function () {
            return {
                gridTemplateColumns: `repeat(${this.pagerNums.length}, minmax(30px, auto))`
            }
        },
        computeWrapStyle: function (position) {
            return {
                gridTemplateColumns: this.layoutComponent
                    .filter(item => item.position === position)
                    .map(item => {
                        switch (item.type) {
                            case 'pager':
                                return '1fr'
                            // case 'prev':
                            // case 'next':
                            // 	return '30px'
                            case 'sizes':
                                // return 'auto'
                                return '100px'
                            default:
                                return 'min-content'
                        }
                    })
                    .join(' ')
            }
        },
        // pageSize 改变时会触发
        sizeChange: function (pageSize) {
            // this.current = 1
            this.pageSizeWatchEnable = false
            this.$emit('size-change', pageSize)
            if (this.currentPage !== 1) {
                // this.currentPageWatchEnable = false
                this.$emit('current-change', 1)
            }
        },
        // currentPage 改变时会触发
        currentChange: function (num = 1) {
            // this.current = num
            this.$nextTick(() => this.$emit('current-change', num))
        },
        // 用户点击上一页按钮改变当前页后触发
        prevClick: function (pageNum) {
            const currentPage = this.currentPage - 1 < 1 ? 1 : this.currentPage - 1
            // this.currentPageWatchEnable = false
            // this.$nextTick(() => this.$emit('current-change', currentPage))
            // this.$nextTick(() => this.$emit('prev-click', this.current))
            this.$emit('current-change', currentPage)
            this.$emit('prev-click', currentPage)
        },
        // 用户点击下一页按钮改变当前页后触发
        nextClick: function (pageNum) {
            // const originCurrent = this.current
            // this.current = this.current + 1
            // this.$nextTick(() => this.$emit('current-change', this.current))
            // this.$nextTick(() => originCurrent !== this.current && this.$emit('next-click', this.current))
            // this.currentPageWatchEnable = false
            this.$emit('current-change', this.currentPage + 1)
            this.$emit('next-click', this.currentPage + 1)
        },
        computeScreenWidth: function () {
            if (window.innerWidth < this.miniWidth) {
                this.screenWidth = 'mini'
            } else if (window.innerWidth < this.smallWidth) {
                this.screenWidth = 'small'
            } else {
                this.screenWidth = 'normal'
            }
        }
    },
    mounted: function () {
        const layoutComponent = this.layout.split(',').map(n => n.trim())
        const rightIndex = layoutComponent.indexOf('->')
        this.layoutComponent = layoutComponent
            .map((type, index) => {
                return { type, position: rightIndex === -1 ? 'left' : index < rightIndex ? 'left' : 'right' }
            })
            .filter(item => item.type !== '->')
        // this.size = this.pageSize
        const totalPager = Math.ceil(this.total / this.pageSize) || 1
        // this.current = this.currentPage < 1 ? 1 : this.currentPage > totalPager ? totalPager : this.currentPage
        this.currentPage < 1 && this.$emit('current-change', 1)
        this.currentPage > totalPager && this.$emit('current-change', totalPager)
        this.screenWidth = this.pagerScreenWidth
        // 如果不指定分页器尺寸，并且设置宽度自适应的话，注册 resize 事件
        if (!['small', 'mini'].includes(this.pagerSize) && this.adaptiveWidth && !['small', 'mini'].includes(this.pagerScreenWidth)) {
            window.addEventListener('resize', this.computeScreenWidth)
            this.computeScreenWidth()
        }
    },
    beforeDestroy: function () {
        if (!this.type && this.adaptiveWidth) {
            window.removeEventListener('resize', this.computeScreenWidth)
        }
    }
}
</script>
<style lang="scss" scoped></style>
