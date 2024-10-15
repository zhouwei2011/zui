<template>
    <div class="wrap">
        <a class="btn btn-primary" @click="collapse = true" v-if="!collapse">折叠</a>
        <a class="btn btn-primary" @click="collapse = false" v-if="collapse">展开</a>
        <el-select v-model="current" placeholder="选中某一项" @change="onSetCurrent">
            <el-option v-for="n in navOptions" :label="n.label" :value="n.value" :key="n.value"></el-option>
        </el-select>
        <div class="nav-column">
            <zrx-navigation :menu="menu" :collapse="collapse" accordian @onclick="onSelect" ref="navigation"></zrx-navigation>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigationDemo',
    data() {
        return {
            current: '',
            menu: [
                {
                    icon: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
                    label: '一级导航',
                    id: '1',
                    children: [
                        {
                            icon: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a481jpeg.jpeg/a',
                            defaultIcon: 'zrx-icon-info',
                            label: '二级导航',
                            id: '1-1',
                            children: []
                        },
                        {
                            label: '二级导航',
                            id: '1-2',
                            children: []
                        },
                        {
                            label: '二级导航',
                            id: '1-3',
                            children: []
                        }
                    ]
                },
                {
                    icon: 'svg-icon zrx-icon-paper-clip',
                    label: '一级导航',
                    id: '2',
                    children: []
                },
                {
                    icon: '',
                    label: '一级导航',
                    id: '3',
                    children: [
                        {
                            label: '二级导航',
                            id: '3-1',
                            children: []
                        },
                        {
                            label: '二级导航',
                            id: '3-2',
                            children: []
                        }
                    ]
                },
                {
                    icon: '',
                    label: '一级导航',
                    id: '4',
                    children: [
                        {
                            label: '二级导航',
                            id: '4-1',
                            children: []
                        }
                    ]
                },
                {
                    icon: '',
                    label: '一级导航',
                    id: '5',
                    children: []
                },
                {
                    icon: '',
                    label: '一级导航',
                    id: '6',
                    children: []
                },
                {
                    icon: '',
                    label: '一级导航',
                    id: '7',
                    children: []
                }
            ],
            collapse: false
        }
    },
    methods: {
        onSelect(navObj, level) {
            console.log(navObj, level)
        },
        onSetCurrent() {
            const navObj = this.$refs.navigation.findData('id', this.current)
            this.$refs.navigation.setCurrent(navObj)
        }
    },
    computed: {
        navOptions() {
            const res = []
            const iterator = list => {
                list.forEach(item => {
                    res.push({
                        label: item.label,
                        value: item.id
                    })
                    if (item.children?.length) {
                        iterator(item.children)
                    }
                })
            }
            iterator(this.menu)
            return res
        }
    }
}
</script>

<style scoped lang="scss">
.wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.nav-column {
    background-image: linear-gradient(135deg, #eef3fe 0%, #eef3ff 40%, #eff4fa 74%);
}
</style>
