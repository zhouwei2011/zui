<script>
function renderContent(h) {
    const tag = this.tag
    const children = this.$slots.default?.length ? <p class="s-text">{this.$slots.default}</p> : <span class="s-text">{this.showText}</span>
    return (
        <tag class={'zrx-password ' + (this.visible ? 'visible' : 'hidden')} ref="container">
            {children}
            <span class="placeholder">{this.plaintext}</span>
            <i
                class={'btn svg-icon ' + (this.visible ? 'zrx-icon-eye' : 'zrx-icon-closed-eye')}
                title={this.visible ? '切换密文' : '切换明文'}
                v-show={!this.vmExclusives.includes(this.plaintext)}
                onClick={this.onClick}
            ></i>
        </tag>
    )
}
import { convertNumberByString } from '../../utils/common'
export default {
    name: 'zrxPassword',
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: {
            type: String,
            default: '--'
        },
        charLength: [String, Number],
        exclusive: [String, Number]
    },
    watch: {
        value: {
            handler(newv) {
                this.plaintext = newv
            },
            immediate: true
        }
    },
    data() {
        return {
            visible: true,
            plaintext: '',
            mObserver: null,
            entity: null
        }
    },
    methods: {
        init() {
            this.entity = this.$refs.container.querySelector('[password]')
            if (this.$slots.default?.length && this.entity?.firstChild) {
                this.plaintext = this.entity.firstChild.nodeValue ?? ''
                if (this.vmExclusives.includes(this.plaintext)) {
                    return (this.entity.firstChild.nodeValue = this.placeholder)
                }
                if (!this.visible && this.entity.firstChild) {
                    this.entity.firstChild.nodeValue = this.ciphertext
                }
            }
        },
        onClick() {
            this.visible = !this.visible
            if (this.$slots.default?.length && this.entity?.firstChild) {
                if (this.visible) {
                    this.entity.firstChild.nodeValue = this.plaintext
                } else {
                    this.entity.firstChild.nodeValue = this.ciphertext
                }
            }
        }
    },
    mounted() {
        this.init()
    },
    computed: {
        ciphertext() {
            if (typeof this.plaintext == 'number') {
                this.plaintext += ''
            }
            let l = (convertNumberByString(this.charLength) ?? this.plaintext.length) || this.plaintext.length
            return ''.padStart(Math.floor(l), '*')
        },
        showText() {
            if (this.vmExclusives.includes(this.plaintext)) {
                return this.placeholder
            }
            return this.visible ? this.plaintext : this.ciphertext
        },
        vmExclusives() {
            return ['', NaN, undefined, null].concat(this.exclusive)
        }
    },
    render(h) {
        return renderContent.call(this, h)
    }
}
</script>
