<template>
    <div class="icon-demo">
        <ul class="icon-list">
            <li v-for="(item, index) in this.icons" :key="index">
                <div class="box-top">
                    <i :class="`icon ${item.show_svg}`"></i>
                </div>
                <div class="box-bottom">
                    <span>{{ `icon ${item.show_svg}` }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            icons: [
                { show_svg: 'svg-icon zrx-icon-copy' },
                { show_svg: 'svg-icon zrx-icon-show-eye' },
                { show_svg: 'svg-icon zrx-icon-hide-eye' },
                { show_svg: 'svg-icon zrx-icon-closed-eye' },
                { show_svg: 'svg-icon zrx-icon-eye' },
                { show_svg: 'svg-icon zrx-icon-inverse' },
                { show_svg: 'svg-icon zrx-icon-orthogona' },
                { show_svg: 'svg-icon zrx-icon-export' },
                { show_svg: 'svg-icon zrx-icon-import' },
                { show_svg: 'svg-icon zrx-icon-draw-left' },
                { show_svg: 'svg-icon zrx-icon-draw-right' },
                { show_svg: 'svg-icon zrx-icon-close' },
                { show_svg: 'svg-icon zrx-icon-close-large' },
                { show_svg: 'svg-icon zrx-icon-close-round' },
                { show_svg: 'svg-icon zrx-icon-done' },
                { show_svg: 'svg-icon zrx-icon-windows-min' },
                { show_svg: 'svg-icon zrx-icon-add' },
                { show_svg: 'svg-icon zrx-icon-right-angle' },
                { show_svg: 'svg-icon zrx-icon-right-angle-large' },
                { show_svg: 'svg-icon zrx-icon-left-angle' },
                { show_svg: 'svg-icon zrx-icon-left-angle-large' },
                { show_svg: 'svg-icon zrx-icon-down-angle' },
                { show_svg: 'svg-icon zrx-icon-down-angle-large' },
                { show_svg: 'svg-icon zrx-icon-up-angle' },
                { show_svg: 'svg-icon zrx-icon-up-angle-large' },
                { show_svg: 'svg-icon zrx-icon-double-angle-right' },
                { show_svg: 'svg-icon zrx-icon-double-angle-left' },
                { show_svg: 'svg-icon zrx-icon-double-angle-down' },
                { show_svg: 'svg-icon zrx-icon-double-angle-up' },
                { show_svg: 'svg-icon zrx-icon-double-angle-line-right' },
                { show_svg: 'svg-icon zrx-icon-calendar' },
                { show_svg: 'svg-icon zrx-icon-clock' },
                { show_svg: 'svg-icon zrx-icon-delete' },
                { show_svg: 'svg-icon zrx-icon-details' },
                { show_svg: 'svg-icon zrx-icon-user' },
                { show_svg: 'svg-icon zrx-icon-magnifier' },
                { show_svg: 'svg-icon zrx-icon-show-more' },
                { show_svg: 'svg-icon zrx-icon-filter-table' },
                { show_svg: 'svg-icon zrx-icon-upload' },
                { show_svg: 'svg-icon zrx-icon-download' },
                { show_svg: 'svg-icon zrx-icon-paper-clip' },
                { show_svg: 'svg-icon zrx-icon-assign-person' },
                { show_svg: 'svg-icon zrx-icon-folder' },
                { show_svg: 'svg-icon zrx-icon-revocation' },
                { show_svg: 'svg-icon zrx-icon-verification' },
                { show_svg: 'svg-icon zrx-icon-empty-default' },
                { show_svg: 'svg-icon zrx-icon-empty-person' },
                { show_svg: 'svg-icon zrx-icon-image-failure' },
                { show_svg: 'svg-icon zrx-icon-empty-search' },
                { show_svg: 'svg-icon zrx-icon-empty-notify' },
                { show_svg: 'svg-icon zrx-icon-empty-warning' },
                { show_svg: 'svg-icon zrx-icon-empty-map' },
                { show_svg: 'svg-icon zrx-icon-map-offline' },
                { show_svg: 'svg-icon zrx-icon-empty-map-empty' },
                { show_svg: 'svg-icon zrx-icon-empty-video' },
                { show_svg: 'svg-icon zrx-icon-video-offline' },
                { show_svg: 'svg-icon zrx-icon-upload-file' },
                { show_svg: 'svg-icon zrx-icon-upload-image' },
                { show_svg: 'zrx-icon-error' },
                { show_svg: 'zrx-icon-info' },
                { show_svg: 'zrx-icon-success' },
                { show_svg: 'zrx-icon-question' },
                { show_svg: 'zrx-icon-info-gray' },
                { show_svg: 'zrx-icon-error-large' },
                { show_svg: 'zrx-icon-info-large' },
                { show_svg: 'zrx-icon-success-large' },
                { show_svg: 'zrx-icon-question-large' },
                { show_svg: 'zrx-icon-warning' },
                { show_svg: 'zrx-icon-file-normal' },
                { show_svg: 'zrx-icon-file-warning' }
            ]
        }
    }
}
</script>
