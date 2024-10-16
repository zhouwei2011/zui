<template>
    <ul class="m-pannel" :level="level" :style="`top:${pannelTop}px;`" v-if="show" ref="pannel">
        <div :class="['bar-container', reverse && 'reverse']">
            <li
                class="panel-bar"
                v-for="bar in data"
                :key="bar[props.nodeKey]"
                :disabled="bar.disabled || pannelDisabled"
                @mouseenter.stop="onEnter(bar, $event)"
                @click.stop="onClick(bar)"
            >
                <i :class="bar.icon" role="prefix" v-if="bar.icon"></i>
                <span class="label" :title="bar[props.label]">{{ bar[props.label] }}</span>
                <i class="svg-icon zrx-icon-right-angle" role="suffix" v-if="bar[props.children] && bar[props.children].length"></i>
            </li>
        </div>
        <template v-for="bar in childrenGroup">
            <zrx-cascader-pannel
                :key="bar[props.nodeKey]"
                :absoluteTop="absoluteTop + pannelTop"
                :disabled="bar.disabled || pannelDisabled"
                :childrenDisabledByParent="childrenDisabledByParent"
                :parent="bar"
                :top="childrenTop"
                :data="bar[props.children]"
                :show="extendedKey == bar[props.nodeKey]"
                :level="level + 1"
                :props="props"
                :ref="`cascade_${bar[props.nodeKey]}`"
                @onClick="onClick"
                @onExtend="onExtend"
            ></zrx-cascader-pannel>
        </template>
    </ul>
</template>

<script>
export default {
    name: 'zrxCascaderPannel',
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
        // 面板层级
        level: {
            type: Number,
            default: 0
        },
        top: {
            type: [Number, String],
            default: 0
        },
        absoluteTop: {
            type: Number,
            default: 0
        },
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
        // 子组件属性：是否禁用组件
        disabled: {
            type: Boolean,
            default: false
        },
        // 是否在禁用节点后自动禁用子孙节点
        childrenDisabledByParent: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        data: {
            handler(newv) {
                this.bindDatas(newv)
            },
            deep: true
        }
    },
    data() {
        return {
            menu: [],
            extendedKey: '',
            childrenTop: 0
        }
    },
    methods: {
        packUp() {
            // 递归收起子组件
            if (this.extendedKey !== '') {
                this.$refs[`cascade_${this.extendedKey}`] && this.$refs[`cascade_${this.extendedKey}`].length && this.$refs[`cascade_${this.extendedKey}`][0].packUp()
                this.extendedKey = ''
            }
        },
        onEnter(item, e) {
            if (item.children && item.children.length) {
                this.$emit('onExtend', this.level + 2)
            } else {
                this.$emit('onExtend', this.level + 1)
            }
            this.packUp()

            if (item.children && item.children.length) {
                // 移入有子节点的节点
                this.extendedKey = item[this.props.nodeKey]
                this.childrenTop = e.currentTarget.offsetTop - e.currentTarget.parentElement.scrollTop - 4
            } else {
                // 移入无子节点的节点
            }
        },
        onExtend(depth) {
            this.$emit('onExtend', depth)
        },
        onClick(item, nodeData) {
            if (!nodeData) {
                // 第一次点击
                if (item.disabled) {
                    return false
                }
                this.$emit(
                    'onClick',
                    item,
                    this.menu.find(term => term[this.props.nodeKey] == item[this.props.nodeKey])
                )
            } else {
                this.$emit('onClick', item, nodeData)
            }
        },
        bindDatas(arr) {
            this.menu = arr.map(item => {
                return {
                    ...JSON.parse(JSON.stringify(item)),
                    level: this.level,
                    parent: this.parentCopy
                }
            })
        }
    },
    created() {
        this.bindDatas(this.data)
    },
    computed: {
        pannelDisabled() {
            return this.disabled && this.childrenDisabledByParent
        },
        childrenGroup() {
            return this.data.filter(item => item.children && item.children.length)
        },
        pannelHeight() {
            return Math.min(this.data.length, 6) * 32 + 4 * 2
        },
        reverse() {
            return this.absoluteTop + this.top + this.pannelHeight >= window.innerHeight
        },
        pannelTop() {
            return this.top - Number(this.reverse) * (this.pannelHeight - 40)
        },
        parentCopy() {
            return this.parent === undefined ? undefined : JSON.parse(JSON.stringify(this.parent))
        }
    }
}
</script>
