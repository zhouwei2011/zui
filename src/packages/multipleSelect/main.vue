<template>
    <div
        :class="['zrx-multiple-select', dropped && 'focus', selectedNodes.length && 'filled']"
        tabindex="-1"
        :disabled="disabled"
        @focusout="onExternalOut"
        @focusin="onFocusin"
        :clearable="clearable && selectedNodes.length && !disabled"
        ref="container"
    >
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
            <p class="text" :title="textShow" v-if="textShowPattern == 'text' && selectedNodes.length">{{ textShow }}</p>
            <p class="placeholder" v-show="!selectedNodes.length">{{ placeholder }}</p>
        </div>
        <a class="btn btn-clear" @click="onClear" v-if="clearable && selectedNodes.length && !disabled">
            <i class="icon svg-icon zrx-icon-close-round"></i>
        </a>
        <a class="btn btn-toggle" @click="toggleMenu">
            <i class="icon svg-icon zrx-icon-down-angle" :reverse-z="dropped"></i>
        </a>
        <transition name="dropDownUp">
            <div
                :class="['zrx-multiple-select-dropper', xPlacement, yPlacement]"
                tabindex="-1"
                @focusout="onOut"
                :style="dropperStyle"
                :placement="dropperLocation"
                ref="dropper"
                v-progress:[duration].bottom="lazyLoading"
                v-show="dropped"
            >
                <div class="search-bar" v-if="filterable">
                    <div class="inner" tabindex="-1" @focusin="filtering = true" @focusout="filtering = false">
                        <input type="text" v-model="searchword" :placeholder="filterPlaceholder" ref="searchBar" />
                        <a class="btn" name="close" @click="searchword = ''" v-show="filtering && searchword"><i class="svg-icon zrx-icon-close-round"></i></a>
                        <a class="btn" name="search" v-show="!filtering || !searchword"><i class="svg-icon zrx-icon-magnifier"></i></a>
                    </div>
                </div>
                <p class="zrx-dropdown-empty" v-if="!vmOption.length && !loading">暂无数据</p>
                <p class="zrx-dropdown-empty" v-if="vmOption.length && !optionShow.length && !loading">无匹配数据</p>
                <p class="zrx-dropdown-loading" v-if="loading">加载中</p>
                <ul :class="['zrx-dropdown-menu', multiple && 'multiple']" ref="optionsWrapper" v-show="!loading">
                    <li
                        :class="['dropdown-item', n.selected && 'selected']"
                        v-for="n in optionShow"
                        :key="n[setting.value]"
                        :title="n[setting.label]"
                        :disabled="n[setting.disabled]"
                        @click="onChange(n)"
                    >
                        <span :class="['zrx-checkbox', n.selected && 'is-checked', n[setting.disabled] && 'is-disabled']" v-if="multiple">
                            <i class="checkbox-inner"></i>
                        </span>
                        <span class="label">{{ n[setting.label] }}</span>
                    </li>
                    <p class="shim" ref="shim" v-if="lazy"></p>
                </ul>
            </div>
        </transition>
    </div>
</template>

<script>
import { getMaxZIndex } from '../../utils/common.js'
import { debounce } from 'lodash-es'
const defaultProps = {
    label: 'label',
    value: 'value',
    disabled: 'disabled'
}
const dropperBox = {
    top: 0,
    left: 0,
    width: 0
}
export default {
    name: 'zrxMultipleSelect',
    props: {
        props: {
            type: Object,
            default() {
                return {}
            }
        },
        option: {
            //下拉列表
            type: Array,
            default() {
                return []
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            // 选中的key列表
            type: [Array, String, Number],
            default() {
                return []
            }
        },
        clearable: {
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
        popperAppendToBody: {
            // 组件添加至body
            type: Boolean,
            default: true
        },
        // 选中标签的显示形式：tag、text
        textShowStyle: {
            type: String,
            default: 'unset'
        },
        filterable: {
            // 是否可搜索
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: true
        },
        popperAppendTo: {
            // 下拉框插入的父元素,支持selector选择器和dom对象
            type: [String, Object],
            default: 'unset'
        },
        filterMethod: Function,
        loading: {
            type: Boolean,
            default: false
        },
        lazy: {
            type: Boolean,
            default: false
        },
        lazyLoad: Function,
        filterInterval: {
            type: [Number, String],
            default: 200
        },
        remote: {
            type: Boolean,
            default: false
        },
        remoteMethod: Function,
        duration: {
            type: Number,
            default: 5
        }
    },
    watch: {
        value: {
            handler(newv) {
                this.setValue(newv)
            },
            deep: true,
            immediate: true
        },
        vmValue: {
            handler(newv) {
                this.initSelected(newv)
            },
            deep: true
        },
        dropped(newv) {
            if (newv) {
                this.setDropper().then(() => this.attachMo())
            } else {
                window.cancelAnimationFrame(this.mo)
                this.searchword = ''
            }
            this.$emit('visible-change', newv)
        },
        option: {
            handler(newv) {
                this.initOption(newv)
            },
            deep: true,
            immediate: true
        },
        multiple(newv, oldv) {
            if (oldv && !newv && this.vmValue.length > 1) {
                this.reset()
            }
        },
        searchword(newv) {
            if (this.filterable) {
                this.$emit('onFilter', newv)
                this.remote ? this.onRemoteFilter(newv) : this.onFilter(newv)
            }
        }
    },
    data() {
        return {
            vmValue: [],
            vmOption: [],
            selectedNodes: [],
            dropped: false,
            searchword: '',
            xPlacement: '',
            yPlacement: '',
            dropperBox: { ...dropperBox },
            dropperLocation: '',
            parentElement: null,
            filtering: false,
            mo: null, // 位置移动监听
            io: null, //滚动监听
            lazyLoading: false,
            onFilter: debounce(text => this.filter(text), this.filterInterval - 0, { leading: false, trailing: true }),
            onRemoteFilter: debounce(text => this.remoteFilter(text), this.filterInterval - 0, { leading: false, trailing: true })
        }
    },
    methods: {
        setValue(v) {
            const type = Object.prototype.toString
                .call(v)
                .match(/\S+(?=\])/)[0]
                .toLowerCase()
            if (this.multiple) {
                if (type != 'array') return (this.vmValue = [])
                this.vmValue = [...v]
            } else {
                if (['string', 'number', 'boolean', 'symbol'].includes(type)) {
                    this.vmValue = [v]
                } else if (type == 'array') {
                    this.vmValue = [...v]
                } else {
                    this.vmValue = []
                }
            }
        },
        initOption(option) {
            this.vmOption = option
                .filter(d => ![undefined, null].includes(d[this.setting.value]))
                .map(d => {
                    const index = this.vmValue.indexOf(d[this.setting.value])
                    return {
                        value: d[this.setting.value],
                        label: d[this.setting.label] ?? '',
                        disabled: !!d[this.setting.disabled],
                        visible: true,
                        selected: index != -1
                    }
                })
            this.updateSelectedNodes(this.vmValue)
        },
        updateOption(newSlice) {
            const toPush = newSlice
                .filter(
                    enter =>
                        this.vmOption.findIndex(exist => exist[this.setting.value] == enter[this.setting.value]) == -1 && ![undefined, null].includes(enter[this.setting.value])
                )
                .map(d => {
                    return {
                        value: d[this.setting.value],
                        label: d[this.setting.label] ?? '',
                        disabled: !!d[this.setting.disabled],
                        visible: true,
                        selected: false
                    }
                })
            this.vmOption.push(...toPush)
        },
        initSelected(selectedKeys) {
            this.vmOption.forEach(opt => {
                const index = selectedKeys.indexOf(opt[this.setting.value])
                opt.selected = index != -1
            })
            this.updateSelectedNodes(selectedKeys)
        },
        updateSelectedNodes(selectedKeys) {
            const update = []
            selectedKeys.forEach(v => {
                const parallel = this.vmOption.find(item => item[this.setting.value] == v)
                if (parallel) {
                    update.push({
                        [this.setting.label]: parallel[this.setting.label],
                        [this.setting.value]: v
                    })
                } else {
                    const current = this.selectedNodes.find(item => item[this.setting.value] == v)
                    current &&
                        update.push({
                            [this.setting.label]: current[this.setting.label],
                            [this.setting.value]: v
                        })
                }
            })
            this.selectedNodes = update
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
        filter(text) {
            if (typeof this.filterMethod == 'function') {
                this.vmOption.forEach(d => (d.visible = this.filterMethod(text, d) ?? true))
            } else {
                this.vmOption.forEach(d => (d.visible = text === '' || text == d[this.setting.label]))
            }
        },
        remoteFilter(text) {
            if (typeof this.remoteMethod == 'function') {
                this.remoteMethod(text)
            }
        },
        parseEmits(v) {
            // v必定是数组
            if (this.multiple) {
                return v
            } else {
                const type = Object.prototype.toString
                    .call(this.value)
                    .match(/\S+(?=\])/)[0]
                    .toLowerCase()
                if (type == 'array') {
                    return v
                } else {
                    if (![null, undefined].includes(v[0])) return v[0]
                    if (type == 'null') return null
                    if (type == 'undefined') return undefined
                }
            }
        },
        onDelete() {
            if (this.disabled) return false
            this.vmValue.splice(0, 1)
            this.$emit('change', this.parseEmits(this.vmValue))
            this.$emit('input', this.parseEmits(this.vmValue))
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
        onChange(option) {
            if (option[this.setting.disabled]) return false
            const update = option[this.setting.value]
            const index = this.vmValue.indexOf(update)
            if (index != -1) {
                this.vmValue.splice(index, 1)
            } else {
                if (!this.multiple) {
                    this.vmValue = [update]
                } else {
                    this.vmValue.push(update)
                }
            }
            if (!this.multiple && index == -1) {
                setTimeout(() => {
                    this.dropped = false
                }, 10)
            }
            this.$emit('input', this.parseEmits(this.vmValue))
            this.$emit('change', this.parseEmits(this.vmValue))
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
        toggleMenu() {
            if (this.disabled) return false
            this.dropped = !this.dropped
            this.$refs.container.focus()
        },
        onClear() {
            if (this.disabled) return false
            this.reset()
        },
        reset() {
            this.vmValue = []
            this.$emit('change', this.parseEmits(this.vmValue))
            this.$emit('input', this.parseEmits(this.vmValue))
        },
        attachMo() {
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
                    this.mo = window.requestAnimationFrame(() => monitor(x, y))
                }
                this.removeMo()
                this.mo = window.requestAnimationFrame(monitor)
            }
        },
        attachIo() {
            const root = this.$refs.optionsWrapper
            const target = this.$refs.shim
            this.io = evt => {
                if (evt.currentTarget.scrollTop + evt.currentTarget.clientHeight >= target.offsetTop) {
                    this.onLazyTriggered()
                }
            }
            root.addEventListener('scroll', this.io)
        },
        async onLazyTriggered() {
            this.$emit('onLazyLoad', this.vmOption.length)
            if (this.lazyLoad) {
                const fn = () => new Promise(resolve => this.lazyLoad(this.vmOption.length, resolve))
                this.lazyLoading = true
                const newSlice = await fn()
                this.lazyLoading = false
                if (Array.isArray(newSlice) && newSlice.length) {
                    this.updateOption(newSlice)
                }
            }
        },
        removeMo() {
            if (this.mo) {
                window.cancelAnimationFrame(this.mo)
                this.mo = null
            }
        },
        removeObserver() {
            this.removeMo()
            if (this.io) {
                window.removeEventListener('scroll', this.io)
                this.io = null
            }
        }
    },
    created() {},
    mounted() {
        this.setAppendTo()
        this.lazy && this.attachIo()
    },
    activated() {
        this.setAppendTo()
        this.lazy && this.attachIo()
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
        optionShow() {
            return this.vmOption.filter(item => item.visible)
        },
        textShow() {
            return (
                this.textShowPattern == 'tag' ||
                this.selectedNodes
                    .filter(item => ![null, undefined, ''].includes(item[this.setting.label]))
                    .map(item => item[this.setting.label])
                    .join(',')
            )
        }
    }
}
</script>
