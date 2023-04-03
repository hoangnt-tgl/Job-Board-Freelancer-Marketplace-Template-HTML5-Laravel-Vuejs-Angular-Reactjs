<template>
    	
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
									<li class="breadcrumb-item active">Social Settings</li>
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
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/payment-settings">Payment Settings</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/email-settings">Email Settings</router-link>
									</li>
									<li class="nav-item active">
										<router-link class="nav-link" to="/admin/social-settings">Social Media Login</router-link>
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
												<h5 class="card-title">Google Login Credential</h5>
												<div class="status-toggle d-flex justify-content-between align-items-center">
													<input type="checkbox" id="status_1" class="check" checked="">
													<label for="status_1" class="checktoggle">checkbox</label>
												</div>
											</div>
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>Client ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>Client Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
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
												<h5 class="card-title">Facebook</h5>
												<div class="status-toggle d-flex justify-content-between align-items-center">
													<input type="checkbox" id="status_2" class="check" checked="">
													<label for="status_2" class="checktoggle">checkbox</label>
												</div>
											</div>
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>App ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>App Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
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
												<h5 class="card-title">Twiter Login Credential</h5>
												<div class="status-toggle d-flex justify-content-between align-items-center">
													<input type="checkbox" id="status_3" class="check">
													<label for="status_3" class="checktoggle">checkbox</label>
												</div>
											</div>
											<form>
												<div class="settings-form">
													<div class="form-group form-placeholder">
														<label>Client ID <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group form-placeholder">
														<label>Client Secret <span class="star-red">*</span></label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Save</button>
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
</template>