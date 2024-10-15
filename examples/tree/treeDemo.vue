<template>
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

        <div class="left-tree">
            <el-input v-model="filterText1" placeholder="请输入搜索关键字" @keydown.native="toHandleSearch" :clearable="true">
                <i slot="suffix" class="svg-icon zrx-icon-magnifier" @click="toHandleSearch"></i>
            </el-input>
            <el-tree :data="list" :indent="34" ref="treeDemo1" :props="defaultProps" :showCheckbox="true" @node-click="handleNodeClick" :filter-node-method="filterNode"></el-tree>
        </div>
    </div>
</template>

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
