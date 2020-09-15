<template>
  <div>
    <Header/>
              <section class="wrapper">
        <div class="container">
            <div class="row">

                <div class="col-md-6 col-md-offset-7 col-xs-12 widget-login">
                    <h3 class="text-center">Daftar ke XportKu </h3>
                    <h4 class="text-center">Buat dan Kelola Pengirimanmu</h4>
                    <ul class="nav nav-tabs">
                        <li class="active">
                            <a data-toggle="tab" href="#personal">
                                <h4>Personal</h4>
                            </a>
                        </li>
                        <li>
                            <a data-toggle="tab" href="#perusahaan">
                                <h4>Perusahaan</h4>
                            </a>
                        </li>

                    </ul>
                </div>
                <div class="tab-content">
                    <div id="personal" class="tab-pane fade in active">
                        <div class="col-md-6 col-md-offset-7 col-xs-12">
                            <div class="login-box">
                                <form action="/action_page.php">
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Depan" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Belakang" class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="email" placeholder="E-mail" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="No.Hp" class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="password" placeholder="Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" placeholder="Ulangi Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" value="">Saya menyetujui syarat dan ketentuan dan pernyataan privasi MisterExportir
                                          </label>
                                    </div>
                                    <div class="form-group">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" value="">Saya bersedia menerima penawaran dan berita terbaru tentang produk
                                          </label>
                                    </div>
                                    <div class='row'>
                                        <div class='col-md-12 text-center'>
                                            <button type="button" class="btn btn-cek">Daftar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="perusahaan" class="tab-pane fade in ">
                        <div class="col-md-6 col-md-offset-7 col-xs-12">
                            <div class="login-box">
                                <form action="/action_page.php">
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Perusahaan" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="NPWP" class="form-control">
                                    </div>
                                    <b>Penanggung Jawab</b>
                                    <br/>
                                    <br/>
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Depan" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Belakang" class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="email" placeholder="E-mail" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="No.Hp" class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="password" placeholder="Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" placeholder="Ulangi Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" value="">Saya menyetujui syarat dan ketentuan dan pernyataan privasi MisterExportir
                                          </label>
                                    </div>
                                    <div class="form-group">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" value="">Saya bersedia menerima penawaran dan berita terbaru tentang produk
                                          </label>
                                    </div>
                                    <div class='row'>
                                        <div class='col-md-12 text-center'>
                                            <button type="button" class="btn btn-cek">Daftar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <Footer/>
  </div>
</template>
<script>
import Header from '@/components/auth/Header'
import Footer from '@/components/auth/Footer'

export default {
    name: 'Register',
    layout: 'auth',
    components: {
      Header,
      Footer
    },

}
</script>
<style>

    .logo-top {
        max-width: 200px !important;
    }

    .logo-bottom {
        width: 80%;
    }

    section.wrapper {
        background-image: url(~@/static/auth/images/bg_regsiter.png);
        background-color: #F8F8F8;
        background-size: 100% auto;
        background-position: center bottom;
        background-repeat: no-repeat;

    }

    .widget-login {
        margin-top: 50px;
    }

    .login-box {
        margin-top: 10px;
        background: #FFFFFF;
        padding: 30px 35px;
        border-radius: 5px;
        margin-bottom: -80px;
    }

    .btn-cek {
        font-weight: bold;
        padding: 5px 26px !important;
        font-size: 17px;
    }

    label.checkbox-inline {
        color: #C2262D;
    }

    .nav-tabs li {
        width: 50%;
        text-align: center;
    }

    ul.nav.nav-tabs {
        width: 100%;
    }

    .form-group-odd {
        margin-top: 35px;
    }

    .form-control {
        height: 42px;
        border: 1px solid #8e8e8e;
    }
       .forgot a {
        color: #141414;
        text-decoration: underline;
    }
</style>
