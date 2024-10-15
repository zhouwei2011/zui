---
title: Button 按钮
---

# Button 按钮

常用的操作按钮

### 主要按钮

<div class="m-example">
    <el-button type="primary">主要按钮</el-button>
    <el-button type="primary" icon="svg-icon zrx-icon-download">下载</el-button>
    <el-button type="primary" icon="svg-icon zrx-icon-magnifier">搜索用户</el-button>
    <el-button type="primary" round icon="svg-icon zrx-icon-magnifier"></el-button>
    <el-button type="primary" circle icon="svg-icon zrx-icon-magnifier"></el-button>
    <el-button type="primary"><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
</div>

::: details 示例代码

```html
<el-button type="primary">主要按钮</el-button>
<el-button type="primary" icon="svg-icon zrx-icon-download">下载</el-button>
<el-button type="primary" icon="svg-icon zrx-icon-magnifier">搜索用户</el-button>
<el-button type="primary" round icon="svg-icon zrx-icon-magnifier"></el-button>
<el-button type="primary" circle icon="svg-icon zrx-icon-magnifier"></el-button>
<el-button type="primary"><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
```

:::

### 次要按钮

<div class="m-example">
    <el-button>次要按钮</el-button>
    <el-button icon="svg-icon zrx-icon-download">下载</el-button>
    <el-button icon="svg-icon zrx-icon-add">添加</el-button>
    <el-button round icon="svg-icon zrx-icon-magnifier"></el-button>
    <el-button circle icon="svg-icon zrx-icon-magnifier"></el-button>
    <el-button><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
</div>

::: details 示例代码

```html
<el-button>次要按钮</el-button>
<el-button icon="svg-icon zrx-icon-download">下载</el-button>
<el-button icon="svg-icon zrx-icon-add">添加</el-button>
<el-button round icon="svg-icon zrx-icon-magnifier"></el-button>
<el-button circle icon="svg-icon zrx-icon-magnifier"></el-button>
<el-button><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
```

:::

### 危险按钮

<div class="m-example">
    <el-button type="danger">危险按钮</el-button>
    <el-button type="danger" icon="svg-icon zrx-icon-download">下载</el-button>
    <el-button type="danger" icon="svg-icon zrx-icon-magnifier">搜索用户</el-button>
    <el-button type="danger" round icon="svg-icon zrx-icon-magnifier"></el-button>
    <el-button type="danger" circle icon="svg-icon zrx-icon-magnifier"></el-button>
    <el-button type="danger"><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
</div>

::: details 示例代码

```html
<el-button type="danger">危险按钮</el-button>
<el-button type="danger" icon="svg-icon zrx-icon-download">下载</el-button>
<el-button type="danger" icon="svg-icon zrx-icon-magnifier">搜索用户</el-button>
<el-button type="danger" round icon="svg-icon zrx-icon-magnifier"></el-button>
<el-button type="danger" circle icon="svg-icon zrx-icon-magnifier"></el-button>
<el-button type="danger"><i class="svg-icon zrx-icon-down-angle"></i><span>内嵌</span></el-button>
```

:::

### 幽灵按钮

<div class="m-example">
    <el-button type="ghost">幽灵按钮</el-button>
    <el-button type="ghost" icon="svg-icon zrx-icon-download">下载</el-button>
</div>

::: details 示例代码

```html
<el-button type="ghost">幽灵按钮</el-button>
<el-button type="ghost" icon="svg-icon zrx-icon-download">下载</el-button>
```

:::

### 文字按钮

<div class="m-example">
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" icon="svg-icon zrx-icon-download">下载</el-button>
</div>

::: details 示例代码

```html
<el-button type="text">文字按钮</el-button>
<el-button type="text" icon="svg-icon zrx-icon-download">下载</el-button>
```

:::

### 失效按钮

<div class="m-example">
    <el-button type="primary" disabled>主要按钮</el-button>
    <el-button type="primary" icon="svg-icon zrx-icon-download" disabled>下载</el-button>
    <el-button disabled>次要按钮</el-button>
    <el-button disabled icon="svg-icon zrx-icon-download">下载</el-button>
    <el-button disabled type="ghost">幽灵按钮</el-button>
    <el-button disabled type="ghost" icon="svg-icon zrx-icon-download">下载</el-button>
    <el-button disabled type="text">文字按钮</el-button>
    <el-button disabled type="text" icon="svg-icon zrx-icon-download">下载</el-button>
    <el-button disabled round icon="svg-icon zrx-icon-magnifier"></el-button>
    <el-button disabled circle icon="svg-icon zrx-icon-magnifier"></el-button>
</div>

::: details 示例代码

```html
<el-button type="primary" disabled>主要按钮</el-button>
<el-button type="primary" icon="svg-icon zrx-icon-download" disabled>下载</el-button>
<el-button disabled>次要按钮</el-button>
<el-button disabled icon="svg-icon zrx-icon-download">下载</el-button>
<el-button disabled type="ghost">幽灵按钮</el-button>
<el-button disabled type="ghost" icon="svg-icon zrx-icon-download">下载</el-button>
<el-button disabled type="text">文字按钮</el-button>
<el-button disabled type="text" icon="svg-icon zrx-icon-download">下载</el-button>
<el-button disabled round icon="svg-icon zrx-icon-magnifier"></el-button>
<el-button disabled circle icon="svg-icon zrx-icon-magnifier"></el-button>
```

:::

### 操作按钮

<div class="m-example">
    <el-dropdown>
        <el-button type="primary">下载<i class="svg-icon zrx-icon-down-angle"></i></el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>PDF</el-dropdown-item>
            <el-dropdown-item>CSV</el-dropdown-item>
            <el-dropdown-item>Excel</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown>
        <el-button>下载<i class="svg-icon zrx-icon-down-angle"></i></el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>PDF</el-dropdown-item>
            <el-dropdown-item>CSV</el-dropdown-item>
            <el-dropdown-item>Excel</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</div>

::: details 示例代码

```html
<el-dropdown>
    <el-button type="primary">下载<i class="svg-icon zrx-icon-down-angle"></i></el-button>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>PDF</el-dropdown-item>
        <el-dropdown-item>CSV</el-dropdown-item>
        <el-dropdown-item>Excel</el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>
<el-dropdown>
    <el-button>下载<i class="svg-icon zrx-icon-down-angle"></i></el-button>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>PDF</el-dropdown-item>
        <el-dropdown-item>CSV</el-dropdown-item>
        <el-dropdown-item>Excel</el-dropdown-item>
    </el-dropdown-menu>
</el-dropdown>
```

:::

### 链接

[https://element.eleme.io/#/zh-CN/component/button](https://element.eleme.io/#/zh-CN/component/button)

### 样式变量

| 变量名                 |            默认值 |                说明 |
| ---------------------- | ----------------: | ------------------: |
| --btn-padding          |             0 8px |                     |
| --btn-size-normal      |              32px |                     |
| --btn-size-small       |              24px |                     |
| --btn-border-color     |          --border |                     |
| --btn-primary-bg       |         --primary |                     |
| --btn-primary-bg-hover |       --primary-2 |                     |
| --btn-primary-bg-focus | --primary \* 0.85 | 0.85 透明度的主题色 |
| --btn-default-bg       |           --white |                     |
| --btn-default-bg-hover |           #ebebeb |                     |
| --btn-default-bg-focus |           #e5e5e5 |                     |
| --btn-ghost-bg-focus   |           --white |                     |
| --btn-border-color     |          --border |                     |
| --btn-border-color     |          --border |                     |

### Attributes

| 参数          | 说明           | 类型    | 可选值                                             | 默认值 |
| ------------- | -------------- | ------- | -------------------------------------------------- | ------ |
| `size`        | 尺寸           | string  | medium / small / mini                              | —      |
| `type`        | 类型           | string  | primary / success / warning / danger / info / text | —      |
| `plain`       | 是否朴素按钮   | boolean | —                                                  | false  |
| `round`       | 是否圆角按钮   | boolean | —                                                  | false  |
| `circle`      | 是否圆形按钮   | boolean | —                                                  | false  |
| `loading`     | 是否加载中状态 | boolean | —                                                  | false  |
| `disabled`    | 是否禁用状态   | boolean | —                                                  | false  |
| `icon`        | 图标类名       | string  | —                                                  | —      |
| `autofocus`   | 是否默认聚焦   | boolean | —                                                  | false  |
| `native-type` | 原生`type`属性 | string  | button / submit / reset                            | button |

<div>
    <contributor :maintainer="['zw']" :members="['zw', 'gbb', 'zxl', 'agua', 'cmd', 'rp']"></contributor>
</div>
