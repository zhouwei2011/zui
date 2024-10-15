<template>
    <div class="pagination-demo">
        {{ queryBody }}
        <zrx-pagination
            layout="total, sizes, ->, prev, pager, next, jumper"
            @prev-click="prevClickFunc"
            @next-click="nextClickFunc"
            @current-change="currentChangeFunc"
            @size-change="sizeChangeFunc"
            :page-size="queryBody.pageSize"
            :current-page="queryBody.pageNum"
            :total="150"
            :pagerCount="10"
            background
        ></zrx-pagination>
        <div class="item">
            <label>改变页数</label>
            <el-input-number v-model="queryBody.pageNum"></el-input-number>
            <el-button v-on:click="testFunc">改变页数</el-button>
        </div>
        <div class="item">
            <label>改变分页</label>
            <el-input-number v-model="queryBody.pageSize"></el-input-number>
        </div>
    </div>
</template>

<script>
export default {
    name: 'paginationDemo',
    data() {
        return {
            queryBody: {
                pageSize: 10,
                // pageNum: 119
                pageNum: 1
            }
        }
    },
    methods: {
        testFunc: function () {
            this.queryBody.pageNum = 20
        },
        testFunc2: function () {
            this.queryBody.pageSize = 20
        },
        prevClickFunc: function (pageNum) {
            this.queryBody.pageNum = pageNum
        },
        nextClickFunc: function (pageNum) {
            this.queryBody.pageNum = pageNum
        },
        currentChangeFunc: function (pageNum) {
            console.log('currentChangeFunc', pageNum)
            this.queryBody.pageNum = pageNum
        },
        sizeChangeFunc: function (pageSize) {
            console.log('sizeChangeFunc', pageSize)
            this.queryBody.pageSize = pageSize
        }
    }
}
</script>

<style scoped lang="scss">
.pagination-demo {
    .el-pagination {
        margin-bottom: 40px;
    }
    .item {
        display: grid;
        grid-template-columns: 100px 200px;
        .el-input-number {
            width: auto;
        }
    }
}
</style>
