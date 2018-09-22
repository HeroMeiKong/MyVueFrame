<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'SoulWalkerToast',
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0,0,0,.75);
    .toast{
        position: fixed;
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        border-radius: 4px;
        box-shadow: 0 0 3px 0 rgba(0,0,0,.5);
        color: white;
        padding: 0 16px;
    }
</style>