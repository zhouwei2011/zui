// src/mixins/fackClickOutSide.js
// 模拟点击事件，来隐藏下拉选项，如果有必要，可以利用防抖进行改善；
let lock = true
let el = null
const MousedownEvent = new Event('mousedown', { bubbles: true })
const MouseupEvent = new Event('mouseup', { bubbles: true })
const fakeClickOutSide = () => {
    document.dispatchEvent(MousedownEvent)
    document.dispatchEvent(MouseupEvent)
    setTimeout(() => {
        lock = false
    }, 300)
    lock = true
}
const mousedownHandle = e => {
    let classList = e.target.classList
    if (classList.contains('el-select__caret') || classList.contains('el-input__inner')) {
        lock = false
        return
    }
    if (lock) return
    fakeClickOutSide()
}
const mousewheelHandle = e => {
    if (lock || e.target.classList.contains('el-select-dropdown__item') || e.target.parentNode.classList.contains('el-select-dropdown__item')) return

    fakeClickOutSide()
}
const eventListener = type => {
    lock = false
    el[type + 'EventListener']('mousedown', mousedownHandle)
    window[type + 'EventListener']('mousewheel', mousewheelHandle)
    window[type + 'EventListener']('DOMMouseScroll', mousewheelHandle) // fireFox 3.5+
}
export default {
    mounted() {
        el = this.$root.$el
        el.addFakeClickOutSideEventCount = el.addFakeClickOutSideEventCount || 0
        !el.addFakeClickOutSideEventCount &&
            this.$nextTick(() => {
                eventListener('add')
            })
        el.addFakeClickOutSideEventCount += 1
    },
    destroyed() {
        eventListener('remove')
        el.addFakeClickOutSideEventCount -= 1
    }
}
