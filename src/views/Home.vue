<template>
    <div class="topnavAndBanner">
        <Topnav />

        <div class="banner">
            <h1>星星UI</h1>
            <h2>一个厉害的 UI 框架</h2>
            <p class="actions">
                <a href="https://github.com/EvelynWXY/xingzi-ui">GitHub</a>
                <router-link to="/doc">start</router-link>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
export default {
    components: {
        Topnav
    }
}
</script>
<style scoped lang="scss" >
.topnavAndBanner {
    background: rgb(240, 203, 219);
    background: radial-gradient(circle, rgba(240, 203, 219, 1) 0%, rgba(194, 214, 238, 1) 100%);
}

.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: #fff;
            display: inline-block;
            $h: 28px;
            height: $h;
            line-height: $h;
            border-radius: $h/2;
            padding: 0 8px;
        }
    }
}
</style>