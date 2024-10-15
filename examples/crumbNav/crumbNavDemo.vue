<template>
    <div class="wrap">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <p class="subtitle">基础的面包屑导航展示</p>
            <div class="gallery">
                <zrx-crumb-nav :menu="menu1"></zrx-crumb-nav>
            </div>
            <div class="describe">一般位于页面顶部，占56px高度</div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">下拉多选</h2>
            <p class="subtitle">超过4个条目时切换为下拉模式</p>
            <div class="gallery">
                <zrx-crumb-nav :menu="menu2"></zrx-crumb-nav>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">自定义跳转</h2>
            <div class="gallery">
                <zrx-crumb-nav :menu="menu3" @beforeSkip="beforeSkip"></zrx-crumb-nav>
            </div>
            <div class="describe">通过指定勾子可以阻止默认跳转行为</div>
        </div>
    </div>
</template>

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
                    label: '上一页',
                    path: '/home'
                },
                {
                    label: '当前页',
                    path: '/components/crumbNav.html'
                },
                {
                    label: '下一页',
                    path: '/next'
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
