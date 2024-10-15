<template>
    <div>
        <h2>TimePicker 时间选择器</h2>
        <h3>时间点选择</h3>
        <el-time-picker
            v-model="value1"
            value-format="HH:mm:ss"
            :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
            placeholder="请选择时间"
        >
        </el-time-picker>
        <h3>时间范围选择</h3>
        <el-time-picker
            value-format="HH:mm:ss"
            format="HH:mm:ss"
            is-range
            v-model="value2"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
        >
        </el-time-picker>
        <h3>时间点禁用</h3>
        <el-time-picker
            v-model="value1"
            value-format="HH:mm:ss"
            :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
            placeholder="请选择时间"
            disabled
        >
        </el-time-picker>
        <h3>时间范围选择禁用</h3>
        <el-time-picker
            value-format="HH:mm:ss"
            format="HH:mm:ss"
            is-range
            v-model="value2"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
            disabled
        >
        </el-time-picker>
        <h2>DatePicker 日期选择器</h2>
        <h3>日期选择</h3>
        <el-date-picker
            v-model="value3"
            type="date"
            placeholder="选择日期"
        >
        </el-date-picker>
        <h3>日期选择(今天快捷键 + 禁止选择今天之前的日期)</h3>
        <el-date-picker
            v-model="value3"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
        >
        </el-date-picker>
        <h3>周选择</h3>
        <el-date-picker
            v-model="value4"
            type="week"
            format="yyyy-WW周"
            placeholder="请选择周"
        >
        </el-date-picker>
        <h3>月选择</h3>
        <h4>element月份每行4个,与UI规范的不一致</h4>
        <el-date-picker
            v-model="value5"
            type="month"
            format="yyyy-MM"
            placeholder="请选择月"
        >
        </el-date-picker>
        <h3>年选择</h3>
        <h4>element年份每行4个,与UI规范的不一致</h4>
        <el-date-picker
            v-model="value6"
            type="year"
            placeholder="请选择年"
        >
        </el-date-picker>
        <h3>日期范围选择</h3>
        <el-date-picker
            v-model="value7"
            format="yyyy年M月d日"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
        >
        </el-date-picker>
        <h3>日期禁用</h3>
        <el-date-picker
            v-model="value3"
            type="date"
            placeholder="选择日期"
            disabled
        ></el-date-picker>
        <el-date-picker
            v-model="value4"
            type="week"
            format="yyyy-WW周"
            placeholder="请选择周"
            disabled
        >
        </el-date-picker>
        <el-date-picker
            v-model="value5"
            type="month"
            format="yyyy-MM"
            placeholder="请选择月"
            disabled
        >
        </el-date-picker>
        <el-date-picker
            v-model="value6"
            type="year"
            placeholder="请选择年"
            disabled
        >
        </el-date-picker>
        <el-date-picker
            v-model="value7"
            format="yyyy年M月d日"
            value-format="yyyy-MM-dd"
            type="daterange"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
            disabled
        >
        </el-date-picker>
    </div>
</template>
<script>
export default {
    name: 'elTimeDatePickerDemo',
    data() {
        return {
            value1: '11:22:00',
            value2: ['11:22:00', '16:00:00'],
            value3: '2023-04-24',
            value4: '2023-04',
            value5: '2023-04',
            value6: '2023',
            value7: ['2023-04-24', '2023-04-27'],
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() + 24 * 60 * 60 * 1000 < Date.now()
                },
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date())
                        }
                    }
                ]
            },
            pickerOptions2: {
                disabledDate(time) {
                    return time.getTime() + 24 * 60 * 60 * 1000 < Date.now()
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
h2 {
    font-size: 20px;
    line-height: 40px;
}
h3 {
    font-size: 18px;
    line-height: 30px; 
}
.el-date-editor {
    width: 200px;
}
</style>