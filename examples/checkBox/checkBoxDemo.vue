<template>
    <div class="checkbox-demo">
        <div>
            <el-checkbox v-model="checked" :indeterminate="isIndeterminate" @change="changeAll">半选中项</el-checkbox>
            <el-checkbox-group v-model="checkLists" @change="singleCheck">
                <el-checkbox label="checked1">未选中项</el-checkbox>
                <el-checkbox label="checked2">选中项</el-checkbox>
                <el-checkbox label="checked3">未选失效项</el-checkbox>
                <el-checkbox label="checked4">选中失效项</el-checkbox>
            </el-checkbox-group>
        </div>
        <el-checkbox label="checked1">未选中项</el-checkbox>
        <el-checkbox label="checked2">选中项</el-checkbox>
        <el-checkbox v-model="checked1" disabled>未选失效项</el-checkbox>
        <el-checkbox v-model="checked2" disabled>选中失效项</el-checkbox>
    </div>
</template>

<script>
export default {
    name: 'checkBoxDemo',
    data() {
        return {
            checked: false,
            checked1: false,
            checked2: true,
            isIndeterminate: true,
            checkLists: ['checked2', 'checked4'],
            allCheck: ['checked1', 'checked2', 'checked3', 'checked4']
        }
    },
    methods: {
        changeAll(val) {
            if (val == true) {
                this.checkLists = this.allCheck
            } else if (val == false) {
                this.checkLists = []
            }
            this.isIndeterminate = false
        },
        singleCheck(val) {
            this.isIndeterminate = val.length > 0 && val.length < this.allCheck.length
            if (val.length == this.allCheck.length) {
                this.checked = true
            } else if (val.length == 0) {
                this.checked = false
            }
        }
    }
}
</script>

<style scoped lang="scss"></style>
