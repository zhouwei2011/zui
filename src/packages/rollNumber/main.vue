<script>
import { simplifyNumber, retainDigits, getDigits, convertNumberByString, convertPositiveIntegerByString } from '../../utils/common'

function renderContent(h) {
    const tag = this.tag
    const children = this.$scopedSlots.unit
        ? this.$scopedSlots.unit({
              unit: this.unit
          })
        : null
    return (
        <tag class="zrx-roll-number">
            {this.showText}
            {children}
            {this.$slots.default}
        </tag>
    )
}
export default {
    name: 'zrxRollNumber',
    props: {
        // 保留几位小数
        retainDecimals: {
            type: [String, Number],
            default: 0
        },
        // 传入的数字
        value: {
            required: true
        },
        // 数字变化持续时间
        duration: {
            type: [Number],
            default: 500,
            validator(val) {
                return val >= 200
            }
        },
        // 是否每三位添加分隔符
        breakSign: {
            type: Boolean,
            default: false
        },
        // 自动添加单位
        addUnit: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: 'p'
        },
        initedValue: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: [String, Number],
            default: '--'
        },
        alwaysDecimal: {
            type: Boolean,
            default: true
        },
        interval: {
            type: [String, Number],
            default: 20
        }
    },
    data() {
        return {
            showText: '',
            timer: null,
            startNumber: 0,
            unit: ''
        }
    },
    watch: {
        vmValue(newVal, oldVal) {
            this.startNumber = oldVal
            this.roll()
        }
    },
    created() {
        this.initedValue && (this.startNumber = this.vmValue)
    },
    mounted() {
        this.roll()
    },
    methods: {
        roll() {
            this.timer && clearInterval(this.timer)
            this.startNumber === this.placeholder && (this.startNumber = 0)
            if (this.vmValue == this.startNumber || this.vmValue === this.placeholder) return (this.showText = this.vmValue)
            const step = retainDigits((this.vmValue - this.startNumber) / (this.duration / this.vmInterval), 2)
            let current = this.startNumber
            this.timer = setInterval(() => {
                if (current == this.vmValue) {
                    clearInterval(this.timer)
                    this.$emit('onFinish')
                    return (this.timer = null)
                }
                if ((current + step - this.vmValue) * (current - this.vmValue) < 0) {
                    current = this.vmValue
                } else if (current != this.vmValue) {
                    current += step
                }
                this.showNumber(current)
            }, this.vmInterval)
        },
        showNumber(number) {
            if (this.breakSign) {
                if (this.vmRetainDecimals) {
                    const total = retainDigits(number, this.vmRetainDecimals)
                    this.showText = (Math.floor(total) + '').replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') + ((total + '').match(/\.\d+$/) ?? [''])[0]
                } else {
                    this.showText = (Math.round(number) + '').replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
                }
            } else if (this.addUnit) {
                let showText = 0
                if (this.vmRetainDecimals) {
                    if (getDigits(number) < 5 && !this.alwaysDecimal) {
                        showText = Math.round(number)
                    } else {
                        showText = retainDigits(number, this.vmRetainDecimals)
                    }
                } else {
                    showText = Math.round(number)
                }
                const { value, unit, changed } = simplifyNumber(showText, this.vmRetainDecimals)
                this.unit = unit
                this.showText = this.unitSlot ? value : value + unit
            } else {
                this.showText = this.vmRetainDecimals ? retainDigits(number, this.vmRetainDecimals) : Math.round(number)
            }
        }
    },
    beforeDestroy() {
        this.timer && clearInterval(this.timer)
    },
    computed: {
        vmValue() {
            if (['string', 'number'].includes(typeof this.value)) {
                if (typeof this.value == 'string') {
                    if (/^\d+$/.test(this.value)) {
                        return this.value - 0
                    }
                    return this.placeholder
                }
                return this.value
            } else {
                return this.placeholder
            }
        },
        vmRetainDecimals() {
            return convertPositiveIntegerByString(this.retainDecimals)
        },
        unitSlot() {
            return !!(this.$slots.unit || this.$scopedSlots.unit)
        },
        vmInterval() {
            return Math.max(20, Math.min(convertNumberByString(this.interval), 100))
        }
    },
    render(h) {
        return renderContent.call(this, h)
    }
}
</script>
