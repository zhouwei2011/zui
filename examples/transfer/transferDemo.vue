<!-- 穿梭框测试页面 -->
<template>
    <div>
        <el-button @click="openTransfer()" type="primary" style="width: 100px">穿梭框弹框</el-button>
        <div class="contain">
            <div class="box">
                基础模式(默认表格项穿梭)
                <zrx-transfer :data="data" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
            </div>
            <div class="box">
                基础模式(默认表格项穿梭)-props
                <zrx-transfer :data="data1" :props="props" showGroup @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
            </div>
            <div class="box">
                基础模式(列表项穿梭)
                <zrx-transfer :data="data" type="list" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
            </div>
            <div class="box">
                基础模式-多个目标池
                <zrx-transfer :data="data" :targetConfig="targetConfig" @updateModelValue="updateModelValueOne" :modelValue="[[21, 33], [3]]"></zrx-transfer>
            </div>

            <div class="box">
                分组模式
                <zrx-transfer :data="data" showGroup :modelValue="[21, 33]"></zrx-transfer>
            </div>
            <div class="box">
                分组模式-多个目标池
                <zrx-transfer :data="data" showGroup :targetConfig="targetConfig" @updateModelValue="updateModelValueTwo" :modelValue="[[21, 33], []]"></zrx-transfer>
            </div>
            <div class="box">
                表头多数据显示
                <zrx-transfer :data="data" :tableColumns="tableColumns" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
            </div>
            <div class="box">
                表头多数据显示-多个目标池
                <zrx-transfer :data="data" :targetConfig="targetConfig" :tableColumns="tableColumns" @updateModelValue="updateModelValueTwo"></zrx-transfer>
            </div>
            <div class="box">
                分组模式-表头多数据显示
                <zrx-transfer :data="data" showGroup :tableColumns="tableColumns" @updateModelValue="updateModelValueOne" :modelValue="[21, 33]"></zrx-transfer>
            </div>
            <div class="box">
                分组模式-表头多数据显示-多个目标池
                <zrx-transfer
                    :data="data"
                    showGroup
                    :targetConfig="targetConfig"
                    :tableColumns="tableColumns"
                    @updateModelValue="updateModelValueTwo"
                    :modelValue="[[21, 33], [4]]"
                ></zrx-transfer>
            </div>
        </div>
        <el-dialog
            append-to-body
            custom-class="zrx-dialog center"
            :visible.sync="dialogObj.showDialog"
            :close-on-click-modal="false"
            :close-on-press-escape="false"
            :show-close="true"
            @close="handleCancel"
        >
            <template slot="title">
                <span class="el-dialog-title">请选择穿梭框</span>
            </template>
            <div class="el-dialog-content">
                <el-button type="primary" @click="changeSourceData()">改变数据</el-button>
                <zrx-transfer
                    v-show="dialogObj.transferShow"
                    ref="transferRef"
                    :data="dialogObj.dialogData"
                    showGroup
                    :targetConfig="targetConfig"
                    @updateModelValue="updateModelValueDialog"
                    :modelValue="dialogObj.modelValueDialog"
                ></zrx-transfer>
            </div>
            <template slot="footer">
                <el-button type="primary" @click="handleOk()">确定</el-button>
                <el-button @click="handleCancel()">关闭</el-button>
            </template>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            data: [
                {
                    key: 0,
                    label: '选项一2选项一2选项一2选项一2',
                    group: '分组一1'
                },
                {
                    key: 1,
                    label: '选项一a',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 2,
                    label: '选项二',
                    group: '分组一'
                },
                {
                    key: 3,
                    label: '选项三',
                    group: '分组一'
                },
                {
                    key: 4,
                    label: '选项四',
                    group: '分组一'
                },
                {
                    key: 21,
                    label: '选项一',
                    group: '分组二'
                },
                {
                    key: 22,
                    label: '选项二a',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 23,
                    label: '选项三',
                    group: '分组二'
                },
                {
                    key: 24,
                    label: '选项四',
                    group: '分组二'
                },
                {
                    key: 31,
                    label: '选项一',
                    group: '分组三'
                },
                {
                    key: 32,
                    label: '选项二a',
                    group: '分组三',
                    disabled: true
                },
                {
                    key: 33,
                    label: '选项三',
                    group: '分组三'
                },
                {
                    key: 34,
                    label: '选项四',
                    group: '分组三'
                }
            ],
            props: {
                key: 'id',
                label: 'name',
                group: 'type',
                groupLabel: 'typeName'
            },
            data1: [
                {
                    id: 0,
                    name: '选项0',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 1,
                    name: '选项1',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 2,
                    name: '选项2',
                    type: 'a',
                    typeName: '分组a'
                },
                {
                    id: 3,
                    name: '选项3',
                    type: 'b',
                    typeName: '分组b'
                },
                {
                    id: 4,
                    name: '选项4',
                    type: 'b',
                    typeName: '分组b'
                },
                {
                    id: 5,
                    name: '选项5',
                    type: 'b',
                    typeName: '分组b'
                }
            ],
            targetConfig: [
                {
                    key: 1,
                    title: '已选择',
                    label: '负责人',
                    placeholder: '请输入'
                },
                {
                    key: 2,
                    title: '已选择',
                    label: '成员',
                    placeholder: '请输入'
                }
            ],
            modelValue: {},
            dialogObj: {
                showDialog: false,
                transferShow: false,
                dialogData: [],
                modelValueDialog: [[]]
            },
            changeData: [
                {
                    key: 101,
                    label: '选项一10',
                    group: '分组一',
                    disabled: true
                },
                {
                    key: 102,
                    label: '选项二10',
                    group: '分组一'
                },
                {
                    key: 103,
                    label: '选项三10',
                    group: '分组一'
                },
                {
                    key: 104,
                    label: '选项四10',
                    group: '分组一'
                },
                {
                    key: 121,
                    label: '选项一12',
                    group: '分组二'
                },
                {
                    key: 122,
                    label: '选项二12',
                    group: '分组二',
                    disabled: true
                },
                {
                    key: 123,
                    label: '选项三12',
                    group: '分组二'
                },
                {
                    key: 124,
                    label: '选项四12',
                    group: '分组二'
                }
            ],
            tableColumns: [
                {
                    title: '选项',
                    key: 'label',
                    isShowTitle: true
                },
                {
                    title: 'key',
                    key: 'key'
                },
                {
                    title: '是否选择',
                    key: 'disabled'
                }
            ]
        }
    },
    watch: {},
    created() {},
    mounted() {},
    methods: {
        updateModelValueOne(result) {},
        updateModelValueTwo(result) {},
        openTransfer() {
            this.dialogObj.showDialog = true
            this.dialogObj.transferShow = true

            setTimeout(() => {
                this.dialogObj.dialogData = [...this.data]
                this.dialogObj.modelValueDialog = [
                    [21, 33],
                    [2, 4]
                ] // [21, 33]
                this.$nextTick(() => {
                    this.$refs.transferRef.init()
                })
            }, 1000)
        },
        updateModelValueDialog(result) {},
        handleOk() {},
        handleCancel() {
            this.dialogObj = {
                showDialog: false,
                transferShow: false,
                dialogData: [],
                modelValueDialog: [[]]
            }
        },
        changeSourceData() {
            this.dialogObj.dialogData = [...this.changeData]
            this.$nextTick(() => {
                this.$refs.transferRef.init()
            })
        }
    },
    computed: {},
    filters: {}
}
</script>
<style scoped lang="scss">
.contain {
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
    .box {
        width: 750px;
        height: 546px;
        margin-bottom: 50px;
    }
}
// .el-dialog__wrapper
.el-dialog__wrapper {
    ::v-deep .zrx-dialog {
        .el-dialog-content {
            height: 600px;
        }
    }
}
</style>
