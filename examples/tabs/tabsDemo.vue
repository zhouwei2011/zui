<template>
    <div class="tabs-demo">
        <el-tabs v-model="activeName" stretch>
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third" disabled></el-tab-pane>
        </el-tabs>

        <el-tabs v-model="activeName1" stretch border-position="top" :style="`--tabsNumber: ${tabsNumber}`">
            <el-tab-pane label="用户管理" name="first"></el-tab-pane>
            <el-tab-pane label="配置管理" name="second"></el-tab-pane>
            <el-tab-pane label="角色管理" name="third" disabled></el-tab-pane>
        </el-tabs>

        <el-tabs v-model="activeName2" stretch>
            <el-tab-pane :key="tab.name" :name="tab.name" :label="tab.label" v-for="tab in tabList" :disabled="tab.disabled"></el-tab-pane>
        </el-tabs>

        <el-tabs v-model="activeName3" stretch type="card">
            <el-tab-pane label="Tab1" name="first"></el-tab-pane>
            <el-tab-pane label="Tab22222222222222" name="second"></el-tab-pane>
            <el-tab-pane label="每项宽度可自适应,最大宽度192px，超出时省略" name="third"></el-tab-pane>
            <el-tab-pane label="Tab4" name="fourth" disabled></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
export default {
    name: 'tabsDemo',
    data() {
        return {
            activeName: 'second',
            activeName1: 'first',
            activeName2: '1',
            activeName3: '1',
            tabList: [],
            tabsNumber: '3px'
        }
    },
    created() {
        this.createTabsList()
    },
    methods: {
        createTabsList() {
            for (let i = 0; i < 28; i++) {
                this.tabList.push({
                    name: String(i),
                    disabled: !(i % 3),
                    label: `标签页${i + 1}`
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
.tabs-demo {
    .el-tabs {
        width: 500px;
        height: 100px;
    }
}
</style>
