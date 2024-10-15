---
title: Cascader 级联选择器
---

# Cascader 级联选择器

当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择

### 点击触发

<div class="m-example">
    <el-cascader v-model="value1" :options="options"></el-cascader>
</div>

::: details 示例代码

```html
<el-cascader v-model="value1" :options="options"></el-cascader>
<script>
export default {
    data() {
        return {
            value1: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    children: [
                        {
                            value: 'shejiyuanze',
                            label: '设计原则',
                            children: [
                                {
                                    value: 'yizhi',
                                    label: '一致',
                                    disabled: 'disabled'
                                },
                                {
                                    value: 'fankui',
                                    label: '反馈'
                                },
                                {
                                    value: 'xiaolv',
                                    label: '效率'
                                },
                                {
                                    value: 'kekong',
                                    label: '可控'
                                }
                            ]
                        },
                        {
                            value: 'daohang',
                            label: '导航',
                            children: [
                                {
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                },
                                {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'ziyuan',
                    label: '资源',
                    children: [
                        {
                            value: 'axure',
                            label: 'Axure Components'
                        },
                        {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        },
                        {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
```

:::

### hover触发

<div class="m-example">
    <el-cascader v-model="value2" :options="options" :props="{ expandTrigger: 'hover' }" :clearable="true"></el-cascader>
</div>

::: details 示例代码

```html
<el-cascader v-model="value2" :options="options" :props="{ expandTrigger: 'hover' }" :clearable="true"></el-cascader>
<script>
export default {
    data() {
        return {
            value2: [],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    children: [
                        {
                            value: 'shejiyuanze',
                            label: '设计原则',
                            children: [
                                {
                                    value: 'yizhi',
                                    label: '一致',
                                    disabled: 'disabled'
                                },
                                {
                                    value: 'fankui',
                                    label: '反馈'
                                },
                                {
                                    value: 'xiaolv',
                                    label: '效率'
                                },
                                {
                                    value: 'kekong',
                                    label: '可控'
                                }
                            ]
                        },
                        {
                            value: 'daohang',
                            label: '导航',
                            children: [
                                {
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                },
                                {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'ziyuan',
                    label: '资源',
                    children: [
                        {
                            value: 'axure',
                            label: 'Axure Components'
                        },
                        {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        },
                        {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-cascader v-model="value3" :options="options" :props="{ expandTrigger: 'hover' }" disabled></el-cascader>
</div>

::: details 示例代码

```html
<el-cascader v-model="value3" :options="options" :props="{ expandTrigger: 'hover' }" disabled></el-cascader>
<script>
export default {
    data() {
        return {
            value3: ['zhinan', 'shejiyuanze', 'fankui'],
            options: [
                {
                    value: 'zhinan',
                    label: '指南',
                    children: [
                        {
                            value: 'shejiyuanze',
                            label: '设计原则',
                            children: [
                                {
                                    value: 'yizhi',
                                    label: '一致',
                                    disabled: 'disabled'
                                },
                                {
                                    value: 'fankui',
                                    label: '反馈'
                                },
                                {
                                    value: 'xiaolv',
                                    label: '效率'
                                },
                                {
                                    value: 'kekong',
                                    label: '可控'
                                }
                            ]
                        },
                        {
                            value: 'daohang',
                            label: '导航',
                            children: [
                                {
                                    value: 'cexiangdaohang',
                                    label: '侧向导航'
                                },
                                {
                                    value: 'dingbudaohang',
                                    label: '顶部导航'
                                }
                            ]
                        }
                    ]
                },
                {
                    value: 'ziyuan',
                    label: '资源',
                    children: [
                        {
                            value: 'axure',
                            label: 'Axure Components'
                        },
                        {
                            value: 'sketch',
                            label: 'Sketch Templates'
                        },
                        {
                            value: 'jiaohu',
                            label: '组件交互文档'
                        }
                    ]
                }
            ]
        }
    }
}
</script>
```

:::

### 动态加载

<div class="m-example">
    <el-cascader v-model="value4" :props="props" :clearable="true"></el-cascader>
</div>

::: details 示例代码

```html
<el-cascader v-model="value4" :props="props" :clearable="true"></el-cascader>
<script>
const options = [
    {
        value: 'zhinan',
        label: '指南',
        children: [
            {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                    {
                        value: 'yizhi',
                        label: '一致',
                        disabled: 'disabled'
                    },
                    {
                        value: 'fankui',
                        label: '反馈'
                    },
                    {
                        value: 'xiaolv',
                        label: '效率'
                    },
                    {
                        value: 'kekong',
                        label: '可控'
                    }
                ]
            },
            {
                value: 'daohang',
                label: '导航',
                children: [
                    {
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    },
                    {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
export default {
    data() {
        return {
            value4: [],
            props: {
                lazy: true,
                lazyLoad(node, resolve) {
                    const { level } = node
                    setTimeout(() => {
                        const nodes = options.map(item => ({
                            value: item.value,
                            label: item.label,
                            leaf: level >= 2
                        }))
                        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                        resolve(nodes)
                    }, 1000)
                }
            }
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.io/#/zh-CN/component/cascader](https://element.eleme.io/#/zh-CN/component/cascader)

#### 样式变量

| 变量名                    |                         默认值 |                                说明 |
| ------------------------- | -----------------------------: | ----------------------------------: |
| border                    |                       --border |                                     |
| --upload-text             |                    --font\*0.5 |                   0.5 透明度 --font |
| primary                   |                      --primary |                                     |
| --table-tr-selected-color | --table-tr-selected-color\*0.1 | 0.1 透明度--table-tr-selected-color |
| --btn-border-color        |        --table-tr-border-color |                                     |
| --text-disabled           |                    --font\*0.3 |                    0.3 透明度--font |
| background                |                   --background |                                     |
| white                     |                        --white |                                     |
| --nav-text                |                     --nav-text |                                     |
| primary-1                 |                    --primary-1 |                                     |
| --table-header-color      |           --table-header-color |                                     |

### Cascader Attributes

| 参数              | 说明                                         | 类型           | 可选值    | 默认值 |
| ----------------- | -------------------------------------------- | -------------- | --------- | ------ |
| `value / v-model` | 选中项绑定值  | array | — | — |
| `options` | 可选项数据源，键名可通过`Props`属性配置  | array | — | — |
| `props` | 配置选项，具体见下表  | object | — | — |
| `size` | 尺寸  | string | medium / small / mini | — |
| `placeholder` | 输入框占位文本  | string | — | 请选择 |
| `disabled` | 是否禁用  | boolean | — | false |
| `clearable` | 是否支持清空选项  | boolean | — | false |
| `show-all-levels` | 输入框中是否显示选中值的完整路径  | boolean | — | true |
| `collapse-tags` | 多选模式下是否折叠Tag  | boolean | — | false |
| `separator` | 选项分隔符  | string | — | / |
| `filterable` | 是否可搜索选项  | boolean | — | — |
| `filter-method` | 自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中  | function(node, keyword) | — | — |
| `debounce` | 搜索关键词输入的去抖延迟，毫秒  | number | — | 300 |
| `before-filter` | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选  | function(value) | — | — |
| `popper-class` | 自定义浮层类名  | string | — | — |

### Cascader Events

| 事件名称   | 说明         | 回调参数 |
| ---------- | ------------ | -------- |
| `change` | 当选中节点变化时触发 | 选中节点的值 |
| `expand-change` | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |
| `blur` | 当失去焦点时触发 | (event: Event) |
| `focus` | 当获得焦点时触发 | (event: Event) |
| `visible-change` | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| `remove-tag` | 在多选模式下，移除Tag时触发 | 移除的Tag对应的节点的值 |

### Cascader Slots

| name    | 说明       |
| ------- | ---------- |
| —       | 自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据   |
| `empty` | 无匹配选项时的内容 |

### CascaderPanel Attributes

| 参数          | 说明               | 类型           | 可选值 | 默认值 |
| ------------- | ------------------ | -------------- | ------ | ------ |
| `value / v-model` | 选中项绑定值 | —        | —      | —  |
| `options` | 可选项数据源，键名可通过`Props`属性配置 | array | —      | —  |
| `props` | 配置选项，具体见下表 | object | —      | —  |

### CascaderPanel Events

| 事件名称        | 说明         | 回调参数                           |
| --------------- | ------------ | ---------------------------------- |
| `change` | 当选中节点变化时触发 | 选中节点的值 |
| `expand-change` | 当展开节点发生变化时触发 | 各父级选项值组成的数组 |

### CascaderPanel Methods

| 方法名称               | 说明           | 参数 |
| ---------------------- | -------------- | ---- |
| `getCheckedNodes` | 获取选中的节点数组 | (leafOnly) 是否只是叶子节点，默认值为`false` |
| `clearCheckedNodes` | 清空选中的节点 | — |

### Props

| 参数       | 说明                                                               | 类型   | 可选值        | 默认值   |
| ---------- | ------------------------------------------------------------------ | ------ | ------------- | -------- |
| `expandTrigger`     | 次级菜单的展开方式 | string | click / hover | click |
| `multiple`     | 是否多选 | boolean | — | false |
| `checkStrictly`     | 是否严格的遵守父子节点不互相关联 | boolean | — | false |
| `emitPath`     | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置false，则只返回该节点的值 | boolean | — | true |
| `lazy`     | 是否动态加载子节点，需与`lazyLoad`方法结合使用 | boolean | — | false |
| `lazyLoad`     | 加载动态数据的方法，仅在 `lazy` 为 true 时有效 | function(node, resolve)，`node`为当前点击的节点，`resolve`为数据加载完成的回调(必须调用) | — | — |
| `value`     | 指定选项的值为选项对象的某个属性值 | string | — | value |
| `label`     | 指定选项标签为选项对象的某个属性值 | string | — | label |
| `children`     | 指定选项的子选项为选项对象的某个属性值 | string | — | children |
| `disabled`     | 指定选项的禁用为选项对象的某个属性值 | string | — | disabled |
| `leaf`     | 指定选项的叶子节点的标志位为选项对象的某个属性值 | string | — | leaf |

<div>
    <contributor :maintainer="['zdl']" :members="['zxl', 'zdl', 'gbb', 'agua', 'cmd']"></contributor>
</div>

<script>
const options = [
    {
        value: 'zhinan',
        label: '指南',
        children: [
            {
                value: 'shejiyuanze',
                label: '设计原则',
                children: [
                    {
                        value: 'yizhi',
                        label: '一致',
                        disabled: 'disabled'
                    },
                    {
                        value: 'fankui',
                        label: '反馈'
                    },
                    {
                        value: 'xiaolv',
                        label: '效率'
                    },
                    {
                        value: 'kekong',
                        label: '可控'
                    }
                ]
            },
            {
                value: 'daohang',
                label: '导航',
                children: [
                    {
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    },
                    {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }
                ]
            }
        ]
    },
    {
        value: 'ziyuan',
        label: '资源',
        children: [
            {
                value: 'axure',
                label: 'Axure Components'
            },
            {
                value: 'sketch',
                label: 'Sketch Templates'
            },
            {
                value: 'jiaohu',
                label: '组件交互文档'
            }
        ]
    }
]
export default {
    data() {
        return {
            value1: [],
            value2: [],
            value3: ['zhinan', 'shejiyuanze', 'fankui'],
            value4: [],
            options,
            props: {
                lazy: true,
                lazyLoad(node, resolve) {
                    const { level } = node
                    setTimeout(() => {
                        const nodes = options.map(item => ({
                            value: item.value,
                            label: item.label,
                            leaf: level >= 2
                        }))
                        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                        resolve(nodes)
                    }, 1000)
                }
            }
        }
    }
}
</script>
