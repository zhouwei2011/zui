---
title: Score 评分
---

# Score 评分

样式完全按照UI规范，用法与 el-rate 相同的评分组件。用以取代 el-rate

### 基础用法

<div class="m-example">
    <zrx-score v-model="value1" allow-half></zrx-score>
</div>

::: details 示例代码

```html
<zrx-score v-model="value1" allow-half></zrx-score>
<script>
export default {
    data() {
        return {
            value1: 0
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <zrx-score v-model="value2" allow-half disabled></zrx-score>
</div>

::: details 示例代码

```html
<zrx-score v-model="value2" allow-half disabled></zrx-score>
<script>
export default {
    data() {
        return {
            value2: 2.5
        }
    }
}
</script>
```

:::

### 动态max

<div class="m-example">
    <div class="m-btns-row">
        <el-button @click="max++">max+1</el-button>
        <el-button @click="max--">max-1</el-button>
    </div>
    <zrx-score v-model="value3" :max="max" allow-half show-score></zrx-score>
</div>

::: tip
改变 max 属性，score 的值不会改变，显示值会相应调整
:::

::: details 示例代码

```html
<el-button @click="max++">max+1</el-button>
<el-button @click="max--">max-1</el-button>
<zrx-score v-model="value3" :max="max" allow-half show-score></zrx-score>
<script>
export default {
    data() {
        return {
            value3: 1,
            max: 3
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
            value1: 0,
            value2: 2.5,
            value3: 1,
            max: 3
        }
    }
}
</script>

### Attributes

| 参数              | 说明                                                                         | 类型       | 可选值 | 默认值                                   |
| ----------------- | ---------------------------------------------------------------------------- | ---------- | ------ | ---------------------------------------- |
| `value / v-model` | 绑定值                                                                       | number     | —      | 0                                        |
| `max`             | 最大分值                                                                     | number     | —      | 5                                        |
| `disabled`        | 是否为只读                                                                   | 是否为只读 | —      | false                                    |
| `allow-half`      | 是否允许半选                                                                 |            | —      | false                                    |
| `show-text`       | 是否显示辅助文字，若为真，则会从 `texts` 数组中选取当前分数对应的文字内容    | boolean    | —      | false                                    |
| `show-score`      | 是否显示当前分数，`show-score` 和 `show-text` 不能同时为真(`show-score`优先) | boolean    | —      | false                                    |
| `texts`           | 辅助文字数组                                                                 | array      | —      | ['极差', '失望', '一般', '满意', '惊喜'] |

### Events

| 事件名称 | 说明           | 回调参数     |
| -------- | -------------- | ------------ |
| `change` | 分值改变时触发 | 改变后的分值 |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>
