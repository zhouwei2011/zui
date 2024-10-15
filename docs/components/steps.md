---
title: Steps 步骤条
---

# Steps 步骤条

引导用户按照流程完成任务的分步导航条

### 样式一

<div class="m-block">
    <zrx-steps :active="2">
        <zrx-step status="finish" title="开始" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="success" title="审批1" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="process" title="审批2" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="wait" title="结束" description="This is a very very long discribtion"></zrx-step>
    </zrx-steps>
</div>

::: details 示例代码

```html
<zrx-steps :active="2">
    <zrx-step status="finish" title="开始" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="success" title="审批1" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="process" title="审批2" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="wait" title="结束" description="This is a very very long discribtion"></zrx-step>
</zrx-steps>
```

:::

### 样式二

<div class="m-block">
    <zrx-steps :active="2">
        <zrx-step status="finish" title="开始" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="success" title="审批1" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="process" title="审批2" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="wait" title="结束" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
    </zrx-steps>
</div>

::: details 示例代码

```html
<zrx-steps :active="2">
    <zrx-step status="finish" title="开始" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="success" title="审批1" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="process" title="审批2" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="wait" title="结束" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
</zrx-steps>
```

:::

### 样式三

<div class="m-block" style="padding-bottom:0;">
    <zrx-steps :active="2" direction="vertical">
        <zrx-step status="finish" title="开始" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="success" title="审批1" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="process" title="审批2" description="This is a very very long discribtion"></zrx-step>
        <zrx-step status="wait" title="结束" description="This is a very very long discribtion"></zrx-step>
    </zrx-steps>
</div>

::: details 示例代码

```html
<zrx-steps :active="2" direction="vertical">
    <zrx-step status="finish" title="开始" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="success" title="审批1" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="process" title="审批2" description="This is a very very long discribtion"></zrx-step>
    <zrx-step status="wait" title="结束" description="This is a very very long discribtion"></zrx-step>
</zrx-steps>
```

:::

### Steps Attributes

| 参数             | 说明                                               | 类型            | 可选值                                    | 默认值     |
| ---------------- | -------------------------------------------------- | --------------- | ----------------------------------------- | ---------- |
| `space`          | 每个 step 的间距，不填写将自适应间距。支持百分比。 | number / string | —                                         | —          |
| `direction`      | 显示方向                                           | string          | vertical/horizontal                       | horizontal |
| `active`         | 设置当前激活步骤                                   | number          | —                                         | 0          |
| `process-status` | 设置当前步骤的状态                                 | string          | wait / process / finish / error / success | process    |
| `finish-status`  | 设置结束步骤的状态                                 | string          | wait / process / finish / error / success | finish     |
| `align-center`   | 进行居中对齐                                       | boolean         | —                                         | false      |
| `simple`         | 是否应用简洁风格                                   | boolean         | —                                         | false      |

### Step Attributes

| 参数          | 说明                                            | 类型                                                       | 可选值 | 默认值 |
| ------------- | ----------------------------------------------- | ---------------------------------------------------------- | ------ | ------ |
| `title`       | 标题                                            | string                                                     | —      | —      |
| `description` | 描述性文字                                      | string                                                     | —      | —      |
| `icon`        | 图标                                            | 传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入 | string | —      |
| `status`      | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success                  | —      |        |

### Step Slots

| name          | 说明             |
| ------------- | ---------------- |
| `icon`        | 自定义图标       |
| `title`       | 自定义标题       |
| `description` | 自定义描述性文字 |

<div>
    <contributor :maintainer="['zw']" :members="['zw']"></contributor>
</div>
