<template>
      <nuxt/>
</template>
<script>
  export default {
       middleware:['check-auth','auth-login'],
       head() {
          return {
             link: [
                { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css' },
                 { rel: 'stylesheet', href: require('~/assets/auth/style.css') }
            ],
            script: [
              { hid: 'jquery', src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', defer: true },
              { hid: 'bootstrapjs', src: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', defer: true }
            ]
          }
       }
  }
</script>


