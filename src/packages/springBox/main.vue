<template>
    <div
        :class="['zrx-spring-box', extraClass]"
        tabindex="-1"
        :style="`--startHeight: ${startHeight}px; --realHeight: ${realHeight}px;`"
        @keydown.13.capture.stop
        @keyup.13="$emit('onEnter')"
        ref="container"
    >
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'zrxSpringBox',
    props: {
        value: {
            type: Boolean,
            default: true
        },
        startHeight: {
            type: Number,
            default: 0
        }
    },
    watch: {
        value: {
            handler(newv) {
                this.onToggle(newv)
            },
            immediate: true
        }
    },
    data() {
        return {
            extraClass: '',
            realHeight: 0
        }
    },
    methods: {
        onToggle(v) {
            if (v) {
                this.$emit('onToggle', v)
                this.extraClass = 'auto-height'
                this.$nextTick(() => {
                    const height = this.$refs.container.offsetHeight
                    this.extraClass = 'heighted'
                    setTimeout(() => {
                        this.realHeight = height
                        this.extraClass = 'trans-start heighted'
                    }, 0)
                })
            } else {
                this.realHeight = this.startHeight
                this.extraClass = 'trans-start heighted'
            }
        },
        reset() {
            const extraClass = this.extraClass
            this.extraClass = 'auto-height'
            this.$nextTick(() => {
                const height = this.$refs.container.offsetHeight
                if (height == this.realHeight) {
                    return (this.extraClass = extraClass)
                }
                if (this.value) {
                    this.extraClass = 'heighted'
                    setTimeout(() => {
                        this.realHeight = height
                        this.extraClass = 'trans-start heighted'
                    }, 0)
                }
            })
        }
    },
    created() {
        if (!this.value) {
            this.realHeight = this.startHeight
            this.extraClass = 'heighted'
        } else {
            this.extraClass = 'auto-height'
        }
    }
}
</script>
