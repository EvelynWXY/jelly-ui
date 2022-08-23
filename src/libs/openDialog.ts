import Dialog from "./Dialog.vue";
import { createApp, h } from "vue";

export const openDialog = (options) => {
    const { title, content, ok, cancel } = options  //从 options 里读取 title、content
    const div = document.createElement('div') //创建一个 div
    document.body.appendChild(div)  //把 div 放到 body 里
    const close = () => {
        app.unmount(div)
        div.remove()
    }
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                'onUpdate:visible': (newVisible) => {
                    if (newVisible === false) {
                        close()
                    }
                }, ok, cancel
            }, { title, content })
        }
    })
    app.mount(div)  //createApp 渲染 Dialog 再挂载到 div 上
}