---
title: Slider 滑块
---

# Slider 滑块

通过拖动滑块在一个固定区间内进行选择

### 基础用法

<div class="m-block">
    <el-slider v-model="value1"></el-slider>
    <el-slider v-model="value" range></el-slider>
</div>

::: details 示例代码

```html
<el-slider v-model="value1"></el-slider>
<el-slider v-model="value" range></el-slider>
<script>
    export default {
        data() {
            return {
                value: [20,45],
                value1: 0
            }
        }
    }
</script>
```

:::

### 禁用

<div class="m-block">
    <el-slider v-model="value2" disabled></el-slider>
</div>

::: details 示例代码

```html
<el-slider v-model="value2" disabled></el-slider>
<script>
    export default {
        data() {
            return {
                value2: 42
            }
        }
    }
</script>
```

:::

### 带输入框

<div class="m-block">
    <el-slider v-model="value3" show-input></el-slider>
</div>

### 带输入框,输入框28px

<div class="m-block">
    <el-slider v-model="value3" show-input style="--inputNumHeight:28px"></el-slider>
</div>

### 禁用带输入框

<div class="m-block">
    <el-slider v-model="value3" show-input disabled></el-slider>
</div>

::: details 示例代码

```html
<el-slider v-model="value3" show-input></el-slider>
<el-slider v-model="value3" show-input style="--inputNumHeight:28px"></el-slider>
<el-slider v-model="value3" show-input disabled></el-slider>
<script>
    export default {
        data() {
            return {
                value3: 0
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
            value: [20,45],
            value1: 0,
            value2: 42,
            value3: 0
        }
    }
}
</script>

<div>
    <contributor :maintainer="['rp']" :members="['rp', 'agua', 'zxl', 'wt']"></contributor>
</div>
