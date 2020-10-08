<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-pagebody mg-t-50 d-flex align-items-center justify-content-center">
        <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
            <form method="post" @submit.prevent="insertaddress">
                <div class="row mg-t-10 pd-10 mg-l-0 ">
                    <div class="col-md-6">
                        <label class="rdiobox">
                            <input name="rdio" type="radio" value="1" v-model="tipe_user">
                            <span>Pengirim</span>
                        </label>
                    </div>
                    <!-- col-3 -->
                    <div class="col-md-6 mg-t-20 mg-lg-t-0">
                        <label class="rdiobox">
                            <input name="rdio" type="radio" value="2" v-model="tipe_user">
                            <span>Penerima</span>
                        </label>
                    </div>
                    <!-- col-3 -->
                </div>
                <!-- row -->
                <div class="col-md-12">
                    <div class="row justify-content-center align-items-center">

                        <div class="col-md-12">
                            <h5 class="pd-5 tx-16 tx-spacing-1 tx-semibold tx-inverse mg-t-30">Rincian Kontak</h5>
                            <div class="form-group mg-b-0">
                                <div class="pd-5">
                                    <label class="d-block">Perusahaan</label>
                                    <input class="form-control" placeholder="" type="text" v-model="company">

                                </div>
                                <div class="pd-5">
                                    <label class="d-block">Nama Kontak</label>
                                    <input class="form-control" placeholder="" type="text" v-model="nama">
                                </div>
                                <div class="pd-5">
                                    <label class="d-block">No Hp</label>
                                    <input class="form-control" placeholder="" type="text" v-model="no_hp">
                                </div>
                                <div class="pd-5">
                                    <label class="d-block">Email</label>
                                    <input class="form-control" placeholder="" type="text" v-model="email">
                                </div>
                                <div class="pd-5">
                                    <label class="d-block">Catatan Khusus</label>
                                    <input class="form-control" placeholder="" type="text" v-model="catatan">
                                </div>
                            </div>
                            <!-- form-group -->
                        </div>
                        <!-- col-3 -->

                        <div class="col-md-12">
                            <h5 class="pd-5 tx-16 tx-spacing-1 tx-semibold tx-inverse mg-t-30">Rincian Alamat</h5>
                            <div class="form-group mg-b-0">
                                <div class="pd-5">
                                    <label class="d-block">Negara/Wilayah</label>
                                    <input type="hidden" id="kode_negara" name="kode_negara" class="input-top">
                                    <input type="hidden" id="negara_text" name="negara_text">
                                </div>
                                <div class="pd-5">
                                    <label class="d-block">Kode Pos <span class="tx-danger">*</span></label>
                                    <input class="form-control" placeholder="" type="text" v-model="kode_pos">
                                </div>
                                <div class="pd-5">
                                    <label class="d-block">Kota</label>
                                    <input type="hidden" id="kode_kota" name="kode_kota" class="input-top">
                                    <input type="hidden" id="kota_text" name="kota_text">

                                </div>
                                <div class="pd-5">
                                    <label class="d-block">Alamat</label>
                                    <textarea rows="5" class="form-control" placeholder="" v-model="alamat"></textarea>
                                </div>
                            </div>
                            <!-- form-group -->
                        </div>
                        <!-- col-3 -->

                        <div class="col-md-12">
                            <div class="pd-5 justify-content-center align-items-center mg-t-20">
                                <button type="submit" class="btn btn-primary btn-kirim tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium">Simpan Alamat</button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>
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
    mounted() {

        $(document).ready(function () {
            $("#kode_kota").select2({
                placeholder: "No kota",
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

                $('#kota_text').val(e.added.text);

            });
            $("#kode_negara").select2({
                placeholder: "No negara",
                initSelection: function (element, callback) {
                    callback({
                        id: "",
                        text: ""
                    });
                },
                minimumInputLength: 1,
                ajax: {
                    url: process.env.baseUrl + "negaraselect2",
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
                $('#negara_text').val(e.added.text);

            });
        })
    },
    data() {
        return {
            id_user: this.$store.getters.loadedId,
            nama: '',
            company: '',
            no_hp: '',
            email: '',
            tipe_user: 1,
            catatan: '',
            id_kota: '',
            id_negara: '',
            kode_pos: '',
            alamat: '',
            created_by: '',
        }
    },
    methods: {

        async insertaddress() {
            var bodyFormData = new FormData()

            bodyFormData.append('id_user', this.id_user)
            bodyFormData.append('nama', this.nama)
            bodyFormData.append('company', this.company)
            bodyFormData.append('tipe_user', this.tipe_user)
            bodyFormData.append('catatan', this.catatan)
            bodyFormData.append('id_kota', $("#kode_kota").val())
            bodyFormData.append('id_negara', $("#kode_negara").val())
            bodyFormData.append('kode_pos', this.kode_pos)
            bodyFormData.append('no_hp', this.no_hp)
            bodyFormData.append('alamat', this.alamat)
            bodyFormData.append('email', this.email)
            bodyFormData.append('created_by', this.created_by)
            this.$store.dispatch('insertAddress', bodyFormData).then(() => {
                this.$router.push('/dashboard/alamat')

            })
        }
    }
}
</script>

<style>
a.select2-choice.select2-default,
.select2-container .select2-choice {
    height: 35px;
    padding-top: 4px;
}

div#s2id_kode_negara,
div#s2id_kode_kota {
    width: 100%;
}
</style>
