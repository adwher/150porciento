<template>
    <div class="app--layout">
        <navbar></navbar>

        <router-view v-slot="{ Component, route }">
            <transition name="curtain-slide" mode="out-in">
                <div class="app--content" :key="route.fullPath">
                    <component :is="Component"></component>
                </div>
            </transition>
        </router-view>
    </div>
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

import Navbar from "./app-navbar.vue"

export default defineComponent({
    components: {
        Navbar,
    }
})
</script>