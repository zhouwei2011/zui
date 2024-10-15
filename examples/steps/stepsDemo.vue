<template>
    <div class="steps-demo">
        <zrx-steps :active="2">
            <zrx-step status="finish" title="开始" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="success" title="审批1" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="process" title="审批2" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="wait" title="结束" description="This is a very very long discribtion"></zrx-step>
        </zrx-steps>
        <zrx-steps :active="2" style="margin-top: 50px">
            <zrx-step status="finish" title="开始" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="success" title="审批1" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="process" title="审批2" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="wait" title="结束" icon="svg-icon zrx-icon-magnifier" description="This is a very very long discribtion"></zrx-step>
        </zrx-steps>

        <zrx-steps :active="2" direction="vertical" style="margin-top: 50px">
            <zrx-step status="finish" title="开始" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="success" title="审批1" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="process" title="审批2" description="This is a very very long discribtion"></zrx-step>
            <zrx-step status="wait" title="结束" description="This is a very very long discribtion"></zrx-step>
        </zrx-steps>
    </div>
</template>

<script>
export default {
    name: 'stepsDemo',
    data() {
        return {
            active: 1
        }
    }
}
</script>

<style scoped lang="scss">
.steps-demo {
    .el-steps.el-steps--horizontal {
        width: 300px;
        margin-bottom: 40px;
    }
}
</style>
