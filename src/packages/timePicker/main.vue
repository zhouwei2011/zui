<template>
    <div
        ref="timePicker"
        :class="['zrx-time-picker', visible && 'focus', disabled && 'disabled']"
        tabindex="-1"
        v-on:focusout="focusOutFunc"
        v-on:mouseover="mouseover = true"
        v-on:mouseleave="mouseover = false"
    >
        <input ref="input" readonly="readonly" v-bind:placeholder="placeholder" v-on:focusin="!readonly && !disabled && (visible = true)" v-bind:style="`text-align: ${align};`" />
        <i class="svg-icon zrx-icon-clock" v-bind:style="`opacity: ${computeClearBtnClassName() === 'hide' || !clearable ? 1 : 0}`"></i>
        <span :class="['clear-btn', clearIcon, computeClearBtnClassName()]" v-on:click="clearValue" v-if="!readonly && clearable" v-on:focusout.stop></span>
        <div
            :class="['zrx-time-picker-panel', popperClass, isRange && 'range', `repeat-${times}`]"
            v-bind:style="panelStyle"
            ref="panel"
            v-on:mouseover.stop
            v-on:mouseleave.stop
            tabindex="-1"
            v-on:focusout.stop="panelFocusOut"
        >
            <template v-for="obj in !isRange ? [normal] : [range.start, range.end]">
                <!-- <el-scrollbar class="hour" ref="hour" v-if="!format || !!format.match(/(?<!h)h{2}(?!h)/i)"> -->
                <el-scrollbar class="hour" ref="hour" v-if="!format || !!format.match(new RegExp('(?<!h)h{2}(?!h)', 'i'))">
                    <div v-for="n in 24" v-bind:key="n" :class="['time-item', obj.hour !== null && obj.hour === n - 1 && 'current']" v-on:click="selectTime(obj, 'hour', n - 1)">
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
                <!-- <el-scrollbar class="minute" ref="minute" v-if="!format || !!format.match(/(?<!m)m{2}(?!m)/)"> -->
                <el-scrollbar class="minute" ref="minute" v-if="!format || !!format.match(new RegExp('(?<!m)m{2}(?!m)'))">
                    <div
                        v-for="n in 60"
                        v-bind:key="n"
                        :class="['time-item', obj.minute !== null && obj.minute === n - 1 && 'current']"
                        v-on:click="selectTime(obj, 'minute', n - 1)"
                    >
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
                <el-scrollbar class="second" ref="second" v-if="!format || !!format.match(new RegExp('(?<!s)s{2}(?!s)'))">
                    <div
                        v-for="n in 60"
                        v-bind:key="n"
                        :class="['time-item', obj.second !== null && obj.second === n - 1 && 'current']"
                        v-on:click="selectTime(obj, 'second', n - 1)"
                    >
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
            </template>
            <!-- <div class="panel-gap" v-if="isRange" v-bind:style="`grid-column-start: ${rangeGapStart};`">-</div> -->
            <div class="panel-gap" v-if="isRange">-</div>
            <div class="panel-footer">
                <el-button
                    type="primary"
                    ref="confirmBtn"
                    v-on:click="changeTime"
                    v-bind:disabled="
                        (!isRange
                            ? [normal.hour, normal.minute, normal.second]
                            : [range.start.hour, range.start.minute, range.start.second, range.end.hour, range.end.minute, range.end.second]
                        ).includes(null)
                    "
                >
                    确定
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { formatDate } from '../../utils/common'
function transformToDate(value) {
    // let result
    // try {
    //     if ([null, undefined, '', NaN].includes(value)) {
    //         throw new Error()
    //     } else if (value instanceof Date || typeof value === 'string' || typeof value === 'number') {
    //         result = new Date(value)
    //     }
    //     if (result instanceof Date && result.toString() === 'Invalid Date') {
    //         throw new Error()
    //     }
    // } catch (e) {
    //     result = new Date()
    // }
    // return result
    let result = new Date(value)
    if (result instanceof Date && result.toString() === 'Invalid Date') {
        const regExp = new RegExp('HH:mm:ss'.replace(/[hms]/gi, '\\d'))
        if (value.match(regExp)) {
            const now = new Date()
            result = new Date(`${now.getFullYear()}-${now.getMonth()}-${now.getDate()} ${value}`)
        }
    }
    return result.toString() === 'Invalid Date' ? new Date() : result
}
export default {
    name: 'zrxTimePicker',
    props: {
        value: {
            type: [String, Number, Date, Array],
            default: function () {
                return ''
            }
        },
        placeholder: {
            type: [String],
            default: function () {
                return '请选择时间'
            }
        },
        readonly: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        disabled: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        popperClass: {
            type: [String],
            default: function () {
                return ''
            }
        },
        // 是否显示清除按钮
        clearable: {
            type: [Boolean],
            default: function () {
                return true
            }
        },
        clearIcon: {
            type: [String],
            default: function () {
                return 'svg-icon zrx-icon-close-round'
            }
        },
        // 对齐方式
        align: {
            type: [String],
            default: function () {
                // return 'left, center, right'
                return 'left'
            }
        },
        popperAppendToBody: {
            type: [Boolean],
            default: function () {
                return true
            }
        },
        format: {
            type: [String],
            default: function () {
                return 'HH:mm:ss'
            }
        },
        isRange: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        valueFormat: {
            type: [String],
            default: function () {
                return ''
            }
        },
        // 选择范围时的分隔符
        rangeSeparator: {
            type: [String],
            default: function () {
                return '-'
            }
        },
        prefix: {
            type: [String],
            default: function () {
                return ''
            }
        }
    },
    data: function () {
        return {
            visible: false,
            panelStyle: {},
            normal: {
                hour: null,
                minute: null,
                second: null
            },
            range: {
                start: {
                    hour: null,
                    minute: null,
                    second: null
                },
                end: {
                    hour: null,
                    minute: null,
                    second: null
                }
            },
            mouseover: false,
            // 他们非要加一些奇怪的功能，我没办法只能加这些奇怪的属性
            times: 3
        }
    },
    methods: {
        input: function (val) {
            if (this.isRange) {
                if (val[0] && val[1] && val[0] > val[1]) {
                    // return this.$message.warning('起始时间不能大于结束时间')
                    return false
                }
                this.valueFormat && (val = val.map(n => `${this.prefix}${formatDate(n, this.valueFormat)}`))
            }
            !this.isRange && this.valueFormat && ![null, undefined, ''].includes(val) && (val = `${this.prefix}${formatDate(val, this.valueFormat)}`)
            this.$emit('input', val)
        },
        change: function (val) {
            if (this.isRange) {
                if (val[0] && val[1] && val[0] > val[1]) {
                    // return this.$message.warning('起始时间不能大于结束时间')
                    return false
                }
                this.valueFormat && (val = val.map(n => `${this.prefix}${formatDate(n, this.valueFormat)}`))
            }
            !this.isRange && this.valueFormat && ![null, undefined, ''].includes(val) && (val = `${this.prefix}${formatDate(val, this.valueFormat)}`)
            this.$emit('change', val)
        },
        toggleMenu() {
            this.$refs.input.focus()
        },
        clearValue: function () {
            if (!this.isRange) {
                this.normal.hour = this.normal.minute = this.normal.second = null
                this.input(null)
                this.$nextTick(() => this.change(null))
                this.$nextTick(this.computeInputShowValue)
            } else {
                this.range.start.hour = this.range.start.minute = this.range.start.second = null
                this.range.end.hour = this.range.end.minute = this.range.end.second = null
                this.input([])
                this.$nextTick(() => this.change([]))
                this.$nextTick(this.computeInputShowValue)
            }
        },
        focusOutFunc: function (event) {
            if (this.readonly || this.disabled) {
                return false
            }
            if (!event.relatedTarget || !this.$refs.panel.contains(event.relatedTarget)) {
                this.visible = this.$refs.timePicker === event.relatedTarget ? true : this.$refs.timePicker.contains(event.relatedTarget)
                // return (this.visible = false)
            }
            // this.visible = this.$refs.timePicker === event.relatedTarget ? true : this.$refs.timePicker.contains(event.relatedTarget)
        },
        panelFocusOut: function (event) {
            if (this.popperAppendToBody) {
                event.relatedTarget !== this.$refs.confirmBtn.$el && (this.visible = event.relatedTarget === this.$refs.panel)
            }
        },
        computePanelStyle: function () {
            const panelMargin = 4
            if (this.$refs.panel) {
                const panelStyle = {
                    opacity: this.visible ? 1 : 0,
                    pointerEvents: this.visible ? 'auto' : 'none',
                    position: this.popperAppendToBody ? 'fixed' : 'absolute'
                }
                const boundingClientRect = this.$refs.timePicker.getBoundingClientRect()
                if (!this.popperAppendToBody) {
                    boundingClientRect.left + this.$refs.panel.offsetWidth <= window.innerWidth ? (panelStyle.left = 0) : (panelStyle.right = 0)
                    if (boundingClientRect.bottom + this.$refs.panel.offsetHeight + panelMargin <= window.innerHeight) {
                        panelStyle.bottom = `-${panelMargin}px`
                        panelStyle.transformOrigin = '50% 0%'
                        panelStyle.transform = `translate(0, 100%) scale(1, ${this.visible ? 1 : 0})`
                    } else {
                        panelStyle.top = `-${panelMargin}px`
                        panelStyle.transformOrigin = '50% 100%'
                        panelStyle.transform = `translate(0, -100%) scale(1, ${this.visible ? 1 : 0})`
                    }
                } else {
                    boundingClientRect.left + this.$refs.panel.offsetWidth <= window.innerWidth
                        ? (panelStyle.left = `${boundingClientRect.left}px`)
                        : (panelStyle.left = `${boundingClientRect.right - this.$refs.panel.offsetWidth}px`)
                    if (boundingClientRect.bottom + this.$refs.panel.offsetHeight + panelMargin <= window.innerHeight) {
                        panelStyle.top = `${boundingClientRect.bottom + panelMargin}px`
                        panelStyle.transformOrigin = '50% 0%'
                        panelStyle.transform = `scale(1, ${this.visible ? 1 : 0})`
                    } else {
                        panelStyle.bottom = `${window.innerHeight - boundingClientRect.top + panelMargin}px`
                        panelStyle.transformOrigin = '50% 100%'
                        panelStyle.transform = `scale(1, ${this.visible ? 1 : 0})`
                    }
                }
                let count = 0
                if (this.format) {
                    // this.format.match(/(?<!h)h{2}(?!h)/i) && count++
                    // this.format.match(/(?<!m)m{2}(?!m)/) && count++
                    // this.format.match(/(?<!s)s{2}(?!s)/) && count++
                    this.format.match(new RegExp('(?<!h)h{2}(?!h)', 'i')) && count++
                    this.format.match(new RegExp('(?<!m)m{2}(?!m)')) && count++
                    this.format.match(new RegExp('(?<!s)s{2}(?!s)')) && count++
                } else {
                    count = 3
                }
                this.times = count
                // this.rangeGapStart = count + 1
                if (!this.isRange) {
                    panelStyle.width = `${49 * count}px`
                    panelStyle['grid-template-columns'] = `repeat(${count}, minmax(0, 1fr))`
                } else {
                    panelStyle.width = `${49 * 2 * count + 32}px`
                    panelStyle['grid-template-columns'] = `repeat(${count}, minmax(0, 1fr)) 32px repeat(${count}, minmax(0, 1fr))`
                }
                this.panelStyle = panelStyle
            }
        },
        selectTime: function (obj, type, val) {
            obj[type] = val
            ;['hour', 'second', 'minute']
                .filter(n => n !== type)
                .forEach(key => {
                    if (obj[key] === null) {
                        // this.$refs[key].$el.querySelector('.el-scrollbar__wrap').scrollTop = 0
                        obj[key] = 0
                    }
                })
            this.computeInputShowValue()
        },
        changeTime: function () {
            if (!this.isRange) {
                const date = transformToDate(this.value)
                date.setHours(this.normal.hour)
                date.setMinutes(this.normal.minute)
                date.setSeconds(this.normal.second)
                this.input(date)
                this.computeInputShowValue()
                this.visible = false
                this.$nextTick(() => this.change(date))
            } else {
                let startDate
                let endDate
                try {
                    startDate = transformToDate(this.value[0])
                } catch (err) {
                    startDate = new Date()
                }
                try {
                    endDate = transformToDate(this.value[1])
                } catch (err) {
                    endDate = new Date()
                }
                startDate.setHours(this.range.start.hour)
                startDate.setMinutes(this.range.start.minute)
                startDate.setSeconds(this.range.start.second)
                endDate.setHours(this.range.end.hour)
                endDate.setMinutes(this.range.end.minute)
                endDate.setSeconds(this.range.end.second)
                this.input([startDate, endDate])
                this.computeInputShowValue()
                this.visible = false
                this.$nextTick(() => this.change([startDate, endDate]))
            }
            this.$refs.timePicker.focus()
        },
        computeClearBtnClassName: function () {
            if (!this.mouseover || this.disabled || this.readonly || this.visible) {
                return 'hide'
            }
            return this.value ? 'visible' : 'hide'
        },
        computeInputShowValue: function () {
            if (!this.isRange) {
                if (![this.normal.hour, this.normal.minute, this.normal.second].includes(null)) {
                    const now = new Date()
                    now.setHours(this.normal.hour)
                    now.setMinutes(this.normal.minute)
                    now.setSeconds(this.normal.second)
                    this.$refs.input.value = formatDate(now, this.format || 'HH:mm:ss')
                } else {
                    this.$refs.input.value = ''
                }
            } else {
                if (![this.range.start.hour, this.range.start.minute, this.range.start.second, this.range.end.hour, this.range.end.minute, this.range.end.second].includes(null)) {
                    const startTime = new Date()
                    const endTime = new Date()
                    startTime.setHours(this.range.start.hour)
                    startTime.setMinutes(this.range.start.minute)
                    startTime.setSeconds(this.range.start.second)
                    endTime.setHours(this.range.end.hour)
                    endTime.setMinutes(this.range.end.minute)
                    endTime.setSeconds(this.range.end.second)
                    const startFormatStr = formatDate(startTime, this.format || 'HH:mm:ss')
                    const endFormatStr = formatDate(endTime, this.format || 'HH:mm:ss')
                    this.$refs.input.value = `${startFormatStr} ${this.rangeSeparator} ${endFormatStr}`
                } else {
                    this.$refs.input.value = ''
                }
            }
        }
    },
    watch: {
        visible: function (newVal) {
            this.$emit(newVal ? 'focus' : 'blur')
            if (!this.isRange) {
                if (this.value) {
                    const date = transformToDate(this.value)
                    const timeItemHeight = 32
                    this.normal.hour = date.getHours()
                    this.normal.minute = date.getMinutes()
                    this.normal.second = date.getSeconds()
                    // this.$refs.hour[0].$el.querySelector('.el-scrollbar__wrap').scrollTop = timeItemHeight * this.hour
                    // this.$refs.minute[0].$el.querySelector('.el-scrollbar__wrap').scrollTop = timeItemHeight * this.minute
                    // this.$refs.second[0].$el.querySelector('.el-scrollbar__wrap').scrollTop = timeItemHeight * this.second
                } else {
                    this.normal.hour = this.normal.minute = this.normal.second = null
                }
            } else {
                try {
                    const startDate = transformToDate(this.value[0])
                    const endDate = transformToDate(this.value[1])
                    this.range.start.hour = startDate.getHours()
                    this.range.start.minute = startDate.getMinutes()
                    this.range.start.second = startDate.getSeconds()
                    this.range.end.hour = endDate.getHours()
                    this.range.end.minute = endDate.getMinutes()
                    this.range.end.second = endDate.getSeconds()
                } catch (err) {
                    this.range.start.hour = this.range.start.minute = this.range.start.second = null
                    this.range.end.hour = this.range.end.minute = this.range.end.second = null
                }
            }
            if (newVal && this.popperAppendToBody) {
                const maxZIndex = Math.max(...[...document.body.children].map(dom => Number(window.getComputedStyle(dom).zIndex) || 0))
                this.$refs.panel.style.zIndex = (maxZIndex || 0) + 1
            }
            // if (['daterange', 'datetimerange'].includes(this.type) && !newVal && this.value.length !== 2) {
            //     this[`${this.type}Data`].startTimestamp = this[`${this.type}Data`].endTimestamp = null
            //     this.type === 'datetimerange' && (this.datetimerangeData.hour = this.datetimerangeData.minute = this.datetimerangeData.second = 0)
            // }
            // // datetime 需要点确认按钮，没有点确认按钮的时候，panel 展示的时间需要还原到原来
            // if (newVal && ['datetime'].includes(this.type)) {
            //     this.datetimeData.timestamp = transformToDate(this.value)
            // }
            // // datetimerange 需要点确认按钮，没有点确认按钮的时候，panel 展示的时间需要还原到原来
            // if (['datetimerange'].includes(this.type) && this.value.length === 2) {
            //     this.datetimerangeData.startTimestamp = transformToDate(this.value[0])
            //     this.datetimerangeData.endTimestamp = transformToDate(this.value[1])
            // }
            // this.computeCurrentValue()
            this.computeInputShowValue()
            // this.computeOptions()
            this.computePanelStyle()
            this.$emit('visible-change', newVal)
        }
    },
    computed: {
        // computePanelStyle: function () {
        //     let count = 0
        //     format.match(/(?<!h)h{2}(?!h)/i) && (count++)
        //     format.match(/(?<!m)m{2}(?!m)/) && (count++)
        //     format.match(/(?<!s)s{2}(?!s)/) && (count++)
        //     return {
        //         width: `${49 * count}px`,
        //         'grid-template-columns': `repeat(${count}, minmax(0, 1fr))`;
        //     }
        // }
    },
    mounted: function () {
        this.$nextTick(this.computePanelStyle)
        if (this.popperAppendToBody && ![...document.body.children].includes(this.$refs.panel)) {
            const maxZIndex = Math.max(...[...document.body.children].map(dom => Number(window.getComputedStyle(dom).zIndex) || 0))
            this.$refs.panel.style.zIndex = (maxZIndex || 0) + 1
            document.body.appendChild(this.$refs.panel)
        }
        if (!this.isRange) {
            if (this.value) {
                const date = transformToDate(this.value)
                this.normal.hour = date.getHours()
                this.normal.minute = date.getMinutes()
                this.normal.second = date.getSeconds()
            }
        }
        if (this.isRange && this.value instanceof Array && this.value.length >= 2) {
            try {
                const startDate = transformToDate(this.value[0])
                const endDate = transformToDate(this.value[1])
                this.range.start.hour = startDate.getHours()
                this.range.start.minute = startDate.getMinutes()
                this.range.start.second = startDate.getSeconds()
                this.range.end.hour = endDate.getHours()
                this.range.end.minute = endDate.getMinutes()
                this.range.end.second = endDate.getSeconds()
            } catch (err) {}
        }
        this.computeInputShowValue()
        const parentNodeStyle = window.getComputedStyle(this.$el.parentNode)
        ;['overflow', 'overflow-x', 'overflow-y'].map(attribute => parentNodeStyle[attribute]).some(n => ['scroll', 'auto'].includes(n)) &&
            this.$el.parentNode.addEventListener('scroll', this.computePanelStyle)
    },
    beforeDestroy: function () {
        this.popperAppendToBody && document.body.removeChild(this.$refs.panel)
        this.$el.parentNode && this.$el.parentNode.removeEventListener('scroll', this.computePanelStyle)
    },
    activated() {
        if (this.popperAppendToBody && ![...document.body.children].includes(this.$refs.panel)) {
            const maxZIndex = Math.max(...[...document.body.children].map(dom => Number(window.getComputedStyle(dom).zIndex) || 0))
            this.$refs.panel.style.zIndex = (maxZIndex || 0) + 1
            document.body.appendChild(this.$refs.panel)
        }
        const parentNodeStyle = window.getComputedStyle(this.$el.parentNode)
        ;['overflow', 'overflow-x', 'overflow-y'].map(attribute => parentNodeStyle[attribute]).some(n => ['scroll', 'auto'].includes(n)) &&
            this.$el.parentNode.addEventListener('scroll', this.computePanelStyle)
    },
    deactivated() {
        this.popperAppendToBody && document.body.removeChild(this.$refs.panel)
        this.$el.parentNode && this.$el.parentNode.removeEventListener('scroll', this.computePanelStyle)
    }
}
</script>
<style lang="stylus" scoped></style>