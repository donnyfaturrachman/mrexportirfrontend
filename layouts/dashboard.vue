<template>
<nuxt />
</template>

<script>
export default {
    middleware: ['check-auth', 'auth'],
    head() {
        return {
            script: [{
                src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
            }, {
                src: 'http://18.220.186.165/assets/js/select2.js'
            }],
            link: [

                {
                    rel: 'stylesheet',
                    href: require('~/assets/dashboard/lib/@fortawesome/fontawesome-free/css/all.min.css')
                },
                {
                    rel: 'stylesheet',
                    href: require('~/assets/dashboard/lib/ionicons/css/ionicons.min.css')
                },
                {
                    rel: 'stylesheet',
                    href: require('~/assets/dashboard/lib/rickshaw/rickshaw.min.css')
                },
                {
                    rel: 'stylesheet',
                    href: require('~/assets/dashboard/css/bracket.css')
                },
                {
                    rel: 'stylesheet',
                    href: require('~/assets/dashboard/css/mockup.css')
                },
                {
                    rel: 'stylesheet',
                    href: 'http://18.220.186.165/assets/css/select2.css'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
