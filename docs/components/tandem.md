---
title: Tandem 级联选择器
---

# tandem 级联选择器

Tandem 提供另一种级联-类似于 cascader，修改了样式，增加了对关闭事件的控制，并解决了横向、纵向空间不足时的显示问题。

### 基础用法

<div class="m-example">
    <el-button type="primary" @click="open">请选择</el-button>
    <zrx-tandem
        :data="cascadeObj.data"
        :props="{ nodeKey: 'value' }"
        :locationReference="cascadeObj.reference"
        childrenDisabledByParent
        :maxDepthShow="4"
        :show="cascadeObj.show"
        @onClick="onClickCascade"
        @beforeClose="beforeCascaderClose"
        @onClose="cascadeObj.show = false"
    ></zrx-tandem>
</div>

::: details 示例代码

```html

<el-button type="primary" @click="open">请选择</el-button>
<zrx-tandem
    :data="cascadeObj.data"
    :props="{ nodeKey: 'value' }"
    :locationReference="cascadeObj.reference"
    childrenDisabledByParent
    :maxDepthShow="4"
    :show="cascadeObj.show"
    @onClick="onClickCascade"
    @beforeClose="beforeCascaderClose"
    @onClose="cascadeObj.show = false"
></zrx-tandem>
<script>
export default {
    data() {
        return {
            cascadeObj: {
                data: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则',
                                children: [
                                    {
                                        value: 'yizhi',
                                        label: '一致'
                                    },
                                    {
                                        value: 'fankui',
                                        label: '反馈'
                                    },
                                    {
                                        value: 'xiaolv',
                                        label: '效率'
                                    },
                                    {
                                        value: 'kekong',
                                        label: '可控'
                                    }
                                ]
                            },
                            {
                                value: 'daohang',
                                label: '导航',
                                children: [
                                    {
                                        value: 'cexiangdaohang',
                                        label: '侧向导航'
                                    },
                                    {
                                        value: 'dingbudaohang',
                                        label: '顶部导航'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'zujian',
                        label: '组件',
                        children: [
                            {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                    {
                                        value: 'layout',
                                        label: 'Layout 布局'
                                    },
                                    {
                                        value: 'color',
                                        label: 'Color 色彩'
                                    },
                                    {
                                        value: 'typography',
                                        label: 'Typography 字体'
                                    },
                                    {
                                        value: 'icon',
                                        label: 'Icon 图标'
                                    },
                                    {
                                        value: 'button',
                                        label: 'Button 按钮'
                                    }
                                ]
                            },
                            {
                                value: 'form',
                                label: 'Form',
                                children: [
                                    {
                                        value: 'radio',
                                        label: 'Radio 单选框'
                                    },
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox 多选框'
                                    },
                                    {
                                        value: 'input',
                                        label: 'Input 输入框'
                                    },
                                    {
                                        value: 'input-number',
                                        label: 'InputNumber 计数器'
                                    },
                                    {
                                        value: 'select',
                                        label: 'Select 选择器'
                                    },
                                    {
                                        value: 'cascader',
                                        label: 'Cascader 级联选择器'
                                    },
                                    {
                                        value: 'switch',
                                        label: 'Switch 开关'
                                    },
                                    {
                                        value: 'slider',
                                        label: 'Slider 滑块'
                                    },
                                    {
                                        value: 'time-picker',
                                        label: 'TimePicker 时间选择器'
                                    },
                                    {
                                        value: 'date-picker',
                                        label: 'DatePicker 日期选择器'
                                    },
                                    {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker 日期时间选择器'
                                    },
                                    {
                                        value: 'upload',
                                        label: 'Upload 上传'
                                    },
                                    {
                                        value: 'rate',
                                        label: 'Rate 评分'
                                    },
                                    {
                                        value: 'form',
                                        label: 'Form 表单'
                                    }
                                ]
                            },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [
                                    {
                                        value: 'table',
                                        label: 'Table 表格'
                                    },
                                    {
                                        value: 'tag',
                                        label: 'Tag 标签'
                                    },
                                    {
                                        value: 'progress',
                                        label: 'Progress 进度条'
                                    },
                                    {
                                        value: 'tree',
                                        label: 'Tree 树形控件'
                                    },
                                    {
                                        value: 'pagination',
                                        label: 'Pagination 分页'
                                    },
                                    {
                                        value: 'badge',
                                        label: 'Badge 标记'
                                    }
                                ]
                            },
                            {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                    {
                                        value: 'alert',
                                        label: 'Alert 警告'
                                    },
                                    {
                                        value: 'loading',
                                        label: 'Loading 加载'
                                    },
                                    {
                                        value: 'message',
                                        label: 'Message 消息提示'
                                    },
                                    {
                                        value: 'message-box',
                                        label: 'MessageBox 弹框'
                                    },
                                    {
                                        value: 'notification',
                                        label: 'Notification 通知'
                                    }
                                ]
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'menu',
                                        label: 'NavMenu 导航菜单'
                                    },
                                    {
                                        value: 'tabs',
                                        label: 'Tabs 标签页'
                                    },
                                    {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb 面包屑'
                                    },
                                    {
                                        value: 'dropdown',
                                        label: 'Dropdown 下拉菜单'
                                    },
                                    {
                                        value: 'steps',
                                        label: 'Steps 步骤条'
                                    }
                                ]
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                children: [
                                    {
                                        value: 'dialog',
                                        label: 'Dialog 对话框'
                                    },
                                    {
                                        value: 'tooltip',
                                        label: 'Tooltip 文字提示'
                                    },
                                    {
                                        value: 'popover',
                                        label: 'Popover 弹出框'
                                    },
                                    {
                                        value: 'card',
                                        label: 'Card 卡片'
                                    },
                                    {
                                        value: 'carousel',
                                        label: 'Carousel 走马灯'
                                    },
                                    {
                                        value: 'collapse',
                                        label: 'Collapse 折叠面板'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'ziyuan',
                        label: '资源',
                        children: [
                            {
                                value: 'axure',
                                label: 'Axure Components'
                            },
                            {
                                value: 'sketch',
                                label: 'Sketch Templates'
                            },
                            {
                                value: 'jiaohu',
                                label: '组件交互文档'
                            }
                        ]
                    }
                ],
                reference: null,
                show: false
            }
        }
    },
    methods: {
        onClickCascade(nodeObj, nodeData) {
            console.log(nodeData)
        },
        beforeCascaderClose(nodeData, cb) {
            cb(true)
        },
        open(e) {
            this.cascaderObj.reference = e.currentTarget
            this.cascaderObj.show = true
        }
    }
}
</script>
```

:::

### 禁用选项

通过在数据项中设置disabled实现

<div class="m-example">
    <el-button type="primary" @click="open1">请选择</el-button>
    <zrx-tandem
        :data="cascadeObj1.data"
        :props="{ nodeKey: 'value' }"
        :locationReference="cascadeObj1.reference"
        childrenDisabledByParent
        :maxDepthShow="4"
        :show="cascadeObj1.show"
        @onClose="cascadeObj1.show = false"
    ></zrx-tandem>
</div>

::: details 示例代码

```html
<el-button type="primary" @click="open">请选择</el-button>
<zrx-tandem
    :data="cascadeObj.data"
    :props="{ nodeKey: 'value' }"
    :locationReference="cascadeObj.reference"
    childrenDisabledByParent
    :maxDepthShow="4"
    :show="cascadeObj.show"
    @onClose="cascadeObj.show = false"
></zrx-tandem>
<script>
export default {
    data() {
        return {
            cascadeObj: {
                data: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则',
                                children: [
                                    {
                                        value: 'yizhi',
                                        label: '一致',
                                        disabled: true
                                    },
                                    {
                                        value: 'fankui',
                                        label: '反馈'
                                    },
                                    {
                                        value: 'xiaolv',
                                        label: '效率'
                                    },
                                    {
                                        value: 'kekong',
                                        label: '可控'
                                    }
                                ]
                            },
                            {
                                value: 'daohang',
                                label: '导航',
                                children: [
                                    {
                                        value: 'cexiangdaohang',
                                        label: '侧向导航'
                                    },
                                    {
                                        value: 'dingbudaohang',
                                        label: '顶部导航'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'zujian',
                        label: '组件',
                        disabled: true,
                        children: [
                            {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                    {
                                        value: 'layout',
                                        label: 'Layout 布局'
                                    },
                                    {
                                        value: 'color',
                                        label: 'Color 色彩'
                                    },
                                    {
                                        value: 'typography',
                                        label: 'Typography 字体'
                                    },
                                    {
                                        value: 'icon',
                                        label: 'Icon 图标'
                                    },
                                    {
                                        value: 'button',
                                        label: 'Button 按钮'
                                    }
                                ]
                            },
                            {
                                value: 'form',
                                label: 'Form',
                                disabled: true,
                                children: [
                                    {
                                        value: 'radio',
                                        label: 'Radio 单选框'
                                    },
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox 多选框'
                                    },
                                    {
                                        value: 'input',
                                        label: 'Input 输入框'
                                    },
                                    {
                                        value: 'input-number',
                                        label: 'InputNumber 计数器'
                                    },
                                    {
                                        value: 'select',
                                        label: 'Select 选择器'
                                    },
                                    {
                                        value: 'cascader',
                                        label: 'Cascader 级联选择器'
                                    },
                                    {
                                        value: 'switch',
                                        label: 'Switch 开关'
                                    },
                                    {
                                        value: 'slider',
                                        label: 'Slider 滑块'
                                    },
                                    {
                                        value: 'time-picker',
                                        label: 'TimePicker 时间选择器'
                                    },
                                    {
                                        value: 'date-picker',
                                        label: 'DatePicker 日期选择器'
                                    },
                                    {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker 日期时间选择器'
                                    },
                                    {
                                        value: 'upload',
                                        label: 'Upload 上传'
                                    },
                                    {
                                        value: 'rate',
                                        label: 'Rate 评分'
                                    },
                                    {
                                        value: 'form',
                                        label: 'Form 表单'
                                    }
                                ]
                            },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [
                                    {
                                        value: 'table',
                                        label: 'Table 表格'
                                    },
                                    {
                                        value: 'tag',
                                        label: 'Tag 标签'
                                    },
                                    {
                                        value: 'progress',
                                        label: 'Progress 进度条'
                                    },
                                    {
                                        value: 'tree',
                                        label: 'Tree 树形控件'
                                    },
                                    {
                                        value: 'pagination',
                                        label: 'Pagination 分页'
                                    },
                                    {
                                        value: 'badge',
                                        label: 'Badge 标记'
                                    }
                                ]
                            },
                            {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                    {
                                        value: 'alert',
                                        label: 'Alert 警告'
                                    },
                                    {
                                        value: 'loading',
                                        label: 'Loading 加载'
                                    },
                                    {
                                        value: 'message',
                                        label: 'Message 消息提示'
                                    },
                                    {
                                        value: 'message-box',
                                        label: 'MessageBox 弹框'
                                    },
                                    {
                                        value: 'notification',
                                        label: 'Notification 通知'
                                    }
                                ]
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'menu',
                                        label: 'NavMenu 导航菜单'
                                    },
                                    {
                                        value: 'tabs',
                                        label: 'Tabs 标签页'
                                    },
                                    {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb 面包屑'
                                    },
                                    {
                                        value: 'dropdown',
                                        label: 'Dropdown 下拉菜单'
                                    },
                                    {
                                        value: 'steps',
                                        label: 'Steps 步骤条'
                                    }
                                ]
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                children: [
                                    {
                                        value: 'dialog',
                                        label: 'Dialog 对话框'
                                    },
                                    {
                                        value: 'tooltip',
                                        label: 'Tooltip 文字提示'
                                    },
                                    {
                                        value: 'popover',
                                        label: 'Popover 弹出框'
                                    },
                                    {
                                        value: 'card',
                                        label: 'Card 卡片'
                                    },
                                    {
                                        value: 'carousel',
                                        label: 'Carousel 走马灯'
                                    },
                                    {
                                        value: 'collapse',
                                        label: 'Collapse 折叠面板'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'ziyuan',
                        label: '资源',
                        children: [
                            {
                                value: 'axure',
                                label: 'Axure Components'
                            },
                            {
                                value: 'sketch',
                                label: 'Sketch Templates'
                            },
                            {
                                value: 'jiaohu',
                                label: '组件交互文档'
                            }
                        ]
                    }
                ],
                reference: null,
                show: false
            }
        }
    }
}
</script>

```

:::

### Attributes

| 参数                       | 说明                                 | 类型    | 可选值                      | 默认值 |
| -------------------------- | ------------------------------------ | ------- | --------------------------- | ------ |
| `data`                     | 树数据                               | Array   | —                           | []     |
| `show`                     | 是否显示                             | Boolean | true/false                  | false  |
| `hideWhenLeave`            | 是否在鼠标移开后隐藏节点             | Boolean | true/false                  | false  |
| `maxDepthShow`             | 超过多少层级时滚动，0不滚动          | Number  | —                           | 0      |
| `locationReference`        | 位置参照                             | Object  | Dom/包含top、left的对象     | null   |
| `props`                    | 字段配置                             | Object  | 字段配置参见[Props](#props) | —      |
| `childrenDisabledByParent` | 是否自动禁用被禁用节点的所有子孙节点 | Boolean | true/false                  | false  |
| `hoverableWidth`           | 右侧预留的可视宽度                   | Number  | —                           | 0      |

### Props

| 参数       | 说明         | 类型   | 可选值 | 默认值   |
| ---------- | ------------ | ------ | ------ | -------- |
| `label`    | 标签字段     | string | —      | label    |
| `children` | 子级字段     | string | —      | children |
| `nodeKey`  | 唯一标识字段 | string | —      | id       |

### Events

| 事件名称      | 说明               | 回调参数                               |
| ------------- | ------------------ | -------------------------------------- |
| `onClick`     | 级联项选中的回调   | 选中项的数据对象, 选中项对应的数据对象 |
| `beforeClose` | 级联项关闭前的回调 | 触发关闭的数据对象, 关闭的执行函数         |
| `onClose`     | 级联项关闭后的回调 | —                                      |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            cascadeObj: {
                data: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则',
                                children: [
                                    {
                                        value: 'yizhi',
                                        label: '一致'
                                    },
                                    {
                                        value: 'fankui',
                                        label: '反馈'
                                    },
                                    {
                                        value: 'xiaolv',
                                        label: '效率'
                                    },
                                    {
                                        value: 'kekong',
                                        label: '可控'
                                    }
                                ]
                            },
                            {
                                value: 'daohang',
                                label: '导航',
                                children: [
                                    {
                                        value: 'cexiangdaohang',
                                        label: '侧向导航'
                                    },
                                    {
                                        value: 'dingbudaohang',
                                        label: '顶部导航'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'zujian',
                        label: '组件',
                        children: [
                            {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                    {
                                        value: 'layout',
                                        label: 'Layout 布局'
                                    },
                                    {
                                        value: 'color',
                                        label: 'Color 色彩'
                                    },
                                    {
                                        value: 'typography',
                                        label: 'Typography 字体'
                                    },
                                    {
                                        value: 'icon',
                                        label: 'Icon 图标'
                                    },
                                    {
                                        value: 'button',
                                        label: 'Button 按钮'
                                    }
                                ]
                            },
                            {
                                value: 'form',
                                label: 'Form',
                                children: [
                                    {
                                        value: 'radio',
                                        label: 'Radio 单选框'
                                    },
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox 多选框'
                                    },
                                    {
                                        value: 'input',
                                        label: 'Input 输入框'
                                    },
                                    {
                                        value: 'input-number',
                                        label: 'InputNumber 计数器'
                                    },
                                    {
                                        value: 'select',
                                        label: 'Select 选择器'
                                    },
                                    {
                                        value: 'cascader',
                                        label: 'Cascader 级联选择器'
                                    },
                                    {
                                        value: 'switch',
                                        label: 'Switch 开关'
                                    },
                                    {
                                        value: 'slider',
                                        label: 'Slider 滑块'
                                    },
                                    {
                                        value: 'time-picker',
                                        label: 'TimePicker 时间选择器'
                                    },
                                    {
                                        value: 'date-picker',
                                        label: 'DatePicker 日期选择器'
                                    },
                                    {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker 日期时间选择器'
                                    },
                                    {
                                        value: 'upload',
                                        label: 'Upload 上传'
                                    },
                                    {
                                        value: 'rate',
                                        label: 'Rate 评分'
                                    },
                                    {
                                        value: 'form',
                                        label: 'Form 表单'
                                    }
                                ]
                            },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [
                                    {
                                        value: 'table',
                                        label: 'Table 表格'
                                    },
                                    {
                                        value: 'tag',
                                        label: 'Tag 标签'
                                    },
                                    {
                                        value: 'progress',
                                        label: 'Progress 进度条'
                                    },
                                    {
                                        value: 'tree',
                                        label: 'Tree 树形控件'
                                    },
                                    {
                                        value: 'pagination',
                                        label: 'Pagination 分页'
                                    },
                                    {
                                        value: 'badge',
                                        label: 'Badge 标记'
                                    }
                                ]
                            },
                            {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                    {
                                        value: 'alert',
                                        label: 'Alert 警告'
                                    },
                                    {
                                        value: 'loading',
                                        label: 'Loading 加载'
                                    },
                                    {
                                        value: 'message',
                                        label: 'Message 消息提示'
                                    },
                                    {
                                        value: 'message-box',
                                        label: 'MessageBox 弹框'
                                    },
                                    {
                                        value: 'notification',
                                        label: 'Notification 通知'
                                    }
                                ]
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'menu',
                                        label: 'NavMenu 导航菜单'
                                    },
                                    {
                                        value: 'tabs',
                                        label: 'Tabs 标签页'
                                    },
                                    {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb 面包屑'
                                    },
                                    {
                                        value: 'dropdown',
                                        label: 'Dropdown 下拉菜单'
                                    },
                                    {
                                        value: 'steps',
                                        label: 'Steps 步骤条'
                                    }
                                ]
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                children: [
                                    {
                                        value: 'dialog',
                                        label: 'Dialog 对话框'
                                    },
                                    {
                                        value: 'tooltip',
                                        label: 'Tooltip 文字提示'
                                    },
                                    {
                                        value: 'popover',
                                        label: 'Popover 弹出框'
                                    },
                                    {
                                        value: 'card',
                                        label: 'Card 卡片'
                                    },
                                    {
                                        value: 'carousel',
                                        label: 'Carousel 走马灯'
                                    },
                                    {
                                        value: 'collapse',
                                        label: 'Collapse 折叠面板'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'ziyuan',
                        label: '资源',
                        children: [
                            {
                                value: 'axure',
                                label: 'Axure Components'
                            },
                            {
                                value: 'sketch',
                                label: 'Sketch Templates'
                            },
                            {
                                value: 'jiaohu',
                                label: '组件交互文档'
                            }
                        ]
                    }
                ],
                reference: null,
                show: false
            },
            cascadeObj1: {
                data: [
                    {
                        value: 'zhinan',
                        label: '指南',
                        children: [
                            {
                                value: 'shejiyuanze',
                                label: '设计原则',
                                children: [
                                    {
                                        value: 'yizhi',
                                        label: '一致',
                                        disabled: true
                                    },
                                    {
                                        value: 'fankui',
                                        label: '反馈'
                                    },
                                    {
                                        value: 'xiaolv',
                                        label: '效率'
                                    },
                                    {
                                        value: 'kekong',
                                        label: '可控'
                                    }
                                ]
                            },
                            {
                                value: 'daohang',
                                label: '导航',
                                children: [
                                    {
                                        value: 'cexiangdaohang',
                                        label: '侧向导航'
                                    },
                                    {
                                        value: 'dingbudaohang',
                                        label: '顶部导航'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'zujian',
                        label: '组件',
                        disabled: true,
                        children: [
                            {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                    {
                                        value: 'layout',
                                        label: 'Layout 布局'
                                    },
                                    {
                                        value: 'color',
                                        label: 'Color 色彩'
                                    },
                                    {
                                        value: 'typography',
                                        label: 'Typography 字体'
                                    },
                                    {
                                        value: 'icon',
                                        label: 'Icon 图标'
                                    },
                                    {
                                        value: 'button',
                                        label: 'Button 按钮'
                                    }
                                ]
                            },
                            {
                                value: 'form',
                                label: 'Form',
                                disabled: true,
                                children: [
                                    {
                                        value: 'radio',
                                        label: 'Radio 单选框'
                                    },
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox 多选框'
                                    },
                                    {
                                        value: 'input',
                                        label: 'Input 输入框'
                                    },
                                    {
                                        value: 'input-number',
                                        label: 'InputNumber 计数器'
                                    },
                                    {
                                        value: 'select',
                                        label: 'Select 选择器'
                                    },
                                    {
                                        value: 'cascader',
                                        label: 'Cascader 级联选择器'
                                    },
                                    {
                                        value: 'switch',
                                        label: 'Switch 开关'
                                    },
                                    {
                                        value: 'slider',
                                        label: 'Slider 滑块'
                                    },
                                    {
                                        value: 'time-picker',
                                        label: 'TimePicker 时间选择器'
                                    },
                                    {
                                        value: 'date-picker',
                                        label: 'DatePicker 日期选择器'
                                    },
                                    {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker 日期时间选择器'
                                    },
                                    {
                                        value: 'upload',
                                        label: 'Upload 上传'
                                    },
                                    {
                                        value: 'rate',
                                        label: 'Rate 评分'
                                    },
                                    {
                                        value: 'form',
                                        label: 'Form 表单'
                                    }
                                ]
                            },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [
                                    {
                                        value: 'table',
                                        label: 'Table 表格'
                                    },
                                    {
                                        value: 'tag',
                                        label: 'Tag 标签'
                                    },
                                    {
                                        value: 'progress',
                                        label: 'Progress 进度条'
                                    },
                                    {
                                        value: 'tree',
                                        label: 'Tree 树形控件'
                                    },
                                    {
                                        value: 'pagination',
                                        label: 'Pagination 分页'
                                    },
                                    {
                                        value: 'badge',
                                        label: 'Badge 标记'
                                    }
                                ]
                            },
                            {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                    {
                                        value: 'alert',
                                        label: 'Alert 警告'
                                    },
                                    {
                                        value: 'loading',
                                        label: 'Loading 加载'
                                    },
                                    {
                                        value: 'message',
                                        label: 'Message 消息提示'
                                    },
                                    {
                                        value: 'message-box',
                                        label: 'MessageBox 弹框'
                                    },
                                    {
                                        value: 'notification',
                                        label: 'Notification 通知'
                                    }
                                ]
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'menu',
                                        label: 'NavMenu 导航菜单'
                                    },
                                    {
                                        value: 'tabs',
                                        label: 'Tabs 标签页'
                                    },
                                    {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb 面包屑'
                                    },
                                    {
                                        value: 'dropdown',
                                        label: 'Dropdown 下拉菜单'
                                    },
                                    {
                                        value: 'steps',
                                        label: 'Steps 步骤条'
                                    }
                                ]
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                children: [
                                    {
                                        value: 'dialog',
                                        label: 'Dialog 对话框'
                                    },
                                    {
                                        value: 'tooltip',
                                        label: 'Tooltip 文字提示'
                                    },
                                    {
                                        value: 'popover',
                                        label: 'Popover 弹出框'
                                    },
                                    {
                                        value: 'card',
                                        label: 'Card 卡片'
                                    },
                                    {
                                        value: 'carousel',
                                        label: 'Carousel 走马灯'
                                    },
                                    {
                                        value: 'collapse',
                                        label: 'Collapse 折叠面板'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        value: 'ziyuan',
                        label: '资源',
                        children: [
                            {
                                value: 'axure',
                                label: 'Axure Components'
                            },
                            {
                                value: 'sketch',
                                label: 'Sketch Templates'
                            },
                            {
                                value: 'jiaohu',
                                label: '组件交互文档'
                            }
                        ]
                    }
                ],
                reference: null,
                show: false
            }
        }
    },
    methods: {
        onClickCascade(nodeObj, nodeData) {
            console.log(nodeData)
        },
        beforeCascaderClose(nodeData, cb) {
            cb(true)
        },
        open(e) {
            this.cascadeObj.reference = e.currentTarget
            this.cascadeObj.show = true
        },
        open1(e) {
            this.cascadeObj1.reference = e.currentTarget
            this.cascadeObj1.show = true
        }
    }
}
</script>
