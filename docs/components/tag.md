---
title: Tag 标签
---

# Tag 标签

用于标记和选择

### 基础用法

<div class="m-demo-row">
    <div class="flex-bar">
        <el-tag class="large white">white</el-tag>
        <el-tag class="large grey">grey</el-tag>
        <el-tag class="large blue">blue</el-tag>
        <el-tag class="large green">green</el-tag>
        <el-tag class="large orange">orange</el-tag>
        <el-tag class="large red">red</el-tag>
    </div>
</div>

::: details 示例代码

```html
<el-tag class="large white">white</el-tag>
<el-tag class="large grey">grey</el-tag>
<el-tag class="large blue">blue</el-tag>
<el-tag class="large green">green</el-tag>
<el-tag class="large orange">orange</el-tag>
<el-tag class="large red">red</el-tag>
```

:::

### 可移除

<div class="m-demo-row">
    <div class="flex-bar">
        <el-tag class="is-closable white" closable>mySql</el-tag>
        <el-tag class="is-closable grey" closable>oracle</el-tag>
        <el-tag class="is-closable blue" closable>mongoDB</el-tag>
        <el-tag class="is-closable green" closable>kafka</el-tag>
        <el-tag class="is-closable orange" closable>rabbitMq</el-tag>
        <el-tag class="is-closable red" closable>sqlSever</el-tag>
    </div>
</div>

::: details 示例代码

```html
<el-tag class="is-closable white" closable>mySql</el-tag>
<el-tag class="is-closable grey" closable>oracle</el-tag>
<el-tag class="is-closable blue" closable>mongoDB</el-tag>
<el-tag class="is-closable green" closable>kafka</el-tag>
<el-tag class="is-closable orange" closable>rabbitMq</el-tag>
<el-tag class="is-closable red" closable>sqlSever</el-tag>
```

:::

### 不同尺寸

<div class="m-demo-row">
    <div class="flex-bar">
        <el-tag class="small grey">small tag</el-tag>
        <el-tag class="middle grey">middle tag</el-tag>
        <el-tag class="large grey">large tag</el-tag>
    </div>
</div>

::: details 示例代码

```html
<el-tag class="small grey">small tag</el-tag>
<el-tag class="middle grey">middle tag</el-tag>
<el-tag class="large grey">large tag</el-tag>
```

:::

### Attributes

| 参数                  | 说明             | 类型    | 可选值                           | 默认值 |
| --------------------- | ---------------- | ------- | -------------------------------- | ------ |
| `className`           | 对应原`type`属性 | string  | white/grey/blue/green/orange/red | —      |
| `closable`            | 是否可关闭       | boolean | —                                | false  |
| `disable-transitions` | 是否禁用渐变动画 | boolean | —                                | false  |
| `className`           | 对应原`size`属性 | string  | small / large                    | —      |

### Events

| 事件名称 | 说明            | 回调参数 |
| -------- | --------------- | -------- |
| `click`  | 点击 Tag 的回调 | —        |
| `close`  | 关闭 Tag 的回调 | —        |

<div>
    <contributor :maintainer="['zdl']" :members="['zdl', 'zxl', 'gbb', 'agua', 'cmd']"></contributor>
</div>
