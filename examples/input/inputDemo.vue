<template>
    <div class="input-demo">
        <div class="mb20">
            <h2 class="title">基础输入框</h2>
            <el-input v-model="val10" placeholder="请输入" clearable> </el-input>
        </div>

        <div class="mb20">
            <h2 class="title">带ICON输入框</h2>
            <div class="column">
                <el-input v-model="val12" placeholder="请输入" clearable>
                    <i class="icon svg-icon zrx-icon-magnifier" slot="suffix"></i>
                </el-input>
                <el-input v-model="val5" placeholder="请输入" prefix-icon="svg-icon zrx-icon-double-angle-left"></el-input>
                <el-input v-model="val13" placeholder="请输入" prefix-icon="svg-icon zrx-icon-double-angle-left" suffix-icon="svg-icon zrx-icon-magnifier" clearable></el-input>
            </div>
        </div>
        <div class="mb20">
            <h2 class="title">限制字数的输入框</h2>
            <div class="column">
                <el-input v-model="val1" placeholder="请输入" clearable show-word-limit maxlength="64"></el-input
                ><el-input
                    show-word-limit
                    maxlength="300"
                    v-model="val2"
                    placeholder="请输入"
                    prefix-icon="svg-icon zrx-icon-double-angle-left"
                    suffix-icon="svg-icon zrx-icon-magnifier"
                    clearable
                ></el-input>
            </div>
        </div>
        <div class="mb20">
            <h2 class="title">预设内容的输入框</h2>
            <div class="column">
                <el-input v-model="val4" placeholder="请输入"></el-input
                ><el-input
                    show-word-limit
                    maxlength="300"
                    v-model="val14"
                    placeholder="请输入"
                    prefix-icon="svg-icon zrx-icon-double-angle-left"
                    suffix-icon="svg-icon zrx-icon-magnifier"
                    clearable
                ></el-input>
            </div>
            <h4 class="title">预设提示内容的输入框</h4>
            <el-input placeholder="www.mysite" v-model="val3">
                <template slot="prepend">Http://</template>
                <template slot="append">.com</template>
            </el-input>
        </div>
        <div class="mb20"></div>

        <div class="mb20">
            <h2 class="title">文本域</h2>
            <el-input v-model="val9" placeholder="请输入" maxlength="300" show-word-limit type="textarea"></el-input>
        </div>
        <div class="mb20">
            <h2 class="title">禁用输入框</h2>
            <el-input v-model="val7" placeholder="请输入" disabled></el-input>
            <el-input
                show-word-limit
                maxlength="300"
                v-model="val8"
                placeholder="请输入"
                prefix-icon="svg-icon zrx-icon-double-angle-left"
                suffix-icon="svg-icon zrx-icon-magnifier"
                clearable
                disabled
            ></el-input>
            <el-input placeholder="www.mysite" v-model="val3" disabled>
                <template slot="prepend">Http://</template>
                <template slot="append">.com</template>
            </el-input>
            <el-input v-model="val11" placeholder="请输入" type="textarea" disabled></el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'inputDemo',
    data() {
        return {
            val1: '',
            val2: '',
            val3: '',
            val4: '示例文字',
            val5: '',
            val7: '',
            val8: '',
            val9: '',
            val10: '',
            val11: '',
            val12: '',
            val13: '',
            val14: '示例文字'
        }
    },
    methods: {}
}
</script>

<style scoped lang="scss">
.input-demo {
    .title {
        margin-bottom: 10px;
        border-bottom: none;
    }
    .el-input {
        width: 250px;
        margin-bottom: 10px;

        &.el-input-group {
            width: 400px;
        }
    }

    .mb20 {
        margin-bottom: 20px;
    }
    .column {
        display: flex;
        .el-input {
            margin-right: 10px;
        }
    }
}
</style>
