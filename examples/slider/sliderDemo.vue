<template>
    <div class="slider-demo">
        <h3>默认</h3>
        <div class="mb20"><el-slider v-model="value1"></el-slider></div>
        <div class="mb20"><el-slider v-model="value" range></el-slider></div>
        <h3>禁用</h3>
        <div class="mb20"><el-slider v-model="value2" disabled></el-slider></div>
        <h3>不显示间断点</h3>
        <div class="mb20"><el-slider v-model="value3" :step="10"></el-slider></div>
        <h3>显示间断点</h3>
        <div class="mb20"><el-slider v-model="value4" :step="10" show-stops></el-slider></div>
        <h3>带有输入框</h3>
        <div class="mb20"><el-slider v-model="value5" show-input></el-slider></div>
        <h3>默认</h3>
        <div class="mb20"><el-slider v-model="value1" show-input style="--inputNumHeight:28px"></el-slider></div>
        <h3>带有输入框禁用</h3>
        <div class="mb20"><el-slider v-model="value5" show-input disabled></el-slider></div>
    </div>
</template>
<script>
export default {
    name: 'sliderDemo',
    data() {
        return {
            value: [20, 45],
            value1: '',
            value2: 30,
            value3: '',
            value4: 20,
            value5: ''
        }
    }
}
</script>
<style lang="scss" scoped></style>
