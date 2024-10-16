<script>
function renderContent(h, attributeObj, children) {
    if (this.shiftMode == 'scroll') {
        return (
            <div class="zrx-tab-content scroll" style={{ '--shift': this.shift }} stretch={this.stretch}>
                <div class="scroller" ref="box">
                    {this.$slots.default}
                </div>
            </div>
        )
    } else if (this.shiftMode == 'v-if') {
        if (!this.$slots.default) return null
        const showContent = this.$slots.default.find(vn => vn.key === this.value)
        if (showContent) {
            const children = this.transitionType ? <transition name={this.transitionName}>{showContent}</transition> : showContent
            return <div class="zrx-tab-content">{children}</div>
        } else {
            return <div class="zrx-tab-content"></div>
        }
    } else {
        if (!this.$slots.default) return null
        const children = this.$slots.default.map(c => {
            return (
                <div class="scroller" v-show={c.key === this.value} key={c.key}>
                    {c}
                </div>
            )
        })
        return this.transitionType
            ? h('transition-group', { class: 'zrx-tab-content', attrs: { name: this.transitionName, tag: this.transitionTag } }, [children])
            : h('div', { class: 'zrx-tab-content' }, [children])
    }
}

export default {
    name: 'zrxTabContent',
    props: {
        value: {
            type: [String, Number],
            required: true
        },
        // 是否占满剩余高度；若为否则设定高度
        stretch: {
            type: Boolean,
            default: false
        },
        // 切换模式: scroll, v-show, v-if
        shiftMode: {
            type: String,
            default: 'scroll',
            validator(val) {
                return ['scroll', 'v-if', 'v-show'].includes(val)
            }
        },
        transitionType: {
            type: [String, Boolean],
            default: 'slide'
        },
        transitionTag: {
            type: String,
            default: 'div'
        }
    },
    watch: {
        value(newv) {
            this.shiftMode == 'scroll' && (this.shift = this.shifts[newv])
        }
    },
    data() {
        return {
            shifts: {},
            shift: 0,
            observer: null
        }
    },
    methods: {
        init() {
            if (this.shiftMode != 'scroll' || !this.$slots.default) return
            this.$slots.default
                .filter(c => c.key !== undefined)
                .forEach((c, i) => {
                    this.shifts[c.key] = i
                })
            this.shift = this.shifts[this.value]
        },
        attachObserver() {
            if (this.shiftMode != 'scroll') return
            const observer = new MutationObserver(this.init) // 注意init方法在Chrome高版本中无法正常执行，需在父组件手动调用init
            observer.observe(this.$refs.box, {
                childList: true
            })
            this.observer = observer
        }
    },
    mounted() {
        this.init()
        this.attachObserver()
    },
    beforeDestroy() {
        this.observer?.disconnect()
    },
    computed: {
        transitionName() {
            return { slide: 'slideAsideTab', fade: 'fadeInOutTab' }[this.transitionType] ?? this.transitionType
        }
    },
    render(h) {
        return renderContent.call(this, h)
    }
}
</script>
