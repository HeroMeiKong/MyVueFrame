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
                if(this.$refs.contentWrapper) {
                    document.body.appendChild(this.$refs.contentWrapper)
                    let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                    this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                    this.$refs.contentWrapper.style.top = top + window.scrollY + 'px'
                }else{
                    console.log('ref="contentWrapper"不存在')
                }
            },
            listenToDocument() {
                let eventHandler = (e) => {
                    if (!this.$refs.contentWrapper.contains(e.target)) {
                        this.visible = false
                        document.removeEventListener('click', eventHandler)
                    }
                }
                document.addEventListener('click', eventHandler)
            },
            onShow(){
                this.$nextTick(() => {
                    this.positionContent()
                    this.listenToDocument()
                })
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    this.visible = !this.visible
                    if (this.visible === true) {
                        this.onShow()
                    }
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