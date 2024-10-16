<!--  -->
<template>
    <div class="zrx-transfer-box" :type="type">
        <TransferPanel
            :props="keys"
            ref="sourcePanel"
            :title="sourceTitle"
            :data="sourceData"
            class="zrx-transfer-source"
            :type="type"
            :searchByGroup="searchByGroup"
            :showSearch="showSearch"
            :showGroup="showGroup"
            :placeholder="placeholder"
            :tableColumns="tableColumnsArr"
            @changeUpdate="changeSourcePanel"
        >
            <template #header>
                <div>选项</div>
            </template>
        </TransferPanel>
        <div class="zrx-transfer-btns">
            <div v-for="(item, index) in targetConfigArr" :key="item.key" :style="`height: ${(1 / targetConfigArr.length) * 100}%`">
                <div :class="[`zrx-transfer-action-btn btn-left`, toTargetDisabled && 'is-disabled']" @click="toTarget(index)">
                    <i class="icon svg-icon zrx-icon-right-angle"></i>
                </div>
                <div :class="[`zrx-transfer-action-btn`, toSourceDisabled[index] && 'is-disabled']" @click="toSource(index)">
                    <i class="icon svg-icon zrx-icon-left-angle"></i>
                </div>
            </div>
        </div>
        <div class="zrx-transfer-target" :style="`display: grid;grid-template-columns:auto; grid-template-rows: repeat(auto-fit, minmax(0, 1fr));row-gap: 12px;`">
            <TransferPanel
                v-for="(item, index) in targetConfigArr"
                :key="item.key"
                :props="keys"
                :ref="'targetPanel' + index"
                :title="item.title"
                :label="item.label"
                :data="targetData[index]"
                :type="type"
                :showGroup="showGroup"
                :showSearch="item.showSearch"
                :placeholder="item.placeholder || placeholder"
                :searchByGroup="searchByGroup"
                :tableColumns="tableColumnsArr"
                @changeUpdate="changeTargetPanel(index)"
            >
                <template #header>
                    <div>选项</div>
                </template>
            </TransferPanel>
        </div>
    </div>
</template>
<script>
import { omit } from 'lodash-es'
import TransferPanel from './transferPanel.vue'
// 默认数据展示配置项
const defaultProps = {
    key: 'key', // 关键字段，需要唯一
    label: 'label', // 搜索字段
    group: 'group', // 分组字段key，需要唯一
    // groupLabel: 'groupLabel', // 显示的分组字段label(不传就直接显示group)
    disabled: 'disabled' // 是否禁选字段
}
// 表头字段数据展示配置项
const defaultTableColumns = [
    {
        title: '选项', // 表头字段
        key: 'label', // 该字段对应的属性key
        // width: 100, // 该列的宽度，不传默认平均分配,只能传数字，单位px
        isShowTitle: true // 是否鼠标移入显示title
    }
]
// 目标池子的个数配置项
const defaultTargetConfig = [
    {
        key: 1,
        title: '已选择', // 目标池标题
        label: '', // 目标池副标题
        showSearch: true, // 目标池是否显示搜索
        placeholder: '' // 目标池输入检索框的提示文字
    }
]
export default {
    name: 'zrxTransfer',
    components: {
        TransferPanel
    },
    props: {
        type: {
            type: String,
            default: 'table' // table表格项；list列表项
        },
        tableColumns: {
            type: Array,
            default: () => []
        }, // 表头字段显示
        showSearch: {
            type: Boolean,
            default: true
        }, // 是否显示搜索框
        showGroup: {
            type: Boolean,
            default: false
        }, // 是否按照分组显示
        targetConfig: {
            type: Array,
            default: () => {
                return []
            }
        }, // 目标池子的个数配置项
        data: {
            type: Array,
            default: () => []
        },
        props: {
            type: Object,
            default: () => {
                return {
                    key: 'key',
                    label: 'label',
                    group: 'group',
                    disabled: 'disabled'
                }
            }
        },
        placeholder: {
            type: String,
            default: '请输入'
        }, // 输入检索框的提示文字
        searchByGroup: {
            type: Boolean,
            default: true
        }, // 是否可以按照分组进行关键字检索,检索字段为group、groupLabel对应的字段
        sourceTitle: {
            type: String,
            default: '待选择'
        }, // 来源池的标题
        modelValue: {
            type: Array,
            default: () => []
        } // 初始数据回显
    },
    data() {
        return {
            keys: {}, // 整合之后的props
            tableColumnsArr: [], // 整合之后的tableColumns表头字段数据展示配置项
            targetConfigArr: [], // 整合之后的targetConfig目标池子的个数展示配置项
            targetData: [],
            sourceData: [],
            toTargetDisabled: true, // 去往目标池按钮是否禁用,默认禁用true
            toSourceDisabled: {} // 回到来源池的按钮是否禁用,默认禁用true(可能会有多个目标池)
        }
    },
    watch: {},
    created() {
        this.init()
    },
    mounted() {},
    methods: {
        init() {
            this.keys = { ...defaultProps, ...this.props }
            if (this.tableColumns?.length) {
                this.tableColumnsArr = [...this.tableColumns]
            } else {
                this.tableColumnsArr = [
                    {
                        ...defaultTableColumns[0],
                        key: this.keys.label // 没有表头的配置项，根据props的label对应的字段展示
                    }
                ]
            }
            if (this.targetConfig?.length) {
                this.targetConfigArr = [...this.targetConfig]
            } else {
                this.targetConfigArr = [
                    {
                        ...defaultTargetConfig[0],
                        showSearch: this.showSearch // 没有传目标池的配置，根据总体showSearch对应的字段展示
                    }
                ]
            }
            this.sourceData = this.data.map((item, index) => {
                return { ...item, sortIndex: index }
            })
            this.targetData = this.targetConfigArr.map(() => [])
            this.targetConfigArr.forEach((item, index) => {
                this.$set(this.toSourceDisabled, index, true)
            })
            if (this.modelValue[0]) {
                // 初始默认选择的数据处理
                if (this.targetConfigArr.length > 1) {
                    // 如果是分组并且有多个目标池的情况
                    this.modelValue.forEach((item, index) => {
                        const selection = this.sourceData.filter(i => item.includes(i[this.keys.key]))
                        this.mergeList(this.targetData[index], selection, this.keys.key)
                        this.subList(this.sourceData, selection, this.keys.key)
                    })
                } else {
                    const selection = this.sourceData.filter(i => this.modelValue.includes(i[this.keys.key]))
                    this.mergeList(this.targetData[0], selection, this.keys.key)
                    this.subList(this.sourceData, selection, this.keys.key)
                }
                this.$nextTick(() => {
                    this.$refs.sourcePanel?.setCheckAll()
                    this.updateModelValue()
                })
            }
        },
        toTarget(index) {
            if (this.toTargetDisabled) return

            const currRef = this.$refs.sourcePanel
            this.mergeList(this.targetData[index], currRef.selection, this.keys.key)
            this.subList(this.sourceData, currRef.selection, this.keys.key)
            this.$refs['targetPanel' + index][0]?.setCheckAll()
            currRef.resetSelection()
            this.updateModelValue()
        },
        toSource(index) {
            if (this.toSourceDisabled[index]) return

            const currRef = this.$refs['targetPanel' + index][0]
            this.mergeList(this.sourceData, currRef.selection, this.keys.key)
            this.subList(this.targetData[index], currRef.selection, this.keys.key)
            this.sourceData = this.sourceData.sort((a, b) => {
                return a.sortIndex - b.sortIndex
            })
            this.$refs.sourcePanel?.setCheckAll()
            currRef.resetSelection()
            this.updateModelValue()
        },
        reset() {
            this.$refs.sourcePanel.reset()
            for (let i = 0; i < this.targetConfigArr.length; i++) {
                this.$refs['targetPanel' + index].reset()
            }
        },
        // 将list2合并到List1
        mergeList(list1, list2, key = 'key') {
            list2.forEach(item => {
                const index = list1.findIndex(option => option[key] === item[key])

                if (index === -1) list1.unshift(item)
            })
        },
        // 从list1中减去list2
        subList(list1, list2, key = 'key') {
            list2.forEach(item => {
                const index = list1.findIndex(option => option[key] === item[key])

                if (index > -1) list1.splice(index, 1)
            })
        },
        // 来源池数据勾选状态改变触发按钮的状态改变
        changeSourcePanel() {
            this.toTargetDisabled = Boolean(!this.$refs.sourcePanel.selection.length)
        },
        // 目标池数据勾选状态改变触发按钮的状态改变
        changeTargetPanel(index) {
            const currRef = this.$refs['targetPanel' + index]
            this.toSourceDisabled[index] = Boolean(!currRef[0].selection.length)
        },
        // 来源池数据,目标池数据改变向外部传递数据
        updateModelValue() {
            const target = []
            for (let i = 0; i < this.targetConfigArr.length; i++) {
                target[i] = (this.targetData[i] || []).map(item => {
                    return omit(item, ['selected', this.keys.disabled])
                })
            }
            this.$emit('updateModelValue', target)
        }
    },
    computed: {},
    filters: {}
}
</script>
