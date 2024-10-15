---
title: Loading 加载
---

# Loading

加载数据时显示动效

### 基础用法

<div class="m-example">
    <el-button type="primary" @click="loading = true">加载中</el-button>
    <el-button @click="loading = false">加载结束</el-button>
    <div class="bar" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="transparent" style=";height: 200px;"></div>
</div>

::: details 示例代码

```html

<el-button type="primary" @click="loading = true">加载中</el-button>
<el-button @click="loading = false">加载结束</el-button>
<div class="bar" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="transparent" style="height: 200px;"></div>
<script>
export default {
    data() {
        return {
            loading: false
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
            loading: false
        }
    }
}
</script>

### 链接

[https://element.eleme.io/#/zh-CN/component/loading](https://element.eleme.io/#/zh-CN/component/loading)

### options

| 参数          | 说明                                                                                                                                      | 类型          | 可选值 | 默认值        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------- | ------ | ------------- |
| `target`      | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入`document.querySelector`以获取到对应 DOM 节点 | object/string | —      | document.body |
| `body`        | 同 `v-loading` 指令中的 `body` 修饰符                                                                                                     | boolean       | —      | false         |
| `fullscreen`  | 同 `v-loading` 指令中的 `fullscreen` 修饰符                                                                                               | boolean       | —      | true          |
| `lock`        | 同 `v-loading` 指令中的 `lock` 修饰符                                                                                                     | boolean       | —      | false         |
| `text`        | 显示在加载图标下方的加载文案                                                                                                              | string        | —      | —             |
| `spinner`     | 自定义加载图标类名                                                                                                                        | string        | —      | —             |
| `background`  | 遮罩背景色                                                                                                                                | string        | —      | —             |
| `customClass` | Loading 的自定义类名                                                                                                                      | string        | —      | —             |

<div>
    <contributor :maintainer="['agua']" :members="['cmd', 'agua']"></contributor>
</div>
