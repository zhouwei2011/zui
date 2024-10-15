<template>
    <div class="date-time-picker-demo">
        <div class="m-demo-row">
            <h2 class="title">年 - （{{ val1 }}）</h2>
            <div class="gallery">
                <zrx-date-time-picker v-model="val1" type="year" format="yyyy" value-format="yyyy"></zrx-date-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">月 - （{{ val2 }}）</h2>
            <div class="gallery">
                <zrx-date-time-picker v-model="val2" type="month" value-format="yyyy-MM"></zrx-date-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">日 - （{{ val3 }}）</h2>
            <div class="gallery">
                <zrx-date-time-picker v-model="val3" type="date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">周 - （{{ val4 }}）</h2>
            <div class="gallery">
                <zrx-date-time-picker v-model="val4" type="week" value-format="yyyy-MM-dd"></zrx-date-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">日期时间 - （{{ val5 }}）</h2>
            <div class="gallery">
                <!-- <zrx-date-time-picker v-model="val5" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"></zrx-date-time-picker> -->
                <zrx-date-time-picker v-model="val5" type="datetime" format="yyyy-MM-dd HH:mm:ss" value-format="yyyy-MM-dd HH:mm:ss"></zrx-date-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">日期范围 - （{{ val6 }}）</h2>
            <div class="gallery">
                <zrx-date-time-picker v-model="val6" type="daterange" format="yyyy/MM/dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">日期时间范围 - （{{ val7 }}）</h2>
            <div class="gallery">
                <zrx-date-time-picker v-model="val7" type="datetimerange" format="yyyy-MM-dd HH:mm:ss" rangeSeparator="-" value-format="yyyy-MM-dd HH:mm:ss"></zrx-date-time-picker>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">多日期 - （{{ val8 }}）</h2>
            <div class="gallery">
                <!-- <zrx-date-time-picker v-model="val8" type="dates" format="yyyy-MM-dd" :clearable="false" value-format="yyyy/MM/dd"></zrx-date-time-picker> -->
                <zrx-date-time-picker v-model="val8" type="dates" format="yyyy-MM-dd" value-format="yyyy-MM-dd"></zrx-date-time-picker>
            </div>
        </div>
        <el-button type="primary" v-on:click="reset">重置</el-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            val1: '2001-01-01 10:11:12',
            val2: new Date(),
            val3: new Date(),
            val4: new Date(),
            val5: new Date(),
            val6: ['2001-01-01 10:11:12', '2001-02-01 10:11:12'],
            val7: ['2001-01-01 10:11:12', '2001-02-01 10:11:12'],
            val8: ['2001-01-01 10:11:12', '2001-02-01 10:11:12']
        }
    },
    methods: {
        reset: function () {
            this.val1 = this.val2 = this.val3 = this.val4 = this.val5 = null
            this.val6 = this.val7 = this.val8 = []
        }
    }
}
</script>
