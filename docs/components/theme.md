---
title: 主题色
---

# Breadcrumb

选择颜色可切换色值，点击"应用到换肤"可更换基础色值

### 使用方法

<div class="m-demo-row">
 <div class="theme-demo">
        <el-button type="primary" @click="applyVars">应用到换肤</el-button>
        <div class="color-var-box">
            <div class="color-var-item" v-for="key in Object.keys(colorMap)" :key="key">
                <div class="var-name">{{ key }}：{{ colorMap[key] }}</div>
                <color-picker v-model="colorMap[key]"></color-picker>
            </div>
        </div>
    </div>
</div>

::: details 示例代码

```html
<div class="theme-demo">
    <el-button type="primary" @click="applyVars">应用到换肤</el-button>
    <div class="color-var-box">
        <div class="color-var-item" v-for="key in Object.keys(colorMap)" :key="key">
            <div class="var-name">{{ key }}：{{ colorMap[key] }}</div>
            <color-picker v-model="colorMap[key]"></color-picker>
        </div>
    </div>
</div>
<script>
    import { ColorPicker } from 'element-ui'
    import { setMultiColorVar } from '/src/utils/cssVarUtil'

    export default {
        name: 'themeDemo',
        components: { ColorPicker },
        data() {
            return {
                colorMap: {
                    primary: '#0184ff',
                    'primary-2': '#91c3ff',
                    'primary-3': '#e6f2ff',
                    warning: '#FAAD14',
                    'warning-2': '#ffe58f',
                    'warning-3': '#fffbe6',
                    success: '#52c41a',
                    'success-2': '#b7eb8f',
                    'success-3': '#f6ffed',
                    error: '#f5222d',
                    'error-2': '#ffa39e',
                    'error-3': '#fff2f1',
                    black: '#000',
                    border: '#e7e7eb',
                    'border-2': '#d5d6e3',
                    dark: '#000c17',
                    'dark-2': '#001529',
                    'dark-3': '#00284d ',
                    white: '#ffffff',
                    shadow: '#d9d9d9',
                    disabled: '#f6f7fc',
                    'left-side-bg': '#001529',
                    'app-name-text': '#ffffff',
                    'menu-bg': '#001529',
                    'menu-active': '#0184ff',
                    'menu-hover': '#001529',
                    'menu-text': '#ffffff',
                    'menu-text-active': '#ffffff',
                    'top-bar': '#ffffff',
                    'tooltip-dark': '#303133',
                    'tooltip-dark-text-color': '#ffffff',
                    'nav-bg': '#001529',
                    'nav-bg-dropped': '#000C17',
                    'nav-text': '#3B4155',
                    'nav-hover-bg': '#3B4155',
                    'nav-selected-bg': '#4263FE',
                    'nav-selected-icon': '#405FFE',
                    font: '#3B4155',
                    background: '#F4F5F8',
                    'table-header-color': '#F4F5F8',
                    'table-tr-hover-color': '#3B4155',
                    'table-tr-selected-color': '#4263FE',
                    'table-tr-border-color': '#DCDFE8',
                    'table-scroll-color': '#E8E8E8',
                    'tag-default-border-color': '#DCDFE8',
                    'tag-default-background-color': '#F4F5F8',
                    'tag-default-color': '#3B4155',
                    'tag-default-icon-close-color': '#000000',
                    'tag-default-icon-close-hover-color': '#4263FE',
                    'tag-white-background-color': '#ffffff',
                    'tag-grey-background-color': '#F4F5F8',
                    'tag-blue-border-color': '#A7B7FE',
                    'tag-blue-background-color': '#ECEFFE',
                    'tag-blue-color': '#405FFE',
                    'tag-green-border-color': '#A4E5D1',
                    'tag-green-background-color': '#E8F8F3',
                    'tag-green-color': '#1BBE8C',
                    'tag-orange-border-color': '#FFD5A0',
                    'tag-orange-background-color': '#FFF5EA',
                    'tag-orange-color': '#FFA433',
                    'tag-red-border-color': '#F9B5BD',
                    'tag-red-background-color': '#FDECEE',
                    'tag-red-color': '#F0465A',
                    'tooltip-background-color': '#F4F5F8',
                    'tooltip-shadow-color': '#000000',
                    'click-scroll-color': '#3B4155',
                    mask: '#000000',
                    'radio-hover-inner': '#ECEFFE',
                    'radio-hover-border': '#667FFE',
                    'radio-hover-inner-unchecked': '#E8EAF0',
                    'primary-focus': '#3955E4',
                    'button-disabled-content': '#F4F5F8',
                    'tabs-border': '#E0E0E0',
                    'tree-background-color': '#FA3239',
                    'tree-hover': '#FED0D2',
                    'tree-focus': '#EDD6E4',
                    'date-current': '#E6F2FF',
                    'default-scroll-color': '#3B4155'
                }
            }
        },
        methods: {
            applyVars() {
                setMultiColorVar(this.colorMap)
            }
        }
    }
</script>
```

:::

<div>
    <contributor :maintainer="['zdl']" :members="['agua','zdl','gbb','zxl']"></contributor>
</div>

<script>
import { ColorPicker } from 'element-ui'
import { setMultiColorVar } from '/src/utils/cssVarUtil'

export default {
    name: 'themeDemo',
    components: { ColorPicker },
    data() {
        return {
            colorMap: {
                primary: '#0184ff',
                'primary-2': '#91c3ff',
                'primary-3': '#e6f2ff',
                warning: '#FAAD14',
                'warning-2': '#ffe58f',
                'warning-3': '#fffbe6',
                success: '#52c41a',
                'success-2': '#b7eb8f',
                'success-3': '#f6ffed',
                error: '#f5222d',
                'error-2': '#ffa39e',
                'error-3': '#fff2f1',
                black: '#000',
                border: '#e7e7eb',
                'border-2': '#d5d6e3',
                dark: '#000c17',
                'dark-2': '#001529',
                'dark-3': '#00284d ',
                white: '#ffffff',
                shadow: '#d9d9d9',
                disabled: '#f6f7fc',
                'left-side-bg': '#001529',
                'app-name-text': '#ffffff',
                'menu-bg': '#001529',
                'menu-active': '#0184ff',
                'menu-hover': '#001529',
                'menu-text': '#ffffff',
                'menu-text-active': '#ffffff',
                'top-bar': '#ffffff',
                'tooltip-dark': '#303133',
                'tooltip-dark-text-color': '#ffffff',
                'nav-bg': '#001529',
                'nav-bg-dropped': '#000C17',
                'nav-text': '#3B4155',
                'nav-hover-bg': '#3B4155',
                'nav-selected-bg': '#4263FE',
                'nav-selected-icon': '#405FFE',
                font: '#3B4155',
                background: '#F4F5F8',
                'table-header-color': '#F4F5F8',
                'table-tr-hover-color': '#3B4155',
                'table-tr-selected-color': '#4263FE',
                'table-tr-border-color': '#DCDFE8',
                'table-scroll-color': '#E8E8E8',
                'tag-default-border-color': '#DCDFE8',
                'tag-default-background-color': '#F4F5F8',
                'tag-default-color': '#3B4155',
                'tag-default-icon-close-color': '#000000',
                'tag-default-icon-close-hover-color': '#4263FE',
                'tag-white-background-color': '#ffffff',
                'tag-grey-background-color': '#F4F5F8',
                'tag-blue-border-color': '#A7B7FE',
                'tag-blue-background-color': '#ECEFFE',
                'tag-blue-color': '#405FFE',
                'tag-green-border-color': '#A4E5D1',
                'tag-green-background-color': '#E8F8F3',
                'tag-green-color': '#1BBE8C',
                'tag-orange-border-color': '#FFD5A0',
                'tag-orange-background-color': '#FFF5EA',
                'tag-orange-color': '#FFA433',
                'tag-red-border-color': '#F9B5BD',
                'tag-red-background-color': '#FDECEE',
                'tag-red-color': '#F0465A',
                'tooltip-background-color': '#F4F5F8',
                'tooltip-shadow-color': '#000000',
                'click-scroll-color': '#3B4155',
                mask: '#000000',
                'radio-hover-inner': '#ECEFFE',
                'radio-hover-border': '#667FFE',
                'radio-hover-inner-unchecked': '#E8EAF0',
                'primary-focus': '#3955E4',
                'button-disabled-content': '#F4F5F8',
                'tabs-border': '#E0E0E0',
                'tree-background-color': '#FA3239',
                'tree-hover': '#FED0D2',
                'tree-focus': '#EDD6E4',
                'date-current': '#E6F2FF',
                'default-scroll-color': '#3B4155'
            }
        }
    },
    methods: {
        applyVars() {
            setMultiColorVar(this.colorMap)
        }
    }
}
</script>

<style scoped lang="scss">
.color-var-box {
    display: grid;
    margin-top: 24px;
    grid-template-columns: 1fr 1fr 1fr;

    .color-var-item {
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        > div {
            padding: 0 24px;
        }
    }
}
</style>
