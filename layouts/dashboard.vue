<template>
     <nuxt/>
</template>
<script>

export default {
    middleware:['check-auth','auth'],
     head() {
          return {
             link: [

                 { rel: 'stylesheet', href: require('~/assets/dashboard/lib/@fortawesome/fontawesome-free/css/all.min.css') },
                 { rel: 'stylesheet', href: require('~/assets/dashboard/lib/ionicons/css/ionicons.min.css') },
                 { rel: 'stylesheet', href: require('~/assets/dashboard/lib/rickshaw/rickshaw.min.css') },
                 { rel: 'stylesheet', href: require('~/assets/dashboard/css/bracket.css') },
                 { rel: 'stylesheet', href: require('~/assets/dashboard/css/mockup.css') }
            ]
          }
       }
}

</script>
<style scoped>

</style>
