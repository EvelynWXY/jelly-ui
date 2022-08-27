
<demo>
支持显示加载中
</demo>
<template>
    <div>
        <Button loading>Loading</Button>
        <Button>Click me</Button>
    </div>
</template>

<script lang="ts">
import Button from "../libs/Button.vue";
export default {
    components: {
        Button
    },
}
</script>