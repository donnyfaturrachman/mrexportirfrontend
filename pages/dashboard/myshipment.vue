<template>
  <div>
    <Logo/>
    <Sidebar/>
    <Header/>
      <div class="br-mainpanel">

      <div class="br-pagebody">
            <div class="card bd-0 shadow-base pd-10    mg-t-20">
                    <div class="col-md-3" style="/* position: absolute; *//* right: 0; */">
                        <a href="" class="btn btn-outline-primary btn-block">Save to CSV</a>

                    </div>
            </div>

                <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                    <div class="table-wrapper">
                        <h6 class="br-section-label" style="margin-top: 10px !important;">Daftar Kiriman</h6>
                        <p class="br-section-text">Lorem Ipsum</p>

                        <table id="datatable1" class="table display responsive nowrap">
                          <thead>
                              <tr>
                                  <th class="wd-15p">Tanggal Order</th>
                                  <th class="wd-20p">Nomor Resi</th>
                                  <th class="wd-30p">Penerima</th>
                                  <th class="wd-30p">Status</th>
                                  <th class="wd-5p">&nbsp;</th>
                              </tr>
                          </thead>
                          <tbody>
                            <tr href="#">
                                  <td>12 Jun 2020</td>
                                  <td>ME1234567</td>
                                  <td>Jhon Doe</td>
                                  <td>
                                      <div class="icon-tracking">
                                          <span class="status-tracking tr-merah"> <i class="fa fa-file-import"></i></span>
                                      </div>
                                      Verifikasi Dokumen
                                  </td>

                                  <td>
                                      <div class="dropdown">
                                          <a href="#" class="btn btn-outline-primary btn-icon mg-r-5" data-toggle="dropdown">
                                              <div><i class="icon ion-more"></i></div>
                                          </a>
                                          <div class="dropdown-menu dropdown-menu-tracking pd-10 wd-150">
                                              <nav class="nav nav-style-2 flex-column">
                                                  <a href="" class="nav-link"><i class="icon ion-ios-person"></i> Repeat</a> <a href="" class="nav-link"><i class="icon ion-ios-gear"></i> Print DMS</a>
                                                  <a href="" class="nav-link"><i class="icon ion-ios-download"></i> Support</a>
                                              </nav>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
                              <tr href="detail-shipment.html">
                                  <td>11 Jun 2020</td>
                                  <td>ME1234557</td>
                                  <td>Jhon Doew</td>
                                  <td>
                                      <div class="icon-tracking">
                                          <span class="status-tracking tr-hijau"> <i class="fa fa-plane-departure"></i></span>
                                      </div>
                                      Pengiriman
                                  </td>

                                  <td>
                                      <div class="dropdown">
                                          <a href="#" class="btn btn-outline-primary btn-icon mg-r-5" data-toggle="dropdown">
                                              <div><i class="icon ion-more"></i></div>
                                          </a>
                                          <div class="dropdown-menu dropdown-menu-tracking pd-10 wd-150">
                                              <nav class="nav nav-style-2 flex-column">
                                                  <a href="" class="nav-link"><i class="icon ion-ios-person"></i> Repeat</a> <a href="" class="nav-link"><i class="icon ion-ios-gear"></i> Print DMS</a>
                                                  <a href="" class="nav-link"><i class="icon ion-ios-download"></i> Support</a>
                                              </nav>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
                              <tr href="#">
                                <td>12 Jun 2020</td>
                                <td>ME1234567</td>
                                <td>Jhon Doe</td>
                                <td>
                                    <div class="icon-tracking">
                                        <span class="status-tracking tr-kuning"> <i class="fa fa-people-carry"></i></span>
                                    </div>
                                    Siap di pick-up
                                </td>

                                <td>
                                    <div class="dropdown">
                                        <a href="#" class="btn btn-outline-primary btn-icon mg-r-5" data-toggle="dropdown">
                                            <div><i class="icon ion-more"></i></div>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-tracking pd-10 wd-150">
                                            <nav class="nav nav-style-2 flex-column">
                                                <a href="" class="nav-link"><i class="icon ion-ios-person"></i> Repeat</a> <a href="" class="nav-link"><i class="icon ion-ios-gear"></i> Print DMS</a>
                                                <a href="" class="nav-link"><i class="icon ion-ios-download"></i> Support</a>
                                            </nav>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr href="#">
                              <td>12 Jun 2020</td>
                              <td>ME1234567</td>
                              <td>Jhon Doe</td>
                              <td>
                                  <div class="icon-tracking">
                                      <span class="status-tracking tr-merah"> <i class="fa fa-shopping-cart"></i></span>
                                  </div>
                                  Menunggu Pembayaran
                              </td>

                              <td>
                                  <div class="dropdown">
                                      <a href="#" class="btn btn-outline-primary btn-icon mg-r-5" data-toggle="dropdown">
                                          <div><i class="icon ion-more"></i></div>
                                      </a>
                                      <div class="dropdown-menu dropdown-menu-tracking pd-10 wd-150">
                                          <nav class="nav nav-style-2 flex-column">
                                              <a href="" class="nav-link"><i class="icon ion-ios-person"></i> Repeat</a> <a href="" class="nav-link"><i class="icon ion-ios-gear"></i> Print DMS</a>
                                              <a href="" class="nav-link"><i class="icon ion-ios-download"></i> Support</a>
                                          </nav>
                                      </div>
                                  </div>
                              </td>
                          </tr>
                          <tr href="#">
                            <td>12 Jun 2020</td>
                            <td>ME1234567</td>
                            <td>Jhon Doe</td>
                            <td>
                                <div class="icon-tracking">
                                    <span class="status-tracking tr-hijau"> <i class="fa fa-calendar-check"></i></span>
                                </div>
                                Terkirim
                            </td>

                            <td>
                                <div class="dropdown">
                                    <a href="#" class="btn btn-outline-primary btn-icon mg-r-5" data-toggle="dropdown">
                                        <div><i class="icon ion-more"></i></div>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-tracking pd-10 wd-150">
                                        <nav class="nav nav-style-2 flex-column">
                                            <a href="" class="nav-link"><i class="icon ion-ios-person"></i> Repeat</a> <a href="" class="nav-link"><i class="icon ion-ios-gear"></i> Print DMS</a>
                                            <a href="" class="nav-link"><i class="icon ion-ios-download"></i> Support</a>
                                        </nav>
                                    </div>
                                </div>
                            </td>
                        </tr>
                          </tbody>
                      </table>

                          </div><!-- table-wrapper -->

                        </div>
      </div><!-- br-pagebody -->
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
