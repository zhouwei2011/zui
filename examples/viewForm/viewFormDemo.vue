<!--查看表单示例demo-->
<template>
    <div class="zrx-view-form">
        <div class="m-part-box" v-for="item in viewFormData" :key="item.id">
            <span class="s-label" :title="item.label">{{ item.label }}</span>
            <span class="s-content" :title="item.content">{{ item.content }}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'viewFormDemo',
    components: {},
    data() {
        return {
            viewFormData: [
                {
                    id: 'iuiuhguy',
                    label: '流程标题流程标题流程标题流程标题流程标题流程标题流程标题',
                    content: '请假流程-张三请假流程-张三请假流程-张三请假流程-张三'
                },
                {
                    id: 'iuiuhguyf222',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy333',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy444',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy555',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy666',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy777',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy888',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy999',
                    label: '流程标题',
                    content: '请假流程-张三'
                }
            ]
        }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {},
    computed: {},
    filters: {}
}
</script>
<style scoped lang="scss"></style>
