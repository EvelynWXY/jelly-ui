<template>
    <div class="xingzi-tabs">
        <div class="xingzi-tabs-nav" ref="container">
            <div class="xingzi-tabs-nav-item" v-for="(t, index) in titles"
                :ref="el => { if (t === selected) selectedItem = el }" @click="select(t)"
                :class="{ selected: t === selected }" :key="index">
                {{ t }}</div>
            <div class="xingzi-tabs-nav-indicator" ref="indicator"></div>
        </div>
        <div class="xingzi-tabs-content">
            <!-- <component class="xingzi-tabs-content-item"
             v-for="(c, index) in defaults" :is="c" :key="index" /> -->
            <component class="xingzi-tabs-content-item" :is="current" :key="current.props.title" />
        </div>

    </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, watchEffect } from 'vue'
import Tab from './Tab.vue'
export default {
    props: {
        selected: {
            type: String
        }
    },
    setup(props, context) {
        //<> 里是 TypeScript 的参数,TypeScript 的泛型语法
        const selectedItem = ref<HTMLDivElement>(null)
        const indicator = ref<HTMLDivElement>(null)
        const container = ref<HTMLDivElement>(null)

        //只在第一次渲染执行
        onMounted(() => {
            watchEffect(() => {
                const { width } = selectedItem.value.getBoundingClientRect()
                indicator.value.style.width = width + 'px'
                const { left: left1 } = container.value.getBoundingClientRect()
                const { left: left2 } = selectedItem.value.getBoundingClientRect()
                const left = left2 - left1
                indicator.value.style.left = left + 'px'
            }, {
                flush: 'post'
            })
        })

        const defaults = context.slots.default()
        // console.log(defaults[0].type === Tab);
        defaults.forEach((tag) => {
            // @ts-ignore
            if (tag.type.name !== Tab.name) {
                throw new Error('Tab 子标签必须是 Tab')
            }
        })
        const current = computed(() => {

            return defaults.filter((tag) => {
                return tag.props.title === props.selected
            })[0]
        })
        const titles = defaults.map((tag) => {
            return tag.props.title;

        })
        const select = (title: String) => {
            context.emit('update:selected', title)
        }



        return {
            defaults,
            titles,
            current,
            select,
            selectedItem,
            indicator,
            container,

        }
    }
}
</script>

<style lang="scss" >
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.xingzi-tabs {
    &-nav {
        display: flex;
        color: $color;
        border-bottom: 1px solid $border-color;
        position: relative;

        &-item {
            padding: 8px 0;
            margin: 0 16px;
            cursor: pointer;

            &:first-child {
                margin-left: 0;
            }

            &.selected {
                color: $blue;
            }
        }

        &-indicator {
            position: absolute;
            height: 3px;
            left: 0;
            bottom: -1px;
            background: $blue;
            width: 100px;
            transition: all 250ms;
        }
    }

    &-content {
        padding: 8px 0;
    }
}
</style>