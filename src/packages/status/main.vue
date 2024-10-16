<template>
    <div :class="`zrx-status ${type}`">
        <span v-if="$slots.default"><slot></slot></span>
    </div>
</template>

<script>
export default {
    name: 'zrxStatus',
    props: {
        type: {
            type: String,
            default: ''
        }
    }
}
</script>
