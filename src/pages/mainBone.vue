<template>
    <div class="g-root-context">
        <nav-menu :isCollapse="isCollapse" :menuList="menuList" @collapse="isCollapse = !isCollapse" @routeClick="routeClick"></nav-menu>

        <top-bar :class="[isCollapse && 'is-collapse']"></top-bar>

        <div :class="['g-floor-context', isCollapse && 'is-collapse']">
            <!-- 换肤简易版 -->
            <!-- <skin-peeler></skin-peeler> -->
            <!-- 适应栅格 -->
            <!-- <adapt-grid></adapt-grid> -->
            <!-- <theme-picker></theme-picker> -->
            <component :is="moduleName" v-if="currentRoute" :key="moduleName"></component>
        </div>
    </div>
</template>

<script>
// import AdaptGrid from './adaptGrid.vue'
import navMenu from './layout/navMenu.vue'
import TopBar from './layout/topBar.vue'
import ThemePicker from './themePicker.vue'

const menuList = []
const modulesFiles = require.context('../../examples', true, /\.vue$/)
const components = modulesFiles.keys().reduce((components, modulePath) => {
    const moduleNames = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('/')
    const moduleName = moduleNames[moduleNames.length - 1]
    const value = modulesFiles(modulePath)
    components[moduleName] = value.default

    menuList.push({
        updateDate: '2021-12-22T06:54:40.000+00:00',
        parentIds: '1,',
        icon: 'http://10.10.120.211:30007/e5725177-19b2-46a5-842e-d491eace3d2c.svg?name=应用概览.svg&type=svg',
        menuName: moduleName.replace('Demo', ''),
        platformId: Math.random(),
        sort: '1',
        delFlag: '0',
        parentId: '1',
        authoritySign: '/applicationManage/overview',
        createBy: '1',
        isDefault: '0',
        id: moduleName + Math.random(),
        updateBy: '1',
        menuType: '2',
        menuUrl: moduleName + Math.random(),
        state: '1',
        platformName: '应用管理',
        remarks: '',
        createDate: '2020-10-29T06:11:28.000+00:00'
    })
    return components
}, {})

export default {
    name: 'mainBone',
    components: { navMenu, TopBar, ThemePicker, ...components },
    data() {
        return {
            isCollapse: false,
            currentRoute: 'upload',
            menuList: menuList
        }
    },
    computed: {
        moduleName() {
            return `${this.currentRoute}Demo`
        }
    },
    methods: {
        routeClick(route) {
            this.currentRoute = route.menuName
        }
    }
}
</script>

<style lang="scss" scoped>
.g-root-context {
    display: grid;
    grid-template-columns: $--menu-collaspe-width calc($--menu-width - $--menu-collaspe-width) auto;
    grid-template-rows: $--top-bar-height auto;
    width: 100vw;
    min-height: 100vh;
    ::v-deep .m-left-side {
        grid-column: 1 / 3;
        grid-row: 1 / 3;
        position: sticky;
        top: 0px;
        z-index: 10;
        height: 100vh;
        padding-bottom: $--left-side-padding-bottom;
        background-color: $--left-side-bg;

        &.is-collapse {
            grid-column: 1 / 2;

            .app-name {
                .app-icon {
                    margin-right: 0;
                }
            }

            .left-side-bottom {
                padding-left: 0;
                justify-content: center;
            }
        }

        .app-name {
            @include flex-center;
            flex-shrink: 0;
            height: $--top-bar-height;

            .app-icon {
                margin-right: 12px;
                width: 24px;
                height: 24px;
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-position: center center;
            }

            .app-name-text {
                font-size: 24px;
                color: $--app-name-text;
            }
        }

        .el-menu {
            overflow: overlay;
            max-height: calc(100vh - $--top-bar-height - $--left-side-padding-bottom);
            @include scrollbar($--menu-text, $--menu-bg); //scrollbar函数更改，不传参
        }

        .left-side-bottom {
            position: absolute;
            left: 0;
            bottom: 24px;
            width: 100%;
            color: #fff;
            font-size: 24px;
            height: 48px;
            display: flex;
            align-items: center;
            padding-left: 38px;

            .left-side-bottom-action {
                font-size: 24px;
                cursor: pointer;
            }
        }
    }

    ::v-deep .g-top-bar {
        grid-column: 3 / 4;
        grid-row: 1/2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: sticky;
        top: 0;
        left: 0;
        z-index: 20;
        padding: 0 $--page-padding;
        height: $--top-bar-height;
        box-sizing: border-box;
        background-color: $--top-bar-bg;
        border-bottom: solid 1px #e7e7eb;

        &.is-collapse {
            grid-column: 2/ 4;
        }

        .top-bread-crumb {
            float: left;
        }

        .top-bar-right {
            @include flex-center;

            .top-avatar {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                margin-right: 12px;
            }
        }
    }

    ::v-deep .g-floor-context {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        background-color: $disabled;
        padding: $--page-padding;
        overflow: auto;
        height: calc(100vh - $--top-bar-height);

        &.is-collapse {
            grid-column: 2/ 4;
        }
    }
}
</style>
