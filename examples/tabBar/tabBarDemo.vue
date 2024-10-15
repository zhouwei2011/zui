<!--示例tab切换-->
<template>
    <div class="tab-bar-demo">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <zrx-tab-bar v-model="tabObj1.current" :tabs="tabObj1.tabs"></zrx-tab-bar>
            <transition-group name="slideAsideTab" tag="div">
                <p class="papers" v-for="n in tabObj1.tabs" :key="n.value" v-if="tabObj1.current == n.value">{{ n.label }}</p>
            </transition-group>
        </div>
        <div class="tab-bar">
            <div class="wrap">
                <zrx-tab-bar v-model="tabObj.active1" :tabs="tabObj.menu1"></zrx-tab-bar>
                <zrx-tab-content :value="tabObj.active1">
                    <span :tab-key="1">标签页1</span>
                    <span :tab-key="2">tab2</span>
                    <span :tab-key="3">t</span>
                </zrx-tab-content>
            </div>
            <zrx-tab-bar v-model="tabObj.active2" :tabs="tabObj.menu" mode="scroll" :max-tabs-show="4">
                <template slot="tab" slot-scope="{ tabData }">
                    <span>{{ `${tabData.label}(${tabData.count})` }}</span>
                </template>
            </zrx-tab-bar>
            <zrx-tab-bar v-model="tabObj.active3" :tabs="tabObj.menu" mode="toggle"></zrx-tab-bar>
        </div>
    </div>
</template>
<script>
export default {
    name: 'tabBarDemo',
    components: {},
    data() {
        return {
            tabObj1: {
                current: 1,
                tabs: [
                    {
                        label: '用户中心',
                        value: 1
                    },
                    {
                        label: '应用中心',
                        value: 2
                    },
                    {
                        label: '用户管理',
                        value: 3
                    }
                ]
            },
            tabObj: {
                active1: 1,
                active2: 2,
                active3: 3,
                menu: [
                    {
                        label: 'tab1',
                        value: 1,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 2,
                        count: 0
                    },
                    {
                        label: 'tab3',
                        value: 3,
                        count: 34
                    },
                    {
                        label: 'tab4',
                        value: 4,
                        count: 0
                    },
                    {
                        label: 'tab5',
                        value: 5,
                        count: 5
                    },
                    {
                        label: 'tab6',
                        value: 6,
                        count: 6
                    },
                    {
                        label: 'tab7',
                        value: 7,
                        count: 12
                    },
                    {
                        label: 'tab8',
                        value: 8,
                        count: 0
                    },
                    {
                        label: 'tab9',
                        value: 9,
                        count: 20
                    },
                    {
                        label: 'tab10',
                        value: 10,
                        count: 0
                    },
                    {
                        label: 'tab11',
                        value: 11,
                        count: 2
                    },
                    {
                        label: 'tab12',
                        value: 12,
                        count: 11
                    },
                    {
                        label: 'tab13',
                        value: 13,
                        count: 50
                    },
                    {
                        label: 'tab14',
                        value: 14,
                        count: 22
                    },
                    {
                        label: 'tab15',
                        value: 15,
                        count: 0
                    },
                    {
                        label: 'tab16',
                        value: 16,
                        count: 66
                    }
                ],
                menu1: [
                    {
                        label: '标签页1',
                        value: 1,
                        count: 22
                    },
                    {
                        label: 'tab2',
                        value: 2,
                        count: 0
                    },
                    {
                        label: 't',
                        value: 3,
                        count: 34
                    }
                ]
            }
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
<style scoped lang="scss">
.wrap {
    display: inline-flex;
    flex-direction: column;
    .zrx-tab-content {
        margin: 0 24px;
        span {
            text-align: center;
        }
    }
}
</style>
