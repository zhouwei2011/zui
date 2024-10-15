---
title: Tree 树
---

# Tree 树

显示树形数据

### 基础用法

<div class="m-example">
最基础的用法，节点可点击，可展开和收起
</div>

<div class="m-demo-row">
    <div class="tree-demo">
        <div class="left-tree">
            <el-input v-model="filterText" placeholder="请输入搜索关键字" @keydown.native="handleSearch" :clearable="true">
                <i slot="suffix" class="svg-icon zrx-icon-magnifier" @click="handleSearch"></i>
            </el-input>
            <el-tree
                :data="list"
                :indent="34"
                :props="defaultProps"
                @node-click="handleNodeClick"
                :filter-node-method="filterNode"
                :expand-on-click-node="false"
                ref="treeDemo"
            ></el-tree>
        </div>
    </div>
</div>

::: details 示例代码

```html
<div class="tree-demo">
    <div class="left-tree">
        <el-input v-model="filterText" placeholder="请输入搜索关键字" @keydown.native="handleSearch" :clearable="true">
            <i slot="suffix" class="svg-icon zrx-icon-magnifier" @click="handleSearch"></i>
        </el-input>
        <el-tree
            :data="list"
            :indent="34"
            :props="defaultProps"
            @node-click="handleNodeClick"
            :filter-node-method="filterNode"
            :expand-on-click-node="false"
            ref="treeDemo"
        ></el-tree>
    </div>
</div>
<script>
    export default {
        name: 'treeDemo',
        data() {
            return {
                filterText: '',
                defaultProps: {
                    label: 'label',
                    children: 'children',
                    disabled: 'disabled'
                },
                list: [
                    {
                        label: '一级 1',
                        children: [
                            {
                                label: '二级 1-1',
                                children: [
                                    {
                                        label: '三级 1-1-1'
                                    },
                                    {
                                        label: '三级 1-1-2',
                                        children: [{ label: '四级 1-1-1', children: [{ label: '五级 1-1-2' }] }]
                                    }
                                ]
                            },
                            {
                                label: '二级 1-2'
                            }
                        ]
                    },
                    {
                        label: '一级 2',
                        children: [
                            {
                                label: '二级 2-1',
                                children: [
                                    {
                                        label: '三级 2-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 2-2',
                                children: [
                                    {
                                        label: '三级 2-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 3',
                        children: [
                            {
                                label: '二级 3-1',
                                children: [
                                    {
                                        label: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 3-2',
                                children: [
                                    {
                                        label: '三级 3-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 4'
                    }
                ],
                list1: [
                    {
                        label: '一级 1',
                        children: [
                            {
                                label: '二级 1-1',
                                children: [
                                    {
                                        label: '三级 1-1-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 2',
                        children: [
                            {
                                label: '二级 2-1',
                                children: [
                                    {
                                        label: '三级 2-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 2-2',
                                children: [
                                    {
                                        label: '三级 2-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 3',
                        children: [
                            {
                                label: '二级 3-1',
                                children: [
                                    {
                                        label: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 3-2',
                                children: [
                                    {
                                        label: '三级 3-2-1'
                                    }
                                ]
                            }
                        ]
                    }
                ],
                list2: [
                    {
                        label: '一级 1',
                        id: 1,
                        children: [
                            {
                                label: '二级 1-1',
                                id: '1-1',
                                children: [
                                    { id: '1-1-1', label: '三级 1-1-1' },
                                    { id: '1-1-2', label: '三级 1-1-2' }
                                ]
                            },
                            { id: '1-2', label: '二级 1-2', disabled: true }
                        ]
                    },
                    {
                        label: '一级 2',
                        id: '2',
                        children: [
                            {
                                id: '2-1',
                                label: '二级 2-1',
                                children: [{ id: '2-1-1', label: '三级 2-1-1' }]
                            },
                            {
                                label: '二级 2-2',
                                id: '2-2',
                                children: [{ id: '2-2-1', label: '三级 2-2-1' }]
                            }
                        ]
                    },
                    {
                        label: '一级 3',
                        id: 3,
                        children: [
                            {
                                label: '二级 3-1',
                                id: '3-1',
                                children: [{ id: '3-1-1', label: '三级 3-1-1' }]
                            },
                            {
                                label: '二级 3-2',
                                id: '3-2',
                                children: [{ id: '3-2-1', label: '三级 3-2-1' }]
                            }
                        ]
                    },
                    {
                        label: '一级 4',
                        id: '4',
                        disabled: true
                    }
                ]
            }
        },
        watch: {
            filterText(newVal) {
                this.$refs.treeDemo && this.$refs.treeDemo.filter(newVal)
            },
            filterText1(newVal) {
                this.$refs.treeDemo1 && this.$refs.treeDemo1.filter(newVal)
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data)
            },
            handleClick(data) {
                console.log(data)
            },
            handleSearch() {
                this.$refs.treeDemo && this.$refs.treeDemo.filter(this.filterText)
            },
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            }
        }
    }
</script>
```

:::

### 可多选用法

<div class="m-example">
节点可多选，可展开和收起
</div>

<div class="m-demo-row">
    <div class="tree-demo">
        <div class="left-tree">
            <el-input v-model="filterText1" placeholder="请输入搜索关键字" @keydown.native="toHandleSearch" :clearable="true">
                <i slot="suffix" class="svg-icon zrx-icon-magnifier" @click="toHandleSearch"></i>
            </el-input>
            <el-tree :data="list" :indent="34" ref="treeDemo1" :props="defaultProps" :showCheckbox="true" @node-click="handleNodeClick" :filter-node-method="filterNode"></el-tree>
        </div>
    </div>
</div>

::: details 示例代码

```html
<div class="tree-demo">
    <div class="left-tree">
        <el-input v-model="filterText1" placeholder="请输入搜索关键字" @keydown.native="toHandleSearch" :clearable="true">
            <i slot="suffix" class="svg-icon zrx-icon-magnifier" @click="toHandleSearch"></i>
        </el-input>
        <el-tree :data="list" :indent="34" ref="treeDemo1" :props="defaultProps" :showCheckbox="true" @node-click="handleNodeClick" :filter-node-method="filterNode"></el-tree>
    </div>
</div>
<script>
    export default {
        name: 'treeDemo',
        data() {
            return {
                filterText: '',
                filterText1: '',
                defaultProps: {
                    label: 'label',
                    children: 'children',
                    disabled: 'disabled'
                },
                list: [
                    {
                        label: '一级 1',
                        children: [
                            {
                                label: '二级 1-1',
                                children: [
                                    {
                                        label: '三级 1-1-1'
                                    },
                                    {
                                        label: '三级 1-1-2',
                                        children: [{ label: '四级 1-1-1', children: [{ label: '五级 1-1-2' }] }]
                                    }
                                ]
                            },
                            {
                                label: '二级 1-2'
                            }
                        ]
                    },
                    {
                        label: '一级 2',
                        children: [
                            {
                                label: '二级 2-1',
                                children: [
                                    {
                                        label: '三级 2-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 2-2',
                                children: [
                                    {
                                        label: '三级 2-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 3',
                        children: [
                            {
                                label: '二级 3-1',
                                children: [
                                    {
                                        label: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 3-2',
                                children: [
                                    {
                                        label: '三级 3-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 4'
                    }
                ]
            }
        },
        watch: {
            filterText(newVal) {
                this.$refs.treeDemo && this.$refs.treeDemo.filter(newVal)
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data)
            },
            handleClick(data) {
                console.log(data)
            },

            toHandleSearch() {
                this.$refs.treeDemo1 && this.$refs.treeDemo1.filter(this.filterText1)
            },
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            }
        }
    }
</script>
```

:::

### 懒加载

<div class="m-example">
    <el-tree :data="tree2" :props="props" :load="loadNode" lazy show-checkbox></el-tree>
</div>

### 链接

[https://element.eleme.cn/#/zh-CN/component/input](https://element.eleme.cn/#/zh-CN/component/input)

#### 样式变量

| 变量名             |          默认值 |                 说明 |
| ------------------ | --------------: | -------------------: |
| --tree-node-height |            32px |                      |
| font               |          --font |                      |
| --selected-primary | --selected\*0.1 | 0.1 透明度--selected |

#### Tree Attributes

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
                <td>展示数据</td>
                <td>array</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>empty-text</td>
                <td>内容为空的时候展示的文本</td>
                <td>String</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>node-key</td>
                <td>每个树节点用来作为唯一标识的属性，整棵树应该是唯一的</td>
                <td>String</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>props</td>
                <td>配置选项，具体看下表</td>
                <td>object</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>render-after-expand</td>
                <td>是否在第一次展开某个树节点后才渲染其子节点</td>
                <td>boolean</td>
                <td>—</td>
                <td>true</td>
            </tr>
            <tr>
                <td>load</td>
                <td>加载子树数据的方法，仅当 lazy 属性为true 时生效</td>
                <td>function(node, resolve)</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>render-content</td>
                <td>树节点的内容区的渲染 Function</td>
                <td>Function(h, { node, data, store }</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>highlight-current</td>
                <td>是否高亮当前选中节点，默认值是 false。</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>default-expand-all</td>
                <td>是否默认展开所有节点</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>expand-on-click-node</td>
                <td>
                    是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为
                    false，则只有点箭头图标的时候才会展开或者收缩节点。
                </td>
                <td>boolean</td>
                <td>—</td>
                <td>true</td>
            </tr>
            <tr>
                <td>check-on-click-node</td>
                <td>是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>auto-expand-parent</td>
                <td>展开子节点的时候是否自动展开父节点</td>
                <td>boolean</td>
                <td>—</td>
                <td>true</td>
            </tr>
            <tr>
                <td>default-expanded-keys</td>
                <td>默认展开的节点的 key 的数组</td>
                <td>array</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>show-checkbox</td>
                <td>节点是否可被选择</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>check-strictly</td>
                <td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>default-checked-keys</td>
                <td>默认勾选的节点的 key 的数组</td>
                <td>array</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>current-node-key</td>
                <td>当前选中的节点</td>
                <td>string, number</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>filter-node-method</td>
                <td>对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏</td>
                <td>Function(value, data, node)</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>accordion</td>
                <td>是否每次只打开一个同级树节点展开</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>indent</td>
                <td>相邻级节点间的水平缩进，单位为像素</td>
                <td>number</td>
                <td>—</td>
                <td>16</td>
            </tr>
            <tr>
                <td>icon-class</td>
                <td>自定义树节点的图标</td>
                <td>string</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>lazy</td>
                <td>是否懒加载子节点，需与 load 方法结合使用</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>draggable</td>
                <td>是否开启拖拽节点功能</td>
                <td>boolean</td>
                <td>—</td>
                <td>false</td>
            </tr>
            <tr>
                <td>allow-drag</td>
                <td>判断节点能否被拖拽</td>
                <td>Function(node)</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>allow-drop</td>
                <td>
                    拖拽时判定目标节点能否被放置。<code>type</code> 参数有三种情况：'prev'、'inner' 和
                    'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后
                </td>
                <td>Function(draggingNode, dropNode, type)</td>
                <td>—</td>
                <td>—</td>
            </tr>
        </tbody>
    </table>

#### Tree Props

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
                <td>label</td>
                <td>指定节点标签为节点对象的某个属性值</td>
                <td>string, function(data, node)</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>children</td>
                <td>指定子树为节点对象的某个属性值</td>
                <td>string</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>disabled</td>
                <td>指定节点选择框是否禁用为节点对象的某个属性值</td>
                <td>boolean, function(data, node)</td>
                <td>—</td>
                <td>—</td>
            </tr>
            <tr>
                <td>isLeaf</td>
                <td>指定节点是否为叶子节点，仅在指定了 lazy 属性的情况下生效</td>
                <td>boolean, function(data, node)</td>
                <td>—</td>
                <td>—</td>
            </tr>
        </tbody>
    </table>

#### Tree Methods

<table>
            <thead>
                <tr>
                    <th>方法名</th>
                    <th>说明</th>
                    <th>参数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>filter</td>
                    <td>对树节点进行筛选操作</td>
                    <td>接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数</td>
                </tr>
                <tr>
                    <td>updateKeyChildren</td>
                    <td>通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性</td>
                    <td>(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组</td>
                </tr>
                <tr>
                    <td>getCheckedNodes</td>
                    <td>
                        若节点可被选择（即 <code>show-checkbox</code> 为
                        <code>true</code>），则返回目前被选中的节点所组成的数组
                    </td>
                    <td>
                        (leafOnly, includeHalfChecked) 接收两个 boolean 类型的参数，1. 是否只是叶子节点，默认值为
                        <code>false</code> 2. 是否包含半选节点，默认值为 <code>false</code>
                    </td>
                </tr>
                <tr>
                    <td>setCheckedNodes</td>
                    <td>设置目前勾选的节点，使用此方法必须设置 node-key 属性</td>
                    <td>(nodes) 接收勾选节点数据的数组</td>
                </tr>
                <tr>
                    <td>getCheckedKeys</td>
                    <td>
                        若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点的
                        key 所组成的数组
                    </td>
                    <td>
                        (leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点的
                        keys，默认值为 <code>false</code>
                    </td>
                </tr>
                <tr>
                    <td>setCheckedKeys</td>
                    <td>通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性</td>
                    <td>
                        (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为
                        <code>true</code> 则仅设置叶子节点的选中状态，默认值为 <code>false</code>
                    </td>
                </tr>
                <tr>
                    <td>setChecked</td>
                    <td>通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性</td>
                    <td>
                        (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean
                        类型，节点是否选中 3. boolean 类型，是否设置子节点 ，默认为 false
                    </td>
                </tr>
                <tr>
                    <td>getHalfCheckedNodes</td>
                    <td>
                        若节点可被选择（即 <code>show-checkbox</code> 为
                        <code>true</code>），则返回目前半选中的节点所组成的数组
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>getHalfCheckedKeys</td>
                    <td>
                        若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前半选中的节点的
                        key 所组成的数组
                    </td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>getCurrentKey</td>
                    <td>获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>getCurrentNode</td>
                    <td>获取当前被选中节点的 data，若没有节点被选中则返回 null</td>
                    <td>—</td>
                </tr>
                <tr>
                    <td>setCurrentKey</td>
                    <td>通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td>
                    <td>(key) 待被选节点的 key，若为 null 则取消当前高亮的节点</td>
                </tr>
                <tr>
                    <td>setCurrentNode</td>
                    <td>通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td>
                    <td>(node) 待被选节点的 node</td>
                </tr>
                <tr>
                    <td>getNode</td>
                    <td>根据 data 或者 key 拿到 Tree 组件中的 node</td>
                    <td>(data) 要获得 node 的 key 或者 data</td>
                </tr>
                <tr>
                    <td>remove</td>
                    <td>删除 Tree 中的一个节点，使用此方法必须设置 node-key 属性</td>
                    <td>(data) 要删除的节点的 data 或者 node</td>
                </tr>
                <tr>
                    <td>append</td>
                    <td>为 Tree 中的一个节点追加一个子节点</td>
                    <td>
                        (data, parentNode) 接收两个参数，1. 要追加的子节点的 data 2. 子节点的 parent 的 data、key 或者
                        node
                    </td>
                </tr>
                <tr>
                    <td>insertBefore</td>
                    <td>为 Tree 的一个节点的前面增加一个节点</td>
                    <td>
                        (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的后一个节点的 data、key
                        或者 node
                    </td>
                </tr>
                <tr>
                    <td>insertAfter</td>
                    <td>为 Tree 的一个节点的后面增加一个节点</td>
                    <td>
                        (data, refNode) 接收两个参数，1. 要增加的节点的 data 2. 要增加的节点的前一个节点的 data、key
                        或者 node
                    </td>
                </tr>
            </tbody>
        </table>

#### Tree Events

<table>
        <thead>
            <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>node-click</td>
                <td>节点被点击时的回调</td>
                <td>
                    共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的
                    Node、节点组件本身。
                </td>
            </tr>
            <tr>
                <td>node-contextmenu</td>
                <td>当某一节点被鼠标右键点击时会触发该事件</td>
                <td>
                    共四个参数，依次为：event、传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的
                    Node、节点组件本身。
                </td>
            </tr>
            <tr>
                <td>check-change</td>
                <td>节点选中状态发生变化时的回调</td>
                <td>
                    共三个参数，依次为：传递给
                    <code>data</code> 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点
                </td>
            </tr>
            <tr>
                <td>check</td>
                <td>当复选框被点击的时候触发</td>
                <td>
                    共两个参数，依次为：传递给
                    <code>data</code> 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含
                    checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性
                </td>
            </tr>
            <tr>
                <td>current-change</td>
                <td>当前选中节点变化时触发的事件</td>
                <td>共两个参数，依次为：当前节点的数据，当前节点的 Node 对象</td>
            </tr>
            <tr>
                <td>node-expand</td>
                <td>节点被展开时触发的事件</td>
                <td>
                    共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的
                    Node、节点组件本身
                </td>
            </tr>
            <tr>
                <td>node-collapse</td>
                <td>节点被关闭时触发的事件</td>
                <td>
                    共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的
                    Node、节点组件本身
                </td>
            </tr>
            <tr>
                <td>node-drag-start</td>
                <td>节点开始拖拽时触发的事件</td>
                <td>共两个参数，依次为：被拖拽节点对应的 Node、event</td>
            </tr>
            <tr>
                <td>node-drag-enter</td>
                <td>拖拽进入其他节点时触发的事件</td>
                <td>共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event</td>
            </tr>
            <tr>
                <td>node-drag-leave</td>
                <td>拖拽离开某个节点时触发的事件</td>
                <td>共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event</td>
            </tr>
            <tr>
                <td>node-drag-over</td>
                <td>在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）</td>
                <td>共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event</td>
            </tr>
            <tr>
                <td>node-drag-end</td>
                <td>拖拽结束时（可能未成功）触发的事件</td>
                <td>
                    共四个参数，依次为：被拖拽节点对应的
                    Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event
                </td>
            </tr>
            <tr>
                <td>node-drop</td>
                <td>拖拽成功完成时触发的事件</td>
                <td>
                    共四个参数，依次为：被拖拽节点对应的
                    Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event
                </td>
            </tr>
        </tbody>
    </table>

<div>
    <contributor :maintainer="['zxl']" :members="['zdl','zxl']"></contributor>
</div>

<script>
    export default {
        name: 'treeDemo',
        data() {
            return {
                props: {
                    label: 'name',
                    children: 'zones',
                    isLeaf: 'leaf'
                },
                tree2: [],
                filterText: '',
                filterText1: '',
                defaultProps: {
                    label: 'label',
                    children: 'children',
                    disabled: 'disabled'
                },
                list: [
                    {
                        label: '一级 1',
                        children: [
                            {
                                label: '二级 1-1',
                                children: [
                                    {
                                        label: '三级 1-1-1'
                                    },
                                    {
                                        label: '三级 1-1-2',
                                        children: [{ label: '四级 1-1-1', children: [{ label: '五级 1-1-2' }] }]
                                    }
                                ]
                            },
                            {
                                label: '二级 1-2'
                            }
                        ]
                    },
                    {
                        label: '一级 2',
                        children: [
                            {
                                label: '二级 2-1',
                                children: [
                                    {
                                        label: '三级 2-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 2-2',
                                children: [
                                    {
                                        label: '三级 2-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 3',
                        children: [
                            {
                                label: '二级 3-1',
                                children: [
                                    {
                                        label: '三级 3-1-1'
                                    }
                                ]
                            },
                            {
                                label: '二级 3-2',
                                children: [
                                    {
                                        label: '三级 3-2-1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        label: '一级 4'
                    }
                ]
            }
        },
        watch: {
            filterText(newVal) {
                this.$refs.treeDemo && this.$refs.treeDemo.filter(newVal)
            },
            filterText1(newVal) {
                this.$refs.treeDemo1 && this.$refs.treeDemo1.filter(newVal)
            }
        },
        methods: {
            handleNodeClick(data) {
                console.log(data)
            },
            handleClick(data) {
                console.log(data)
            },
              handleSearch() {
                this.$refs.treeDemo && this.$refs.treeDemo.filter(this.filterText)
            },
            toHandleSearch() {
                this.$refs.treeDemo1 && this.$refs.treeDemo1.filter(this.filterText1)
            },
            filterNode(value, data) {
                if (!value) return true
                return data.label.indexOf(value) !== -1
            },
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
<style scoped lang="scss">
.tree-demo {
    display: flex;
    height: 300px;
    .left-tree {
        width: 240px;
        height: 100%;
        margin-right: 30px;
        padding: 16px 12px 0 12px;
        background-color: transparent;
        overflow: hidden;
        .el-input {
            &.el-input--suffix {
                width: 100%;
                height: 32px;
                margin-bottom: 12px;
            }
        }
        .el-tree {
            height: 100%;
            overflow: auto;
        }
    }
    .node-suffix {
        font-size: 12px;
        color: $primary;
        float: right;
    }
}
</style>
