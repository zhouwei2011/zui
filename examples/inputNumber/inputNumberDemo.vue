<template>
    <div class="inputNumber-demo">
        <div class="m-demo-row">
            <div class="flex-bar">
                <el-input-number v-model="val" controls-position="right" @change="handleChange" :min="0" :max="99"></el-input-number>
                <el-input-number v-model="val" controls-position="right" @change="handleChange" :min="0" :max="99" disabled></el-input-number>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'inputNumberDemo',
    data() {
        return {
            val: 0
        }
    },
    methods: {
        handleChange(val) {
            console.log(val)
        }
    }
}
</script>

<style lang="scss" scoped>
.el-input-number {
    &:last-of-type {
        margin-left: 10px;
    }
}
</style>
