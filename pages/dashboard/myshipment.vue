<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-mainpanel">

        <div class="br-pagebody">

            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="table-wrapper">
                    <div class="row">
                        <div class='col-md-9'>
                            <h6 class="br-section-label" style="margin-top: 10px !important;">Daftar Kiriman</h6>
                        </div>
                        <div class="col-md-3">
                            <form method="post" @submit.prevent="fetchPosts">
                                <input id="searchbox" type="text" class="form-control" placeholder="Kode Pengiriman" v-model="keyword">
                            </form>
                        </div>

                    </div>

                    <table id="datatable1" class="table display responsive nowrap">
                        <thead>
                            <tr>
                                <th class="wd-15p">Tanggal Order</th>
                                <th class="wd-20p">Nomor Resi</th>
                                <th class="wd-30p">Penerima</th>
                                <th class="wd-30p">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="trackings in tracking">
                                <tr href="#">
                                    <td>{{trackings.date_create}}</td>
                                    <td>{{trackings.id_order}}</td>
                                    <td>{{trackings.order.penerima_nama}}</td>
                                    <td v-if="trackings.status === 1 ">
                                        <div class="icon-tracking">
                                            <span class="status-tracking tr-merah"> <i class="fa fa-file-import"></i></span>
                                        </div>
                                        Document Handling
                                    </td>
                                    <td v-if="trackings.status === 2 ">
                                        <div class="icon-tracking">
                                            <span class="status-tracking tr-kuning"> <i class="fa fa-people-carry"></i></span>
                                        </div>
                                        Collected
                                    </td>
                                    <td v-if="trackings.status === 3 ">
                                        <div class="icon-tracking">
                                            <span class="status-tracking tr-hijau"> <i class="fa fa-plane-departure"></i></span>
                                        </div>
                                        Delivering
                                    </td>
                                    <td v-if="trackings.status === 4 ">
                                        <div class="icon-tracking">
                                            <span class="status-tracking tr-hijau"> <i class="fa fa-calendar-check"></i></span>
                                        </div>
                                        Delivered
                                    </td>
                                    <td>
                                        <div class="dropdown">
                                            <a href="#" class="btn btn-outline-primary btn-icon mg-r-5" data-toggle="dropdown">
                                                <div><i class="icon ion-more"></i></div>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-tracking pd-10 wd-150">
                                                <nav class="nav nav-style-2 flex-column">
                                                    <nuxt-link :to="{ path: '/dashboard/order/' + trackings.id_order}" class="nav-link"><i class="icon ion-ios-gear"></i> Print DMS</nuxt-link>

                                                </nav>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                    <Pagination v-if="pagination.last_page > 1" :pagination="pagination" :offset="5" @paginate="fetchPosts()"></Pagination>
                </div><!-- table-wrapper -->

            </div>
        </div><!-- br-pagebody -->
        <Footer />
    </div>
</div>
</template>

<script>
import Logo from '@/components/dashboard/Logo'
import Sidebar from '@/components/dashboard/Sidebar'
import Header from '@/components/dashboard/Header'
import Footer from '@/components/dashboard/Footer'
export default {
    layout: 'dashboard',
    components: {
        Logo,
        Sidebar,
        Header,
        Footer
    },
    data() {
        return {
            tracking: [],
            keyword: '',
            pagination: {
                'current_page': 1
            }
        }
    },
    mounted() {
        this.fetchPosts()
    },
    methods: {
        fetchPosts() {
            console.log(this.$store.getters.loadedId)
            this.$axios.$get(process.env.baseUrl + 'listtracking?id_order=' + this.keyword + '&&id_user=' + this.$store.getters.loadedId + '&&page=' + this.pagination.current_page).then((response) => {
                if (response[0].data) {
                    this.tracking = response[0].data.data
                    this.pagination = response[0].pagination

                }
            });
        }
    }
}
</script>
