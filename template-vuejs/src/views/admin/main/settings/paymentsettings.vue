<template>
    <div>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
					<div class="page-header">
						<div class="row">
							<div class="col-sm-6">
								<h3 class="page-title">Settings</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link></li>
									<li class="breadcrumb-item"><router-link to="/admin/settings">Settings</router-link></li>
									<li class="breadcrumb-item active">Payment Settings</li>
								</ul>
							</div>
						</div>
					</div>
				
					<div class="row">
						<div class="col-lg-12">

							<!-- Settings Menu -->
							<div class="settings-menu-links">
								<ul class="nav nav-tabs menu-tabs">
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/settings">General Settings</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/localization-details">Localization</router-link>
									</li>
									<li class="nav-item active">
										<router-link class="nav-link" to="/admin/payment-settings">Payment Settings</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/email-settings">Email Settings</router-link>
									</li>
									<li class="nav-item">
										<router-link a class="nav-link" to="/admin/social-settings">Social Media Login</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/social-links">Social Links</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/seo-settings">SEO Settings</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/others-settings">Others</router-link>
									</li>
								</ul>
							</div>
							<!-- Settings Menu -->

							<div class="row">
								<div class="col-md-6">
									<div class="card">
										<div class="card-body pt-0">
											<div class="card-header d-flex justify-content-between align-items-center">
												<h5 class="card-title">Paypal</h5>
												<div class="status-toggle d-flex justify-content-between align-items-center">
													<input type="checkbox" id="status_1" class="check">
													<label for="status_1" class="checktoggle">checkbox</label>
												</div>
											</div>
											<form>
												<div class="settings-form">
													<div class="form-group">
														<p class="pay-cont">Paypal Option</p>
														<label class="custom_radio me-4">
															<input type="radio" name="budget" value="Yes" checked="">
															<span class="checkmark"></span> Sandbox
														</label>
														<label class="custom_radio">
															<input type="radio" name="budget" value="Yes">
															<span class="checkmark"></span> Live
														</label>
													</div>
													<div class="form-group form-placeholder">
														<label>Braintree Tokenization key <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8">
													</div>
													<div class="form-group form-placeholder">
														<label>Braintree Merchant ID <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="pd6gznv7zbrx9hb8">
													</div>
													<div class="form-group form-placeholder">
														<label>Braintree Public key <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="h8bydrz7gcjkp7d4">
													</div>
													<div class="form-group form-placeholder">
														<label>Braintree Private key <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="sandbox_pgjcppvs_pd6gznv7zbrx9hb8">
													</div>
													<div class="form-group form-placeholder">
														<label>Paypal APP ID <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="pd6gznv7zbrx9hb8">
													</div>
													<div class="form-group form-placeholder">
														<label>Paypal Secret Key <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="h8bydrz7gcjkp7d4">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
															<button type="submit" class="btn btn-grey">Cancel</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="card">
										<div class="card-body pt-0">
											<div class="card-header d-flex justify-content-between align-items-center">
												<h5 class="card-title">Stripe</h5>
												<div class="status-toggle d-flex justify-content-between align-items-center">
													<input type="checkbox" id="status_2" class="check" checked="">
													<label for="status_2" class="checktoggle">checkbox</label>
												</div>
											</div>
											<form>
												<div class="settings-form">
													<div class="form-group">
														<p class="pay-cont">Stripe Option</p>
														<label class="custom_radio me-4">
															<input type="radio" name="budget" value="Yes" checked="">
															<span class="checkmark"></span> Sandbox
														</label>
														<label class="custom_radio">
															<input type="radio" name="budget" value="Yes">
															<span class="checkmark"></span> Live
														</label>
													</div>
													<div class="form-group form-placeholder">
														<label>Gateway Name <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="Stripe">
													</div>
													<div class="form-group form-placeholder">
														<label>API Key <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="pk_test_AealxxOygZz84AruCGadWvUV00mJQZdLvr">
													</div>
													<div class="form-group form-placeholder">
														<label>Rest Key <span class="star-red">*</span></label>
														<input type="text" class="form-control" placeholder="sk_test_8HwqAWwBd4C4E77bgAO1jUgk00hDlERgn3">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
															<button type="submit" class="btn btn-grey">Cancel</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->

    </div>
</template>
