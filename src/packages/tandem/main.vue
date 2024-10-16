<template>
    <div class="zrx-tandem" v-if="show" :style="style" @click.stop>
        <zrx-cascader-pannel
            :show="show"
            :childrenDisabledByParent="childrenDisabledByParent"
            :data="data"
            :top="locale.top"
            :absoluteTop="0"
            :props="propsSetting"
            ref="cascader"
            @onClick="onClick"
            @onExtend="onExtend"
            @mouseleave.native.stop="onLeavePannel"
        ></zrx-cascader-pannel>
    </div>
</template>

<script>
import zrxCascaderPannel from './component'
const defaultProps = {
    label: 'label',
    children: 'children',
    nodeKey: 'id'
}
export default {
    name: 'ZrxTandem',
    components: {
        zrxCascaderPannel
    },
    props: {
        data: {
            type: Array,
            default() {
                return []
            }
        },
        show: {
            type: Boolean,
            default: false
        },
        // 是否在鼠标移开后隐藏节点
        hideWhenLeave: {
            type: Boolean,
            default: false
        },
        // 超过多少层级时滚动，0时不滚动
        maxDepthShow: {
            type: Number,
            default: 0
        },
        // 计算位置的方式，可以直接指定，也可通过dom获得
        locationReference: {
            default() {
                return null
            }
        },
        // 配置属性 目前包括label,children
        props: {
            type: Object,
            default() {
                return {}
            }
        },
        // 子组件属性：用以追踪上级节点数据
        parent: {
            type: Object,
            default() {
                return undefined
            }
        },
        // 是否自动禁用被禁用节点的所有子孙节点
        childrenDisabledByParent: {
            type: Boolean,
            default: false
        },
        // 右侧预留的可视宽度
        hoverableWidth: {
            type: Number,
            default: 0
        },
        pannelWidth: {
            type: Number,
            default: 120
        }
    },
    watch: {
        show(newv) {
            if (newv) {
                this.updateLocale(this.locationReference)
                setTimeout(() => document.body.addEventListener('click', this.onClose), 0)
            } else {
                document.body.removeEventListener('click', this.onClose)
                this.depth = 1
            }
        }
    },
    data() {
        return {
            depth: 1,
            locale: {
                top: 0,
                left: 0
            }
        }
    },
    methods: {
        updateLocale(target) {
            if (target && target.getBoundingClientRect) {
                const pos = target.getBoundingClientRect()
                let top = pos.top + pos.height / 2
                if (top + this.pannelHeight >= window.innerHeight) {
                    top -= this.pannelHeight
                }
                this.locale.top = top
                this.locale.left = pos.left + target.offsetWidth
            } else if (![null, undefined].includes(target)) {
                this.locale.top = target.top
                this.locale.left = target.left
            }
        },
        onLeavePannel() {
            if (this.hideWhenLeave) {
                this.$refs.cascader.packUp()
                this.onExtend(1)
            }
        },
        onExtend(depth) {
            this.depth = depth
        },
        onClick(item, nodeData) {
            this.$emit('onClick', item, nodeData)
            this.onClose(item)
        },
        onClose(target) {
            if (typeof this.$listeners.beforeClose == 'function') {
                this.$emit('beforeClose', target, this.close())
            } else {
                this.close()(true)
            }
        },
        close() {
            return act => {
                if (act) {
                    this.$emit('onClose')
                }
            }
        }
    },
    computed: {
        pannelHeight() {
            return Math.min(this.data.length, 6) * 32 + 4 * 2
        },
        style() {
            let res = `left:${this.locale.left}px;--pannelWidth: ${this.pannelWidth}px;`
            if (this.maxDepthShow) {
                const maxWidth = this.pannelWidth + (this.maxDepthShow - 1) * this.pannelWidth + 4 * 2 + this.hoverableWidth
                res += `width:${maxWidth}px;overflow:hidden;--shift:${this.shift}px;`
            }
            return res
        },
        propsSetting() {
            return Object.assign(defaultProps, this.props)
        },
        shift() {
            if (this.depth % 1 != 0) {
                return -this.pannelWidth * Math.max(Math.ceil(this.depth) - this.maxDepthShow - this.hoverableWidth / this.pannelWidth, 0)
            }
            return -this.pannelWidth * Math.max(this.depth - this.maxDepthShow, 0)
        }
    }
}
</script>
