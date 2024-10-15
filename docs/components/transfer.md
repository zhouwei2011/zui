---
title: Transfer 穿梭框
---

# Transfer 穿梭框

自定义穿梭框，目前开发的自定义穿梭框有表格型和列表型，不支持组织树穿梭框，如果需要建议另外自定义开发组织树穿梭框。

### 表格项穿梭框(默认)

<div class="m-example">
    <div class="container">
        <p style="line-height:40px;">基础模式</p>
        <zrx-transfer :data="data" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
    </div>
    <div class="container">
        <p style="line-height:40px;">多个目标池</p>
        <zrx-transfer :data="data" :targetConfig="targetConfig" @updateModelValue="updateModelValueOne" :modelValue="[[21, 33], [3]]"></zrx-transfer>
    </div>
</div>

::: details 示例代码

```html
基础模式
<zrx-transfer :data="data" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
多个目标池
<zrx-transfer :data="data" :targetConfig="targetConfig" @updateModelValue="updateModelValueOne" :modelValue="[[21, 33], [3]]"></zrx-transfer>
<script>
export default {
    data() {
        return {
            data: [
                {
                    key: 1,
                    label: '选项一a',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 2,
                    label: '选项二',
                    group: '分组一'
                },
                {
                    key: 3,
                    label: '选项三',
                    group: '分组一'
                },
                {
                    key: 4,
                    label: '选项四',
                    group: '分组一'
                },
                {
                    key: 21,
                    label: '选项一',
                    group: '分组二'
                },
                {
                    key: 22,
                    label: '选项二a',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 23,
                    label: '选项三',
                    group: '分组二'
                },
                {
                    key: 24,
                    label: '选项四',
                    group: '分组二'
                },
                {
                    key: 31,
                    label: '选项一',
                    group: '分组三'
                },
                {
                    key: 32,
                    label: '选项二a',
                    group: '分组三',
                    disabled: true
                },
                {
                    key: 33,
                    label: '选项三',
                    group: '分组三'
                },
                {
                    key: 34,
                    label: '选项四',
                    group: '分组三'
                }
            ],
            targetConfig: [
                {
                    key: 1,
                    title: '已选择',
                    label: '负责人',
                    placeholder: '请输入'
                },
                {
                    key: 2,
                    title: '已选择',
                    label: '成员',
                    placeholder: '请输入'
                }
            ]
        }
    },
    methods: {
        updateModelValueOne(result) {}
    }
}
</script>

```

:::

### 列表项穿梭框

<div class="m-example">
    <div class="container">
        <p style="line-height:40px;">基础模式</p>
        <zrx-transfer :data="data" type="list" :showSearch="false" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
    </div>
    <div class="container">
        <p style="line-height:40px;">多个目标池</p>
        <zrx-transfer :data="data" type="list" :targetConfig="targetConfig" @updateModelValue="updateModelValueOne" :modelValue="[[21, 33], [3]]"></zrx-transfer>
    </div>
</div>

::: details 示例代码

```html
基础模式
<zrx-transfer :data="data" type="list" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
多个目标池
<zrx-transfer :data="data" type="list" :targetConfig="targetConfig" @updateModelValue="updateModelValueOne" :modelValue="[[21, 33], [3]]"></zrx-transfer>
<script>
export default {
    data() {
        return {
            data: [
                {
                    key: 1,
                    label: '选项一a',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 2,
                    label: '选项二',
                    group: '分组一'
                },
                {
                    key: 3,
                    label: '选项三',
                    group: '分组一'
                },
                {
                    key: 4,
                    label: '选项四',
                    group: '分组一'
                },
                {
                    key: 21,
                    label: '选项一',
                    group: '分组二'
                },
                {
                    key: 22,
                    label: '选项二a',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 23,
                    label: '选项三',
                    group: '分组二'
                },
                {
                    key: 24,
                    label: '选项四',
                    group: '分组二'
                },
                {
                    key: 31,
                    label: '选项一',
                    group: '分组三'
                },
                {
                    key: 32,
                    label: '选项二a',
                    group: '分组三',
                    disabled: true
                },
                {
                    key: 33,
                    label: '选项三',
                    group: '分组三'
                },
                {
                    key: 34,
                    label: '选项四',
                    group: '分组三'
                }
            ],
            targetConfig: [
                {
                    key: 1,
                    title: '已选择',
                    label: '负责人',
                    placeholder: '请输入'
                },
                {
                    key: 2,
                    title: '已选择',
                    label: '成员',
                    placeholder: '请输入'
                }
            ]
        }
    },
    methods: {
        updateModelValueOne(result) {}
    }
}
</script>

```

:::

### 分组模式

<div class="m-example">
    <div class="container">
        <zrx-transfer :data="data" showGroup @updateModelValue="updateModelValueTwo" :modelValue="[21, 33]"></zrx-transfer>
    </div>
    <div class="container">
        <p style="line-height:40px;">多个目标池</p>
        <zrx-transfer :data="data" showGroup :targetConfig="targetConfig" @updateModelValue="updateModelValueTwo" :modelValue="[[21, 33], []]"></zrx-transfer>
    </div>
</div>

::: details 示例代码

```html
<zrx-transfer :data="data" showGroup @updateModelValue="updateModelValueTwo" :modelValue="[21, 33]"></zrx-transfer>
多个目标池
<zrx-transfer :data="data" showGroup :targetConfig="targetConfig" @updateModelValue="updateModelValueTwo" :modelValue="[[21, 33], []]"></zrx-transfer>
<script>
export default {
    data() {
        return {
            data: [
                {
                    key: 1,
                    label: '选项一a',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 2,
                    label: '选项二',
                    group: '分组一'
                },
                {
                    key: 3,
                    label: '选项三',
                    group: '分组一'
                },
                {
                    key: 4,
                    label: '选项四',
                    group: '分组一'
                },
                {
                    key: 21,
                    label: '选项一',
                    group: '分组二'
                },
                {
                    key: 22,
                    label: '选项二a',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 23,
                    label: '选项三',
                    group: '分组二'
                },
                {
                    key: 24,
                    label: '选项四',
                    group: '分组二'
                },
                {
                    key: 31,
                    label: '选项一',
                    group: '分组三'
                },
                {
                    key: 32,
                    label: '选项二a',
                    group: '分组三',
                    disabled: true
                },
                {
                    key: 33,
                    label: '选项三',
                    group: '分组三'
                },
                {
                    key: 34,
                    label: '选项四',
                    group: '分组三'
                }
            ],
            targetConfig: [
                {
                    key: 1,
                    title: '已选择',
                    label: '负责人',
                },
                {
                    key: 2,
                    title: '已选择',
                    label: '成员',
                }
            ]
        }
    },
    methods: {
        updateModelValueTwo(result) {}
    }
}
</script>

```

:::

### props配置

<div class="m-example">
    <div class="container">
        <p style="line-height: 40px">列表项</p>
        <zrx-transfer :data="data1" type="list" :props="props1" :showSearch="false" @updateModelValue="updateModelValueOne" :modelValue="[3, 4]"></zrx-transfer>
    </div>
    <div class="container">
        <p style="line-height: 40px">表格项</p>
        <zrx-transfer :data="data1" :props="props2" showGroup @updateModelValue="updateModelValueOne" :modelValue="[]"></zrx-transfer>
    </div>
</div>

::: details 示例代码

```html
列表项
<zrx-transfer :data="data1" type="list" :props="props1" :showSearch="false" @updateModelValue="updateModelValueOne" :modelValue="[3, 4]"></zrx-transfer>
表格项
<zrx-transfer :data="data1" :props="props2" showGroup @updateModelValue="updateModelValueOne" :modelValue="[]"></zrx-transfer>
<script>
export default {
    data() {
        return {
            props1: {
                key: 'id',
                label: 'name'
            },
            props2: {
                key: 'id',
                label: 'name',
                group: 'type',
                groupLabel: 'typeName'
            },
            data1: [
                {
                    id: 0,
                    name: '选项0',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 1,
                    name: '选项1',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 2,
                    name: '选项2',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 3,
                    name: '选项3',
                    type: 'b',
                    typeName: '分组b'
                },
                {
                    id: 4,
                    name: '选项4',
                    type: 'b',
                    typeName: '分组b'
                },
                {
                    id: 5,
                    name: '选项5',
                    type: 'b',
                    typeName: '分组b'
                },
            ]
        }
    },
    methods: {
        updateModelValueOne(result) {}
    }
}
</script>

```

:::

### 表头多数据显示

<div class="m-example">
    <div class="container">
        <zrx-transfer :data="data" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
    </div>
</div>

#### 表头多数据显示-多个目标池

<div class="m-example">
    <div class="container">
        <zrx-transfer :data="data" :targetConfig="targetConfig" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne"></zrx-transfer>
    </div>
</div>

::: details 示例代码

```html

<zrx-transfer :data="data" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>

<zrx-transfer :data="data" :targetConfig="targetConfig" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne"></zrx-transfer>
<script>
export default {
    data() {
        return {
            data: [
                {
                    key: 1,
                    label: '选项一a',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 2,
                    label: '选项二',
                    group: '分组一'
                },
                {
                    key: 3,
                    label: '选项三',
                    group: '分组一'
                },
                {
                    key: 4,
                    label: '选项四',
                    group: '分组一'
                },
                {
                    key: 21,
                    label: '选项一',
                    group: '分组二'
                },
                {
                    key: 22,
                    label: '选项二a',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 23,
                    label: '选项三',
                    group: '分组二'
                },
                {
                    key: 24,
                    label: '选项四',
                    group: '分组二'
                },
                {
                    key: 31,
                    label: '选项一',
                    group: '分组三'
                },
                {
                    key: 32,
                    label: '选项二a',
                    group: '分组三',
                    disabled: true
                },
                {
                    key: 33,
                    label: '选项三',
                    group: '分组三'
                },
                {
                    key: 34,
                    label: '选项四',
                    group: '分组三'
                }
            ],
            targetConfig: [
                {
                    key: 1,
                    title: '已选择',
                    label: '负责人',
                },
                {
                    key: 2,
                    title: '已选择',
                    label: '成员',
                }
            ],
            tableColumns: [
                {
                    title: '选项',
                    key: 'label',
                    isShowTitle: true
                },
                {
                    title: 'key',
                    key: 'key'
                },
                {
                    title: '是否选择',
                    key: 'disabled'
                }
            ]
        }
    },
    methods: {
        updateModelValueOne(result) {}
    }
}
</script>

```

:::

### 分组模式-表头多数据显示

<div class="m-example">
    <div class="container">
        <zrx-transfer :data="data" showGroup :tableColumns="tableColumns" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
    </div>
</div>

#### 分组模式-表头多数据显示-多个目标池

<div class="m-example">
    <div class="container">
        <zrx-transfer :data="data" showGroup :targetConfig="targetConfig" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne" :modelValue="[[21, 33], [4]]"></zrx-transfer>
    </div>
</div>

::: details 示例代码

```html

<zrx-transfer :data="data" :targetConfig="targetConfig" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne"></zrx-transfer>

<zrx-transfer :data="data" showGroup :targetConfig="targetConfig" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne" :modelValue="[[21, 33], [4]]"></zrx-transfer>
<script>
export default {
    data() {
        return {
            data: [
                {
                    key: 1,
                    label: '选项一a',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 2,
                    label: '选项二',
                    group: '分组一'
                },
                {
                    key: 3,
                    label: '选项三',
                    group: '分组一'
                },
                {
                    key: 4,
                    label: '选项四',
                    group: '分组一'
                },
                {
                    key: 21,
                    label: '选项一',
                    group: '分组二'
                },
                {
                    key: 22,
                    label: '选项二a',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 23,
                    label: '选项三',
                    group: '分组二'
                },
                {
                    key: 24,
                    label: '选项四',
                    group: '分组二'
                },
                {
                    key: 31,
                    label: '选项一',
                    group: '分组三'
                },
                {
                    key: 32,
                    label: '选项二a',
                    group: '分组三',
                    disabled: true
                },
                {
                    key: 33,
                    label: '选项三',
                    group: '分组三'
                },
                {
                    key: 34,
                    label: '选项四',
                    group: '分组三'
                }
            ],
            targetConfig: [
                {
                    key: 1,
                    title: '已选择',
                    label: '负责人',
                },
                {
                    key: 2,
                    title: '已选择',
                    label: '成员',
                }
            ],
            tableColumns: [
                {
                    title: '选项',
                    key: 'label',
                    isShowTitle: true
                },
                {
                    title: 'key',
                    key: 'key'
                },
                {
                    title: '是否选择',
                    key: 'disabled'
                }
            ]
        }
    },
    methods: {
        updateModelValueOne(result) {}
    }
}
</script>

```

:::

<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            data: [
                {
                    key: 1,
                    label: '选项一a',
                    group: '分组一分组一分组一分组一分组一分组一',
                    disabled: true
                },
                {
                    key: 2,
                    label: '选项二',
                    group: '分组一'
                },
                {
                    key: 3,
                    label: '选项三',
                    group: '分组一'
                },
                {
                    key: 4,
                    label: '选项四',
                    group: '分组一'
                },
                {
                    key: 21,
                    label: '选项一',
                    group: '分组二'
                },
                {
                    key: 22,
                    label: '选项二a',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 23,
                    label: '选项三',
                    group: '分组二'
                },
                {
                    key: 24,
                    label: '选项四',
                    group: '分组二'
                },
                {
                    key: 31,
                    label: '选项一',
                    group: '分组三'
                },
                {
                    key: 32,
                    label: '选项二a',
                    group: '分组三',
                    disabled: true
                },
                {
                    key: 33,
                    label: '选项三',
                    group: '分组三'
                },
                {
                    key: 34,
                    label: '选项四',
                    group: '分组三'
                }
            ],
            props1: {
                key: 'id',
                label: 'name'
            },
            props2: {
                key: 'id',
                label: 'name',
                group: 'type',
                groupLabel: 'typeName'
            },
            data1: [
                {
                    id: 0,
                    name: '选项0',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 1,
                    name: '选项1',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 2,
                    name: '选项2',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 3,
                    name: '选项3',
                    type: 'b',
                    typeName: '分组b'
                },
                {
                    id: 4,
                    name: '选项4',
                    type: 'b',
                    typeName: '分组b'
                },
                {
                    id: 5,
                    name: '选项5',
                    type: 'b',
                    typeName: '分组b'
                },
            ],
            targetConfig: [
                {
                    key: 1,
                    title: '已选择',
                    label: '负责人',
                    placeholder: '请输入'
                },
                {
                    key: 2,
                    title: '已选择',
                    label: '成员',
                    placeholder: '请输入'
                }
            ],
            modelValue: {},
            dialogObj: {
                showDialog: false,
                transferShow: false,
                dialogData: [],
                modelValueDialog: [[]]
            },
            changeData: [
                {
                    key: 101,
                    label: '选项一10',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 102,
                    label: '选项二10',
                    group: '分组一'
                },
                {
                    key: 103,
                    label: '选项三10',
                    group: '分组一'
                },
                {
                    key: 104,
                    label: '选项四10',
                    group: '分组一'
                },
                {
                    key: 121,
                    label: '选项一12',
                    group: '分组二'
                },
                {
                    key: 122,
                    label: '选项二12',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 123,
                    label: '选项三12',
                    group: '分组二'
                },
                {
                    key: 124,
                    label: '选项四12',
                    group: '分组二'
                }
            ],
            tableColumns: [
                {
                    title: '选项',
                    key: 'label',
                    isShowTitle: true
                },
                {
                    title: 'key',
                    key: 'key'
                },
                {
                    title: '是否选择',
                    key: 'disabled'
                }
            ]
        }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
        updateModelValueOne(result) {},
        updateModelValueTwo(result) {},
        openTransfer() {
            this.dialogObj.showDialog = true
            this.dialogObj.transferShow = true

            setTimeout(() => {
                this.dialogObj.dialogData = [...this.data]
                this.dialogObj.modelValueDialog = [
                    [21, 33],
                    [2, 4]
                ] // [21, 33]
                this.$nextTick(() => {
                    this.$refs.transferRef.init()
                })
            }, 1000)
        },
        updateModelValueDialog(result) {},
        handleOk() {},
        handleCancel() {
            this.dialogObj = {
                showDialog: false,
                transferShow: false,
                dialogData: [],
                modelValueDialog: [[]]
            }
        },
        changeSourceData() {
            this.dialogObj.dialogData = [...this.changeData]
            this.$nextTick(() => {
                this.$refs.transferRef.init()
            })
        }
    },
    computed: {},
    filters: {}
}
</script>
<style scoped lang="scss">
.contain {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    .box {
        width: 750px;
        height: 546px;
        margin-bottom: 50px;
    }
}
</style>

### Attributes

| 参数           | 说明                 | 类型    | 可选值     | 默认值 |
| -------------- | -------------------- | ------- | ---------- | ------ |
| `type`    | 表格项穿梭框、列表项穿梭框 | String  | table/list         | table      |
| `showSearch`    | 是否显示搜索框 | Boolean  | true/false         | true      |
| `showGroup`    | 是否按照分组显示 | Boolean  | true/false         | false      |
| `placeholder`    | 输入检索框的提示文字 | String  | —         | 请输入      |
| `props`    | 数据展示配置项               | object  | 参见props  | {}    |
| `data`    | 配置选项，具体看下表             | Array  | -  | []    |
| `targetConfig`    | 目标池子的个数配置项             | Array  | 参见targetConfigProps  | 默认显示一个目标池  |
| `tableColumns`    | 表头字段数据展示配置项               | Array  | 参见tableColumnsProps  | 默认显示一个表头字段     |
| `searchByGroup`    | 是否可以按照分组进行关键字检索 | Boolean  | true/false         | true      |
| `sourceTitle`    | 来源池的标题 | String  | -        | 待选择      |
| `modelValue`    | 初始数据回显 | Array  | -         | []      |

### Events

| 事件名              | 说明                     | 回调参数    |
| ----------------- | ------------------------ | ------- |
| `updateModelValue` | 来源池数据,目标池数据改变向外部传递数据   | 目标池数据  |

### props

| 参数         | 说明                       | 类型  | 可选值 | 默认值     |
| ------------ | -------------------------- | ----- | ------ | ---------- |
| `key`  | 关键字段，需要唯一 | String | —     | key  |
| `label` | 搜索显示字段 | String | —     | label |
| `group`  | 分组字段key，需要唯一 | String | —     | group  |
| `groupLabel` | 显示的分组字段label(不传就直接显示group对应的字段) | String | —     | — |
| `disabled`  | 禁选字段，根据该对应字段处理禁选 | String | -     | disabled  |

### targetConfigProps

| 参数         | 说明                       | 类型  | 可选值 | 默认值     |
| ------------ | -------------------------- | ----- | ------ | ---------- |
| `key`  | 关键字段，需要唯一 | String | —     | 1  |
| `title` | 目标池标题 | String | —     | 已选择 |
| `label`  | 目标池副标题 | String | —     | —  |
| `showSearch` | 目标池是否显示搜索 | true/false | —     | 当没有传目标池的配置，根据Attributes里`showSearch`对应的字段展示 |
| `placeholder`  | 目标池输入检索框的提示文字 | String | —     | 该字段不传就显示Attributes里`placeholder`字段 |

### tableColumnsProps

| 参数         | 说明                       | 类型  | 可选值 | 默认值     |
| ------------ | -------------------------- | ----- | ------ | ---------- |
| `title`  | 表头字段 | String | —     | 选项 |
| `key` | 该字段对应的属性key| String | —     | 当没有传表头的配置项,根据props的label对应的字段展示 |
| `width`  | 该列的宽度，不传默认平均分配,只能传数字，单位px | String/Number | —     | —  |
| `isShowTitle`  | 是否鼠标移入显示title | true/false | —     | true  |

<div>
    <contributor :maintainer="['wt']" :members="['wt']"></contributor>
</div>
