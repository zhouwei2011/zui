---
title: DateTimePicker 日期时间选择器
---

# DateTimePicker 自定义日期时间选择器

在同一个选择器里选择日期和时间

### 年选择

<div class="m-block">
    <zrx-date-time-picker v-model="val1" type="year" format="yyyy" value-format="yyyy"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val1}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val1" type="year" format="yyyy" value-format="yyyy"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val1: '2001-01-01 10:11:12'
        }
    }
}
</script>
```

:::

### 月选择

<div class="m-block">
    <zrx-date-time-picker v-model="val2" type="month" value-format="yyyy-MM"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val2}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val2" type="month" value-format="yyyy-MM"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val2: new Date()
        }
    }
}
</script>
```

:::

### 天选择

<div class="m-block">
    <zrx-date-time-picker v-model="val3" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val3}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val3" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val3: new Date()
        }
    }
}
</script>
```

:::

### 周选择

<div class="m-block">
    <zrx-date-time-picker v-model="val4" type="week" value-format="yyyy-MM-dd"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val4}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val4" type="week" value-format="yyyy-MM-dd"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val4: new Date()
        }
    }
}
</script>
```

:::

### 日期时间

<div class="m-block">
    <zrx-date-time-picker v-model="val5" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val5}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val5" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val5: new Date()
        }
    }
}
</script>
```

:::

### 日期范围

<div class="m-block">
    <zrx-date-time-picker v-model="val6" type="daterange" format="yyyy/MM/dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val6}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val6" type="daterange" format="yyyy/MM/dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val6: ['2001-01-01 10:11:12', '2001-02-01 10:11:12']
        }
    }
}
</script>
```

:::

### 日期时间范围

<div class="m-block">
    <zrx-date-time-picker v-model="val7" type="datetimerange" format="yyyy-MM-dd HH:mm:ss" rangeSeparator="-" value-format="yyyy-MM-dd HH:mm:ss"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val4}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val7" type="datetimerange" format="yyyy-MM-dd HH:mm:ss" rangeSeparator="-" value-format="yyyy-MM-dd HH:mm:ss"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val4: ['2001-01-01 10:11:12', '2001-02-01 10:11:12']
        }
    }
}
</script>
```

:::

### 多选

<div class="m-block">
    <zrx-date-time-picker v-model="val8" type="dates" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
    <p style="margin-top:14px;">{{ `v-model 绑定值：${val4}` }}</p>
</div>

::: details 示例代码

```html
<zrx-date-time-picker v-model="val8" type="dates" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
<script>
export default {
    data() {
        return {
            val8: ['2001-01-01 10:11:12', '2001-02-01 10:11:12']
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
            val1: '2001-01-01 10:11:12',
            val2: new Date(),
            val3: new Date(),
            val4: new Date(),
            val5: new Date(),
            val6: ['2001-01-01 10:11:12', '2001-02-01 10:11:12'],
            val7: ['2001-01-01 10:11:12', '2001-02-01 10:11:12'],
            val8: ['2001-01-01 10:11:12', '2001-02-01 10:11:12']
        }
    }
}
</script>

<div>
    <contributor :maintainer="['zz']" :members="['zz']"></contributor>
</div>
