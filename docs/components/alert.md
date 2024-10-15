---
title: Alert 警告
---

# Alert 警告

用于页面中展示重要的提示信息

### 简洁形式

<div class="m-block">
    <el-alert title="消息提示的文案" type="info" show-icon> </el-alert>
    <el-alert title="成功提示的文案" type="success" close-text="详情" show-icon> </el-alert>
    <el-alert title="警告提示的文案" type="warning" close-text="详情" show-icon> </el-alert>
    <el-alert title="错误提示的文案" type="error" close-text="详情" show-icon> </el-alert>
    <el-alert title="消息提示的文案" type="info" close-text="详情" show-icon> </el-alert>
</div>

::: details 示例代码

```html
<el-alert title="消息提示的文案" type="info" show-icon> </el-alert>
<el-alert title="成功提示的文案" type="success" close-text="详情" show-icon> </el-alert>
<el-alert title="警告提示的文案" type="warning" close-text="详情" show-icon> </el-alert>
<el-alert title="错误提示的文案" type="error" close-text="详情" show-icon> </el-alert>
<el-alert title="消息提示的文案" type="info" close-text="详情" show-icon> </el-alert>
```

:::

### 带说明

<div class="m-block">
    <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" close-text="详情" show-icon> </el-alert>
    <el-alert title="成功提示的文案" type="success" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon> </el-alert>
    <el-alert title="消息提示的文案" type="info" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon> </el-alert>
    <el-alert title="警告提示的文案" type="warning" description="文字说明文字说明文字说明文字说明文字说明文字说明" close-text="详情" show-icon>
    </el-alert>
    <el-alert title="错误提示的文案" type="error" description="文字说明文字说明文字说明文字说明文字说明文字说明" show-icon> </el-alert>
</div>

<style lang="scss" scoped>
.el-alert ::v-deep {
    margin-bottom: 10px;
}
</style>

### 链接

[https://element.eleme.io/#/zh-CN/component/alert](https://element.eleme.io/#/zh-CN/component/alert)

### Attributes

| 参数          | 说明                               | 类型    | 可选值                     | 默认值 |
| ------------- | ---------------------------------- | ------- | -------------------------- | ------ |
| `title`       | 标题                               | string  | —                          | —      |
| `type`        | 主题                               | string  | success/warning/info/error | info   |
| `description` | 辅助性文字。也可通过默认 slot 传入 | string  | —                          | —      |
| `closable`    | 是否可关闭                         | boolean | —                          | true   |
| `center`      | 文字是否居中                       | boolean | —                          | true   |
| `close-text`  | 关闭按钮自定义文本                 | string  | —                          | —      |
| `show-icon`   | 是否显示图标                       | boolean | —                          | false  |
| `effect`      | 选择提供的主题                     | string  | light/dark                 | light  |

### Slots

| 名称    | 描述       |
| ------- | ---------- |
| `title` | 标题的内容 |

### Events

| 事件名称 | 说明                  | 回调参数 |
| -------- | --------------------- | -------- |
| `close`  | 关闭alert时触发的事件 | —        |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'agua', 'cmd']"></contributor>
</div>
