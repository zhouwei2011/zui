<template>
    <p :class="['zrx-empty-state', noMargin && 'no-margin']">
        <i :class="['icon svg-icon', icon]"></i>
        <span v-if="describe !== '' && !$slots.default">{{ describe }}</span>
        <span v-if="$slots.default"><slot></slot></span>
    </p>
</template>

<script>
const iconMap = {
    data: 'zrx-icon-empty-default',
    personal: 'zrx-icon-empty-person',
    image: 'zrx-icon-upload-image',
    imageFailure: 'zrx-icon-image-failure',
    search: 'zrx-icon-empty-search',
    file: 'zrx-icon-upload-file',
    info: 'zrx-icon-empty-notify',
    warning: 'zrx-icon-empty-warning',
    map: 'zrx-icon-empty-map',
    mapOffline: 'zrx-icon-map-offline',
    mapEmpty: 'zrx-icon-empty-map-empty',
    video: 'zrx-icon-empty-video',
    videoOffline: 'zrx-icon-video-offline'
}
const textMap = {
    data: '暂无数据',
    personal: '',
    image: '',
    imageFailure: '',
    file: '',
    search: '',
    info: '',
    warning: '',
    map: '',
    mapOffline: '',
    mapEmpty: '',
    video: '',
    videoOffline: ''
}
const defaultIcon = 'zrx-icon-empty-default'
export default {
    name: 'zrxEmptyState',
    props: {
        type: {
            type: String,
            default: 'data'
        },
        text: {
            type: [String, Number, Boolean],
            default: 'unset'
        },
        noMargin: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        icon() {
            return iconMap[this.type] ?? defaultIcon
        },
        describe() {
            if ([false, null, undefined].includes(this.text)) {
                return ''
            }
            return this.text != 'unset' ? this.text : textMap[this.type] ?? ''
        }
    }
}
</script>
