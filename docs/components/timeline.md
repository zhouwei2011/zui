---
title: Timeline 时间线
---

# Timeline 时间线

<ClientOnly>
<timelineDemo/>
</ClientOnly>

#### 示例代码

```vue
<template>
    <div class="timeline-demo">
        <div>
            <el-timeline>
                <el-timeline>
                    <el-timeline-item :key="index" v-for="(flow, index) in flows" :class="flow.content && 'solid-dot'">
                        <div class="timeline-name">{{ flow.name }}</div>
                        <div class="timeline-action">{{ flow.action }}</div>
                        <div class="timeline-time">{{ flow.timestamp }}</div>
                        <div class="timeline-content" v-if="flow.content">{{ flow.content }}</div>
                    </el-timeline-item>
                </el-timeline>
            </el-timeline>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TimelineDemo',
    data() {
        return {
            flows: [
                {
                    name: '小白',
                    action: '提交',
                    timestamp: '2015-09-01 14:26:30',
                    content: '提交申请'
                },
                {
                    name: '小黑',
                    action: '同意',
                    timestamp: '2015-09-01 14:26:30',
                    content: '【同意】同意该用户的申请'
                },
                {
                    name: '小蓝',
                    action: '实施确认',
                    timestamp: '2015-09-01 14:26:30',
                    content: `
                    如果我们用 Canvas 实现了一些动画效果，需要将它回放出来，很多人通常就是用录屏工具将屏幕内容录下来播放，
                    很少有人知道，Canvas 可以直接通过现代浏览器支持的 Media Streams API 来转成视频。
                    `
                },
                {
                    name: '小绿',
                    action: '实施确认',
                    timestamp: '2015-09-01 14:26:30',
                    content: ''
                }
            ]
        }
    }
}
</script>
```
