<template>
    <div class="navbar" :class="{ 'is-active': active }">
        <router-link to="/" class="navbar--brand">
            <img src="/logo-color.png" alt="150 porciento">
        </router-link>

        <div class="navbar--links">
            <router-link to="/" class="navbar--item">Nosotros</router-link>
            <router-link to="/contact" class="navbar--item">Contacto</router-link>
        </div>
    </div>
</template>

<style lang="scss">
@use "../../../styles/variables" as *;

.navbar {
    max-width: calc(100% - 8rem);
    width: 100%;
    height: $navbar-height;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2.5rem;
    position: sticky;
    top: 0;
    z-index: 4;
    border-radius: .5rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border: solid 1px transparent;
    border-top: none;
    transition: all ease .2s;

    &.is-active {
        background-color: white;
        box-shadow: 0 .2rem .6rem rgba(black, 0.01), 0 0 .3rem rgba(black, 0.02);
        border-color: #F0F0F0;
    }

    &--brand {
        display: flex;

        img {
            height: 1.8rem;
        }
    }

    &--links {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .navbar--item {
            cursor: pointer;
            text-decoration: none;
            user-select: none;
        }
    }

    @media (max-width: 1080px) {
        max-width: 100%;
        border-radius: 0;

        &--brand img {
            height: 1.4rem;
        }
    }
}
</style>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue"

export default defineComponent({
    setup() {
        const active = ref(false)

        onMounted(function () {
            document.addEventListener("scroll", function () {
                const data = document.body.getBoundingClientRect()
                
                active.value = (data.top * -1) >= 50
            })
        })

        return { active }
    }
})
</script>