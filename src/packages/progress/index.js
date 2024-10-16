import Progress from './main'

Progress.install = function (Vue, option = {}) {
    const Mask = Vue.extend(Progress)
    Vue.component(Progress.name, Progress)
    Vue.directive('progress', {
        bind(el, binding) {
            if (!el.zrxProgress) {
                const mask = new Mask({
                    el: document.createElement('div'),
                    propsData: {
                        // 组件里对这里的数据的监听不会生效
                        option
                    },
                    data() {
                        return {}
                    }
                })
                el.zrxProgress = mask
                const parent = 'body' in binding.modifiers ? document.body : el
                parent.append(mask.$el)
            }
            const background = el.getAttribute('zrx-progress-background')
            background && el.zrxProgress.setBackground(background)
            for (const key in binding.modifiers) {
                if (['right', 'bottom', 'left'].includes(key)) {
                    el.zrxProgress.setLocation(key)
                }
                key == 'penetrate' && el.zrxProgress.setPenetrate()
            }
            el.zrxProgress.visible = !!binding.value
        },
        update(el, binding) {
            if (binding.oldValue !== binding.value) {
                Vue.nextTick(() => {
                    if (binding.value) {
                        el.zrxProgress.visible = true
                        Vue.nextTick(() => el.zrxProgress.start(binding.arg))
                    } else {
                        el.zrxProgress.finish().then(() => (el.zrxProgress.visible = false))
                    }
                })
            }
        },
        unbind(el, binding) {
            if (el.zrxProgress) {
                el.zrxProgress.$destroy()
                Reflect.deleteProperty(el, 'zrxProgress')
            }
        }
    })
}
export default Progress
