---
title: InputNumber 计数器
---

# InputNumber 计数器

仅允许输入标准的数字值，可定义范围

### 基础用法

<div class="m-example">
    <el-input-number v-model="val1" controls-position="right" :min="0" :max="99"></el-input-number>
</div>

::: details 示例代码

```html
<el-input-number v-model="val1" controls-position="right" :min="0" :max="99"></el-input-number>
<script>
export default {
    data() {
        return {
            val1: 0
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-input-number v-model="val2" controls-position="right" :min="0" :max="99" disabled></el-input-number>
</div>

::: details 示例代码

```html
<el-input-number v-model="val2" controls-position="right" :min="0" :max="99" disabled></el-input-number>
<script>
export default {
    data() {
        return {
            val2: 0
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.cn/#/zh-CN/component/input-number](https://element.eleme.cn/#/zh-CN/component/input-number)

### Attributes

| 参数              | 说明                     | 类型    | 可选值       | 默认值    |
| ----------------- | ------------------------ | ------- | ------------ | --------- |
| `value / v-model`   | 绑定值                   | number  | —            | 0         |
| `min`               | 设置计数器允许的最小值   | number  | —            | -Infinity |
| `max`               | 设置计数器允许的最大值   | number  | —            | Infinity  |
| `step`              | 计数器步长               | number  | —            | 1         |
| `step-strictly`     | 是否只能输入 `step` 的倍数 | boolean | —            | false     |
| `precision`         | 数值精度                 | number  | —            | —         |
| `size`              | 计数器尺寸               | string  | large, small | —         |
| `disabled`          | 是否禁用计数器           | boolean | —            | false     |
| `controls`          | 是否使用控制按钮         | boolean | —            | true      |
| `controls-position` | 控制按钮位置             | string  | right        | —         |
| `name`              | 原生属性                 | string  | —            | —         |
| `label`             | 输入框关联的 label 文字  | string  | —            | —         |
| `placeholder`       | 占位符   | string  | —            | —         |

### Events

| 事件名称 | 说明                        | 回调参数               |
| -------- | --------------------------- | ---------------------- |
| `change`   | 绑定值被改变时触发          | currentValue, oldValue |
| `blur`     | 在组件 Input 失去焦点时触发 | (event: Event)         |
| `focus`    | 在组件 Input 获得焦点时触发 | (event: Event)         |

### Methods

| 方法名 | 说明                | 参数 |
| ------ | ------------------- | ---- |
| `focus`  | 使 input 获取焦点   | —    |
| `select` | 选中 input 中的文字 | —    |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            val1: 0,
            val2: 0
        }
    }
}
</script>
