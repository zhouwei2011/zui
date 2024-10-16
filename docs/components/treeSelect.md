---
title: TreeSelect 树形选择框
---

# TreeSelect 树形选择框

结合了 el-select 和 el-tree 的下拉树

### 示例代码

```vue
<template>
    <div class="tree-select-demo">
        <h2 class="title">基础用法</h2>
        <div class="mb20">
            <el-tree-select :options="optionData" :value="valueId" :clearable="isClearable" :accordion="isAccordion" @getValue="getValue($event, 'valueId')"></el-tree-select>
        </div>
        <h2 class="title">附带搜索框</h2>
        <div class="mb20">
            <el-tree-select
                :options="optionData"
                :value="valueId1"
                :showSelect="true"
                :clearable="isClearable"
                :accordion="isAccordion"
                :reload="true"
                @getValue="getValue($event, 'valueId1')"
            ></el-tree-select>
        </div>
        <h2 class="title">多选用法</h2>
        <div class="mb20">
            <el-tree-select
                :options="optionData"
                :value="valueId2"
                :showSelect="true"
                :clearable="isClearable"
                :accordion="isAccordion"
                :showCheckbox="true"
                @getValue="getValue($event, 'valueId2')"
            ></el-tree-select>
        </div>
        <h2 class="title">懒加载</h2>
        <div class="mb20">
            <el-tree-select
                lazy
                showSelect
                @load="loadNode"
                :value="valueId3"
                :clearable="isClearable"
                :accordion="isAccordion"
                @getValue="getValue($event, 'valueId3')"
            ></el-tree-select>
        </div>
        <h2 class="title">显示父级</h2>
        <div class="mb20">
            <el-tree-select
                lazy
                showSelect
                @load="loadNode"
                :value="valueId4"
                :clearable="isClearable"
                :accordion="isAccordion"
                showParentLabel
                @getValue="getValue($event, 'valueId4')"
            ></el-tree-select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TreeSelectDemo',
    data() {
        return {
            isClearable: true, // 可清空（可选）
            isAccordion: true, // 可收起（可选）
            valueId: 1, // 初始ID（可选）
            valueId1: null,
            valueId2: [11, 2],
            valueId3: null,
            valueId4: null,
            // 选项列表（必选）
            list: [
                {
                    id: 1,
                    label: '节点1',
                    children: [
                        {
                            id: 2,
                            label: '节点1-1'
                        },
                        {
                            id: 3,
                            label: '节点1-2'
                        },
                        {
                            id: 4,
                            label: '节点1-3',
                            children: [
                                { id: 11, label: '节点1-3-1' },
                                {
                                    id: 12,
                                    label: '节点1-3-2',
                                    children: [
                                        { id: 13, label: '节点1-4-1' },
                                        {
                                            id: 14,
                                            label: '节点1-4-2',
                                            children: [
                                                { id: 15, label: '节点1-5-1' },
                                                { id: 16, label: '节点1-5-2' }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 5,
                    label: '节点2'
                },
                {
                    id: 6,
                    label: '节点3',
                    disabled: true
                },
                {
                    id: 7,
                    label: '节点4'
                },
                {
                    id: 8,
                    label: '节点5'
                },
                {
                    id: 9,
                    label: '节点6'
                },
                {
                    id: 10,
                    label: '节点7'
                }
            ]
        }
    },
    computed: {
        /* 转树形数据 */
        optionData() {
            return JSON.parse(JSON.stringify(this.list)) // 对源数据深度克隆
        },
        optionData1() {
            return JSON.parse(JSON.stringify(this.list)) // 对源数据深度克隆
        }
    },
    methods: {
        // 取值
        // 当为showParentLabel为tree,输出为valueArr:展示父节点/子节点
        getValue({ node, value, valueArr }, key) {
            this[key] = value
        },
        // 懒加载节点加载
        loadNode({ node, resolve }) {
            if (node.level === 0) {
                return resolve([{ label: 'region', id: `node_${node.level}_${new Date().getTime()}` }])
            }
            if (node.level > 1) return resolve([])

            setTimeout(() => {
                const data = [
                    {
                        label: 'leaf',
                        isLeaf: true,
                        id: `node_${node.level}_${new Date().getTime()}`
                    },
                    {
                        label: 'zone',
                        isLeaf: true,
                        id: `node_${node.level}_1_${new Date().getTime()}`
                    }
                ]

                resolve(data)
            }, 500)
        }
    }
}
</script>
```
