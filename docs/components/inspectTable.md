---
title: InspectTable 查看表格
---

# 查看表格

预置的查看表格的样式

### 使用方法

在需要的地方引入标准的类名和DOM结构即可

<div class="zrx-inspect-table" style="--labelW: 140px;margin-top: 16px;">
    <div :class="['cell', n.class]" v-for="(n, i) in tableData" :key="i">
        <p class="label">{{ n.label }}</p>
        <p class="text" :title="n.value">{{ n.value }}</p>
    </div>
</div>

::: details 示例代码

```html
<div class="zrx-inspect-table" style="--labelW: 140px;">
    <div :class="['cell', n.class]" v-for="(n, i) in tableData" :key="i">
        <p class="label">{{ n.label }}</p>
        <p class="text" :title="n.value">{{ n.value }}</p>
    </div>
</div>
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    label: '审批类型',
                    value: '派遣'
                },
                {
                    label: '对接平台',
                    value: '四平台'
                },
                {
                    label: '申请人',
                    value: '王萍'
                },
                {
                    label: '申请人部门',
                    value: '经信局'
                },
                {
                    label: '申请时间',
                    value: '2021-10-17 19:38:22'
                },
                {
                    label: '您的姓名',
                    value: '朱廷波'
                },
                {
                    label: '您的身份证号码',
                    value: 332624185900160018
                },
                {
                    label: '您的手机号码',
                    value: 15863245896
                },
                {
                    label: '人员类型',
                    value: '其他'
                },
                {
                    label: '是否居家隔离',
                    value: '否'
                },
                {
                    label: '所在地址',
                    value: '浙江省杭州市上城区临丁路699号东部软件城创新孵化园5号楼'
                }
            ]
        }
    }
}
</script>
```

:::

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    label: '审批类型',
                    value: '派遣'
                },
                {
                    label: '对接平台',
                    value: '四平台'
                },
                {
                    label: '申请人',
                    value: '王萍'
                },
                {
                    label: '申请人部门',
                    value: '经信局'
                },
                {
                    label: '申请时间',
                    value: '2021-10-17 19:38:22'
                },
                {
                    label: '您的姓名',
                    value: '朱廷波'
                },
                {
                    label: '您的身份证号码',
                    value: 332624185900160018
                },
                {
                    label: '您的手机号码',
                    value: 15863245896
                },
                {
                    label: '人员类型',
                    value: '其他'
                },
                {
                    label: '是否居家隔离',
                    value: '否'
                },
                {
                    label: '所在地址',
                    value: '浙江省杭州市上城区临丁路699号东部软件城创新孵化园5号楼'
                }
            ]
        }
    }
}
</script>
