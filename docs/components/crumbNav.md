---
title: CrumbNav 面包屑导航
---

# CrumbNav 面包屑导航

### 基础用法

<div class="m-example">
    <zrx-crumb-nav :menu="menu1"></zrx-crumb-nav>
</div>

::: details 示例代码

```html
<zrx-crumb-nav :menu="menu1"></zrx-crumb-nav>
<script>
export default {
    data() {
        return {
            menu1: [
                {
                    label: '一级菜单',
                    path: '/'
                },
                {
                    label: '二级菜单',
                    path: '/'
                },
                {
                    label: '当前页面',
                    path: '/components/crumbNav.html'
                }
            ]
        }
    }
}
</script>
```

:::

### 下拉多选

超过4个条目时切换为下拉模式

<div class="m-example">
    <zrx-crumb-nav :menu="menu2"></zrx-crumb-nav>
</div>

::: details 示例代码

```html
<zrx-crumb-nav :menu="menu2"></zrx-crumb-nav>
<script>
export default {
    data() {
        return {
            menu2: [
                {
                    label: '一级菜单',
                    path: '/'
                },
                {
                    label: '二级菜单',
                    path: '/'
                },
                {
                    label: '三级菜单',
                    path: '/'
                },
                {
                    label: '四级菜单',
                    path: '/'
                },
                {
                    label: '当前页',
                    path: '/components/crumbNav.html'
                }
            ]
        }
    }
}
</script>
```

:::

### 自定义跳转

通过指定勾子可以阻止默认跳转行为

<div class="m-example">
    <zrx-crumb-nav :menu="menu3" @beforeSkip="beforeSkip"></zrx-crumb-nav>
</div>

::: details 示例代码

```html
<zrx-crumb-nav :menu="menu3" @beforeSkip="beforeSkip"></zrx-crumb-nav>
<script>
export default {
    data() {
        return {
            menu3: [
                {
                    label: '第一页',
                    path: '/home'
                },
                {
                    label: '第二页',
                    path: '/next'
                },
                {
                    label: '当前页',
                    path: '/components/crumbNav.html'
                }
            ]
        }
    },
    methods: {
        beforeSkip({ to, from, next }) {
            this.$notify({
                message: '阻止跳转'
            })
            next(false)
        }
    }
}
</script>
```

:::

### Attributes

| 参数        | 说明           | 类型    | 可选值                      | 默认值       |
| ----------- | -------------- | ------- | --------------------------- | ------------ |
| `menu`      | 导航栏数据     | Array   | —                           | []           |
| `plainLength`      | 多少项菜单之内不出现省略号 | string, number  | — | 4            |

### Events

| 事件名称  | 说明             | 回调参数                                      |
| --------- | ---------------- | --------------------------------------------- |
| `beforeSkip` | 跳转前的回调 | to: 目标对象, from: 源对象, next: 控制跳转是否进行 |
| `tabClick` | 菜单项选中的回调 | menuObj: 选中项的数据对象 |

<div>
    <contributor :maintainer="['agua']" :members="members"></contributor>
</div>

<script>
export default {
    name: 'crumbNavDemo',
    data() {
        return {
            menu1: [
                {
                    label: '一级菜单',
                    path: '/'
                },
                {
                    label: '二级菜单',
                    path: '/'
                },
                {
                    label: '当前页面',
                    path: '/components/crumbNav.html'
                }
            ],
            menu2: [
                {
                    label: '一级菜单',
                    path: '/'
                },
                {
                    label: '二级菜单',
                    path: '/'
                },
                {
                    label: '三级菜单',
                    path: '/'
                },
                {
                    label: '四级菜单',
                    path: '/'
                },
                {
                    label: '当前页',
                    path: '/components/crumbNav.html'
                }
            ],
            menu3: [
                {
                    label: '第一页',
                    path: '/home'
                },
                {
                    label: '第二页',
                    path: '/next'
                },
                {
                    label: '当前页',
                    path: '/components/crumbNav.html'
                }
            ],
            members: ['agua']
        }
    },
    methods: {
        beforeSkip({ to, from, next }) {
            this.$notify({
                message: '阻止跳转'
            })
            next(false)
        }
    }
}
</script>
