---
title: TableWidgets 表格小组件
---

# TableWidgets 表格小组件

可控制表头内容显隐

### 使用方法

<div class="m-demo-row">
    <div class="mb">
            <el-table
                ref="mainTable"
                :data="tableList"
                row-key="id"
                @select="handleTableSelect"
                @select-all="handleTableSelectAll"
                @sort-change="handleSortChange"
                :row-class-name="
                    ({ row }) => {
                        return selectTableRow.find(item => item.id === row.id) ? 'selected-row' : 'normal-row'
                    }
                "
            >
                <el-table-column type="selection" width="60" align="center"></el-table-column>
                <el-table-column label="流程标题" prop="name" show-overflow-tooltip fixed="left" v-if="isShowTitleObj.name"> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" show-overflow-tooltip v-if="isShowTitleObj.applyPerson"> </el-table-column>
                <el-table-column label="申请人部门" prop="applyPart" show-overflow-tooltip v-if="isShowTitleObj.applyPart"> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" sortable="true" show-overflow-tooltip v-if="isShowTitleObj.applyTime"> </el-table-column>
                <el-table-column label="完成时间" prop="endTime" show-overflow-tooltip v-if="isShowTitleObj.endTime"> </el-table-column>
                <el-table-column label="操作" width="200" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">复制</el-button>
                        <el-button type="text" :disabled="scope.row.status == 1">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <zrx-table-widgets :deFaultAllTitleList="allTitleList" @onChange="onChange" />
        </div>
</div>

::: details 示例代码

```html
<div class="mb">
    <el-table
        ref="mainTable"
        :data="tableList"
        row-key="id"
        @select="handleTableSelect"
        @select-all="handleTableSelectAll"
        @sort-change="handleSortChange"
        :row-class-name="
                    ({ row }) => {
                        return selectTableRow.find(item => item.id === row.id) ? 'selected-row' : 'normal-row'
                    }
                "
    >
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="流程标题" prop="name" show-overflow-tooltip fixed="left" v-if="isShowTitleObj.name"> </el-table-column>
        <el-table-column label="申请人" prop="applyPerson" show-overflow-tooltip v-if="isShowTitleObj.applyPerson"> </el-table-column>
        <el-table-column label="申请人部门" prop="applyPart" show-overflow-tooltip v-if="isShowTitleObj.applyPart"> </el-table-column>
        <el-table-column label="申请时间" prop="applyTime" sortable="true" show-overflow-tooltip v-if="isShowTitleObj.applyTime"> </el-table-column>
        <el-table-column label="完成时间" prop="endTime" show-overflow-tooltip v-if="isShowTitleObj.endTime"> </el-table-column>
        <el-table-column label="操作" width="200" fixed="right">
            <template slot-scope="scope">
                <el-button type="text">编辑</el-button>
                <el-button type="text">复制</el-button>
                <el-button type="text" :disabled="scope.row.status == 1">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <zrx-table-widgets :deFaultAllTitleList="allTitleList" @onChange="onChange" />
</div>
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
    .mb {
        position: relative;
        margin-bottom: 20px;
    }
</style>
```

:::

### Attributes

<table>
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data</td>
            <td>列表显示的数据</td>
            <td>array</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>row-key</td>
            <td>行数据的 Key，用来优化Table的渲染</td>
            <td>string</td>
            <td>--</td>
            <td>--</td>
        </tr>
        <tr>
            <td>row-class-name</td>
            <td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className</td>
            <td>string</td>
            <td>--</td>
            <td>--</td>
        </tr>
    </tbody>
</table>

### props

<table id="props">
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>popoverRowKey</td>
            <td>弹窗列表唯一标识符</td>
            <td>string,Number</td>
            <td>--</td>
            <td>id</td>
        </tr>
        <tr>
            <td>deFaultAllTitleList</td>
            <td>弹窗列表数据</td>
            <td>Array</td>
            <td>--</td>
            <td>[]</td>
        </tr>
    </tbody>
</table>

<div>
    <contributor :maintainer="['zdl']" :members="['zdl']"></contributor>
</div>

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
    .mb {
        position: relative;
        margin-bottom: 20px;
    }

</style>
