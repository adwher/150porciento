<template>
    <div class="app--layout">
        <navbar></navbar>
        
        <div class="app--content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style lang="scss">
.app--layout {
    display: flex;
    flex-direction: column;
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