<template>
    <div>
        <div class="topnavAndBanner">
            <Topnav />

            <div class="banner">
                <h1>果冻 UI</h1>
                <h2>一个厉害的 UI 框架</h2>
                <p class="actions">
                    <a href="https://github.com/EvelynWXY/xingzi-ui">GitHub</a>
                    <router-link to="/doc">start</router-link>
                </p>
            </div>
        </div>
        <div class="features">
            <ul>
                <li>
                    <svg>
                        <use xlink:href="#icon-Vue"></use>
                    </svg>
                    <h3>基于 Vue 3</h3>
                    <p>使用了 Vue 3 Composition API</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-typescript-def"></use>
                    </svg>
                    <h3>基于 TypeScript </h3>
                    <p>源代码采用 TypeScript 书写（非严格检查）</p>
                </li>
                <li>
                    <svg>
                        <use xlink:href="#icon-linggan"></use>
                    </svg>
                    <h3>代码易读</h3>
                    <p>每个组件的源代码都极其简洁</p>
                </li>

            </ul>



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
    background: radial-gradient(circle,
            rgba(240, 203, 219, 1) 0%, rgba(194, 214, 238, 1) 100%);
    clip-path: ellipse(80% 60% at 50% 40%);

    @media (max-width:500px) {
        clip-path: ellipse(80% 55% at 50% 40%);
    }
}

.features {
    margin: 64px auto;
    padding: 0 16px;

    @media (max-width:500px) {
        margin: auto;
    }

    @media (min-width:800px) {

        width: 800px;

        >ul {
            >li {
                width: 50%;
            }
        }
    }

    @media (min-width:1200px) {

        width: 1200px;

        >ul {
            >li {
                width: 33.3333%;
            }
        }
    }

    >ul {
        display: flex;
        flex-wrap: wrap;

        >li {

            margin: 16px 0;
            display: grid;
            justify-content: start;
            align-content: space-between;
            grid-template-areas:
                "icon title"
                "icon text";
            grid-template-columns: 80px auto;
            grid-template-rows: 1fr auto;

            >svg {
                grid-area: icon;
                width: 64px;
                height: 64px;
            }

            >h3 {
                grid-area: title;
                font-size: 28px;
            }

            >p {
                grid-area: text;
            }
        }
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