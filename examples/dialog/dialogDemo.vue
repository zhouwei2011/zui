<template>
    <div class="dialog-demo">
        <el-button type="primary" @click="showDialog('dialogVisible')">内嵌表单</el-button>
        <el-button type="primary" @click="showDialog('dialogVisible2')">搜索+表格+分页</el-button>
        <el-button type="primary" @click="showDialog('dialogVisible3')">文本</el-button>
        <el-dialog
            append-to-body
            destroy-on-close
            style="--dialog-max-height: 500px"
            class="zrx-dialog align-center"
            :before-close="handleClose"
            :visible.sync="dialogVisible"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
        >
            <template slot="title">
                <span class="el-dialog__title">标题</span>
            </template>
            <div class="el-dialog-content">
                <form-demo></form-demo>
            </div>
            <template slot="footer">
                <el-button type="primary">确定</el-button>
                <el-button @click="handleClose()">取消</el-button>
            </template>
        </el-dialog>
        <el-dialog
            append-to-body
            destroy-on-close
            style="--content-height: 500px"
            class="zrx-dialog align-center"
            :before-close="handleClose"
            :visible.sync="dialogVisible2"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
        >
            <template slot="title">
                <span class="el-dialog__title">标题</span>
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
                <el-button @click="handleClose()">取消</el-button>
            </template>
        </el-dialog>
        <el-dialog
            append-to-body
            destroy-on-close
            style="--dialog-max-height: 500px"
            custom-class="zrx-dialog center medium"
            :before-close="handleClose"
            :visible.sync="dialogVisible3"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
        >
            <template slot="title">
                <span class="el-dialog__title">标题</span>
            </template>
            <div class="el-dialog-content">
                <view-form></view-form>
            </div>
            <template slot="footer">
                <el-button type="primary">确定</el-button>
                <el-button @click="handleClose()">取消</el-button>
            </template>
        </el-dialog>
    </div>
</template>

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
    name: 'dialogDemo',
    components: { formDemo, viewForm },
    mixins: [fakeClickOutSide],
    created() {
        this.page.total = this.tableList.length
        this.tableList = this.tableList.slice(0, this.page.pageSize)
    },
    updated() {
        document.querySelector('.zrx-date-time-picker-panel').style.zIndex = '9999'
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
        showDialog(key) {
            this[key] = true
        },
        handleClose(done) {
            if (done) done()
            this.dialogVisible = false
            this.dialogVisible2 = false
            this.dialogVisible3 = false
        },
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
                    } else if (filterSearch.applyTime.length) {
                        // let lessArr = list.filter(item => {
                        //     let time = new Date(item.applyTime)
                        //     item.millisecond = time.getTime()
                        //     item.millisecond > timeRange[0]
                        // })
                        // list = this.tableList = list.filter(item => {
                        //     let time = new Date(item.applyTime)
                        //     item.millisecond = time.getTime()
                        //     item.millisecond > timeRange[0]
                        // })
                        // list = this.tableList = lessArr.filter(item => item.millisecond > timeRange[1])
                        // for (const i in list) {
                        //     if (list[i].millisecond > timeRange[0]) {
                        //         const element = object[key]
                        //     }
                        // }
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
                this.tableList = this.tableList.slice(this.page.pageSize * (newV - 1), this.page.pageSize * newV)
            },
            deep: true
        }
    }
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
</style>
