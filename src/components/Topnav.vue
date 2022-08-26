<template>
    <div class="topnav">
        <router-link to="/" class="logo">
            <svg class="icon">
                <use xlink:href="#icon-guodong"></use>
            </svg>
        </router-link>


        <ul class="menu">
            <li>
                <router-link to="/doc/intro">文档</router-link>
            </li>

        </ul>
        <svg v-if="toggleAsideButtonVisible" class="toggleAside" @click="toggleAside">
            <use xlink:href="#icon-icon"></use>
        </svg>
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
    props: {
        toggleAsideButtonVisible: {
            type: Boolean,
            default: false
        }
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')  //get
        const toggleAside = () => {
            asideVisible!.value = !asideVisible?.value
        }
        return { toggleAside }
    }

}
</script>

<style lang="scss" scoped>
$color: #4e6c60;

.topnav {
    // background: pink;
    display: flex;
    padding: 16px;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 20;
    justify-content: center;
    align-items: center;
    color: $color;
    background: rgb(240, 203, 219);
    background: radial-gradient(circle,
            rgba(240, 203, 219, 1) 0%, rgba(194, 214, 238, 1) 100%);
    // background: transparent;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);

    >.logo {
        max-width: 6em;
        margin-right: auto;

        >svg {
            width: 32px;
            height: 32px;
        }
    }



    >.menu {
        display: flex;
        white-space: nowrap;
        flex-wrap: nowrap;

        >li {
            margin: 0 1em;
        }
    }

    .toggleAside {
        width: 32px;
        height: 32px;
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY((-50%));
        display: none;
    }

    @media (max-width:500px) {
        >.menu {
            display: none;
        }

        >a {
            margin: 0 auto;

        }

        >.toggleAside {
            display: inline-block;
        }
    }
}
</style>