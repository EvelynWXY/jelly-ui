<template>
    <div>
        <div>Dialog 示例</div>
        <h1>基本</h1>
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
        <h1>一键打开</h1>
        <Button @click="showDialog">show</Button>


    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import Button from '../libs/Button.vue';
import Dialog from '../libs/Dialog.vue'
import { openDialog } from '../libs/openDialog';

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
        const showDialog = () => {
            openDialog({
                title: '标题', content: '你好', ok: () => {
                    console.log('ok');

                },
                cancel: () => {
                    console.log('cancel');

                }
            })
        }
        return { x, toggle, f1, f2, showDialog }
    }
}
</script>