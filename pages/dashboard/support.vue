<template>
  <div>
    <Logo/>
    <Sidebar/>
    <Header/>
      <div class="br-mainpanel">

<div class="br-pagebody">
		<div class="bg-gray-200 d-flex align-items-center justify-content-center">
			<div class="login-wrapper wd-250 wd-xl-350 mg-y-30">
				<h4 class="tx-inverse tx-center">Contact Support</h4>
				<p class="tx-center mg-b-60">Lorem Ipsum</p>
				<div class="form-group">
					<div class="row mg-t-10">
						<div class="col-lg-6">
							<label class="rdiobox"><input checked name="rdio" type="radio"> <span>Shipment</span></label>
						</div><!-- col-3 -->
						<div class="col-lg-6 mg-t-20 mg-lg-t-0">
							<label class="rdiobox"><input name="rdio" type="radio"> <span>Umum</span></label>
						</div><!-- col-3 -->
					</div><!-- row -->
				</div>
				<div class="form-group">
					<select class="form-control select2" data-placeholder="Pilih Shipment">
						<option label="Pilih Shimpent">
						</option>
						<option value="ME12345678">
							ME12345678
						</option>
						<option value="ME12345678">
							ME12345678
						</option>
						<option value="ME12345678">
							ME12345678
						</option>
						<option value="ME12345678">
							ME12345678
						</option>
					</select>
				</div><!-- form-group -->
				<div class="form-group">
					<input class="form-control" placeholder="Nama Lengkap" type="password">
				</div><!-- form-group -->
				<div class="form-group">
					<input class="form-control" placeholder="Email" type="password">
				</div><!-- form-group -->
				<div class="form-group">
					<textarea class="form-control" placeholder="Tuliskan Pesan Anda" rows="4"></textarea>
				</div><!-- form-group -->
				<div class="form-group tx-12">
					Lorem Ipsum
				</div><button class="btn btn-info btn-block" type="submit">Kirim</button>
			</div>
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
