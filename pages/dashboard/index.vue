<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-mainpanel">
        <div class="br-pagebody">

            <!-- carousel -->
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="card-header bg-transparent pd-5 bd-b-0">
                    <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">KIRIM SEKARANG</h5>
                    <div class="col-md-12 pd-0">
                        <hr class="hr-shipment" style=" margin-top: 1rem !important; ">
                    </div>
                </div>
                <!-- card-header -->
                <form method="post" @submit.prevent="submitForm">
                    <div class="tabs">
                        <input type="radio" id="tab1" name="tab-control" value="1" v-model="category_cargo">
                        <input type="radio" id="tab2" name="tab-control" value="2" v-model="category_cargo">
                        <input type="radio" id="tab3" name="tab-control" value="3" v-model="category_cargo">
                        <input type="radio" id="tab4" name="tab-control" value="4" v-model="category_cargo">
                        <ul>
                            <li title="General Cargp">
                                <label for="tab1" role="button">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"></path>
                                    </svg>
                                    <br>
                                    <span>General Cargo</span>
                                </label>
                            </li>
                            <li title="Produk Pertanian &amp; Perikanan">
                                <label for="tab2" role="button">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"></path>
                                    </svg>
                                    <br>
                                    <span>Produk Pertanian</span>
                                </label>
                            </li>
                            <li title="Hewan Hidup">
                                <label for="tab3" role="button">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z"></path>
                                    </svg>
                                    <br>
                                    <span>Hewan Hidup</span>
                                </label>
                            </li>
                            <li title="Barang Mudah Terbakar">
                                <label for="tab4" role="button">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path>
                                    </svg>
                                    <br>
                                    <span>Barang Berbahaya</span>
                                </label>
                            </li>
                        </ul>

                        <div class="slider">
                            <div class="indicator"></div>
                        </div>

                    </div>
                    <div class="content">
                        <section>
                            <div class="card-block pd-0">
                                <div class="pd-5">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col-md-6">
                                            <div class="form-group mg-b-0">
                                                <label class="d-block">Origin</label>
                                                <input type="hidden" id="kode_kota_asal" name="kode_kota_asal" class="input-top">
                                                <input type="hidden" id="kota_asal_text" name="kota_text">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group mg-b-0">
                                                <label class="d-block">Destination</label>
                                                <input type="hidden" id="kode_kota_tujuan" name="kode_kota_tujuan" class="input-top">
                                                <input type="hidden" id="kota_tujuan_text" name="kota_text">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pd-5 mg-t-10">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col-md-3">
                                            <div class="form-group mg-b-0">
                                                <label class="d-block">Via</label>
                                                <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin" v-model="tipe_pengiriman">
                                                    <option value="1">Laut</option>
                                                    <option value="2">Udara</option>

                                                </select>
                                            </div>
                                            <!-- form-group -->
                                        </div>
                                        <!-- col-3 -->
                                        <div class="col-md-3">
                                            <div class="form-group mg-b-0">
                                                <label class="d-block">Tipe</label>
                                                <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin" v-model="tipe_package">
                                                    <option value="1">Paket</option>
                                                    <option value="2">Dokumen</option>

                                                </select>
                                            </div>
                                            <!-- form-group -->
                                        </div>
                                        <!-- col-3 -->
                                        <div class="col-md-6">
                                            <div class="form-group mg-b-0">
                                                <label class="d-block">Jenis</label>
                                                <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin">
                                                    <option value="sfo">Elektronik &amp; Mesin (tanpa baterai)
                                                    </option>
                                                    <option value="lax">Barang Konsumsi (makanan, minuman, bahan masak, dll)
                                                    </option>
                                                    <option value="lax">Kendaraan &amp; Spareparts</option>
                                                    <option value="lax">Kain &amp; Pakaian
                                                    </option>
                                                    <option value="lax">Peralatan Rumah
                                                    </option>
                                                    <option value="lax">Obat &amp; Kosmetik
                                                    </option>

                                                </select>
                                            </div>
                                            <!-- form-group -->
                                        </div>
                                    </div>
                                </div>
                                <div class="pd-5 mg-t-10">
                                    <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Rincian Barang</h5>
                                </div>
                            </div>
                            <!-- card-header -->

                            <div class="pd-5" id="rincian-barang-wrapper" v-for="(trans, index) in transaksi">
                                <div class="row justify-content-center align-items-center" id="rincian-barang">
                                    <div class="col-lg-1">
                                        <div class="form-group mg-b-0">
                                            <label class="d-block">Qty</label>
                                            <input type="text" class="form-control tx-14" placeholder="..." v-model="trans.qty">
                                        </div>
                                        <!-- form-group -->

                                    </div>
                                    <div class="col-md-5 col-lg-3">
                                        <div class="form-group mg-b-0">
                                            <label class="d-block">Deskripsi</label>
                                            <input type="text" class="form-control tx-14" placeholder="..." v-model="trans.deskripsi">
                                        </div>
                                        <!-- form-group -->
                                    </div>
                                    <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                                        <div class="form-group mg-b-0">
                                            <label class="d-block">Kemasan</label>
                                            <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin" v-model="trans.kemasan">
                                                <option value="sfo">Box</option>
                                                <option value="lax">Kardus</option>

                                            </select>
                                        </div>
                                        <!-- form-group -->
                                    </div>
                                    <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                                        <div class="form-group mg-b-0">
                                            <label class="d-block">Harga</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Rp</span>
                                                </div>
                                                <input type="text" class="form-control" v-model="trans.harga">

                                            </div>
                                        </div>
                                        <!-- form-group -->
                                    </div>
                                    <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                                        <div class="form-group mg-b-0">
                                            <label>Dimensi</label>
                                            <div class="input-group">

                                                <input type="text" class="form-control" placeholder="P" v-model="trans.p"><input type="text" class="form-control" placeholder="L" v-model="trans.l"><input type="text" class="form-control" placeholder="T" v-model="trans.t">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">cm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- form-group -->
                                    </div>
                                    <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                                        <div class="form-group mg-b-0">
                                            <label>Berat</label>
                                            <div class="input-group">
                                                <input type="text" class="form-control" v-model="trans.berat">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Kg</span>
                                                </div>
                                                <a href="#" @click="deleteUser(index)" class="btn btn-outline-dark btn-icon mg-r-5" style=" border-color: transparent !important; ">
                                                    <div>
                                                        <i class="icon ion-trash-a" style=" font-size: 22px; "></i>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row pd-5 justify-content-end">
                                <button @click="addInput" type="button" name="tambah-barang" class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" style="display: flex;">Tambah Barang</button>
                            </div>
                            <div class="card bd-0  mg-t-20">

                                <button type="submit" class="btn btn-primary btn-kirim tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium" data-toggle="modal" data-target="#modaldemo2">Dapatkan Harga Terbaik</button>
                            </div>
                        </section>

                        <div id="modaldemo2" class="modal fade">
                            <div class="modal-dialog modal-conf-order modal-dialog-centered" role="document">
                                <div class="modal-content tx-size-sm">
                                    <div class="modal-header pd-x-20">
                                        <h6 class="tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold">Harga Pengiriman</h6>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div class="modal-body pd-20">
                                        <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                                            <div class="col-md-12">
                                                <table class="table table-hover mg-b-0" style="width: 100%;  margin: 0 auto;">
                                                    <thead>
                                                        <tr>
                                                            <th style="width: 10%; color: #868ba1 !important;"></th>
                                                            <th style="width: 20%; color: #868ba1 !important;">Moda</th>
                                                            <th style="width: 20%; color: #868ba1 !important;">Layanan</th>
                                                            <th style="width: 25%; color: #868ba1 !important;">Harga Pengiriman</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        <tr>
                                                            <th style="width: 10%; color: #343a40 !important" scope="row">
                                                                <label class="rdiobox">
                                                                    <input name="rdio" type="radio">
                                                                    <span></span>
                                                                </label>
                                                            </th>
                                                            <td style="width: 20%; color: #343a40 !important">Freight</td>
                                                            <td style="width: 20%; color: #343a40 !important">Door to&nbsp;Port</td>
                                                            <td style="width: 25%; color: #343a40 !important">Rp. {{subtotal}}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                            </div>
                                            <div class="card bd-0 pd-25 pd-xs-40 mg-t-20">
                                                <a href="/dashboard/create-shipment" class="btn btn-primary btn-kirim tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium">Kirim Sekarang</a>
                                            </div>
                                        </div>
                                        <!-- card-body -->

                                    </div>
                                </div>
                            </div>
                            <!-- modal-dialog -->
                        </div>
                        <!-- modal -->

                    </div>
                </form>
            </div>
            <!-- card -->

            <!-- row -->
        </div>
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
            subtotal: 0,
            category_cargo: 1,
            tipe_pengiriman: 1,
            tipe_delivery: 1,
            tipe_package: 1,
            transaksi: [{
                qty: '',
                deskripsi: '',
                kemasan: '',
                harga: '',
                p: '',
                l: '',
                t: '',
                berat: ''
            }]

        }
    },
    methods: {
        async submitForm() {
            let i = 0
            if ($("#kode_kota_tujuan").val() == null) {
                this.$toast.show('Choose Destination');
                return 0;
            }
            for (i = 0; i < this.transaksi.length; i++) {
                var bodyFormData = new FormData()
                bodyFormData.append('category_cargo', this.category_cargo)
                bodyFormData.append('tipe_pengiriman', this.tipe_pengiriman)
                bodyFormData.append('tipe_delivery', this.tipe_delivery)
                bodyFormData.append('tipe_package', this.tipe_package)
                bodyFormData.append('qty', this.transaksi[i].qty)
                bodyFormData.append('deskripsi', this.transaksi[i].deskripsi)
                bodyFormData.append('kemasan', this.transaksi[i].kemasan)
                bodyFormData.append('harga', this.transaksi[i].harga)
                bodyFormData.append('panjang', this.transaksi[i].p)
                bodyFormData.append('lebar', this.transaksi[i].l)
                bodyFormData.append('tinggi', this.transaksi[i].t)
                bodyFormData.append('berat', this.transaksi[i].berat)
                bodyFormData.append('destination', $("#kode_kota_tujuan").val())
                try {
                    await this.$axios.$post(process.env.baseUrl + 'hargalisting', bodyFormData).then((response) => {
                        this.subtotal = this.subtotal + response.paket.door_to_port
                    });

                } catch (e) {
                    this.$toast.show('Failed Data')
                }
            }

        },

        deleteUser: function (index) {
            this.transaksi.splice(index, 1);
            if (index === 0)
                this.addInput()
        },
        addInput: function () {
            this.transaksi.push({
                qty: '',
                deskripsi: '',
                kemasan: '',
                harga: '',
                p: '',
                l: '',
                t: '',
                berat: ''
            });
        }
    },
    mounted() {

        $(document).ready(function () {

            $("#kode_kota_asal").select2({
                placeholder: "Kota Asal",
                initSelection: function (element, callback) {
                    callback({
                        id: "",
                        text: ""
                    });
                },
                minimumInputLength: 1,
                ajax: {
                    url: process.env.baseUrl + "kotaselect2",
                    dataType: 'json',
                    data: function (term, page) {
                        return {
                            q: term
                        };
                    },
                    results: function (data, page) {

                        return {
                            results: data[0].data
                        };
                    },
                    cache: false
                },
            }).on("change", function (e) {

                $('#kota_asal_text').val(e.added.text);

            });
            $("#kode_kota_tujuan").select2({
                placeholder: "Kota Tujuan",
                initSelection: function (element, callback) {
                    callback({
                        id: "",
                        text: ""
                    });
                },
                minimumInputLength: 1,
                ajax: {
                    url: process.env.baseUrl + "kotaselect2",
                    dataType: 'json',
                    data: function (term, page) {
                        return {
                            q: term
                        };
                    },
                    results: function (data, page) {

                        return {
                            results: data[0].data
                        };
                    },
                    cache: false
                },
            }).on("change", function (e) {

                $('#kota_tujuan_text').val(e.added.text);

            });
            var count = 0;
            dynamic_field(count);

            function dynamic_field(number) {
                var html = '';
                html += '<div class="row justify-content-center align-items-center" id="rincian-barang' + number + '">';
                html += '<div class="col-lg-1">';
                html += '<div class="form-group mg-b-0">';
                html += '<label class="d-block">Qty</label>';
                html += '<input type="text" class="form-control tx-14" placeholder="..."  v-model="qty">';
                html += '</div>';

                html += '</div>';
                html += '<div class="col-md-5 col-lg-3">';
                html += '<div class="form-group mg-b-0">';
                html += '<label class="d-block">Deskripsi</label>';
                html += '<input type="text" class="form-control tx-14" placeholder="...">';
                html += '</div>';

                html += '</div>';

                html += '<div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">';
                html += '<div class="form-group mg-b-0">';
                html += '<label class="d-block">Kemasan</label>';
                html += '<select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin">';
                html += '<option value="sfo">Box</option>';
                html += '<option value="lax">Kardus</option>';

                html += '</select>';
                html += '</div>';

                html += '</div>';

                html += '<div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">';
                html += '<div class="form-group mg-b-0">';
                html += '<label class="d-block">Harga</label>';
                html += '<div class="input-group">';
                html += '<div class="input-group-prepend">';
                html += '<span class="input-group-text">Rp</span>';
                html += '</div>';
                html += '<input type="text" class="form-control">';

                html += '</div>';
                html += '</div>';

                html += '</div>';

                html += '<div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">';
                html += '<div class="form-group mg-b-0">';
                html += '<label>Dimensi</label>';
                html += '<div class="input-group">';

                html += '<input type="text" class="form-control" placeholder="P"><input type="text" class="form-control" placeholder="L"><input type="text" class="form-control" placeholder="T">';
                html += '<div class="input-group-prepend">';
                html += '<span class="input-group-text">cm</span>';
                html += '</div>';
                html += '</div>';
                html += '</div>';

                html += '</div>';

                html += '<div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">';
                html += '<div class="form-group mg-b-0">';
                html += '<label>Berat</label>';
                html += '<div class="input-group">';

                html += '<input type="text" class="form-control">';
                html += '<div class="input-group-prepend">';
                html += '<span class="input-group-text">Kg</span>';
                html += '</div>';
                html += '<a href="#" id="remove-rincian-wrapper" class="btn btn-outline-dark btn-icon mg-r-5" style=" border-color: transparent !important; ">';
                html += '<div>';
                html += '<i class="icon ion-trash-a" style=" font-size: 22px; "></i>';
                html += ' <input type="hidden" id="count_temp" name="count_temp" value="' + number + '">';
                html += '</div>';
                html += '</a>';
                html += '</div>';
                html += '</div>';

                html += '</div>';

                html += '</div>';
                if (number > 0) {
                    $('#rincian-barang-wrapper').append(html);
                }
            }

            $(document).on('click', '#add-rincian-wrapper', function () {
                console.log('add', count);
                count++;
                dynamic_field(count);

            });

            $(document).on('click', '#remove-rincian-wrapper', function (e) {
                e.preventDefault();
                $(this).parent().parent().parent().parent().remove();
                count--;
            });

        });
    }
}
</script>

<style>
a.select2-choice.select2-default,
.select2-container .select2-choice {
    height: 35px;
    padding-top: 4px;
}

div#s2id_kode_kota_asal,
div#s2id_kode_kota_tujuan {
    width: 100%;
}
</style>
