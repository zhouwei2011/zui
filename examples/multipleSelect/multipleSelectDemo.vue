<template>
    <div class="wrap">
        <zrx-multiple-select v-model="multipleObj.current" :option="multipleObj.option"></zrx-multiple-select>
    </div>
</template>

<script>
export default {
    name: 'multipleSelectDemo',
    data() {
        return {
            multipleObj: {
                current: [5, 3],
                option: [
                    {
                        label: '下拉选项1',
                        value: 1
                    },
                    {
                        label: '下拉选项2',
                        value: 2
                    },
                    {
                        label: '下拉选项3',
                        value: 3
                    },
                    {
                        label: '下拉选项4',
                        value: 4
                    },
                    {
                        label: '下拉选项5',
                        value: 5
                    }
                ]
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.wrap {
    position: relative;
    width: 300px;
    z-index: 10;
}
</style>
