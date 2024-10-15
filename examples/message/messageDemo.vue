<template>
    <div class="message-demo">
        <div style="padding-top: 15px">
            <h4>Modal 对话框(纯标题)</h4>
            <el-button type="primary" @click="openModalTitle('success')">成功对话框</el-button>
            <el-button type="primary" @click="openModalTitle('warning')">警告对话框</el-button>
            <el-button type="primary" @click="openModalTitle('info')">消息对话框</el-button>
            <el-button type="primary" @click="openModalTitle('error')">错误对话框</el-button>

            <h4>Modal 对话框(标题加正文 )</h4>
            <el-button type="primary" @click="openModal('success')">成功对话框</el-button>
            <el-button type="primary" @click="openModal('warning')">警告对话框</el-button>
            <el-button type="primary" @click="openModal('info')">消息对话框</el-button>
            <el-button type="primary" @click="openModal('error')">错误对话框</el-button>

            <h4>Message 全局提示</h4>
            <el-button type="primary" @click="openMsgtipBounce('success')">成功提示框</el-button>
            <el-button type="primary" @click="openMsgtipBounce('warning')">警告提示框</el-button>
            <el-button type="primary" @click="openMsgtipBounce('info')">消息提示框</el-button>
            <el-button type="primary" @click="openMsgtipBounce('error')">错误提示框</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'messageDemo',
    data() {
        return {
            msgMap: new Map([
                ['info', '你好！欢迎使用金融云2.0专业版，你可以根据自身需求添加业务模块。'],
                ['success', '恭喜！你所提交的信息已经审核通过，如有问题请联系客服。'],
                ['warning', '系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！'],
                ['error', '系统错误，请稍后再试。']
            ]),
            modalTextMap: new Map([
                [
                    'info',
                    {
                        title: '传入title：信息（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）',
                        // content: '一系列的信息描述可以带标点。'
                        content: ''
                    }
                ],
                [
                    'success',
                    {
                        // title: '成功',
                        title: '',
                        content: '传入content：成功（当传入的参数一个有值，另一个参数为空时，传入的内容均已标题格式显示）'
                    }
                ],
                [
                    'warning',
                    {
                        title: '确认（动作）全部（操作对象类型）？',
                        content: '一系列的信息描述，可能会很长。也可以是很短同样也可以带标点'
                    }
                ],
                [
                    'error',
                    {
                        title: '错误',
                        content:
                            '正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。正文超过120px会产生滚动条。'
                    }
                ]
            ])
        }
    },
    methods: {
        // modal只有标题
        openModalTitle(type) {
            const target = this.modalTextMap.get(type)
            if (target.content == 0) {
                this.$confirm(target.title, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                })
                    .then(res => {})
                    .catch(err => {})
            } else if (target.title == 0) {
                this.$confirm(target.content, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                })
                    .then(res => {})
                    .catch(err => {})
            } else {
                this.$confirm(target.content, target.title, {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                })
                    .then(res => {})
                    .catch(err => {})
            }
        },
        // modal标题加正文
        openModal(type) {
            const target = this.modalTextMap.get(type)
            if (target.content == 0) {
                this.$alert(target.title, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '关闭'
                })
                    .then(res => {})
                    .catch(err => {})
            } else if (target.title == 0) {
                this.$alert(target.content, '', {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '关闭'
                })
                    .then(res => {})
                    .catch(err => {})
            } else {
                this.$alert(target.content, target.title, {
                    type: type,
                    showClose: false,
                    closeOnClickModal: false,
                    closeOnPressEscape: false,
                    confirmButtonText: '关闭'
                })
                    .then(res => {})
                    .catch(err => {})
            }
        },
        // message
        openMsgtipBounce(type) {
            this.$message({
                type: type,
                showClose: true,
                message: this.msgMap.get(type)
            })
        }
    }
}
</script>

<style scoped lang="scss"></style>
