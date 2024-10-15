---
title: BarChart 柱状图
---

# BarChart 柱状图

一种横向的柱状图

### 基础用法

#### 分行式横向柱状图带数值

<div class="m-example">
    <div class="container">
        <zrx-bar-chart :echartData="echartData"></zrx-bar-chart>
    </div>
</div>

#### 横向柱状图带数值

<div class="m-example">
    <div class="container">
        <zrx-bar-chart isHorizontal :echartData="echartData"></zrx-bar-chart>
    </div>
</div>

::: details 示例代码

```html
<zrx-bar-chart :echartData="echartData"></zrx-bar-chart>

<zrx-bar-chart isHorizontal :echartData="echartData"></zrx-bar-chart>

<script>
export default {
    data() {
        return {
            echartData: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局',
                    '市生态环境县委分局',
                    '市生态环境县委分局'
                ],
                seriesData: [2440, 1000, 600, 400, 300, 200, 100]
            }
        }
    }
}
</script>
<style scoped lang="scss">
.container {
    width: 600px;
    height: 300px;
}
</style>
```

:::

### x轴显示的段数

<div class="m-example">
    <div class="container">
        <zrx-bar-chart :echartData="echartData" :xAxisNum="7"></zrx-bar-chart>
    </div>
</div>

::: details 示例代码

```html
<zrx-bar-chart :echartData="echartData" :xAxisNum="7"></zrx-bar-chart>
<script>
export default {
    data() {
        return {
            echartData: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局',
                    '市生态环境县委分局',
                    '市生态环境县委分局'
                ],
                seriesData: [2440, 1000, 600, 400, 300, 200, 100]
            }
        }
    }
}
</script>
<style scoped lang="scss">
.container {
    width: 600px;
    height: 300px;
}
</style>
```

:::

### 前几条横柱高亮颜色

<div class="m-example">
    <div class="container">
        <zrx-bar-chart :echartData="echartData" :lightNum="3"></zrx-bar-chart>
    </div>
</div>

::: details 示例代码

```html
<zrx-bar-chart :echartData="echartData" :lightNum="3"></zrx-bar-chart>
<script>
export default {
    data() {
        return {
            echartData: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局',
                    '市生态环境县委分局',
                    '市生态环境县委分局'
                ],
                seriesData: [2440, 1000, 600, 400, 300, 200, 100]
            }
        }
    }
}
</script>
<style scoped lang="scss">
.container {
    width: 600px;
    height: 300px;
}
</style>
```

:::

### 页面固定展示几项数据

<div class="m-example">
    <div class="container">
        <zrx-bar-chart :echartData="echartDataOne" :itemNum="5"></zrx-bar-chart>
    </div>
</div>

::: tip
itemNum, 数字类型,默认不传，按每一项的高度itemHeight占据页面，超出页面可以滚动；传入的数据需要过滤成itemNum的条数
:::

::: details 示例代码

```html
<zrx-bar-chart :echartData="echartDataOne" :itemNum="5"></zrx-bar-chart>
<script>
export default {
    data() {
        return {
            echartDataOne: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局'
                ],
                seriesData: [2440, 1000, 600, 400, 300]
            }
        }
    }
}
</script>
<style scoped lang="scss">
.container {
    width: 600px;
    height: 300px;
}
</style>
```

:::

<script>
export default {
    data() {
        return {
            echartData: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局',
                    '市生态环境县委分局',
                    '市生态环境县委分局'
                ],
                seriesData: [2440, 1000, 600, 400, 300, 200, 100]
            },
            echartDataOne: {
                xAxisData: [
                    '县发改局',
                    '县教育体育局',
                    '县科学技术局县科学技术局县科学技术技术局县科学技术',
                    '县文化旅游广电局',
                    '县审计局'
                ],
                seriesData: [2440, 1000, 600, 400, 300]
            }
        }
    }
}
</script>

<style scoped lang="scss">
.container {
    width: 600px;
    height: 300px;
}
</style>

#### 样式变量

| 变量名                  |                     默认值 | 说明 |
| ----------------------- | -------------------------: | ---: |
| $--pro-bar-light        |                   $primary |      |
| $--pro-text             | rgba(var(--nav-text), 0.7) |      |
| $--pro-bar-gray         |                    #b8bed5 |      |

### Attributes

| 参数           | 说明                 | 类型    | 可选值     | 默认值 |
| -------------- | -------------------- | ------- | ---------- | ------ |
| `echartData`   | 数据                 | object  | 参见props  | —     |
| `isHorizontal` | 文字和柱状图左右排布 | Boolean | true/false | false  |
| `xAxisNum`     | x轴显示几段          | number  | —         | 5      |
| `lightNum`     | 前几条横柱高亮颜色   | Number  | —         | 1      |
| `itemHeight`   | 每一项的高度         | Number  | —         | 48     |
| `itemNum`      | 页面固定展示几项数据 | Number  | —         | 0      |

### props

| 参数         | 说明                       | 类型  | 可选值 | 默认值     |
| ------------ | -------------------------- | ----- | ------ | ---------- |
| `xAxisData`  | 每个柱状图的名称组成的数组 | array | —     | xAxisData  |
| `seriesData` | 每个柱状图数据值组成的数组 | array | —     | seriesData |

<div>
    <contributor :maintainer="['wt']" :members="['wt']"></contributor>
</div>
