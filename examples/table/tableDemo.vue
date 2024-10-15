<template>
    <div class="table-demo">
        <!-- 基本表格 -->
        <h2>表格/基础表格</h2>
        <div class="mb">
            <el-table ref="mainTable" :data="tableData1" row-key="id" highlight-current-row @sort-change="handleSortChange">
                <el-table-column label="标题" prop="name" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人部门" prop="applyPart" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" sortable="true" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="操作" width="200">
                    <template>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">复制</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <h2>表格/基础表格/可单选无选择框</h2>
        <div class="mb">
            <el-table ref="mainTable" :data="tableData1" row-key="id" highlight-current-row>
                <el-table-column label="标题" prop="name" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人部门" prop="applyPart" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="操作" width="200">
                    <template>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">复制</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <h2>表格/基础表格/可单选有选择框</h2>
        <div class="mb">
            <el-table ref="mainTable" :data="tableData1" row-key="id" @current-change="handleCurrentChange">
                <el-table-column align="center" width="40px">
                    <template slot-scope="scope">
                        <el-radio v-model="currentRow" :label="scope.row">&nbsp;</el-radio>
                    </template>
                </el-table-column>
                <el-table-column label="标题" prop="name" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人部门" prop="applyPart" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="操作" width="200">
                    <template>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">复制</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <h2>表格/基础表格/可多选/有固定列</h2>
        <div class="mb">
            <el-table ref="mainTable" :data="tableData1" row-key="id" @select="handleTableSelect" @select-all="handleTableSelectAll" @sort-change="handleSortChange">
                <el-table-column type="selection" align="center" width="60" fixed="left"></el-table-column>
                <el-table-column label="标题" prop="name" show-overflow-tooltip fixed="left"> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人部门申请人部门申请人部门申请人部门申请人部门申请人部门申请人部门" prop="applyPart" width="200" show-overflow-tooltip>
                </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" sortable="true" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="操作" width="200" fixed="right">
                    <template>
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">复制</el-button>
                        <el-button type="text">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <h2>表格/基础表格/多级</h2>
        <div class="mb">
            <el-table row-key="id" :data="list2" default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                <el-table-column prop="date" label="日期" sortable></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
        </div>
        <h2>表格/基础表格/可展开</h2>
        <div class="mb">
            <el-table :data="list3">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="">
                                <span>{{ props.row.name }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="商品 ID" prop="id"> </el-table-column>
                <el-table-column label="商品名称" prop="name"> </el-table-column>
                <el-table-column label="描述" prop="desc"> </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tableDemo',
    data() {
        return {
            currentRow: null,
            tableData1: [
                {
                    id: '111',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '2222',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '3456',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-02 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '478752',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                },
                {
                    id: '5456546',
                    name: '流程名称-admin',
                    applyPerson: 'admin',
                    applyPart: '城管部门',
                    applyTime: '2017-10-01 12:00:00',
                    endTime: '2017-10-01 12:00:00'
                }
            ],
            selectTableRow: [],
            list2: [
                {
                    id: 1,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                },
                {
                    id: 2,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                },
                {
                    id: 3,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄',
                    children: [
                        {
                            id: 31,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄',
                            children: [
                                {
                                    id: 311,
                                    name: '王小虎',
                                    date: '2016-05-01',
                                    address: '上海市普陀区金沙江路 1519 弄'
                                }
                            ]
                        },
                        {
                            id: 32,
                            date: '2016-05-01',
                            name: '王小虎',
                            address: '上海市普陀区金沙江路 1519 弄'
                        }
                    ]
                },
                {
                    id: 4,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }
            ],
            list3: [
                {
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                },
                {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                },
                {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                },
                {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }
            ]
        }
    },
    methods: {
        //表格单选方法
        handleCurrentChange(val) {
            this.currentRow = val
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
            const dataList = this.tableData1
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
            const dataList = this.tableData1
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
        handleSortChange(column, prop, order) {
            console.log('column, prop, order', column, prop, order)
        }
    }
}
</script>

<style scoped lang="scss">
.table-demo {
    background-color: #fff;
    .mb {
        margin-bottom: 20px;
    }
    .demo-table-expand {
        height: 24px;
        font-size: 0;
        padding: 0 48px;
    }
    .demo-table-expand label {
        width: 90px;
        height: 24px;
        line-height: 24px;
        color: #99a9bf;
    }
    .demo-table-expand .el-form-item {
        height: 24px;
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
    .el-table {
        .el-table__body {
            tr {
                .el-table__cell {
                    &.el-table__expanded-cell {
                        .el-form {
                            padding-bottom: 0;
                        }
                    }
                }
            }
        }
    }
}
</style>
