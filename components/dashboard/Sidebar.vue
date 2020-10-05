<template>
<div class="br-sideleft sideleft-scrollbar">
    <a href="/dashboard/create-shipment"><button class="btn btn-me bd-2 create-ship"><span class="menu-item-label">Create Shipment</span></button></a>
    <label class="sidebar-label pd-x-10 mg-t-20 op-3">Navigation</label>
    <ul class="br-sideleft-menu">
        <li class="br-menu-item">
            <nuxt-link to="/dashboard" class="br-menu-link ">

                <i class="menu-item-icon icon ion-ios-home tx-24"></i>
                <span class="menu-item-label">Dashboard</span>
            </nuxt-link>
            <!-- br-menu-link -->
        </li>
        <!-- br-menu-item -->

        <li class="br-menu-item">
            <nuxt-link to="/dashboard/myshipment" class="br-menu-link ">

                <i class="menu-item-icon ion-social-buffer tx-20"></i>
                <span class="menu-item-label">My Shipment</span>
            </nuxt-link>
            <!-- br-menu-link -->
        </li>

        <li class="br-menu-item">
            <nuxt-link to="/dashboard/alamat" class="br-menu-link ">

                <i class="menu-item-icon icon ion-ios-bookmarks tx-24"></i>
                <span class="menu-item-label">Adress Book</span>
            </nuxt-link>
            <!-- br-menu-link -->
        </li>
        <!-- br-menu-item -->

        <!-- br-menu-item -->
        <li class="br-menu-item">
            <nuxt-link to="/dashboard/support" class="br-menu-link ">
                <i class="menu-item-icon icon ion-android-drafts tx-24"></i>
                <span class="menu-item-label">Support</span>
            </nuxt-link>
            <!-- br-menu-link -->
        </li>
        <!-- br-menu-item -->
    </ul>
</div>
</template>
