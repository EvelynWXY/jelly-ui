<template>
    <div>
        <button class="xingzi-switch" @click="toggle" :class="{ 'xingzi-checked': value }"><span></span></button>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            // toggle 的作用就是把当前的值取反通过 input 事件发给外面
            // Vue3 中 emit 的第一个参数要与 props 里数据名称一致
            context.emit('update:value', !props.value)
            // context.emit('input', !props.value)

        }
        return { toggle }
    }
}
</script>

<style lang="scss" >
$h: 22px;
$h2: $h - 4px;

.xingzi-switch {
    height: $h;
    width: $h*2;
    border: none;
    background: #bfbfbf;
    border-radius: $h/2;
    position: relative;

    >span {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background: white;
        border-radius: $h2 / 2;
        transition: all 250ms;
    }

    &.xingzi-checked {
        background: #0986ff;

        >span {
            left: calc(100% - #{$h2} - 2px);

        }
    }

    &:focus {
        outline: none;
    }

    &:active {
        >span {
            width: $h2 + 4px;
        }
    }

    &.xingzi-checked:active {
        >span {
            width: $h2 + 4px;
            margin-left: -4px;
        }
    }

}
</style>