<template>
    <div class="zrx-navigation" :collapse="collapse">
        <div class="inner">
            <div class="menu-group level-1" v-for="main in menuData" :key="main[props.key]">
                <div :class="['nav-bar main', main.dropped && 'dropped', current == main[props.key] && 'current', main.selected && 'selected']" @click.stop="onClick(main, 1)">
                    <span class="icon-wrap" :style="`--indent: ${indents[0]}px;`">
                        <slot name="icon" :icon="main[props.icon]">
                            <template v-if="main.iconType">
                                <img :src="main[props.icon]" v-if="main.iconType == 'image'" @error="onerror(main)" />
                                <i :class="['icon', main[props.icon]]" v-else></i>
                            </template>
                        </slot>
                    </span>
                    <slot name="mainNav" :data="main"></slot>
                    <span class="nav-title" v-if="!$scopedSlots.mainNav">{{ main[props.label] }}</span>
                    <template v-if="main[props.children] && main[props.children].length">
                        <a class="btn" @click.stop="toggleDroppedAndSelected(main)">
                            <i class="icon svg-icon zrx-icon-down-angle" :opened="main.dropped"></i>
                        </a>
                        <el-dropdown placement="right-start" v-show="collapse">
                            <p></p>
                            <el-dropdown-menu role="nav" slot="dropdown">
                                <el-dropdown-item v-for="sub in main[props.children]" :key="sub[props.key]" :class="sub.selected && 'selected'" @click.native="onClick(sub, 1)">
                                    {{ sub[props.label] }}
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </div>
                <transition name="collapseNav">
                    <div
                        class="menu-group level-2"
                        :style="`--bars: ${main[props.children].length};`"
                        v-show="main.dropped && !collapse"
                        v-if="main[props.children] && main[props.children].length"
                    >
                        <div
                            :class="['nav-bar sub', sub.dropped && 'dropped', sub.selected && 'selected']"
                            @click.stop="onClick(sub, 2)"
                            v-for="sub in main[props.children]"
                            :key="sub[props.key]"
                        >
                            <span class="icon-wrap" :style="`--indent: ${indents[1]}px;`">
                                <slot name="icon" :icon="sub[props.icon]">
                                    <template v-if="sub.iconType">
                                        <img :src="sub[props.icon]" v-if="sub.iconType == 'image'" @error="onerror(sub)" />
                                        <i :class="['icon', sub[props.icon]]" v-else></i>
                                    </template>
                                </slot>
                            </span>
                            <slot name="subNav" :data="sub"></slot>
                            <span class="nav-title" v-if="!$scopedSlots.subNav">{{ sub[props.label] }}</span>
                            <a class="btn" v-if="sub[props.children] && sub[props.children].length">
                                <i class="icon svg-icon zrx-icon-down-angle" :opened="sub.dropped"></i>
                            </a>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
const defaultProp = {
    children: 'children',
    label: 'label',
    key: 'id',
    icon: 'icon',
    defaultIcon: 'defaultIcon'
}
const defaultIndents = [4, 4, 8]
export default {
    name: 'zrxNavigation',
    props: {
        collapse: {
            type: Boolean,
            default: false
        },
        menu: {
            type: Array,
            default() {
                return []
            }
        },
        prop: {
            type: Object,
            default() {
                return {}
            }
        },
        indent: {
            type: Array,
            default() {
                return []
            }
        },
        accordian: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        menu: {
            handler: () => this.init(),
            deep: true
        }
    },
    data() {
        return {
            menuData: [],
            current: ''
        }
    },
    methods: {
        init() {
            const iterator = (list, parent) => {
                for (const item of list) {
                    item.dropped = false
                    item.selected = false
                    parent && (item.parent = parent)
                    if (item[this.props.icon]) {
                        if (item[this.props.icon].match(/^https?:\/\/\w+/i)) {
                            item.iconType = item[this.props.icon].endsWith('svg') ? 'svg' : 'image'
                        } else {
                            item.iconType = 'icon'
                        }
                    } else {
                        item.iconType = ''
                    }
                    if (item[this.props.children]?.length) {
                        iterator(item[this.props.children], item)
                    }
                }
            }
            const list = JSON.parse(JSON.stringify(this.menu))
            iterator(list)
            this.menuData = list
        },
        findParent(target) {
            if (!target.parent) {
                return target
            } else {
                return this.findParent(target.parent)
            }
        },
        onerror(navObj) {
            navObj.iconType = 'icon'
            navObj.icon = navObj[this.props.defaultIcon]
        },
        toggleDroppedAndSelected(navObj) {
            if (navObj[this.props.children]?.length) {
                if (this.collapse) return false
                // 可下拉不可选中
                if (navObj.dropped) {
                    navObj.dropped = false
                } else {
                    if (this.accordian) {
                        this.resetStatus('dropped', navObj)
                    }
                    navObj.dropped = true
                }
            } else {
                // 不可下拉可选中
                if (!navObj.selected) {
                    this.resetStatus('selected', navObj)
                    navObj.selected = true
                    if (navObj.parent) {
                        this.current = navObj.parent[this.props.key]
                    } else {
                        this.current = ''
                    }
                    if (this.accordian) {
                        const root = this.findParent(navObj)
                        this.resetStatus('dropped', root)
                    }
                }
            }
        },
        setCurrent(navObj) {
            if (navObj[this.props.children]?.length) {
                // 可下拉不可选中
                if (!navObj.dropped) {
                    if (this.accordian) {
                        this.resetStatus('dropped', navObj)
                    }
                    navObj.dropped = true
                }
            } else {
                // 不可下拉可选中
                this.resetStatus('selected', navObj)
                navObj.selected = true
                if (navObj.parent) {
                    this.current = navObj.parent[this.props.key]
                } else {
                    this.current = ''
                }
                const root = this.findParent(navObj)
                if (root != navObj && !root.dropped) {
                    if (this.accordian) {
                        this.resetStatus('dropped', root)
                    }
                    root.dropped = true
                }
            }
        },
        onClick(navObj, level) {
            this.toggleDroppedAndSelected(navObj)
            this.$emit('onclick', navObj, level)
        },
        resetStatus(status, exclusive = null) {
            const iterator = list => {
                for (const item of list) {
                    if (exclusive !== null && item == exclusive) continue
                    if (item[status]) {
                        item[status] = false
                    }
                    if (item[this.props.children]?.length) {
                        iterator(item[this.props.children])
                    }
                }
            }
            iterator(this.menuData)
        },
        findData(key, value) {
            const iterator = list => {
                for (const navObj of list) {
                    if (navObj[key] === value) {
                        return navObj
                    } else if (navObj[this.props.children]?.length) {
                        const res = iterator(navObj[this.props.children])
                        if (res) {
                            return res
                        }
                    }
                }
            }
            return iterator(this.menuData)
        }
    },
    created() {
        this.init()
    },
    computed: {
        props() {
            return Object.assign({}, defaultProp, this.prop)
        },
        indents() {
            return defaultIndents.map((n, i) => {
                if (this.indent[i] !== undefined) {
                    return this.indent[i]
                } else {
                    return n
                }
            })
        }
    }
}
</script>
