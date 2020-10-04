<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-mainpanel">
        <div class="br-pagebody">
            <div class="br-section-wrapper">
                <div class="table-wrapper">
                    <div class="row">
                        <div class="col-md-9">
                            <h6 class="br-section-label">Daftar Alamat</h6>
                        </div>
                        <div class="col-md-3 text-right">
                            <nuxt-link to="/dashboard/createaddress" class="btn btn-danger btn-small mg-b-10">Tambah Alamat </nuxt-link>
                        </div>
                    </div>

                    <table class="table display responsive nowrap" id="datatable1">
                        <thead>
                            <tr>
                                <th class="wd-20p">Nama</th>
                                <th class="wd-20p">Company</th>
                                <th class="wd-20p">Kota</th>
                                <th class="wd-35p">Alamat</th>
                                <th class="wd-5p">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="alamats in alamat">
                                <tr>
                                    <td>{{ alamats.nama}}</td>
                                    <td>{{ alamats.company}}</td>
                                    <td>{{alamats.kota}}</td>
                                    <td>{{alamats.alamat}}</td>
                                    <td>
                                        <div class="dropdown">
                                            <a class="tx-gray-800 d-inline-block" data-toggle="dropdown" href="">
                                                <div class="ht-45 pd-x-20 bd d-flex align-items-center justify-content-center">
                                                    <span class="mg-r-10 tx-13 tx-medium"><i class="icon ion-more"></i></span>
                                                </div>
                                            </a>
                                            <div class="dropdown-menu dropdown-menu-tracking pd-10 wd-200">
                                                <nav class="nav nav-style-2 flex-column">
                                                    <nuxt-link :to="{ path: '/dashboard/alamat/' + alamats.id}" class="nav-link"><i class="icon ion-ios-gear"></i> Edit</nuxt-link>
                                                    <a class="nav-link" href="#" @click="deleteData(alamats.id)"><i class=" icon ion-ios-download"></i> Hapus</a>
                                                </nav>
                                            </div><!-- dropdown-menu -->
                                        </div><!-- dropdown -->
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
import Pagination from '@/components/dashboard/Pagination'
import Footer from '@/components/dashboard/Footer'
export default {
    layout: 'dashboard',
    components: {
        Logo,
        Sidebar,
        Header,
        Pagination,
        Footer
    },
    mounted() {
        this.fetchPosts()
    },
    methods: {
        deleteData(id) {
            if (id) {
                this.$axios.$post(process.env.baseUrl + 'deleteaddress/' + id).then((response) => {
                    location.reload();
                });
            }
        },
        edit() {

        },
        fetchPosts() {
            this.$axios.$get(process.env.baseUrl + 'listaddress?page=' + this.pagination.current_page).then((response) => {
                if (response[0].data) {
                    this.alamat = response[0].data.data
                    this.pagination = response[0].pagination

                }
            });
        }
    },
    data() {
        return {
            alamat: [],
            pagination: {
                'current_page': 1
            }
        }
    }
}
</script>
