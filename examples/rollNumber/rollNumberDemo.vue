<template>
    <div class="roll-number-demo">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <p class="subtitle">基础的滚动数字</p>
            <p class="m-row"><el-button type="primary" @click="value1 = 1698">开始</el-button></p>
            <div class="gallery">
                <zrx-roll-number :value="value1"></zrx-roll-number>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">值为负数</h2>
            <p class="subtitle">传入负值，往负值递减</p>
            <p class="m-row"><el-button type="primary" @click="value8 = -22350">开始</el-button></p>
            <div class="gallery">
                <zrx-roll-number :value="value8"></zrx-roll-number>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">保留小数</h2>
            <p class="subtitle">保留2位小数</p>
            <div class="gallery">
                <zrx-roll-number tag="span" :value="value2" :retain-decimals="2"></zrx-roll-number>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">设置初始值</h2>
            <p class="m-row"><el-button type="primary" @click="value9 = -5.55">开始</el-button></p>
            <div class="gallery">
                <zrx-roll-number :value="value9" inited-value retain-decimals="2"></zrx-roll-number>
            </div>
            <p class="describe">默认数字从0开始过渡。设置inited-value为true，数字从一开始的value值开始过渡。</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">过渡时间</h2>
            <p class="m-row"><el-button type="primary" @click="changeValue">开始</el-button></p>
            <div class="gallery">
                <p class="subtitle">默认过渡时间500ms</p>
                <zrx-roll-number :value="value3"></zrx-roll-number>
            </div>
            <div class="gallery">
                <p class="subtitle">过渡时间1500ms</p>
                <zrx-roll-number :value="value3" :duration="1500"></zrx-roll-number>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">分隔符</h2>
            <p class="subtitle">每隔三位加","分隔符</p>
            <div class="gallery">
                <zrx-roll-number :value="value4" break-sign retain-decimals="2"></zrx-roll-number>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">添加单位</h2>
            <div class="gallery">
                <p class="subtitle">原值</p>
                调用总数：<zrx-roll-number :value="value6">次</zrx-roll-number>
            </div>
            <div class="gallery">
                <p class="subtitle">缩短后</p>
                调用总数：<zrx-roll-number :value="value6" add-unit retain-decimals="2">次</zrx-roll-number>
            </div>
            <div class="describe">数值较大时，可开启add-unit自动为数值添加单位以缩短长度。注意设置retain-decimals。</div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">单位插槽</h2>
            <p class="subtitle">通过插槽分离数值与单位的样式</p>
            <div class="gallery">
                地区生产总值：<zrx-roll-number :value="value7" add-unit retain-decimals="2" style="font-size: 24px" :duration="2000"
                    ><span slot="unit" slot-scope="{ unit }" style="font-size: 14px; opacity: 0.7">{{ unit + '元' }}</span></zrx-roll-number
                >
            </div>
            <el-button type="primary" @click="value7 = 1208806569821">开始</el-button>
        </div>
        <div class="m-demo-row">
            <h2 class="title">有选择地保留小数</h2>
            <p class="subtitle">
                roll-number在某些语境下（只能是整数）、值较小且保留小数时，带小数的数值变化可能不是想要的结果。设置always-decimal: false，当值不出现单位时，将不会出现小数。
            </p>
            <div class="gallery">今日访问次数：<zrx-roll-number :value="value10" add-unit :retain-decimals="2" :always-decimal="false">次</zrx-roll-number></div>
            <el-button @click="value10 = 666">较小值</el-button>
            <el-button type="primary" @click="value10 = 12345">较大值</el-button>
            <p class="describe">注意前提是设置了add-unit和retain-decimals。只有这种条件下，值大时保留小数，值小时取整才是有意义的。</p>
        </div>
        <div class="m-demo-row">
            <h2 class="title">缺省值</h2>
            <p class="subtitle">当值不是数字或字符串的数字时，roll-number显示缺省值。</p>
            <zrx-roll-number :value="undefined"></zrx-roll-number>
        </div>
    </div>
</template>

<script>
export default {
    name: 'zrxRollNumberDemo',
    data() {
        return {
            value1: 0,
            value2: 58693.1266,
            value3: 0,
            value4: 2968525450.1225,
            value5: 0,
            value6: 119953004,
            value7: 0,
            value8: 0,
            value9: 4.55,
            value10: 0
        }
    },
    methods: {
        changeValue() {
            this.value3 += 3000
        }
    }
}
</script>
