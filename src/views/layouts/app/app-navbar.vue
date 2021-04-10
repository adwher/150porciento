<template>
    <div class="navbar">
        <router-link to="/" class="navbar--brand">
            <img src="/logo-color.png" alt="150 porciento">
        </router-link>

        <div class="navbar--links">
            <router-link to="/" class="navbar--item">Nosotros</router-link>
            <router-link to="/services" class="navbar--item">Servicios</router-link>
            <router-link to="/contact" class="navbar--item">Contacto</router-link>
        </div>
    </div>
</template>

<style lang="scss">
.navbar {
    width: 100%;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    position: sticky;
    top: 0;
    z-index: 4;

    &--brand {
        height: 1.5rem;

        img {
            height: 100%;
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
        &--links {
            display: none;
        }
    }
}
</style>