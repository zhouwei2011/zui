---
title: Pagination 分页
---

# Pagination 分页

翻页器

### 基础用法

<div class="m-block">
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
</div>

::: details 示例代码

```html
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
<script>
export default {
    data() {
        return {
            queryBody: {
                pageSize: 10,
                pageNum: 1
            }
        }
    }
}
</script>
```

:::

<script>
export default {
    data() {
        return {
            queryBody: {
                pageSize: 10,
                pageNum: 1
            }
        }
    },
    methods: {
        prevClickFunc: function (pageNum) {
            this.queryBody.pageNum = pageNum
        },
        nextClickFunc: function (pageNum) {
            this.queryBody.pageNum = pageNum
        },
        currentChangeFunc: function (pageNum) {
            this.queryBody.pageNum = pageNum
        },
        sizeChangeFunc: function (pageSize) {
            this.queryBody.pageSize = pageSize
        }
    }
}
</script>

<div>
    <contributor :maintainer="['zz']" :members="['zz']"></contributor>
</div>
