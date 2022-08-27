<demo>常规使用</demo>
<template >
    <div>
        <Button @click="toggle">toggle</Button>
        <Dialog v-model:visible="x" :closeOnClickOverlay="true" :ok="f1" :cancel="f2">
            <template v-slot:content>
                <div>hello</div>
                <div>你好哇</div>
            </template>
            <template v-slot:title>
                <strong>
                    加粗的标题
                </strong>
            </template>

        </Dialog>
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
        const f1 = () => {
            return false
        }
        const f2 = () => { }
        return { x, toggle, f1, f2 }
    }
}
</script>