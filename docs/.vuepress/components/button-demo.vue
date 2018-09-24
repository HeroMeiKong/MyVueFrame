<template>
    <div>
        <g-button>按钮</g-button>
        <g-button icon="set">按钮</g-button>
        <g-button :loading="true">按钮</g-button>
        <g-button disabled>按钮</g-button>

        <pre>
        <code>{{content}}</code>
    </pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    export default {
        components: {
            'g-button': Button
        },
        data(){
            return{
                content: `
<g-button>按钮</g-button>
<g-button icon="set">按钮</g-button>
<g-button :loading="true">按钮</g-button>
<g-button disabled>按钮</g-button>
`
            }
        }
    }
</script>