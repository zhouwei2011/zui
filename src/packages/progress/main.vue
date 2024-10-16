<template>
    <div class="zrx-progress-wrap" :style="bgStyle" v-show="visible">
        <div class="zrx-progress" :style="style"></div>
    </div>
</template>
<script>
const defaultOption = {
    duration: 15,
    color: '#405FFE',
    position: 'absolute',
    failedColor: '#F0465A',
    thickness: '3px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    granularity: 10, // 每秒执行的次数 值越大时间越精确
    location: 'top',
    penetrate: false,
    marginEdage: '0',
    inverse: false,
    autoFinish: true,
    background: 'transparent'
}
export default {
    name: 'zrxProgress',
    props: {
        location: String,
        penetrate: {
            type: Boolean,
            default: false
        },
        option: {
            type: Object,
            default() {
                return {}
            }
        },
        show: Boolean
    },
    watch: {
        show(newv) {
            if (newv) {
                this.visible = newv
                this.$nextTick(() => {
                    this.start()
                })
            } else {
                this.finish().then(() => {
                    this.visible = newv
                })
            }
        },
        option: {
            handler(newv) {
                this.options = JSON.parse(JSON.stringify(Object.assign({}, defaultOption, newv)))
            },
            deep: true,
            immediate: true
        }
    },
    data() {
        return {
            state: {
                canSuccess: true,
                tFailColor: '',
                tColor: '',
                timer: null,
                cut: 0
            },
            percent: 0,
            options: {},
            visible: false
        }
    },
    methods: {
        setStep(duration) {
            const expectation = 100 / (duration * this.options.granularity)
            const a = Math.ceil(expectation / 0.5)
            return (a * (a + 1)) / (2 * (a - expectation))
        },
        start(duration) {
            duration = duration === undefined ? this.options.duration : duration
            this.options.duration = duration
            this.percent == 100 && (this.percent = 0)
            this.visible = true
            this.state.canSuccess = true
            const interval = (1 / this.options.granularity) * 1000
            this.state.cut = this.setStep(duration)
            clearInterval(this.state.timer)
            this.state.timer = setInterval(() => {
                this.increase(this.state.cut * Math.random())
                if (this.percent > 95 && this.options.autoFinish) {
                    this.finish()
                }
            }, interval)
        },
        setOption(option) {
            Object.assign(this.options, option)
        },
        set(num) {
            this.visible = true
            this.state.canSuccess = true
            this.percent = Math.floor(num)
        },
        get() {
            return Math.floor(this.percent)
        },
        increase(num) {
            this.percent = Math.min(99, this.percent + Math.floor(num))
        },
        decrease(num) {
            this.percent = this.percent - Math.floor(num)
        },
        hide() {
            clearInterval(this.state.timer)
            this.state.timer = null
            return new Promise(resolve => {
                setTimeout(() => {
                    this.visible = false
                    if (this.options.autoRevert) {
                        setTimeout(() => {
                            this.percent = 0
                        }, 100)
                        if (this.options.autoRevert) {
                            setTimeout(() => {
                                this.revert()
                                resolve()
                            }, 300)
                        }
                    } else {
                        setTimeout(() => {
                            this.percent = 0
                            resolve()
                        }, 100)
                    }
                }, this.options.transition.termination)
            })
        },
        pause() {
            clearInterval(this.state.timer)
        },
        finish() {
            this.percent = 100
            return this.hide()
        },
        fail() {
            this.state.canSuccess = false
            this.percent = 100
            return this.hide()
        },
        setFailColor(color) {
            this.options.failedColor = color
        },
        setColor(color) {
            this.options.color = color
        },
        setBackground(bg) {
            this.options.background = bg
        },
        setLocation(loc) {
            this.options.location = loc
        },
        setPenetrate(pen = true) {
            this.options.penetrate = pen
        },
        setTransition(transition) {
            this.options.transition = transition
        },
        tempFailColor(color) {
            this.state.tFailColor = this.options.failedColor
            this.options.failedColor = color
        },
        tempColor(color) {
            this.state.tColor = this.options.color
            this.options.color = color
        },
        tempLocation(loc) {
            this.state.tLocation = this.options.location
            this.options.location = loc
        },
        tempTransition(transition) {
            this.state.tTransition = this.options.transition
            this.options.transition = transition
        },
        revertColor() {
            this.options.color = this.state.tColor
            this.state.tColor = ''
        },
        revertFailColor() {
            this.options.failedColor = this.state.tFailColor
            this.state.tFailColor = ''
        },
        revertLocation() {
            this.options.location = this.state.tLocation
            this.state.tLocation = ''
        },
        revertTransition() {
            this.options.transition = this.state.tTransition
            this.state.tTransition = {}
        },
        revert() {
            if (this.options.autoRevert) {
                if (this.state.tColor) {
                    this.revertColor()
                }
                if (this.state.tFailColor) {
                    this.revertFailColor()
                }
                if (this.state.tLocation) {
                    this.revertLocation()
                }
                if (this.state.tTransition && (this.state.tTransition.speed !== undefined || this.state.tTransition.opacity !== undefined)) {
                    this.revertTransition()
                }
            }
        }
    },
    created() {
        if (this.show !== undefined) {
            this.visible = this.show
        }
    },
    computed: {
        style() {
            const options = this.options
            const location = this.location || options.location
            const style = {
                'background-color': this.state.canSuccess ? options.color : options.failedColor,
                opacity: this.visible ? 1 : 0,
                position: options.position,
                'border-radius': (options.thickness.replace(/px/i, '') - 0) / 2 + 'px'
            }
            if (location == 'top' || location == 'bottom') {
                if (location == 'top') {
                    style.top = '0px'
                } else {
                    style.bottom = '0px'
                }
                if (!options.inverse) {
                    style.left = '0px'
                } else {
                    style.right = '0px'
                }
                style.width = this.percent + '%'
                style.height = options.thickness
                style[`margin-${location}`] = options.marginEdage
                style.transition = (this.visible ? 'width ' + options.transition.speed + ', ' : '') + 'opacity ' + options.transition.opacity
            } else if (location == 'left' || location == 'right') {
                if (location == 'left') {
                    style.left = '0px'
                } else {
                    style.right = '0px'
                }
                if (!options.inverse) {
                    style.top = '0px'
                } else {
                    style.bottom = '0px'
                }
                style.height = this.percent + '%'
                style.width = options.thickness
                style[`margin-${location}`] = options.marginEdage
                style.transition = (this.visible ? 'height ' + options.transition.speed + ', ' : '') + 'opacity ' + options.transition.opacity
            }
            return style
        },
        bgStyle() {
            let style = `background-color: ${this.options.background}`
            this.penetrate || (this.options.penetrate && (style += 'pointer-events: none;'))
            return style
        }
    }
}
</script>
