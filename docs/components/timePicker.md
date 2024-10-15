---
title: TimePicker 时间选择器
---

# TimePicker 自定义时间选择器

用于时间选择

### 基础用法

<div class="m-block">
    <zrx-time-picker v-model="val1" placeholder="请选择"></zrx-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val1}` }}</p>
</div>

::: details 示例代码

```html
<zrx-time-picker v-model="val1" placeholder="请选择"></zrx-time-picker>
<script>
export default {
    data() {
        return {
            val1: ''
        }
    }
}
</script>
```

:::

### 补全年月日

通过`prefix`，向`value`中补全年月日

<div class="m-block">
    <zrx-time-picker v-model="val2" placeholder="请选择" value-format="HH:mm:ss" prefix="1970-01-01 "></zrx-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val2}` }}</p>
</div>

::: details 示例代码

```html
<zrx-time-picker v-model="val2" placeholder="请选择" value-format="HH:mm:ss" prefix="1970-01-01 "></zrx-time-picker>

<script>
export default {
    data() {
        return {
            val2: null
        }
    }
}
</script>
```

:::

### 时间段

<div class="m-block">
    <zrx-time-picker v-model="val3" placeholder="请选择" value-format="HH:mm:ss" is-range prefix="1970-01-01 "></zrx-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val3}` }}</p>
</div>

::: details 示例代码

```html
<zrx-time-picker v-model="val3" placeholder="请选择" value-format="HH:mm:ss" is-range prefix="1970-01-01 "></zrx-time-picker>
<script>
export default {
    data() {
        return {
            val3: []
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
            val2: null,
            val3: []
        }
    }
}
</script>

<div>
    <contributor :maintainer="['zz']" :members="['zz']"></contributor>
</div>
