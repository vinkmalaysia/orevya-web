import Markdown from 'vite-plugin-md';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        // https://tailwindcss.nuxt.dev/
        "@nuxtjs/tailwindcss",

        // https://google-fonts.nuxtjs.org/
        "@nuxtjs/google-fonts",

        // https://v1.image.nuxtjs.org/
        "@nuxt/image-edge",

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
    vite: {
        vue: {
            include: [/\.vue$/, /\.md$/],
        },
        plugins: [
            Markdown(),
        ],
    },
})
