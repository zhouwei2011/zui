---
title: DropTree 下拉树
---

# DropTree 下拉树

专门的下拉树组件

### 基础用法

<div class="m-example">
    <ClientOnly>
        <zrx-drop-tree :data="treeData" v-model="value1" clearable></zrx-drop-tree>
    </ClientOnly>
</div>

::: details 示例代码

```html
<div class="m-example">
    <zrx-drop-tree :data="treeData" v-model="value1"></zrx-drop-tree>
</div>
<script>
    export default {
        data() {
            return {
                treeData: [
                    {
                        label: '一级 1',
                        id: '1',
                        children: [
                            {
                                label: '二级 1-1',
                                id: '1-1',
                                children: [
                                    {
                                        id: '1-1-1',
                                        label: '三级 1-1-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '2',
                        label: '一级 2',
                        children: [
                            {
                                id: '2-1',
                                label: '二级 2-1',
                                children: [
                                    {
                                        id: '2-1-1',
                                        label: '三级 2-1-1'
                                    }
                                ]
                            },
                            {
                                id: '2-2',
                                label: '二级 2-2',
                                children: [
                                    {
                                        id: '2-2-1',
                                        label: '三级 2-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '3',
                        label: '一级 3',
                        children: [
                            {
                                id: '3-1',
                                label: '二级 3-1',
                                children: [
                                    {
                                        id: '3-1-1',
                                        label: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                id: '3-2',
                                label: '二级 3-2',
                                children: [
                                    {
                                        id: '3-2-1',
                                        label: '三级 3-2-1，这是一段很长的文字这是一段很长的文字'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                value1: ['2-1']
            }
        }
    }
</script>
```

:::

### 多选

<div class="m-example">
    <ClientOnly>
        <zrx-drop-tree :data="treeData" v-model="value2" filterable multiple :popper-append-to-body="false"></zrx-drop-tree>
    </ClientOnly>
</div>

::: tip
单选模式时，不显示勾选框。多选模式时，自动显示多选框。默认单选
:::

::: details 示例代码

```html
<zrx-drop-tree :data="treeData" v-model="value2" filterable multiple :popper-append-to-body="false"></zrx-drop-tree>
<script>
    export default {
        data() {
            return {
                value2: ['2-1-1', '2-2-1']
            }
        }
    }
</script>
```

:::

### 横向滚动

<div class="m-example">
    <ClientOnly>
        <zrx-drop-tree :data="treeData" v-model="value3" horizontal></zrx-drop-tree>
    </ClientOnly>
</div>

::: tip
设置横向滚动时，下拉框内容超长，下拉框出现横向滚动条；未设置时，超出内容显示“...”
:::

::: details 示例代码

```html
<zrx-drop-tree :data="treeData" v-model="value3" horizontal></zrx-drop-tree>
<script>
    export default {
        data() {
            return {
                value3: []
            }
        }
    }
</script>
```

:::

### 文本显示

以文本的形式显示选中内容

<div class="m-example">
    <ClientOnly>
        <zrx-drop-tree :data="treeData" v-model="value4" multiple text-show-style="text"></zrx-drop-tree>
    </ClientOnly>
</div>

::: tip
未设置选中形式时，若为单选模式则显示文本，多选模式则显示标签。
:::

::: details 示例代码

```html
<zrx-drop-tree :data="treeData" v-model="value4" multiple text-show-style="text"></zrx-drop-tree>
<script>
    export default {
        data() {
            return {
                value4: ['3-1', '1-1', '1-1-1', '2', '2-1']
            }
        }
    }
</script>
```

:::

### 禁用

<div class="m-example">
    <ClientOnly>
        <zrx-drop-tree :data="treeData" v-model="value5" disabled multiple></zrx-drop-tree>
    </ClientOnly>
</div>

::: details 示例代码

```html
<zrx-drop-tree :data="treeData" v-model="value5" disabled multiple></zrx-drop-tree>
<script>
    export default {
        data() {
            return {
                value5: ['3-1-1', '2-1']
            }
        }
    }
</script>
```

:::

### 懒加载

<div class="m-example">
    <ClientOnly>
        <zrx-drop-tree :props="props" :load="loadNode" lazy show-checkbox></zrx-drop-tree>
    </ClientOnly>
</div>

::: details 示例代码

```html
<script>
    export default {
        data() {
            return {
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                }
            }
        },
        methods: {
            loadNode(node, resolve) {
                if (node.level === 0) {
                    return resolve([{ name: 'region' }])
                }
                if (node.level > 1) return resolve([])
                setTimeout(() => {
                    const data = [
                        {
                            name: 'leaf',
                            leaf: true
                        },
                        {
                            name: 'zone'
                        }
                    ]
                    resolve(data)
                }, 500)
            }
        }
    }
</script>
```

:::

### 插入组件内

将下拉框插入至组件内

<div class="m-example">
    <ClientOnly>
        <zrx-drop-tree :data="treeData" v-model="value6" popper-append-to-body></zrx-drop-tree>
    </ClientOnly>
</div>

::: tip
当遇到下拉框被遮挡的问题时，可将下拉框插入至 body。如果 body 不是滚动元素，可能会出现滚动时的显示问题
此时可设置"popper-append-to"属性将下拉框插入至指定元素（通常是滚动的元素，注意该元素需设置"relative"定位）
:::

::: details 示例代码

```html
<zrx-drop-tree :data="treeData" v-model="value6" popper-append-to-body></zrx-drop-tree>
<script>
    export default {
        data() {
            return {
                value6: []
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
            props: {
                label: 'name',
                children: 'zones',
                isLeaf: 'leaf'
            },
            treeData: [
                {
                    label: '一级 1',
                    id: '1',
                    children: [
                        {
                            label: '二级 1-1',
                            id: '1-1',
                            children: [
                                {
                                    id: '1-1-1',
                                    label: '三级 1-1-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '2',
                    label: '一级 2',
                    children: [
                        {
                            id: '2-1',
                            label: '二级 2-1',
                            children: [
                                {
                                    id: '2-1-1',
                                    label: '三级 2-1-1'
                                }
                            ]
                        },
                        {
                            id: '2-2',
                            label: '二级 2-2',
                            children: [
                                {
                                    id: '2-2-1',
                                    label: '三级 2-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '3',
                    label: '一级 3',
                    children: [
                        {
                            id: '3-1',
                            label: '二级 3-1',
                            children: [
                                {
                                    id: '3-1-1',
                                    label: '三级 3-1-1'
                                }
                            ]
                        },
                        {
                            id: '3-2',
                            label: '二级 3-2',
                            children: [
                                {
                                    id: '3-2-1',
                                    label: '三级 3-2-1，这是一段很长的文字这是一段很长的文字'
                                }
                            ]
                        }
                    ]
                }
            ],
            value1: ['2-1'],
            value2: ['2-1-1', '2-2-1'],
            value3: [],
            value4: ['3-1', '1-1', '1-1-1', '2', '2-1'],
            value5: ['3-1-1', '2-1'],
            value6: []
        }
    },
    methods: {
        loadNode(node, resolve) {
            if (node.level === 0) {
                return resolve([{ name: 'region' }])
            }
            if (node.level > 1) return resolve([])
            setTimeout(() => {
                const data = [
                    {
                        name: 'leaf',
                        leaf: true
                    },
                    {
                        name: 'zone'
                    }
                ]

                resolve(data)
            }, 500)
        }
    }
}
</script>
<style>
.zrx-drop-tree {
    width: 220px;
}
</style>

### 样式变量

| 变量名             |                默认值 | 说明 |
| ------------------ | --------------------: | ---: |
| $border            |              --border |      |
| $primary           |             --primary |      |
| $--nav-selected-bg | --nav-selected-bg/0.1 |      |
| $background        |          --background |      |
| $--text-disabled   |            --font/0.3 |      |
| $--placeholder     |            --font/0.3 |      |
| dropdown-shadow    |                    -- |      |
| $white             |               --white |      |

### Attributes

| 参数                    | 说明                                                                                         | 类型                | 可选值            | 默认值           |
| ----------------------- | -------------------------------------------------------------------------------------------- | ------------------- | ----------------- | ---------------- |
| `value/v-model`         | 所有选中项 key 值                                                                            | array               | —                 | []               |
| `data`                  | 下拉树数据                                                                                   | array               | —                 | []               |
| `props`                 | 树配置项                                                                                     | object              | 见[Props](#props) | —                |
| `multiple`              | 是否多选                                                                                     | boolean             | true, false       | false            |
| `placeholder`           | 空值提示                                                                                     | string              | —                 | 请选择           |
| `filter-placeholder`    | 搜索栏空值提示                                                                               | string              | —                 | 请输入关键字搜索 |
| `filterable`            | 是否可搜索树                                                                                 | boolean             | true, false       | false            |
| `horizontal`            | 是否在下拉框内横向滚动树                                                                     | boolean             | true, false       | false            |
| `check-strictly`        | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法                                     | boolean             | true, false       | true             |
| `popper-append-to-body` | 是否将下拉框插入至 body，默认插入至组件容器内。优先级低于`popper-append-to`                  | boolean             | true, false       | true             |
| `text-show-style`       | 选中项的展示形式                                                                             | string              | tag, text         | unset            |
| `clearable`             | 是否可一键清空                                                                               | boolean             | true, false       | false            |
| `disabled`              | 是否禁用                                                                                     | boolean             | true, false       | false            |
| `accordian`             | 是否每次只打开一个同级树节点展开                                                             | boolean             | true, false       | false            |
| `popper-append-to`      | 下拉框插入的父元素，若父元素滚动，需设置 `position: relative`。优先于`popper-append-to-body` | string, HTMLElement | —                 | unset            |

### Props

| 参数       | 说明                                                     | 类型                          | 可选值 | 默认值   |
| ---------- | -------------------------------------------------------- | ----------------------------- | ------ | -------- |
| `label`    | 指定节点标签为节点对象的某个属性值                       | string, function(data, node)  | —      | label    |
| `children` | 指定子树为节点对象的某个属性值                           | string                        | —      | children |
| `disabled` | 指定节点选择框是否禁用为节点对象的某个属性值             | boolean, function(data, node) | —      | disabled |
| `key`      | 指定节点唯一标识未节点对象的某个属性值                   | string                        | —      | id       |
| `isLeaf`   | 指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效 | boolean, function(data, node) | —      | —        |

### Methods

| 方法名称          | 说明                             | 参数 |
| ----------------- | -------------------------------- | ---- |
| `getTree`         | 获取内嵌 element tree 的 vm 对象 | —    |
| `reset`           | 重置下拉树                       | —    |
| `clearSearchword` | 清空搜索条件                     | —    |

### Events

| 事件名称      | 说明                         | 回调参数                                                                                       |
| ------------- | ---------------------------- | ---------------------------------------------------------------------------------------------- |
| `checkChange` | 节点选中状态发生变化时的回调 | 传递给 data 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |
| `onFocusout`  | 组件失去焦点时的回调         | —                                                                                              |

<div>
    <contributor :members="['agua', 'zdl']"></contributor>
</div>
