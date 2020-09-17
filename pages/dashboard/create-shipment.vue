<template>
  <div>
    <Logo/>
    <Sidebar/>
    <Header/>
      <div class="br-mainpanel">
       	<div class="br-pagebody mg-t-50">
          <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
            <div class="row pd-5">
              <div class="col-md-3">
                <h5 class="tx-20 tx-primary tx-uppercase tx-spacing-1 tx-semibold">Pengirim</h5><a class="btn btn-primary btn-block mg-t-25" href="">Pilih dari Daftar Alamat</a>
              </div>
              <div class="col-md-6 offset-md-3">
                <h6 class="tx-primary">Mister Eksportir</h6>
                <p class="lh-7">Jl. Tugu Raya No.4<br>
                Tel No: 0822 2222 2222<br>
                Email: me@mistereksportir.com</p>
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
                    <label class="d-block">Perusahaan</label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Nama Kontak</label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">No Hp</label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Email</label> <input class="form-control" placeholder="" type="text">
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
                    <label class="d-block">Negara/Wilayah</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                      <option value="sfo">
                        Indonesia
                      </option>
                    </select>
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Kode Pos <span class="tx-danger">*</span></label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Kota</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                      <option value="sfo">
                        Jakarta
                      </option>
                      <option value="sfo">
                        Bogor
                      </option>
                    </select>
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Alamat</label>
                    <textarea class="form-control" placeholder="" rows="5"></textarea>
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
                <h5 class="tx-20 tx-primary tx-uppercase tx-spacing-1 tx-semibold">Penerima</h5><a class="btn btn-primary btn-block mg-t-25" href="">Pilih dari Daftar Alamat</a>
              </div>
              <div class="col-md-6 offset-md-3">
                <h6 class="tx-primary">Mister Eksportir</h6>
                <p class="lh-7">Jl. Tugu Raya No.4<br>
                Tel No: 0822 2222 2222<br>
                Email: me@mistereksportir.com</p>
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
                    <label class="d-block">Perusahaan</label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Nama Kontak</label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">No Hp</label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Email</label> <input class="form-control" placeholder="" type="text">
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
                    <label class="d-block">Negara/Wilayah</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                      <option value="sfo">
                        Indonesia
                      </option>
                    </select>
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Kode Pos <span class="tx-danger">*</span></label> <input class="form-control" placeholder="" type="text">
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Kota</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                      <option value="sfo">
                        Jakarta
                      </option>
                      <option value="sfo">
                        Bogor
                      </option>
                    </select>
                  </div>
                  <div class="pd-5">
                    <label class="d-block">Alamat</label>
                    <textarea class="form-control" placeholder="" rows="5"></textarea>
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
              <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Rincian Pengiriman</h5>
              <div class="col-md-12 pd-0">
                <hr class="hr-shipment" style=" margin-top: 1rem !important;">
              </div>
            </div><!-- card-header -->
            <div class="tabs">
              <input checked id="tab1" name="tab-control" type="radio"> <input id="tab2" name="tab-control" type="radio"> <input id="tab3" name="tab-control" type="radio"> <input id="tab4" name="tab-control" type="radio">
              <ul>
                <li title="General Cargp"><label for="tab1" role="button"><svg viewbox="0 0 24 24">
                <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10H20C20,13.32 17.32,16 14,16A6,6 0 0,1 8,10A6,6 0 0,1 14,4C14.43,4 14.86,4.05 15.27,4.14L16.88,2.54C15.96,2.18 15,2 14,2M20.59,3.58L14,10.17L11.62,7.79L10.21,9.21L14,13L22,5M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"></path></svg><br>
                <span>General Cargo</span></label></li>
                <li title="Produk Pertanian & Perikanan"><label for="tab2" role="button"><svg viewbox="0 0 24 24">
                <path d="M2,10.96C1.5,10.68 1.35,10.07 1.63,9.59L3.13,7C3.24,6.8 3.41,6.66 3.6,6.58L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.66,6.72 20.82,6.88 20.91,7.08L22.36,9.6C22.64,10.08 22.47,10.69 22,10.96L21,11.54V16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V10.96C2.7,11.13 2.32,11.14 2,10.96M12,4.15V4.15L12,10.85V10.85L17.96,7.5L12,4.15M5,15.91L11,19.29V12.58L5,9.21V15.91M19,15.91V12.69L14,15.59C13.67,15.77 13.3,15.76 13,15.6V19.29L19,15.91M13.85,13.36L20.13,9.73L19.55,8.72L13.27,12.35L13.85,13.36Z"></path></svg><br>
                <span>Produk Pertanian</span></label></li>
                <li title="Hewan Hidup"><label for="tab3" role="button"><svg viewbox="0 0 24 24">
                <path d="M3,4A2,2 0 0,0 1,6V17H3A3,3 0 0,0 6,20A3,3 0 0,0 9,17H15A3,3 0 0,0 18,20A3,3 0 0,0 21,17H23V12L20,8H17V4M10,6L14,10L10,14V11H4V9H10M17,9.5H19.5L21.47,12H17M6,15.5A1.5,1.5 0 0,1 7.5,17A1.5,1.5 0 0,1 6,18.5A1.5,1.5 0 0,1 4.5,17A1.5,1.5 0 0,1 6,15.5M18,15.5A1.5,1.5 0 0,1 19.5,17A1.5,1.5 0 0,1 18,18.5A1.5,1.5 0 0,1 16.5,17A1.5,1.5 0 0,1 18,15.5Z"></path></svg><br>
                <span>Hewan Hidup</span></label></li>
                <li title="Barang Mudah Terbakar"><label for="tab4" role="button"><svg viewbox="0 0 24 24">
                <path d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"></path></svg><br>
                <span>Barang Berbahaya</span></label></li>
              </ul>
              <div class="slider">
                <div class="indicator"></div>
              </div>
              <div class="content">
                <section>
                  <div class="card-block pd-0">
                    <div class="pd-5">
                      <div class="row justify-content-center align-items-center">
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Via</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Udara
                              </option>
                              <option value="lax">
                                Laut
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Tipe</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Paket
                              </option>
                              <option value="lax">
                                Dokumen
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-6">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Jenis</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Elektronik & Mesin (tanpa baterai)
                              </option>
                              <option value="lax">
                                Barang Konsumsi (makanan, minuman, bahan masak, dll)
                              </option>
                              <option value="lax">
                                Kendaraan & Spareparts
                              </option>
                              <option value="lax">
                                Kain & Pakaian
                              </option>
                              <option value="lax">
                                Peralatan Rumah
                              </option>
                              <option value="lax">
                                Obat & Kosmetik
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div>
                      </div>
                    </div>
                    <div class="pd-5 mg-t-10">
                      <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Rincian Barang</h5>
                    </div>
                  </div><!-- card-header -->
                  <div class="pd-5">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-lg-1">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Qty</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-5 col-lg-3">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Deskripsi</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Kemasan</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                            <option value="sfo">
                              Box
                            </option>
                            <option value="lax">
                              Kardus
                            </option>
                          </select>
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Harga</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Rp</span>
                            </div><input class="form-control" type="text">
                          </div>
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Dimensi</label>
                          <div class="input-group">
                            <input class="form-control" placeholder="P" type="text"><input class="form-control" placeholder="L" type="text"><input class="form-control" placeholder="T" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">cm</span>
                            </div>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 --><!-- col-2 -->
                      <!-- col-2 -->
                      <!-- col-2 -->
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Berat</label>
                          <div class="input-group">
                            <input class="form-control" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Kg</span>
                            </div><a class="btn btn-outline-dark btn-icon mg-r-5" href="#" style=" border-color: transparent !important;">
                            <div>
                              <i class="icon ion-trash-a" style=" font-size: 22px;"></i>
                            </div></a>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 -->
                    </div><!-- row -->
                  </div>
                  <div class="row pd-5 justify-content-end">
                    <button class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" name="tambah-barang" style="display: flex;">Tambah Barang</button>
                  </div>
                </section>
                <section>
                  <div class="card-block pd-0">
                    <div class="pd-5">
                      <div class="row justify-content-center align-items-center">
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Via</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Udara
                              </option>
                              <option value="lax">
                                Laut
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Tipe</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Paket
                              </option>
                              <option value="lax">
                                Dokumen
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-6">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Jenis</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Buah & Sayuran
                              </option>
                              <option value="lax">
                                Bibit & tanaman
                              </option>
                              <option value="lax">
                                Ikan
                              </option>
                              <option value="lax">
                                Kopi
                              </option>
                              <option value="lax">
                                Kayu & Furnitur
                              </option>
                              <option value="lax">
                                Produk lainnya
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div>
                      </div>
                    </div>
                    <div class="pd-5 mg-t-10">
                      <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Rincian Barang</h5>
                    </div>
                  </div><!-- card-header -->
                  <div class="pd-5">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-lg-1">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Qty</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-5 col-lg-3">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Deskripsi</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Kemasan</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                            <option value="sfo">
                              Box
                            </option>
                            <option value="lax">
                              Kardus
                            </option>
                          </select>
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Harga</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Rp</span>
                            </div><input class="form-control" type="text">
                          </div>
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Dimensi</label>
                          <div class="input-group">
                            <input class="form-control" placeholder="P" type="text"><input class="form-control" placeholder="L" type="text"><input class="form-control" placeholder="T" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">cm</span>
                            </div>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 -->
                      <!-- col-2 -->
                      <!-- col-2 -->
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Berat</label>
                          <div class="input-group">
                            <input class="form-control" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Kg</span>
                            </div><a class="btn btn-outline-dark btn-icon mg-r-5" href="#" style=" border-color: transparent !important;">
                            <div>
                              <i class="icon ion-trash-a" style=" font-size: 22px;"></i>
                            </div></a>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 -->
                    </div><!-- row -->
                  </div>
                  <div class="row pd-5 justify-content-end">
                    <button class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" name="tambah-barang" style="display: flex;">Tambah Barang</button>
                  </div>
                </section>
                <section>
                  <div class="card-block pd-0">
                    <div class="pd-5">
                      <div class="row justify-content-center align-items-center">
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Via</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Udara
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Tipe</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Paket
                              </option>
                              <option value="lax">
                                Dokumen
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-6">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Jenis</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Peliharaan (Kucing, Anjing, Kelinci, Tupai, dll)
                              </option>
                              <option value="lax">
                                Serangga
                              </option>
                              <option value="lax">
                                Reptil
                              </option>
                              <option value="lax">
                                Unggas
                              </option>
                              <option value="lax">
                                Hewan Besar (Kuda, kambing, sapi, dll)
                              </option>
                              <option value="lax">
                                Hewan Lainnya
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div>
                      </div>
                    </div>
                    <div class="pd-5 mg-t-10">
                      <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Rincian Barang</h5>
                    </div>
                  </div><!-- card-header -->
                  <div class="pd-5">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-lg-1">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Qty</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-5 col-lg-3">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Deskripsi</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Kemasan</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                            <option value="sfo">
                              Box
                            </option>
                            <option value="lax">
                              Kardus
                            </option>
                          </select>
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Harga</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Rp</span>
                            </div><input class="form-control" type="text">
                          </div>
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Dimensi</label>
                          <div class="input-group">
                            <input class="form-control" placeholder="P" type="text"><input class="form-control" placeholder="L" type="text"><input class="form-control" placeholder="T" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">cm</span>
                            </div>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 --><!-- col-2 -->
                      <!-- col-2 -->
                      <!-- col-2 -->
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Berat</label>
                          <div class="input-group">
                            <input class="form-control" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Kg</span>
                            </div><a class="btn btn-outline-dark btn-icon mg-r-5" href="#" style=" border-color: transparent !important;">
                            <div>
                              <i class="icon ion-trash-a" style=" font-size: 22px;"></i>
                            </div></a>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 -->
                    </div><!-- row -->
                  </div>
                  <div class="row pd-5 justify-content-end">
                    <button class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" name="tambah-barang" style="display: flex;">Tambah Barang</button>
                  </div>
                </section>
                <section>
                  <div class="card-block pd-0">
                    <div class="pd-5">
                      <div class="row justify-content-center align-items-center">
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Via</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Udara
                              </option>
                              <option value="lax">
                                Laut
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-3">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Tipe</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Paket
                              </option>
                              <option value="lax">
                                Dokumen
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div><!-- col-3 -->
                        <div class="col-md-6">
                          <div class="form-group mg-b-0">
                            <label class="d-block">Jenis</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                              <option value="sfo">
                                Bahan Kimia / Cemichal (Cat, Parfum, liquid vape, dll)
                              </option>
                              <option value="lax">
                                Arang / Charcoal
                              </option>
                              <option value="lax">
                                Barang mengandung baterai (Handphone, laptop, vape eletric, dll)
                              </option>
                              <option value="lax">
                                Akumulator (ACCU) / AKI
                              </option>
                            </select>
                          </div><!-- form-group -->
                        </div>
                      </div>
                    </div>
                    <div class="pd-5 mg-t-10">
                      <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Rincian Barang</h5>
                    </div>
                  </div><!-- card-header -->
                  <div class="pd-5">
                    <div class="row justify-content-center align-items-center">
                      <div class="col-lg-1">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Qty</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-5 col-lg-3">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Deskripsi</label> <input class="form-control tx-14" placeholder="..." type="text">
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Kemasan</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                            <option value="sfo">
                              Box
                            </option>
                            <option value="lax">
                              Kardus
                            </option>
                          </select>
                        </div><!-- form-group -->
                      </div><!-- col-3 -->
                      <div class="col-md-6 col-lg-2 mg-t-10 mg-md-t-0">
                        <div class="form-group mg-b-0">
                          <label class="d-block">Harga</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Rp</span>
                            </div><input class="form-control" type="text">
                          </div>
                        </div><!-- form-group -->
                      </div>
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Dimensi</label>
                          <div class="input-group">
                            <input class="form-control" placeholder="P" type="text"><input class="form-control" placeholder="L" type="text"><input class="form-control" placeholder="T" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">cm</span>
                            </div>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 -->
                      <div class="col-md-4 col-lg-2 mg-t-10 mg-lg-t-0">
                        <div class="form-group mg-b-0">
                          <label>Berat</label>
                          <div class="input-group">
                            <input class="form-control" type="text">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Kg</span>
                            </div><a class="btn btn-outline-dark btn-icon mg-r-5" href="#" style=" border-color: transparent !important;">
                            <div>
                              <i class="icon ion-trash-a" style=" font-size: 22px;"></i>
                            </div></a>
                          </div>
                        </div><!-- form-group -->
                      </div><!-- col-2 -->
                    </div><!-- row -->
                  </div>
                  <div class="row pd-5 justify-content-end">
                    <button class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" name="tambah-barang" style="display: flex;">Tambah Barang</button>
                  </div>
                </section>
              </div>
            </div>
            <div class="pd-5 mg-t-10">
              <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Layanan Tambahan</h5>
            </div>
            <div class="row pd-5">
              <div class="col-md-6">
                <div class="form-group mg-b-0">
                  <label class="d-block">Dokumen</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                    <option value="sfo">
                      US FDA
                    </option>
                    <option value="lax">
                      Laporan Surveyor
                    </option>
                    <option value="lax">
                      Fumigasi
                    </option>
                  </select>
                </div><!-- form-group -->
              </div>
              <div class="col-md-6">
                <div class="form-group mg-b-0">
                  <label class="d-block">Harga</label>
                  <div class="input-group">
                    <input class="form-control" placeholder="Rp 1.000.000" type="text">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Dokumen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pd-5 justify-content-end">
              <button class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" name="tambah-barang" style="display: flex;">Tambah Barang</button>
            </div>
            <div class="row pd-5">
              <div class="col-md-6">
                <div class="form-group mg-b-0">
                  <label class="d-block">Packaging</label> <select class="form-control wd-100p select2" data-placeholder="Choose origin" id="select-dropdown">
                    <option value="sfo">
                      Wood Pallete
                    </option>
                    <option value="lax">
                      Plastic Pallete
                    </option>
                  </select>
                </div><!-- form-group -->
              </div>
              <div class="col-md-3">
                <div class="form-group mg-b-0">
                  <label class="d-block">Harga Satuan</label>
                  <div class="input-group">
                    <input class="form-control" placeholder="Rp 1.000.000" type="text">
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="form-group mg-b-0">
                  <label class="d-block">Qty</label>
                  <div class="input-group">
                    <input class="form-control" placeholder="Qty" type="text">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Pallete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row pd-5 justify-content-end">
              <button class="btn btn-outline-primary tx-11 tx-spacing-1 tx-uppercase tx-semibold tx-mont pd-y-12 pd-x-30 mg-t-30" name="tambah-barang" style="display: flex;">Tambah Barang</button>
            </div>
          </div>
          <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
            <div class="col-md-12">
              <table class="table table-hover mg-b-0" style="width: 100%; margin: 0 auto;">
                <thead>
                  <tr>
                    <th style="width: 10%; color: #868ba1 !important;"></th>
                    <th style="width: 20%; color: #868ba1 !important;">Moda</th>
                    <th style="width: 20%; color: #868ba1 !important;">Layanan</th>
                    <th style="width: 25%; color: #868ba1 !important;">Harga Pengiriman</th>
                    <th style="width: 25%; color: #868ba1 !important;">Harga Layanan Tambahan</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" style="width: 10%; color: #343a40 !important"><label class="rdiobox"><input name="rdio" type="radio"> <span></span></label></th>
                    <td style="width: 20%; color: #343a40 !important">Air Freight</td>
                    <td style="width: 20%; color: #343a40 !important">Door to Door</td>
                    <td style="width: 25%; color: #343a40 !important">Rp.&nbsp;2.000.000</td>
                    <td style="width: 25%; color: #343a40 !important">Rp.&nbsp;2.000.000</td>
                  </tr>
                  <tr>
                    <th scope="row" style="width: 10%; color: #343a40 !important"><label class="rdiobox"><input name="rdio" type="radio"> <span></span></label></th>
                    <td style="width: 20%; color: #343a40 !important">Air Freight</td>
                    <td style="width: 20%; color: #343a40 !important">Door to&nbsp;Port</td>
                    <td style="width: 25%; color: #343a40 !important">Rp. 1.000.000</td>
                    <td style="width: 25%; color: #343a40 !important">Rp. 1.000.000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
            <a class="btn btn-primary btn-kirim tx-11 tx-uppercase pd-y-12 pd-x-25 tx-mont tx-medium" data-target="#modaldemo3" data-toggle="modal" href="">Kirim Sekarang</a>
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
                        <h4 class="tx-primary"><i class="icon ion-plane" style=" font-size: 22px;"></i>&nbsp;&nbsp;Air Freight</h4>
                        <h4 class="tx-primary">Door to Door</h4>
                      </div>
                      <h2 class="mg-b-10 tx-uppercase tx-gray-400 tx-mont tx-bold">#ORDER123</h2>
                    </div><!-- d-flex -->
                    <div class="row mg-t-20">
                      <div class="col-md">
                        <label class="tx-uppercase tx-13 tx-bold mg-b-20">Penerima</label>
                        <h6 class="tx-primary">Mister Eksportir</h6>
                        <p class="lh-7">Jl. Tugu Raya No.4<br>
                        Tel No: 0822 2222 2222<br>
                        Email: me@mistereksportir.com</p>
                      </div>
                      <div class="col-md">
                        <label class="tx-uppercase tx-13 tx-bold mg-b-20">Pengirim</label>
                        <h6 class="tx-primary">Mister Eksportir</h6>
                        <p class="lh-7">Jl. Tugu Raya No.4<br>
                        Tel No: 0822 2222 2222<br>
                        Email: me@mistereksportir.com</p>
                      </div>
                    </div><!-- d-flex -->
                    <!-- <div class="row mg-t-20">
                                              <div class="col-md">
                                                <label class="tx-uppercase tx-13 tx-bold mg-b-20">Billed To</label>
                                                <h6 class="tx-inverse">Juan Dela Cruz</h6>
                                                <p class="lh-7">4033 Patterson Road, Staten Island, NY 10301 <br>
                                                Tel No: 324 445-4544<br>
                                                Email: youremail@companyname.com</p>
                                              </div>
                                              <div class="col-md">
                                                <label class="tx-uppercase tx-13 tx-bold mg-b-20">Invoice Information</label>
                                                <p class="d-flex justify-content-between mg-b-5">
                                                  <span>Invoice No</span>
                                                  <span>GHT-673-00</span>
                                                </p>
                                                <p class="d-flex justify-content-between mg-b-5">
                                                  <span>Project ID</span>
                                                  <span>32334300</span>
                                                </p>
                                                <p class="d-flex justify-content-between mg-b-5">
                                                  <span>Issue Date:</span>
                                                  <span>November 21, 2017</span>
                                                </p>
                                                <p class="d-flex justify-content-between mg-b-5">
                                                  <span>Due Date:</span>
                                                  <span>November 30, 2017</span>
                                                </p>
                                              </div>
                                            </div> -->
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
                              <tr>
                                <td>Deskripsi 1<br>
                                10x10x10 m<sup>3</sup> - 10 kg - Rp 10.000</td>
                              </tr>
                              <tr>
                                <td>Deskripsi 1<br>
                                10x10x10 m<sup>3</sup> - 10 kg - Rp 10.000</td>
                              </tr>
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
                                <td>Door to Door</td>
                                <td class="tx-right">Rp 300.000</td>
                              </tr>
                              <tr>
                                <td class="tx-inverse">Layanan Tambahan</td>
                                <td class="tx-right"></td>
                              </tr>
                              <tr>
                                <td>Wood Pallete - 5 Qty</td>
                                <td class="tx-right">Rp 300.000</td>
                              </tr>
                              <tr>
                                <td>US FDA</td>
                                <td class="tx-right">Rp 300.000</td>
                              </tr>
                              <tr>
                                <td>Fumigasi</td>
                                <td class="tx-right">Rp 200.000</td>
                              </tr>
                              <tr>
                                <td></td>
                              </tr>
                              <tr>
                                <td class="tx-bold tx-inverse">TOTAL HARGA</td>
                                <td class="tx-right">
                                  <h4 class="tx-info tx-bold">Rp 2.000.000</h4>
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
                        <a aria-label="Close" class="btn btn-outline-info btn-block" data-dismiss="modal" href="">Ubah Rincian</a>
                      </div>
                      <div class="col-md-4">
                        <a class="btn btn-info btn-block" href="">Lanjut Ke Pembayaran</a>
                      </div>
                    </div>
                  </div><!-- card-body -->
                </div>
              </div>
            </div><!-- modal-dialog -->
          </div><!-- modal -->
        <Footer/>
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
  }
</script>
