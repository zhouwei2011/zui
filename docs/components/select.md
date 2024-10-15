---
title: Select 下拉框
---

# Select 下拉框

当选项过多时，使用下拉菜单展示并选择内容

### 基础用法

<div class="m-example">
    <el-select v-model="slectVal1" clearable :popper-append-to-body="false">
        <el-option label="搜索建议1" value="1"></el-option>
        <el-option label="搜索建议2" value="2"></el-option>
        <el-option label="搜索建议3" value="3"></el-option>
    </el-select>
</div>

::: details 示例代码

```html
<el-select v-model="slectVal1" clearable :popper-append-to-body="false">
    <el-option label="搜索建议1" value="1"></el-option>
    <el-option label="搜索建议2" value="2"></el-option>
    <el-option label="搜索建议3" value="3"></el-option>
</el-select>
<script>
export default {
    data() {
        return {
            slectVal1: ''
        }
    }
}
</script>
```

:::

### 分组

<div class="m-example">
    <el-select v-model="slectVal2" clearable>
        <el-option-group label="类别1">
            <el-option label="搜索建议1" value="1"></el-option>
            <el-option label="搜索建议2" value="2"></el-option>
            <el-option label="搜索建议3" value="3" disabled></el-option>
        </el-option-group>
        <el-option-group label="类别2">
            <el-option label="搜索建议4" value="4"></el-option>
            <el-option label="搜索建议5" value="5"></el-option>
            <el-option label="搜索建议6" value="6"></el-option>
        </el-option-group>
    </el-select>
</div>

::: details 示例代码

```html
<el-select v-model="slectVal2" clearable>
    <el-option-group label="类别1">
        <el-option label="搜索建议1" value="1"></el-option>
        <el-option label="搜索建议2" value="2"></el-option>
        <el-option label="搜索建议3" value="3" disabled></el-option>
    </el-option-group>
    <el-option-group label="类别2">
        <el-option label="搜索建议4" value="4"></el-option>
        <el-option label="搜索建议5" value="5"></el-option>
        <el-option label="搜索建议6" value="6"></el-option>
    </el-option-group>
</el-select>
<script>
export default {
    data() {
        return {
            slectVal2: ''
        }
    }
}
</script>
```

:::

### 多选

<div class="m-example">
    <el-select v-model="slectVal3" collapse-tags clearable multiple>
        <el-option label="搜索建议1" value="1"></el-option>
        <el-option label="搜索建议2" value="2"></el-option>
        <el-option label="搜索建议3" value="3"></el-option>
    </el-select>
</div>


::: details 示例代码

```html
<el-select v-model="slectVal3" collapse-tags clearable multiple>
    <el-option label="搜索建议1" value="1"></el-option>
    <el-option label="搜索建议2" value="2"></el-option>
    <el-option label="搜索建议3" value="3"></el-option>
</el-select>
<script>
export default {
    data() {
        return {
            slectVal3: ''
        }
    }
}
</script>
```

:::

### 禁用
多选禁用样式需要额外添加class="is-disabled"
<div class="m-example">
    <el-select v-model="slectVal4" clearable disabled>
        <el-option label="搜索建议1" value="1"></el-option>
        <el-option label="搜索建议2" value="2"></el-option>
        <el-option label="搜索建议3" value="3"></el-option>
    </el-select>
    <el-select v-model="slectVal3" collapse-tags clearable multiple disabled class="is-disabled">
        <el-option label="搜索建议1" value="1"></el-option>
        <el-option label="搜索建议2" value="2"></el-option>
        <el-option label="搜索建议3" value="3"></el-option>
    </el-select>
</div>

::: details 示例代码

```html
<el-select v-model="slectVal4" clearable disabled>
    <el-option label="搜索建议1" value="1"></el-option>
    <el-option label="搜索建议2" value="2"></el-option>
    <el-option label="搜索建议3" value="3"></el-option>
</el-select>
<el-select v-model="slectVal3" collapse-tags clearable multiple disabled class="is-disabled">
    <el-option label="搜索建议1" value="1"></el-option>
    <el-option label="搜索建议2" value="2"></el-option>
    <el-option label="搜索建议3" value="3"></el-option>
</el-select>
<script>
export default {
    data() {
        return {
            slectVal4: [],
            slectVal3: ['2', '1']
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.io/#/zh-CN/component/select](https://element.eleme.io/#/zh-CN/component/select)

### 样式变量

| 变量名                |          默认值 | 说明 |
| --------------------- | --------------: | ---: |
| --text-color          |      59, 65, 85 |      |
| --text-light          |  59, 65, 85,0.9 |      |
| --text-dim            |  59, 65, 85,0.7 |      |
| --text-color-disabled |   --black, 0.25 |      |
| --text-disabled       | 59, 65, 85,0.73 |      |

### Attributes

| 参数             | 说明                                          | 类型           | 可选值 | 默认值 |
| ---------------- | --------------------------------------------- | -------------- | ------ | ------ |
| `multiple`       | 是否多选                                      | number, string | —      | 0      |
| `disabled`       | 是否禁用                                      | boolean        | —      | false  |
| `clearable`      | 是否可以清空选项                              | boolean        | —      | false  |
| `collapse-tags`  | 多选时是否将选中值按文字的形式展示            | boolean        | —      | false  |
| `multiple-limit` | 多选时用户最多可以选择的项目数，为 0 则不限制 | number         | —      | 0      |
| `name`           | select input 的 `name` 属性                     | string         | —      | —      |
| `autocomplete`   | select input 的 `autocomplete` 属性             | string         | —      | off    |
| `placeholder`    | 占位符                                        | string         | —      | 请选择 |
| `filterable`     | 是否可搜索                                    | boolean        | —      | false  |

<div>
    <contributor :maintainer="['zw']" :members="['zxl', 'gbb', 'zw', 'agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            slectVal1: '',
            slectVal2: '',
            slectVal3: ['2', '1'],
            slectVal4: []
        }
    }
}
</script>
