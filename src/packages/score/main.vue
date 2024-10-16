<template>
    <div class="zrx-score" @mouseleave="onMouseleave" :disabled="disabled">
        <span v-for="(n, i) in showData" :class="n.class" :key="i" @mousemove="onMousemove($event, i)" @click="onSelect($event, i)">
            <i class="icon background" :style="n.clip && `--percent:${n.clip}`"></i>
            <i class="icon border"></i>
        </span>
        <span class="text" v-if="showScore || showText">{{ tip }}</span>
    </div>
</template>

<script>
const trulyW = 17.02
const gap = 12 - trulyW / 2
export default {
    name: 'zrxScore',
    props: {
        max: {
            type: Number,
            default: 5,
            validator(v) {
                return v % 1 == 0 && v >= 1 && v <= 10
            }
        },
        value: {
            type: Number,
            default: 0
        },
        allowHalf: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        showText: {
            type: Boolean,
            default: false
        },
        showScore: {
            type: Boolean,
            default: false
        },
        texts: {
            type: Array,
            default() {
                return ['极差', '失望', '一般', '满意', '惊喜']
            }
        }
    },
    watch: {
        value: {
            handler(newv) {
                if (this.manually) {
                    return (this.manually = false)
                }
                if (newv > this.max || newv < 0) return false
                this.vmValue = newv
                this.setShowData(newv)
                this.setTip(newv)
            },
            deep: true,
            immediate: true
        },
        max(newv) {
            if (newv < 1) return false
            const v = Math.min(this.vmValue, newv)
            this.setShowData(v)
            this.setTip(v)
        }
    },
    data() {
        return {
            vmValue: 0,
            manually: false,
            showData: [],
            tip: ''
        }
    },
    methods: {
        getValue(x, i) {
            if (this.allowHalf) {
                return (x > 12 ? 1 : x >= gap ? 0.5 : 0) + i
            }
            return (x >= gap) - 0 + i
        },
        onMousemove(evt, i) {
            if (this.disabled) return false
            this.setShowData(this.getValue(evt.offsetX, i))
        },
        onSelect(evt, i) {
            if (this.disabled) return false
            this.vmValue = this.getValue(evt.offsetX, i)
            this.setTip(this.vmValue)
            this.setShowData(this.vmValue)
            this.$emit('input', this.vmValue)
            this.$emit('change', this.vmValue)
            this.manually = true
        },
        onMouseleave() {
            if (this.disabled) return false
            this.setShowData(this.vmValue)
        },
        setTip(v) {
            if (this.showScore) {
                this.tip = v
            } else if (this.showText) {
                if (v >= 0 && v <= this.max) {
                    this.tip = this.texts[Math.max(0, Math.ceil(v) - 1)] ?? ''
                } else {
                    this.tip = ''
                }
            }
        },
        setShowData(value) {
            if (value < 0 || value > this.max) return (this.showData = [])
            this.showData = this.values.map((v, i) => {
                const className = v > Math.ceil(value) ? 'empty' : v > value ? 'half-fill' : 'fill'
                const clip = (() => {
                    if (['empty', 'fill'].includes(className)) return
                    const p = Math.max(0, Math.min(value - i, 1))
                    return Math.round(((trulyW * p + gap) / 24) * 100) + '%'
                })()
                return {
                    class: className,
                    clip
                }
            })
        }
    },
    computed: {
        values() {
            return Array.from({ length: this.max }, (v, i) => i + 1)
        }
    }
}
</script>
