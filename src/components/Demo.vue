<template>
    <div>
        <div class="demo">
            <h2>{{ component.__sourceCodeTitle }}</h2>
            <div class="demo-component">
                <component :is="component" />
            </div>
            <div class="demo-actions">
                <Button @click="hideCode" v-if="codeVisible">隐藏代码</Button>
                <Button @click="showCode" v-else>查看代码</Button>
            </div>
            <div class="demo-code" v-if="codeVisible">
                <pre class="language-html" v-html="html" />
            </div>

        </div>

    </div>
</template>

<script lang="ts">
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import Button from '../libs/Button.vue'
import { computed, ref } from 'vue'


export default {
    props: {
        component: Object
    },
    components: { Button },
    setup(props) {
        const html = computed(() => {
            return Prism.highlight(props.component.__sourceCode, Prism.languages.html, 'html')
        })
        const codeVisible = ref(false)
        const showCode = () => {
            codeVisible.value = true
        }
        const hideCode = () => {
            codeVisible.value = false
        }
        return { Prism, html, codeVisible, showCode, hideCode }
    }

}
</script>

<style lang="scss" scoped>
// $border-color: #d9d9d9;
$border-color: rgba(194, 214, 238, 1);

.demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;

    >h2 {
        font-size: 20px;
        padding: 8px 16px;
        border-bottom: 1px solid $border-color;
    }

    &-component {
        padding: 16px;
    }

    &-actions {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;
    }

    &-code {
        padding: 8px 16px;
        border-top: 1px dashed $border-color;

        >pre {
            line-height: 1.1;
            font-family: Consolas, 'Courier New', Courier, monospace;
            margin: 0;
        }
    }
}
</style>