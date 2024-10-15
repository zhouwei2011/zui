<!--表格使用自定义组件新-->
<template>
    <div class="custom-table-new">
        <h2>可选标题表格</h2>
        <div class="mb">
            <el-table ref="mainTable" :data="tableList" row-key="id" @select="handleTableSelect" @select-all="handleTableSelectAll" @sort-change="handleSortChange">
                <el-table-column type="selection" width="60" align="center"></el-table-column>
                <el-table-column label="流程标题" prop="name" show-overflow-tooltip fixed="left" v-if="isShowTitleObj.name"> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" show-overflow-tooltip v-if="isShowTitleObj.applyPerson"> </el-table-column>
                <el-table-column label="申请人部门" prop="applyPart" show-overflow-tooltip v-if="isShowTitleObj.applyPart"> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" sortable="true" show-overflow-tooltip v-if="isShowTitleObj.applyTime"> </el-table-column>
                <el-table-column label="完成时间" prop="endTime" show-overflow-tooltip v-if="isShowTitleObj.endTime"> </el-table-column>
                <el-table-column width="200" fixed="right">
                    <template slot="header">
                        <span>操作</span>
                        <zrx-table-widgets :deFaultAllTitleList="allTitleList" @onChange="onChange" />
                    </template>
                    <template slot-scope="scope">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">复制</el-button>
                        <el-button type="text" :disabled="scope.row.status == 1">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tableWidgetsDemo',
    components: {},
    data() {
        return {
            selectTableRow: [],
            tableList: [
                {
                    id: '1',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '2',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '3',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-02 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '4',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '5',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                }
            ],
            // isShowTitleObj: {
            //     name: {
            //         isShow: false,
            //         isFixed: true
            //     },
            //     applyPerson: {
            //         isShow: true,
            //         isFixed: false
            //     },
            //     applyPart: {
            //         isShow: true,
            //         isFixed: false
            //     },
            //     applyTime: {
            //         isShow: true,
            //         isFixed: false
            //     },
            //     endTime: {
            //         isShow: false,
            //         isFixed: false
            //     }
            // },
            //判断标题是否显示
            isShowTitleObj: {
                name: true,
                applyPerson: true,
                applyPart: true,
                applyTime: true,
                endTime: false
            },
            //自定义组件列表展示
            allTitleList: [
                {
                    id: '1',
                    prop: 'name',
                    label: '流程标题',
                    isFixed: true,
                    isShow: true
                },
                {
                    id: '2',
                    prop: 'applyPerson',
                    label: '申请人',
                    isFixed: false,
                    isShow: true
                },
                {
                    id: '3',
                    prop: 'applyPart',
                    label: '申请人部门',
                    isFixed: false,
                    isShow: true
                },
                {
                    id: '4',
                    prop: 'applyTime',
                    label: '申请时间',
                    isFixed: false,
                    isShow: true
                },
                {
                    id: '5',
                    prop: 'endTime',
                    label: '完成时间',
                    isFixed: false,
                    isShow: false
                }
            ]
        }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
        //自定义弹框点击确定
        onChange(list) {
            this.allTitleList = list
            this.allTitleList.forEach(item => {
                this.isShowTitleObj[item.prop] = item.isShow
            })
            this.$nextTick(() => {
                this.$refs.mainTable.doLayout()
            })
        },
        //table表格勾选方法
        handleTableSelect(selection, row) {
            const target = this.selectTableRow
            if (target.findIndex(item => item.id === row.id) === -1) {
                target.push(row)
            } else {
                this.cancelTableSelected(row.id)
            }
        },
        //table表格取消勾选方法
        cancelTableSelected(id) {
            const target = this.selectTableRow
            const index = target.findIndex(item => item.id === id)
            target.splice(index, 1)
            this.setTableRowSelected()
        },
        //判断table表格勾选或取消勾选
        setTableRowSelected() {
            const dataList = this.tableList
            const selectList = this.selectTableRow
            dataList.forEach(row => {
                const matchedIndex = selectList.findIndex(item => item.id === row.id)
                this.$nextTick(() => {
                    this.$refs.mainTable?.toggleRowSelection(row, matchedIndex != -1)
                })
            })
        },
        //table全选操作
        handleTableSelectAll(selection) {
            const dataList = this.tableList
            const selectList = this.selectTableRow
            const isAllSelect = selection.length == dataList.length ? true : false
            if (!isAllSelect) {
                // 取消全选
                dataList.forEach(row => {
                    this.cancelTableSelected(row.id)
                })
            } else {
                // 全选
                selection.forEach(row => {
                    if (selectList.findIndex(item => item.id === row.id) === -1) {
                        selectList.push(row)
                    }
                })
            }
        },
        //表格排序发生变化触发的事件
        handleSortChange(column, prop, order) {
            this.$emit('handleSortChange', column, prop, order)
        }
    },
    computed: {},
    filters: {}
}
</script>
<style scoped lang="stylus">
.custom-table-new {
    .mb {
        position: relative;
        margin-bottom: 20px;
    }
}
</style>
