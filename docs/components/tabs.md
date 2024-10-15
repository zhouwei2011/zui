---
title: Tabs 标签页
---

# Tabs 标签页

分隔内容上有关联但属于不同类别的数据集合

### 模式一

<div class="m-example">
    <el-tabs v-model="activeName" stretch :style="`--tabsNumber: 3`">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third" disabled></el-tab-pane>
    </el-tabs>
</div>

::: details 示例代码

```html
<el-tabs v-model="activeName" stretch>
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
    <el-tab-pane label="角色管理" name="third" disabled></el-tab-pane>
</el-tabs>
<script>
    export default {
        data() {
            return {
                activeName: 'second'
            }
        }
    }
</script>
```

:::

### 模式二

<div class="m-example">
    <el-tabs v-model="activeName1" stretch border-position="top">
        <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        <el-tab-pane label="角色管理" name="third" disabled></el-tab-pane>
    </el-tabs>
</div>

::: details 示例代码

```html
<el-tabs v-model="activeName1" stretch border-position="top">
    <el-tab-pane label="用户管理" name="first"></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"></el-tab-pane>
    <el-tab-pane label="角色管理" name="third" disabled></el-tab-pane>
</el-tabs>
<script>
    export default {
        data() {
            return {
                activeName1: 'first'
            }
        }
    }
</script>
```

:::

### 模式三

<div class="m-example">
    <el-tabs v-model="activeName2" stretch :style="`--tabsNumber: 4`">
        <el-tab-pane
            :key="tab.name"
            :name="tab.name"
            :label="tab.label"
            v-for="tab in tabList"
            :disabled="tab.disabled"
        ></el-tab-pane>
    </el-tabs>
</div>

::: details 示例代码

```html
<el-tabs v-model="activeName2" stretch>
    <el-tab-pane :key="tab.name" :name="tab.name" :label="tab.label" v-for="tab in tabList" :disabled="tab.disabled"></el-tab-pane>
</el-tabs>
<script>
    export default {
        data() {
            return {
                activeName2: '0',
                tabList: Array.from({ length: 28 }, (v, i) => {
                    return {
                        name: i + '',
                        disabled: i == 2,
                        label: `标签页${i + 1}`
                    }
                })
            }
        }
    }
</script>
```

:::

### 模式四

<div class="m-example">
    <el-tabs v-model="activeName3" stretch type="card">
        <el-tab-pane label="Tab1" name="first"></el-tab-pane>
        <el-tab-pane label="Tab22222222222222" name="second"></el-tab-pane>
        <el-tab-pane label="每项宽度可自适应,最大宽度192px，超出时省略" name="third" ></el-tab-pane>
        <el-tab-pane label="Tab4" name="fourth" disabled></el-tab-pane>
        </el-tab-pane>
    </el-tabs>
</div>

::: details 示例代码

```html
<el-tabs v-model="activeName3" stretch type="card">
    <el-tab-pane label="Tab1" name="first"></el-tab-pane>
    <el-tab-pane label="Tab22222222222222" name="second"></el-tab-pane>
    <el-tab-pane label="每项宽度可自适应,最大宽度192px，超出时省略" name="third" ></el-tab-pane>
    <el-tab-pane label="Tab4" name="fourth" disabled></el-tab-pane>
    </el-tab-pane>
</el-tabs>
<script>
export default {
    data() {
        return {
            activeName3: '1'
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.io/#/zh-CN/component/tabs](https://element.eleme.io/#/zh-CN/component/tabs)

<!-- ### 样式变量

| 变量名       | 默认值 |                                                                                                         说明 |
| ------------ | -----: | -----------------------------------------------------------------------------------------------------------: |
| --tabsNumber |      3 | UI 标准一个 tab 的宽度是 106px，想显示几个就输入几个，大于 tab 数量会拉长，小于 tab 数量会出现左右滑动的箭头 | -->

### Tabs Attributes

| 参数              | 说明                                                                        | 类型                                | 可选值                | 默认值                |
| ----------------- | --------------------------------------------------------------------------- | ----------------------------------- | --------------------- | --------------------- |
| `value / v-model` | 绑定值，选中选项卡的 `name`                                                 | string                              | —                     | 第一个选项卡的 `name` |
| `type`            | 风格类型                                                                    | string                              | card/border-card      | —                     |
| `closable`        | 标签是否可关闭                                                              | boolean                             | —                     | false                 |
| `addable`         | 标签是否可增加                                                              | boolean                             | —                     | false                 |
| `editable`        | 标签是否同时可增加和关闭                                                    | boolean                             | —                     | false                 |
| `tab-position`    | 选项卡所在位置                                                              | string                              | top/right/bottom/left | top                   |
| `stretch`         | 标签的宽度是否自撑开                                                        | boolean                             | -                     | false                 |
| `before-leave`    | 切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。 | Function(activeName, oldActiveName) | —                     | —                     |

### Tabs Events

| 事件名称     | 说明                                    | 回调参数              |
| ------------ | --------------------------------------- | --------------------- |
| `tab-click`  | tab 被选中时触发                        | 被选中的标签 tab 实例 |
| `tab-remove` | 点击 tab 移除按钮后触发                 | 被删除的标签的 `name` |
| `tab-add`    | 点击 tabs 的新增按钮后触发              | —                     |
| `edit`       | 点击 tabs 的新增按钮或 tab 被关闭后触发 | (targetName, action)  |

### Tab-pane Attributes

| 参数       | 说明                                                | 类型    | 可选值 | 默认值                                                |
| ---------- | --------------------------------------------------- | ------- | ------ | ----------------------------------------------------- |
| `label`    | 选项卡标题                                          | string  | —      | —                                                     |
| `disabled` | 是否禁用                                            | boolean | —      | false                                                 |
| `name`     | 与选项卡绑定值 `value` 对应的标识符，表示选项卡别名 | string  | —      | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1' |
| `closable` | 标签是否可关闭                                      | boolean | —      | false                                                 |
| `lazy`     | 标签是否延迟渲染                                    | boolean | —      | false                                                 |

<div>
    <contributor :maintainer="['zxl']" :members="['zxl', 'gbb', 'agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            activeName: 'second',
            activeName1: 'first',
            activeName2: '0',
            activeName3: '1',
            tabList: Array.from({length: 28}, (v, i) => {
                return {
                    name: i + '',
                    disabled: i == 2,
                    label: `标签页${i + 1}`
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
::v-deep .el-tabs__header {
    margin-bottom: 0;
}
::v-deep .m-example {
    display: block;
}
</style>
