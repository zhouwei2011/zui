<template>
    <div :class="['m-left-side', isCollapse && 'is-collapse']">
        <div class="app-name">
            <div class="app-icon" v-if="showAppIcon" :style="`background-image: url(${appIconUrl})`"></div>
            <div class="app-name-text" :style="`visibility: ${isCollapse ? 'hidden' : 'visible'}`" v-if="!isCollapse">
                {{ appName }}
            </div>
        </div>

        <el-menu
            ref="leftMenu"
            unique-opened
            :collapse="isCollapse"
            :collapse-transition="false"
            :default-active="defaultActiveKey"
        >
            <template v-for="item in menuList">
                <template v-if="item.children">
                    <el-submenu :key="item.id" :index="item.menuUrl">
                        <template #title>
                            <div
                                :style="`background-image: url(${item.icon})`"
                                class="menu-left-icon"
                                v-if="item.icon"
                            ></div>
                            <div class="menu-left-icon" v-else>
                                <i class="zrx-icon iconicon_24_common_details"></i>
                            </div>
                            <span>{{ item.menuName }}</span>
                        </template>
                        <el-menu-item
                            :key="option.id"
                            :index="option.menuUrl"
                            v-for="option in item.children"
                            @click="toRoute(option)"
                        >
                            <template #title>
                                <span>{{ option.menuName }}</span>
                            </template>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <el-menu-item :index="item.menuUrl" :key="item.id" v-else @click="toRoute(item)">
                    <div :style="`background-image: url(${item.icon})`" class="menu-left-icon" v-if="item.icon"></div>
                    <div class="menu-left-icon" v-else>
                        <i class="zrx-icon iconicon_24_common_details"></i>
                    </div>
                    <template #title>
                        <span>{{ item.menuName }}</span>
                    </template>
                </el-menu-item>
            </template>
        </el-menu>

        <div class="left-side-bottom">
            <div
                @click="handleCollapse"
                :class="`left-side-bottom-action zrx-icon iconicon_24_common_arrow_${isCollapse ? 'right' : 'left'}`"
            ></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navMenu',
    props: {
        menuList: {
            type: Array,
            default: () => []
        },
        isCollapse: {
            type: Boolean,
            default: false
        },
        showAppIcon: {
            type: Boolean,
            default: true
        },
        appIconUrl: {
            type: String,
            default: require('@/assets/logo.png')
        }
    },
    data() {
        return {
            defaultActiveKey: '',
            appName: '后台管理系统'
        }
    },
    methods: {
        handleCollapse() {
            this.$emit('collapse')
        },
        toRoute(route) {
            this.defaultActiveKey = route.menuUrl
            this.$emit('routeClick', route)
        }
    }
}
</script>

<style scoped lang="scss"></style>
