import Vue from 'vue'
import App from './App.vue'
import ZrxAdminUI from './index'
import { Menu, Breadcrumb, BreadcrumbItem, Submenu, MenuItem, ColorPicker } from 'element-ui'

// 全局的css变量
import './style/common/reset.scss'
import './style/common/var.scss'
import './style/common/component.scss'
import './style/breadcrumb.scss'
import './style/menu.scss'

Vue.use(ZrxAdminUI)
Vue.use(Menu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(ColorPicker)

new Vue({
    render: h => h(App)
}).$mount('#app')
