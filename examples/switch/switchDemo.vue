<template>
    <div class="switch-demo">
        <el-switch v-model="value1"></el-switch>
        <el-switch v-model="value1" size="middle"></el-switch>
        <el-switch v-model="value1" size="small"></el-switch>
        <el-switch v-model="value2" active-text="开启" inactive-text="关闭"></el-switch>
        <el-switch v-model="value3" disabled></el-switch>
        <el-switch v-model="value4" disabled></el-switch>
    </div>
</template>

<script>
export default {
    name: 'switchDemo',
    data() {
        return {
            value1: true,
            value2: false,
            value3: true,
            value4: false
        }
    }
}
</script>
<style lang="scss" scoped>
.el-switch ::v-deep {
    margin-right: 32px;
}
</style>
