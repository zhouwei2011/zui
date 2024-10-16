<template>
    <div :class="['zrx-upload', disabled && 'disabled']">
        <el-upload
            v-on="$listeners"
            v-bind="$attrs"
            :show-file-list="false"
            :class="className"
            ref="uploadRef"
            :on-exceed="onExceed"
            :before-upload="beforeUpload"
            :disabled="disabled"
            :headers="{ Authorization: token ? `${token}` : '' }"
        >
            <template v-if="$attrs.drag">
                <i :class="`svg-icon zrx-icon-upload-${uploadType}`"></i>
                <div class="click-upload">点击或将文件拖拽至此区域上传</div>
                <div class="upload-tip">{{ uploadTips }}</div>
            </template>
            <template v-else-if="$attrs['list-type'] === 'picture-card' && uploadType === 'image'">
                <template v-if="$attrs['file-list'].length && hasDelete">
                    <div fit="fill" :key="'image_' + index" class="zrx-image-preview" v-for="(item, index) in $attrs['file-list']">
                        <el-image :src="item.url"></el-image>
                        <div class="shade" @click.stop>
                            <a class="btn" :href="item.url" target="_blank" role="preview"><i class="svg-icon zrx-icon-eye"></i></a>
                            <a class="btn" role="delete" @click.stop="removeFile(item, index)" v-if="!disabled"><i class="svg-icon zrx-icon-delete"></i></a>
                        </div>
                    </div>
                </template>
                <template v-else-if="$attrs['file-list'].length && !hasDelete">
                    <div fit="fill" :key="'image_' + index" class="zrx-image-preview" v-for="(item, index) in $attrs['file-list']">
                        <el-image :src="item.url"></el-image>
                        <div class="svg-icon-reload-container">
                            <span class="reload-tip">点此重新上传</span>
                        </div>
                    </div>
                </template>
                <div class="zrx-upload-icon-box" v-if="$attrs['file-list'].length < $attrs.limit">
                    <slot name="uploadIcon">
                        <i class="svg-icon zrx-icon-upload-image"></i>
                        <div class="click-upload">点此上传</div>
                        <div class="upload-tip upload-image-tip">{{ uploadImageTips }}</div>
                    </slot>
                </div>
            </template>

            <template v-else-if="$attrs['list-type'] === 'picture-card' && uploadType === 'file'">
                <template v-if="$attrs['file-list'].length">
                    <div fit="fill" :key="'file_' + index" class="zrx-file-preview" v-for="(item, index) in $attrs['file-list']">
                        <i class="el-icon-document zrx-file-icon"></i>
                        <div class="zrx-file-name" :title="item.name || ''">{{ item.name || '' }}</div>
                        <div class="shade" @click.stop>
                            <a class="btn" :href="item.url" :download="decodeURI(item.name || '')" target="_blank" role="preview"><i class="svg-icon zrx-icon-eye"></i></a>
                            <a class="btn" role="delete" @click.stop="removeFile(item, index)" v-if="!disabled"><i class="svg-icon zrx-icon-delete"></i></a>
                        </div>
                    </div>
                </template>
                <div class="zrx-upload-icon-box" v-if="$attrs['file-list'].length < $attrs.limit">
                    <slot name="uploadIcon">
                        <i class="svg-icon zrx-icon-upload-file"></i>
                        <div class="click-upload">点此上传</div>
                    </slot>
                </div>
            </template>
            <template v-else>
                <el-button><i class="icon svg-icon zrx-icon-upload"></i>{{ buttonText }}</el-button>
                <div class="upload-tip">{{ uploadTips }}</div>
            </template>
        </el-upload>
        <ul class="files-preview" v-if="$attrs['list-type'] !== 'picture-card'">
            <li v-for="(file, index) in $attrs['file-list']" :key="'card_' + index">
                <i class="icon svg-icon zrx-icon-paper-clip"></i>
                <span>
                    <a :href="file.url" :download="decodeURI(file.name)" target="_blank" :title="file.name">{{ file.name }}</a>
                </span>
                <a class="btn" @click.stop="removeFile(file, index)"><i class="icon svg-icon zrx-icon-close"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'zrxUpload',
    props: {
        uploadType: {
            type: String,
            default: 'file'
        },
        fileSize: {
            type: [Number, String],
            default: 2
        },
        sizeUnit: {
            type: String,
            default: 'MB'
        },
        buttonText: {
            type: String,
            default: '点击上传' // 表单中心可配置项，按钮的文字
        },
        disabled: {
            type: Boolean,
            default: false // 表单中心可配置项，是否禁用
        },
        showTip: {
            type: Boolean,
            default: true // 表单中心可配置项，是否显示提示
        },
        token: {
            type: String,
            default: '' // 表单中心可配置项,文件上传的token
        },
        hasDelete: {
            type: Boolean,
            default: true // 已上传的图片可否点击删除
        },
        showImageTip: {
            type: Boolean,
            default: false // 是否显示提示
        },
        // 自定义提示
        customTip: {
            type: String,
            default: ''
        },
        // 自定义类型
        customType: {
            type: String,
            default: ''
        }
    },
    computed: {
        className() {
            if (this.customType) return this.customType

            if (this.$attrs.drag) {
                return 'zrx-drag-upload'
            } else if (this.$attrs['list-type'] === 'picture-card' && this.uploadType === 'image') {
                return 'zrx-upload-image'
            } else if (this.$attrs['list-type'] === 'picture-card' && this.uploadType === 'file') {
                return 'zrx-upload-file'
            } else {
                return 'zrx-button-upload'
            }
        },
        uploadTips() {
            if (this.customTip) return this.customTip
            let tips = ''
            if (this.$attrs.accept && this.showTip) {
                tips = `支持扩展名:${this.$attrs.accept.split(',').join(' ')}(最多上传${this.$attrs.limit}个，每个不超过${this.fileSize}${this.sizeUnit})`
            }
            return tips
        },
        uploadImageTips() {
            if (this.customTip) return this.customTip
            let tips = ''
            if (this.$attrs.accept && this.showImageTip) {
                tips = `支持${this.$attrs.accept.split(',').join(' ')}(大小不超过${this.fileSize}${this.sizeUnit})`
            }
            return tips
        }
    },
    methods: {
        removeFile(file, index) {
            if (this.disabled) return false
            this.$attrs['file-list'].splice(index, 1)
            this.$emit('removeFile', file, index)
        },
        onExceed(file, fileList) {
            this.$emit('onExceed', this.$attrs['file-list'].length >= this.$attrs.limit, file, fileList)
        },
        beforeUpload(file) {
            if (this.$attrs?.['before-upload']) {
                return this.$attrs['before-upload'](file)
            } else if (this.$attrs?.['beforeUpload']) {
                return this.$attrs.beforeUpload(file)
            }

            const size = this.sizeUnit === 'MB' ? 1024 : 1
            let threshold = 1024 * size * this.fileSize
            let exceed = file.size > threshold
            let unAchieved = file.size === 0
            this.$emit('beforeUpload', file, exceed, unAchieved)
            return !(exceed || unAchieved)
        },
        decodeURI(fileName) {
            return window.decodeURI(fileName)
        }
    }
}
</script>
