<template>
    <div
        :class="['zrx-date-time-picker', type, size, visible && 'focus', disabled && 'disabled']"
        ref="dateTimePicker"
        tabindex="-1"
        v-on:focusout="focusOutFunc"
        v-on:mouseover="mouseover = true"
        v-on:mouseleave="mouseover = false"
        v-on:keydown.enter="keydownEnterFunc"
    >
        <!-- <div style="position: absolute; top: 0; left: 0;">{{ datetimerangeData.endTimestamp }}</div> -->
        <template v-if="['year', 'month', 'date', 'week', 'datetime', 'dates'].includes(type)">
            <input
                ref="input"
                v-on:focusin="!readonly && !disabled && (visible = true)"
                readonly="readonly"
                v-bind:placeholder="placeholder"
                v-bind:style="`text-align: ${align};`"
            />
        </template>
        <span :class="['clear-btn', clearIcon, computeClearBtnClassName()]" v-on:click="clearValue" v-if="!readonly && clearable"></span>
        <span :class="['zrx-time-picker-icon', prefixIcon]"></span>
        <div class="range-input-value" v-if="['daterange', 'datetimerange', 'monthrange'].includes(type)">
            <input
                ref="daterangeStartInput"
                v-on:focusin="daterangeFocus('start')"
                readonly="readonly"
                v-bind:placeholder="startPlaceholder"
                v-bind:style="`text-align: ${align};`"
            />
            <span :class="['icon']" ref="dateRangeIcon">{{ rangeSeparator }}</span>
            <input ref="daterangeEndInput" v-on:focusin="daterangeFocus('end')" readonly="readonly" v-bind:placeholder="endPlaceholder" v-bind:style="`text-align: ${align};`" />
        </div>
        <span class="active-dot" v-bind:style="computedActiveDotStyle()"></span>
        <!-- v-bind:style="`opacity: ${visible ? 1 : 0}; pointer-events: ${visible ? 'auto' : 'none'}; transform: translate(0, 100%) scale(1, ${visible ? 1 : 0});`" -->
        <div
            :class="['zrx-date-time-picker-panel', popperClass, type]"
            v-if="['year', 'month', 'date', 'week', 'datetime', 'dates'].includes(type)"
            v-on:mouseover.stop
            v-on:mouseleave.stop
            v-bind:style="panelStyle"
            ref="panel"
            tabindex="-1"
            v-on:focusout.stop="panelFocusOut"
        >
            <div class="panel-header">
                <i class="prev-btn svg-icon zrx-icon-double-angle-left" v-on:click="prevPanel('year')"></i>
                <i class="prev-btn svg-icon zrx-icon-left-angle" v-on:click="prevPanel('month')" v-if="['date', 'week', 'datetime', 'dates'].includes(type)"></i>
                <div class="panel-header-text" v-if="type === 'year'">{{ yearData.options[1] }}-{{ yearData.options[yearData.options.length - 2] }}</div>
                <div class="panel-header-text" v-if="type === 'month'">{{ monthData.year }}</div>
                <div class="panel-header-text" v-if="type === 'date'">{{ dateData.year }}年&nbsp;&nbsp;{{ dateData.month + 1 }}月</div>
                <div class="panel-header-text" v-if="type === 'dates'">{{ datesData.year }}年&nbsp;&nbsp;{{ datesData.month + 1 }}月</div>
                <div class="panel-header-text" v-if="type === 'week'">{{ weekData.year }}年&nbsp;&nbsp;{{ weekData.month + 1 }}月</div>
                <div class="panel-header-text" v-if="type === 'datetime'">{{ datetimeData.year }}年&nbsp;&nbsp;{{ datetimeData.month + 1 }}月</div>
                <i class="next-btn svg-icon zrx-icon-right-angle" v-on:click="nextPanel('month')" v-if="['date', 'week', 'datetime', 'dates'].includes(type)"></i>
                <i class="next-btn svg-icon zrx-icon-double-angle-right" v-on:click="nextPanel('year')"></i>
            </div>
            <div class="panel-body">
                <template v-if="type === 'year'">
                    <div
                        :class="['year-item', new Date(value).getFullYear() === item && 'current', (index === 0 || index === 11) && 'gray']"
                        v-for="(item, index) in yearData.options"
                        v-on:click="changeValue(item)"
                        v-bind:key="index"
                    >
                        <span class="num">{{ item }}</span>
                    </div>
                </template>
                <template v-if="type === 'month'">
                    <div
                        :class="['month-item', new Date(value).getFullYear() === monthData.year && new Date(value).getMonth() === item && 'current']"
                        v-for="(item, index) in monthData.options"
                        v-on:click="changeValue(item)"
                        v-bind:key="index"
                    >
                        <span class="num">{{ item + 1 }}月</span>
                    </div>
                </template>
                <template v-if="['date'].includes(type)">
                    <div :class="['date-item', 'week-label']" v-for="week in ['一', '二', '三', '四', '五', '六', '日']" v-bind:key="week">
                        {{ week }}
                    </div>
                    <div
                        v-bind:key="index"
                        :class="[
                            'date-item',
                            compareSameTime(value, item, 'yyyy-MM-dd') && 'current',
                            dateData.year === item.getFullYear() && dateData.month === item.getMonth() ? 'same-month' : 'different-month',
                            compareSameTime(new Date(), item, 'yyyy-MM-dd') && 'today'
                        ]"
                        v-for="(item, index) in dateData.options"
                        v-on:click="changeValue(item)"
                    >
                        <span class="num">{{ item.getDate() }}</span>
                    </div>
                </template>
                <template v-if="['dates'].includes(type)">
                    <div :class="['date-item', 'week-label']" v-for="week in ['一', '二', '三', '四', '五', '六', '日']" v-bind:key="week">
                        {{ week }}
                    </div>
                    <div
                        v-bind:key="index"
                        :class="[
                            'date-item',
                            compareDatesCurrent(item) && 'current',
                            datesData.year === item.getFullYear() && datesData.month === item.getMonth() ? 'same-month' : 'different-month',
                            compareSameTime(new Date(), item, 'yyyy-MM-dd') && 'today'
                        ]"
                        v-for="(item, index) in datesData.options"
                        v-on:click="changeValue(item)"
                    >
                        <span class="num">{{ item.getDate() }}</span>
                    </div>
                </template>
                <template v-if="type === 'week'">
                    <div :class="['date-item', 'week-label']" v-for="week in ['一', '二', '三', '四', '五', '六', '日']" v-bind:key="week">
                        {{ week }}
                    </div>
                    <div
                        v-bind:key="index"
                        :class="['date-item', computeWeekItemClassName(item), compareSameTime(new Date(), item, 'yyyy-MM-dd') && 'today']"
                        v-for="(item, index) in weekData.options"
                        v-on:click="changeValue(item)"
                        v-on:mousemove="weekData.hoverTimestamp = item"
                        v-on:mouseleave="weekData.hoverTimestamp = null"
                    >
                        <span class="num">{{ item.getDate() }}</span>
                    </div>
                </template>
                <template v-if="type === 'datetime'">
                    <div :class="['date-item', 'week-label']" v-for="week in ['一', '二', '三', '四', '五', '六', '日']" v-bind:key="week">
                        {{ week }}
                    </div>
                    <div
                        v-bind:key="index"
                        :class="[
                            'date-item',
                            compareSameTime(datetimeData.timestamp, item) && 'current',
                            datetimeData.year === item.getFullYear() && datetimeData.month === item.getMonth() ? 'same-month' : 'different-month',
                            compareSameTime(new Date(), item, 'yyyy-MM-dd') && 'today'
                        ]"
                        v-for="(item, index) in datetimeData.options"
                        v-on:click="
                            () => {
                                datetimeData.year = item.getFullYear()
                                datetimeData.month = item.getMonth()
                                datetimeData.day = item.getDate()
                                datetimeData.timestamp = item
                                computeOptions()
                            }
                        "
                    >
                        <span class="num">{{ item.getDate() }}</span>
                    </div>
                </template>
            </div>
            <div class="panel-footer" v-if="type === 'datetime'">
                <el-button class="datetimerange-panel-btn" type="primary" v-on:click="changeValue" ref="confirmBtn">确定</el-button>
            </div>
            <div class="time-panel-header" v-if="['datetime'].includes(type)">
                {{ datetimeData.hour.toString().padStart(2, 0) }}:{{ datetimeData.minute.toString().padStart(2, 0) }}:{{ datetimeData.second.toString().padStart(2, 0) }}
            </div>
            <div class="time-panel-body" v-if="['datetime'].includes(type)" v-bind:style="`height: ${Math.ceil(datetimeData.options.length / 7) * 36 + 36 + 17}px;`">
                <el-scrollbar class="hour">
                    <div
                        :class="['time-item', n - 1 === datetimeData.hour && 'current']"
                        v-for="n in 24"
                        v-bind:key="n"
                        v-on:click="
                            () => {
                                datetimeData.hour = n - 1
                            }
                        "
                    >
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
                <el-scrollbar class="minute">
                    <div
                        :class="['time-item', n - 1 === datetimeData.minute && 'current']"
                        v-for="n in 60"
                        v-bind:key="n"
                        v-on:click="
                            () => {
                                datetimeData.minute = n - 1
                            }
                        "
                    >
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
                <el-scrollbar class="second">
                    <div
                        :class="['time-item', n - 1 === datetimeData.second && 'current']"
                        v-for="n in 60"
                        v-bind:key="n"
                        v-on:click="
                            () => {
                                datetimeData.second = n - 1
                            }
                        "
                    >
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
            </div>
            <!-- <div class="panel-footer" v-if="type === 'datetime'">
                <el-button class="datetimerange-panel-btn" type="primary" size="mini" v-on:click="() => { changeValue(); visible = false }">Ok</el-button>
            </div> -->
        </div>
        <div
            :class="['zrx-date-time-picker-panel', popperClass, type]"
            v-if="['daterange', 'monthrange'].includes(type)"
            v-bind:style="panelStyle"
            v-on:mouseover.stop
            v-on:mouseleave.stop
            ref="panel"
            tabindex="-1"
            v-on:focusout.stop="panelFocusOut"
        >
            <template v-for="n in 2">
                <div class="panel-header" v-bind:key="`panel-header-${n}`">
                    <template v-if="n === 1">
                        <i class="prev-btn svg-icon zrx-icon-double-angle-left" v-on:click="prevPanel('year')"></i>
                        <i class="prev-btn svg-icon zrx-icon-left-angle" v-on:click="prevPanel('month')" v-if="type === 'daterange'"></i>
                    </template>
                    <div class="panel-header-text" v-if="type === 'daterange'">
                        {{ daterangeData.year + (daterangeData.month + n === 13 ? 1 : 0) }}年
                        <template v-if="type === 'daterange'">{{ daterangeData.month + n === 13 ? 1 : daterangeData.month + n }}月</template>
                    </div>
                    <div class="panel-header-text" v-if="type === 'monthrange'">{{ monthrangeData.year + n - 1 }}年</div>
                    <template v-if="n === 2">
                        <i class="next-btn svg-icon zrx-icon-right-angle" v-on:click="nextPanel('month')" v-if="type === 'daterange'"></i>
                        <i class="next-btn svg-icon zrx-icon-double-angle-right" v-on:click="nextPanel('year')"></i>
                    </template>
                </div>
                <div class="panel-body" v-bind:key="`panel-body-${n}`">
                    <template v-if="type === 'daterange'">
                        <div :class="['date-item', 'week-label']" v-for="week in ['一', '二', '三', '四', '五', '六', '日']" v-bind:key="week">
                            {{ week }}
                        </div>
                        <div
                            v-bind:key="index"
                            :class="['date-item', computeDateItemClassName(item, ['first', 'last'][n - 1])]"
                            v-for="(item, index) in [daterangeData.firstPanelOptions, daterangeData.lastPanelOptions][n - 1]"
                            v-on:mousemove="daterangeData.hoverTimestamp = item"
                            v-on:mouseleave="daterangeData.hoverTimestamp = null"
                            v-on:click="changeDaterangeValue(item)"
                        >
                            <span class="num">{{ item.getDate() }}</span>
                        </div>
                    </template>
                    <template v-if="type === 'monthrange'">
                        <div
                            v-bind:key="index"
                            :class="['date-item', computeDateItemClassName(item, ['first', 'last'][n - 1])]"
                            v-for="(item, index) in [monthrangeData.firstPanelOptions, monthrangeData.lastPanelOptions][n - 1]"
                            v-on:mousemove="monthrangeData.hoverTimestamp = item"
                            v-on:mouseleave="monthrangeData.hoverTimestamp = null"
                            v-on:click="changeDaterangeValue(item)"
                        >
                            <span class="num">{{ item.getMonth() + 1 }}月</span>
                        </div>
                    </template>
                </div>
            </template>
        </div>
        <div
            :class="['zrx-date-time-picker-panel', popperClass, type]"
            v-if="['datetimerange'].includes(type)"
            v-bind:style="panelStyle"
            ref="panel"
            tabindex="-1"
            v-on:focusout.stop="panelFocusOut"
        >
            <div class="panel-header">
                <i class="prev-btn svg-icon zrx-icon-double-angle-left" v-on:click="prevPanel('year')"></i>
                <i class="prev-btn svg-icon zrx-icon-left-angle" v-on:click="prevPanel('month')"></i>
                <div class="panel-header-text">{{ datetimerangeData.year }}年 {{ datetimerangeData.month + 1 }}月</div>
                <i class="next-btn svg-icon zrx-icon-right-angle" v-on:click="nextPanel('month')"></i>
                <i class="next-btn svg-icon zrx-icon-double-angle-right" v-on:click="nextPanel('year')"></i>
            </div>
            <div class="panel-body">
                <div :class="['date-item', 'week-label']" v-for="week in ['一', '二', '三', '四', '五', '六', '日']" v-bind:key="week">
                    {{ week }}
                </div>
                <div
                    v-bind:key="index"
                    :class="['date-item', computeDateItemClassName(item, datetimerangeData.operateKey)]"
                    v-for="(item, index) in datetimerangeData.panelOptions"
                    v-on:mousemove="datetimerangeData.hoverTimestamp = item"
                    v-on:mouseleave="datetimerangeData.hoverTimestamp = null"
                    v-on:click="changeDaterangeValue(item)"
                >
                    <span class="num">{{ item.getDate() }}</span>
                </div>
            </div>
            <div class="time-panel-header">
                {{ datetimerangeData.hour.toString().padStart(2, 0) }}:{{ datetimerangeData.minute.toString().padStart(2, 0) }}:{{
                    datetimerangeData.second.toString().padStart(2, 0)
                }}
            </div>
            <div class="time-panel-body" v-bind:style="`height: ${Math.ceil(datetimerangeData.panelOptions.length / 7) * 36 + 36 + 17}px;`">
                <el-scrollbar class="hour">
                    <div :class="['time-item', n - 1 === datetimerangeData.hour && 'current']" v-for="n in 24" v-bind:key="n" v-on:click="changeDatetimerangeTime('hour', n - 1)">
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
                <el-scrollbar class="minute">
                    <div
                        :class="['time-item', n - 1 === datetimerangeData.minute && 'current']"
                        v-for="n in 60"
                        v-bind:key="n"
                        v-on:click="changeDatetimerangeTime('minute', n - 1)"
                    >
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
                <el-scrollbar class="second">
                    <div
                        :class="['time-item', n - 1 === datetimerangeData.second && 'current']"
                        v-for="n in 60"
                        v-bind:key="n"
                        v-on:click="changeDatetimerangeTime('second', n - 1)"
                    >
                        {{ (n - 1).toString().padStart(2, 0) }}
                    </div>
                </el-scrollbar>
            </div>
            <div class="panel-footer">
                <el-button class="datetimerange-panel-btn" type="primary" v-on:click="changeValue" ref="confirmBtn">确定</el-button>
            </div>
        </div>
    </div>
</template>
<script>
import { formatDate } from '../../utils/common'
function transformToDate(value) {
    let result
    try {
        if ([null, undefined, '', NaN].includes(value)) {
            throw new Error()
        } else if (value instanceof Date || typeof value === 'string' || typeof value === 'number') {
            result = new Date(value)
        }
        if (result instanceof Date && result.toString() === 'Invalid Date') {
            throw new Error()
        }
    } catch (e) {
        result = new Date()
    }
    return result
}
export default {
    name: 'zrxDateTimePicker',
    props: {
        value: {
            type: [String, Number, Date, Array],
            default: function () {
                return ''
            }
        },
        // 完全只读
        readonly: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        // 禁用
        disabled: {
            type: [Boolean],
            default: function () {
                return false
            }
        },
        // 文本框可输入
        // editable: {
        //     type: [Boolean],
        //     default: function () {
        //         return true
        //     }
        // },
        // 是否显示清除按钮
        clearable: {
            type: [Boolean],
            default: function () {
                return true
            }
        },
        // 输入框尺寸
        size: {
            type: [String],
            default: function () {
                // return 'large'
                // return 'small'
                // return 'mini'
                return ''
            }
        },
        // 非范围选择时的占位内容
        placeholder: {
            type: [String],
            default: function () {
                return '请选择'
            }
        },
        // 范围选择时开始日期的占位内容
        startPlaceholder: {
            type: [String],
            default: function () {
                return '开始日期'
            }
        },
        // 范围选择时结束日期的占位内容
        endPlaceholder: {
            type: [String],
            default: function () {
                return '结束日期'
            }
        },
        // 是否使用箭头进行时间选择
        // timeArrowControl: {
        //     type: [Boolean],
        //     default: function () {
        //         return false
        //     }
        // },
        // 显示类型
        type: {
            type: [String],
            default: function () {
                // return 'year/month/date/week/datetime/datetimerange/daterange/dates'
                return 'date'
            }
        },
        // 显示在输入框中的格式
        format: {
            type: [String],
            default: function () {
                // return 'yyyy-MM-dd HH:mm:ss'
                return ''
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
        // DateTimePicker 下拉框的类名
        popperClass: {
            type: [String],
            default: function () {
                return ''
            }
        },
        // 当前时间日期选择器特有的选项参考下表
        // pickerOptions: {
        //     type: [Object],
        //     default: function () {
        //         return {}
        //     }
        // },
        // 选择范围时的分隔符
        rangeSeparator: {
            type: [String],
            default: function () {
                return '-'
            }
        },
        // 选择器打开时默认显示的时间
        // defaultValue: {
        //     type: [String, Number, Date],
        //     default: function () {
        //         return ''
        //     }
        // },
        // defaultTime: {
        //     type: [String, Date, Number, Array],
        //     default: function () {
        //         return ''
        //     }
        // },
        valueFormat: {
            type: [String],
            default: function () {
                // return 'yyyy-MM-dd HH:mm:ss'
                return ''
            }
        },
        // unlinkPanels: {
        //     type: [Boolean],
        //     default: function () {
        //         return false
        //     }
        // },
        prefixIcon: {
            type: [String],
            default: function () {
                return 'svg-icon zrx-icon-calendar'
            }
        },
        clearIcon: {
            type: [String],
            default: function () {
                return 'svg-icon zrx-icon-close'
            }
        },
        popperAppendToBody: {
            type: [Boolean],
            default: function () {
                return true
            }
        }
    },
    computed: {},
    data: function () {
        return {
            mouseover: false,
            // now: new Date(),
            visible: false,
            yearData: {
                timestamp: null,
                year: null,
                options: []
            },
            monthData: {
                timestamp: null,
                year: null,
                month: null,
                options: []
            },
            dateData: {
                timestamp: null,
                year: null,
                month: null,
                options: []
            },
            weekData: {
                timestamp: null,
                year: null,
                month: null,
                hoverTimestamp: null,
                options: []
            },
            datetimeData: {
                timestamp: null,
                year: null,
                month: null,
                day: null,
                hour: 0,
                minute: 0,
                second: 0,
                options: []
            },
            daterangeData: {
                startTimestamp: null,
                endTimestamp: null,
                hoverTimestamp: null,
                year: null,
                month: null,
                firstPanelOptions: [],
                lastPanelOptions: [],
                operateKey: 'start',
                operateTimes: 0
            },
            datetimerangeData: {
                startTimestamp: null,
                endTimestamp: null,
                hoverTimestamp: null,
                year: null,
                month: null,
                hour: 0,
                minute: 0,
                second: 0,
                panelOptions: [],
                // lastPanelOptions: [],
                operateKey: 'start',
                operateTimes: 0
            },
            monthrangeData: {
                startTimestamp: null,
                endTimestamp: null,
                hoverTimestamp: null,
                year: null,
                month: null,
                firstPanelOptions: [],
                lastPanelOptions: [],
                operateKey: 'start',
                operateTimes: 0
            },
            datesData: {
                year: null,
                month: null,
                options: []
            },
            panelStyle: {}
        }
    },
    methods: {
        toggleMenu(which) {
            if (['year', 'month', 'date', 'week', 'datetime', 'dates'].includes(this.type)) {
                this.$refs.input.focus()
            } else {
                this.$refs[{ start: 'daterangeStartInput', end: 'daterangeEndInput' }[which]]?.focus()
            }
        },
        changeDatetimerangeTime: function (key, value) {
            this.datetimerangeData[key] = value
            key = `${this.datetimerangeData.operateKey}Timestamp`
            if (!this.datetimerangeData[key]) {
                this.datetimerangeData[key] = new Date()
            }
            this.datetimerangeData[key].setHours(this.datetimerangeData.hour)
            this.datetimerangeData[key].setMinutes(this.datetimerangeData.minute)
            this.datetimerangeData[key].setSeconds(this.datetimerangeData.second)
            this.computeInputShowValue()
        },
        keydownEnterFunc: function (event) {
            if (['daterange', 'datetimerange', 'monthrange'].includes(this.type)) {
                const key = `${this.type}Data`
                const refName = {
                    start: 'daterangeStartInput',
                    end: 'daterangeEndInput'
                }[this[key].operateKey]
                this.$refs[refName].blur()
            } else {
                this.$refs.input.blur()
            }
        },
        compareDatesCurrent: function (dateItem) {
            const tempArr = (this.value instanceof Array ? this.value : [this.value]).map(n => transformToDate(n))
            return tempArr.map(n => this.compareSameTime(n, dateItem, 'yyyy-MM-dd')).includes(true)
        },
        panelFocusOut: function (event) {
            if (this.popperAppendToBody && ['datetime', 'datetimerange'].includes(this.type)) {
                event.relatedTarget !== this.$refs.confirmBtn.$el && !this.disabled && (this.visible = event.relatedTarget === this.$refs.panel)
            } else {
                !this.disabled && (this.visible = event.relatedTarget === this.$refs.panel)
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
                const boundingClientRect = this.$refs.dateTimePicker.getBoundingClientRect()
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
                this.panelStyle = panelStyle
            }
        },
        compareSameTime: function (prev, next, format = 'yyyy-MM-dd') {
            return formatDate(prev, format) === formatDate(next, format)
        },
        clearValue: function () {
            if (['year', 'month', 'date', 'week', 'datetime'].includes(this.type)) {
                this[`${this.type}Data`].timestamp = null
                this.input(null)
                this.$nextTick(() => this.change(null))
                // 'datetime' === this.type && (this.datetimeData)
                // datetimeData: {
                //     year: null,
                //     month: null,
                //     day: null,
                //     hour: 0,
                //     minute: 0,
                //     second: 0,
                //     options: []
                // }
            } else if (['dates'].includes(this.type)) {
                this.input([])
                this.$nextTick(() => this.change([]))
            } else {
                this[`${this.type}Data`].startTimestamp = this[`${this.type}Data`].endTimestamp = null
                this.input([])
                this.$nextTick(() => this.change([]))
            }
            this.$nextTick(this.computeInputShowValue)
        },
        computeClearBtnClassName: function () {
            if (!this.mouseover || this.disabled || this.readonly) {
                return 'hide'
            }
            if (['year', 'month', 'date', 'week', 'datetime'].includes(this.type)) {
                return this.value ? 'visible' : 'hide'
            }
            if (['daterange', 'datetimerange', 'monthrange'].includes(this.type)) {
                return this.value && this.value.length === 2 ? 'visible' : 'hide'
            }
            if (['dates'].includes(this.type)) {
                if (this.value instanceof Array) {
                    return this.value.length ? 'visible' : 'hide'
                }
                return ![null, undefined, NaN, ''].includes(this.value) ? 'visible' : 'hide'
            }
        },
        focusOutFunc: function (event) {
            if (this.readonly) {
                return false
            }
            if (this.disabled) {
                return (this.visible = false)
            }
            if (!this.popperAppendToBody) {
                if (!event.relatedTarget) {
                    return (this.visible = false)
                }
                this.visible = this.$refs.dateTimePicker === event.relatedTarget ? true : this.$refs.dateTimePicker.contains(event.relatedTarget)
            } else {
                if (['datetime', 'datetimerange'].includes(this.type)) {
                    this.$refs.confirmBtn.$el !== event.relatedTarget && (this.visible = event.relatedTarget === this.$refs.panel)
                } else {
                    this.visible = event.relatedTarget === this.$refs.panel
                }
            }
        },
        changeDaterangeValue: function (dateItem) {
            const key = `${this.type}Data`
            if (this[key].operateKey === 'start') {
                if (this[key].endTimestamp && this[key].endTimestamp < dateItem && this[key].operateTimes === 0) {
                    this[key].endTimestamp = null
                }
                // if (this[key].endTimestamp && this[key].endTimestamp < dateItem && this[key].operateTimes === 1) {
                //     return false
                // }
                this[key].startTimestamp = dateItem
                // this.type === 'daterange' && (this[key].operateKey = 'end')
                ;['daterange', 'monthrange'].includes(this.type) && (this[key].operateKey = 'end')
            } else if (this[key].operateKey === 'end') {
                if (this[key].startTimestamp && this[key].startTimestamp > dateItem && this[key].operateTimes === 0) {
                    this[key].startTimestamp = null
                }
                // if (this[key].startTimestamp && this[key].startTimestamp > dateItem && this[key].operateTimes === 1) {
                //     return false
                // }
                this[key].endTimestamp = dateItem
                // this.type === 'daterange' && (this[key].operateKey = 'start')
                ;['daterange', 'monthrange'].includes(this.type) && (this[key].operateKey = 'start')
            }
            // if (this.type === 'daterange') {
            if (['daterange', 'monthrange'].includes(this.type)) {
                this[key].operateTimes = (this[key].operateTimes + 1) % 2
                if (this[key].operateTimes === 0) {
                    this[key].operateKey = 'start'
                    this.visible = false
                    this[key].hoverTimestamp = null
                    if (this[key].startTimestamp && this[key].endTimestamp && this[key].startTimestamp > this[key].endTimestamp) {
                        return this.$message.warning('起始时间不能大于结束时间')
                    }
                }
                if (this[key].startTimestamp && this[key].endTimestamp) {
                    this.input([this[key].startTimestamp, this[key].endTimestamp])
                    this.$nextTick(() => this.change([this[key].startTimestamp, this[key].endTimestamp]))
                }
            }
            this[key].year = dateItem.getFullYear()
            this[key].month = dateItem.getMonth()
            this[key].day = dateItem.getDate()
            this.computeOptions()
            this.computeInputShowValue()
        },
        computeInputShowValue: function () {
            let format
            switch (this.type) {
                case 'year':
                    format = [null, undefined, '', NaN].includes(this.format) ? 'yyyy年' : this.format
                    break
                case 'month':
                case 'monthrange':
                    format = [null, undefined, '', NaN].includes(this.format) ? 'yyyy年 MM月' : this.format
                    break
                case 'date':
                case 'dates':
                    format = [null, undefined, '', NaN].includes(this.format) ? 'yyyy年 MM月 dd日' : this.format
                    break
                case 'week':
                    break
                case 'daterange':
                    format = [null, undefined, '', NaN].includes(this.format) ? 'yyyy-MM-dd' : this.format
                    break
                case 'datetime':
                case 'datetimerange':
                    format = [null, undefined, '', NaN].includes(this.format) ? 'yyyy-MM-dd HH:mm:ss' : this.format
                    break
            }
            this.type === 'year' && this.$nextTick(() => (this.$refs.input.value = formatDate(this.yearData.timestamp, format)))
            this.type === 'month' && this.$nextTick(() => (this.$refs.input.value = formatDate(this.monthData.timestamp, format)))
            this.type === 'date' && this.$nextTick(() => (this.$refs.input.value = formatDate(this.dateData.timestamp, format)))
            this.type === 'week' &&
                this.$nextTick(() => {
                    if (!this.value) {
                        return (this.$refs.input.value = '')
                    }
                    let yearFirstDay = new Date(this.weekData.timestamp.getFullYear(), 0)
                    let day = yearFirstDay.getDay()
                    day !== 1 && yearFirstDay.setDate(yearFirstDay.getDate() + [1, 0, 6, 5, 4, 3, 2][day])
                    const thisWeekFirstDay = new Date(this.weekData.timestamp.getFullYear(), this.weekData.timestamp.getMonth(), this.weekData.timestamp.getDate())
                    day = thisWeekFirstDay.getDay()
                    day !== 1 && thisWeekFirstDay.setDate(thisWeekFirstDay.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                    if (thisWeekFirstDay < yearFirstDay) {
                        yearFirstDay = new Date(yearFirstDay.getFullYear() - 1, 0)
                        day = yearFirstDay.getDay()
                        day !== 1 && yearFirstDay.setDate(yearFirstDay.getDate() + [1, 0, 6, 5, 4, 3, 2][day])
                    }
                    const milliseconds = thisWeekFirstDay.getTime() - yearFirstDay.getTime()
                    this.$refs.input.value = `${thisWeekFirstDay.getFullYear()}年第${milliseconds / 1000 / 24 / 3600 / 7 + 1}周`
                })
            this.type === 'datetime' && this.$nextTick(() => (this.$refs.input.value = formatDate(this.value, format)))
            if (this.type === 'daterange') {
                this.$refs.daterangeStartInput.value = this.daterangeData.startTimestamp ? formatDate(this.daterangeData.startTimestamp, format) : ''
                this.$refs.daterangeEndInput.value = this.daterangeData.endTimestamp ? formatDate(this.daterangeData.endTimestamp, format) : ''
            }
            this.type === 'datetimerange' &&
                this.$nextTick(() => {
                    this.$refs.daterangeStartInput.value = this.datetimerangeData.startTimestamp ? formatDate(this.datetimerangeData.startTimestamp, format) : ''
                    this.$refs.daterangeEndInput.value = this.datetimerangeData.endTimestamp ? formatDate(this.datetimerangeData.endTimestamp, format) : ''
                })
            this.type === 'monthrange' &&
                this.$nextTick(() => {
                    this.$refs.daterangeStartInput.value = this.monthrangeData.startTimestamp ? formatDate(this.monthrangeData.startTimestamp, format) : ''
                    this.$refs.daterangeEndInput.value = this.monthrangeData.endTimestamp ? formatDate(this.monthrangeData.endTimestamp, format) : ''
                })
            this.type === 'dates' &&
                this.$nextTick(() => {
                    let tempArr = this.value instanceof Array ? this.value : [this.value]
                    tempArr = tempArr.filter(n => new Date(n).toString() !== 'Invalid Date' && ![null, undefined, '', NaN].includes(n))
                    this.$refs.input.value = this.value ? tempArr.map(n => formatDate(n, format)).join(',') : ''
                })
        },
        computedActiveDotStyle: function () {
            const key = `${this.type}Data`
            if (!this.$refs.daterangeStartInput || !this.visible) {
                return {}
            }
            let left = parseInt(window.getComputedStyle(this.$refs.dateTimePicker).paddingLeft)
            const refName = this[key].operateKey === 'end' ? 'daterangeEndInput' : 'daterangeStartInput'
            left = this.$refs[refName].getBoundingClientRect().left - this.$refs.dateTimePicker.getBoundingClientRect().left
            return {
                left: `${left}px`,
                width: `${this.$refs.daterangeStartInput.offsetWidth}px`,
                display: 'inline-block'
            }
        },
        daterangeFocus: function (type) {
            if (this.readonly) {
                return false
            }
            if (this.disabled) {
                return (this.visible = false)
            }
            this.visible = true
            const key = `${this.type}Data`
            this[key].operateTimes = 0
            this[key].operateKey = type
            this.computedActiveDotStyle()
            if (this[key].startTimestamp && this[key].endTimestamp) {
                let flag = false
                if (this[key].startTimestamp.getFullYear() === this[key].endTimestamp.getFullYear() && this[key].startTimestamp.getMonth() === this[key].endTimestamp.getMonth()) {
                    this[key].year = this[key].startTimestamp.getFullYear()
                    this[key].month = this[key].startTimestamp.getMonth()
                    flag = true
                    this.computeOptions()
                }
                if (!flag) {
                    const timestampKey = type === 'start' ? 'startTimestamp' : 'endTimestamp'
                    this[key].year = this[key][timestampKey].getFullYear()
                    this[key].month = this[key][timestampKey].getMonth()
                    if (this.type === 'daterange') {
                        this[key].month = this[key].month - (type === 'end' ? 1 : 0)
                    }
                }
            }
            if (this.type === 'datetimerange') {
                if (type === 'start' && this.datetimerangeData.startTimestamp) {
                    this.datetimerangeData.hour = this.datetimerangeData.startTimestamp.getHours()
                    this.datetimerangeData.minute = this.datetimerangeData.startTimestamp.getMinutes()
                    this.datetimerangeData.second = this.datetimerangeData.startTimestamp.getSeconds()
                }
                if (type === 'end' && this.datetimerangeData.endTimestamp) {
                    this.datetimerangeData.hour = this.datetimerangeData.endTimestamp.getHours()
                    this.datetimerangeData.minute = this.datetimerangeData.endTimestamp.getMinutes()
                    this.datetimerangeData.second = this.datetimerangeData.endTimestamp.getSeconds()
                }
            }
            this.computeOptions()
        },
        computeDateItemClassName: function (dateItem, panelType) {
            const key = `${this.type}Data`
            const classNames = []
            let month = this[key].month
            if (this.type === 'daterange') {
                month = month + (panelType === 'first' ? 0 : 1)
            }
            const date = new Date(this[key].year, month)
            if (this.type === 'monthrange') {
                classNames.push('same-month')
            } else {
                classNames.push(date.getFullYear() === dateItem.getFullYear() && date.getMonth() === dateItem.getMonth() ? 'same-month' : 'different-month')
            }
            if (
                this[key].startTimestamp &&
                this[key].endTimestamp &&
                dateItem.getTime() > this[key].startTimestamp.getTime() &&
                dateItem.getTime() < this[key].endTimestamp.getTime()
            ) {
                classNames.push('during')
            }
            const format = ['daterange', 'datetimerange'].includes(this.type) ? 'yyyy-MM-dd' : 'yyyy-MM'
            if (this[key].startTimestamp && formatDate(this[key].startTimestamp, format) === formatDate(dateItem, format)) {
                if (this.type === 'daterange') {
                    this[key].month + (panelType === 'first' ? 0 : 1) === dateItem.getMonth() && classNames.push('current')
                } else {
                    classNames.push('current')
                }
                classNames.push('start')
                classNames.push('during')
            }
            if (this[key].endTimestamp && formatDate(this[key].endTimestamp, format) === formatDate(dateItem, format)) {
                if (this.type === 'daterange') {
                    this[key].month + (panelType === 'first' ? 0 : 1) === dateItem.getMonth() && classNames.push('current')
                } else {
                    classNames.push('current')
                }
                classNames.push('end')
                classNames.push('during')
            }
            ;['daterange', 'datetimerange'].includes(this.type) && dateItem.getDay() === 1 && classNames.push('start')
            ;['daterange', 'datetimerange'].includes(this.type) && dateItem.getDay() === 0 && classNames.push('end')
            const today = new Date()
            if (dateItem.getFullYear() === today.getFullYear() && dateItem.getMonth() === today.getMonth() && dateItem.getDate() === today.getDate()) {
                classNames.push('today')
            }
            // if (this[key].operateKey === 'start' && this[key].endTimestamp && ['daterange', 'datetimerange'].includes(this.type)) {
            if (this[key].operateKey === 'start' && this[key].endTimestamp) {
                const date = new Date(this[key].endTimestamp)
                date.setHours(23)
                date.setMinutes(59)
                date.setSeconds(59)
                date.setMilliseconds(999)
                if (this[key].hoverTimestamp) {
                    if (dateItem.getTime() <= date.getTime() && dateItem.getTime() >= this[key].hoverTimestamp.getTime() && ['daterange', 'datetimerange'].includes(this.type)) {
                        classNames.push('hover-during')
                        if (dateItem.getDay() === 1) {
                            classNames.push('start-hover-during')
                        }
                        if (dateItem.getDate() === 1) {
                            classNames.push('start-hover-during')
                        }
                        if (formatDate(this[key].hoverTimestamp, format) === formatDate(dateItem, format)) {
                            classNames.push('start-hover-during')
                        }
                        if (dateItem.getDay() === 0) {
                            classNames.push('end-hover-during')
                        }
                        if (new Date(dateItem.getFullYear(), dateItem.getMonth() + 1, 0).getDate() === dateItem.getDate()) {
                            classNames.push('end-hover-during')
                        }
                        if (formatDate(this[key].start, format) === formatDate(dateItem, format)) {
                            classNames.push('start-hover-during')
                        }
                    }
                    if (dateItem.getTime() <= date.getTime() && dateItem.getTime() >= this[key].hoverTimestamp.getTime() && ['monthrange'].includes(this.type)) {
                        classNames.push('hover-during')
                        if ([0, 3, 6, 9].includes(dateItem.getMonth())) {
                            classNames.push('start-hover-during')
                        }
                        if ([2, 5, 8, 11].includes(dateItem.getMonth())) {
                            classNames.push('end-hover-during')
                        }
                        if (formatDate(this[key].endTimestamp, format) === formatDate(dateItem, format)) {
                            classNames.push('end-hover-during')
                        }
                        if (formatDate(this[key].hoverTimestamp, format) === formatDate(dateItem, format)) {
                            classNames.push('start-hover-during')
                        }
                    }
                }
                if (dateItem.getTime() > date.getTime() && this[key].operateTimes === 1) {
                    classNames.push('disabled')
                }
            }
            // if (this[key].operateKey === 'end' && this[key].startTimestamp && ['daterange', 'datetimerange'].includes(this.type)) {
            if (this[key].operateKey === 'end' && this[key].startTimestamp) {
                const date = new Date(this[key].startTimestamp)
                date.setHours(0)
                date.setMinutes(0)
                date.setSeconds(0)
                date.setMilliseconds(0)
                if (this[key].hoverTimestamp) {
                    if (dateItem.getTime() >= date.getTime() && dateItem.getTime() <= this[key].hoverTimestamp.getTime() && ['daterange', 'datetimerange'].includes(this.type)) {
                        classNames.push('hover-during')
                        if (dateItem.getDay() === 1) {
                            classNames.push('start-hover-during')
                        }
                        if (dateItem.getDate() === 1) {
                            classNames.push('start-hover-during')
                        }
                        if (formatDate(this[key].hoverTimestamp, format) === formatDate(dateItem, format)) {
                            classNames.push('end-hover-during')
                        }
                        if (dateItem.getDay() === 0) {
                            classNames.push('end-hover-during')
                        }
                        if (new Date(dateItem.getFullYear(), dateItem.getMonth() + 1, 0).getDate() === dateItem.getDate()) {
                            classNames.push('end-hover-during')
                        }
                        if (this[key].endTimestamp && formatDate(this[key].endTimestamp, format) === formatDate(dateItem, format)) {
                            classNames.push('end-hover-during')
                        }
                    }
                    if (dateItem.getTime() >= date.getTime() && dateItem.getTime() <= this[key].hoverTimestamp.getTime() && ['monthrange'].includes(this.type)) {
                        classNames.push('hover-during')
                        if ([0, 3, 6, 9].includes(dateItem.getMonth())) {
                            classNames.push('start-hover-during')
                        }
                        if ([2, 5, 8, 11].includes(dateItem.getMonth())) {
                            classNames.push('end-hover-during')
                        }
                        if (formatDate(this[key].endTimestamp, format) === formatDate(dateItem, format)) {
                            classNames.push('end-hover-during')
                        }
                        if (formatDate(this[key].hoverTimestamp, format) === formatDate(dateItem, format)) {
                            classNames.push('end-hover-during')
                        }
                    }
                }
                if (dateItem.getTime() < date.getTime() && this[key].operateTimes === 1) {
                    classNames.push('disabled')
                }
            }
            return classNames
        },
        computeOptions: function () {
            if (this.type === 'year') {
                const startYear = Math.floor(this.yearData.year / 10) * 10 - 1
                this.yearData.options = []
                for (let i = 0; i < 12; i++) {
                    this.yearData.options.push(startYear + i)
                }
            }
            if (this.type === 'month') {
                this.monthData.options = []
                for (let i = 0; i < 12; i++) {
                    this.monthData.options.push(i)
                }
            }
            // if (this.type === 'date') {
            if (['date', 'dates'].includes(this.type)) {
                const key = `${this.type}Data`
                this[key].options = []
                const startDate = new Date(this[key].year, this[key].month)
                let day = startDate.getDay()
                day !== 1 && startDate.setDate(startDate.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                const endDate = new Date(this[key].year, this[key].month + 1, 0)
                day = endDate.getDay()
                day !== 0 && endDate.setDate(endDate.getDate() + [0, 6, 5, 4, 3, 2, 1][day])
                while (startDate <= endDate) {
                    this[key].options.push(new Date(startDate))
                    startDate.setDate(startDate.getDate() + 1)
                }
            }
            if (this.type === 'week') {
                this.weekData.options = []
                const startDate = new Date(this.weekData.year, this.weekData.month)
                let day = startDate.getDay()
                day !== 1 && startDate.setDate(startDate.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                const endDate = new Date(this.weekData.year, this.weekData.month + 1, 0)
                day = endDate.getDay()
                day !== 0 && endDate.setDate(endDate.getDate() + [0, 6, 5, 4, 3, 2, 1][day])
                while (startDate <= endDate) {
                    this.weekData.options.push(new Date(startDate))
                    startDate.setDate(startDate.getDate() + 1)
                }
            }
            if (this.type === 'datetime') {
                this.datetimeData.options = []
                const startDate = new Date(this.datetimeData.year, this.datetimeData.month)
                let day = startDate.getDay()
                day !== 1 && startDate.setDate(startDate.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                const endDate = new Date(this.datetimeData.year, this.datetimeData.month + 1, 0)
                day = endDate.getDay()
                day !== 0 && endDate.setDate(endDate.getDate() + [0, 6, 5, 4, 3, 2, 1][day])
                while (startDate <= endDate) {
                    this.datetimeData.options.push(new Date(startDate))
                    startDate.setDate(startDate.getDate() + 1)
                }
            }
            if (['daterange'].includes(this.type)) {
                ;['firstPanelOptions', 'lastPanelOptions'].forEach((key, index) => {
                    this.daterangeData[key] = []
                    const startDate = new Date(this.daterangeData.year, this.daterangeData.month + index)
                    let day = startDate.getDay()
                    day !== 1 && startDate.setDate(startDate.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                    const endDate = new Date(this.daterangeData.year, this.daterangeData.month + 1 + index, 0)
                    day = endDate.getDay()
                    day !== 0 && endDate.setDate(endDate.getDate() + [0, 6, 5, 4, 3, 2, 1][day])
                    while (startDate <= endDate) {
                        this.daterangeData[key].push(new Date(startDate))
                        startDate.setDate(startDate.getDate() + 1)
                    }
                })
            }
            if (this.type === 'monthrange') {
                ;['firstPanelOptions', 'lastPanelOptions'].forEach((key, index) => {
                    this.monthrangeData[key] = []
                    for (let i = 0; i < 12; i++) {
                        this.monthrangeData[key].push(new Date(this.monthrangeData.year + index, i))
                    }
                })
            }
            if (this.type === 'datetimerange') {
                this.datetimerangeData.panelOptions = []
                const startDate = new Date(this.datetimerangeData.year, this.datetimerangeData.month)
                let day = startDate.getDay()
                day !== 1 && startDate.setDate(startDate.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                const endDate = new Date(this.datetimerangeData.year, this.datetimerangeData.month + 1, 0)
                day = endDate.getDay()
                day !== 0 && endDate.setDate(endDate.getDate() + [0, 6, 5, 4, 3, 2, 1][day])
                while (startDate <= endDate) {
                    this.datetimerangeData.panelOptions.push(new Date(startDate))
                    startDate.setDate(startDate.getDate() + 1)
                }
            }
        },
        inputValue: function (event) {
            this.input(event.target.value)
            this.$nextTick(() => this.change(event.target.value))
        },
        computeCurrentValue: function (firstTime = false) {
            let date = ['year', 'month', 'date', 'week', 'datetime'].includes(this.type) ? transformToDate(this.value) : ''
            if (this.type === 'year') {
                this.yearData.year = date.getFullYear()
                ![null, undefined, '', NaN].includes(this.value) && new Date(this.value).toString() !== 'Invalid Date' && (this.yearData.timestamp = date)
            }
            if (this.type === 'month') {
                this.monthData.year = date.getFullYear()
                this.monthData.month = date.getMonth()
                ![null, undefined, '', NaN].includes(this.value) && new Date(this.value).toString() !== 'Invalid Date' && (this.monthData.timestamp = date)
            }
            if (this.type === 'date') {
                this.dateData.year = date.getFullYear()
                this.dateData.month = date.getMonth()
                ![null, undefined, '', NaN].includes(this.value) && new Date(this.value).toString() !== 'Invalid Date' && (this.dateData.timestamp = date)
            }
            if (this.type === 'week') {
                this.weekData.year = date.getFullYear()
                this.weekData.month = date.getMonth()
                ![null, undefined, '', NaN].includes(this.value) && new Date(this.value).toString() !== 'Invalid Date' && (this.weekData.timestamp = date)
            }
            if (this.type === 'datetime') {
                this.datetimeData.year = date.getFullYear()
                this.datetimeData.month = date.getMonth()
                this.datetimeData.day = date.getDate()
                ![null, undefined, '', NaN].includes(this.value) && new Date(this.value).toString() !== 'Invalid Date' && (this.datetimeData.timestamp = date)
            }
            if (this.type === 'daterange') {
                try {
                    if (this.value instanceof Array && this.value.length === 2) {
                        this.daterangeData.startTimestamp = new Date(this.value[0])
                        this.daterangeData.endTimestamp = new Date(this.value[1])
                        this.daterangeData.year = this.daterangeData.startTimestamp.getFullYear()
                        this.daterangeData.month = this.daterangeData.startTimestamp.getMonth()
                    } else {
                        throw new Error()
                    }
                } catch (e) {
                    const now = new Date()
                    this.daterangeData.year = now.getFullYear()
                    this.daterangeData.month = now.getMonth()
                }
            }
            if (this.type === 'datetimerange') {
                try {
                    if (this.value instanceof Array && this.value.length === 2) {
                        this.datetimerangeData.startTimestamp = new Date(this.value[0])
                        this.datetimerangeData.endTimestamp = new Date(this.value[1])
                        this.datetimerangeData.year = this.datetimerangeData.startTimestamp.getFullYear()
                        this.datetimerangeData.month = this.datetimerangeData.startTimestamp.getMonth()
                    } else {
                        throw new Error()
                    }
                } catch (e) {
                    const now = new Date()
                    this.datetimerangeData.year = now.getFullYear()
                    this.datetimerangeData.month = now.getMonth()
                }
            }
            if (this.type === 'dates' && firstTime) {
                const tempArr = this.value instanceof Array ? this.value : [this.value]
                tempArr.filter(n => ![null, undefined, '', NaN].includes(n) && new Date(n).toString() !== 'Invalid Date')
                date = tempArr.length ? new Date(tempArr[0]) : new Date()
                this.datesData.year = date.getFullYear()
                this.datesData.month = date.getMonth()
            }
            if (this.type === 'monthrange') {
                try {
                    if (this.value instanceof Array && this.value.length === 2) {
                        this.monthrangeData.startTimestamp = new Date(this.value[0])
                        this.monthrangeData.endTimestamp = new Date(this.value[1])
                        this.monthrangeData.year = this.monthrangeData.startTimestamp.getFullYear()
                        this.monthrangeData.month = this.monthrangeData.startTimestamp.getMonth()
                    } else {
                        throw new Error()
                    }
                } catch (e) {
                    const now = new Date()
                    this.monthrangeData.year = now.getFullYear()
                    this.monthrangeData.month = now.getMonth()
                }
            }
        },
        prevPanel: function (type) {
            if (type === 'year') {
                if (this.type === 'year') {
                    this.yearData.year = this.yearData.year - 10
                }
                if (this.type === 'month') {
                    this.monthData.year = this.monthData.year - 1
                }
                if (this.type === 'date') {
                    this.dateData.year = this.dateData.year - 1
                }
                if (this.type === 'dates') {
                    this.datesData.year = this.datesData.year - 1
                }
                if (this.type === 'week') {
                    this.weekData.year = this.weekData.year - 1
                }
                if (this.type === 'datetime') {
                    this.datetimeData.year = this.datetimeData.year - 1
                }
                if (this.type === 'daterange') {
                    this.daterangeData.year = this.daterangeData.year - 1
                }
                if (this.type === 'monthrange') {
                    this.monthrangeData.year = this.monthrangeData.year - 1
                }
                if (this.type === 'datetimerange') {
                    this.datetimerangeData.year = this.datetimerangeData.year - 1
                }
            }
            if (type === 'month') {
                if (this.type === 'date') {
                    this.dateData.month = this.dateData.month - 1
                    if (this.dateData.month === -1) {
                        this.dateData.month = 11
                        this.dateData.year = this.dateData.year - 1
                    }
                }
                if (this.type === 'dates') {
                    this.datesData.month = this.datesData.month - 1
                    if (this.datesData.month === -1) {
                        this.datesData.month = 11
                        this.datesData.year = this.datesData.year - 1
                    }
                }
                if (this.type === 'week') {
                    this.weekData.month = this.weekData.month - 1
                    if (this.weekData.month === -1) {
                        this.weekData.month = 11
                        this.weekData.year = this.weekData.year - 1
                    }
                }
                if (this.type === 'datetime') {
                    this.datetimeData.month = this.datetimeData.month - 1
                    if (this.datetimeData.month === -1) {
                        this.datetimeData.month = 11
                        this.datetimeData.year = this.datetimeData.year - 1
                    }
                }
                if (this.type === 'daterange') {
                    this.daterangeData.month = this.daterangeData.month - 1
                    if (this.daterangeData.month === -1) {
                        this.daterangeData.month = 11
                        this.daterangeData.year = this.daterangeData.year - 1
                    }
                }
                if (this.type === 'datetimerange') {
                    this.datetimerangeData.month = this.datetimerangeData.month - 1
                    if (this.datetimerangeData.month === -1) {
                        this.datetimerangeData.month = 11
                        this.datetimerangeData.year = this.datetimerangeData.year - 1
                    }
                }
            }
            this.computeOptions()
        },
        nextPanel: function (type) {
            if (type === 'year') {
                if (this.type === 'year') {
                    this.yearData.year = this.yearData.year + 10
                }
                if (this.type === 'month') {
                    this.monthData.year = this.monthData.year + 1
                }
                if (this.type === 'date') {
                    this.dateData.year = this.dateData.year + 1
                }
                if (this.type === 'dates') {
                    this.datesData.year = this.datesData.year + 1
                }
                if (this.type === 'week') {
                    this.weekData.year = this.weekData.year + 1
                }
                if (this.type === 'datetime') {
                    this.datetimeData.year = this.datetimeData.year + 1
                }
                if (this.type === 'daterange') {
                    this.daterangeData.year = this.daterangeData.year + 1
                }
                if (this.type === 'monthrange') {
                    this.monthrangeData.year = this.monthrangeData.year + 1
                }
                if (this.type === 'datetimerange') {
                    this.datetimerangeData.year = this.datetimerangeData.year + 1
                }
            }
            if (type === 'month') {
                if (this.type === 'date') {
                    this.dateData.month = this.dateData.month + 1
                    if (this.dateData.month === 12) {
                        this.dateData.month = 0
                        this.dateData.year = this.dateData.year + 1
                    }
                }
                if (this.type === 'dates') {
                    this.datesData.month = this.datesData.month + 1
                    if (this.datesData.month === 12) {
                        this.datesData.month = 0
                        this.datesData.year = this.datesData.year + 1
                    }
                }
                if (this.type === 'week') {
                    this.weekData.month = this.weekData.month + 1
                    if (this.weekData.month === 12) {
                        this.weekData.month = 0
                        this.weekData.year = this.weekData.year + 1
                    }
                }
                if (this.type === 'datetime') {
                    this.datetimeData.month = this.datetimeData.month + 1
                    if (this.datetimeData.month === 12) {
                        this.datetimeData.month = 0
                        this.datetimeData.year = this.datetimeData.year + 1
                    }
                }
                if (this.type === 'daterange') {
                    this.daterangeData.month = this.daterangeData.month + 1
                    if (this.daterangeData.month === 12) {
                        this.daterangeData.month = 0
                        this.daterangeData.year = this.daterangeData.year + 1
                    }
                }
                if (this.type === 'datetimerange') {
                    this.datetimerangeData.month = this.datetimerangeData.month + 1
                    if (this.datetimerangeData.month === 12) {
                        this.datetimerangeData.month = 0
                        this.datetimerangeData.year = this.datetimerangeData.year + 1
                    }
                }
            }
            this.computeOptions()
        },
        changeValue: function (value) {
            if (this.type === 'year') {
                this.yearData.timestamp = new Date(value, 0)
                this.input(this.yearData.timestamp)
                this.$nextTick(() => this.change(this.yearData.timestamp))
                this.yearData.year = value
                this.computeOptions()
                this.visible = false
            }
            if (this.type === 'month') {
                this.monthData.timestamp = new Date(this.monthData.year, value)
                this.input(this.monthData.timestamp)
                this.$nextTick(() => this.change(this.monthData.timestamp))
                this.visible = false
            }
            if (this.type === 'date') {
                this.dateData.timestamp = value
                this.input(this.dateData.timestamp)
                this.$nextTick(() => this.change(this.dateData.timestamp))
                if (value.getMonth() !== this.dateData.month) {
                    this.dateData.month = value.getMonth()
                    this.dateData.year = value.getFullYear()
                    this.computeOptions()
                }
                this.visible = false
            }
            if (this.type === 'dates') {
                this.datesData.timestamp = value
                const tempArr = (this.value instanceof Array ? this.value : [this.value])
                    .filter(n => new Date(n).toString() !== 'Invalid Date' && ![null, undefined, '', NaN].includes(n))
                    .map(n => formatDate(n, 'yyyy-MM-dd'))
                const index = tempArr.indexOf(formatDate(value, 'yyyy-MM-dd'))
                index < 0 ? tempArr.push(value) : tempArr.splice(index, 1)
                const result = tempArr.map(n => new Date(n))
                this.input(result)
                this.$nextTick(() => this.change(result))
                if (value.getMonth() !== this.datesData.month) {
                    this.datesData.month = value.getMonth()
                    this.datesData.year = value.getFullYear()
                    this.computeOptions()
                }
            }
            if (this.type === 'week') {
                const date = new Date(value)
                const day = date.getDay()
                date.setDate(date.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                this.weekData.timestamp = date
                this.input(date)
                this.$nextTick(() => this.change(date))
                if (value.getMonth() !== this.weekData.month) {
                    this.weekData.month = value.getMonth()
                    this.weekData.year = value.getFullYear()
                    this.computeOptions()
                }
                this.visible = false
            }
            if (this.type === 'datetime') {
                const date = new Date(
                    this.datetimeData.year,
                    this.datetimeData.month,
                    this.datetimeData.day,
                    this.datetimeData.hour,
                    this.datetimeData.minute,
                    this.datetimeData.second
                )
                this.input(date)
                this.$nextTick(() => this.change(date))
                if (date.getMonth() !== this.datetimeData.month) {
                    this.datetimeData.month = date.getMonth()
                    this.datetimeData.year = date.getFullYear()
                    this.computeOptions()
                }
                this.visible = false
            }
            if (this.type === 'datetimerange') {
                this.datetimerangeData.operateTimes = (this.datetimerangeData.operateTimes + 1) % 2
                if (this.datetimerangeData.operateKey === 'end') {
                    if (!this.datetimerangeData.endTimestamp) {
                        const now = new Date()
                        now.setHours(this.datetimerangeData.hour)
                        now.setMinutes(this.datetimerangeData.minute)
                        now.setSeconds(this.datetimerangeData.second)
                        this.datetimerangeData.endTimestamp = now
                    }
                    if (this.datetimerangeData.startTimestamp && this.datetimerangeData.endTimestamp.getTime() < this.datetimerangeData.startTimestamp.getTime()) {
                        return (this.visible = false)
                    }
                    this.datetimerangeData.endTimestamp.setHours(this.datetimerangeData.hour)
                    this.datetimerangeData.endTimestamp.setMinutes(this.datetimerangeData.minute)
                    this.datetimerangeData.endTimestamp.setSeconds(this.datetimerangeData.second)
                    if (this.datetimerangeData.startTimestamp) {
                        this.datetimerangeData.hour = this.datetimerangeData.startTimestamp.getHours()
                        this.datetimerangeData.minute = this.datetimerangeData.startTimestamp.getMinutes()
                        this.datetimerangeData.second = this.datetimerangeData.startTimestamp.getSeconds()
                        this.datetimerangeData.year = this.datetimerangeData.startTimestamp.getFullYear()
                        this.datetimerangeData.month = this.datetimerangeData.startTimestamp.getMonth()
                    } else {
                        this.datetimerangeData.hour = this.datetimerangeData.minute = this.datetimerangeData.second = 0
                    }
                    if (this.datetimerangeData.operateTimes === 0) {
                        this.visible = false
                        this.datetimerangeData.hoverTimestamp = null
                        // this.datetimerangeData.startTimestamp &&
                        //     this.datetimerangeData.endTimestamp &&
                        //     this.$emit('input', [this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp])
                        // this.$nextTick(() => this.$emit('change', [this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp]))
                        this.datetimerangeData.startTimestamp &&
                            this.datetimerangeData.endTimestamp &&
                            this.input([this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp])
                        this.$nextTick(() => this.change([this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp]))
                        this.$refs.dateTimePicker.focus()
                    }
                    this.datetimerangeData.operateKey = 'start'
                    this.computedActiveDotStyle()
                } else if (this.datetimerangeData.operateKey === 'start') {
                    if (!this.datetimerangeData.startTimestamp) {
                        const now = new Date()
                        now.setHours(this.datetimerangeData.hour)
                        now.setMinutes(this.datetimerangeData.minute)
                        now.setSeconds(this.datetimerangeData.second)
                        this.datetimerangeData.startTimestamp = now
                    }
                    if (this.datetimerangeData.endTimestamp && this.datetimerangeData.endTimestamp.getTime() < this.datetimerangeData.startTimestamp.getTime()) {
                        return (this.visible = false)
                    }
                    this.datetimerangeData.startTimestamp.setHours(this.datetimerangeData.hour)
                    this.datetimerangeData.startTimestamp.setMinutes(this.datetimerangeData.minute)
                    this.datetimerangeData.startTimestamp.setSeconds(this.datetimerangeData.second)
                    if (this.datetimerangeData.endTimestamp) {
                        this.datetimerangeData.hour = this.datetimerangeData.endTimestamp.getHours()
                        this.datetimerangeData.minute = this.datetimerangeData.endTimestamp.getMinutes()
                        this.datetimerangeData.second = this.datetimerangeData.endTimestamp.getSeconds()
                        this.datetimerangeData.year = this.datetimerangeData.endTimestamp.getFullYear()
                        this.datetimerangeData.month = this.datetimerangeData.endTimestamp.getMonth()
                    } else {
                        this.datetimerangeData.hour = this.datetimerangeData.minute = this.datetimerangeData.second = 0
                    }
                    if (this.datetimerangeData.operateTimes === 0) {
                        this.visible = false
                        this.datetimerangeData.hoverTimestamp = null
                        // this.datetimerangeData.startTimestamp &&
                        //     this.datetimerangeData.endTimestamp &&
                        //     this.$emit('input', [this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp])
                        // this.$nextTick(() => this.$emit('change', [this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp]))
                        this.datetimerangeData.startTimestamp &&
                            this.datetimerangeData.endTimestamp &&
                            this.input([this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp])
                        this.$nextTick(() => this.change([this.datetimerangeData.startTimestamp, this.datetimerangeData.endTimestamp]))
                        this.$refs.dateTimePicker.focus()
                    }
                    this.datetimerangeData.operateKey = 'end'
                    this.computedActiveDotStyle()
                }
                this.computeOptions()
            }
            this.$nextTick(this.computeInputShowValue)
        },
        input: function (val) {
            if (this.valueFormat) {
                val = val instanceof Array ? val.map(n => formatDate(n, this.valueFormat)) : formatDate(val, this.valueFormat)
            }
            this.$emit('input', val)
        },
        change: function (val) {
            if (this.valueFormat) {
                val = val instanceof Array ? val.map(n => formatDate(n, this.valueFormat)) : formatDate(val, this.valueFormat)
            }
            this.$emit('change', val)
        },
        computeWeekItemClassName: function (dateItem) {
            const classNames = []
            const date = new Date(dateItem)
            let day = date.getDay()
            date.setDate(date.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
            const currentDate = new Date(this.value)
            day = currentDate.getDay()
            currentDate.setDate(currentDate.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
            if (date.getFullYear() === currentDate.getFullYear() && date.getMonth() === currentDate.getMonth() && date.getDate() === currentDate.getDate()) {
                classNames.push('current')
            }
            if (this.weekData.hoverTimestamp) {
                const startDate = new Date(this.weekData.hoverTimestamp)
                day = startDate.getDay()
                day !== 1 && startDate.setDate(startDate.getDate() - [6, 0, 1, 2, 3, 4, 5][day])
                const endDate = new Date(this.weekData.hoverTimestamp)
                day = endDate.getDay()
                day !== 0 && endDate.setDate(endDate.getDate() + [0, 6, 5, 4, 3, 2, 1][day])
                startDate.setHours(0)
                startDate.setMinutes(0)
                startDate.setSeconds(0)
                startDate.setMilliseconds(0)
                endDate.setHours(23)
                endDate.setMinutes(59)
                endDate.setSeconds(59)
                endDate.setMilliseconds(999)
                if (dateItem.getTime() >= startDate.getTime() && dateItem.getTime() <= endDate.getTime()) {
                    classNames.push('hover')
                }
            }
            classNames.push(this.weekData.year === dateItem.getFullYear() && this.weekData.month === dateItem.getMonth() ? 'same-month' : 'different-month')
            return classNames
        }
    },
    watch: {
        value: function (newVal) {
            if (['year', 'month', 'date', 'week', 'datetime'].includes(this.type) && !newVal) {
                this[`${this.type}Data`].timestamp = null
            }
            if (['datetime'].includes(this.type) && !newVal) {
                this.datetimeData.hour = this.datetimeData.minute = this.datetimeData.second = 0
                // this[`${this.type}Data`].hour = this[`${this.type}Data`].minute = this[`${this.type}Data`].second = 0
            }
            // if (['daterange', 'datetimerange', 'monthrange'].includes(this.type) && newVal.length === 2) {
            if (['daterange', 'datetimerange', 'monthrange'].includes(this.type)) {
                if (newVal[0] && newVal[1]) {
                    this[`${this.type}Data`].startTimestamp = transformToDate(newVal[0])
                    this[`${this.type}Data`].endTimestamp = transformToDate(newVal[1])
                } else {
                    this[`${this.type}Data`].startTimestamp = this[`${this.type}Data`].endTimestamp = null
                    this[`${this.type}Data`].hour = this[`${this.type}Data`].minute = this[`${this.type}Data`].second = 0
                }
            }
            this.$nextTick(this.computeInputShowValue)
        },
        visible: function (newVal) {
            this.$emit(newVal ? 'focus' : 'blur')
            if (['daterange', 'datetimerange', 'monthrange'].includes(this.type) && !newVal && this.value.length !== 2) {
                this[`${this.type}Data`].startTimestamp = this[`${this.type}Data`].endTimestamp = null
                this.type === 'datetimerange' && (this.datetimerangeData.hour = this.datetimerangeData.minute = this.datetimerangeData.second = 0)
            }
            // datetime 需要点确认按钮，没有点确认按钮的时候，panel 展示的时间需要还原到原来
            if (newVal && ['datetime'].includes(this.type) && ![null, undefined, NaN, ''].includes(this.value)) {
                this.datetimeData.timestamp = transformToDate(this.value)
                this.datetimeData.hour = Number(formatDate(this.datetimeData.timestamp, 'HH'))
                this.datetimeData.minute = Number(formatDate(this.datetimeData.timestamp, 'mm'))
                this.datetimeData.second = Number(formatDate(this.datetimeData.timestamp, 'ss'))
            }
            // datetimerange 需要点确认按钮，没有点确认按钮的时候，panel 展示的时间需要还原到原来
            if (['datetimerange'].includes(this.type) && this.value.length === 2) {
                this.datetimerangeData.startTimestamp = transformToDate(this.value[0])
                this.datetimerangeData.endTimestamp = transformToDate(this.value[1])
            }
            if (newVal && this.popperAppendToBody) {
                const maxZIndex = Math.max(...[...document.body.children].map(dom => Number(window.getComputedStyle(dom).zIndex) || 0))
                this.$refs.panel.style.zIndex = (maxZIndex || 0) + 1
            }
            this.computeCurrentValue(false)
            this.computeInputShowValue()
            this.computeOptions()
            this.computePanelStyle()
            this.$emit('visible-change', newVal)
        }
    },
    mounted: function () {
        this.computeCurrentValue(true)
        this.computeInputShowValue()
        this.computeOptions()
        this.$nextTick(this.computePanelStyle)
        if (this.popperAppendToBody && ![...document.body.children].includes(this.$refs.panel)) {
            const maxZIndex = Math.max(...[...document.body.children].map(dom => Number(window.getComputedStyle(dom).zIndex) || 0))
            this.$refs.panel.style.zIndex = (maxZIndex || 0) + 1
            document.body.appendChild(this.$refs.panel)
        }
        const parentNodeStyle = window.getComputedStyle(this.$el.parentNode)
        ;['overflow', 'overflow-x', 'overflow-y'].map(attribute => parentNodeStyle[attribute]).some(n => ['scroll', 'auto'].includes(n)) &&
            this.$el.parentNode.addEventListener('scroll', this.computePanelStyle)
    },
    beforeDestroy: function () {
        this.popperAppendToBody && [...document.body.children].includes(this.$refs.panel) && document.body.removeChild(this.$refs.panel)
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
        this.popperAppendToBody && [...document.body.children].includes(this.$refs.panel) && document.body.removeChild(this.$refs.panel)
        this.$el.parentNode && this.$el.parentNode.removeEventListener('scroll', this.computePanelStyle)
    }
}
</script>
<style lang="scss" scoped></style>
