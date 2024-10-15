---
title: ViewForm 查看表单
---

# ViewForm 查看表单

预置的查看表单的样式

### 使用方法

在需要的地方引入标准的类名和DOM结构即可

<div class="m-block">
    <div class="zrx-view-form">
        <div v-for="item in viewFormData" :key="item.id">
            <span class="label" :title="item.label">{{ item.label }}</span>
            <div class="content" :title="item.content">{{ item.content }}</div>
        </div>
    </div>
</div>

::: details 示例代码

```html
<div class="zrx-view-form">
    <div v-for="item in viewFormData" :key="item.id">
        <span class="label" :title="item.label">{{ item.label }}</span>
        <div class="content" :title="item.content">{{ item.content }}</div>
    </div>
</div>
<script>
export default {
    data() {
        return {
            viewFormData: [
                {
                    id: 'iuiuhguy',
                    label: '流程标题流程标题流程标题流程标题流程标题流程标题流程标题',
                    content: '请假流程-张三请假流程-张三请假流程-张三请假流程-张三'
                },
                {
                    id: 'iuiuhguyf222',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy333',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy444',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy555',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy666',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy777',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy888',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy999',
                    label: '流程标题',
                    content: '请假流程-张三'
                }
            ]
        }
    }
}
</script>
```

:::

<div>
    <contributor :maintainer="['zdl']" :members="['zdl', 'agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            viewFormData: [
                {
                    id: 'iuiuhguy',
                    label: '流程标题流程标题流程标题流程标题流程标题流程标题流程标题',
                    content: '请假流程-张三请假流程-张三请假流程-张三请假流程-张三'
                },
                {
                    id: 'iuiuhguyf222',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy333',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy444',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy555',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy666',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy777',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy888',
                    label: '流程标题',
                    content: '请假流程-张三'
                },
                {
                    id: 'iuiuhguy999',
                    label: '流程标题',
                    content: '请假流程-张三'
                }
            ]
        }
    }
}
</script>
