<template>
    <main class="app--layout">
        <app-navbar></app-navbar>

        <router-view v-slot="{ Component, route }">
            <transition name="curtain-slide" mode="out-in">
                <div class="app--content" :key="route.fullPath">
                    <component :is="Component"></component>
                </div>
            </transition>
        </router-view>

        <app-footer></app-footer>
    </main>
</template>

<style lang="scss">
.app--layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .app--content {
        height: 100%;
        flex: 1;
    }
}
</style>

<script lang="ts">
import { defineComponent } from "vue"

import AppNavbar from "./app-navbar.vue"
import AppFooter from "./app-footer.vue"

export default defineComponent({
    components: {
        AppNavbar,
        AppFooter
    }
})
</script>