<template>
    <div
        class="loading1"
        v-loading="loading1"
        element-loading-text="拼命加载中"
        element-loading-background="rgba(0, 0, 0, 0.8)"
    ></div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            loading1: true
        }
    },
    watch: {},
    computed: {},
    methods: {},
    created() {},
    mounted() {}
}
</script>
<style lang="scss" scoped>
.loading1 {
    width: 200px;
    height: 200px;
}
</style>
