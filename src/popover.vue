<template>
    <div class="popover" @click.stop="xxx">
        <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
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
            xxx() {
                this.visible = !this.visible
                if (this.visible === true) {
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = left+'px'
                        this.$refs.contentWrapper.style.top = top+'px'
                        let eventHandler = () => {
                            this.visible = false
                            document.removeEventListener('click', eventHandler)
                        }
                        document.addEventListener('click', eventHandler)
                    })
                } else {

                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;

    }
    .content-wrapper {
        position: absolute;
        box-shadow: 0 0 3px rgba(0, 0, 0, .5);
        transform: translateY(-100%);
    }
</style>