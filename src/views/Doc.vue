
<template>
    <div class="layout">
        <Topnav :toggleAsideButtonVisible="true" class="nav" />
        <div class="content">
            <aside v-if="asideVisible">
                <h2>文档</h2>
                <ol>
                    <li>
                        <router-link to="/doc/intro">介绍</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/install">安装</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/get-started">快速上手</router-link>
                    </li>
                </ol>
                <h2>组件列表</h2>

                <ol>
                    <li>
                        <router-link to="/doc/switch">Switch 开关组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/button">Button 按钮组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/dialog">Dialog 弹出层组件</router-link>
                    </li>
                    <li>
                        <router-link to="/doc/tabs">Tabs 标签页组件</router-link>
                    </li>
                </ol>
            </aside>
            <main>
                <router-view />
            </main>
        </div>
    </div>
</template>
<script lang="ts">
import { Ref, inject } from 'vue';
import Topnav from '../components/Topnav.vue';
export default {
    components: {
        Topnav
    },
    setup() {
        const asideVisible = inject<Ref<boolean>>('asideVisible')  //get
        return { asideVisible }
    }
}
</script>

<style lang="scss" scoped>
$aside-index: 10;

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    >.nav {
        flex-shrink: 0;
    }

    >.content {
        flex-grow: 1;
        padding-top: 60px;
        padding-left: 156px;

        @media (max-width:500px) {
            padding-left: 0;
        }
    }
}

.content {
    display: flex;

    >aside {
        flex-shrink: 0;
    }

    >main {
        flex-grow: 1;
        padding: 16px;
        // background: lightgoldenrodyellow;
        background: white;
    }
}

aside {
    // background: lightblue;
    background: rgb(240, 203, 219);
    background: radial-gradient(circle, rgba(240, 203, 219, 1) 0%, rgba(194, 214, 238, 1) 100%);

    ;
    width: 200px;
    padding: 16px 0;
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 80px;
    height: 100%;
    z-index: $aside-index;

    >h2 {
        margin-bottom: 4px;
        padding: 0 16px;
    }

    >ol {
        >li {
            >a {
                display: block;
                text-decoration: none;
                padding: 7px 16px;
            }

            .router-link-active {

                background: #e8ddf8;
            }
        }
    }

}

main {
    overflow: auto;

    @media(min-width: 501px) {
        margin-left: 50px;
    }

    margin-top: 10px;
}
</style>