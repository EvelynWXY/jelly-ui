<demo>
支持 disabled
</demo>
<template>
    <Button disabled>Disabled</Button>
    <Button theme="link" disabled>Disabled-Link</Button>
    <Button theme="text" disabled>Disabled-Text</Button>
</template>

<script lang="ts">
import Button from "../libs/Button.vue";
export default {
    components: {
        Button
    }
}
</script>