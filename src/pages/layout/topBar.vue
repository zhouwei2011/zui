<template>
    <div class="g-top-bar">
        <bread-crumb-nav></bread-crumb-nav>

        <div class="top-bar-right">
            <slot name="userInfo">
                <img class="top-avatar" :src="userInfo.photo" />
                <a class="btn btn-user-action">您好，{{ userInfo.name || '未知用户' }}</a>
            </slot>
        </div>
    </div>
</template>

<script>
import breadCrumbNav from './breadCrumbNav.vue'

export default {
    components: { breadCrumbNav },
    name: 'topBar',
    props: {
        userInfo: {
            type: Object,
            default() {
                return {
                    name: '王小明',
                    photo: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
                }
            }
        }
    }
}
</script>

<style scoped lang="scss"></style>
