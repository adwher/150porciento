<template>
    <section class="landing">
        <div class="landing--writting">
            <h1>Diseñamos</h1>
            <p>Para un mundo cada vez más,</p>
            <h1 class="is-outline">Conectado.</h1>
        </div>
    </section>

    <section class="core">
        
    </section>

    <section class="partners">

    </section>
</template>

<style lang="scss">
section {
    padding: 4rem 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 880px) {
        padding: 3rem 2rem;
    }
}

section.landing {
    height: 100vh;
    gap: 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
}
</style>