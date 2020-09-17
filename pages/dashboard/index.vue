<template>
  <div>
    <Logo/>
    <Sidebar/>
    <Header/>
      <div class="br-mainpanel">
           <div class="br-pagebody">
            <div class="alert alert-warning" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
                <div class="d-flex align-items-center justify-content-start">
                    <i class="icon ion-alert-circled alert-icon tx-32 mg-t-5 mg-xs-t-0"></i>
                    <span><strong>Warning</strong> We are monitoring the impact of the COVID-19 outbreak. </span>
                </div>
                <!-- d-flex -->
            </div>
            <div id="carousel12" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators indicators-bottom-right">
                    <li data-target="#carousel12" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel12" data-slide-to="1"></li>
                    <li data-target="#carousel12" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <div class="carousel-item active">
                        <div class="bg-primary ht-150 d-flex align-items-center">
                            <img class="d-block img-fluid2" src="/dashboard/img/img15.jpg" alt="First slide">
                            <div class="tx-white mg-lt-20">
                                <p class="tx-uppercase tx-11 tx-spacing-2">Recent Article</p>
                                <h5 class="lh-5 mg-b-20">20 Best Travel Tips After 5 Years Of Traveling The World</h5>
                                <nav class="nav flex-row tx-13">
                                    <a href="" class="tx-white-8 hover-white pd-l-0 pd-r-5">Edit</a>
                                    <a href="" class="tx-white-8 hover-white pd-x-5">Unpublish</a>
                                </nav>
                            </div>
                        </div>
                        <!-- d-flex -->
                    </div>
                    <!-- carousel-item -->
                    <div class="carousel-item">
                        <div class="bg-danger ht-150 d-flex align-items-center">
                            <img class="d-block img-fluid2" src="/dashboard/img/img13.jpg" alt="First slide">
                            <div class="tx-white mg-lt-20">
                                <p class="tx-uppercase tx-11 tx-spacing-2">Recent Article</p>
                                <h5 class="lh-5 mg-b-20">20 Best Travel Tips After 5 Years Of Traveling The World</h5>
                                <nav class="nav flex-row tx-13">
                                    <a href="" class="tx-white-8 hover-white pd-l-0 pd-r-5">Edit</a>
                                    <a href="" class="tx-white-8 hover-white pd-x-5">Unpublish</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="bg-success ht-150 d-flex align-items-center">
                            <img class="d-block img-fluid2" src="/dashboard/img/img14.jpg" alt="First slide">
                            <div class="tx-white mg-lt-20">
                                <p class="tx-uppercase tx-11 tx-spacing-2">Recent Article</p>
                                <h5 class="lh-5 mg-b-20">20 Best Travel Tips After 5 Years Of Traveling The World</h5>
                                <nav class="nav flex-row tx-13">
                                    <a href="" class="tx-white-8 hover-white pd-l-0 pd-r-5">Edit</a>
                                    <a href="" class="tx-white-8 hover-white pd-x-5">Unpublish</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- carousel-inner -->
            </div>
            <!-- carousel -->
            <div class="card bd-0 shadow-base pd-25 pd-xs-40 mg-t-20">
                <div class="card-header bg-transparent pd-0 bd-b-0">
                    <h5 class="tx-14 tx-uppercase tx-spacing-1 tx-semibold tx-inverse">Kirim Sekarang</h5>
                    <p class="tx-14 mg-b-20 mg-xs-b-30">Lorem ipsum.</p>
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
            <div class="row row-sm mg-t-20">
                <div class="col-lg-6">
                    <div class="widget-2">
                        <div class="card shadow-base overflow-hidden">
                            <div class="card-header">
                                <h6 class="card-title">Profile Statistics</h6>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <a href="#" class="btn active">Today</a>
                                    <a href="#" class="btn">This Week</a>
                                    <a href="#" class="btn">This Month</a>
                                </div>
                            </div>
                            <!-- card-header -->
                            <div class="card-body pd-0 bd-color-gray-lighter">
                                <div class="row no-gutters tx-center">
                                    <div class="col-12 col-sm-4 pd-y-20 tx-left">
                                        <p class="pd-l-20 tx-12 lh-8 mg-b-0">Note: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula...</p>
                                    </div>
                                    <!-- col-4 -->
                                    <div class="col-6 col-sm-2 pd-y-20">
                                        <h5 class="tx-inverse tx-lato tx-bold mg-b-5">1,343</h5>
                                        <p class="tx-12 mg-b-0">Views</p>
                                    </div>
                                    <!-- col-2 -->
                                    <div class="col-6 col-sm-2 pd-y-20 bd-l bd-color-gray-lighter">
                                        <h5 class="tx-inverse tx-lato tx-bold mg-b-5">102</h5>
                                        <p class="tx-12 mg-b-0">Likes</p>
                                    </div>
                                    <!-- col-2 -->
                                    <div class="col-6 col-sm-2 pd-y-20 bd-l bd-color-gray-lighter">
                                        <h5 class="tx-inverse tx-lato tx-bold mg-b-5">343</h5>
                                        <p class="tx-12 mg-b-0">Comments</p>
                                    </div>
                                    <!-- col-2 -->
                                    <div class="col-6 col-sm-2 pd-y-20 bd-l bd-color-gray-lighter">
                                        <h5 class="tx-inverse tx-lato tx-bold mg-b-5">960</h5>
                                        <p class="tx-12 mg-b-0">Shares</p>
                                    </div>
                                    <!-- col-2 -->
                                </div>
                                <!-- row -->
                            </div>
                            <!-- card-body -->
                            <div class="card-body pd-0">
                                <div id="rickshaw1" class="wd-100p ht-150 rounded-bottom"></div>
                            </div>
                            <!-- card-body -->
                        </div>
                        <!-- card -->
                    </div>
                    <!-- widget-2 -->
                </div>
                <!-- col-6 -->
                <div class="col-lg-6 mg-t-30 mg-lg-t-0">
                    <div class="card shadow-base card-body pd-25 bd-0" style="height: 312px;">
                        <div class="row">
                            <div class="col-sm-6">
                                <h6 class="card-title tx-uppercase tx-12 tx-inverse">Statistics Summary</h6>
                                <p class="display-4 tx-medium tx-inverse mg-b-5 tx-lato">45%</p>
                                <div class="progress mg-b-10">
                                    <div class="progress-bar bg-info progress-bar-xs wd-45p" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <!-- progress -->
                                <p class="tx-12">Nulla consequat massa quis enim. Donec pede justo, fringilla vel...</p>
                                <p class="tx-11 lh-3 mg-b-0">You can also use other progress variant found in <a href="progress.html" class="tx-info" target="blank">progress section</a>.</p>
                            </div>
                            <!-- col-6 -->
                            <div class="col-sm-6 mg-t-20 mg-sm-t-0 d-flex align-items-end justify-content-center">
                                <span class="peity-bar" data-peity='{ "fill": ["#17A2B8","#6F42C1","#1CAF9A","#0866C6"], "height": 150, "width": 250 }'>8,6,5,9,8,4,9,3,5,9</span>
                            </div>
                            <!-- col-6 -->
                        </div>
                        <!-- row -->
                    </div>
                    <!-- card -->
                </div>
                <!-- col-6 -->
            </div>
            <!-- row -->
        </div>
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
