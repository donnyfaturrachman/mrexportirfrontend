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
                src: 'https://katadata-s3-public.s3.ap-southeast-1.amazonaws.com/karhutla/select2.js'
            }, {
                src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js'
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
                    href: 'https://katadata-s3-public.s3.ap-southeast-1.amazonaws.com/karhutla/select2.css'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
