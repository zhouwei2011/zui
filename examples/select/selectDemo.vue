<template>
    <div class="select-demo">
        <div class="mb20">
            <el-select v-model="slectVal1" clearable :popper-append-to-body="false">
                <el-option label="搜索建议1" value="1"></el-option>
                <el-option label="搜索建议2" value="2"></el-option>
                <el-option label="搜索建议3" value="3"></el-option>
            </el-select>
            <el-select v-model="slectVal2" clearable>
                <el-option-group label="类别1">
                    <el-option label="搜索建议1" value="1"></el-option>
                    <el-option label="搜索建议2" value="2"></el-option>
                    <el-option label="搜索建议3" value="3" disabled></el-option>
                </el-option-group>
                <el-option-group label="类别2">
                    <el-option label="搜索建议4" value="4"></el-option>
                    <el-option label="搜索建议5" value="5"></el-option>
                    <el-option label="搜索建议6" value="6"></el-option>
                </el-option-group>
            </el-select>
            <!-- 多选禁用样式需要额外添加class="is-disabled" -->
            <el-select v-model="slectVal3" collapse-tags clearable multiple filterable disabled class="is-disabled">
                <el-option label="搜索建议1" value="1"></el-option>
                <el-option label="搜索建议2" value="2"></el-option>
                <el-option label="搜索建议3" value="3"></el-option>
            </el-select>
            <el-select v-model="slectVal5" clearable disabled>
                <el-option label="搜索建议1" value="1"></el-option>
                <el-option label="搜索建议2" value="2"></el-option>
                <el-option label="搜索建议3" value="3"></el-option>
            </el-select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'selectDemo',
    data() {
        return {
            slectVal1: '',
            slectVal2: '',
            slectVal3: ['1', '2'],
            slectVal4: [],
            slectVal5: '1'
        }
    }
}
</script>

<style scoped lang="scss">
.select-demo {
    .el-select {
        margin-right: 15px;
        width: 220px;
        margin-bottom: 20px;
    }
}
</style>
