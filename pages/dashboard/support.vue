<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-mainpanel">

        <div class="br-pagebody">
            <div class="bg-gray-200 d-flex align-items-center justify-content-center">
                <div class="login-wrapper wd-250 wd-xl-350 mg-y-30">
                    <h4 class="tx-inverse tx-center">Contact Support</h4>
                    <p class="tx-center mg-b-60"></p>
                    <form method="post" @submit.prevent="contact">
                        <div class="form-group">
                            <div class="row mg-t-10">
                                <div class="col-lg-6">
                                    <label class="rdiobox"><input checked name="rdio" type="radio" value="1" v-model="is_jenis"> <span>Shipment</span></label>
                                </div><!-- col-3 -->
                                <div class="col-lg-6 mg-t-20 mg-lg-t-0">
                                    <label class="rdiobox"><input name="rdio" type="radio" value="2" v-model="is_jenis"> <span>Umum</span></label>
                                </div><!-- col-3 -->
                            </div><!-- row -->
                        </div>
                        <div class="form-group">
                            <input type="hidden" id="kode_order" name="kode_order" class="input-top">
                            <input type="hidden" id="order_text" name="order_text">
                        </div><!-- form-group -->
                        <div class="form-group">
                            <input class="form-control" placeholder="Nama Lengkap" type="text" v-model="name">
                        </div><!-- form-group -->
                        <div class="form-group">
                            <input class="form-control" id="email" placeholder="Email" type="text" v-model="email">
                        </div><!-- form-group -->
                        <div class="form-group">
                            <textarea class="form-control" id="email" placeholder="Tuliskan Pesan Anda" rows="4" v-model="message"></textarea>
                        </div><!-- form-group -->
                        <button class="btn btn-info btn-block" type="submit">Kirim</button>
                    </form>
                </div>
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
    name: 'Support',
    layout: 'dashboard',
    components: {
        Logo,
        Sidebar,
        Header,
        Footer
    },
    data() {
        return {
            is_jenis: 1,
            id_tracking: '',
            name: '',
            email: '',
            message: '',
        }
    },
    mounted() {
        $(document).ready(function () {
            $("#kode_order").select2({
                placeholder: "No Order",
                initSelection: function (element, callback) {
                    callback({
                        id: "",
                        text: ""
                    });
                },
                minimumInputLength: 1,
                ajax: {
                    url: process.env.baseUrl + "orderselect2",
                    dataType: 'json',
                    data: function (term, page) {
                        return {
                            q: term
                        };
                    },
                    results: function (data, page) {

                        return {
                            results: data[0].order
                        };
                    },
                    cache: false
                },
            }).on("change", function (e) {
                $('#order_text').val(e.added.text);
                $("#email").val(e.added.pengirim_email);

            });
        })
    },
    methods: {
        async contact() {
            var bodyFormData = new FormData()
            bodyFormData.append('is_jenis', this.is_jenis)
            bodyFormData.append('id_tracking', this.id_tracking)
            bodyFormData.append('name', this.name)
            bodyFormData.append('email', this.email)
            bodyFormData.append('message', this.message)
            this.$store.dispatch('sendContact', bodyFormData).then(() => {
                this.$router.push('/dashboard')

            })
        }
    }
}
</script>

<style>
a.select2-choice.select2-default {
    height: 35px;
    padding-top: 4px;
}

div#s2id_kode_order {
    width: 100%;
}
</style>
