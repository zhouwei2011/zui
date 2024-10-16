<!--自定义列表-->
<template>
    <el-popover popper-class="zrx-table-widgets zrx-popover" width="184" trigger="click" v-model="dialogObj.show">
        <div class="zrx-table-widgets__header">字段名称</div>
        <el-table
            max-height="380"
            ref="multipleTable"
            :data="allTitleList"
            :row-key="popoverRowKey"
            @row-click="handleRowClick"
            @select="handleSelect"
            @select-all="handleSelectAll"
            @header-click="handleHeaderClick"
            :row-class-name="computedRowClass"
        >
            <el-table-column type="selection" align="center" :selectable="selectable" width="32px"></el-table-column>
            <el-table-column :label="title" prop="label" show-overflow-tooltip>
                <template slot-scope="scope">
                    <span>{{ scope.row.label }}</span>
                    <span>{{ scope.row.isFixed == true ? '（必选）' : '' }}</span>
                </template>
            </el-table-column>
        </el-table>
        <div class="pop-btn">
            <el-button type="primary" class="btn btn-primary" @click="onChange">确定</el-button>
        </div>
        <template slot="reference">
            <div :class="['icon-filter-box', dialogObj.show && 'is-active']">
                <span @click="toCustomTitle">
                    <i :class="`icon svg-icon zrx-icon-filter-table ${customClass}`"></i>
                </span>
            </div>
        </template>
    </el-popover>
</template>
<script>
export default {
    name: 'zrxTableWidgets',
    props: {
        //popover中rowkey值
        popoverRowKey: {
            type: [String, Number],
            default: 'id'
        },
        //所有标题数组
        deFaultAllTitleList: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: '全选'
        },
        customClass: {
            type: String,
            default: 'pupover-setting'
        }
    },
    components: {},
    data() {
        return {
            allTitleList: [...this.deFaultAllTitleList],
            dialogObj: {
                show: false
            },
            selectList: []
        }
    },
    watch: {
        deFaultAllTitleList(newV) {
            this.allTitleList = newV
        }
    },
    created() {},
    mounted() {},
    methods: {
        findIndex(row) {
            return this.selectList.findIndex(item => item[this.popoverRowKey] === row[this.popoverRowKey])
        },
        //点击设置自定义标题按钮
        toCustomTitle() {
            if (this.dialogObj.show) {
                return
            }
            this.selectList = []
            this.allTitleList.forEach(item => {
                if (item.isShow) {
                    this.selectList.push(item)
                }
            })
            this.setRowSelected()
        },
        //关闭弹窗
        onCloseDialog() {
            this.dialogObj.show = false
        },
        //保存弹窗
        onChange() {
            const list = this.allTitleList.map(item => {
                return {
                    ...item,
                    isShow: false
                }
            })
            this.selectList.forEach(item => {
                let index = list.findIndex(n => n[this.popoverRowKey] == item[this.popoverRowKey])
                if (index > -1) {
                    list[index].isShow = true
                }
            })
            this.$emit('onChange', list)
            this.onCloseDialog()
        },
        //禁用选择弹窗题目选项
        selectable(row, index) {
            return row.isFixed == false
        },
        //勾选表单选择项
        handleSelect(selection, row) {
            const target = this.selectList
            if (this.findIndex(row) === -1) {
                target.push(row)
            } else {
                this.cancelSelected(row)
            }
        },
        // 取消表单选择项
        cancelSelected(row) {
            const target = this.selectList
            const index = this.findIndex(row)
            target.splice(index, 1)
            this.setRowSelected()
        },
        //判断勾选或取消勾选
        setRowSelected() {
            const dataList = this.allTitleList
            dataList.forEach(row => {
                const matchedIndex = this.findIndex(row)
                this.$nextTick(() => {
                    this.$refs.multipleTable?.toggleRowSelection(row, matchedIndex != -1)
                })
            })
        },
        //全选操作
        handleSelectAll(selection) {
            const dataList = this.allTitleList
            const selectList = this.selectList
            const isAllSelect = selection.length == dataList.length ? true : false
            if (!isAllSelect) {
                // 取消全选
                this.$nextTick(() => {
                    //全部数组
                    const unDataList = JSON.parse(JSON.stringify(dataList))
                    //禁止被取消选择的数组
                    const unselectableList = []
                    this.allTitleList.forEach(item => {
                        if (item.isFixed) {
                            unselectableList.push(item)
                        }
                    })
                    unselectableList.forEach(unList => {
                        const index = unDataList.findIndex(item => item[this.popoverRowKey] == unList[this.popoverRowKey])
                        unDataList.splice(index, 1)
                    })
                    unDataList.forEach(row => {
                        this.cancelSelected(row)
                    })
                })
            } else {
                // 全选
                selection.forEach(row => {
                    if (selectList.findIndex(item => item[this.popoverRowKey] === row[this.popoverRowKey]) === -1) {
                        selectList.push(row)
                    }
                })
            }
        },
        // 行点击事件
        handleRowClick(row) {
            if (!this.selectable(row)) return
            this.handleSelect(_, row)
            this.setRowSelected()
        },
        handleHeaderClick() {
            this.$refs.multipleTable.toggleAllSelection()
        },
        computedRowClass({ row }) {
            return !this.selectable(row) ? 'fixed-row' : 'normal-row'
        }
    },
    computed: {},
    filters: {},
    beforeDestroy() {}
}
</script>
