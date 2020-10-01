export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://18.141.205.174/api/'
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [
        { src: '~/assets/dashboard/lib/jquery/jquery.min.js', ssr: false },
        { src: '~/assets/dashboard/lib/bootstrap/js/bootstrap.bundle.min.js', ssr: false },

        { src: '~/assets/dashboard/js/ResizeSensor.js', ssr: false },

    ],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/toast'

    ],
    axios: {

    },
    toast: {
        position: 'top-center',
        duration: 2000,
        register: [ // Register custom toasts
            {
                name: 'my-error',
                message: 'Oops...Something went wrong',
                options: {
                    type: 'error'
                }
            }
        ]
    },
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {}
}