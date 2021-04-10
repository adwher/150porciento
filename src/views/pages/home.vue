<template>
    <section class="landing">
        <div class="landing--writting">
            <h3>Diseñamos</h3>
            <p>Para un mundo cada vez más,</p>
            <h1 class="is-outline">Innovador.</h1>
        </div>

        <div class="landing--are">
            <p>Somos,</p>
            <p>150 por ciento</p>
            <svg class="line" width="956" height="44" viewBox="0 0 956 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M177.695 44C59.2317 44 0 39.1111 0 29.3333C0 24.4444 13.031 21.0598 39.0929 19.1795C67.5242 17.2991 114.91 15.6068 181.249 14.1026C249.958 12.5983 335.252 10.3419 437.13 7.33333C541.378 4.32479 650.364 1.88034 764.089 0C811.475 0 851.752 1.31624 884.922 3.94872C932.307 7.7094 956 12.2222 956 17.4872C956 19.3675 950.077 21.812 938.23 24.8205C928.753 27.8291 902.691 30.4615 860.045 32.7179L177.695 44Z" fill="#02113C" />
            </svg>
        </div>
    </section>

    <section class="core">
        <div class="container">
            <h2>Una agencia digital, joven y fuerte</h2>
            <p>Así nos hacemos conocer; somos una consultora de diseño y desarrollo tecnologico con una trayectoria impecable, ubicada en Bogotá, Colombia y con mucho cariño para el mundo.</p>
        </div>

        <div class="buttons">
            <button>Contacto</button>
        </div>
    </section>

    <section class="partners">
        <div class="logo">
            <img class="ads" src="/google-ads.webp" loading="lazy" alt="Google Ads">
        </div>
        
        <div class="logo">
            <img class="pilsen" src="/pilsen.webp" loading="lazy" alt="Cerveza Pilsen">
        </div>
        
        <div class="logo">
            <img class="aguila" src="/aguila.webp" loading="lazy" alt="Cerveza Aguila">
        </div>
        
        <div class="logo">
            <img class="analytics" src="/google-analytics.webp" loading="lazy" alt="Google Analytics">
        </div>
        
        <div class="logo">
            <img class="primax" src="/primax.webp" loading="lazy" alt="Primax">
        </div>
        
        <div class="logo">
            <img class="linkedin" src="/linkedin.webp" loading="lazy" alt="Linkedin">
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 880px) {
        padding: 3rem 2rem;
    }
}

section.landing {
    height: calc(100vh - 4rem);
    gap: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    line-height: 2;
    position: relative;

    @media (max-width: 720px) {
        height: calc(100vh - 8rem);
    }

    .landing--are {
        position: absolute;
        right: 8rem;
        top: 25%;
        font-size: clamp(3rem, 10vw, 7rem);
        font-family: "Caveat", sans-serif !important;
        line-height: 1;
        text-align: right;
        transform: rotate(-12deg);
        color: #02113c;

        .line {
            max-width: 40%;
        }

        @media (max-width: 720px) {
            top: 20%;
            right: 0;
            left: 2rem;
            text-align: left;
            transform: rotate(0deg);

            .line {
                max-width: 50%;
            }
        }
    }
}

section.core {
    text-align: center;
    background: #fbfbfb;
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
        max-width: 50rem;
        margin: 0 auto;
        gap: 3rem;
    }
}

section.partners {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(4rem, 10rem));
    gap: 3rem;
    align-items: center;
    justify-content: center;

    .logo {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img {
        max-height: 3rem;
        max-width: 100%;
        filter: grayscale(1);

        &.primax {
            filter: brightness(0.55);
        }
    }
}
</style>