<template>
<div class="br-header">
    <div class="br-header-left">
        <div class="navicon-left hidden-md-down"><a id="btnLeftMenu" href=""><i class="icon ion-navicon-round"></i></a></div>
        <div class="navicon-left hidden-lg-up"><a id="btnLeftMenuMobile" href=""><i class="icon ion-navicon-round"></i></a></div>
        <!-- input-group -->
    </div><!-- br-header-left -->
    <div class="br-header-right">
        <nav class="nav">
            <div class="dropdown">

            </div><!-- dropdown -->
            <!-- dropdown -->
            <div class="dropdown">
                <a href="" class="nav-link nav-link-profile" data-toggle="dropdown">
                    <span class="logged-name hidden-md-down">{{this.$store.getters.loadedName}}</span>
                    <img src="https://via.placeholder.com/500" class="wd-32 rounded-circle" alt="">
                    <span class="square-10 bg-success"></span>
                </a>
                <div class="dropdown-menu dropdown-menu-header wd-250">
                    <div class="tx-center">
                        <a href=""><img src="https://via.placeholder.com/500" class="wd-80 rounded-circle" alt=""></a>
                        <h6 class="logged-fullname">{{this.$store.getters.loadedName}}</h6>
                        <p>{{this.$store.getters.loadedEmail}}</p>
                    </div>

                    <ul class="list-unstyled user-profile-nav">
                        <li><a href="#" @click="onLogout"><i class="icon ion-power"></i> Sign Out</a></li>
                    </ul>
                </div><!-- dropdown-menu -->
            </div><!-- dropdown -->
        </nav>

    </div><!-- br-header-right -->
</div><!-- br-header -->
</template>

<script>
export default {

    mounted() {

    },
    methods: {

        onLogout() {
            this.$store.dispatch('logout')
            window.location.href = "/auth/login"
        }
    }
}
</script>
