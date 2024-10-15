<template>
    <div class="password-demo">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <div class="gallery">
                <span class="s-label">密码:</span>
                <zrx-password :value="data1"></zrx-password>
            </div>
            <p class="m-beneath-row"><el-button type="primary" @click="data1 += 652361">更改值</el-button></p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">通过插槽</h2>
            <div class="gallery">
                <span class="s-label">密码:</span>
                <zrx-password
                    ><span password>{{ data2 }}</span></zrx-password
                >
            </div>
            <p class="describe">通过插槽传入时，需在目标元素上设置"password"属性使组件找到显示值</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">手动更新</h2>
            <div class="gallery">
                <span class="s-label">密码:</span>
                <zrx-password ref="password">
                    <span password>{{ data3 }}</span>
                </zrx-password>
            </div>
            <p class="m-beneath-row"><el-button type="primary" @click="changeValue">更改值</el-button></p>
            <p class="describe">通过插槽传值时，组件没有监听值的变化，若发生外部值的变化，需要调用init方法重置组件内部值</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">忽略值</h2>
            <p class="subtitle">当传入的值等于忽略值时，将只显示空值提示。</p>
            <div class="gellery">
                <span class="s-label">密码:</span>
                <zrx-password ref="password" exclusive="- -">
                    <span password>{{ data4 }}</span>
                </zrx-password>
            </div>
            <p class="describe">在不想将空提示值当做密文展示时非常有用。典型的场景是密文字段经过了空值转提示值"- -"处理，此时组件接收到"- -"值，将不会当做密文而直接展示。</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'passwordDemo',
    data() {
        return {
            data1: 253332156,
            data2: 'zz22391rb',
            data3: 'sfd6691wes',
            data4: '- -'
        }
    },
    methods: {
        changeValue() {
            this.data3 = '22350wqeswt'
            this.$nextTick(this.$refs.password.init)
        }
    }
}
</script>
