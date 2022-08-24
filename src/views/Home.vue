<template>
    <div>
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
        <div class="features">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-Vue"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-typescript-def"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-linggan"></use>
            </svg>
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
$pink: #e8ddf8;
$border-radius: 28px;

// $color: #567569;
$color: #4e6c60;

.topnavAndBanner {
    background: rgb(240, 203, 219);
    background: radial-gradient(circle, rgba(240, 203, 219, 1) 0%, rgba(194, 214, 238, 1) 100%);
    // border-bottom-left-radius: 190px 40px;
    // border-bottom-right-radius: 190px 40px;
    // border-top-left-radius: 190px 40px;
    // border-top-right-radius: 190px 40px;
    clip-path: ellipse(80% 60% at 50% 40%);
}

.features {
    >svg {
        width: 64px;
        height: 64px;
    }
}

.banner {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: $color;


    >.actions {
        padding: 8px 0;

        a {
            margin: 0 8px;
            background: #e8ddf8;
            display: inline-block;
            border-radius: $border-radius;
            padding: 8px 24px;
            color: $color;

            &:hover {
                text-decoration: none;
            }
        }
    }
}
</style>