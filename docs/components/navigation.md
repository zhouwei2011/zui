---
title: Navigation 导航栏
---

# Navigation 导航栏

提供导航功能的主菜单，位于页面左侧

### 基础用法

<div class="m-example">
    <div class="m-btns-row">
        <el-button type="primary" @click="collapse = false">展开</el-button>
        <el-button @click="collapse = true">折叠</el-button>
    </div>
    <div class="nav-column">
        <ClientOnly>
            <zrx-navigation :menu="menu" :collapse="collapse" accordian ref="navigation"></zrx-navigation>
        </ClientOnly>
    </div>
</div>

::: details 示例代码

```html
<div class="m-example">
    <div class="m-btns-row">
        <el-button type="primary" @click="collapse = false">展开</el-button>
        <el-button @click="collapse = true">折叠</el-button>
    </div>
    <div class="nav-column">
        <zrx-navigation :menu="menu" :collapse="collapse" accordian ref="navigation"></zrx-navigation>
    </div>
</div>
<script>
export default {
    data() {
        return {
            menu: [
                {
                    icon: 'svg-icon icon-menu-boxes',
                    label: '元数据管理',
                    id: '1'
                },
                {
                    icon: 'svg-icon icon-menu-phone',
                    label: '数据元管理',
                    id: '3',
                    children: [
                        {
                            label: '标准数据元管理',
                            id: '3-1',
                            children: []
                        },
                        {
                            label: '数据字典管理',
                            id: '3-2',
                            children: []
                        },
                        {
                            label: '数据正则管理',
                            id: '3-3',
                            children: []
                        }
                    ]
                },
                {
                    icon: 'svg-icon icon-menu-computer',
                    label: '数据模型管理',
                    id: '4',
                    children: [
                        {
                            label: '数据模型分类',
                            id: '4-1',
                            children: []
                        },
                        {
                            label: '数据模型列表',
                            id: '4-2',
                            children: []
                        }
                    ]
                },
                {
                    icon: 'svg-icon icon-menu-chimney',
                    label: '数据标准展示',
                    id: '5',
                    children: []
                }
            ],
            collapse: false
        }
    }
}
</script>
```

:::

### 样式变量

| 变量名               |                默认值 | 说明 |
| -------------------- | --------------------: | ---: |
| $--nav-bg            |            --nav-bg/0 |      |
| --indent             |                    -- |      |
| --bars               |                    -- |      |
| $--nav-text          |          --nav-text/1 |      |
| $--nav-hover-bg      |   --nav-hover-bg/0.04 |      |
| $--nav-text-selected |          --nav-text/1 |      |
| $--nav-selected-bg   | --nav-selected-bg/0.1 |      |
| $primary             |             --primary |      |
| $--nav-bg-dropped    |    --nav-bg-dropped/0 |      |

### Attributes

| 参数        | 说明           | 类型    | 可选值                      | 默认值       |
| ----------- | -------------- | ------- | --------------------------- | ------------ |
| `menu`      | 导航栏数据     | Array   | —                           | []           |
| `prop`      | 导航项字段配置 | Object  | 字段配置参见[Props](#props) | —            |
| `collapse`  | 是否折叠       | Boolean | true/false                  | false        |
| `indent`    | 菜单项缩进值   | Boolean | Array                       | [4, 4, 8] |
| `accordian` | 是否手风琴模式 | Boolean | true/false                  | false        |

### Methods

| 方法名称     | 说明                     | 参数                           |
| ------------ | ------------------------ | ------------------------------ |
| `setCurrent` | 选中菜单项               | navObj: 待选中的数据项         |
| `findData`   | 返回菜单项对应的数据对象 | key: 目标项键, value: 目标项值 |

### Events

| 事件名称  | 说明             | 回调参数                                      |
| --------- | ---------------- | --------------------------------------------- |
| `onclick` | 菜单项选中的回调 | navObj: 选中项的数据对象, level: 选中项的层级 |

### Props

| 参数       | 说明                                                               | 类型   | 可选值        | 默认值   |
| ---------- | ------------------------------------------------------------------ | ------ | ------------- | -------- |
| `icon`     | 菜单项的图标，可识别成链接时图标渲染成**img**， 否则渲染成**icon** | String | —             | icon     |
| `iconType` | 菜单项的图标类型，若未指定则根据**icon**值和渲染结果决定           | String | image/icon/'' | unsetted        |
| `key`      | 菜单项的唯一标识符                                                 | String | —             | id       |
| `label`    | 菜单项的显示名                                                     | String | —             | label    |
| `children` | 菜单项的子节点                                                     | String | —             | children |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            current: '',
            menu: [
                {
                    icon: 'svg-icon icon-menu-boxes',
                    label: '元数据管理',
                    id: '1'
                },
                {
                    icon: 'svg-icon icon-menu-phone',
                    label: '数据元管理',
                    id: '3',
                    children: [
                        {
                            label: '标准数据元管理',
                            id: '3-1',
                            children: []
                        },
                        {
                            label: '数据字典管理',
                            id: '3-2',
                            children: []
                        },
                        {
                            label: '数据正则管理',
                            id: '3-3',
                            children: []
                        }
                    ]
                },
                {
                    icon: 'svg-icon icon-menu-computer',
                    label: '数据模型管理',
                    id: '4',
                    children: [
                        {
                            label: '数据模型分类',
                            id: '4-1',
                            children: []
                        },
                        {
                            label: '数据模型列表',
                            id: '4-2',
                            children: []
                        }
                    ]
                },
                {
                    icon: 'svg-icon icon-menu-chimney',
                    label: '数据标准展示',
                    id: '5',
                    children: []
                }
            ],
            collapse: false
        }
    },
    methods: {
        onSetCurrent() {
            const navObj = this.$refs.navigation.findData('id', this.current)
            this.$refs.navigation.setCurrent(navObj)
        }
    }
}
</script>
<style scoped lang="scss">
.nav-column {
    background-image: linear-gradient(135deg, #eef3fe 0%, #eef3ff 40%, #eff4fa 74%);
}
</style>
