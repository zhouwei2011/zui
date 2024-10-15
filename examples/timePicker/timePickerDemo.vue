<template>
    <div class="timePicker-demo">
        <div class="m-demo-row">
            <h2 class="title">基础用法 - （{{ val1 }}）</h2>
            <div class="gallery">
                <zrx-time-picker v-model="val1" placeholder="请选择" format="HH:mm"></zrx-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">基础用法 - （{{ val2 }}）</h2>
            <div class="gallery">
                <zrx-time-picker v-model="val2" placeholder="请选择" format="HH:mm" value-format="HH:mm:ss" prefix="1970-01-01 "></zrx-time-picker>
                <!-- <zrx-time-picker v-model="val2" placeholder="请选择" value-format="HH:mm:ss" prefix="1970-01-01 " format="HH"></zrx-time-picker> -->
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">基础用法 - （{{ val3 }}）</h2>
            <div class="gallery">
                <!-- <zrx-time-picker v-model="val3" placeholder="请选择" value-format="HH:mm:ss" is-range prefix="1970-01-01 "></zrx-time-picker> -->
                <zrx-time-picker v-model="val3" placeholder="请选择" format="HH:mm" value-format="HH:mm:ss" is-range prefix="1970-01-01 "></zrx-time-picker>
                <!-- <zrx-time-picker v-model="val3" placeholder="请选择" format="HH" value-format="HH:mm:ss" is-range prefix="1970-01-01 "></zrx-time-picker> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val1: '',
            val2: '',
            val3: []
        }
    }
}
</script>
