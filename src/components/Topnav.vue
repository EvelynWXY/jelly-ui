<template>
    <div class="topnav">
        <router-link to="/">
            <img class="logo" src="../assets/Sweetquan.svg" />
        </router-link>


        <ul class="menu">
            <li>
                <router-link to="/doc">文档</router-link>
            </li>

        </ul>
        <img class="toggleAside" @click="toggleAside" src="../assets/types.svg" alt="" />
    </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
export default {
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
    z-index: 10;
    justify-content: center;
    align-items: center;
    color: $color;

    >a {
        margin-right: auto;

        >.logo {
            max-width: 6em;

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
        width: 24px;
        height: 24px;
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