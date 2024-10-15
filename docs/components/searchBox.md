---
title: SearchBox 搜索栏
---

# SearchBox 搜索栏

用于排列列表的搜索项的自适应容器

### 基础用法

<div class="m-example">
    <zrx-search-box>
        <template slot="inputer">
            <div class="zrx-tandem-input">
                <span class="label">名称</span>
                <el-input placeholder="请输入" v-model="formData.name"></el-input>
            </div>
            <div class="zrx-tandem-input">
                <span class="label">是否启用</span>
                <el-select v-model="formData.enable" placeholder="请选择">
                    <el-option value="1" label="是"></el-option>
                    <el-option value="0" label="否"></el-option>
                </el-select>
            </div>
            <div class="zrx-tandem-input">
                <span class="label">创建时间</span>
                <zrx-date-time-picker
                    v-model="formData.timetimeRange"
                    type="datetimerange"
                    format="yyyy-MM-dd HH:mm:ss"
                    rangeSeparator="-"
                    :clearable="false"
                ></zrx-date-time-picker>
            </div>
            <div class="zrx-tandem-input">
                <span class="label">审批时间</span>
                <zrx-time-picker v-model="formData.timestamp" placeholder="请选择"></zrx-time-picker>
            </div>
            <div class="zrx-tandem-input">
                <span class="label">所属部门</span>
                <zrx-drop-tree :data="treeData" popper-append-to-body :props="{ label: 'name' }" v-model="formData.department" show-checkbox placeholder="请选择"></zrx-drop-tree>
            </div>
            <div class="zrx-tandem-input">
                <span class="label">区划层级</span>
                <el-checkbox-group v-model="formData.district">
                    <el-checkbox label="镇"></el-checkbox>
                    <el-checkbox label="村"></el-checkbox>
                    <el-checkbox label="街道"></el-checkbox>
                </el-checkbox-group>
            </div>
        </template>
        <template slot="btn">
            <el-button type="primary">查询</el-button>
            <el-button @click="reset">重置</el-button>
        </template>
    </zrx-search-box>
</div>

::: details 示例代码

```html
<zrx-search-box>
    <template slot="inputer">
        <div class="zrx-tandem-input">
            <label class="label">名称</label>
            <el-input placeholder="请输入" v-model="formData.name"></el-input>
        </div>
        <div class="zrx-tandem-input">
            <label class="label">是否启用</label>
            <el-select v-model="formData.enable" placeholder="请选择">
                <el-option value="1" label="是"></el-option>
                <el-option value="0" label="否"></el-option>
            </el-select>
        </div>
        <div class="zrx-tandem-input">
            <label class="label">创建时间</label>
            <zrx-date-time-picker v-model="formData.timetimeRange" type="datetimerange" format="yyyy-MM-dd HH:mm:ss" rangeSeparator="-" :clearable="false"></zrx-date-time-picker>
        </div>
        <div class="zrx-tandem-input">
            <label class="label">审批时间</label>
            <zrx-time-picker v-model="formData.timestamp" placeholder="请选择"></zrx-time-picker>
        </div>
        <div class="zrx-tandem-input">
            <label class="label">所属部门</label>
            <zrx-drop-tree :data="treeData" popper-append-to-body :props="{ label: 'name' }" v-model="formData.department" show-checkbox></zrx-drop-tree>
        </div>
        <div class="zrx-tandem-input">
            <label class="label">区划层级</label>
            <el-checkbox-group v-model="formData.district">
                <el-checkbox label="镇"></el-checkbox>
                <el-checkbox label="村"></el-checkbox>
                <el-checkbox label="街道"></el-checkbox>
            </el-checkbox-group>
        </div>
    </template>
    <template slot="btn">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
    </template>
</zrx-search-box>
<script>
    export default {
        data() {
            return {
                treeData: [
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
                                                parentId: 'd7f354df24bb4166be3c09b20561ad8e',
                                                children: [],
                                                name: '三级节点1',
                                                sort: 0
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
                formData: {
                    name: '',
                    enable: '0',
                    timetimeRange: [],
                    timestamp: null,
                    department: [],
                    district: []
                }
            }
        },
        methods: {
            reset() {
                this.formData.name = ''
                this.formData.enable = '0'
                this.formData.timetimeRange = []
                this.formData.timestamp = null
                this.formData.department = []
                this.formData.district = []
            }
        }
    }
</script>
```

:::

### 响应内容变化

<div class="m-example">
    <zrx-search-box ref="searchbox">
        <div class="zrx-tandem-input">
            <span class="label">流程标题</span>
            <el-input v-model="search.name" placeholder="请输入"></el-input>
        </div>
        <div class="zrx-tandem-input">
            <span class="label">显示剩余</span>
            <el-select v-model="search.type" placeholder="请选择" @change="onChange">
                <el-option label="否" value="1"></el-option>
                <el-option label="是" value="2"></el-option>
            </el-select>
        </div>
        <template v-if="search.type=='2'">
            <div class="zrx-tandem-input">
                <span class="label">流程编号</span>
                <el-input v-model="search.code" placeholder="请输入"></el-input>
            </div>
            <div class="zrx-tandem-input">
                <span class="label">申请人</span>
                <el-input v-model="search.creator" placeholder="请输入"></el-input>
            </div>
        </template>
        <template slot="btn">
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
        </template>
    </zrx-search-box>
</div>

::: tip
searchBox 内置了对组件内部元素变化的响应，但某些情况下响应不会自动触发，此时，在变化完成后，需要调用`resetWhenChildChange`对组件进行重置
:::

::: details 示例代码

```html
<zrx-search-box ref="searchbox">
    <div class="zrx-tandem-input">
        <span class="label">流程标题</span>
        <el-input v-model="search.name" placeholder="请输入"></el-input>
    </div>
    <div class="zrx-tandem-input">
        <span class="label">显示剩余</span>
        <el-select v-model="search.type" placeholder="请选择" @change="onChange">
            <el-option label="否" value="1"></el-option>
            <el-option label="是" value="2"></el-option>
        </el-select>
    </div>
    <template v-if="search.type=='2'">
        <div class="zrx-tandem-input">
            <span class="label">流程编号</span>
            <el-input v-model="search.code" placeholder="请输入"></el-input>
        </div>
        <div class="zrx-tandem-input">
            <span class="label">申请人</span>
            <el-input v-model="search.creator" placeholder="请输入"></el-input>
        </div>
    </template>
    <template slot="btn">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
    </template>
</zrx-search-box>
<script>
    export default {
        data() {
            return {
                search: {
                    name: '',
                    type: '1',
                    creator: '',
                    code: ''
                }
            }
        },
        methods: {
            onChange() {
                this.$nextTick(() => this.$refs.searchbox.resetWhenChildChange())
            }
        }
    }
</script>
```

:::

### 自定义折叠/展开

不使用默认的折叠/展开

<div class="m-example">
    <zrx-search-box ref="searchbox" prevent-default-toggle @change="$event => (stretched = $event)">
        <div class="zrx-tandem-input">
            <span class="label">流程标题</span>
            <el-input v-model="search.name" placeholder="请输入"></el-input>
        </div>
        <div class="zrx-tandem-input">
            <span class="label">显示剩余</span>
            <el-select v-model="search.type" :popper-append-to-body="false" placeholder="请选择">
                <el-option label="否" value="1"></el-option>
                <el-option label="是" value="2"></el-option>
            </el-select>
        </div>
        <template v-if="stretched">
            <div class="zrx-tandem-input">
                <span class="label">流程编号</span>
                <el-input v-model="search.code" placeholder="请输入"></el-input>
            </div>
            <div class="zrx-tandem-input">
                <span class="label">申请人</span>
                <el-input v-model="search.creator" placeholder="请输入"></el-input>
            </div>
        </template>
        <template slot="btn">
            <el-button type="primary">查询</el-button>
            <el-button>重置</el-button>
        </template>
    </zrx-search-box>
</div>

::: tip
使用默认的折叠/展开逻辑可能会导致内部元素的遮挡（如下拉框）。可开启`prevent-default-toggle`，自己实现折叠/展开逻辑，此时的组件类似简单的布局容器，不提供除样式外的其他控制。
:::

::: details 示例代码

```html
<zrx-search-box ref="searchbox" prevent-default-toggle @change="$event => (stretched = $event)">
    <div class="zrx-tandem-input">
        <span class="label">流程标题</span>
        <el-input v-model="search.name" placeholder="请输入"></el-input>
    </div>
    <div class="zrx-tandem-input">
        <span class="label">显示剩余</span>
        <el-select v-model="search.type" :popper-append-to-body="false" placeholder="请选择">
            <el-option label="否" value="1"></el-option>
            <el-option label="是" value="2"></el-option>
        </el-select>
    </div>
    <template v-if="stretched">
        <div class="zrx-tandem-input">
            <span class="label">流程编号</span>
            <el-input v-model="search.code" placeholder="请输入"></el-input>
        </div>
        <div class="zrx-tandem-input">
            <span class="label">申请人</span>
            <el-input v-model="search.creator" placeholder="请输入"></el-input>
        </div>
    </template>
    <template slot="btn">
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
    </template>
</zrx-search-box>
<script>
    export default {
        data() {
            return {
                search: {
                    name: '',
                    type: '1',
                    creator: '',
                    code: ''
                },
                stretched: false
            }
        }
    }
</script>
```

:::

### Attributes

| 参数                     | 说明                        | 类型           | 可选值 | 默认值 |
| ------------------------ | --------------------------- | -------------- | ------ | ------ |
| `initial-expand`         | 组件初始化是否展开          | Boolean        | —      | false  |
| `padding-x`              | 组件左右两侧边距            | String, Number | —      | 16     |
| `min-input-width`        | 最小输入框宽度              | String, Number | —      | 270    |
| `column-gap`             | 组件内部的列间隔            | String, Number | —      | 32     |
| `prevent-default-toggle` | 是否阻止内置的折叠/展开行为 | Boolean        | —      | false  |
| `show-toggler`           | 是否使用内置的折叠/展开按钮 | Boolean        | —      | true   |

### Methods

| 方法名称               | 说明           | 参数 |
| ---------------------- | -------------- | ---- |
| `resetWhenChildChange` | 使组件重新布局 | —    |
| `focus`                | 使组件聚焦     | —    |

### Events

| 事件名称        | 说明            | 回调参数                           |
| --------------- | --------------- | ---------------------------------- |
| `transitionend` | 过渡完成回调    | { stretched, height }, originEvent |
| `change`        | 折叠/展开的回调 | 是否展开                           |

### Slots

| name      | 说明       |
| --------- | ---------- |
| `inputer` | 搜索项插槽 |
| —         | 默认插槽   |
| `btn`     | 按钮插槽   |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            treeData: [
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
                                            parentId: 'd7f354df24bb4166be3c09b20561ad8e',
                                            children: [],
                                            name: '三级节点1',
                                            sort: 0
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
            formData: {
                name: '',
                enable: '0',
                timetimeRange: [],
                timestamp: null,
                department: [],
                district: []
            },
            search: {
                name: '',
                type: '1',
                creator: '',
                code: ''
            },
            stretched: false
        }
    },
    methods: {
        reset() {
            this.formData.name = ''
            this.formData.enable = '0'
            this.formData.timetimeRange = []
            this.formData.timestamp = null
            this.formData.department = []
            this.formData.district = []
        },
        onChange() {
            this.$nextTick(() => this.$refs.searchbox.resetWhenChildChange())
        }
    }
}
</script>
