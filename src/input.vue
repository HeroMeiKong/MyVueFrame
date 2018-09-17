<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    </div>
</template>
<script>
    export default {
        name: 'swInput',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-hover-color: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0, 0, 0, .5);
    $error-color: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-block;
        > input {
            height: 32px;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-hover-color;
            }
            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }
            &[disabled] {
                border-color: #bbb;
                color: #bbb;
                cursor: not-allowed;
            }
            &[readonly] {
                border-color: #222;
                color: #222;
                cursor: not-allowed;
            }
        }
        &.error {
            > input{
                border-color: $error-color;
            }
        }
    }
</style>