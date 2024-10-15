<template>
    <div class="progress-demo">
        <div class="m-demo-row">
            <h2 class="title">指令式用法</h2>
            <p class="m-row"><el-button type="primary" @click="progress1 = true">加载</el-button></p>
            <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress="progress1">
                <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
                <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
                <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
            </el-table>
            <p class="describe">Progress提供了两种调用方法：指令和标签。对于指令v-progress，需绑定Boolean值</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">添加至body</h2>
            <p class="m-row"><el-button type="primary" @click="progress2 = true">加载</el-button></p>
            <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress.body="progress2">
                <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
                <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
                <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
            </el-table>
            <p class="describe">指令式调用默认将进度条添加至指令元素，添加 body 修饰符可将进度条插入至body</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">直接操作</h2>
            <p class="subtitle">通过节点绑定的vm对象直接调用 progress 实例的方法，操作进度条状态</p>
            <div class="progress-bar" v-progress="progress3" ref="progressBar"></div>
            <div class="flex-bar">
                <el-button type="primary" @click="onStart">启动/继续</el-button>
                <el-button @click="onPause">暂停</el-button>
                <el-button @click="onFinish">结束</el-button>
                <el-button type="danger" @click="onFail">失败</el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">设置时长</h2>
            <p class="subtitle">设置progress持续时长</p>
            <div class="gallery" v-progress.bottom="progress4" style="padding-bottom: 16px; position: relative">
                <p>15s</p>
            </div>
            <div class="gallery" v-progress:[30].bottom="progress4" style="padding-bottom: 16px; position: relative">
                <p>30s</p>
            </div>
            <div class="m-row" style="width: 600px; margin-top: 16px"><el-button type="primary" @click="progress4 = true">加载</el-button></div>
            <p class="describe">默认持续时间15s，可通过指令参数更改时长</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">更改背景</h2>
            <p class="subtitle">可以定义背景颜色，默认透明</p>
            <div class="m-row"><el-button type="primary" @click="progress5 = true">加载</el-button></div>
            <el-table header-row-class-name="header-row-class" :data="table1" row-key="id" v-progress="progress5" zrx-progress-background="rgba(0,0,0,0.5)">
                <el-table-column prop="id" label="序号" show-overflow-tooltip></el-table-column>
                <el-table-column prop="date" label="日期" show-overflow-tooltip></el-table-column>
                <el-table-column prop="name" label="姓名" show-overflow-tooltip></el-table-column>
                <el-table-column prop="address" label="住址" show-overflow-tooltip></el-table-column>
            </el-table>
        </div>
        <div class="m-demo-row">
            <h2 class="title">选择位置</h2>
            <p class="subtitle">提供了 top, right, bottom, left 四种展示位置，默认进度条在顶部</p>
            <div class="gallery" style="width: 200px; margin-right: 24px">
                <div class="progress-box" v-progress:[8].right="progress6" zrx-progress-background="rgba(0,0,0,0.1)">出现在右侧</div>
                <el-button type="primary" @click="progress6 = true">加载</el-button>
            </div>
            <div class="gallery" style="width: 200px; margin-right: 24px">
                <div class="progress-box" v-progress:[8].bottom="progress7" zrx-progress-background="rgba(0,0,0,0.1)">出现在下侧</div>
                <el-button type="primary" @click="progress7 = true">加载</el-button>
            </div>
            <div class="gallery" style="width: 200px; margin-right: 24px">
                <div class="progress-box" v-progress:[8].left="progress8" zrx-progress-background="rgba(0,0,0,0.1)">出现在左侧</div>
                <el-button type="primary" @click="progress8 = true">加载</el-button>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">标签式调用</h2>
            <p class="subtitle">Progress也提供了标签形式的调用</p>
            <div class="gallery" style="width: 500px">
                <zrx-tab-bar v-model="tab1.current" :tabs="tab1.menu" @change="onTabbing"></zrx-tab-bar>
                <div class="progress-bar" style="margin: 3px 0"><zrx-progress :show="progress9 != 0"></zrx-progress></div>
                <zrx-tab-content :value="tab1.current" shift-mode="v-if">
                    <span class="text-content" v-for="n in tab1.menu" :key="n.value">{{ tab1.text }}</span>
                </zrx-tab-content>
            </div>
            <p class="describe">通过标签调用时，指令形式传入的所有配置项都可以在 props: option 中设置</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">自定义</h2>
            <p class="subtitle">Progress提供了丰富的自定义配置，见<a class="link" href="#props">配置参数</a></p>
            <div class="m-row">
                <p>指令形式配置</p>
                <div class="progress-bar" v-progress="progress10" ref="progress10"></div>
                <el-button type="primary" @click="setExample1">加载</el-button>
            </div>
            <p class="describe" style="margin-bottom: 16px">
                安装Progress时，通过 Vue.use(Progress, option) 传入自定义配置参数，该配置是全局生效的。若要更改单个实例的配置，可通过引用 el.zrxProgress 调用
                setOption(option)。示例更改了颜色和边距
            </p>
            <div class="m-row">
                <p>标签形式配置</p>
                <div class="progress-bar" style="height: 6px"><zrx-progress :show="progress11" :option="option1"></zrx-progress></div>
                <el-button type="primary" @click="progress11 = true">加载</el-button>
            </div>
            <p class="describe">通过组件的 option 属性传入配置。示例更改了背景色和条厚度</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'progressDemo',
    data() {
        return {
            progress1: false,
            progress2: false,
            progress3: false,
            progress4: false,
            progress5: false,
            progress6: false,
            progress7: false,
            progress8: false,
            progress9: 0,
            progress10: false,
            progress11: false,
            table1: [
                {
                    id: '1',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                },
                {
                    id: '2',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                },
                {
                    id: '3',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                },
                {
                    id: '4',
                    date: '2022-9-22 14:27:22',
                    name: '王腾飞',
                    address: '上海市静安区南京路1258号'
                }
            ],
            tab1: {
                current: '1',
                text: '应用中心',
                menu: [
                    {
                        label: '应用中心',
                        value: '1'
                    },
                    {
                        label: '用户中心',
                        value: '2'
                    },
                    {
                        label: '应用管理',
                        value: '3'
                    }
                ]
            },
            option1: {
                thickness: '6px',
                background: '#F4F5F8'
            }
        }
    },
    methods: {
        onStart() {
            if (!this.progress3) {
                this.progress3 = true
            } else {
                this.$refs.progressBar.zrxProgress.start()
            }
        },
        onPause() {
            this.$refs.progressBar.zrxProgress.pause()
        },
        onFinish() {
            this.progress3 = false
        },
        onFail() {
            this.$refs.progressBar.zrxProgress.fail().then(() => {
                this.progress3 = false
            })
        },
        onTabbing(obj) {
            this.tab1.text = ''
            this.progress9++
            setTimeout(() => {
                this.tab1.text = obj.label
                this.progress9--
            }, 500)
        },
        setExample1() {
            this.$refs.progress10.zrxProgress.setOption({
                color: '#1BBE8C',
                marginEdage: '5px'
            })
            this.progress10 = true
        }
    }
}
</script>

<style lang="scss" scoped>
.progress-bar {
    position: relative;
    height: 3px;
    margin: 16px 0;
}
.progress-box {
    position: relative;
    height: 144px;
    margin: 12px 0;
    line-height: 144px;
    text-align: center;
    color: $--placeholder;
}
::v-deep .zrx-tab-content {
    height: 60px;
    padding: 0 24px;
    line-height: 60px;
}
</style>
