<template>
    <i :class="['zrx-icon', type]"></i>
</template>

<script>
export default {
    name: 'ZrxIcon',
    props: {
        type: {
            type: String,
            default: ''
        }
    }
}
</script>
