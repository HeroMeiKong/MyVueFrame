<template>
    <div>
        <div class="box">
            <g-input value="HeroMeiKong" disabled></g-input>
            <g-input value="SoulWalker" readonly></g-input>
            <g-input value="SoulWalker"></g-input>
        </div>
        <div class="box"  id="inputApp">
            <g-input v-model="message"></g-input><p>{{message}}</p>
        </div>
        <div class="box">
            <g-input value="SoulWalker" error="姓名不能少于2个字"></g-input>
        </div>


        <pre>
            <code>{{content}}</code>
        </pre>
    </div>
</template>
<script>
    import Input from '../../../src/input'

    export default {
        components: {
            'g-input': Input
        },
        data(){
            return{
                message: 'SoulWalker',
                content: `
<div>
    <g-input value="HeroMeiKong" disabled></g-input>
    <g-input value="SoulWalker" readonly></g-input>
    <g-input value="SoulWalker"></g-input>
</div>
<div>
    <g-input v-model="message"></g-input>
    <p>{{message}}</p>
</div>
<div>
    <g-input value="SoulWalker" error="姓名不能少于2个字"></g-input>
</div>`
            }
        }
    }
</script>
<style>
    .box{
        margin: 5px;
    }
</style>