<demo>
支持显示加载中
</demo>
<template>
    <div>
        <Button loading>加载中</Button>
        <Button @click="onClick" :loading="isLoading">Click me</Button>
    </div>
</template>

<script lang="ts">
import { Button } from '../libs/index'
import { ref } from 'vue';
export default {
    components: {
        Button
    },
    setup() {
        const isLoading = ref(false)
        const onClick = () => {
            isLoading.value = !isLoading.value

        }
        return {
            onClick,
            isLoading,

        }
    }
}
</script>