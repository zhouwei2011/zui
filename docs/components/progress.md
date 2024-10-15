---
title: Progress 进度条
---

# Progress 进度条

用于页面切换或加载数据时显示进度

### 基础用法

<div class="m-demo-row">
    <p class="m-row"><el-button type="primary" @click="progress1 = true">加载</el-button></p>
    <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress="progress1">
        <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
    </el-table>
</div>

::: tip
Progress 提供了两种调用方法：指令和标签。对于指令 v-progress，需绑定 Boolean 值
:::

::: details 示例代码

```html
<p class="m-row"><el-button type="primary" @click="progress1 = true">加载</el-button></p>
<el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress="progress1">
    <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
    <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
    <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
    <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
</el-table>
<script>
    export default {
        data() {
            return {
                progress1: false,
                table1: [
                    {
                        id: '1',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '2',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '3',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '4',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    }
                ]
            }
        }
    }
</script>
```

:::

### 添加至 body

<div class="m-demo-row">
    <p class="m-row"><el-button type="primary" @click="progress2 = true">加载</el-button></p>
    <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress.body="progress2">
        <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
    </el-table>
</div>

::: tip
指令式调用默认将进度条添加至指令元素，添加 body 修饰符可将进度条插入至 body
:::

::: details 示例代码

```html
<p class="m-row"><el-button type="primary" @click="progress2 = true">加载</el-button></p>
<el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress.body="progress2">
    <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
    <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
    <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
    <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
</el-table>
<script>
    export default {
        data() {
            return {
                progress2: false,
                table1: [
                    {
                        id: '1',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '2',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '3',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '4',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    }
                ]
            }
        }
    }
</script>
```

:::

### 直接操作

<div class="m-demo-row">
    <div class="progress-bar" v-progress="progress3" ref="progressBar"></div>
    <div class="flex-bar">
        <el-button type="primary" @click="onStart">启动/继续</el-button>
        <el-button @click="onPause">暂停</el-button>
        <el-button @click="onFinish">结束</el-button>
        <el-button type="danger" @click="onFail">失败</el-button>
    </div>
</div>

::: tip
通过节点绑定的 vm 对象直接调用 progress 实例的方法，操作进度条状态
:::

::: details 示例代码

```html
<div class="progress-bar" v-progress="progress3" ref="progressBar"></div>
<div class="flex-bar">
    <el-button type="primary" @click="onStart">启动/继续</el-button>
    <el-button @click="onPause">暂停</el-button>
    <el-button @click="onFinish">结束</el-button>
    <el-button type="danger" @click="onFail">失败</el-button>
</div>
<script>
    export default {
        data() {
            return {
                progress3: false
            }
        },
        methods: {
            onStart() {
                if (!this.progress3) {
                    this.progress3 = true
                } else {
                    this.$refs.progressBar.zrxProgress.start()
                }
            },
            onPause() {
                this.$refs.progressBar.zrxProgress.pause()
            },
            onFinish() {
                this.progress3 = false
            },
            onFail() {
                this.$refs.progressBar.zrxProgress.fail().then(() => {
                    this.progress3 = false
                })
            }
        }
    }
</script>
```

:::

### 设置时长

设置 progress 持续时长

<div class="m-demo-row">
    <div class="gallery" v-progress.bottom="progress4" style="padding-bottom: 16px; position: relative">
        <p>15s</p>
    </div>
    <div class="gallery" v-progress:[30].bottom="progress4" style="padding-bottom: 16px; position: relative">
        <p>30s</p>
    </div>
    <div class="m-row" style="width: 600px; margin-top: 16px"><el-button type="primary" @click="progress4 = true">加载</el-button></div>
</div>

::: tip
默认持续时间 15s，可通过指令参数更改时长
:::

::: details 示例代码

```html
<div class="gallery" v-progress.bottom="progress4">
    <p>15s</p>
</div>
<div class="gallery" v-progress:[30].bottom="progress4">
    <p>30s</p>
</div>
<div class="m-row"><el-button type="primary" @click="progress4 = true">加载</el-button></div>
<script>
export default {
    data() {
        return {
            progress4: false
        }
    }
}
<script>
```

:::

### 更改背景

可定义背景颜色，默认透明

<div class="m-demo-row">
    <div class="m-row"><el-button type="primary" @click="progress5 = true">加载</el-button></div>
    <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress="progress5" zrx-progress-background="rgba(0,0,0,0.5)">
        <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
        <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
        <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
        <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
    </el-table>
</div>

::: details 示例代码

```html
<div class="m-row"><el-button type="primary" @click="progress5 = true">加载</el-button></div>
<el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress="progress5" zrx-progress-background="rgba(0,0,0,0.5)">
    <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
    <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
    <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
    <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
</el-table>
<script>
    export default {
        data() {
            return {
                progress5: false,
                table1: [
                    {
                        id: '1',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '2',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '3',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    },
                    {
                        id: '4',
                        date: '2022-9-22 14:27:22',
                        name: '王腾飞',
                        address: '上海市静安区南京路1258号'
                    }
                ]
            }
        }
    }
</script>
```

:::

### 选择位置

<div class="m-demo-row">
    <div class="gallery" style="width: 200px; margin-right: 24px">
        <div class="progress-box" v-progress:[8].right="progress6" zrx-progress-background="rgba(0,0,0,0.1)">出现在右侧</div>
        <el-button type="primary" @click="progress6 = true">加载</el-button>
    </div>
    <div class="gallery" style="width: 200px; margin-right: 24px">
        <div class="progress-box" v-progress:[8].bottom="progress7" zrx-progress-background="rgba(0,0,0,0.1)">出现在下侧</div>
        <el-button type="primary" @click="progress7 = true">加载</el-button>
    </div>
    <div class="gallery" style="width: 200px; margin-right: 24px">
        <div class="progress-box" v-progress:[8].left="progress8" zrx-progress-background="rgba(0,0,0,0.1)">出现在左侧</div>
        <el-button type="primary" @click="progress8 = true">加载</el-button>
    </div>
</div>

::: tip
Progress 提供了 top, right, bottom, left 四种展示位置，默认进度条在顶部
:::

::: details 示例代码

```html
<div class="gallery">
    <div class="progress-box" v-progress:[8].right="progress6" zrx-progress-background="rgba(0,0,0,0.1)">出现在右侧</div>
    <el-button type="primary" @click="progress6 = true">加载</el-button>
</div>
<div class="gallery">
    <div class="progress-box" v-progress:[8].bottom="progress7" zrx-progress-background="rgba(0,0,0,0.1)">出现在下侧</div>
    <el-button type="primary" @click="progress7 = true">加载</el-button>
</div>
<div class="gallery">
    <div class="progress-box" v-progress:[8].left="progress8" zrx-progress-background="rgba(0,0,0,0.1)">出现在左侧</div>
    <el-button type="primary" @click="progress8 = true">加载</el-button>
</div>
<script>
    export default {
        data() {
            return {
                progress6: false,
                progress7: false,
                progress8: false
            }
        }
    }
</script>
```

:::

### 标签式调用

通过标签式的调用

<div class="m-demo-row">
    <div class="gallery" style="width: 500px">
        <zrx-tab-bar v-model="tab1.current" :tabs="tab1.menu" @change="onTabbing"></zrx-tab-bar>
        <div class="progress-bar" style="margin: 3px 0"><ClientOnly><zrx-progress :show="progress9 != 0"></zrx-progress></ClientOnly></div>
        <zrx-tab-content :value="tab1.current" shift-mode="v-if">
            <span class="text-content" v-for="n in tab1.menu" :key="n.value">{{ tab1.text }}</span>
        </zrx-tab-content>
    </div>
</div>

::: tip
通过标签调用时，指令形式传入的所有配置项都可以在 props: option 中设置
:::

::: details 示例代码

```html
<div class="gallery">
    <zrx-tab-bar v-model="tab1.current" :tabs="tab1.menu" @change="onTabbing"></zrx-tab-bar>
    <div class="progress-bar"><zrx-progress :show="progress9 != 0"></zrx-progress></div>
    <zrx-tab-content :value="tab1.current" shift-mode="v-if">
        <span class="text-content" v-for="n in tab1.menu" :key="n.value">{{ tab1.text }}</span>
    </zrx-tab-content>
</div>
<script>
    export default {
        data() {
            return {
                progress9: 0,
                tab1: {
                    current: '1',
                    text: '应用中心',
                    menu: [
                        {
                            label: '应用中心',
                            value: '1'
                        },
                        {
                            label: '用户中心',
                            value: '2'
                        },
                        {
                            label: '应用管理',
                            value: '3'
                        }
                    ]
                }
            }
        }
    }
</script>
```

:::

### 自定义

Progress 提供了丰富的自定义配置，见[Props](#props)

#### 指令形式配置

<div class="m-demo-row">
    <div class="m-row">
        <div class="progress-bar" v-progress="progress10" ref="progress10"></div>
        <el-button type="primary" @click="setExample1">加载</el-button>
    </div>
</div>

::: tip
安装 Progress 时，通过 Vue.use(Progress, option) 传入自定义配置参数，该配置是全局生效的。若要更改单个实例的配置，可通过引用 el.zrxProgress 调用 setOption(option)。示例更改了颜色和边距
:::

::: details 示例代码

```html
<div class="progress-bar" v-progress="progress10" ref="progress10"></div>
<el-button type="primary" @click="setExample1">加载</el-button>
<script>
    export default {
        data() {
            return {
                progress10: false
            }
        },
        methods: {
            setExample1() {
                this.$refs.progress10.zrxProgress.setOption({
                    color: '#1BBE8C',
                    marginEdage: '5px'
                })
                this.progress10 = true
            }
        }
    }
</script>
```

:::

#### 标签形式配置

<div class="m-demo-row">
    <div class="m-row">
        <div class="progress-bar" style="height: 6px"><ClientOnly><zrx-progress :show="progress11" :option="option1"></zrx-progress></ClientOnly></div>
        <el-button type="primary" @click="progress11 = true">加载</el-button>
    </div>
</div>

::: tip
通过组件的 option 属性传入配置。示例更改了背景色和条厚度
:::

::: details 示例代码

```html
<div class="progress-bar" style="height: 6px"><zrx-progress :show="progress11" :option="option1"></zrx-progress></div>
<el-button type="primary" @click="progress11 = true">加载</el-button>
<script>
    export default {
        data() {
            return {
                progress11: false,
                option1: {
                    thickness: '6px',
                    background: '#F4F5F8'
                }
            }
        }
    }
</script>
```

:::

### Attributes

| 参数        | 说明                              | 类型    | 可选值                   | 默认值 |
| ----------- | --------------------------------- | ------- | ------------------------ | ------ |
| `show`      | 是否显示                          | boolean | true, false              | false  |
| `location`  | 进度条位置                        | string  | top, right, bottom, left | top    |
| `penetrate` | Progress 出现时是否能正常点击页面 | boolean | true, false              | false  |
| `option`    | 配置项，见[Props](#props)         | object  | —                        | —      |

### Props

| 参数          | 说明                                     | 类型    | 可选值      | 默认值                                               |
| ------------- | ---------------------------------------- | ------- | ----------- | ---------------------------------------------------- |
| `duration`    | 持续时间（s）                            | number  | —           | 15                                                   |
| `color`       | 进度条颜色                               | string  | —           | #405FFE                                              |
| `position`    | css`position`属性                        | string  | —           | absolute                                             |
| `failedColor` | 错误/失败颜色                            | string  | —           | #F0465A                                              |
| `thickness`   | 进度条厚度                               | string  | —           | 3px                                                  |
| `transition`  | 过渡参数                                 | object  | —           | { speed: '0.2s', opacity: '0.6s', termination: 300 } |
| `granularity` | 持续时间算法参数，值越大 duration 越精确 | number  | —           | 10                                                   |
| `location`    | 进度条位置。优先级低于 props-location    | string  | —           | disabled                                             |
| `penetrate`   | 遮罩下面内容是否可点击                   | boolean | true, false | false                                                |
| `marginEdage` | 边距                                     | string  | —           | 0px                                                  |
| `inverse`     | 进度条是否反向                           | boolean | true, false | false                                                |
| `autoFinish`  | 是否完成时自动消失                       | boolean | true, false | true                                                 |
| `background`  | 遮罩背景                                 | string  | —           | transparent                                          |

### Methods

| 方法名称    | 说明         | 参数                            |
| ----------- | ------------ | ------------------------------- |
| `start`     | 启动进度条   | duration: 持续时间              |
| `setOption` | 重置配置参数 | option: 配置，见[Props](#props) |
| `set`       | 设置进度     | num: 需要设置的进度值（百分制） |
| `get`       | 获取进度     | num: 当前的进度值               |
| `increase`  | 增加当前进度 | num: 要增加的进度值             |
| `decrease`  | 减少当前进度 | num: 要减少的进度值             |
| `pause`     | 暂停         | —                               |
| `finish`    | 结束         | —                               |
| `fail`      | 失败         | —                               |

### Directive

| 名称        | 类型      | 说明                                               | 可选值                   |
| ----------- | --------- | -------------------------------------------------- | ------------------------ |
| `body`      | modifiers | 将进度条添加至 body 下，不加则添加至指令所在元素下 | —                        |
| `location`  | modifiers | 进度条位置                                         | top, right, bottom, left |
| `penetrate` | modifiers | 遮罩不影响点击下面元素                             | —                        |
| `duration`  | arg       | 进度条持续时间                                     | number                   |
| `value`     | value     | 进度条是否显示                                     | true, false              |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            progress1: false,
            progress2: false,
            progress3: false,
            progress4: false,
            progress5: false,
            progress6: false,
            progress7: false,
            progress8: false,
            progress9: 0,
            progress10: false,
            progress11: false,
            table1: [
                {
                    id: '1',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                },
                {
                    id: '2',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                },
                {
                    id: '3',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                },
                {
                    id: '4',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                }
            ],
            tab1: {
                current: '1',
                text: '应用中心',
                menu: [
                    {
                        label: '应用中心',
                        value: '1'
                    },
                    {
                        label: '用户中心',
                        value: '2'
                    },
                    {
                        label: '应用管理',
                        value: '3'
                    }
                ]
            },
            option1: {
                thickness: '6px',
                background: '#F4F5F8'
            }
        }
    },
    methods: {
        onStart() {
            if (!this.progress3) {
                this.progress3 = true
            } else {
                this.$refs.progressBar.zrxProgress.start()
            }
        },
        onPause() {
            this.$refs.progressBar.zrxProgress.pause()
        },
        onFinish() {
            this.progress3 = false
        },
        onFail() {
            this.$refs.progressBar.zrxProgress.fail().then(() => {
                this.progress3 = false
            })
        },
        onTabbing(obj) {
            this.tab1.text = ''
            this.progress9++
            setTimeout(() => {
                this.tab1.text = obj.label
                this.progress9--
            }, 500)
        },
        setExample1() {
            this.$refs.progress10.zrxProgress.setOption({
                color: '#1BBE8C',
                marginEdage: '5px'
            })
            this.progress10 = true
        }
    }
}
</script>

<style lang="scss" scoped>
.progress-bar {
    position: relative;
    height: 3px;
    margin: 16px 0;
}
.progress-box {
    position: relative;
    height: 144px;
    margin: 12px 0;
    line-height: 144px;
    text-align: center;
    color: $--placeholder;
}
::v-deep .zrx-tab-content {
    height: 60px;
    padding: 0 24px;
    line-height: 60px;
}
</style>
