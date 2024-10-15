---
title: MultipleSelect 下拉多选
---

# MultipleSelect 下拉多选

下拉多选

### 基础用法

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value1" :option="option1"></zrx-multiple-select>
    </ClientOnly>
</div>

::: details 示例代码

```html
<zrx-multiple-select v-model="value1" :option="option1"></zrx-multiple-select>
<script>
export default {
    data() {
        return {
            value1: [2, 3],
            option1: [
                {
                    label: '土豆',
                    value: 1
                },
                {
                    label: '西蓝花',
                    value: 2
                },
                {
                    label: '蓬蒿',
                    value: 3
                },
                {
                    label: '油麦菜',
                    value: 4
                },
                {
                    label: '番茄',
                    value: 5
                }
            ]
        }
    }
}
</script>
```

:::

### 单选

多选时显示勾选框，单选时不显示勾选框

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value6" :option="option1" :multiple="false"></zrx-multiple-select>
    </ClientOnly>
</div>

::: tip
多选时，v-model/value绑定数组类型值。单选时，可为字符串/数字或数组类型。为保持含义明确，一般不推荐单选时绑定数组类型值。
:::

::: details 示例代码

```html
<zrx-multiple-select v-model="value6" :option="option1" :multiple="false"></zrx-multiple-select>
<script>
export default {
    data() {
        return {
            value6: '',
            option1: [
                {
                    label: '土豆',
                    value: 1
                },
                {
                    label: '西蓝花',
                    value: 2
                },
                {
                    label: '蓬蒿',
                    value: 3
                },
                {
                    label: '油麦菜',
                    value: 4
                },
                {
                    label: '番茄',
                    value: 5
                }
            ]
        }
    }
}
</script>
```

:::

### 禁用

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value1" :option="option1" disabled></zrx-multiple-select>
    </ClientOnly>
</div>

::: details 示例代码

```html
<zrx-multiple-select v-model="value1" :option="option1" disabled></zrx-multiple-select>
<script>
export default {
    data() {
        return {
            value1: [2, 3],
            option1: [
                {
                    label: '土豆',
                    value: 1
                },
                {
                    label: '西蓝花',
                    value: 2
                },
                {
                    label: '蓬蒿',
                    value: 3
                },
                {
                    label: '油麦菜',
                    value: 4
                },
                {
                    label: '番茄',
                    value: 5
                }
            ]
        }
    }
}
</script>
```

:::

### 文本形式展示

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value2" :option="option1" text-show-style="text"></zrx-multiple-select>
    </ClientOnly>
</div>

::: tip
默认情况下，多选模式时以**标签**形式展示，单选时以**文本**展示。设置`textShowStyle`可指定展示形式。
:::

::: details 示例代码

```html
<zrx-multiple-select v-model="value2" :option="option1" text-show-style="text"></zrx-multiple-select>
<script>
export default {
    data() {
        return {
            value2: [2, 3, 5],
            option1: [
                {
                    label: '土豆',
                    value: 1
                },
                {
                    label: '西蓝花',
                    value: 2
                },
                {
                    label: '蓬蒿',
                    value: 3
                },
                {
                    label: '油麦菜',
                    value: 4
                },
                {
                    label: '番茄',
                    value: 5
                }
            ]
        }
    }
}
</script>
```

:::

### 可搜索

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value3" :option="option1" filterable :filter-method="filtering"></zrx-multiple-select>
    </ClientOnly>
</div>

::: tip
添加`filterable`可启用搜索。组件内置的搜索函数会寻找与`label`属性匹配的结果。若希望自定义搜索，向`filter-method`传入搜索方法即可。
下面的示例中实现了模糊搜索：
:::

::: details 示例代码

```html
<zrx-multiple-select v-model="value3" :option="option1" filterable :filter-method="filtering"></zrx-multiple-select>
<script>
export default {
    data() {
        return {
            value3: [],
            option1: [
                {
                    label: '土豆',
                    value: 1
                },
                {
                    label: '西蓝花',
                    value: 2
                },
                {
                    label: '蓬蒿',
                    value: 3
                },
                {
                    label: '油麦菜',
                    value: 4
                },
                {
                    label: '番茄',
                    value: 5
                }
            ]
        }
    },
    methods: {
        filtering(v, opt) {
            const reg = new RegExp(`${v}`, 'gi')
            return reg.test(opt.label)
        }
    }
}
</script>

```

:::

### 远程搜索

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value4" :option="option2" filterable remote :remote-method="remoteFiltering" :loading="loading"></zrx-multiple-select>
    </ClientOnly>
</div>

::: tip
将`filterable`和`remote`置为 true，同时向`remote-method`传入一个函数。该函数在输入值变化时调用。
:::

::: details 示例代码

```html

<script>
export default {
    data() {
        return {
            value4: [],
            option2: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"]
        }
    },
    methods: {
        remoteFiltering(query) {
            if (query !== '') {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.option2 = this.list.filter(item => {
                        return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
                    })
                }, 200)
            } else {
                this.option2 = []
            }
        }
    },
    computed: {
        list() {
            return this.states.map(item => {
                return { value: `value:${item}`, label: `label:${item}` };
            })
        }
    }
}
</script>

```

:::

### 懒加载

#### 通过内置方法

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value5" :option="option3" filterable lazy :lazyLoad="onLazyLoad" :duration="2"></zrx-multiple-select>
    </ClientOnly>
</div>

#### 通过勾子

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value8" :option="option4" filterable lazy @onLazyLoad="handleLazyLoad"></zrx-multiple-select>
    </ClientOnly>
</div>

::: details 示例代码

```html
<!-- 通过内置方法 -->
<zrx-multiple-select v-model="value5" :option="option3" filterable lazy :lazyLoad="onLazyLoad"></zrx-multiple-select>
<!-- 通过勾子 -->
<zrx-multiple-select v-model="value8" :option="option4" filterable lazy @onLazyLoad="handleLazyLoad"></zrx-multiple-select>
<script>
const vegetables = ['土豆', '西蓝花', '蓬蒿', '油麦菜', '番茄', '洋葱', '辣椒', '甘薯', '蘑菇', '南瓜', '茄子', '苦瓜', '蒜苗', '青菜', '紫甘蓝', '马蹄莲', '藕', '山药', '平菇', '芹菜', '豆芽', '东瓜', '香菇', '包心菜', '莴苣', '葱', '豆角', '荷兰豆', '甜豆', '芦笋', '青椒', '尖椒'].map((t, i) => {
    return {
        label: t,
        value: i + 1
    }
})
export default {
    data() {
        return {
            value5: [2],
            value8: [3],
            option3: [...vegetables.slice(0, 8)],
            option4: [...vegetables.slice(0, 8)]
        }
    },
    methods: {
        onLazyLoad(l, resolve) {
            if (l < 32) {
                return setTimeout(() => resolve(vegetables.slice(l, l + 8)), 700)
            }
            resolve(false)
        },
        handleLazyLoad(l) {
            if (l < 32) {
                const newSlice = vegetables.slice(l, l + 8)
                this.option4.push(...newSlice)
            }
        }
    }
}
</script>
```

:::

### 懒加载时回显

回显时，通过value反查下拉项

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value9" :option="option5" filterable lazy :lazyLoad="onLazyLoad"></zrx-multiple-select>
    </ClientOnly>
</div>

::: details 示例代码

```html
<zrx-multiple-select v-model="value9" :option="option5" filterable lazy :lazyLoad="onLazyLoad"></zrx-multiple-select>
<script>
const vegetables = ['土豆', '西蓝花', '蓬蒿', '油麦菜', '番茄', '洋葱', '辣椒', '甘薯', '蘑菇', '南瓜', '茄子', '苦瓜', '蒜苗', '青菜', '紫甘蓝', '马蹄莲', '藕', '山药', '平菇', '芹菜', '豆芽', '东瓜', '香菇', '包心菜', '莴苣', '葱', '豆角', '荷兰豆', '甜豆', '芦笋', '青椒', '尖椒'].map((t, i) => {
    return {
        label: t,
        value: i + 1
    }
})
export default {
    data() {
        return {
            value9: [11, 12, 13],
            option5: [...vegetables.slice(0, 8)]
        }
    },
    methods: {
        onLazyLoad(l, resolve) {
            if (l < 32) {
                return setTimeout(() => resolve(vegetables.slice(l, l + 8)), 700)
            }
            resolve(false)
        }
    },
    created() {
        this.option5.unshift(...vegetables.slice(10, 13))
    }
}
</script>
```

:::

### 更改下拉框位置

将下拉框插入至组件内

<div class="m-example">
    <ClientOnly>
        <zrx-multiple-select v-model="value7" :option="option1" filterable :popper-append-to-body="false"></zrx-multiple-select>
    </ClientOnly>
</div>

::: tip
下拉框默认插入至body。某些场景下（如不希望一开始渲染所有下拉框），可能想要将下拉框插入至组件或其他位置。
此时可设置`popper-append-to`属性指定元素（通常是可滚动的元素，注意该元素需设置"relative"定位）。
若不指定`popper-append-to`，且`popper-append-to-body`为 false，则将其插入组件根元素上。
:::

::: details 示例代码

```html
<zrx-multiple-select v-model="value7" :option="option1" filterable :popper-append-to-body="false"></zrx-multiple-select>
<script>
export default {
    data() {
        return {
            value7: [],
            option1: [
                {
                    label: '土豆',
                    value: 1
                },
                {
                    label: '西蓝花',
                    value: 2
                },
                {
                    label: '蓬蒿',
                    value: 3
                },
                {
                    label: '油麦菜',
                    value: 4
                },
                {
                    label: '番茄',
                    value: 5
                }
            ]
        }
    }
}
</script>

```

:::

<script>
const vegetables = ['土豆', '西蓝花', '蓬蒿', '油麦菜', '番茄', '洋葱', '辣椒', '甘薯', '蘑菇', '南瓜', '茄子', '苦瓜', '蒜苗', '青菜', '紫甘蓝', '马蹄莲', '藕', '山药', '平菇', '芹菜', '豆芽', '东瓜', '香菇', '包心菜', '莴苣', '葱', '豆角', '荷兰豆', '甜豆', '芦笋', '青椒', '尖椒'].map((t, i) => {
    return {
        label: t,
        value: i + 1
    }
})
export default {
    data() {
        return {
            value1: [2, 4],
            value2: [2, 3, 5],
            value3: [],
            value4: [],
            value5: [2],
            value6: '',
            value7: [],
            value8: [3],
            value9: [11, 12, 13],
            option1: [
                {
                    label: '土豆',
                    value: 1
                },
                {
                    label: '西蓝花',
                    value: 2
                },
                {
                    label: '蓬蒿',
                    value: 3
                },
                {
                    label: '油麦菜',
                    value: 4
                },
                {
                    label: '番茄',
                    value: 5
                }
            ],
            option2: [],
            option3: [...vegetables.slice(0, 8)],
            option4: [...vegetables.slice(0, 8)],
            option5: [...vegetables.slice(0, 8)],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona",
            "Arkansas", "California", "Colorado",
            "Connecticut", "Delaware", "Florida",
            "Georgia", "Hawaii", "Idaho", "Illinois",
            "Indiana", "Iowa", "Kansas", "Kentucky",
            "Louisiana", "Maine", "Maryland",
            "Massachusetts", "Michigan", "Minnesota",
            "Mississippi", "Missouri", "Montana",
            "Nebraska", "Nevada", "New Hampshire",
            "New Jersey", "New Mexico", "New York",
            "North Carolina", "North Dakota", "Ohio",
            "Oklahoma", "Oregon", "Pennsylvania",
            "Rhode Island", "South Carolina",
            "South Dakota", "Tennessee", "Texas",
            "Utah", "Vermont", "Virginia",
            "Washington", "West Virginia", "Wisconsin",
            "Wyoming"]
        }
    },
    methods: {
        filtering(v, opt) {
            const reg = new RegExp(`${v}`, 'gi')
            return reg.test(opt.label)
        },
        remoteFiltering(query) {
            if (query !== '') {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.option2 = this.list.filter(item => {
                        return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1
                    })
                }, 200)
            } else {
                this.option2 = []
            }
        },
        onLazyLoad(l, resolve) {
            if (l < 32) {
                return setTimeout(() => resolve(vegetables.slice(l, l + 8)), 700)
            }
            resolve(false)
        },
        handleLazyLoad(l) {
            if (l < 32) {
                const newSlice = vegetables.slice(l, l + 8)
                this.option4.push(...newSlice)
            }
        }
    },
    created() {
        this.option5.unshift(...vegetables.slice(10, 13))
    },
    computed: {
        list() {
            return this.states.map(item => {
                return { value: `value:${item}`, label: `label:${item}` };
            })
        }
    }
}
</script>

<style>
.zrx-multiple-select {
    width: 220px;
}
</style>

### Attributes

| 参数                    | 说明                                                                                         | 类型                                                                                     | 可选值                      | 默认值           |
| ----------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------- | ---------------- |
| `option`                | 下拉列表                                                                                     | Array                                                                                    | —                           | []               |
| `prop`                  | 字段配置                                                                                     | Object                                                                                   | 字段配置参见[Props](#props) | —                |
| `value/v-model`         | 选中的key值列表。多选时必须为数组。                                                          | Array,String,Number                                                                      | —                           | []               |
| `disabled`              | 是否禁用                                                                                     | Boolean                                                                                  | true, false                 | false            |
| `clearable`             | 是否显示清空按钮                                                                             | Boolean                                                                                  | true, false                 | false            |
| `placeholder`           | 空值占位符                                                                                   | String                                                                                   | —                           | 请选择           |
| `filter-placeholder`    | 搜索栏空值符                                                                                 | String                                                                                   | —                           | 请输入关键字搜索 |
| `popper-append-to-body` | 是否将下拉框添加至body下                                                                     | Boolean                                                                                  | true, false                 | true             |
| `text-show-style`       | 选中项的显示形式                                                                             | String,Number                                                                            | tag, text                   | unset            |
| `filterable`            | 是否可搜索                                                                                   | Boolean                                                                                  | true, false                 | false            |
| `multiple`              | 是否多选                                                                                     | Boolean                                                                                  | true, false                 | true             |
| `popper-append-to`      | 下拉框插入的父元素，若父元素滚动，需设置 `position: relative`。优先于`popper-append-to-body` | String, HTMLElement                                                                      | —                           | unset            |
| `filter-method`         | 过滤方法                                                                                     | Function                                                                                 | —                           | —                |
| `loading`               | 是否正在加载下拉项                                                                           | Boolean                                                                                  | true, false                 | false            |
| `lazy`                  | 是否懒加载                                                                                   | Boolean                                                                                  | true, false                 | false            |
| `lazy-load`             | 懒加载函数                                                                                   | function(length, resolve)，length为当前下拉项长度，resolve为数据加载完成的回调(必须调用) | —                           | —                |
| `filter-interval`       | 经过防抖的搜索hook触发时间间隔                                                               | Number, String                                                                           | 200                         |
| `remote`                | 是否远程搜索                                                                                 | Boolean                                                                                  | true, false                 | false            |
| `remote-method`         | 是否远程搜索                                                                                 | function(text)，text为当前搜索值                                                         | —                           | —                |
| `duration`              | 懒加载时进度条预设时长                                                                       | Number(秒)                                                                               | —                           | 5                |

### Props

| 参数       | 说明           | 类型   | 可选值 | 默认值   |
| ---------- | -------------- | ------ | ------ | -------- |
| `label`    | 下拉项名称字段 | String | —      | label    |
| `value`    | 下拉项值字段   | String | —      | value    |
| `disabled` | 下拉项禁用字段 | String | —      | disabled |

### Methods

| 方法名称     | 说明           | 参数 |
| ------------ | -------------- | ---- |
| `toggleMenu` | 切换下拉框显隐 | —    |
| `reset`      | 清空已选项     | —    |

### Events

| 事件名称         | 说明                         | 回调参数       |
| ---------------- | ---------------------------- | -------------- |
| `change`         | 节点选中状态发生变化时的回调 | 已选的数组     |
| `onFocusin`      | 组件获得焦点时的回调         | —              |
| `onFocusout`     | 组件失去焦点时的回调         | —              |
| `onLazyLoad`     | 懒加载触发时的回调           | 当前下拉项长度 |
| `visible-change` | 下拉框显示/隐藏时的回调      | 是否显示       |
| `onFilter`       | 搜索栏输入时的回调           | 搜索的文本     |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>
