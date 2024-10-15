---
title: CheckBox 复选框
---

# CheckBox 复选框

一组备选项中进行多选

### 基础用法

<div class="m-example">
    <el-checkbox v-model="checked1">未选中项</el-checkbox>
    <el-checkbox v-model="checked2">选中项</el-checkbox>
</div>

::: details 示例代码

```html
<el-checkbox v-model="checked1">未选中项</el-checkbox>
<el-checkbox v-model="checked2">选中项</el-checkbox>
<script>
export default {
    data() {
        return {
            checked1: false,
            checked2: true
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-checkbox v-model="checked3" disabled>未选失效项</el-checkbox>
    <el-checkbox v-model="checked4" disabled>选中失效项</el-checkbox>
</div>

::: details 示例代码

```html
<el-checkbox v-model="checked3" disabled>未选失效项</el-checkbox>
<el-checkbox v-model="checked4" disabled>选中失效项</el-checkbox>
<script>
export default {
    data() {
        return {
            checked3: false,
            checked4: true
        }
    }
}
</script>
```

:::

### 多选框组

<div class="m-example">
    <div class="bar">
        <el-checkbox v-model="checked" :indeterminate="isIndeterminate" @change="changeAll">全选</el-checkbox>
    </div>
    <el-checkbox-group v-model="checkLists" @change="singleCheck">
        <el-checkbox label="label1">选项一</el-checkbox>
        <el-checkbox label="label2">选项二</el-checkbox>
        <el-checkbox label="label3">选项三</el-checkbox>
        <el-checkbox label="label4">选项四</el-checkbox>
    </el-checkbox-group>
</div>

::: details 示例代码

```html
<el-checkbox v-model="checked" :indeterminate="isIndeterminate" @change="changeAll">全选</el-checkbox>
<el-checkbox-group v-model="checkLists" @change="singleCheck">
    <el-checkbox label="label1">选项一</el-checkbox>
    <el-checkbox label="label2">选项二</el-checkbox>
    <el-checkbox label="label3">选项三</el-checkbox>
    <el-checkbox label="label4">选项四</el-checkbox>
</el-checkbox-group>
<script>
export default {
    data() {
        return {
            checked: false,
            isIndeterminate: true,
            checkLists: ['label2', 'label4'],
            allCheck: ['label1', 'label2', 'label3', 'label4']
        }
    },
    methods: {
        changeAll(val) {
            if (val == true) {
                this.checkLists = this.allCheck
            } else if (val == false) {
                this.checkLists = []
            }
            this.isIndeterminate = false
        },
        singleCheck(val) {
            this.isIndeterminate = val.length > 0 && val.length < this.allCheck.length
            if (val.length == this.allCheck.length) {
                this.checked = true
            } else if (val.length == 0) {
                this.checked = false
            }
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.cn/#/zh-CN/component/checkbox](https://element.eleme.cn/#/zh-CN/component/checkbox)

### Checkbox Attributes

| 参数              | 说明                                                                  | 类型                      | 可选值                | 默认值 |
| ----------------- | --------------------------------------------------------------------- | ------------------------- | --------------------- | ------ |
| `value / v-model` | 绑定值                                                                | string / number / boolean | —                     | —      |
| `label`           | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —                     | —      |
| `true-label`      | 选中时的值                                                            | string / number           | —                     | —      |
| `false-label`     | 没有选中时的值                                                        | string / number           | —                     | —      |
| `disabled`        | 是否禁用                                                              | boolean                   | —                     | false  |
| `border`          | 是否显示边框                                                          | boolean                   | —                     | false  |
| `size`            | Checkbox 的尺寸，仅在 border 为真时有效                               | string                    | medium / small / mini | —      |
| `name`            | 原生 `name` 属性                                                        | string                    | —                     | —      |
| `checked`         | 当前是否勾选                                                          | boolean                   | —                     | false  |
| `indeterminate`   | 设置 indeterminate 状态，只负责样式控制                               | boolean                   | —                     | false  |

### Checkbox Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| `change` | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-group Attributes

| 参数              | 说明                                                             | 类型    | 可选值                | 默认值  |
| ----------------- | ---------------------------------------------------------------- | ------- | --------------------- | ------- |
| `value / v-model` | 绑定值                                                           | array   | —                     | —       |
| `size`            | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效 | string  | medium / small / mini | —       |
| `disabled`        | 是否禁用                                                         | boolean | —                     | false   |
| `min`             | 可被勾选的 checkbox 的最小数量                                   | number  | —                     | —       |
| `max`             | 可被勾选的 checkbox 的最大数量                                   | number  | —                     | —       |
| `text-color`      | 按钮形式的 Checkbox 激活时的文本颜色                             | string  | —                     | #fff    |
| `fill`            | 按钮形式的 Checkbox 激活时的填充色和边框色                       | string  | —                     | #409EFF |

### Checkbox-group Events

| 事件名称 | 说明                     | 回调参数   |
| -------- | ------------------------ | ---------- |
| `change` | 当绑定值变化时触发的事件 | 更新后的值 |

### Checkbox-button Attributes

| 参数          | 说明                                                                  | 类型                      | 可选值 | 默认值 |
| ------------- | --------------------------------------------------------------------- | ------------------------- | ------ | ------ |
| `label`       | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效） | string / number / boolean | —      | —      |
| `true-label`  | 选中时的值                                                            | string / number           | —      | —      |
| `false-label` | 没有选中时的值                                                        | string / number           | —      | —      |
| `disabled`    | 是否禁用                                                              | boolean                   | —      | false  |
| `name`        | 原生 `name` 属性                                                        | string                    | —      | —      |
| `checked`     | 当前是否勾选                                                          | boolean                   | —      | false  |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'agua', 'gbb', 'cmd']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            checked: false,
            checked1: false,
            checked2: true,
            checked3: false,
            checked4: true,
            isIndeterminate: true,
            checkLists: ['label2', 'label4'],
            allCheck: ['label1', 'label2', 'label3', 'label4']
        }
    },
    methods: {
        changeAll(val) {
            if (val == true) {
                this.checkLists = this.allCheck
            } else if (val == false) {
                this.checkLists = []
            }
            this.isIndeterminate = false
        },
        singleCheck(val) {
            this.isIndeterminate = val.length > 0 && val.length < this.allCheck.length
            if (val.length == this.allCheck.length) {
                this.checked = true
            } else if (val.length == 0) {
                this.checked = false
            }
        }
    }
}
</script>
