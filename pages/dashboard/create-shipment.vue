<template>
<div>
    <Logo />
    <Sidebar />
    <Header />
    <div class="br-mainpanel">
        <div class="br-pagebody mg-t-50">
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="row pd-5">
                    <div class="col-md-3">
                        <h5 class="tx-20 tx-primary tx-uppercase tx-spacing-1 tx-semibold">Pengirim</h5>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <h6 class="tx-primary">{{pengirim_nama}}</h6>
                        <p class="lh-7">{{pengirim_alamat}}<br>
                            Tel No: {{pengirim_telepon}}<br>
                            Email: {{pengirim_email}}</p>
                    </div>
                </div>
                <div class="row pd-5 mg-b-20">
                    <div class="col-md-12">
                        <hr class="hr-shipment">
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h5 class="pd-5 tx-16 tx-spacing-1 tx-semibold tx-inverse">Rincian Kontak</h5>
                        <div class="form-group mg-b-0">
                            <div class="pd-5">
                                <label class="d-block">Perusahaan</label> <input class="form-control" placeholder="" type="text" v-model="pengirim_perusahaan">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Nama Kontak</label> <input class="form-control" placeholder="" type="text" v-model="pengirim_nama">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">No Hp</label> <input class="form-control" placeholder="" type="text" v-model="pengirim_telepon">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Email</label> <input class="form-control" placeholder="" type="text" v-model="pengirim_email">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Catatan Khusus Pengambilan</label> <input class="form-control" placeholder="" type="text">
                            </div>
                        </div><!-- form-group -->
                    </div><!-- col-3 -->
                    <div class="col-md-6">
                        <h5 class="pd-5 tx-16 tx-spacing-1 tx-semibold tx-inverse">Rincian Alamat</h5>
                        <div class="form-group mg-b-0">
                            <div class="pd-5">
                                <label class="d-block">Negara/Wilayah</label>
                                <input type="hidden" id="kode_negara_asal" name="kode_negara_asal" class="input-top">
                                <input type="hidden" id="negara_asal_text" name="negara_asal_text">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Kode Pos <span class="tx-danger">*</span></label> <input class="form-control" placeholder="" type="text" v-model="pengirim_kodepos">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Kota</label>
                                <input type="hidden" id="kode_kota_asal" name="kode_kota_asal" class="input-top">
                                <input type="hidden" id="kota_asal_text" name="kota_text">

                            </div>
                            <div class="pd-5">
                                <label class="d-block">Alamat</label>
                                <textarea class="form-control" placeholder="" rows="5" v-model="pengirim_alamat"></textarea>
                            </div>
                        </div><!-- form-group -->
                    </div><!-- col-3 -->
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="pd-5">
                            <label class="ckbox"><input type="checkbox"> <span>Simpan di Daftar Alamat</span></label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="row pd-5">
                    <div class="col-md-3">
                        <h5 class="tx-20 tx-primary tx-uppercase tx-spacing-1 tx-semibold">Penerima</h5>
                    </div>
                    <div class="col-md-6 offset-md-3">
                        <h6 class="tx-primary">{{penerima_nama}}</h6>
                        <p class="lh-7">{{penerima_alamat}}<br>
                            Tel No: {{penerima_telepon}}<br>
                            Email: {{penerima_email}}</p>
                    </div>
                </div>
                <div class="row pd-5 mg-b-20">
                    <div class="col-md-12">
                        <hr class="hr-shipment">
                    </div>
                </div>
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6">
                        <h5 class="pd-5 tx-16 tx-spacing-1 tx-semibold tx-inverse">Rincian Kontak</h5>
                        <div class="form-group mg-b-0">
                            <div class="pd-5">
                                <label class="d-block">Perusahaan</label> <input class="form-control" placeholder="" type="text" v-model="penerima_perusahaan">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Nama Kontak</label> <input class="form-control" placeholder="" type="text" v-model="penerima_nama">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">No Hp</label> <input class="form-control" placeholder="" type="text" v-model="penerima_telepon">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Email</label> <input class="form-control" placeholder="" type="text" v-model="penerima_email">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Catatan Khusus Penerima</label> <input class="form-control" placeholder="" type="text">
                            </div>
                        </div><!-- form-group -->
                    </div><!-- col-3 -->
                    <div class="col-md-6">
                        <h5 class="pd-5 tx-16 tx-spacing-1 tx-semibold tx-inverse">Rincian Alamat</h5>
                        <div class="form-group mg-b-0">
                            <div class="pd-5">
                                <label class="d-block">Negara/Wilayah</label>
                                <input type="hidden" id="kode_negara_tujuan" name="kode_negara_tujuan" class="input-top">
                                <input type="hidden" id="negara_tujuan_text" name="negara_tujuan_text">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Kode Pos <span class="tx-danger">*</span></label> <input class="form-control" placeholder="" type="text" v-model="penerima_kodepos">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Kota</label>
                                <input type="hidden" id="kode_kota_tujuan" name="kode_kota_tujuan" class="input-top">
                                <input type="hidden" id="kota_tujuan_text" name="kota_text">
                            </div>
                            <div class="pd-5">
                                <label class="d-block">Alamat</label>
                                <textarea class="form-control" placeholder="" rows="5" v-model="penerima_alamat"></textarea>
                            </div>
                        </div><!-- form-group -->
                    </div><!-- col-3 -->
                    <div class="col-md-6"></div>
                    <div class="col-md-6">
                        <div class="pd-5">
                            <label class="ckbox"><input type="checkbox"> <span>Simpan di Daftar Alamat</span></label>
                        </div>
                    </div>
                </div>
            </div>
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
                                                <input type="hidden" id="kode_barang" name="kode_barang" class="input-top">
                                                <input type="hidden" id="barang_text" name="barang_text">
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
                                            <input type="text" class="form-control tx-14" placeholder="..." v-model="trans.qty" @keypress='validate($event)'>
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
                                                <template v-for="pckg in package">
                                                    <option v-bind:value="pckg.id">{{pckg.title}}</option>

                                                </template>
                                            </select>
                                        </div>
                                        <!-- form-group -->
                                    </div>
                                    <div class=" col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                                        <div class="form-group mg-b-0">
                                            <label class="d-block">Harga</label>
                                            <div class="input-group">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">Rp</span>
                                                </div>
                                                <input type="text" class="form-control" v-model="trans.harga" @keypress='validate($event)'>

                                            </div>
                                        </div>
                                        <!-- form-group -->
                                    </div>
                                    <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                                        <div class="form-group mg-b-0">
                                            <label>Dimensi</label>
                                            <div class="input-group">

                                                <input type="text" class="form-control" placeholder="P" @keypress='validate($event)' v-model="trans.p"><input type="text" class="form-control" placeholder="L" v-model="trans.l" @keypress='validate($event)'><input type="text" class="form-control" placeholder="T" v-model="trans.t" @keypress='validate($event)'>
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
                                                <input type="text" class="form-control" v-model="trans.berat" @keypress='validate($event)' required="required" @change="calculateTotal">
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

                            <div class="pd-5 mg-t-10">
                                <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Layanan Tambahan</h5>
                            </div>
                            <div class="row pd-5">
                                <template v-for="(items, index) in items_dokumen">
                                    <div class="row col-md-12 row-input">
                                        <div class="col-md-5">
                                            <div class="form-group mg-b-0">
                                                <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose" v-model="items.id" @change="onChangeDocument($event,index)">
                                                    <template v-for="item in item_dokumen">
                                                        <option v-bind:value="item.id">{{item.title}}</option>

                                                    </template>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group mg-b-0">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Rp 1.000.000" v-model="items.harga" />
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">Dokumen</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-2">
                                            <a href="#" @click="deleteItemDOC(index)" class="btn btn-outline-dark btn-icon mg-r-5" style=" border-color: transparent !important; ">
                                                <div>
                                                    <i class="icon ion-trash-a" style=" font-size: 22px; "></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <br />
                                </template>
                            </div>
                            <div class="row pd-5 justify-content-end">
                                <button @click="addItemDoc" type="button" name="tambah-barang" class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" style="display: flex;">Tambah Dokumen</button>
                            </div>
                            <div class="row pd-5">
                                <template v-for="(itemz, index) in items_non_dokumen">
                                    <div class="row row-input">
                                        <div class="col-md-3">
                                            <div class="form-group mg-b-0">
                                                <select id="select-dropdown" class="form-control wd-100p select2" data-placeholder="Choose origin" v-model="itemz.id" @change="onChangeNonDocument($event,index)">
                                                    <template v-for="item in item_non_dokumen">
                                                        <option v-bind:value="item.id">{{item.title}}</option>

                                                    </template>
                                                </select>
                                            </div>
                                            <!-- form-group -->
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group mg-b-0">

                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Rp 1.000.000" v-model="itemz.harga" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group mg-b-0">

                                                <div class="input-group">
                                                    <input type="text" class="form-control" placeholder="Qty" v-model="itemz.qty" @change="calculateAdd" />
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">Pallete</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <a href="#" @click="deleteItemNonDOC(index)" class="btn btn-outline-dark btn-icon mg-r-5" style=" border-color: transparent !important; ">
                                                <div>
                                                    <i class="icon ion-trash-a" style=" font-size: 22px; "></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="row pd-5 justify-content-end">
                                <button @click="addItemNonDoc" name="tambah-barang" class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" style="display: flex;">Tambah Packaging</button>
                            </div>
                        </section>

                        <!-- modal -->

                    </div>
                </form>
            </div>
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="col-md-12">
                    <table class="table table-hover mg-b-0" style="width: 100%; margin: 0 auto;">
                        <thead>
                            <tr>

                                <th style="width: 20%; color: #868ba1 !important;">Moda</th>
                                <th style="width: 20%; color: #868ba1 !important;">Layanan</th>
                                <th style="width: 25%; color: #868ba1 !important;">Harga Pengiriman</th>
                                <th style="width: 25%; color: #868ba1 !important;">Harga Layanan Tambahan</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>

                                <td style="width: 20%; color: #343a40 !important">
                                    <template v-if="tipe_pengiriman == 1 ">
                                        Sea
                                    </template>
                                    <template v-if="tipe_pengiriman == 2 ">
                                        Air
                                    </template>
                                    Freight
                                </td>
                                <td style="width: 20%; color: #343a40 !important">Door to&nbsp;Port</td>
                                <td style="width: 25%; color: #343a40 !important">Rp. {{this.rupiah(subtotal)}}</td>
                                <td style="width: 25%; color: #343a40 !important">Rp. {{this.rupiah(subtotal_item)}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <a class="btn btn-primary btn-kirim tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium" href="#" data-toggle="modal" data-target="#modaldemo3">Kirim Sekarang</a>
            </div>
        </div><!-- card -->
        <!-- bd -->
        <!-- card-block -->
        <div class="modal fade" id="modaldemo3">
            <div class="modal-dialog modal-conf-order modal-dialog-centered" role="document">
                <div class="modal-content tx-size-sm">
                    <div class="modal-header pd-x-20">
                        <h6 class="tx-14 mg-b-0 tx-uppercase tx-inverse tx-bold">Konfirmasi Pemesanan</h6><button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                    </div>
                    <div class="modal-body pd-20">
                        <div class="card-body pd-30 pd-md-60">
                            <div class="d-md-flex justify-content-between flex-row">
                                <div class="mg-t-25 mg-md-t-0">
                                    <h4 class="tx-primary">
                                        <template v-if="this.tipe_pengiriman === 1 ">
                                            <i class="icon ion-plane" style="font-size: 22px;"></i>
                                        </template>
                                        <template v-if="this.tipe_pengiriman === 2 ">
                                            <i class="fa fa-ship" style=" font-size: 22px; "></i>
                                        </template>
                                        &nbsp;&nbsp;
                                        <template v-if="tipe_pengiriman == 1 ">
                                            Sea
                                        </template>
                                        <template v-if="tipe_pengiriman == 2 ">
                                            Air
                                        </template>
                                        Freight
                                    </h4>
                                    <h4 class="tx-primary">Door to Port</h4>
                                </div>
                                <h2 class="mg-b-10 tx-uppercase tx-gray-400 tx-mont tx-bold"></h2>
                            </div><!-- d-flex -->
                            <div class="row mg-t-20">
                                <div class="col-md">
                                    <label class="tx-uppercase tx-13 tx-bold mg-b-20">Penerima</label>
                                    <h6 class="tx-primary">{{penerima_nama}}</h6>
                                    <p class="lh-7">{{penerima_alamat}}<br>
                                        Tel No: {{penerima_telepon}}<br>
                                        Email: {{penerima_email}}</p>
                                </div>
                                <div class="col-md">
                                    <label class="tx-uppercase tx-13 tx-bold mg-b-20">Pengirim</label>
                                    <h6 class="tx-primary">{{pengirim_nama}}</h6>
                                    <p class="lh-7">{{pengirim_alamat}}<br>
                                        Tel No: {{pengirim_telepon}}<br>
                                        Email: {{pengirim_email}}</p>
                                </div>
                            </div><!-- d-flex -->
                            <div class="row mg-t-20">
                                <div class="col-md">
                                    <div class="table-responsive mg-t-40">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="wd-40p">Deskripsi Barang</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <template v-for="item in transaksi">
                                                    <tr>
                                                        <td>{{item.deskripsi}}<br>
                                                            {{item.p}}x {{item.p}}x {{item.t}} m<sup>3</sup> - {{item.qty}} kg - Rp {{item.harga}}
                                                        </td>
                                                    </tr>
                                                </template>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="col-md">
                                    <div class="table-responsive mg-t-40 mg-b-20" style="background: #dedede33;">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="wd-40p">Harga Pengiriman</th>
                                                    <th class="tx-center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Door to Port</td>
                                                    <td class="tx-right">{{this.rupiah(subtotal)}}</td>
                                                </tr>
                                                <tr>
                                                    <td class="tx-inverse">Layanan Tambahan</td>
                                                    <td class="tx-right"></td>
                                                </tr>
                                                <template v-for="item in items_non_dokumen">
                                                    <tr>
                                                        <td>{{item.nama}} - {{item.qty}} Qty</td>
                                                        <td class="tx-right">Rp {{item.harga}}</td>
                                                    </tr>
                                                </template>
                                                <template v-for="item in items_dokumen">
                                                    <tr>
                                                        <td>{{item.nama}}</td>
                                                        <td class="tx-right">Rp {{item.harga}}</td>
                                                    </tr>
                                                </template>

                                                <tr>
                                                    <td class="tx-bold tx-inverse">TOTAL HARGA</td>
                                                    <td class="tx-right">
                                                        <h4 class="tx-info tx-bold">{{this.rupiah(subtotal_item + subtotal)}}</h4>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <h6 class="tx-info">Note: Harga belum termasuk biaya tambahan dalam proses verifikasi</h6>
                            <hr class="mg-b-60">
                            <div class="row">
                                <div class="offset-md-2 col-md-4 col-sm-12" style="margin-bottom: 20px">
                                    <a aria-label="Close" class="btn btn-outline-info btn-block" data-dismiss="modal" href="#">Ubah Rincian</a>
                                </div>
                                <div class="col-md-4">
                                    <a class="btn btn-info btn-block" href="#" @click="submitData">Lanjut Ke Pembayaran</a>
                                </div>
                            </div>
                        </div><!-- card-body -->
                    </div>
                </div>
            </div><!-- modal-dialog -->
        </div><!-- modal -->
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
            id_user: this.$store.getters.loadedId,
            kota_asal: null,
            kota_tujuan: null,
            id_via_pengiriman: null,
            id_jenis_pengiriman: null,
            id_tipe_pengiriman: null,
            id_barang_kategori: null,
            id_barang_jenis: null,
            qty_container: null,
            id_asuransi: null,
            pengirim_nama: null,
            pengirim_negara: null,
            pengirim_kodepos: null,
            pengirim_kota: null,
            pengirim_alamat: null,
            pengirim_perusahaan: null,
            pengirim_telepon: null,
            pengirim_email: null,
            pengirim_koleksi_intruksi: null,
            penerima_nama: null,
            penerima_negara: null,
            penerima_kodepos: null,
            penerima_kota: null,
            penerima_alamat: null,
            penerima_perusahaan: null,
            penerima_telepon: null,
            penerima_email: null,
            referensi_customer: null,
            layanan_tambahan: null,
            total_harga: null,
            total_approved: null,
            status: null,
            subtotal: 0,
            subtotal_item: 0,
            package: [],
            category_cargo: 1,
            tipe_pengiriman: 1,
            tipe_delivery: 1,
            tipe_package: 1,
            item_dokumen: [],
            item_non_dokumen: [],
            items_dokumen: [{
                id: '',
                nama: '',
                qty: '',
                harga: ''
            }],
            items_non_dokumen: [{
                id: '',
                nama: '',
                qty: '',
                harga: ''
            }],
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

        onChangeDocument(event, index) {
            var indeks = 0
            for (var i = 0; i < this.item_dokumen.length; i++) {
                if (this.item_dokumen[i].id == event.target.value) {
                    indeks = i
                }
            }

            if (this.item_dokumen[indeks]) {
                this.items_dokumen[index].harga = this.item_dokumen[indeks].harga
                this.items_dokumen[index].nama = this.item_dokumen[indeks].title
                this.items_dokumen[index].qty = 1
            }
            this.calculateAdd()
        },
        onChangeNonDocument(event, index) {
            var indeks = 0
            for (var i = 0; i < this.item_non_dokumen.length; i++) {
                if (this.item_non_dokumen[i].id == event.target.value) {
                    indeks = i
                }
            }
            this.items_non_dokumen[index].harga = this.item_non_dokumen[indeks].harga
            this.items_non_dokumen[index].nama = this.item_non_dokumen[indeks].title

        },
        rupiah(angka) {
            var reverse = angka.toString().split('').reverse().join(''),
                ribuan = reverse.match(/\d{1,3}/g);
            ribuan = ribuan.join('.').split('').reverse().join('');
            return ribuan;
        },
        validate(evt) {
            var theEvent = evt || window.event;

            // Handle paste
            if (theEvent.type === 'paste') {
                key = event.clipboardData.getData('text/plain');
            } else {
                // Handle key press
                var key = theEvent.keyCode || theEvent.which;
                key = String.fromCharCode(key);
            }
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
                theEvent.returnValue = false;
                if (theEvent.preventDefault) theEvent.preventDefault();
            }
        },
        calculateAdd() {
            this.subtotal_item = 0
            for (var i = 0; i < this.items_dokumen.length; i++) {
                this.subtotal_item = this.subtotal_item + this.items_dokumen[i].harga * 1
            }
            for (var i = 0; i < this.items_non_dokumen.length; i++) {
                this.subtotal_item = this.subtotal_item + (this.items_non_dokumen[i].harga * this.items_non_dokumen[i].qty)
            }
            this.subtotal_item = this.subtotal_item
        },
        async calculateTotal() {
            let i = 0
            this.subtotal = 0
            if ($("#kode_kota_tujuan").val() == "" || $("#kode_kota_tujuan").val() == null) {
                this.$toast.show('Choose Destination');
                return;
            } else {
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
                this.subtotal = this.subtotal

            }

        },
        deleteUser: function (index) {
            this.transaksi.splice(index, 1);
            if (index === 0)
                this.addInput()
            this.calculateTotal()
        },
        deleteItemDOC: function (index) {
            this.items_dokumen.splice(index, 1);
            if (index === 0)
                this.addInput()
            this.calculateAdd()
        },
        deleteItemNonDOC: function (index) {
            this.items_non_dokumen.splice(index, 1);
            if (index === 0)
                this.addInput()
            this.calculateAdd()
        },
        addItemDoc: function () {
            this.items_dokumen.push({
                id: '',
                nama: '',
                qty: 1,
                harga: ''
            });
        },
        addItemNonDoc: function () {
            this.items_non_dokumen.push({
                id: '',
                nama: '',
                qty: '',
                harga: ''
            });
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
        },
        async submitData() {
            var bodyFormData = new FormData()
            var deskripsi = []
            var harga = []
            var panjang = []
            var lebar = []
            var tinggi = []
            var berat = []
            var qty_barang = []
            var id_item = []
            var title = []
            var jumlah = []
            var satuan = []
            var harga_satuan = []
            var harga_total = []
            var trans = this.transaksi
            var item_doc = this.items_dokumen
            var item_non_doc = this.items_non_dokumen
            bodyFormData.append('id_user', this.id_user)
            bodyFormData.append('kota_asal', $("#kode_kota_asal").val())
            bodyFormData.append('kota_tujuan', $("#kode_kota_tujuan").val())
            bodyFormData.append('id_via_pengiriman', this.tipe_pengiriman)
            bodyFormData.append('id_jenis_pengiriman', this.tipe_pengiriman)
            bodyFormData.append('id_tipe_pengiriman', 1)
            bodyFormData.append('id_barang_kategori', this.category_cargo)
            bodyFormData.append('id_barang_jenis', this.tipe_package)
            bodyFormData.append('qty_container', 0)
            bodyFormData.append('qty_container', 0)
            bodyFormData.append('pengirim_nama', this.pengirim_nama)
            bodyFormData.append('pengirim_negara', $("#kode_negara_asal").val())
            bodyFormData.append('pengirim_kodepos', this.pengirim_kodepos)
            bodyFormData.append('pengirim_kodepos', this.pengirim_kodepos)
            bodyFormData.append('pengirim_kota', $("#kota_asal_text").val())
            bodyFormData.append('pengirim_alamat', this.pengirim_alamat)
            bodyFormData.append('pengirim_perusahaan', this.pengirim_perusahaan)
            bodyFormData.append('pengirim_telepon', this.pengirim_telepon)
            bodyFormData.append('pengirim_email', this.pengirim_email)
            bodyFormData.append('pengirim_koleksi_intruksi', this.pengirim_koleksi_intruksi)
            bodyFormData.append('penerima_nama', this.penerima_nama)
            bodyFormData.append('penerima_negara', $("#kode_negara_tujuan").val())
            bodyFormData.append('penerima_kodepos', this.penerima_kodepos)
            bodyFormData.append('penerima_kota', $("#kota_tujuan_text").val())
            bodyFormData.append('penerima_alamat', this.penerima_alamat)
            bodyFormData.append('penerima_perusahaan', this.penerima_perusahaan)
            bodyFormData.append('penerima_telepon', this.penerima_telepon)
            bodyFormData.append('penerima_email', this.penerima_email)
            bodyFormData.append('referensi_customer', this.referensi_customer)
            bodyFormData.append('total_harga', this.subtotal + this.subtotal_item)
            Object.keys(this.transaksi).forEach(function (key) {
                bodyFormData.append('deskripsi[]', trans[key].deskripsi)
                bodyFormData.append('harga[]', trans[key].harga)
                bodyFormData.append('panjang[]', trans[key].p)
                bodyFormData.append('lebar[]', trans[key].l)
                bodyFormData.append('tinggi[]', trans[key].t)
                bodyFormData.append('berat[]', trans[key].berat)
                bodyFormData.append('qty_barang[]', trans[key].qty)
                bodyFormData.append('barang_package[]', trans[key].kemasan)
            })
            Object.keys(this.items_dokumen).forEach(function (key) {
                bodyFormData.append('id_item[]', item_doc[key].id)
                bodyFormData.append('title[]', item_doc[key].nama)
                bodyFormData.append('jumlah[]', item_doc[key].qty)
                bodyFormData.append('satuan[]', "-")
                bodyFormData.append('harga_satuan[]', item_doc[key].harga)
                bodyFormData.append('harga_total[]', item_doc[key].harga * item_doc[key].qty)
            })
            Object.keys(this.items_non_dokumen).forEach(function (key) {

                bodyFormData.append('id_item[]', item_non_doc[key].id)
                bodyFormData.append('title[]', item_non_doc[key].nama)
                bodyFormData.append('jumlah[]', item_non_doc[key].qty)
                bodyFormData.append('satuan[]', "-")
                bodyFormData.append('harga_satuan[]', item_non_doc[key].harga)
                bodyFormData.append('harga_total[]', item_non_doc[key].harga * item_doc[key].qty)
            })

            try {
                await this.$axios.$post(process.env.baseUrl + 'insertorder', bodyFormData).then((response) => {

                })
                this.$toast.show('Success .....')
                this.$router.push('/dashboard')
            } catch (e) {
                this.$toast.show('Failed .....')
            }

        }
    },
    mounted() {
        this.$axios.$post(process.env.baseUrl + 'listbarangpackage').then((response) => {
            if (response[0].data) {
                this.package = response[0].data
            }
        });
        this.$axios.$get(process.env.baseUrl + 'listitem?kategori=1').then((response) => {
            if (response[0].data.data) {
                this.item_dokumen = response[0].data.data
            }

        });
        this.$axios.$get(process.env.baseUrl + 'listitem?kategori=2').then((response) => {
            if (response[0].data.data) {
                this.item_non_dokumen = response[0].data.data
            }

        });
        $("#kode_barang").select2({
            placeholder: "Jenis Item",
            initSelection: function (element, callback) {
                callback({
                    id: "",
                    text: ""
                });
            },
            minimumInputLength: 1,
            ajax: {
                url: process.env.baseUrl + "barangjenisselect2",
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

            $('#barang_text').val(e.added.text);

        });
        $("#kode_negara_asal").select2({
            placeholder: " Negara Asal",
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
            $('#negara_asal_text').val(e.added.text);

        });
        $("#kode_negara_tujuan").select2({
            placeholder: " Negara Tujuan",
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
            $('#negara_tujuan_text').val(e.added.text);

        });
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
        });
    },

}
</script>

<style>
div#s2id_kode_negara_asal,
div#s2id_kode_negara_tujuan {
    width: 100%;
}

.row-input {
    margin-top: 15px;
}
</style>
