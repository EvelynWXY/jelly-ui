
<template>
    <div>
        <!-- <Switch :value="y" @update:value="y = $event" /> -->
        <!-- 可简写成 -->
        <Switch v-model:value="y" />
        <!-- 
            监听 input事件 与 context.emit('input', !props.value) 中的 input 对应
            $event 与 第二个参数对应，即是触发这个事件时传的参数
         -->
    </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Switch from '../libs/Switch.vue'
export default {
    components: { Switch },
    setup() {
        const y = ref(false)
        return { y }
    }

}
</script>
<style lang="scss" scoped>
</style>