<template>
    <el-breadcrumb class="top-bread-crumb">
        <el-breadcrumb-item
            v-for="route in breadCrumbList"
            :key="route.path + route.name"
            :to="route.path ? { path: route.path } : null"
        >
            {{ route.name }}
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    name: 'breadCrumb',
    data() {
        return {
            breadCrumbList: [
                { path: '', name: '一级菜单' },
                { path: '', name: '二级菜单' },
                { path: '', name: '三级菜单' }
            ]
        }
    }
}
</script>
