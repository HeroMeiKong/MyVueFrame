<template>
    <div>
        <g-row gutter="10" class="box">
            <g-col>s</g-col>
            <g-col>s</g-col>
        </g-row>
        <g-row gutter="10" class="box">
            <g-col>s</g-col>
            <g-col>s</g-col>
            <g-col>s</g-col>
        </g-row>
        <g-row gutter="0" class="box">
            <g-col>s</g-col>
            <g-col>s</g-col>
            <g-col>s</g-col>
            <g-col>s</g-col>
        </g-row>
        <g-row gutter="10" class="box">
            <g-col span="2">s</g-col>
            <g-col span="22">s</g-col>
        </g-row>
        <g-row gutter="10" class="box">
            <g-col span="2">s</g-col>
            <g-col span="20" offset="2">s</g-col>
        </g-row>
        <g-row class="box">
            <g-col span="2">s</g-col>
            <g-col span="10" offset="2">s</g-col>
            <g-col span="8" offset="2">s</g-col>
        </g-row>


        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'
    export default {
        components: {
            'g-row': Row,
            'g-col': Col
        },
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator(value) {
                    return ['left', 'right', 'center'].indexOf(value) >= 0
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                let {gutter} = this
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
            },
            rowClass() {
                let {align} = this
                return [align && `align-${align}`]
            }
        },
        data(){
            return{
                content: `
<g-button>按钮</g-button>
<g-button icon="set">按钮</g-button>
<g-button :loading="true">按钮</g-button>
<g-button disabled>按钮</g-button>
<g-button icon="next" icon-position="right">按钮</g-button>`
            }
        }
    }
</script>
<style>
    .box{
        border: 1px solid black;
    }
    .box > div{
        border-left: 1px solid black;
        border-right: 1px solid black;
    }
</style>