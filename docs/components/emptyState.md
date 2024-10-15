---
title: EmptyState 空态图
---

# EmptyState 空态图

用于内容为空时提示用户

### 基础用法

<div class="m-demo-row simple">
    <div class="section" style="--max-width: 168px">
        <zrx-empty-state v-for="n in states" :key="n.type" :type="n.type" :text="n.text"></zrx-empty-state>
    </div>
</div>

::: details 示例代码

```html
<div class="section" style="--max-width: 168px">
    <zrx-empty-state v-for="n in states" :key="n.type" :type="n.type" :text="n.text"></zrx-empty-state>
</div>
<script>
export default {
    data() {
        return {
            states: [
                {
                    type: 'data',
                    text: '无数据缺省状态'
                },
                {
                    type: 'personal',
                    text: '未添加人员缺省状态'
                },
                {
                    type: 'image',
                    text: '图片空状态'
                },
                {
                    type: 'imageFailure',
                    text: '图片加载失败'
                },
                {
                    type: 'file',
                    text: '未添加文件缺省状态'
                },
                {
                    type: 'search',
                    text: '搜索结果为空'
                },
                {
                    type: 'info',
                    text: '用于出错相关空白页'
                },
                {
                    type: 'warning',
                    text: '用于警示相关空白页'
                },
                {
                    type: 'map',
                    text: '地图缺省状态'
                },
                {
                    type: 'mapOffline',
                    text: '地图离线状态'
                },
                {
                    type: 'mapEmpty',
                    text: '未添加地图缺省状态'
                },
                {
                    type: 'video',
                    text: '视频播放错误'
                },
                {
                    type: 'videoOffline',
                    text: '视频离线状态'
                }
            ]
        }
    }
}
</script>
```

:::

### 缺省图标

用作缺省图标时，设置no-margin取消上下边距，并适当调整图标宽高

<div class="m-demo-row">
    <div class="gallery">
        <div class="cell">
            <div class="top">
                <zrx-empty-state type="imageFailure" no-margin></zrx-empty-state>
                <span>汽车消费贷</span>
            </div>
            <div class="bottom">
                <p><span class="m-text">1000次</span><span class="label">调用次数</span></p>
                <p><span class="m-text">989次</span><span class="label">授权次数</span></p>
            </div>
        </div>
    </div>
</div>

::: details 示例代码

```html
<div class="cell">
    <div class="top">
        <zrx-empty-state type="imageFailure" no-margin></zrx-empty-state>
        <span>汽车消费贷</span>
    </div>
    <div class="bottom">
        <p><span class="m-text">1000次</span><span class="label">调用次数</span></p>
        <p><span class="m-text">989次</span><span class="label">授权次数</span></p>
    </div>
</div>
<style lang="scss">
.zrx-icon-image-failure {
    width: 40px;
    height: 40px;
}
</style>
```

:::

### Attributes

| 参数        | 说明             | 类型    | 可选值                                                                                                           | 默认值                     |
| ----------- | ---------------- | ------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `type`      | 类型             | string  | data, personal, image, imageFailure, search, file, info, warning, map, mapOffline, mapEmpty, video, videoOffline | data                       |
| `text`      | 文字提示         | string  | —                                                                                                                | data: '暂无数据', 其他: '' |
| `no-margin` | 是否取消上下边距 | boolean | —                                                                                                                | false                      |

<div>
    <contributor :maintainer="['agua']" :members="['agua']"></contributor>
</div>

<script>
export default {
    data() {
        return {
            states: [
                {
                    type: 'data',
                    text: '无数据缺省状态'
                },
                {
                    type: 'personal',
                    text: '未添加人员缺省状态'
                },
                {
                    type: 'image',
                    text: '图片空状态'
                },
                {
                    type: 'imageFailure',
                    text: '图片加载失败'
                },
                {
                    type: 'file',
                    text: '未添加文件缺省状态'
                },
                {
                    type: 'search',
                    text: '搜索结果为空'
                },
                {
                    type: 'info',
                    text: '用于出错相关空白页'
                },
                {
                    type: 'warning',
                    text: '用于警示相关空白页'
                },
                {
                    type: 'map',
                    text: '地图缺省状态'
                },
                {
                    type: 'mapOffline',
                    text: '地图离线状态'
                },
                {
                    type: 'mapEmpty',
                    text: '未添加地图缺省状态'
                },
                {
                    type: 'video',
                    text: '视频播放错误'
                },
                {
                    type: 'videoOffline',
                    text: '视频离线状态'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.cell {
    width: 282px;
    height: 164px;
    border: 1px solid $border;
    border-radius: 2px;
    .top {
        display: flex;
        align-items: center;
        width: 100%;
        height: 42%;
        padding: 4px 16px 0;
        border-bottom: 1px solid $border;
        ::v-deep .icon {
            width: 40px;
            height: 40px;
        }
        span {
            margin-left: 12px;
            line-height: 24px;
            font-size: 16px;
            @include ellipsis;
        }
    }
    .bottom {
        display: flex;
        align-items: center;
        width: 100%;
        height: 58%;
        padding: 0 16px;
        > p {
            width: 50%;
            text-align: center;
            &:first-child {
                margin-right: 16px;
            }
            .text {
                display: block;
                margin-bottom: 8px;
                line-height: 20px;
            }
            .label {
                line-height: 20px;
                color: $--text-dim;
            }
        }
    }
}
</style>
