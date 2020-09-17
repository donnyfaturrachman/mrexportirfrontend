<template>
  <div>
    <Header/>
           <section class="wrapper">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-7 col-xs-12 widget-login">
                    <h3 class="text-center">Masuk ke XportKu </h3>
                    <h4 class="text-center">Buat dan Kelola Pengirimanmu</h4>
                    <div class="login-box">
                        <form method="post" @submit.prevent="login">
                            <div class="form-group">
                                <input type="email" placeholder="Alamat Email"
                                 v-model="email"
                                  required
                                 class="form-control" id="email">
                            </div>
                            <div class="form-group">
                                <input type="password"
                                   v-model="password"
                                  required
                                placeholder="Password" class="form-control" id="pwd">
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <button type="submit" class="btn btn-cek">Masuk</button>
                                </div>
                                <div class="col-md-9">
                                    <span class="forgot">
                                        <div>
                                           <a href="#"> Lupa Password</a>
                                           <br/>
                                           <nuxt-link to="/auth/register">  Belum punya akun? Daftar sekarang!</nuxt-link >
                                        </div>


                                    </span>
                                </div>
                            </div>


                        </form>
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
import Header from '@/components/auth/Header'
import Footer from '@/components/auth/Footer'

export default {
    name: 'Login',
    layout: 'auth',
    components: {
      Header,
      Footer
    },

     data() {
      return {
        email: '',
        password: '',
        error: null
      }
    },
      methods: {
        async login() {
              var bodyFormData = new FormData()
              bodyFormData.append('email', this.email)
              bodyFormData.append('password', this.password)
              this.$store.dispatch('loginUser',bodyFormData).then(()=>{
                    this.$router.push('/dashboard')
              })
        }

    }

}
</script>
<style>
    .logo-top {
        max-width: 200px;
    }

    .logo-bottom {
        width: 80%;
    }

    section.wrapper {
        background-image: url(~@/static/auth/images/bg_login_central.png);
        background-color: #F8F8F8;
        background-size: 100% auto;
        background-position: center bottom;
        background-repeat: no-repeat;
    }

    .login-box {
        margin-top: 50px;
        background: #FFFFFF;
        padding: 30px 35px;
        margin-bottom: 150px;
    }

    .btn-cek {

        font-weight: bold;
        padding: 5px 26px !important;
        font-size: 17px;
    }

    .forgot a {
        color: #141414;
        text-decoration: underline;
    }

    .widget-login {
        margin-top: 50px;
    }

    .copyrighted {
        font-weight: 500;
    }

    .form-control {
        height: 42px;
        border: 1px solid #8e8e8e;
    }
</style>
