// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // https://tailwindcss.nuxt.dev/
        "@nuxtjs/tailwindcss",

        // https://google-fonts.nuxtjs.org/
        "@nuxtjs/google-fonts",

        // https://motion.vueuse.org/
        "@vueuse/motion/nuxt",
    ],
    // https://google-fonts.nuxtjs.org/
    googleFonts: {
        families: {
            'Jost': [400, 500, 600, 700],
            'Parisienne': [400],
            'Mrs Saint Delafield': [400],
            'Cormorant Garamond': [400, 500, 600],
        },
    },
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        },
    },
})
