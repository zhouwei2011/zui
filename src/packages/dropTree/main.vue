<template>
    <div :class="['zrx-drop-tree', dropped && 'focus']" tabindex="-1" :disabled="disabled" @focusout="onExternalOut" :clearable="canClearable" ref="container">
        <div class="wrapper" @click="toggleMenu">
            <template v-if="textShowPattern == 'tag' && selectedNodes.length">
                <div class="tag" :title="selectedNodes[0][setting.label]">
                    {{ selectedNodes[0][setting.label] }}
                    <a class="btn" @click.stop="onDelete" v-if="!disabled">
                        <i class="icon svg-icon zrx-icon-close"></i>
                    </a>
                </div>
                <div class="tag tip" :title="selectedNodes.slice(1).map(node => node[setting.label])" v-if="selectedNodes.length > 1">+{{ selectedNodes.length - 1 }}</div>
            </template>
            <template v-if="textShowPattern == 'text' && selectedNodes.length">
                <p class="text" :title="selectedNodes.map(item => item[setting.label]).join(',')">
                    {{ selectedNodes.map(item => item[setting.label]).join(',') }}
                </p>
            </template>
            <p class="placeholder" v-show="!selectedNodes.length">{{ placeholder }}</p>
        </div>
        <a class="btn btn-clear" @click="onClear" v-if="canClearable">
            <i class="icon svg-icon zrx-icon-close-round"></i>
        </a>
        <a class="btn btn-toggle" @click="toggleMenu">
            <i class="icon svg-icon zrx-icon-down-angle" :reverse-z="dropped"></i>
        </a>
        <transition name="dropDownUp">
            <div
                :class="['zrx-drop-tree-dropper', horizontal && 'horizontal', xPlacement, yPlacement]"
                tabindex="-1"
                @focusout="onOut"
                :type="checkPattern"
                :style="dropperStyle"
                :placement="dropperLocation"
                v-show="dropped"
                ref="dropper"
            >
                <div class="search-bar" v-if="filterable">
                    <div class="inner" tabindex="-1" @focusin="filtering = true" @focusout="filtering = false">
                        <input type="text" v-model="searchword" :placeholder="filterPlaceholder" ref="searchBar" @keydown.enter="remoteSearch" />
                        <a class="btn" name="close" @click="clearSearchword" v-show="filtering && searchword"><i class="svg-icon zrx-icon-close-round"></i></a>
                        <a class="btn" name="search" v-show="!filtering || !searchword" @click="remoteSearch"><i class="svg-icon zrx-icon-magnifier"></i></a>
                    </div>
                </div>
                <div class="tree-content">
                    <el-tree
                        :accordion="accordian"
                        :check-strictly="checkStrictly"
                        :data="treeData"
                        :indent="28"
                        :node-key="setting.key"
                        :filter-node-method="filterNode"
                        :expand-on-click-node="false"
                        :check-on-click-node="true"
                        :show-checkbox="multiple"
                        :props="setting"
                        :load="load"
                        :lazy="lazy"
                        :default-expand-all="defaultExpandAll"
                        :default-expanded-keys="defaultExpandKeys"
                        @check-change="onChange"
                        @current-change="onCurrentChange"
                        @check="onCheck"
                        @node-click="onNodeClick"
                        ref="tree"
                    >
                        <template slot-scope="{ node, data }">
                            <slot :node="node" :data="data">
                                <div class="el-tree-node__label" :title="data[setting.label]" :style="`--x:${28 * (node.level - 1)}px;`">
                                    {{ data[setting.label] }}
                                </div>
                            </slot>
                        </template>
                    </el-tree>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { getMaxZIndex } from '../../utils/common.js'
import { cloneDeep, debounce } from 'lodash-es'
const defaultProps = {
    children: 'children',
    label: 'label',
    disabled: 'disabled',
    key: 'id'
}
const dropperBox = {
    top: 0,
    left: 0,
    width: 0
}
export default {
    name: 'zrxDropTree',
    props: {
        data: {
            // 树数据
            type: Array,
            default() {
                return []
            }
        },
        value: {
            // 选中的key列表
            type: [Array, Number, String],
            default() {
                return []
            }
        },
        props: {
            // 树配置项
            type: Object,
            default() {
                return {}
            }
        },
        multiple: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: '请选择'
        },
        filterPlaceholder: {
            type: String,
            default: '请输入关键字搜索'
        },
        filterable: {
            // 是否可搜索树
            type: Boolean,
            default: false
        },
        horizontal: {
            // 树是否横向滚动
            type: Boolean,
            default: false
        },
        load: Function,
        lazy: Boolean,
        defaultExpandAll: Boolean,
        checkStrictly: {
            type: Boolean,
            default: true
        },
        popperAppendToBody: {
            // 将下拉框插入至body，若为否则插入至组件内。优先级低于popperAppendTo
            type: Boolean,
            default: true
        },
        // 选中标签的显示形式：tag、text
        textShowStyle: {
            type: String,
            default: 'unset'
        },
        clearable: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        accordian: {
            // 是否每次只打开一个同级树节点展开
            type: Boolean,
            default: false
        },
        popperAppendTo: {
            // 下拉框插入的父元素,支持selector选择器和dom对象
            type: [String, Object],
            default: 'unset'
        },
        loading: {
            type: Boolean,
            default: false
        },
        // 远程搜索
        remote: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value: {
            handler(newv) {
                if (this.manually) {
                    return (this.manually = false)
                }
                this.setTree(newv)
            },
            deep: true
        },
        data: {
            handler() {
                this.setTreeData()
                this.$nextTick(() => {
                    this.setTree(this.value)
                    this.updateDropper()
                })
            },
            deep: true
        },
        dropped(newv) {
            if (newv) {
                this.setDropper().then(() => this.attachObserver())
            } else {
                window.cancelAnimationFrame(this.io)
            }
            this.$emit('visible-change', newv)
        },
        checkStrictly() {
            this.reset()
        },
        multiple(newv, oldv) {
            if (oldv && !newv && this.selectedNodes.length > 1) {
                this.reset()
            }
        },
        searchword(newv) {
            this.filterable && !this.remote && this.$refs.tree.filter(newv)
        }
    },
    data() {
        return {
            selectedNodes: [],
            treeData: [],
            dropped: false,
            searchword: '',
            searching: false,
            xPlacement: '',
            yPlacement: '',
            DeferredHandler: null,
            manually: false,
            dropperBox: { ...dropperBox },
            parentElement: null,
            dropperLocation: '',
            filtering: false,
            io: null,
            defaultExpandKeys: []
        }
    },
    methods: {
        setTree(selectedKeys) {
            if (!Array.isArray(selectedKeys)) {
                selectedKeys = [selectedKeys]
            }
            if (this.treeData.length) {
                if (this.$refs.tree) {
                    this.$refs.tree.setCheckedKeys(selectedKeys)
                    if (!this.multiple && selectedKeys.length) {
                        this.$refs.tree.setCurrentKey(selectedKeys[0])
                    } else {
                        this.$refs.tree.setCurrentKey(null)
                    }
                }
                this.selectedNodes = selectedKeys.map(v => {
                    return {
                        [this.setting.label]: this.findRelevantTreeTag(v, this.treeData, this.setting.key, this.setting.label),
                        [this.setting.key]: v
                    }
                })
            }
        },
        // 懒加载标题回显
        setLazyEcho(nodeObj) {
            this.selectedNodes = nodeObj.map(item => {
                return {
                    [this.setting.label]: item.label,
                    [this.setting.key]: item.value
                }
            })
        },
        setTreeData() {
            this.treeData = cloneDeep(this.data)
        },
        setAppendTo() {
            if (this.popperAppendTo == 'unset') {
                if (this.popperAppendToBody) {
                    this.parentElement = document.body
                } else {
                    this.dropperLocation = 'internal'
                    return (this.parentElement = this.$refs.container)
                }
            } else {
                if (this.popperAppendTo instanceof HTMLElement) {
                    this.parentElement = this.popperAppendTo
                } else {
                    const target = document.querySelector(this.popperAppendTo)
                    if (target) {
                        this.parentElement = target
                    } else {
                        this.parentElement = document.body
                    }
                }
            }
            this.dropperLocation = 'external'
            if (![...this.parentElement.children].includes(this.$refs.dropper)) {
                this.parentElement.append(this.$refs.dropper)
            }
        },
        removeAppendTo() {
            if ([...this.parentElement.children].includes(this.$refs.dropper)) {
                this.parentElement.removeChild(this.$refs.dropper)
            }
        },
        getTree() {
            return this.$refs.tree
        },
        toggleMenu() {
            if (this.disabled) return false
            this.dropped = !this.dropped
            this.$refs.container.focus()
        },
        reset() {
            if (this.$refs.tree) {
                this.$refs.tree.setCheckedKeys([])
                this.$refs.tree.setCurrentKey(null)
            }
            this.selectedNodes = []
            this.emitEvent()
        },
        onClear() {
            if (this.disabled) return false
            this.reset()
        },
        clearSearchword() {
            this.searchword = ''
        },
        setDropper() {
            this.yPlacement = ''
            this.xPlacement = ''
            if (this.dropperLocation == 'internal') {
                return Promise.resolve().then(() => {
                    const { left, top } = this.$refs.dropper.getBoundingClientRect()
                    if (top + this.$refs.dropper.offsetHeight >= window.innerHeight) {
                        this.yPlacement = 'y-placement-top'
                    } else {
                        this.yPlacement = 'y-placement-bottom'
                    }
                    if (left + this.$refs.dropper.offsetWidth >= window.innerWidth) {
                        this.xPlacement = 'x-placement-left'
                    } else {
                        this.xPlacement = 'x-placement-right'
                    }
                })
            } else {
                this.dropperBox = { ...dropperBox }
                const containerPos = this.$refs.container.getBoundingClientRect()
                const parentPos = this.parentElement.getBoundingClientRect()
                const y0 = containerPos.top - parentPos.top + this.parentElement.scrollTop
                const y1 = y0 + containerPos.height
                const l0 = containerPos.left - parentPos.left + this.parentElement.scrollLeft
                this.dropperBox.width = containerPos.width
                return Promise.resolve().then(() => {
                    if (containerPos.bottom + 4 + this.$refs.dropper.offsetHeight >= window.innerHeight) {
                        this.yPlacement = 'y-placement-top'
                        this.dropperBox.top = y0 - this.$refs.dropper.offsetHeight - 4
                    } else {
                        this.yPlacement = 'y-placement-bottom'
                        this.dropperBox.top = y1
                    }
                    if (containerPos.left + this.$refs.dropper.offsetWidth >= window.innerWidth) {
                        this.xPlacement = 'x-placement-left'
                        this.dropperBox.left = l0 + containerPos.width - this.$refs.dropper.offsetWidth
                    } else {
                        this.xPlacement = 'x-placement-right'
                        this.dropperBox.left = l0
                    }
                })
            }
        },
        updateDropper() {
            this.$nextTick(() => {
                this.setDropper().then(() => this.attachObserver())
            })
        },
        findRelevantTreeTag(value, treeData, valueKey = 'value', labelKey = 'label') {
            let res
            const iterator = list => {
                if (!list?.length || res !== undefined) return false
                for (const item of list) {
                    if (item[valueKey] === value) {
                        res = item[labelKey]
                        break
                    } else if (item.children?.length) {
                        iterator(item.children)
                    }
                }
            }
            iterator(treeData)
            return res ? res : this.findLabelByKey(value)
        },
        findLabelByKey(value) {
            const index = this.selectedNodes.findIndex(o => o[this.setting.key] === value)
            return index > -1 ? this.selectedNodes[index][this.setting.label] : ''
        },
        handleChange(nodeObj, isChecked, childChecked) {
            // const index = this.selectedNodes.findIndex(item => item[this.setting.key] == nodeObj[this.setting.key])
            // if (isChecked) {
            //     index == -1 &&
            //         this.selectedNodes.push({
            //             [this.setting.label]: nodeObj[this.setting.label],
            //             [this.setting.key]: nodeObj[this.setting.key]
            //         })
            // } else {
            //     index == -1 || this.selectedNodes.splice(index, 1)
            // }
            // this.$nextTick(() => this.$refs.container.focus())
            // this.$emit('onFocusout')
            // this.$emit('input', this.selectedKeys)
            // this.$emit('checkChange', nodeObj, isChecked, childChecked)
            // this.manually = true
        },
        onChange(nodeObj, isChecked, childChecked) {
            // this.DeferredHandler(nodeObj, isChecked, childChecked)
            // if (!this.multiple) {
            //     if (isChecked) {
            //         this.$refs.tree.setCheckedKeys([nodeObj[this.setting.key]])
            //         this.selectedNodes = [
            //             {
            //                 [this.setting.label]: nodeObj[this.setting.label],
            //                 [this.setting.key]: nodeObj[this.setting.key]
            //             }
            //         ]
            //         setTimeout(() => {
            //             this.dropped = false
            //         }, 10)
            //     }
            // }
        },
        onCurrentChange(nodeObj, node) {
            // if (nodeObj[this.setting.disabled]) {
            //     if (!this.multiple) {
            //         const selectedKeys = this.selectedKeys
            //         this.$nextTick(() => {
            //             this.$refs.tree.setCurrentKey(selectedKeys[0])
            //         })
            //     } else {
            //         this.$refs.tree.setCurrentKey(null)
            //     }
            // }
        },
        onCheck(nodeObj, { checkedNodes, checkedKeys }) {
            if (!this.multiple) return false

            // 将checkNodes中不存在于selectedNodes的节点转换格式后Push到selectedNodes中
            checkedNodes.forEach(node => {
                if (this.selectedKeys.includes(node[this.setting.key])) return

                this.selectedNodes.push({
                    [this.setting.label]: node[this.setting.label],
                    [this.setting.key]: node[this.setting.key]
                })
            })

            const isChecked = checkedKeys.includes(nodeObj[this.setting.key])
            const index = this.selectedNodes.findIndex(o => o[this.setting.key] === nodeObj[this.setting.key])

            // 如果当前节点为取消勾选，需要从selectedNodes中删除该节点
            if (!isChecked && index > -1) this.selectedNodes.splice(index, 1)

            this.emitEvent(nodeObj, isChecked)
        },
        onNodeClick(nodeObj) {
            if (nodeObj[this.setting.disabled] || this.multiple) return false
            const isChecked = this.selectedNodes[0]?.[this.setting.key] == nodeObj[this.setting.key]
            if (!isChecked) {
                this.selectedNodes = [
                    {
                        [this.setting.label]: nodeObj[this.setting.label],
                        [this.setting.key]: nodeObj[this.setting.key]
                    }
                ]
                this.emitEvent(nodeObj, true)
                setTimeout(() => {
                    this.dropped = false
                }, 10)
            } else {
                this.$nextTick(() => this.$refs.tree.setCheckedKeys([nodeObj[this.setting.key]]))
            }
        },
        onDelete() {
            if (this.disabled) return false
            const deleteNode = cloneDeep(this.selectedNodes[0])
            this.$refs.tree.setChecked(deleteNode[this.setting.key], false)
            this.clearCurrentKey(deleteNode[this.setting.key])
            this.selectedNodes.shift()
            this.emitEvent(deleteNode, false)
        },
        emitEvent(nodeObj = null, isChecked = false) {
            this.$emit('input', Array.isArray(this.value) ? this.selectedKeys : this.selectedKeys[0])
            this.$emit('checkChange', nodeObj, isChecked)
            this.manually = true
        },
        clearCurrentKey(key) {
            this.$refs.tree.getCurrentKey() == key && this.$refs.tree.setCurrentKey(null)
        },
        onOut(e) {
            if (!e.currentTarget.contains(e.relatedTarget) && !this.$refs.container.contains(e.relatedTarget) && this.dropped) {
                this.dropped = false
                this.$emit('onFocusout')
                this.$nextTick(() => this.$refs.container.focus())
            }
        },
        onExternalOut(e) {
            if (!this.$refs.dropper.contains(e.relatedTarget) && !this.$refs.container.contains(e.relatedTarget) && this.dropped) {
                this.dropped = false
                this.$emit('onFocusout')
                this.$nextTick(() => this.$refs.container.focus())
            }
        },
        onFocusin() {
            this.$emit('onFocusin')
        },
        filterNode(value, data) {
            return value === '' || data[this.setting.label || 'label'].indexOf(value) != -1
        },
        attachObserver() {
            if (this.dropperLocation == 'external') {
                const containerPos = this.$refs.container.getBoundingClientRect()
                const parentPos = this.parentElement.getBoundingClientRect()
                const x0 = containerPos.left - parentPos.left + this.parentElement.scrollLeft
                const y0 = containerPos.top - parentPos.top + this.parentElement.scrollTop
                const { top: t0, left: l0 } = this.dropperBox
                const monitor = (x1, y1) => {
                    const currentContainerPos = this.$refs.container.getBoundingClientRect()
                    const currentParentPos = this.parentElement.getBoundingClientRect()
                    const x = currentContainerPos.left - currentParentPos.left + this.parentElement.scrollLeft
                    const y = currentContainerPos.top - currentParentPos.top + this.parentElement.scrollTop
                    if (x1 !== x) {
                        this.dropperBox.left = l0 + (x - x0)
                    }
                    if (y1 !== y) {
                        this.dropperBox.top = t0 + (y - y0)
                    }
                    this.io = window.requestAnimationFrame(() => monitor(x, y))
                }
                this.removeObserver()
                this.io = window.requestAnimationFrame(monitor)
            }
        },
        removeObserver() {
            if (this.io) {
                window.cancelAnimationFrame(this.io)
                this.io = null
            }
        },
        remoteSearch() {
            if (this.remote) {
                // 远程搜索，调接口
                this.$emit('remoteMethod', this.searchword)
            }
        },
        setDefaultExpandKeys(keys) {
            this.defaultExpandKeys = cloneDeep(keys)
        }
    },
    created() {
        this.DeferredHandler = debounce(this.handleChange, 10, { leading: false, trailing: true })
        if (!this.defaultExpandAll) {
            Array.isArray(this.value) ? this.defaultExpandKeys.push(...this.value) : this.defaultExpandKeys.push(this.value)
        }
    },
    mounted() {
        this.setAppendTo()
        if (!this.lazy) {
            this.setTreeData()
            this.$nextTick(() => this.setTree(this.value))
        }
    },
    activated() {
        this.setAppendTo()
    },
    beforeDestroy() {
        this.removeAppendTo()
        this.removeObserver()
    },
    deactivated() {
        this.removeAppendTo()
        this.removeObserver()
    },
    computed: {
        setting() {
            return { ...defaultProps, ...this.props }
        },
        checkPattern() {
            return this.multiple ? 'multiple' : 'single'
        },
        selectedKeys() {
            return this.selectedNodes.map(item => item[this.setting.key])
        },
        dropperStyle() {
            if (this.dropperLocation == 'external') {
                return `top:${this.dropperBox.top}px;left:${this.dropperBox.left}px;width:${this.dropperBox.width}px;z-index:${getMaxZIndex()};`
            } else {
                return false
            }
        },
        textShowPattern() {
            if (this.textShowStyle == 'unset') {
                return this.multiple ? 'tag' : 'text'
            } else {
                return this.textShowStyle
            }
        },
        canClearable() {
            return this.clearable && Boolean(this.selectedNodes.length) && !this.disabled
        }
    }
}
</script>
