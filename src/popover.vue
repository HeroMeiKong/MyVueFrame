<template>
    <div class="popover" @click="onClick">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible">
            <slot name="content"></slot>
        </div>
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "SoulWalkerPopover",
        data() {
            return {visible: false}
        },
        methods: {
            positionContent() {
                if (this.$refs.contentWrapper) {
                    document.body.appendChild(this.$refs.contentWrapper)
                    let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                    this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                } else {
                    console.log('ref="contentWrapper"不存在')
                }
            },
            onClickDocument(e) {
                if (this.$refs.contentWrapper && (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target))) {

                } else {
                    this.close()
                }
            },
            open() {
                this.visible = true
                this.$nextTick(() => {
                    this.positionContent()
                    document.addEventListener('click', this.onClickDocument)
                })
            },
            close() {
                this.visible = false
                document.removeEventListener('click', this.onClickDocument)
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible === true) {
                        this.close()
                    } else {
                        this.open()
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #333;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        //box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        filter: drop-shadow(0 1px 1px rgba(0,0,0,.5));
        background: white;
        transform: translateY(-150%);
        padding: .5em 1em;
        max-width: 20em;
        word-break: break-all;
        &::before,&::after {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border: 10px solid transparent;
            position: absolute;
            left: 10px;
        }
        &::before{
            border-top-color: $border-color;
            top: 100%;
        }
        &::after {
            border-top-color: white;
            top: calc(100% - 1px);
        }
    }
</style>