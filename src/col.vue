<template>
    <div class="col" :class="colClasses" :style="colStyle">
        <slot></slot>
    </div>
</template>
<script>
    let validator = (value) => {
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false
            }
        })
        return valid
    }
    export default {
        name: 'SoulWalkerCol',
        props: {
            span: {type: [Number, String]},
            offset: {type: [Number, String]},
            sm: {type: Object, validator},
            md: {type: Object, validator},
            lg: {type: Object, validator},
            xl: {type: Object, validator},
            xxl: {type: Object, validator}
        },
        data() {return {gutter: 0,}},
        computed: {
            colClasses() {
                let {span, offset,sm,md,lg,xl,xxl} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    ...(sm ? [`col-sm-${sm.span}`]:[]),
                    ...(md ? [`col-md-${md.span}`]:[]),
                    ...(lg ? [`col-lg-${lg.span}`]:[]),
                    ...(xl ? [`col-xl-${xl.span}`]:[]),
                    ...(xxl ? [`col-xll-${xxl.span}`]:[])
                ]
            },
            colStyle() {
                let {gutter} = this
                return {paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px'}
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $class-prefix: col-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                width: ($n/24) * 100%;
            }
        }
        $class-prefix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-prefix}#{$n} {
                margin-left: ($n/24) * 100%;
            }
        }
        @media(min-width: 576px) and (max-width: 767px) {
            $class-prefix: col-sm-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }
            $class-prefix: offset-sm-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media(min-width: 768px) and (max-width: 991px) {
            $class-prefix: col-md-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }
            $class-prefix: offset-md-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media(min-width: 992px) and (max-width: 1199px) {
            $class-prefix: col-lg-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }
            $class-prefix: offset-lg-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media(min-width: 1200px) and (max-width: 1599px) {
            $class-prefix: col-xl-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }
            $class-prefix: offset-xl-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
        @media(min-width: 1600px) {
            $class-prefix: col-xxl-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    width: ($n/24) * 100%;
                }
            }
            $class-prefix: offset-xxl-;
            @for $n from 1 through 24 {
                &.#{$class-prefix}#{$n} {
                    margin-left: ($n/24) * 100%;
                }
            }
        }
    }
</style>