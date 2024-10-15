<template>
    <div class="datePicker-demo">
        <div>
            <h4>默认</h4>
            <el-date-picker v-model="value0" type="date" :placeholder="placeholder"></el-date-picker>
        </div>
        <div>
            <h4>带快捷选项</h4>
            <el-date-picker
                v-model="value1"
                type="date"
                :placeholder="placeholder"
                :picker-options="pickerOptions"
            ></el-date-picker>
        </div>

        <div>
            <h4>选择周</h4>
            <el-date-picker v-model="value2" type="week" format="yyyy 第 WW 周" placeholder="选择周"> </el-date-picker>
        </div>

        <div>
            <h4>选择月</h4>
            <el-date-picker v-model="value3" type="month" placeholder="选择月"> </el-date-picker>
        </div>

        <div>
            <h4>选择年</h4>
            <el-date-picker v-model="value4" type="year" placeholder="选择年"> </el-date-picker>
        </div>

        <div>
            <h4>日期范围选择</h4>
            <el-date-picker
                v-model="value5"
                type="daterange"
                :start-placeholder="placeholder"
                :end-placeholder="placeholder"
            ></el-date-picker>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DatePickerDemo',
    data() {
        return {
            value0: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            placeholder: '年 / 月 / 日',
            pickerOptions: {
                shortcuts: [
                    {
                        text: '今天',
                        onClick(picker) {
                            picker.$emit('pick', new Date())
                        }
                    }
                ],
                disabledDate(time) {
                    return time.getTime() > Date.now()
                }
            }
        }
    }
}
</script>

<style scoped lang="scss">
.datePicker-demo {
    padding: 30px 0;
    .el-date-editor {
        margin-right: 15px;
        margin-bottom: 15px;
    }
}
</style>
