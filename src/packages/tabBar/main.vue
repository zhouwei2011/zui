<template>
    <div :class="['zrx-tab-bar', pattern]" :style="`--tab-width: ${tabShowWidth}px; --tab-columns: ${maxTabsShow}`" v-if="tabs.length">
        <template v-if="pattern == 'scroll'">
            <button class="btn svg-icon zrx-icon-left-angle" @click="flipPrev" :disabled="leftIndex <= 0"></button>
            <button class="btn svg-icon zrx-icon-double-angle-left" @click="skipPrev" :disabled="leftIndex <= 0"></button>
            <button class="btn svg-icon zrx-icon-double-angle-right" @click="skipNext" :disabled="leftIndex >= maxLeftIndex"></button>
            <button class="btn svg-icon zrx-icon-right-angle" @click="flipNext" :disabled="leftIndex >= maxLeftIndex"></button>
        </template>
        <div class="scroller" ref="scroller">
            <p
                :class="['tab', activeTab.value === n[setting.key] && 'selected']"
                v-for="(n, i) in listData"
                :key="i"
                :title="n[setting.label]"
                @click="handleToggleTab(n)"
                @mouseenter="mouseFeedback && tabFocus(n)"
                @mouseleave="mouseFeedback && tabBlur(n)"
                :ref="n.el"
            >
                <slot name="tab" :tab-data="n"></slot>
                <span v-if="!$scopedSlots.tab">{{ n[setting.label] }}</span>
            </p>
            <!-- <slot v-for="(item, index) in tabs" name="menu" :tab-data="item" :index="index"></slot> -->
            <span class="ghost" :style="`left:${tabShift}px;width:${tabWidth}px;`"></span>
        </div>
        <el-select v-model="toggler" @change="$emit('input', $event)" v-if="pattern == 'toggle'">
            <span slot="prefix">全部</span>
            <el-option v-for="n in listData" :key="n[setting.key]" :value="n[setting.key]" :label="n[setting.label]"></el-option>
        </el-select>
    </div>
</template>

<script>
const defaultProps = {
    label: 'label',
    key: 'value'
}
const maxStaticTabWidth = 192
const defaultScrollTabWidth = 100
export default {
    name: 'zrxTabBar',
    props: {
        tabs: Array,
        value: [String, Number],
        mouseFeedback: {
            type: Boolean,
            default: false
        },
        manuallyInit: {
            type: Boolean,
            default: false
        },
        props: {
            type: Object,
            default() {
                return {}
            }
        },
        maxTabsShow: {
            type: [Number],
            default: 5
        },
        mode: {
            // static, scroll, toggle
            type: String,
            default: 'static'
        },
        maxScrollTabs: {
            type: [Number],
            default: 15
        },
        staticTabWidth: {
            type: [Number, String],
            default: maxStaticTabWidth
        },
        scrollTabWidth: {
            type: [Number, String],
            default: defaultScrollTabWidth
        }
    },
    data() {
        return {
            listData: [],
            activeTab: {
                el: '',
                name: '',
                shift: 0,
                tab: '',
                width: 0
            },
            tabShift: 0,
            tabWidth: 0,
            selectedCache: [],
            leftIndex: 0,
            toggler: ''
        }
    },
    watch: {
        value(newv) {
            this.setCurrentSelected(newv)
            this.pattern == 'toggle' && (this.toggler = newv)
        },
        tabs: {
            handler() {
                this.init()
            },
            deep: true
        }
    },
    methods: {
        async init() {
            await this.extendList()
            this.setShift()
            this.setCurrentSelected(this.value)
            if (this.pattern == 'toggle') {
                this.toggler = this.value
            }
        },
        setCurrentSelected(v) {
            const targetIndex = this.listData.findIndex(item => item[this.setting.key] === v)
            if (targetIndex != -1) {
                if (targetIndex - this.leftIndex > 4 || targetIndex < this.leftIndex) {
                    this.skipTo(targetIndex)
                }
                this.setSelected(this.listData[targetIndex])
            }
        },
        extendList() {
            this.listData = this.tabs.map((item, index) => {
                return { ...item, shift: 0, el: `tab_${index}`, width: 0 }
            })
            return Promise.resolve()
        },
        setShift() {
            for (const i of this.listData) {
                i.shift = this.$refs[i.el][0].offsetLeft
                i.width = this.$refs[i.el][0].offsetWidth
            }
        },
        setSelected(tab) {
            if (this.activeTab == tab) {
                return false
            }
            this.activeTab = tab
            this.tabFocus(tab)
            this.selectedCache.push({
                shift: tab.shift,
                width: tab.width
            })
            this.selectedCache.splice(2, 1)
            this.$emit('input', tab[this.setting.key])
        },
        handleToggleTab(tab) {
            if (this.activeTab == tab) return
            this.setSelected(tab)
            this.$emit('change', tab)
        },
        tabFocus(tab) {
            this.tabShift = tab.shift
            this.tabWidth = tab.width
        },
        tabBlur() {
            this.tabShift = this.activeTab.shift
            this.tabWidth = this.activeTab.width
        },
        skipTo(preferredIndex) {
            this.leftIndex = Math.min(Math.max(0, preferredIndex - this.medianIndex), this.maxLeftIndex)
            this.$refs.scroller.scrollTo({ left: this.scrollLeft, behavior: 'smooth' })
        },
        flipPrev() {
            if (this.leftIndex == 0) {
                return false
            }
            const visibleRightIndex = this.leftIndex + (this.maxTabsShow - 1)
            const visibleRight = this.listData[visibleRightIndex]
            if (visibleRight == this.activeTab) {
                setTimeout(() => this.setSelected(this.listData[visibleRightIndex - 1]), 200)
            }
            this.leftIndex--
            this.$refs.scroller.scrollTo({ left: this.scrollLeft, behavior: 'smooth' })
        },
        skipPrev() {
            if (this.leftIndex == 0) {
                return false
            }
            const visibleRightIndex = this.leftIndex + (this.maxTabsShow - 1)
            const newVisibleRightIndex = Math.max(visibleRightIndex - this.maxTabsShow, this.maxTabsShow - 1)
            this.leftIndex = newVisibleRightIndex - (this.maxTabsShow - 1)
            setTimeout(() => this.setSelected(this.listData[newVisibleRightIndex]), 200)
            this.$refs.scroller.scrollTo({ left: this.scrollLeft, behavior: 'smooth' })
        },
        flipNext() {
            if (this.leftIndex == this.maxLeftIndex) {
                return false
            }
            const visibleLeft = this.listData[this.leftIndex]
            if (visibleLeft == this.activeTab) {
                setTimeout(() => this.setSelected(this.listData[this.leftIndex]), 200)
            }
            this.leftIndex++
            this.$refs.scroller.scrollTo({ left: this.scrollLeft, behavior: 'smooth' })
        },
        skipNext() {
            if (this.leftIndex == this.maxScrollLeft) {
                return false
            }
            this.leftIndex = Math.min(this.leftIndex + this.maxTabsShow, this.maxLeftIndex)
            setTimeout(() => this.setSelected(this.listData[this.leftIndex]), 200)
            this.$refs.scroller.scrollTo({ left: this.scrollLeft, behavior: 'smooth' })
        }
    },
    created() {
        if (this.maxScrollTabs <= this.maxTabsShow) {
            console.error('tab-bar: 【参数错误】maxScrollTabs小于等于maxTabsShow')
        }
    },
    mounted() {
        this.manuallyInit || this.init()
    },
    computed: {
        setting() {
            return Object.assign({}, defaultProps, this.props)
        },
        pattern() {
            if (this.listData.length <= this.maxTabsShow) {
                return 'static'
            } else if (this.listData.length > this.maxTabsShow && this.listData.length <= this.maxScrollTabs) {
                if (['scroll', 'toggle'].includes(this.mode)) {
                    return this.mode
                } else {
                    return 'scroll'
                }
            } else {
                if (['scroll', 'toggle'].includes(this.mode)) {
                    return this.mode
                } else {
                    return 'toggle'
                }
            }
        },
        maxLeftIndex() {
            return Math.max(0, this.listData.length - this.maxTabsShow)
        },
        medianIndex() {
            return Math.floor(this.maxTabsShow / 2)
        },
        scrollLeft() {
            return this.leftIndex * this.tabWidthScroll
        },
        tabWidthStatic() {
            if (typeof this.staticTabWidth == 'string') {
                const v = this.staticTabWidth.replace(/px(?=$)/i, '') - 0
                return Number.isNaN(v) ? defaultScrollTabWidth : v
            }
            return this.staticTabWidth
        },
        tabWidthScroll() {
            if (typeof this.scrollTabWidth == 'string') {
                const v = this.scrollTabWidth.replace(/px(?=$)/i, '') - 0
                return Number.isNaN(v) ? defaultScrollTabWidth : v
            }
            return this.scrollTabWidth
        },
        tabShowWidth() {
            if (this.pattern == 'static') {
                return this.tabWidthStatic
            } else {
                return this.tabWidthScroll
            }
        }
    }
}
</script>
