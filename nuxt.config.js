// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // https://tailwindcss.nuxt.dev/
        "@nuxtjs/tailwindcss",

        // https://google-fonts.nuxtjs.org/
        "@nuxtjs/google-fonts",
    ],
    // https://google-fonts.nuxtjs.org/
    googleFonts: {
        families: {
            'Jost': [400, 500, 600, 700],
        },
    },
})
