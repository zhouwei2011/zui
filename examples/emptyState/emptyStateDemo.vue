<template>
    <div class="wrap">
        <div class="m-demo-row">
            <h2 class="title">基础用法</h2>
            <div class="section" style="--max-width: 168px">
                <zrx-empty-state v-for="n in states" :key="n.type" :type="n.type" :text="n.text"></zrx-empty-state>
            </div>
        </div>
        <div class="m-demo-row">
            <h2 class="title">缺省图标</h2>
            <p class="subtitle">用作缺省图标时，设置no-margin取消上下边距，并设置图标宽高</p>
            <div class="gallery">
                <div class="cell">
                    <div class="top">
                        <zrx-empty-state type="imageFailure" no-margin></zrx-empty-state>
                        <span>汽车消费贷</span>
                    </div>
                    <div class="bottom">
                        <p><span class="text">1000次</span><span class="label">调用次数</span></p>
                        <p><span class="text">989次</span><span class="label">授权次数</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

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
