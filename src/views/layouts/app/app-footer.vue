<template>
    <footer>
        <div class="footer--writting">
            <h3>Llevemos tu proyecto al siguiente nivel.</h3>
            <p>Queremos ser la agencia que impulse la innovación en tu desarrollo.</p>
        </div>

        <div class="footer--contact">
            <button class="button is-primary" @click="go">
                <span>Ir a contacto</span>
                <feather-icon name="arrow-up-right" size="1.2rem"></feather-icon>
            </button>

            <a href="mailto:valerio@150porciento.com">valerio@150porciento.com</a>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useRoute, useRouter } from "vue-router"

export default defineComponent({
    setup() {
        const { name } = useRoute()
        const { push: navigate } = useRouter()

        function go() {
            if (name === "contact") {
                window.scroll({ top: 0, behavior: "smooth" })
            }

            else {
                navigate("/contact")
            }
        }

        return { go }
    }
})
</script>