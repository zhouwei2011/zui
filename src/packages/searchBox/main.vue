<template>
    <div
        :class="['zrx-search-box', extraClass, 'col-' + columns]"
        tabindex="-1"
        :style="`--rowHeight: ${rowHeight}px; --columnGap: ${gapX}px; --paddingX: ${paddingX}px; --totalHeight: ${totalHeight}px;`"
        @keydown.13.capture.stop
        @keyup.13="$emit('onEnter')"
        ref="container"
    >
        <slot name="inputer"></slot>
        <slot></slot>
        <div class="secondary-btns">
            <slot name="btn"></slot>
            <a class="btn" @click="onToggle" v-if="showToggle">
                <i class="zrx-icon-draw-hook" :reverse="stretched">
                    <i></i>
                    <i></i>
                </i>
            </a>
        </div>
    </div>
</template>

<script>
const defaultPaddingX = 16
const defaultMinInputWidth = 270
const defaultColumnGap = 32
export default {
    name: 'zrxSearchBox',
    props: {
        initialExpand: {
            type: Boolean,
            default: false
        },
        paddingX: {
            type: [String, Number],
            default: defaultPaddingX
        },
        minInputWidth: {
            type: [String, Number],
            default: defaultMinInputWidth
        },
        columnGap: {
            type: [String, Number],
            default: defaultColumnGap
        },
        preventDefaultToggle: {
            type: Boolean,
            default: false
        },
        showToggler: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            stretched: false,
            rowHeight: 0,
            totalHeight: 0,
            extraClass: '',
            columns: 0,
            mObserver: null,
            rObserver: null,
            childNodes: 0
        }
    },
    methods: {
        async init() {
            this.childNodes = this.$refs.container.childElementCount
            if (this.preventDefaultToggle) {
                this.extraClass = 'auto-height visible'
                return this.attachSimplifiedObserver()
            }
            await this.attachObserver()
            this.rowHeight = this.$refs.container.firstElementChild?.offsetHeight ?? 0
            this.extraClass = 'auto-height'
            this.$nextTick(() => {
                this.totalHeight = this.$refs.container.offsetHeight
                this.extraClass = ''
                if (this.initialExpand) {
                    setTimeout(() => (this.extraClass = 'trans-start heighted'), 0)
                }
            })
        },
        resetWhenChildChange() {
            this.childNodes = this.$refs.container.childElementCount
            this.rowHeight = this.$refs.container.firstElementChild?.offsetHeight ?? 0
            this.extraClass = 'auto-height'
            this.$nextTick(() => {
                const height = this.$refs.container.offsetHeight
                if (this.stretched) {
                    this.extraClass = 'heighted'
                    setTimeout(() => {
                        this.totalHeight = height
                        this.extraClass = 'trans-start heighted'
                    }, 0)
                } else {
                    this.totalHeight = height
                    this.extraClass = ''
                }
            })
        },
        setColumns() {
            if (this.childNodes) {
                const w = this.$refs.container.offsetWidth
                if (w < this.thresholds[0] && this.columns != 2) {
                    return (this.columns = 2)
                }
                if (w >= this.thresholds[0] && w < this.thresholds[1] && this.columns != 3) {
                    return (this.columns = 3)
                }
                if (w >= this.thresholds[1] && this.columns != 4) {
                    return (this.columns = 4)
                }
            }
        },
        attachObserver() {
            this.mObserver = new MutationObserver(this.resetWhenChildChange)
            this.mObserver.observe(this.$refs.container, {
                childList: true,
                attributes: false
            })
            // 等到@container（容器查询）实现，就不用ResizeObserver了
            let width = this.$refs.container.offsetWidth
            this.rObserver = new ResizeObserver(entries => {
                if (this.$refs.container.offsetWidth == width) return
                this.setColumns()
                if (this.stretched) {
                    this.resetWhenChildChange()
                } else {
                    this.extraClass = 'auto-height'
                    this.$nextTick(() => {
                        this.totalHeight = this.$refs.container.offsetHeight
                        this.extraClass = ''
                    })
                }
                width = this.$refs.container.offsetWidth
            })
            this.setColumns()
            this.rObserver.observe(this.$refs.container)
            this.$refs.container.addEventListener('transitionend', evt => {
                if (evt.srcElement == this.$refs.container) {
                    this.$emit('transitionend', { stretched: this.stretched, height: this.$refs.container.clientHeight }, evt)
                }
            })
            return Promise.resolve()
        },
        attachSimplifiedObserver() {
            this.mObserver = new MutationObserver(() => {
                this.childNodes = this.$refs.container.childElementCount
                this.setColumns()
            })
            this.mObserver.observe(this.$refs.container, {
                childList: true,
                attributes: false
            })
            this.setColumns()
        },
        onToggle() {
            this.stretched = !this.stretched
            this.$emit('change', this.stretched)
            if (this.preventDefaultToggle) return false
            if (this.stretched) {
                this.extraClass = 'auto-height'
                this.$nextTick(() => {
                    const height = this.$refs.container.offsetHeight
                    this.extraClass = ''
                    setTimeout(() => {
                        this.totalHeight = height
                        this.extraClass = 'trans-start heighted'
                    }, 0)
                })
            } else {
                this.extraClass = 'trans-start'
            }
        },
        focus() {
            this.$refs.container.focus()
        }
    },
    created() {
        this.stretched = this.initialExpand
    },
    mounted() {
        this.init()
    },
    computed: {
        minWidth() {
            if (typeof this.minInputWidth == 'string') {
                const v = this.minInputWidth.replace(/px(?=$)/i, '') - 0
                return Number.isNaN(v) ? defaultMinInputWidth : v
            }
            return this.minInputWidth
        },
        gapX() {
            if (typeof this.columnGap == 'string') {
                const v = this.columnGap.replace(/px(?=$)/i, '') - 0
                return Number.isNaN(v) ? defaultColumnGap : v
            }
            return this.columnGap
        },
        padding() {
            if (typeof this.paddingX == 'string') {
                const v = this.paddingX.replace(/px(?=$)/i, '') - 0
                return 2 * (Number.isNaN(v) ? defaultPaddingX : v)
            }
            return 2 * this.paddingX
        },
        thresholds() {
            const getClientWidth = n => this.minWidth * n + this.gapX * (n - 1) + this.padding
            return [getClientWidth(3), getClientWidth(4)]
        },
        showToggle() {
            return this.preventDefaultToggle ? this.showToggler : this.totalHeight > this.rowHeight && this.showToggler
        }
    },
    beforeDestroy() {
        this.mObserver && this.mObserver.disconnect()
        this.rObserver && this.rObserver.disconnect()
    }
}
</script>
