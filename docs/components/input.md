---
title: Input 输入框
---

# Input 输入框

通过鼠标或键盘输入字符

### 基础用法

<div class="m-example">
    <el-input v-model="val10" placeholder="请输入" clearable> </el-input>
</div>

::: details 示例代码

```html
<el-input v-model="val10" placeholder="请输入" clearable> </el-input>
<script>
export default {
    data() {
        return {
            val10: ''
        }
    }
}
</script>
```

:::

### 带ICON

<div class="m-example">
    <el-input v-model="val12" placeholder="请输入" clearable>
        <i class="icon svg-icon zrx-icon-magnifier" slot="suffix"></i>
    </el-input>
    <el-input v-model="val5" placeholder="请输入" prefix-icon="svg-icon zrx-icon-double-angle-left"></el-input>
    <el-input v-model="val13" placeholder="请输入" prefix-icon="svg-icon zrx-icon-double-angle-left" suffix-icon="svg-icon zrx-icon-magnifier" clearable></el-input>
</div>

::: details 示例代码

```html
<el-input v-model="val12" placeholder="请输入" clearable>
    <i class="icon svg-icon zrx-icon-magnifier" slot="suffix"></i>
</el-input>
<el-input v-model="val5" placeholder="请输入" prefix-icon="svg-icon zrx-icon-double-angle-left"></el-input>
<el-input v-model="val13" placeholder="请输入" prefix-icon="svg-icon zrx-icon-double-angle-left" suffix-icon="svg-icon zrx-icon-magnifier" clearable></el-input>
<script>
export default {
    data() {
        return {
            val12: '',
            val13: '',
            val5: ''
        }
    }
}
</script>
```

:::

### 限制字数

<div class="m-example">
    <el-input v-model="val1" placeholder="请输入" clearable show-word-limit maxlength="64"></el-input>
    <el-input
        show-word-limit
        maxlength="300"
        v-model="val2"
        placeholder="请输入"
        prefix-icon="svg-icon zrx-icon-double-angle-left"
        suffix-icon="svg-icon zrx-icon-magnifier"
        clearable
    ></el-input>
</div>

::: details 示例代码

```html
<el-input v-model="val1" placeholder="请输入" clearable show-word-limit maxlength="64"></el-input>
<el-input
    show-word-limit
    maxlength="300"
    v-model="val2"
    placeholder="请输入"
    prefix-icon="svg-icon zrx-icon-double-angle-left"
    suffix-icon="svg-icon zrx-icon-magnifier"
    clearable
></el-input>
<script>
export default {
    data() {
        return {
            val1: '',
            val12: ''
        }
    }
}
</script>
```

:::

### 预设内容

<div class="m-example">
    <el-input v-model="val4" placeholder="请输入"></el-input>
    <el-input
        show-word-limit
        maxlength="300"
        v-model="val14"
        placeholder="请输入"
        prefix-icon="svg-icon zrx-icon-double-angle-left"
        suffix-icon="svg-icon zrx-icon-magnifier"
        clearable
    ></el-input>
</div>

::: details 示例代码

```html
<el-input v-model="val4" placeholder="请输入"></el-input>
<el-input
    show-word-limit
    maxlength="300"
    v-model="val14"
    placeholder="请输入"
    prefix-icon="svg-icon zrx-icon-double-angle-left"
    suffix-icon="svg-icon zrx-icon-magnifier"
    clearable
></el-input>
<script>
export default {
    data() {
        return {
            val14: '示例文字'
        }
    }
}
</script>
```

:::

### 预设提示内容

<div class="m-example">
    <el-input placeholder="www.mysite" v-model="val3">
        <template slot="prepend">Http://</template>
        <template slot="append">.com</template>
    </el-input>
</div>

::: details 示例代码

```html
<el-input placeholder="www.mysite" v-model="val3">
    <template slot="prepend">Http://</template>
    <template slot="append">.com</template>
</el-input>
<script>
export default {
    data() {
        return {
            val13: ''
        }
    }
}
</script>
```

:::

### 文本域

<div class="m-example">
    <el-input v-model="val9" placeholder="请输入" maxlength="300" show-word-limit type="textarea"></el-input>
</div>

::: details 示例代码

```html
<el-input v-model="val9" placeholder="请输入" maxlength="300" show-word-limit type="textarea"></el-input>
<script>
export default {
    data() {
        return {
            val9: ''
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <el-input v-model="val7" placeholder="请输入" disabled></el-input>
    <el-input
        show-word-limit
        maxlength="300"
        v-model="val8"
        placeholder="请输入"
        prefix-icon="svg-icon zrx-icon-double-angle-left"
        suffix-icon="svg-icon zrx-icon-magnifier"
        clearable
        disabled
    ></el-input>
    <el-input placeholder="www.mysite" v-model="val3" disabled>
        <template slot="prepend">Http://</template>
        <template slot="append">.com</template>
    </el-input>
    <el-input v-model="val11" placeholder="请输入" type="textarea" disabled></el-input>
</div>

::: details 示例代码

```html
<el-input v-model="val7" placeholder="请输入" disabled></el-input>
<el-input
    show-word-limit
    maxlength="300"
    v-model="val8"
    placeholder="请输入"
    prefix-icon="svg-icon zrx-icon-double-angle-left"
    suffix-icon="svg-icon zrx-icon-magnifier"
    clearable
    disabled
></el-input>
<el-input placeholder="www.mysite" v-model="val3" disabled>
    <template slot="prepend">Http://</template>
    <template slot="append">.com</template>
</el-input>
<el-input v-model="val11" placeholder="请输入" type="textarea" disabled></el-input>
<script>
export default {
    data() {
        return {
            val3: '',
            val7: '',
            val8: '',
            val11: ''
        }
    }
}
</script>
```

:::

<script>
export default {
    data() {
        return {
            val1: '',
            val2: '',
            val3: '',
            val4: '示例文字',
            val5: '',
            val7: '',
            val8: '',
            val9: '',
            val10: '',
            val11: '',
            val12: '',
            val13: '',
            val14: '示例文字'
        }
    },
    methods: {}
}
</script>

### 链接

[https://element.eleme.io/#/zh-CN/component/input](https://element.eleme.io/#/zh-CN/component/input)

### Attributes

| 参数              | 说明                                                                 | 类型    | 可选值                                     | 默认值 |
| ----------------- | -------------------------------------------------------------------- | ------- | ------------------------------------------ | ------ |
| `type`            | 类型                                                                 | string  | text, textarea 和其他原生 input 的 type 值 | text   |
| `show-word-limit` | 是否显示输入字数统计，只在 type = "text" 或 type = "textarea" 时有效 | boolean | —                                          | false  |
| `placeholder`     | 输入框占位文本                                                       | string  | —                                          | —      |
| `clearable`       | 是否可清空                                                           | boolean | —                                          | false  |
| `show-password`   | 是否显示切换密码图标                                                 | boolean | —                                          | false  |
| `disabled`        | 禁用                                                                 | boolean | —                                          | false  |
| `prefix-icon`     | 输入框头部图标                                                       | string  | —                                          | —      |
| `suffix-icon`     | 输入框尾部图标                                                       | string  | —                                          | —      |
| `rows`            | 输入框行数，只对 type="textarea" 有效                                | number  | —                                          | 2      |
| `name`            | 原生属性                                                             | string  | —                                          | —      |
| `label`           | 输入框关联的 label 文字                                              | string  | —                                          | —      |
| `tabindex`        | 输入框的 tabindex                                                    | string  |                                            |        |
| `validate-event`  | 输入时是否触发表单的校验                                             | boolean | —                                          | true   |

### Events

| 事件名称 | 说明                                          | 回调参数       |
| -------- | --------------------------------------------- | -------------- |
| `blur`   | 在 Input 失去焦点时触发                       | (event: Event) |
| `focus`  | 在 Input 获得焦点时触发                       | (event: Event) |
| `change` | 仅在输入框失去焦点或用户按下回车时触发        | (value: string | number) |
| `input`  | 在 Input 值改变时触发                         | (value: string | number) |
| `clear`  | 在点击由 `clearable` 属性生成的清空按钮时触发 | —              |

### Slots

| 插槽名称  | 说明                                  |
| --------- | ------------------------------------- |
| `prefix`  | 输入框头部内容，只对 type="text" 有效 |
| `suffix`  | 输入框尾部内容，只对 type="text" 有效 |
| `prepend` | 输入框前置内容，只对 type="text" 有效 |
| `append`  | 输入框后置内容，只对 type="text" 有效 |

<div>
    <contributor :maintainer="['zw']" :members="['zw', 'zxl', 'agua', 'zdl', 'gbb']"></contributor>
</div>
