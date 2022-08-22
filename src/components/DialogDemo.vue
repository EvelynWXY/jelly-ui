<template>
    <div>
        <div>Dialog 示例</div>
        <h1>示例1</h1>
        <Button @click="toggle">toggle</Button>
        <Dialog :visible="x"></Dialog>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Button from '../libs/Button.vue';
import Dialog from '../libs/Dialog.vue'
export default {
    components: { Dialog, Button },
    setup() {
        const x = ref(false)
        const toggle = () => {
            x.value = !x.value
        }
        return { x, toggle }
    }
}
</script>