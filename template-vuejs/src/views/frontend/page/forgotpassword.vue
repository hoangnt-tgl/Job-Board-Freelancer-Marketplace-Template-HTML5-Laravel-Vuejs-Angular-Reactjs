<template>
<div class="account-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-header />
			<!-- /Header -->

            <!-- Page Content -->
			<div class="content">
				<div class="container">
					
					<div class="row">
						<div class="col-md-6 offset-md-3">
							
							<!-- Forgot Password Content -->
							<div class="account-content">
								<div class="align-items-center justify-content-center">
									<div class="login-right">
										<div class="login-header text-center">
											<router-link to="/index"><img src="../../../assets/img/logo-01.png" alt="logo" class="img-fluid"></router-link>
											<h3>First, let's find your account</h3>
											<p>Please enter your email or phone Number</p>
										</div>
										<form>
											<div class="form-group form-focus">
												<input type="email" class="form-control floating">
												<label class="focus-label">Email</label>
											</div>
                                            <router-link to="/login">
											<button class="btn btn-primary btn-block btn-lg login-btn" type="submit">FIND OUT PASSWORD</button>
                                            </router-link>
                                            <div class="row form-row">
											<div class="col-6 text-start">
												<router-link class="forgot-link" to="/login">Remember your password?</router-link>
											</div>
											<div class="col-6 text-end dont-have">New to Kofejob? <router-link to="/register">Click here</router-link></div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<!-- /Forgot Password Content -->
								
						</div>
					</div>

				</div>

			</div>					
			<!-- /Page Content -->
           
            <!-- Footer -->
                <layout-footer />
            <!-- /Footer -->
        </div>
        <!-- /Main Wrapper -->
        </div>
</template>
<script>
export default {
     mounted() {
    
    },
}
</script>