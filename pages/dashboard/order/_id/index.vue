<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-mainpanel">

        <div class="br-pagebody">
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="d-md-flex justify-content-between flex-row">
                    <div class="mg-t-25 mg-md-t-0">
                        <template v-if="this.id_via_pengiriman === 1 ">
                            <h4 class="tx-primary"><i class="icon ion-plane" style="font-size: 22px;"></i>&nbsp;&nbsp;Air Freight</h4>
                        </template>
                        <template v-if="this.id_via_pengiriman === 2 ">
                            <h4 class="tx-primary"><i class="fa fa-ship" style=" font-size: 22px; "></i>&nbsp;&nbsp;Sea Freight</h4>
                        </template>
                        <template v-if="this.id_tipe_pengiriman === 1 ">
                            <h4 class="tx-primary">Door to Door</h4>
                        </template>
                        <template v-if="this.id_tipe_pengiriman === 2 ">
                            <h4 class="tx-primary">Door to Port</h4>
                        </template>
                    </div>
                    <h2 class="mg-b-10 tx-uppercase tx-gray-400 tx-mont tx-bold">#ORDER{{this.id}}</h2>
                </div><!-- d-flex -->
                <div class="row mg-t-20">
                    <div class="col-md">
                        <label class="tx-uppercase tx-13 tx-bold mg-b-20">Pengirim</label>
                        <h6 class="tx-primary">{{this.pengirim_nama}}</h6>
                        <p class="lh-7">{{this.pengirim_alamat}}<br>
                            Tel No: {{this.pengirim_telepon}}<br>
                            Email: {{this.pengirim_email}}</p>
                    </div>
                    <div class="col-md">
                        <label class="tx-uppercase tx-13 tx-bold mg-b-20">Peneruma</label>
                        <h6 class="tx-primary">{{this.penerima_nama}}</h6>
                        <p class="lh-7">{{this.penerima_alamat}}<br>
                            Tel No: {{this.penerima_telepon}}<br>
                            Email: {{this.penerima_email}}</p>
                    </div>
                </div>
            </div>
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="row mg-t-20">
                    <div class="col-md">
                        <div class="table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="wd-40p">Deskripsi Barang</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="item in items">
                                        <tr>
                                            <td>{{item.deskripsi}}<br>
                                                {{item.panjang}}x {{item.lebar}}x {{item.tinggi}} m<sup>3</sup> - {{item.qty_barang}} kg - Rp {{item.harga}}
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="col-md">
                        <div class="table-responsive mg-b-20" style="background: #dedede33;">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="wd-40p">Harga Pengiriman</th>
                                        <th class="tx-center"></th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td class="tx-inverse">Layanan Tambahan</td>
                                        <td class="tx-right"></td>
                                    </tr>
                                    <template v-for="addson in addsons">
                                        <tr>
                                            <td>{{addson.title}} - {{addson.jumlah}} Qty</td>
                                            <td class="tx-right">Rp {{addson.harga_total}}</td>
                                        </tr>
                                    </template>

                                    <tr>
                                        <td class="tx-bold tx-inverse">TOTAL HARGA</td>
                                        <td class="tx-right">
                                            <h4 class="tx-info tx-bold">{{this.total_harga}}</h4>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="row mg-t-20">
                    <div class="col-12 col-md-12 hh-grayBox pt45 pb20">
                        <div class="row justify-content-between">
                            <div class="order-tracking completed">
                                <span class="status-tracking tr-putih is-complete"><i class="fa fa-shopping-cart"></i></span>
                                <p>Menunggu<br>
                                    Pembayaran</p>
                            </div>
                            <template v-for="tracking in trackings">
                                <div class="order-tracking completed" v-if="tracking.status === 1 ">
                                    <span class="status-tracking tr-putih is-complete"><i class="fa fa-file-import"></i></span>
                                    <p>Docoument<br>
                                        Handling</p>
                                </div>

                                <div class="order-tracking completed" v-if="tracking.status === 3 ">
                                    <span class="status-tracking tr-putih is-complete"><i class="fa fa-plane-departure"></i></span>
                                    <p> Delivering</p>
                                </div>
                                <div class="order-tracking" v-else-if="tracking.status === 4 ">
                                    <span class="is-complete"></span>
                                    <p>Delivered<br>

                                    </p>
                                </div>

                            </template>
                        </div>
                    </div>
                </div>
                <div class="row mg-t-20">
                    <div class="col-md">
                        <div class="table-responsive mg-b-20">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="tx-left">Local Time</th>
                                        <th class="wd-60p tx-left">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-for="tracking in trackings">
                                        <tr>
                                            <td>{{tracking.created_at}}</td>
                                            <td>{{tracking.keterangan}}</td>
                                        </tr>
                                    </template>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
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
            pengirim_nama: '',
            pengirim_alamat: '',
            pengirim_telepon: '',
            pengirim_email: '',
            penerima_nama: '',
            penerima_alamat: '',
            penerima_telepon: '',
            penerima_email: '',
            id: '',
            total_approved: '',
            total_harga: '',
            id_via_pengiriman: '',
            id_jenis_pengiriman: '',
            id_tipe_pengiriman: '',
            total_harga: '',
            items: [],
            addsons: [],
            trackings: []

        }
    },
    async mounted() {
        await this.$axios.get(process.env.baseUrl + 'getorderbyid/' + this.$route.params.id + '.json')
            .then(res => {

                this.pengirim_nama = res.data[0].order.pengirim_nama
                this.pengirim_alamat = res.data[0].order.pengirim_alamat
                this.pengirim_telepon = res.data[0].order.pengirim_telepon
                this.pengirim_email = res.data[0].order.pengirim_email
                this.penerima_nama = res.data[0].order.penerima_nama
                this.penerima_alamat = res.data[0].order.penerima_alamat
                this.penerima_telepon = res.data[0].order.penerima_telepon
                this.penerima_email = res.data[0].order.penerima_email
                this.id = res.data[0].order.id
                this.total_approved = res.data[0].order.total_approved
                this.total_harga = res.data[0].order.total_harga
                this.id_via_pengiriman = res.data[0].order.id_via_pengiriman
                this.id_jenis_pengiriman = res.data[0].order.id_jenis_pengiriman
                this.id_tipe_pengiriman = res.data[0].order.id_tipe_pengiriman
                this.total_harga = res.data[0].order.total_harga
                this.items = res.data[0].rel_item
                this.addsons = res.data[0].rel_addons
                this.trackings = res.data[0].tracking
            })
    }
}
</script>

<style>

</style>
