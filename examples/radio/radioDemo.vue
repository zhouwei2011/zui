<template>
    <div class="radio-demo">
        <div class="mb20">
            <el-radio label="1" v-model="val1">未选中项</el-radio>
            <el-radio label="2" v-model="val1">选中项</el-radio>
            <el-radio label="3" v-model="val2" disabled>未选失效项</el-radio>
            <el-radio label="4" v-model="val2" disabled>选中失效项</el-radio>
        </div>
    </div>
</template>

<script>
export default {
    name: 'radioDemo',
    data() {
        return {
            val1: '2',
            val2: '4'
        }
    }
}
</script>

<style scoped lang="scss"></style>
