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
									<li class="breadcrumb-item active">Localization</li>
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
									<li class="nav-item active">
										<router-link class="nav-link" to="/admin/localization-details">Localization</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/payment-settings">Payment Settings</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/email-settings">Email Settings</router-link>
									</li>
									<li class="nav-item">
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
											<div class="card-header">
												<h5 class="card-title">Localization Details</h5>
											</div>
											<form>
												<div class="settings-form">
													<div class="form-group">
														<label>Time Zone</label>
                                                        <vue-select :options="timezone" />
													</div>
													<div class="form-group">
														<label>Date Format</label>
                                                        <vue-select :options="dateformat" />
													</div>
													<div class="form-group">
														<label>Time Format</label>
                                                        <vue-select :options="timeformat" />
													</div>
													<div class="form-group">
														<label>Currency Symbol</label>
                                                        <vue-select :options="currenysymbol" />
													</div>
													<div class="form-group mb-0">
														<div class="settings-btns">
															<button type="submit" class="btn btn-orange">Update</button>
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
<script>
	export default {
		 mounted() {
		},
		methods:{
		},
		data() {
			return {
                dateformat: ["15 May 2016", "15/05/2016", "15.05.2016", "15-05-2016", "05/15/2016", "2016/05/15", "2016-05-15"],
                timeformat: ["12 Hours", "24 Hours", "36 Hours", "48 Hours", "60 Hours"],
                currenysymbol: ["$", "₹", "£", "€"],
                timezone: ["(UTC +5:30) Antarctica/Palmer", "(UTC+05:30) India"]
			}
		}
	}
	</script>
