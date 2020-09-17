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
                                <form method="post" @submit.prevent="register">
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Depan"
                                         v-model="nama_depan"
                                         required
                                        class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Belakang"
                                          v-model="nama_belakang"
                                         required
                                        class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="email"
                                          v-model="email"
                                         required
                                        placeholder="E-mail" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                          v-model="nohp"
                                         required
                                        placeholder="No.Hp" class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="password"
                                          v-model="password"
                                         required
                                        placeholder="Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group">
                                        <input type="password"
                                           v-model="c_password"
                                         required
                                        placeholder="Ulangi Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <label class="checkbox-inline">
                                            <input type="checkbox"
                                               v-model="tos"
                                              required
                                             >Saya menyetujui syarat dan ketentuan dan pernyataan privasi MisterExportir
                                          </label>
                                    </div>
                                    <div class="form-group">
                                        <label class="checkbox-inline">
                                            <input type="checkbox"
                                              v-model="update"
                                              required
                                            >Saya bersedia menerima penawaran dan berita terbaru tentang produk
                                          </label>
                                    </div>
                                    <div class='row'>
                                        <div class='col-md-12 text-center'>
                                            <button type="submit" class="btn btn-cek">Daftar</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id="perusahaan" class="tab-pane fade in ">
                        <div class="col-md-6 col-md-offset-7 col-xs-12">
                            <div class="login-box">
                                <form method="post" @submit.prevent="registercompany">
                                    <div class="form-group">
                                        <input type="text"
                                          v-model="perusahaan"
                                         required
                                        placeholder="Nama Perusahaan" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="NPWP"
                                           v-model="npwp"
                                           required
                                         class="form-control">
                                    </div>
                                    <b>Penanggung Jawab</b>
                                    <br/>
                                    <br/>
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Depan"
                                           v-model="nama_depan"
                                         required
                                         class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" placeholder="Nama Belakang"
                                           v-model="nama_belakang"
                                         required
                                        class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="email"
                                         v-model="email"
                                         required
                                        placeholder="E-mail" class="form-control">
                                    </div>
                                    <div class="form-group">
                                        <input type="text"
                                        v-model="nohp"
                                         required
                                        placeholder="No.Hp" class="form-control">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <input type="password"
                                           v-model="password"
                                         required
                                        placeholder="Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group">
                                        <input type="password"
                                           v-model="c_password"
                                         required
                                        placeholder="Ulangi Password" class="form-control" id="pwd">
                                    </div>
                                    <div class="form-group form-group-odd">
                                        <label class="checkbox-inline">
                                            <input type="checkbox"
                                               v-model="tos"
                                               required
                                            value="">Saya menyetujui syarat dan ketentuan dan pernyataan privasi MisterExportir
                                          </label>
                                    </div>
                                    <div class="form-group">
                                        <label class="checkbox-inline">
                                            <input type="checkbox"
                                            v-model="update"
                                            required
                                            value="">Saya bersedia menerima penawaran dan berita terbaru tentang produk
                                          </label>
                                    </div>
                                    <div class='row'>
                                        <div class='col-md-12 text-center'>
                                            <button type="submit" class="btn btn-cek">Daftar</button>
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

import axios from 'axios'
import Vue from 'vue'
import Header from '@/components/auth/Header'
import Footer from '@/components/auth/Footer'

export default {
    name: 'Register',
    layout: 'auth',
    components: {
      Header,
      Footer
    },

    data() {
      return {
        nama_depan: '',
        nama_belakang: '',
        email: '',
        nohp: '',
        password: '',
        c_password: '',
        tos:'',
        update:'',
        npwp:'',
        perusahaan:'',
        error: null
      }
    },
    methods: {
       async registercompany() {
          var bodyFormData = new FormData()
          bodyFormData.append('nama_depan', this.nama_depan)
          bodyFormData.append('nama_belakang', this.nama_belakang)
          bodyFormData.append('email', this.email)
          bodyFormData.append('nohp', this.nohp)
          bodyFormData.append('password', this.password)
          bodyFormData.append('c_password', this.c_password)
          bodyFormData.append('tos', this.tos)
          bodyFormData.append('npwp', this.npwp)
          bodyFormData.append('perusahaan', this.perusahaan)
          bodyFormData.append('update', this.update)
          this.$store.dispatch('RegisterCompany',bodyFormData).then(()=>{

          })
      },
      async register() {
          var bodyFormData = new FormData()
          bodyFormData.append('nama_depan', this.nama_depan)
          bodyFormData.append('nama_belakang', this.nama_belakang)
          bodyFormData.append('email', this.email)
          bodyFormData.append('nohp', this.nohp)
          bodyFormData.append('password', this.password)
          bodyFormData.append('c_password', this.c_password)
          bodyFormData.append('tos', this.tos)
          bodyFormData.append('update', this.update)
          this.$store.dispatch('RegisterUser',bodyFormData).then(()=>{

          })
      }
    }

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
