---
title: Drawer 抽屉
---

# Drawer 抽屉

位于页面右侧的滑动容器

### 基础用法

<div class="m-example">
    <el-button type="primary" @click="drawerVisible = true">打开抽屉</el-button>
    <el-drawer destroy-on-close :show-close="false" :wrapperClosable="false" :visible.sync="drawerVisible">
        <template slot="title">活动详情</template>
        <div class="zrx-drawer-body">
            <el-form class="intandem" :model="formData" style="label-width:100px;">
                <el-form-item prop="name">
                    <span class="label">活动名称 :</span>
                    <el-input v-model="formData.name"></el-input>
                </el-form-item>
                <el-form-item prop="region">
                    <span class="label">活动区域 :</span>
                    <el-select v-model="formData.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item prop="timeRange">
                    <span class="label">活动时间 :</span>
                    <zrx-date-time-picker v-model="formData.timeRange" type="daterange" format="yyyy/MM/dd"></zrx-date-time-picker>
                </el-form-item>
                <el-form-item prop="timestamp">
                    <span class="label">开始时间 :</span>
                    <zrx-time-picker v-model="formData.timestamp" placeholder="请选择"></zrx-time-picker>
                </el-form-item>
                <el-form-item prop="delivery">
                    <span class="label">即时配送 :</span>
                    <el-switch type="primary" v-model="formData.delivery"></el-switch>
                </el-form-item>
                <el-form-item prop="type">
                    <span class="label">活动性质 :</span>
                    <el-checkbox-group v-model="formData.type">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <el-checkbox label="地推活动" name="type"></el-checkbox>
                        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                <el-form-item prop="resource">
                    <span class="label">特殊资源 :</span>
                    <el-radio-group v-model="formData.resource">
                        <el-radio label="线上品牌商赞助"></el-radio>
                        <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item prop="department">
                    <span class="label">所属部门 :</span>
                    <zrx-drop-tree :data="treeObj.data" :props="treeObj.props" v-model="formData.department"></zrx-drop-tree>
                </el-form-item>
                <el-form-item prop="area">
                    <span class="label">所属区划 :</span>
                    <zrx-multiple-select v-model="formData.area" :option="regionObj.option"></zrx-multiple-select>
                </el-form-item>
                <el-form-item prop="form">
                    <span class="label">活动形式 :</span>
                    <el-input type="textarea" v-model="formData.form" :maxlength="128" show-word-limit></el-input>
                </el-form-item>
            </el-form>
        </div>
        <div class="zrx-drawer-footer">
            <el-button type="primary" @click="drawerVisible = false">保存</el-button>
            <el-button @click="drawerVisible = false">取消</el-button>
        </div>
    </el-drawer>
</div>

::: tip
抽屉组件通常由三部分组成，分别是标题（可以通过 title 属性或者 slot="title"来构成）、内容（必须携带类名 zrx-drawer-body）、尾部（必须携带类名 zrx-drawer-footer），
仅有内容部分可以滚动。
:::

::: details 示例代码

```html
<el-button type="primary" @click="drawerVisible = true">打开抽屉</el-button>
<el-drawer destroy-on-close :show-close="false" :wrapperClosable="false" :visible.sync="drawerVisible">
    <template slot="title">活动详情</template>
    <div class="zrx-drawer-body">
        <el-form class="intandem" :model="formData" style="label-width:100px;">
            <el-form-item prop="name">
                <span class="label">活动名称 :</span>
                <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item prop="region">
                <span class="label">活动区域 :</span>
                <el-select v-model="formData.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item prop="timeRange">
                <span class="label">活动时间 :</span>
                <zrx-date-time-picker v-model="formData.timeRange" type="daterange" format="yyyy/MM/dd"></zrx-date-time-picker>
            </el-form-item>
            <el-form-item prop="timestamp">
                <span class="label">开始时间 :</span>
                <zrx-time-picker v-model="formData.timestamp" placeholder="请选择"></zrx-time-picker>
            </el-form-item>
            <el-form-item prop="delivery">
                <span class="label">即时配送 :</span>
                <el-switch type="primary" v-model="formData.delivery"></el-switch>
            </el-form-item>
            <el-form-item prop="type">
                <span class="label">活动性质 :</span>
                <el-checkbox-group v-model="formData.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item prop="resource">
                <span class="label">特殊资源 :</span>
                <el-radio-group v-model="formData.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item prop="department">
                <span class="label">所属部门 :</span>
                <zrx-drop-tree :data="treeObj.data" :props="treeObj.props" v-model="formData.department"></zrx-drop-tree>
            </el-form-item>
            <el-form-item prop="area">
                <span class="label">所属区划 :</span>
                <zrx-multiple-select v-model="formData.area" :option="regionObj.option"></zrx-multiple-select>
            </el-form-item>
            <el-form-item prop="form">
                <span class="label">活动形式 :</span>
                <el-input type="textarea" v-model="formData.form" :maxlength="128" show-word-limit></el-input>
            </el-form-item>
        </el-form>
    </div>
    <div class="zrx-drawer-footer">
        <el-button type="primary" @click="drawerVisible = false">保存</el-button>
        <el-button @click="drawerVisible = false">取消</el-button>
    </div>
</el-drawer>
<script>
export default {
    data() {
        return {
            drawerVisible: false,
            formData: {
                name: '',
                region: '',
                timeRange: [],
                timestamp: null,
                delivery: false,
                type: [],
                resource: '',
                department: ['d966b79460be4734a78d6f53d4037e84'],
                area: [5, 3],
                form: ''
            },
            treeObj: {
                data: [
                    {
                        id: '0',
                        parentId: null,
                        children: [
                            {
                                id: '5bbfb0fb33e6432aa499f5ddb801163b',
                                parentId: '0',
                                children: [],
                                name: '一级节点1',
                                sort: 0,
                                disabled: true
                            },
                            {
                                id: 'd966b79460be4734a78d6f53d4037e84',
                                parentId: '0',
                                children: [],
                                name: '一级节点2',
                                sort: 2
                            },
                            {
                                id: 'b169cbd13e154d53b199afb1dceeaeee',
                                parentId: '0',
                                children: [],
                                name: '一级节点3',
                                sort: 3
                            },
                            {
                                id: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                                parentId: '0',
                                children: [
                                    {
                                        id: 'd7f354df24bb4166be3c09b20561ad8e',
                                        parentId: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                                        children: [
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8b',
                                                children: [],
                                                name: '三级节点1',
                                                sort: 0
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8f',
                                                children: [],
                                                name: '三级节点2',
                                                sort: 1
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8g',
                                                children: [],
                                                name: '三级节点3',
                                                sort: 2
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8h',
                                                children: [],
                                                name: '三级节点4',
                                                sort: 3
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8i',
                                                children: [],
                                                name: '三级节点6',
                                                sort: 5
                                            }
                                        ],
                                        name: '二级节点1',
                                        sort: 0
                                    }
                                ],
                                name: '一级节点4',
                                sort: 4
                            }
                        ],
                        name: '全部',
                        sort: 0
                    }
                ],
                props: {
                    label: 'name',
                    value: 'id'
                }
            },
            regionObj: {
                option: [
                    {
                        label: '下拉选项1',
                        value: 1
                    },
                    {
                        label: '下拉选项2',
                        value: 2
                    },
                    {
                        label: '下拉选项3',
                        value: 3
                    },
                    {
                        label: '下拉选项4',
                        value: 4
                    },
                    {
                        label: '下拉选项5',
                        value: 5
                    }
                ]
            }
        }
    }
}
</script>
```

:::

### 链接

[https://element.eleme.io/#/zh-CN/component/drawer](https://element.eleme.io/#/zh-CN/component/drawer)

### Attributes

| 参数                  | 说明                                                                                                                       | 类型                                 | 可选值                | 默认值 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------------- | ------ |
| `append-to-body`        | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true                                               | boolean                              | —                     | false  |
| `before-close`          | 关闭前的回调，会暂停 Drawer 的关闭                                                                                         | function(done)，done 用于关闭 Drawer | —                     | —      |
| `close-on-press-escape` | 是否可以通过按下 ESC 关闭 Drawer                                                                                           | boolean                              | —                     | true   |
| `custom-class`          | Drawer 的自定义类名                                                                                                        | string                               | —                     | —      |
| `destroy-on-close`      | 控制是否在关闭 Drawer 之后将子元素全部销毁                                                                                 | boolean                              | -                     | false  |
| `modal`                 | 是否需要遮罩层                                                                                                             | boolean                              | —                     | true   |
| `modal-append-to-body`  | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上                                               | boolean                              | —                     | true   |
| `direction`             | Drawer 打开的方向                                                                                                          | Direction                            | rtl / ltr / ttb / btt | rtl    |
| `show-close`            | 是否显示关闭按钮                                                                                                           | boolean                              | —                     | true   |
| `size`                  | Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释 | number / string                      | -                     | '30%'  |
| `title`                 | Drawer 的标题，也可通过具名 slot （见下表）传入                                                                            | string                               | —                     | —      |
| `visible`               | 是否显示 Drawer，支持 .sync 修饰符                                                                                         | boolean                              | —                     | false  |
| `wrapperClosable`       | 点击遮罩层是否可以关闭 Drawer                                                                                              | boolean                              | -                     | true   |
| `withHeader`            | 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, `title attribute` 和 `title slot` 均不生效                             | boolean                              | -                     | true   |

### Methods

| name        | 说明                                                    |
| ----------- | ------------------------------------------------------- |
| `closeDrawer` | 用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法 |

### Events

| 事件名称 | 说明                        | 回调参数 |
| -------- | --------------------------- | -------- |
| `open`     | Drawer 打开的回调           | —        |
| `opened`   | Drawer 打开动画结束时的回调 | —        |
| `close`    | Drawer 关闭的回调           | —        |
| `closed`   | Drawer 关闭动画结束时的回调 | —        |

### Slots

| name  | 说明                |
| ----- | ------------------- |
| —     | Drawer 的内容       |
| `title` | Drawer 标题区的内容 |

<div>
    <contributor :maintainer="['zdl']" :members="['zdl', 'agua', 'gbb']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            drawerVisible: false,
            formData: {
                name: '',
                region: '',
                timeRange: [],
                timestamp: null,
                delivery: false,
                type: [],
                resource: '',
                department: ['d966b79460be4734a78d6f53d4037e84'],
                area: [5, 3],
                form: ''
            },
            treeObj: {
                data: [
                    {
                        id: '0',
                        parentId: null,
                        children: [
                            {
                                id: '5bbfb0fb33e6432aa499f5ddb801163b',
                                parentId: '0',
                                children: [],
                                name: '一级节点1',
                                sort: 0,
                                disabled: true
                            },
                            {
                                id: 'd966b79460be4734a78d6f53d4037e84',
                                parentId: '0',
                                children: [],
                                name: '一级节点2',
                                sort: 2
                            },
                            {
                                id: 'b169cbd13e154d53b199afb1dceeaeee',
                                parentId: '0',
                                children: [],
                                name: '一级节点3',
                                sort: 3
                            },
                            {
                                id: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                                parentId: '0',
                                children: [
                                    {
                                        id: 'd7f354df24bb4166be3c09b20561ad8e',
                                        parentId: 'aa946ffcf7bb4b03821dee3c75aa4ea2',
                                        children: [
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8b',
                                                children: [],
                                                name: '三级节点1',
                                                sort: 0
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8f',
                                                children: [],
                                                name: '三级节点2',
                                                sort: 1
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8g',
                                                children: [],
                                                name: '三级节点3',
                                                sort: 2
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8h',
                                                children: [],
                                                name: '三级节点4',
                                                sort: 3
                                            },
                                            {
                                                id: '11112f1d487945a097a0ba5ff1f21273',
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8i',
                                                children: [],
                                                name: '三级节点6',
                                                sort: 5
                                            }
                                        ],
                                        name: '二级节点1',
                                        sort: 0
                                    }
                                ],
                                name: '一级节点4',
                                sort: 4
                            }
                        ],
                        name: '全部',
                        sort: 0
                    }
                ],
                props: {
                    label: 'name',
                    value: 'id'
                }
            },
            regionObj: {
                option: [
                    {
                        label: '下拉选项1',
                        value: 1
                    },
                    {
                        label: '下拉选项2',
                        value: 2
                    },
                    {
                        label: '下拉选项3',
                        value: 3
                    },
                    {
                        label: '下拉选项4',
                        value: 4
                    },
                    {
                        label: '下拉选项5',
                        value: 5
                    }
                ]
            }
        }
    }
}
</script>
