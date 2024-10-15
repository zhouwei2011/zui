---
title: Status 状态标签
---

# Status 状态标签

显示状态用以区分

### 使用方法

<div class="m-example">向type属性传入类型即可</div>

### 状态集合

<div class="zrx-status-demo">
    <div class="m-demo-row">
        <div class="vertical-bar">
            <zrx-status type="error">错误</zrx-status>
            <zrx-status type="success">成功</zrx-status>
            <zrx-status type="primary">进行中</zrx-status>
            <zrx-status type="warning">警告</zrx-status>
            <zrx-status type="disabled">未开始</zrx-status>
        </div>
    </div>
</div>

::: details 示例代码

```html
<zrx-status type="error">错误</zrx-status>
<zrx-status type="success">成功</zrx-status>
<zrx-status type="primary">进行中</zrx-status>
<zrx-status type="warning">警告</zrx-status>
<zrx-status type="disabled">未开始</zrx-status>
```

:::

### Attributes

<table>
    <thead>
        <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>type</td>
            <td>状态</td>
            <td>string</td>
            <td>error/success/primary/warning/disabled</td>
            <td>--</td>
        </tr>
    </tbody>
</table>

<div>
    <contributor :maintainer="['zdl']" :members="['gbb', 'cmd', 'agua']"></contributor>
</div>
