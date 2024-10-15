---
title: Table 表格
---

# Table 表格

重置了样式的 table 表格

### 基础用法

<div class="m-example">
最基础的用法，表格展示内容
</div>

<div class="m-demo-row">
      <el-table ref="mainTable" :data="tableData1" row-key="id" highlight-current-row       @sort-change="handleSortChange">
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

::: details 示例代码

```html
<el-table ref="mainTable" :data="tableData1" row-key="id" @sort-change="handleSortChange">
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
<script>
    export default {
        name: 'tableDemo',
        data() {
            return {
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
                ]
            }
        },
        methods: {
            handleSortChange(column, prop, order) {
                console.log('column, prop, order', column, prop, order)
            }
        }
    }
</script>
```

:::

### 列表可单选，没有选择框，选中后添加背景色

<div class="m-example">
表格可单选，不显示选择框，整行可选，选中后添加背景色提示已选
</div>

<div class="m-demo-row">
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

::: details 示例代码

```html
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
<script>
    export default {
        name: 'tableDemo',
        data() {
            return {
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
                ]
            }
        }
    }
</script>
```

:::

### 列表可单选，有单选选择框，选中后无背景色

<div class="m-example">
表格可单选，有单选选择框，选择框处可选，选中后也无背景色
</div>

<div class="m-demo-row">
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

::: details 示例代码

```html
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
                ]
            }
        },
        methods: {
            //表格单选方法
            handleCurrentChange(val) {
                this.currentRow = val
            }
        }
    }
</script>
```

:::

### 可多选

<div class="m-example">
列表可多选，设置有固定列
</div>

<div class="m-demo-row">
        <el-table
                ref="mainTable"
                :data="tableData1"
                row-key="id"
                :row-class-name="
                    ({ row }) => {
                        return selectTableRow.find(item => item.id === row.id) ? 'selected-row' : 'normal-row'
                    }
                "
                @select="handleTableSelect"
                @select-all="handleTableSelectAll"
                @sort-change="handleSortChange"
            >
                <el-table-column type="selection" align="center" width="60" fixed="left"></el-table-column>
                <el-table-column label="标题" prop="name" show-overflow-tooltip fixed="left"> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" width="200" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人部门" prop="applyPart" width="200" show-overflow-tooltip> </el-table-column>
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

::: details 示例代码

```html
<el-table
    ref="mainTable"
    :data="tableData1"
    row-key="id"
    :row-class-name="
                    ({ row }) => {
                        return selectTableRow.find(item => item.id === row.id) ? 'selected-row' : 'normal-row'
                    }
                "
    @select="handleTableSelect"
    @select-all="handleTableSelectAll"
    @sort-change="handleSortChange"
>
    <el-table-column type="selection" align="center" width="60" fixed="left"></el-table-column>
    <el-table-column label="标题" prop="name" show-overflow-tooltip fixed="left"> </el-table-column>
    <el-table-column label="申请人" prop="applyPerson" width="200" show-overflow-tooltip> </el-table-column>
    <el-table-column label="申请人部门" prop="applyPart" width="200" show-overflow-tooltip> </el-table-column>
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
<script>
    export default {
        name: 'tableDemo',
        data() {
            return {
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
                selectTableRow: []
            }
        },
        methods: {
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
```

:::

### 多级表格

<div class="m-example">
列表可有多级展示
</div>

<div class="m-demo-row">
    <el-table row-key="id" :data="list2" default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
                <el-table-column prop="date" label="日期" sortable></el-table-column>
                <el-table-column prop="name" label="姓名"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
            </el-table>
</div>

::: details 示例代码

```html
<el-table row-key="id" :data="list2" default-expand-all :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
    <el-table-column prop="date" label="日期" sortable></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="address" label="地址"></el-table-column>
</el-table>
<script>
    export default {
        name: 'tableDemo',
        data() {
            return {
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
                ]
            }
        },
        methods: {}
    }
</script>
```

:::

### 可展开表格

<div class="m-example">
列表可展开更多内容
</div>

<div class="m-demo-row">
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

::: details 示例代码

```html
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

<script>
    export default {
        name: 'tableDemo',
        data() {
            return {
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
        methods: {}
    }
</script>
```

:::

### 链接

<a href='<https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot>t' target='_blank'>https://element.eleme.cn/#/zh-CN/component/table#table-column-scoped-slot</a>

#### 样式变量

| 变量名                    |                         默认值 |                                        说明 |
| ------------------------- | -----------------------------: | ------------------------------------------: |
| --table-text-color        |                 --nav-hover-bg |                                             |
| --table-tr-selected-color | --table-tr-selected-color\*0.1 |         0.1 透明度--table-tr-selected-color |
| --table-tr-hover-color    |   --table-tr-hover-color\*0.04 | 0.04 透明度--table-tr-hover-color--selected |
| --table-tr-border-color   |        --table-tr-border-color |                                             |
| --table-header-color      |           --table-header-color |                                             |
| --table-header-color      |           --table-header-color |                                             |

### Table Attributes

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
            <td>显示的数据</td>
            <td>array</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>height</td>
            <td>
                Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table
                的高度会受控于外部样式。
            </td>
            <td>string/number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>max-height</td>
            <td>Table 的最大高度。合法的值为数字或者单位为 px 的高度。</td>
            <td>string/number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>stripe</td>
            <td>是否为斑马纹 table</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>border</td>
            <td>是否带有纵向边框</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>size</td>
            <td>Table 的尺寸</td>
            <td>string</td>
            <td>medium / small / mini</td>
            <td>—</td>
        </tr>
        <tr>
            <td>fit</td>
            <td>列的宽度是否自撑开</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>show-header</td>
            <td>是否显示表头</td>
            <td>boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>highlight-current-row</td>
            <td>是否要高亮当前行</td>
            <td>boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>current-row-key</td>
            <td>当前行的 key，只写属性</td>
            <td>String,Number</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>row-class-name</td>
            <td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。</td>
            <td>Function({row, rowIndex})/String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>row-style</td>
            <td>行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。</td>
            <td>Function({row, rowIndex})/Object</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>cell-class-name</td>
            <td>单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。</td>
            <td>Function({row, column, rowIndex, columnIndex})/String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>cell-style</td>
            <td>单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。</td>
            <td>Function({row, column, rowIndex, columnIndex})/Object</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>header-row-class-name</td>
            <td>表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。</td>
            <td>Function({row, rowIndex})/String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>header-row-style</td>
            <td>表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。</td>
            <td>Function({row, rowIndex})/Object</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>header-cell-class-name</td>
            <td>表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。</td>
            <td>Function({row, column, rowIndex, columnIndex})/String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>header-cell-style</td>
            <td>表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。</td>
            <td>Function({row, column, rowIndex, columnIndex})/Object</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>row-key</td>
            <td>
                行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String
                时，支持多层访问：<code>user.info.id</code>，但不支持 <code>user.info[0].id</code>，此种情况请使用 <code>Function</code>。
            </td>
            <td>Function(row)/String</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>empty-text</td>
            <td>空数据时显示的文本内容，也可以通过 <code>slot="empty"</code> 设置</td>
            <td>String</td>
            <td>—</td>
            <td>暂无数据</td>
        </tr>
        <tr>
            <td>default-expand-all</td>
            <td>是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>expand-row-keys</td>
            <td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。</td>
            <td>Array</td>
            <td>—</td>
            <td></td>
        </tr>
        <tr>
            <td>default-sort</td>
            <td>默认的排序列的 prop 和顺序。它的<code>prop</code>属性指定默认的排序的列，<code>order</code>指定默认排序的顺序</td>
            <td>Object</td>
            <td><code>order</code>: ascending, descending</td>
            <td>如果只指定了<code>prop</code>, 没有指定<code>order</code>, 则默认顺序是ascending</td>
        </tr>
        <tr>
            <td>tooltip-effect</td>
            <td>tooltip <code>effect</code> 属性</td>
            <td>String</td>
            <td>dark/light</td>
            <td></td>
        </tr>
        <tr>
            <td>show-summary</td>
            <td>是否在表尾显示合计行</td>
            <td>Boolean</td>
            <td>—</td>
            <td>false</td>
        </tr>
        <tr>
            <td>sum-text</td>
            <td>合计行第一列的文本</td>
            <td>String</td>
            <td>—</td>
            <td>合计</td>
        </tr>
        <tr>
            <td>summary-method</td>
            <td>自定义的合计计算方法</td>
            <td>Function({ columns, data })</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>span-method</td>
            <td>合并行或列的计算方法</td>
            <td>Function({ row, column, rowIndex, columnIndex })</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>select-on-indeterminate</td>
            <td>在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行</td>
            <td>Boolean</td>
            <td>—</td>
            <td>true</td>
        </tr>
        <tr>
            <td>indent</td>
            <td>展示树形数据时，树节点的缩进</td>
            <td>Number</td>
            <td>—</td>
            <td>16</td>
        </tr>
        <tr>
            <td>lazy</td>
            <td>是否懒加载子节点数据</td>
            <td>Boolean</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>load</td>
            <td>加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息</td>
            <td>Function(row, treeNode, resolve)</td>
            <td>—</td>
            <td>—</td>
        </tr>
        <tr>
            <td>tree-props</td>
            <td>渲染嵌套数据的配置选项</td>
            <td>Object</td>
            <td>—</td>
            <td>{ hasChildren: 'hasChildren', children: 'children' }</td>
        </tr>
    </tbody>
</table>

<div>
    <contributor :maintainer="['zdl']" :members="['zdl']"></contributor>
</div>

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
