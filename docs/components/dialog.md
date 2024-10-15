---
title: Dialog 对话框
---

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作

### 内嵌表单

<div class="m-example">
    <el-button type="primary" @click="dialogVisible = true">打开</el-button>
    <el-dialog
        append-to-body
        destroy-on-close
        style="--dialog-max-height: 500px"
        custom-class="zrx-dialog center"
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
    >
        <template slot="title">
            <span class="el-dialog-title">标题</span>
        </template>
        <div class="el-dialog-content">
            <form-demo></form-demo>
        </div>
        <template slot="footer">
            <el-button type="primary">确定</el-button>
            <el-button @click="dialogVisible = false">取消</el-button>
        </template>
    </el-dialog>
</div>

::: tip
对话框（复写的样式只有携带类名 zrx-dialog 才会生效）组件通常由三部分组成，分别是标题（可以通过 title 属性或者 slot="title"来构成）、内容（必须携带类名 el-dialog-content）、尾部，仅有内容部分可以滚动。
:::

::: details 示例代码

```html
<el-button type="primary" @click="dialogVisible = true">打开</el-button>
<el-dialog
    append-to-body
    destroy-on-close
    style="--dialog-max-height: 500px"
    custom-class="zrx-dialog center"
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
>
    <template slot="title">
        <span class="el-dialog-title">标题</span>
    </template>
    <div class="el-dialog-content">
        <form-demo></form-demo>
    </div>
    <template slot="footer">
        <el-button type="primary">确定</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
    </template>
</el-dialog>
<script>
export default {
    data() {
        return {
            dialogVisible: false
        }
    }
}
</script>
<style scoped lang="scss">
.zrx-date-time-picker-panel {
    z-index: 9999;
}
</style>
```

:::

### 搜索+表格+分页

<div class="m-example">
    <el-button type="primary" @click="dialogVisible2 = true">打开</el-button>
    <el-dialog
        append-to-body
        destroy-on-close
        style="--content-height: 500px"
        custom-class="zrx-dialog center"
        :visible.sync="dialogVisible2"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
    >
        <template slot="title">
            <span class="el-dialog-title">标题</span>
        </template>
        <div class="el-dialog-content">
            <zrx-search-box ref="searchBox" @onEnter="handleSearch(searchBox)"
                ><template slot="inputer"
                    ><div class="zrx-tandem-input">
                        <label class="label">流程标题</label>
                        <el-input placeholder="请输入流程标题" v-model="searchBox.name" maxlength="20"></el-input>
                    </div>
                    <div class="zrx-tandem-input">
                        <label class="label">申请人部门</label>
                        <el-select v-model="searchBox.applyPart" placeholder="请选择所属网格"
                            ><el-option label="全部" value=""></el-option><el-option label="城管部门" value="城管部门"></el-option>
                            <el-option label="消防大队" value="消防大队"></el-option>
                        </el-select>
                    </div>
                    <div class="zrx-tandem-input">
                        <label class="label">申请时间</label>
                        <zrx-date-time-picker
                            v-model="searchBox.applyTime"
                            type="datetimerange"
                            format="yyyy-MM-dd HH:mm:ss"
                            rangeSeparator="-"
                            :clearable="true"
                            placeholder="请选择申请时间"
                        ></zrx-date-time-picker>
                    </div>
                </template>
                <template slot="btn"
                    ><el-button type="primary" @click="handleSearch(searchBox)">查询</el-button> <el-button @click="handleResetSearch">重置</el-button></template
                ></zrx-search-box
            >
            <el-table
                :data="tableList"
                row-key="id"
                :height="'calc(100%)'"
                :row-class-name="
                    ({ row }) => {
                        return selectTableRow.find(item => item.id === row.id) ? 'selected-row' : 'normal-row'
                    }
                "
            >
                <el-table-column type="selection" width="60" align="center"></el-table-column>
                <el-table-column label="流程标题" prop="name" show-overflow-tooltip fixed="left"> </el-table-column>
                <el-table-column label="申请人" prop="applyPerson" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请人部门" prop="applyPart" show-overflow-tooltip> </el-table-column>
                <el-table-column label="申请时间" prop="applyTime" sortable="true" show-overflow-tooltip> </el-table-column>
                <el-table-column label="完成时间" prop="endTime" show-overflow-tooltip> </el-table-column>
                <el-table-column label="操作" width="200" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text">编辑</el-button>
                        <el-button type="text">复制</el-button>
                        <el-button type="text" :disabled="scope.row.status == 1">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <zrx-pagination
                layout="total, sizes, ->, prev, pager, next, jumper"
                @current-change="currentChangeFunc"
                @size-change="sizeChangeFunc"
                @prev-click="prevClickFunc"
                @next-click="nextClickFunc"
                :page-size="page.pageSize"
                :current-page="page.pageNum"
                :total="page.total"
                :pagerCount="10"
                adaptiveWidth
                background
            ></zrx-pagination>
        </div>
        <template slot="footer">
            <el-button type="primary">确定</el-button>
            <el-button @click="dialogVisible2 = false">取消</el-button>
        </template>
    </el-dialog>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="dialogVisible2 = true">打开</el-button>
<el-dialog
    append-to-body
    destroy-on-close
    style="--content-height: 500px"
    custom-class="zrx-dialog center"
    :visible.sync="dialogVisible2"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
>
    <template slot="title">
        <span class="el-dialog-title">标题</span>
    </template>
    <div class="el-dialog-content">
        <zrx-search-box ref="searchBox" @onEnter="handleSearch(searchBox)"
            ><template slot="inputer"
                ><div class="zrx-tandem-input">
                    <label class="label">流程标题</label>
                    <el-input placeholder="请输入流程标题" v-model="searchBox.name" maxlength="20"></el-input>
                </div>
                <div class="zrx-tandem-input">
                    <label class="label">申请人部门</label>
                    <el-select v-model="searchBox.applyPart" placeholder="请选择所属网格"
                        ><el-option label="全部" value=""></el-option><el-option label="城管部门" value="城管部门"></el-option>
                        <el-option label="消防大队" value="消防大队"></el-option>
                    </el-select>
                </div>
                <div class="zrx-tandem-input">
                    <label class="label">申请时间</label>
                    <zrx-date-time-picker
                        v-model="searchBox.applyTime"
                        type="datetimerange"
                        format="yyyy-MM-dd HH:mm:ss"
                        rangeSeparator="-"
                        :clearable="true"
                        placeholder="请选择申请时间"
                    ></zrx-date-time-picker>
                </div>
            </template>
            <template slot="btn"
                ><el-button type="primary" @click="handleSearch(searchBox)">查询</el-button> <el-button @click="handleResetSearch">重置</el-button></template
            ></zrx-search-box
        >
        <el-table
            :data="tableList"
            row-key="id"
            :height="'calc(100%)'"
            :row-class-name="
                ({ row }) => {
                    return selectTableRow.find(item => item.id === row.id) ? 'selected-row' : 'normal-row'
                }
            "
        >
            <el-table-column type="selection" width="60" align="center"></el-table-column>
            <el-table-column label="流程标题" prop="name" show-overflow-tooltip fixed="left"> </el-table-column>
            <el-table-column label="申请人" prop="applyPerson" show-overflow-tooltip> </el-table-column>
            <el-table-column label="申请人部门" prop="applyPart" show-overflow-tooltip> </el-table-column>
            <el-table-column label="申请时间" prop="applyTime" sortable="true" show-overflow-tooltip> </el-table-column>
            <el-table-column label="完成时间" prop="endTime" show-overflow-tooltip> </el-table-column>
            <el-table-column label="操作" width="200" fixed="right">
                <template slot-scope="scope">
                    <el-button type="text">编辑</el-button>
                    <el-button type="text">复制</el-button>
                    <el-button type="text" :disabled="scope.row.status == 1">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <zrx-pagination
            layout="total, sizes, ->, prev, pager, next, jumper"
            @current-change="currentChangeFunc"
            @size-change="sizeChangeFunc"
            @prev-click="prevClickFunc"
            @next-click="nextClickFunc"
            :page-size="page.pageSize"
            :current-page="page.pageNum"
            :total="page.total"
            :pagerCount="10"
            adaptiveWidth
            background
        ></zrx-pagination>
    </div>
    <template slot="footer">
        <el-button type="primary">确定</el-button>
        <el-button @click="dialogVisible2 = false">取消</el-button>
    </template>
</el-dialog>
<script>
const defaultTableList = [
    {
        id: '1',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
    },
    {
        id: '2',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
    },
    {
        id: '3',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
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
    },
    {
        id: '6',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '7',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '8',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '9',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '10',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
    },
    {
        id: '11',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '12',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '13',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '14',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '15',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    }
]
const defaultSearchBox = {
    name: '',
    applyPart: '',
    applyTime: []
}
export default {
    data() {
        return {
            dialogVisible2: false,
            selectTableRow: [],
            tableList: [...defaultTableList],
            searchBox: {
                ...defaultSearchBox
            },
            page: {
                pageSize: 10,
                pageNum: 1,
                total: null
            }
        }
    },
    methods: {
        handleSearch(search) {
            let filterSearch = {}
            let list = [...defaultTableList]
            let timeRange = search.applyTime && search.applyTime.map(time => time.getTime())
            for (const key in search) {
                if (search[key].length) {
                    filterSearch[key] = search[key]
                }
            }
            if (Object.keys(filterSearch).length) {
                for (const key in filterSearch) {
                    if (key !== 'applyTime') {
                        if (filterSearch[key]) {
                            list = this.tableList = list.filter(item => item[key].includes(filterSearch[key]))
                            this.page.total = this.tableList.length
                        }
                    }
                }
            } else {
                this.searchBox = defaultSearchBox
                this.tableList = [...defaultTableList].slice(0, this.page.pageSize)
                this.page.total = [...defaultTableList].length
                this.page.pageNum = 1
            }
        },
        currentChangeFunc(pageNo) {
            this.page.pageNum = pageNo
        },
        sizeChangeFunc(pageSize) {
            this.page.pageSize = pageSize
        },
        prevClickFunc(pageNum) {
            this.page.pageNum = pageNum
        },
        nextClickFunc(pageNum) {
            this.page.pageNum = pageNum
        },
        handleResetSearch() {
            this.searchBox = defaultSearchBox
            this.tableList = [...defaultTableList].slice(0, this.page.pageSize)
            this.page.total = [...defaultTableList].length
            this.page.pageSize = 10
            this.page.pageNum = 1
        }
    },
    created() {
        this.page.total = this.tableList.length
        this.tableList = this.tableList.slice(0, this.page.pageSize)
    }
}
</script>
```

:::

### 文本

<div class="m-example">
    <el-button type="primary" @click="dialogVisible3 = true">打开</el-button>
    <el-dialog
        append-to-body
        destroy-on-close
        style="--dialog-max-height: 500px"
        custom-class="zrx-dialog center medium"
        :visible.sync="dialogVisible3"
        :close-on-click-modal="false"
        :close-on-press-escape="false"
    >
        <template slot="title">
            <span class="el-dialog-title">标题</span>
        </template>
        <div class="el-dialog-content">
            <view-form></view-form>
        </div>
        <template slot="footer">
            <el-button type="primary">确定</el-button>
            <el-button @click="dialogVisible3 = false">取消</el-button>
        </template>
    </el-dialog>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="dialogVisible3 = true">打开</el-button>
<el-dialog
    append-to-body
    destroy-on-close
    style="--dialog-max-height: 500px"
    custom-class="zrx-dialog center medium"
    :visible.sync="dialogVisible3"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
>
    <template slot="title">
        <span class="el-dialog-title">标题</span>
    </template>
    <div class="el-dialog-content">
        <view-form></view-form>
    </div>
    <template slot="footer">
        <el-button type="primary">确定</el-button>
        <el-button @click="dialogVisible3 = false">取消</el-button>
    </template>
</el-dialog>

<script>
export default {
    data() {
        return {
            dialogVisible3: false
        }
    }
}
</script>
```

:::

<script>
import formDemo from '/examples/form/formDemo.vue'
import viewForm from '/examples/viewForm/viewFormDemo.vue'
import fakeClickOutSide from '/src/utils/fakeClickOutSide'
const defaultTableList = [
    {
        id: '1',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
    },
    {
        id: '2',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
    },
    {
        id: '3',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
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
    },
    {
        id: '6',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '7',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '8',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '城管部门',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '9',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '10',
        name: '流程名称-developer',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2023-1-03 12:00:00',
        endTime: '2023-1-06 12:00:00'
    },
    {
        id: '11',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '12',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '13',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '14',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    },
    {
        id: '15',
        name: '流程名称-admin',
        applyPerson: 'admin',
        applyPart: '消防大队',
        applyTime: '2017-10-01 12:00:00',
        endTime: '2017-10-01 12:00:00'
    }
]
const defaultSearchBox = {
    name: '',
    applyPart: '',
    applyTime: []
}
export default {
    components: { formDemo, viewForm },
    watch: {
        'page.pageSize': {
            handler(newV) {
                let copyTableList = JSON.parse(JSON.stringify(this.tableList))
                this.tableList = copyTableList.slice(0, this.page.pageSize)
            }
        },
        'page.pageNum': {
            handler(newV) {
                this.tableList = [...defaultTableList]
                this.tableList = this.tableList.slice(this.page.pageSize *(newV - 1), this.page.pageSize* newV)
            },
            deep: true
        }
    },
    data() {
        return {
            dialogVisible: false,
            dialogVisible2: false,
            dialogVisible3: false,
            selectTableRow: [],
            tableList: [...defaultTableList],
            searchBox: {
                ...defaultSearchBox
            },
            page: {
                pageSize: 10,
                pageNum: 1,
                total: null
            }
        }
    },
    methods: {
        //查询
        handleSearch(search) {
            let filterSearch = {}
            let list = [...defaultTableList]
            let timeRange = search.applyTime && search.applyTime.map(time => time.getTime())
            for (const key in search) {
                if (search[key].length) {
                    filterSearch[key] = search[key]
                }
            }
            if (Object.keys(filterSearch).length) {
                for (const key in filterSearch) {
                    if (key !== 'applyTime') {
                        if (filterSearch[key]) {
                            list = this.tableList = list.filter(item => item[key].includes(filterSearch[key]))
                            this.page.total = this.tableList.length
                        }
                    }
                }
            } else {
                this.searchBox = defaultSearchBox
                this.tableList = [...defaultTableList].slice(0, this.page.pageSize)
                this.page.total = [...defaultTableList].length
                this.page.pageNum = 1
            }
        },
        //分页器相关操作
        currentChangeFunc(pageNo) {
            this.page.pageNum = pageNo
        },
        sizeChangeFunc(pageSize) {
            this.page.pageSize = pageSize
        },
        prevClickFunc(pageNum) {
            this.page.pageNum = pageNum
        },
        nextClickFunc(pageNum) {
            this.page.pageNum = pageNum
        },
        // 重置
        handleResetSearch() {
            this.searchBox = defaultSearchBox
            this.tableList = [...defaultTableList].slice(0, this.page.pageSize)
            this.page.total = [...defaultTableList].length
            this.page.pageSize = 10
            this.page.pageNum = 1
        }
    },
    created() {
        this.page.total = this.tableList.length
        this.tableList = this.tableList.slice(0, this.page.pageSize)
    },
    mixins: [fakeClickOutSide]
}
</script>

<style scoped lang="scss">
.zrx-pagination {
    margin: 0 16px;
}
.el-table {
    width: auto;
    margin: 16px;
}
.el-dialog-content {
    display: flex;
    flex-direction: column;
}
.zrx-date-time-picker-panel {
    z-index: 9999;
}
</style>

### 链接

[https://element.eleme.cn/#/zh-CN/component/dialog](https://element.eleme.cn/#/zh-CN/component/dialog)

### 样式变量

| 变量名                 |       默认值 | 说明 |
| ---------------------- | -----------: | ---: |
| --dialog-padding       |       0 16px |      |
| --dialog-max-height    |        600px |      |
| --dialog-header-height |         40px |      |
| --dialog-footer-height |         56px |      |
| --dialog-footer-bg     | --background |      |

### Attributes

| 参数                  | 说明                                                                         | 类型                                 | 可选值 | 默认值 |
| --------------------- | ---------------------------------------------------------------------------- | ------------------------------------ | ------ | ------ |
| `visible`               | 是否显示 Dialog，支持 `.sync` 修饰符                                           | boolean                              | —      | false  |
| `title`                 | Dialog 的标题，也可通过具名 slot （见下表）传入                              | string                               | —      | —      |
| `width`                 | Dialog 的宽度                                                                | string                               | —      | 50%    |
| `fullscreen`            | 是否为全屏 Dialog                                                            | boolean                              | —      | false  |
| `top`                   | Dialog CSS 中的 `margin-top` 值                                                | string                               | —      | 15vh   |
| `modal`                 | 是否需要遮罩层                                                               | boolean                              | —      | true   |
| `modal-append-to-body`  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean                              | —      | true   |
| `append-to-body`        | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean                              | —      | false  |
| `lock-scroll`           | 是否在 Dialog 出现时将 body 滚动锁定                                         | boolean                              | —      | true   |
| `custom-class`          | Dialog 的自定义类名                                                          | string                               | —      | —      |
| `close-on-click-modal`  | 是否可以通过点击 modal 关闭 Dialog                                           | boolean                              | —      | true   |
| `close-on-press-escape` | 是否可以通过按下 ESC 关闭 Dialog                                             | boolean                              | —      | true   |
| `show-close`            | 是否显示关闭按钮                                                             | boolean                              | —      | true   |
| `before-close`          | 关闭前的回调，会暂停 Dialog 的关闭                                           | function(done)，done 用于关闭 Dialog | —      | —      |
| `center`                | 是否对头部和底部采用居中布局                                                 | boolean                              | —      | false  |
| `destroy-on-close`      | 关闭时销毁 Dialog 中的元素                                                   | boolean                              | —      | false  |

### Slots

| name   | 说明                    |
| ------ | ----------------------- |
| —      | Dialog 的内容           |
| `title`  | Dialog 标题区的内容     |
| `footer` | Dialog 按钮操作区的内容 |

### Events

| 事件名称 | 说明                        | 回调参数 |
| -------- | --------------------------- | -------- |
| `open`     | Dialog 打开的回调           | —        |
| `opened`   | Dialog 打开动画结束时的回调 | —        |
| `close`    | Dialog 关闭的回调           | —        |
| `closed`   | Dialog 关闭动画结束时的回调 | —        |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'gbb', 'agua']"></contributor>
</div>
