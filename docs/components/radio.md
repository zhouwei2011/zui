---
title: Radio 单选框
---

# Radio 单选框

在一组备选项中进行单选

### 使用方法

<div class="m-example">
    <el-radio label="1" v-model="val1">未选中项</el-radio>
    <el-radio label="2" v-model="val1">选中项</el-radio>
    <el-radio label="3" v-model="val2" disabled>未选失效项</el-radio>
    <el-radio label="4" v-model="val2" disabled>选中失效项</el-radio>
</div>

::: details 示例代码

```html
<el-radio label="1" v-model="val1">未选中项</el-radio>
<el-radio label="2" v-model="val1">选中项</el-radio>
<el-radio label="3" v-model="val2" disabled>未选失效项</el-radio>
<el-radio label="4" v-model="val2" disabled>选中失效项</el-radio>
<script>
export default {
    data() {
        return {
            val1: '2',
            val2: '4'
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.io/#/zh-CN/component/radio](https://element.eleme.io/#/zh-CN/component/radio)

### Radio Attributes

| 参数            | 说明                                 | 类型                      | 可选值                | 默认值 |
| --------------- | ------------------------------------ | ------------------------- | --------------------- | ------ |
| `value / v-model` | 绑定值                               | string / number / boolean | —                     | —      |
| `label`           | Radio 的 `value`                       | string / number / boolean | —                     | —      |
| `disabled`        | 是否禁用                             | boolean                   | —                     | false  |
| `border`          | 是否显示边框                         | boolean                   | —                     | false  |
| `size`            | Radio 的尺寸，仅在 `border` 为真时有效 | string                    | medium / small / mini | —      |
| `name`            | 原生 `name` 属性                       | string                    | —                     | —      |

### Radio Events

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio `label` 值 |

### Radio-group Attributes

| 参数            | 说明                                                       | 类型                      | 可选值                | 默认值  |
| --------------- | ---------------------------------------------------------- | ------------------------- | --------------------- | ------- |
| `value / v-model` | 绑定值                                                     | string / number / boolean | —                     | —       |
| `size`            | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string                    | medium / small / mini | —       |
| `disabled`        | 是否禁用                                                   | boolean                   | —                     | false   |
| `text-color`      | 按钮形式的 Radio 激活时的文本颜色                          | string                    | —                     | #fff    |
| `fill`            | 按钮形式的 Radio 激活时的填充色和边框色                    | string                    | —                     | #409EFF |

### Radio-group Events

| 事件名称 | 说明                   | 回调参数              |
| -------- | ---------------------- | --------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio `label` 值 |

### Radio-button Attributes

| 参数     | 说明           | 类型            | 可选值 | 默认值 |
| -------- | -------------- | --------------- | ------ | ------ |
| `label`    | Radio 的 `value` | string / number | —      | —      |
| `disabled` | 是否禁用       | boolean         | —      | false  |
| `name`     | 原生 `name` 属性 | string          | —      | —      |

<script>
export default {
    data() {
        return {
            val1: '2',
            val2: '4'
        }
    }
}
</script>

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'gbb', 'agua', 'cmd']"></contributor>
</div>
