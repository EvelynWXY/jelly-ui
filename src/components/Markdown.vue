<template>
    <article class="markdown-body" v-html="content">
    </article>
</template>

<script lang="ts">
import {
    ref
} from 'vue'
export default {
    props: {
        path: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const content = ref<string>(null)
        // 通过动态的 import 得到的东西有一个默认的 default 属性
        import(props.path).then(result => {
            content.value = result.default
        })
        return {
            content
        }
    }
}
</script>