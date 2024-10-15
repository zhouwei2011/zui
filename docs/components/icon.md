---
title: Icon 图标
---

# Icon 图标

库内的图标集合

### 使用方法

<div class="m-example">
使用对应的图标类名即可
</div>

### 图标合集

点击图标快速复制

<ul class="icon-list">
    <li v-for="(item, index) in this.icons" :key="index"  @click="onCopy">
        <div class="box-top">
            <i :class="item.iconName"></i>
        </div>
        <div class="box-bottom">
            <span>{{ item.iconName }}</span>
        </div>
    </li>
    <li @click="onCopy">
        <div class="box-top">
            <i class="icon zrx-icon-draw-hook">
                <i></i>
                <i></i>
            </i>
        </div>
        <div class="box-bottom">
            <span>icon zrx-icon-draw-hook</span>
        </div>
    </li>
</ul>

::: details 示例代码

```html
<ul class="icon-list">
    <li v-for="(item, index) in this.icons" :key="index">
        <div class="box-top">
            <i :class="item.iconName"></i>
        </div>
        <div class="box-bottom">
            <span>{{item.iconName}}</span>
        </div>
    </li>
    <li @click="onCopy">
        <div class="box-top">
            <i class="icon zrx-icon-draw-hook">
                <i></i>
                <i></i>
            </i>
        </div>
        <div class="box-bottom">
            <span>icon zrx-icon-draw-hook</span>
        </div>
    </li>
</ul>
<script>
export default {
    data() {
        return {
            icons: [
                { iconName: 'svg-icon zrx-icon-copy' },
                { iconName: 'svg-icon zrx-icon-show-eye' },
                { iconName: 'svg-icon zrx-icon-hide-eye' },
                { iconName: 'svg-icon zrx-icon-closed-eye' },
                { iconName: 'svg-icon zrx-icon-eye' },
                { iconName: 'svg-icon zrx-icon-inverse' },
                { iconName: 'svg-icon zrx-icon-orthogona' },
                { iconName: 'svg-icon zrx-icon-export' },
                { iconName: 'svg-icon zrx-icon-import' },
                { iconName: 'svg-icon zrx-icon-draw-left' },
                { iconName: 'svg-icon zrx-icon-draw-right' },
                { iconName: 'svg-icon zrx-icon-close' },
                { iconName: 'svg-icon zrx-icon-close-large' },
                { iconName: 'svg-icon zrx-icon-close-round' },
                { iconName: 'svg-icon zrx-icon-done' },
                { iconName: 'svg-icon zrx-icon-windows-min' },
                { iconName: 'svg-icon zrx-icon-add' },
                { iconName: 'svg-icon zrx-icon-right-angle' },
                { iconName: 'svg-icon zrx-icon-right-angle-large' },
                { iconName: 'svg-icon zrx-icon-left-angle' },
                { iconName: 'svg-icon zrx-icon-left-angle-large' },
                { iconName: 'svg-icon zrx-icon-down-angle' },
                { iconName: 'svg-icon zrx-icon-down-angle-large' },
                { iconName: 'svg-icon zrx-icon-up-angle' },
                { iconName: 'svg-icon zrx-icon-up-angle-large' },
                { iconName: 'svg-icon zrx-icon-double-angle-right' },
                { iconName: 'svg-icon zrx-icon-double-angle-left' },
                { iconName: 'svg-icon zrx-icon-double-angle-down' },
                { iconName: 'svg-icon zrx-icon-double-angle-up' },
                { iconName: 'svg-icon zrx-icon-double-angle-line-right' },
                { iconName: 'svg-icon zrx-icon-calendar' },
                { iconName: 'svg-icon zrx-icon-clock' },
                { iconName: 'svg-icon zrx-icon-delete' },
                { iconName: 'svg-icon zrx-icon-details' },
                { iconName: 'svg-icon zrx-icon-user' },
                { iconName: 'svg-icon zrx-icon-magnifier' },
                { iconName: 'svg-icon zrx-icon-show-more' },
                { iconName: 'svg-icon zrx-icon-filter-table' },
                { iconName: 'svg-icon zrx-icon-upload' },
                { iconName: 'svg-icon zrx-icon-download' },
                { iconName: 'svg-icon zrx-icon-hyphen' },
                { iconName: 'svg-icon zrx-icon-paper-clip' },
                { iconName: 'svg-icon zrx-icon-error' },
                { iconName: 'svg-icon zrx-icon-info' },
                { iconName: 'svg-icon zrx-icon-success' },
                { iconName: 'svg-icon zrx-icon-question' },
                { iconName: 'svg-icon zrx-icon-error-large' },
                { iconName: 'svg-icon zrx-icon-info-large' },
                { iconName: 'svg-icon zrx-icon-success-large' },
                { iconName: 'svg-icon zrx-icon-question-large' },
                { iconName: 'svg-icon zrx-icon-warning' },
                { iconName: 'svg-icon zrx-icon-file-normal' },
                { iconName: 'svg-icon zrx-icon-file-warning' },
                { iconName: 'svg-icon zrx-icon-empty-default' },
                { iconName: 'svg-icon zrx-icon-upload-file' },
                { iconName: 'svg-icon zrx-icon-upload-image' }
            ]
        }
    }
}
</script>
```

:::

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'agua', 'gbb', 'wt']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            icons: [
                { iconName: 'svg-icon zrx-icon-copy' },
                { iconName: 'svg-icon zrx-icon-show-eye' },
                { iconName: 'svg-icon zrx-icon-hide-eye' },
                { iconName: 'svg-icon zrx-icon-closed-eye' },
                { iconName: 'svg-icon zrx-icon-eye' },
                { iconName: 'svg-icon zrx-icon-inverse' },
                { iconName: 'svg-icon zrx-icon-orthogona' },
                { iconName: 'svg-icon zrx-icon-export' },
                { iconName: 'svg-icon zrx-icon-import' },
                { iconName: 'svg-icon zrx-icon-draw-left' },
                { iconName: 'svg-icon zrx-icon-draw-right' },
                { iconName: 'svg-icon zrx-icon-close' },
                { iconName: 'svg-icon zrx-icon-close-large' },
                { iconName: 'svg-icon zrx-icon-close-round' },
                { iconName: 'svg-icon zrx-icon-done' },
                { iconName: 'svg-icon zrx-icon-windows-min' },
                { iconName: 'svg-icon zrx-icon-add' },
                { iconName: 'svg-icon zrx-icon-right-angle' },
                { iconName: 'svg-icon zrx-icon-right-angle-large' },
                { iconName: 'svg-icon zrx-icon-left-angle' },
                { iconName: 'svg-icon zrx-icon-left-angle-large' },
                { iconName: 'svg-icon zrx-icon-down-angle' },
                { iconName: 'svg-icon zrx-icon-down-angle-large' },
                { iconName: 'svg-icon zrx-icon-up-angle' },
                { iconName: 'svg-icon zrx-icon-up-angle-large' },
                { iconName: 'svg-icon zrx-icon-double-angle-right' },
                { iconName: 'svg-icon zrx-icon-double-angle-left' },
                { iconName: 'svg-icon zrx-icon-double-angle-down' },
                { iconName: 'svg-icon zrx-icon-double-angle-up' },
                { iconName: 'svg-icon zrx-icon-double-angle-line-right' },
                { iconName: 'svg-icon zrx-icon-calendar' },
                { iconName: 'svg-icon zrx-icon-clock' },
                { iconName: 'svg-icon zrx-icon-delete' },
                { iconName: 'svg-icon zrx-icon-details' },
                { iconName: 'svg-icon zrx-icon-user' },
                { iconName: 'svg-icon zrx-icon-magnifier' },
                { iconName: 'svg-icon zrx-icon-show-more' },
                { iconName: 'svg-icon zrx-icon-filter-table' },
                { iconName: 'svg-icon zrx-icon-upload' },
                { iconName: 'svg-icon zrx-icon-download' },
                { iconName: 'svg-icon zrx-icon-hyphen' },
                { iconName: 'svg-icon zrx-icon-paper-clip' },
                { iconName: 'svg-icon zrx-icon-error' },
                { iconName: 'svg-icon zrx-icon-info' },
                { iconName: 'svg-icon zrx-icon-success' },
                { iconName: 'svg-icon zrx-icon-question' },
                { iconName: 'svg-icon zrx-icon-error-large' },
                { iconName: 'svg-icon zrx-icon-info-large' },
                { iconName: 'svg-icon zrx-icon-success-large' },
                { iconName: 'svg-icon zrx-icon-question-large' },
                { iconName: 'svg-icon zrx-icon-warning' },
                { iconName: 'svg-icon zrx-icon-file-normal' },
                { iconName: 'svg-icon zrx-icon-file-warning' },
                { iconName: 'svg-icon zrx-icon-empty-default' },
                { iconName: 'svg-icon zrx-icon-upload-file' },
                { iconName: 'svg-icon zrx-icon-upload-image' }
            ]
        }
    },
    methods: {
        copyToClipboard(text) {
            if (!text) return Promise.reject()
            try {
                if (navigator.clipboard) {
                    return navigator.clipboard.writeText(text)
                } else {
                    const textarea = document.createElement('textarea')
                    document.body.appendChild(textarea)
                    textarea.value = text
                    textarea.select()
                    document.execCommand('copy', true)
                    document.body.removeChild(textarea)
                    return Promise.resolve()
                }
            } catch (e) {
                return Promise.reject()
            }
        },
        onCopy(evt) {
            const topInner = evt?.currentTarget?.querySelector('.box-top')?.firstElementChild.childElementCount
            let tag = ''
            if (topInner) {
                tag = `<i class="${evt?.currentTarget?.querySelector('.box-bottom')?.firstElementChild?.innerHTML}"><i></i><i></i></i>`
            } else {
                tag = `<i class="${evt?.currentTarget?.querySelector('.box-bottom')?.firstElementChild?.innerHTML}"></i>`
            }
            this.copyToClipboard(tag).then(() => this.$message.success('复制到剪切板'))
        }
    }
}
</script>

<style lang="scss" scoped>
.icon-list > li:hover {
    cursor: pointer;
    background-color: rgba(244, 245, 248, 1);
    transition: background-color 0.3s;
}
</style>
