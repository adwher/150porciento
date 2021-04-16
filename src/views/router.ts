import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: () => import("./layouts/app/app-layout.vue"),
        children: [
            {
                path: "",
                component: () => import("./pages/home.vue")
            },

            {
                path: "contact",
                component: () => import("./pages/contact.vue")
            },
        ]
    },

    {
        path: "/:paramsAll(.*)",
        component: () => import("./pages/not-found.vue")
    },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeResolve(() => {
    window.scroll({ top: 0, behavior: "smooth" })
})