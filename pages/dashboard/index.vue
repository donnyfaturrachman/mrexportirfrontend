<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-mainpanel">
        <div class="br-pagebody">

            <!-- carousel -->
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="card-header bg-transparent pd-0 bd-b-0">
                    <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Kirim Sekarang</h5>
                </div>
                <!-- card-header -->
                <div class="card-block pd-0">
                    <div class="pd-10">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-6">
                                <div class="form-group mg-b-0">
                                    <label class="d-block">Origin</label>
                                    <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin">
                                        <option value="sfo">Jakarta</option>
                                        <option value="lax">Depok</option>
                                        <option value="Safari">Tangerang</option>
                                        <option value="Opera">Bogor</option>
                                    </select>
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-3 -->
                            <div class="col-md-6">
                                <div class="form-group mg-b-0">
                                    <label class="d-block">Destination</label>
                                    <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin">
                                        <option value="sfo">Kuala Lumpur</option>
                                        <option value="lax">Bangkok</option>
                                        <option value="Safari">New York</option>
                                        <option value="Opera">Beijing</option>
                                    </select>
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-3 -->
                        </div>
                    </div>
                    <div class="pd-10">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-md-6 col-lg-3">
                                <div class="form-group mg-b-0">
                                    <label class="d-block">Via</label>
                                    <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin">
                                        <option value="sfo">Udara</option>
                                        <option value="lax">Laut</option>
                                    </select>
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-3 -->
                            <div class="col-md-6 col-lg-3 mg-t-10 mg-md-t-0">
                                <div class="form-group mg-b-0">
                                    <label class="d-block">Tipe</label>
                                    <div>
                                        <select id="select-dropdown2" class="form-control wd-100p select2" data-placeholder="Choose destination">
                                            <option value="sfo">Paket</option>
                                            <option value="lax">Dokumen</option>
                                        </select>
                                    </div>
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-3 -->
                            <div class="col-md-4 col-lg-1 mg-t-10 mg-lg-t-0">
                                <div class="form-group mg-b-0">
                                    <label>Panjang</label>
                                    <input type="text" class="form-control tx-14" placeholder="cm">
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-2 -->
                            <div class="col-md-4 col-lg-1 mg-t-10 mg-lg-t-0">
                                <div class="form-group mg-b-0">
                                    <label>Lebar</label>
                                    <input type="text" class="form-control form-control-datepicker tx-14" data-language="en" placeholder="cm">
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-2 -->
                            <div class="col-md-4 col-lg-1 mg-t-10 mg-lg-t-0">
                                <div class="form-group mg-b-0">
                                    <label>Tinggi</label>
                                    <input type="text" class="form-control form-control-datepicker tx-14" data-language="en" placeholder="cm">
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-2 -->

                            <div class="col-md-4 col-lg-3 mg-t-10 mg-lg-t-0">
                                <div class="form-group mg-b-0">
                                    <label>Berat</label>
                                    <input type="text" class="form-control tx-14" placeholder="Kg">
                                </div>
                                <!-- form-group -->
                            </div>
                            <!-- col-2 -->

                        </div>
                        <!-- row -->
                        <div class="row justify-content-end pd-10">
                            <a href="" class="btn btn-info tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30">Dapatkan Harga Terbaik</a>
                        </div>

                    </div>
                    <!-- bd -->

                </div>
                <!-- card-block -->
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
    }
}
</script>
