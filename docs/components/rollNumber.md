---
title: RollNumber 数字滚动
---

# RollNumber 数字滚动

为数字附加滚动效果

### 基础用法

基础的滚动数字

<div class="m-demo-row">
    <p class="m-row"><el-button type="primary" @click="value1 = 1698">开始</el-button></p>
    <div class="gallery">
        <zrx-roll-number :value="value1"></zrx-roll-number>
    </div>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="value = 1698">开始</el-button>
<zrx-roll-number :value="value"></zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 0
        }
    }
}
</script>
```

:::

### 负值

传入负值，值递减

<div class="m-demo-row">
    <p class="m-row"><el-button type="primary" @click="value8 = -22350">开始</el-button></p>
    <div class="gallery">
        <zrx-roll-number :value="value8"></zrx-roll-number>
    </div>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="value = -22350">开始</el-button>
<zrx-roll-number :value="value"></zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 0
        }
    }
}
</script>
```

:::

### 保留小数

保留2位小数

<div class="m-demo-row">
    <div class="gallery">
        <zrx-roll-number tag="span" :value="value2" :retain-decimals="2"></zrx-roll-number>
    </div>
</div>

::: details 示例代码

```html
<zrx-roll-number tag="span" :value="value" :retain-decimals="2"></zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 58693.1266
        }
    }
}
</script>
```

:::

### 设置初始值

<div class="m-demo-row">
    <p class="m-row"><el-button type="primary" @click="value9 = -5.55">开始</el-button></p>
    <div class="gallery">
        <zrx-roll-number :value="value9" inited-value retain-decimals="2"></zrx-roll-number>
    </div>
</div>

::: tip
默认数字从0开始过渡。设置inited-value为true，数字从一开始的value值开始过渡。
:::

::: details 示例代码

```html
<el-button type="primary" @click="value = -5.55">开始</el-button>
<zrx-roll-number :value="value" inited-value retain-decimals="2"></zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 4.55
        }
    }
}
</script>
```

:::

### 过渡时间

<div class="m-demo-row">
    <p class="m-row"><el-button type="primary" @click="changeValue">开始</el-button></p>
    <div class="gallery">
        <p class="subtitle">默认过渡时间500ms</p>
        <zrx-roll-number :value="value3"></zrx-roll-number>
    </div>
    <div class="gallery">
        <p class="subtitle">过渡时间1500ms</p>
        <zrx-roll-number :value="value3" :duration="1500"></zrx-roll-number>
    </div>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="changeValue">开始</el-button>
<zrx-roll-number :value="value"></zrx-roll-number>
<zrx-roll-number :value="value" :duration="1500"></zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 0
        }
    },
    methods: {
        changeValue() {
            this.value3 += 3000
        }
    }
}
</script>
```

:::

### 分隔符

每隔三位加","分隔符

<div class="m-demo-row">
    <div class="gallery">
        <zrx-roll-number :value="value4" break-sign retain-decimals="2"></zrx-roll-number>
    </div>
</div>

::: details 示例代码

```html
<zrx-roll-number :value="value" break-sign retain-decimals="2"></zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 2968525450.1225
        }
    }
}
</script>
```

:::

### 添加单位

<div class="m-demo-row">
    <div class="gallery">
        <p class="subtitle">原值</p>
        调用总数：<zrx-roll-number :value="value6">次</zrx-roll-number>
    </div>
    <div class="gallery">
        <p class="subtitle">缩短后</p>
        调用总数：<zrx-roll-number :value="value6" add-unit retain-decimals="2">次</zrx-roll-number>
    </div>
</div>

::: tip
数值较大时，可开启add-unit自动为数值添加单位以缩短长度。注意设置retain-decimals。
:::

::: details 示例代码

```html
<zrx-roll-number :value="value">次</zrx-roll-number>
<zrx-roll-number :value="value" add-unit retain-decimals="2">次</zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 119953004
        }
    }
}
</script>
```

:::

### 单位插槽

通过插槽分离数值与单位的样式

<div class="m-demo-row">
    <div class="gallery">
        地区生产总值：<zrx-roll-number :value="value7" add-unit retain-decimals="2" style="font-size: 24px" :duration="2000"
            ><span slot="unit" slot-scope="{ unit }" style="font-size: 14px; opacity: 0.7">{{ unit + '元' }}</span></zrx-roll-number
        >
    </div>
    <el-button type="primary" @click="value7 = 1208806569821">开始</el-button>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="value = 1208806569821">开始</el-button>
地区生产总值：<zrx-roll-number :value="value" add-unit retain-decimals="2" :duration="2000">
    <span slot="unit" slot-scope="{ unit }" style="font-size: 14px; opacity: 0.7">{{ unit + '元' }}</span>
</zrx-roll-number>
<script>
export default {
    data() {
        return {
            value: 0
        }
    }
}
</script>
```

:::

### 有选择地保留小数

<div class="m-demo-row">
    <div class="gallery">今日访问次数：<zrx-roll-number :value="value10" add-unit :retain-decimals="2" :always-decimal="false">次</zrx-roll-number></div>
    <el-button @click="value10 = 666">较小值</el-button>
    <el-button type="primary" @click="value10 = 12345">较大值</el-button>
</div>

::: tip
roll-number在某些语境下（只能是整数）、值较小且保留小数时，带小数的数值变化可能不是想要的结果。设置always-decimal: false，当值不出现单位时，将不会出现小数。
注意前提是设置了add-unit和retain-decimals。只有这种条件下，值大时保留小数，值小时取整才是有意义的。
:::

::: details 示例代码

```html
今日访问次数：<zrx-roll-number :value="value" add-unit :retain-decimals="2" :always-decimal="false">次</zrx-roll-number>
<el-button @click="value = 666">较小值</el-button>
<el-button type="primary" @click="value = 12345">较大值</el-button>
<script>
export default {
    data() {
        return {
            value: 0
        }
    }
}
</script>
```

:::

### 缺省值

<div class="m-demo-row">
    <zrx-roll-number :value="undefined"></zrx-roll-number>
</div>

::: tip
当值不是数字或字符串的数字时，roll-number显示缺省值。
:::

::: details 示例代码

```html
<zrx-roll-number :value="undefined"></zrx-roll-number>
```

:::

### Attributes

| 参数              | 说明                                         | 类型           | 可选值    | 默认值 |
| ----------------- | -------------------------------------------- | -------------- | --------- | ------ |
| `value`           | 传入的数值                                   | number, string | —         | 0      |
| `retain-decimals` | 四舍五入并保留几位小数                       | number, string | —         | 0      |
| `duration`        | 过渡持续时间（毫秒）。最小200ms              | number         | —         | 500    |
| `break-sign`      | 是否每三位添加分隔符                         | boolean        | —         | false  |
| `add-unit`        | 是否自动添加单位以缩短数据                   | boolean        | —         | false  |
| `tag`             | 渲染的标签名                                 | string         | HTML tags | p      |
| `inited-value`    | 是否将最初的value设为起始数字                | boolean        | —         | false  |
| `placeholder`     | 非数字且非字符串的数字时，显示的缺省值       | number, string | —         | —      |
| `always-decimal`  | 自动添加单位时是否不管有无单位，始终保留小数 | boolean        | —         | true   |
| `interval`        | 刷新间隔，单位：ms。取值[20, 100]            | string, number | —         | 20     |

### Events

| 事件名称   | 说明         | 回调参数 |
| ---------- | ------------ | -------- |
| `onFinish` | 滚动完成回调 | —        |

### Slots

| 插槽名称 | 说明       |
| -------- | ---------- |
| —        | 默认插槽   |
| unit     | 数值的单位 |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            value1: 0,
            value2: 58693.1266,
            value3: 0,
            value4: 2968525450.1225,
            value5: 0,
            value6: 119953004,
            value7: 0,
            value8: 0,
            value9: 4.55,
            value10: 0
        }
    },
    methods: {
        changeValue() {
            this.value3 += 3000
        }
    }
}
</script>
