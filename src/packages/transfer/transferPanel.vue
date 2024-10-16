<!--  -->
<template>
    <div class="zrx-transfer-panel" :class="['zrx-transfer-panel', typeMap.get(type).listClass && 'is-list-type']">
        <div class="zrx-transfer-title">
            <el-checkbox
                v-if="typeMap.get(type).showTitleCheckBox"
                v-model="checkAll"
                @change="checkAllOptions"
                :indeterminate="isIndeterminate"
                :disabled="disabledAll"
            ></el-checkbox
            >{{ title }} ({{ selection.length }}/{{ data.length }})<span>{{ label }}</span>
        </div>
        <el-input class="zrx-transfer-search" v-model="keyword" :placeholder="placeholder" v-if="showSearch">
            <template #suffix>
                <i class="svg-icon zrx-icon-magnifier"></i>
            </template>
        </el-input>

        <div class="zrx-transfer-header" v-if="typeMap.get(type).showTableHeader">
            <el-checkbox v-model="checkAll" @change="checkAllOptions" :indeterminate="isIndeterminate" :disabled="disabledAll"></el-checkbox>
            <div class="t-table__row header" :style="computedColumns()">
                <div v-for="item in tableColumns" :key="item.key" class="t-table__cell">
                    <div class="cell">{{ item.title }}</div>
                </div>
            </div>
        </div>

        <div :class="['zrx-transfer-container', !showSearch && 'no-search']">
            <el-scrollbar style="height: 100%">
                <template v-if="showGroup">
                    <template v-for="[group, data] in options">
                        <div :key="group + '1'" class="zrx-transfer-item group">
                            <el-checkbox
                                v-model="groupOption.get(group).selected"
                                :indeterminate="groupOption.get(group).isIndeterminate"
                                :disabled="groupOption.get(group).disabled"
                                @change="checked => onGroupChange(checked, groupOption.get(group), data)"
                            ></el-checkbox>
                            <i @click="changeExpand(group)" :class="['svg-icon', 'zrx-icon-right-angle', groupOption.get(group).isExpand && 'isExpand']"></i>
                            <span :title="groupOption.get(group).groupLabel">{{ groupOption.get(group).groupLabel }}</span>
                        </div>
                        <template v-if="groupOption.get(group).isExpand">
                            <div class="zrx-transfer-item" v-for="item in data" :key="item[props.key]">
                                <el-checkbox v-model="item.selected" :disabled="item[props.disabled]" @change="checked => onChange(checked, item, group)"></el-checkbox>
                                <div class="t-table__row" :style="computedColumns()">
                                    <div v-for="(i, inx) in tableColumns" :key="`${item[props.key]}*${i.key}`" :class="['t-table__cell', inx == 0 && 'first']">
                                        <div class="cell" :title="i.isShowTitle && item[i.key]">{{ item[i.key] }}</div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </template>
                </template>

                <template v-else>
                    <div class="zrx-transfer-item" v-for="item in options" :key="item[props.key]">
                        <el-checkbox v-model="item.selected" :disabled="item[props.disabled]" @change="checked => onChange(checked, item)"> </el-checkbox>
                        <div class="t-table__row" :style="computedColumns()">
                            <div v-for="i in tableColumns" :key="`${item[props.key]}*${i.key}`" class="t-table__cell">
                                <div class="cell" :title="i.isShowTitle && item[i.key]">{{ item[i.key] }}</div>
                            </div>
                        </div>
                    </div>
                </template>
                <template v-if="!options.length">
                    <div class="zrx-transfer-empty-box">暂无数据</div>
                </template>
            </el-scrollbar>
        </div>
    </div>
</template>
<script>
import { groupBy } from 'lodash-es'
export default {
    name: 'transferPanel',
    components: {},
    props: {
        title: String,
        label: String,
        type: {
            type: String,
            default: 'table'
        },
        tableColumns: {
            type: Array,
            default: () => [
                {
                    title: '选项', // 表头字段
                    key: 'label', // 该字段对应的属性key
                    // width: 100, // 该列的宽度，不传默认平均分配,只能传数字，单位px
                    isShowTitle: true // 是否鼠标移入显示title
                }
            ]
        },
        data: {
            type: Array,
            default: () => []
        },
        showSearch: {
            type: Boolean,
            default: false
        },
        showGroup: {
            type: Boolean,
            default: true
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
        // 是否可以按照分组进行关键字检索
        searchByGroup: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: () => '请输入'
        }
    },
    data() {
        return {
            keyword: '', // 检索关键字
            selection: [], // 选择的数据
            checkAll: false, // 全选
            isIndeterminate: false, // 半选
            groupOption: new Map([]), // 存储分组的相关属性
            typeMap: new Map([
                [
                    'table',
                    {
                        showTitleCheckBox: false, // 复选框是否显示在标题行
                        showTableHeader: true, // 表头是否显示
                        listClass: false // 列表行样式是否更改，是否去掉下边框
                    }
                ],
                [
                    'list',
                    {
                        showTitleCheckBox: true,
                        showTableHeader: false,
                        listClass: true
                    }
                ]
            ]) // 表格项和列表项穿梭框的不同之处
        }
    },
    watch: {
        keyword() {
            this.$nextTick(() => {
                this.setCheckAll()
            })
        },
        options: {
            handler(val) {
                val.forEach(item => {
                    this.showGroup && this.setGroupChange(item[0])
                })
            },
            deep: true
        }
    },
    created() {},
    mounted() {},
    methods: {
        buildList(list) {
            return list.map(item => {
                return {
                    ...item,
                    selected: this.selection.findIndex(option => option[this.props.key] === item[this.props.key]) > -1,
                    disabled: Boolean(item[this.props.disabled])
                }
            })
        },
        // 展开分组
        changeExpand(group) {
            this.groupOption.get(group).isExpand = !this.groupOption.get(group).isExpand
            this.$forceUpdate()
        },
        // 分组的勾选
        onGroupChange(checked, group, data) {
            if (group.disabled) return
            data.forEach(option => {
                this.onChange(checked, option, group)
            })
        },
        // 设置分组的勾选框
        setGroupChange(group) {
            const option = this.options.find(item => item[0] == group)
            const len = option[1].length
            const checkedNum = option[1].filter(i => i.selected).length
            const disabledNum = option[1].filter(i => i[this.props.disabled]).length
            let disabledFlag = false
            const currentGroup = this.groupOption.get(group)
            if (checkedNum == len) {
                // 子类选择的数量等于子类的长度，分组框全选
                currentGroup.selected = true
                currentGroup.isIndeterminate = false
            } else if (checkedNum < len && checkedNum > 0 && len - checkedNum != disabledNum) {
                // 子类选择的数量小于子类的长度，且子类选择有选择，且没选择的数量都不是被禁用的，分组框半选
                currentGroup.selected = false
                currentGroup.isIndeterminate = true
            } else if (checkedNum < len && checkedNum > 0 && len - checkedNum == disabledNum) {
                // 子类选择的数量小于子类的长度，且子类选择有选择，且没选择的数量等于被禁用的，分组框全选
                currentGroup.selected = true
                currentGroup.isIndeterminate = false
            } else if (checkedNum == 0 && disabledNum != len) {
                // 子类未选择，且被禁用的数量不是子类的长度， 分组框不选中
                currentGroup.selected = false
                currentGroup.isIndeterminate = false
            } else if (checkedNum == 0 && disabledNum == len) {
                // 子类未选择，且全被禁用， 分组框不选中，禁用
                currentGroup.selected = false
                currentGroup.isIndeterminate = false
                disabledFlag = true
            }
            currentGroup.disabled = disabledFlag
        },
        // 单个勾选框
        onChange(checked, item, group) {
            if (item[this.props.disabled]) return
            item.selected = checked

            const index = this.selection.findIndex(option => option[this.props.key] === item[this.props.key])
            if (checked) {
                // 添加
                if (index === -1) this.selection.push(item)
            } else {
                // 删除
                if (index > -1) this.selection.splice(index, 1)
            }
            this.changeUpdate()
            this.setCheckAll()
        },
        // 是否全部选中/全部不选中
        volidCheckAll(value = true) {
            if (this.showGroup) {
                return this.options.every(item => {
                    return item[1].every(option => option[this.props.disabled] || option.selected === value)
                })
            } else {
                return this.options.every(item => item[this.props.disabled] || item.selected === value)
            }
        },
        // 全选
        checkAllOptions(checked) {
            if (this.showGroup) {
                this.options.forEach(item => {
                    item[1].forEach(option => {
                        this.onChange(checked, option, item[0])
                    })
                })
            } else {
                this.options.forEach(item => {
                    this.onChange(checked, item)
                })
            }
        },
        // 重置
        resetSelection() {
            this.selection = []
            this.checkAll = false
            this.isIndeterminate = false
            this.changeUpdate()
        },
        // 设置全选框
        setCheckAll() {
            const isCheckAll = this.volidCheckAll(true)
            const isCheckNo = this.volidCheckAll(false)

            this.checkAll = isCheckAll
            this.isIndeterminate = !isCheckAll
            if (isCheckNo) this.isIndeterminate = false
            let flag = false
            if (this.options?.length) {
                // 搜索有数据但是全都是禁选状态时全选框不勾选
                if (this.showGroup) {
                    flag = this.options.every(item => {
                        return item[1].every(option => option[this.props.disabled])
                    })
                } else {
                    flag = this.options.every(item => item[this.props.disabled])
                }
            } else {
                // 搜索无数据的时候全选框不勾选
                flag = true
            }
            if (flag) {
                this.checkAll = false
                this.isIndeterminate = false
            }
        },
        reset() {
            this.keyword = ''
            this.resetSelection()
        },
        // 勾选状态更改触发外部事件
        changeUpdate() {
            this.$emit('changeUpdate')
        },
        computedColumns() {
            // display: grid;
            // grid-template-columns: 100px 200px repeat(auto-fit, minmax(0, 1fr));
            const str = this.tableColumns.map(i => (i.width && Number(i.width) ? `${i.width}px` : 'minmax(0, 1fr)')).join(' ')
            return `display: grid;grid-template-columns: ${str}`
        }
    },
    computed: {
        disabledAll() {
            let disabledItemNum = 0
            let total = 0
            if (this.showGroup) {
                this.options.forEach(item => {
                    disabledItemNum =
                        disabledItemNum +
                        item[1].reduce((prev, cur) => {
                            return prev + (cur[this.props.disabled] ? 1 : 0)
                        }, 0)
                    total = total + item[1].length
                })
            } else {
                disabledItemNum = this.options.reduce((prev, cur) => {
                    return prev + (cur[this.props.disabled] ? 1 : 0)
                }, 0)
                total = this.options.length
            }
            return !(total - disabledItemNum)
        },
        // 返回整个列表数据
        options() {
            let tempList
            const label = this.props.label
            const group = this.props.group
            const groupLabel = this.props.groupLabel || this.props.group
            if (!this.showSearch || !this.keyword || !this.keyword?.trim()) {
                tempList = this.buildList(this.data)
            } else {
                const val = this.keyword.trim()
                if (this.searchByGroup && this.showGroup) {
                    tempList = this.buildList(this.data.filter(item => item[label].includes(val) || item[groupLabel].includes(val)))
                } else {
                    tempList = this.buildList(this.data.filter(item => item[label].includes(val)))
                }
            }
            if (this.showGroup) {
                const groupObj = groupBy(tempList, this.props.group)
                const keys = [...this.groupOption.keys()]
                Object.keys(groupObj).forEach((key, i) => {
                    const groupItem = tempList.find(i => i[this.props.group] == key)
                    // 如果groupOption里面有该分组，不做处理，不在就添加该分组
                    !this.groupOption.get(key) &&
                        this.groupOption.set(key, {
                            group: key,
                            groupLabel: groupItem[groupLabel],
                            isExpand: true,
                            selected: false,
                            isIndeterminate: false,
                            disabled: false
                        })
                })
                keys.forEach(key => {
                    // 如果groupOption里面的分组整个列表里面没有该分组，要去掉该分组
                    if (!Object.keys(groupObj).includes(key)) this.groupOption.delete(key)
                })
                //分组结构数据
                return Object.entries(groupObj)
            } else {
                return tempList
            }
        }
    },
    filters: {}
}
</script>
