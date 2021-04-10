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
                path: "services",
                component: () => import("./pages/services.vue")
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