import { createApp } from "vue";
import App from "./App.vue";
import Evelyn from './components/Evelyn.vue'
import Evelyn2 from './components/Evelyn2.vue'
import "./index.css";
import { createWebHashHistory, createRouter } from "vue-router";

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Evelyn },
        { path: '/xxx', component: Evelyn2 }
    ]

});
const app = createApp(App);
app.use(router);
app.mount("#app");
