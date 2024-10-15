<template>
    <div class="cascader-demo">
        <div>
            <h2>点击触发</h2>
            <el-cascader v-model="value" :options="options" @change="handleChange"></el-cascader>
        </div>

        <div>
            <h2>hover触发</h2>
            <el-cascader v-model="box4[0]" :options="options2" :props="{ expandTrigger: 'hover' }" :clearable="true"></el-cascader>
        </div>
        <div>
            <h2>禁止选择</h2>
            <el-cascader v-model="box4[1]" :options="options2" :props="{ expandTrigger: 'hover' }" disabled></el-cascader>
        </div>
        <div>
            <h2>动态加载</h2>
            <el-cascader :props="props" :clearable="true"></el-cascader>
        </div>
    </div>
</template>

<script>
const defaultOptions = [
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
                        disabled: 'disabled'
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
]
const defaultOptions2 = [
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
]
let id = 0
export default {
    name: 'cascaderDemo',
    data() {
        return {
            value: [],
            value1: [],
            box4: [[], ['zhinan', 'shejiyuanze', 'fankui']],
            options: [...defaultOptions],
            options2: [...defaultOptions2],
            props: {
                lazy: true,
                lazyLoad(node, resolve) {
                    const { level } = node
                    setTimeout(() => {
                        const nodes = defaultOptions2.map(item => ({
                            value: item.value,
                            label: item.label,
                            leaf: level >= 2
                        }))
                        // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                        resolve(nodes)
                    }, 1000)
                }
            }
        }
    },
    methods: {
        handleChange(value) {
            console.log(value)
        }
    }
}
</script>

<style scoped lang="scss">
.cascader-demo {
    h2 {
        margin: 20px 0;
    }
    .el-cascader::v-deep {
        .el-input {
            width: 320px;
        }
    }
}
</style>
