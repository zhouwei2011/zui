<template>
    <div class="wrap">
        <div class="zrx-inspect-table" style="--labelW: 140px; margin-bottom: 24px">
            <div :class="['cell', n.class]" v-for="(n, i) in tableData" :key="i">
                <p class="label">{{ n.label }}</p>
                <p class="text">{{ n.value }}</p>
            </div>
            <zrx-empty-state text="暂无数据" v-if="!tableData.length"></zrx-empty-state>
        </div>
        <div class="zrx-inspect-table">
            <zrx-empty-state></zrx-empty-state>
        </div>
    </div>
</template>

<script>
export default {
    name: 'inspectTableDemo',
    data() {
        return {
            tableData: [
                {
                    label: '审批类型',
                    value: '派遣'
                },
                {
                    label: '对接平台',
                    value: '四平台'
                },
                {
                    label: '申请人',
                    value: '王萍'
                },
                {
                    label: '申请人部门',
                    value: '经信局'
                },
                {
                    class: 'span-2',
                    label: '申请时间',
                    value: '2021-10-17 19:38:22'
                },
                {
                    label: '您的姓名',
                    value: '朱廷波'
                },
                {
                    label: '您的身份证号码',
                    value: 332624185900160018
                },
                {
                    label: '您的手机号码',
                    value: 15863245896
                },
                {
                    label: '人员类型',
                    value: '其他'
                },
                {
                    label: '是否居家隔离',
                    value: '否'
                },
                {
                    label: '居家隔离所在街道',
                    value: '/'
                }
            ]
        }
    }
}
</script>
