<template>
    <div class="navbar">
        <div class="navbar--brand">
            <img src="/logo-color.png" alt="150 porciento">
        </div>

        <div class="navbar--menu">
            <a class="navbar--item">Nosotros</a>
            <a class="navbar--item">Servicios</a>
            <a class="navbar--item">Contacto</a>
        </div>

        <div class="navbar--buttons">
            <button>Escribenos</button>
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
    position: fixed;
    top: 0;
    z-index: 4;

    &--brand {
        height: 1.5rem;

        img {
            height: 100%;
        }
    }

    &--menu {
        display: flex;
        align-items: center;
        gap: 1.5rem;

        .navbar--item {
            cursor: pointer;
            user-select: none;
        }
    }

    @media (max-width: 1080px) {
        &--menu {
            display: none;
        }
    }
}
</style>