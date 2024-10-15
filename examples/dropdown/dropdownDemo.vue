<template>
    <div class="wrap">
        <div>
            <h2>hover激活</h2>
            <el-dropdown>
                <el-button type="primary">下拉菜单dropdown</el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="n in options" :key="n.value" :disabled="n.disabled">
                        {{ n.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div>
            <h2>click激活</h2>
            <el-dropdown trigger="click">
                <el-button type="primary">下拉菜单dropdown</el-button>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="n in options" :key="n.value" :disabled="n.disabled">
                        {{ n.label }}
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: 'dropdownDemo',
    data() {
        return {
            options: [
                {
                    label: '选项一',
                    value: 1
                },
                {
                    label: '选项二',
                    value: 2,
                    disabled: true
                },
                {
                    label: '选项三',
                    value: 3
                },
                {
                    label: '选项四',
                    value: 4
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
.wrap {
    h2 {
        margin: 20px 0 10px 0;
    }
}
</style>
