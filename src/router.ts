import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import { createWebHashHistory, createRouter } from "vue-router";
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import { h } from 'vue';
import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/get-started.md'

const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc,
            children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'intro', component: md(intro) },
                { path: 'get-started', component: md(getStarted) },
                { path: 'install', component: md(install) },
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]

});

export default router