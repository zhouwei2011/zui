<template>
    <el-select
        v-bind="$attrs"
        v-on="$listeners"
        ref="treeSelect"
        :value="valueTitle"
        :title="valueTitle"
        @clear="clearHandle"
        :clearable="clearable"
        @change="handleChange"
        :multiple="showCheckbox"
        :reload="reload"
        @visible-change="visibleChange"
        popper-class="tree-select-popper"
    >
        <el-option :value="selectValue" :label="selectValue" class="options">
            <div class="zrx-search-box" v-if="showSelect" @click.stop="focusSearch">
                <el-input ref="searchInput" v-model="filterText" :placeholder="searchPlaceholder" @input="handleSearch"> </el-input>
            </div>
            <el-tree
                :lazy="lazy"
                :props="props"
                :data="options"
                ref="selectTree"
                id="tree-option"
                :load="loadNode"
                :accordion="accordion"
                :node-key="props.value"
                :expand-on-click-node="false"
                :show-checkbox="showCheckbox"
                @node-click="handleNodeClick"
                :filter-node-method="filterNode"
                @check-change="handleNodeCheckChange"
                :default-checked-keys="defaultChecked"
                :default-expanded-keys="defaultExpandedKey"
            >
                <div slot-scope="{ data }" :title="data[props.label] || null" :class="['select-tree-label', { disabled: data[props.disabled] }]">
                    {{ data[props.label] }}
                </div>
            </el-tree>
        </el-option>
    </el-select>
</template>

<script>
/**
 * @description 结合element-ui中Select和Tree实现
 * https://www.jianshu.com/p/921f8e80cfe7
 * @date 2020-07-28
 */
export default {
    name: 'el-tree-select',
    props: {
        /* 配置项 */
        props: {
            type: Object,
            default: () => {
                return {
                    value: 'id', // ID字段名
                    label: 'label', // 显示名称
                    disabled: 'disabled', // 是否禁用节点
                    children: 'children', // 子级字段名
                    isLeaf: 'isLeaf'
                }
            }
        },
        /* 选项列表数据(树形结构的对象数组) */
        options: {
            type: Array,
            default: () => {
                return []
            }
        },
        /* 初始值 */
        value: {
            type: [Number, String, Array],
            default: () => {
                return null
            }
        },
        /* 可清空选项 */
        clearable: {
            type: Boolean,
            default: true
        },
        /* 自动收起 */
        accordion: {
            type: Boolean,
            default: false
        },
        searchPlaceholder: {
            type: String,
            default: '检索关键字'
        },
        showSelect: {
            type: Boolean,
            default: false
        },
        showCheckbox: {
            type: Boolean,
            default: false
        },
        // lazy 下拉选项是否懒加载，需要配合load方法使用
        lazy: {
            type: Boolean,
            default: false
        },
        // 下拉面板展开的时候是否重置树的查询，并展开所有子节点
        reload: {
            type: Boolean,
            default: false
        },
        // 选择后是否展示父节点/子节点
        showParentLabel: {
            type: Boolean,
            default: false
        },
        // 是否记忆上一次滚动的条所在的位置
        memoryScrollTop: {
            type: Boolean,
            default: true
        },
        // 是否设置默认展开
        defaultExpand: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            filterText: '',
            valueTitle: '',
            selectValue: '',
            defaultChecked: [],
            defaultExpandedKey: [],
            valueId: this.value, // 初始值
            oldScrollTop: 1 // nodeClick
        }
    },
    mounted() {
        this.initHandle()
    },
    methods: {
        focusSearch() {
            this.$refs.searchInput?.focus()
        },
        isEmpty(value) {
            return [null, undefined, NaN, []].includes(value)
        },
        handleChange(val) {
            if (this.showCheckbox) {
                this.valueId = this.valueId.filter(item => {
                    let targetNode = this.$refs.selectTree.getNode(item)
                    return targetNode && val.includes(targetNode.data[this.props.label])
                })
                this.defaultChecked = this.valueId
                this.$refs.selectTree.setCheckedKeys(this.defaultChecked)
            }
        },
        // 初始化值
        initHandle() {
            if (!this.isEmpty(this.valueId)) {
                if (this.showCheckbox) {
                    // 多选
                    this.valueTitle = []
                    this.valueId.forEach(item => {
                        let targetNode = this.$refs.selectTree.getNode(item)
                        if (targetNode) {
                            this.defaultChecked.push(targetNode.data[this.props.value])
                            this.valueTitle.push(targetNode.data[this.props.label])
                        }
                    })

                    this.$refs.selectTree.setCheckedKeys(this.defaultChecked)
                } else {
                    // 单选

                    let targetNode = this.$refs.selectTree.getNode(this.valueId)
                    if (!targetNode) {
                        this.valueTitle = ''
                        return false
                    }
                    this.valueTitle = this.showParentLabel ? this.handleTreeNode(targetNode).name : targetNode.data[this.props.label] // 初始化显示
                    this.$refs.selectTree.setCurrentKey(this.valueId) // 设置默认选中
                    this.defaultExpandedKey = this.defaultExpand ? [this.valueId] : []
                }
            }
        },
        // 切换选项
        handleNodeClick(node, treeNode) {
            if (this.showCheckbox) return false
            if (node[this.props.disabled]) {
                return false
            }
            this.valueTitle = this.showParentLabel ? this.handleTreeNode(treeNode).name : node[this.props.label]
            this.valueId = node[this.props.value]

            this.$emit('getValue', {
                node: node,
                value: this.valueId,
                valueArr: this.showParentLabel ? this.handleTreeNode(treeNode).valueStr.split(',') : []
            })
            this.$refs.treeSelect.blur()
            // 点击的时候记忆滚动的位移距离
            if (this.memoryScrollTop) {
                this.oldScrollTop = this.$refs.selectTree?.$el?.parentElement?.parentElement?.parentElement?.scrollTop || 1
            }
        },
        // 多选
        handleNodeCheckChange(data, checked, indeterminate) {
            // 选中的节点
            let checkNodes = this.$refs.selectTree.getCheckedNodes(true, false)
            this.valueTitle = checkNodes.map(item => item.label)
            this.valueId = checkNodes.map(item => item.id)
            this.defaultChecked = [...this.valueId]
            this.$emit('getValue', {
                node: checkNodes,
                value: this.valueId
            })
        },
        // 清除选中
        clearHandle() {
            this.valueTitle = ''
            this.valueId = null
            this.selectValue = null
            this.defaultChecked = []
            // 清空搜索值，重置树
            this.reloadTree()
            this.clearSelected()
            this.defaultExpandedKey = []
            this.$refs.selectTree.setCheckedKeys(this.defaultChecked)
            this.$emit('getValue', {
                value: null,
                node: null
            })
        },
        /* 清空选中样式 */
        clearSelected() {
            let allNode = document.querySelectorAll('#tree-option .el-tree-node')
            allNode?.forEach(element => element?.classList?.remove('is-current'))
        },
        filterNode(value, data) {
            if (!value) return true
            return data[this.props.label].indexOf(value) !== -1
        },
        handleSearch() {
            this.$refs.selectTree.filter(this.filterText)
        },
        // 懒加载节点加载方法
        loadNode(node, resolve) {
            this.$emit('load', { node, resolve })
        },
        visibleChange(visible) {
            this.$emit('panelVisible', visible)

            if (visible) {
                this.$nextTick(() => {
                    this.$refs.selectTree.$el.parentElement.parentElement.parentElement.scrollTop = !this.isEmpty(this.valueId) && this.memoryScrollTop ? this.oldScrollTop : 1
                    // 设置默认选中，点击disabled节点后会默认取消掉当前选中节点的is-current样式,在这里在设置一次
                    !this.isEmpty(this.valueId) && this.$refs.selectTree?.setCurrentKey(this.valueId)
                })
            } else {
                this.defaultExpandedKey = this.defaultExpand && !this.isEmpty(this.valueId) ? [this.valueId] : []
                if (this.reload && this.showSelect) {
                    this.reloadTree()
                }
            }
        },

        reloadTree(collapse = false) {
            this.filterText = ''
            this.handleSearch()
            this.collapseAll(this.options, collapse)
        },
        collapseAll(data, collaps) {
            const id = this.props.value || 'id'
            data.forEach(el => {
                this.$refs['selectTree'].store.nodesMap[el[id]].expanded = collaps
                if (el.children && el.children.length > 0) {
                    this.collapseAll(el.children)
                }
            })
        },
        // 选择后是否展示父节点/子节点
        handleTreeNode(treeNode) {
            let name = treeNode?.label
            let valueStr = treeNode.key
            if (treeNode?.parent?.parent) {
                name = this.handleTreeNode(treeNode.parent).name + '/' + name
                valueStr = this.handleTreeNode(treeNode.parent).valueStr + ',' + valueStr
            }
            return {
                name,
                valueStr
            }
        }
    },
    watch: {
        value() {
            this.valueId = this.value
            this.initHandle()
        }
    }
}
</script>
