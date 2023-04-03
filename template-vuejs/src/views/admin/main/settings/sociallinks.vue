<template>
    	
		<!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>
			
			<!-- Page Wrapper -->
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
									<li class="breadcrumb-item active">Social Links</li>
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
									<li class="nav-item">
										<router-link class="nav-link" to="/admin/social-settings">Social Media Login</router-link>
									</li>
									<li class="nav-item active">
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
								<div class="col-lg-6 col-md-8">
									<div class="card">
										<div class="card-body pt-0">
											<div class="card-header">
												<h5 class="card-title">Social Link Settings</h5>
											</div>
											<form>
												<div class="settings-form">
													<div class="links-info">
														<div class="row form-row links-cont">
															<div class="col-12 col-md-11">
																<div class="form-group form-placeholder d-flex">
																	<button class="btn social-icon">
																		<i class="feather-facebook"></i>
																	</button>
																	<input type="text" class="form-control" placeholder="https://www.facebook.com">
																</div> 
															</div>
															<div class="col-12 col-md-1">
																<a href="javascript:void(0);" class="btn trash">
																	<i class="feather-trash-2"></i>
																</a>
															</div>
														</div>
													</div>
													<div class="links-info">
														<div class="row form-row links-cont">
															<div class="col-12 col-md-11">
																<div class="form-group form-placeholder d-flex">
																	<button class="btn social-icon">
																		<i class="feather-twitter"></i>
																	</button>
																	<input type="text" class="form-control" placeholder="https://www.twitter.com">
																</div> 
															</div>
															<div class="col-12 col-md-1">
																<a href="javascript:void(0);" class="btn trash">
																	<i class="feather-trash-2"></i>
																</a>
															</div>
														</div>
													</div>
													<div class="links-info">
														<div class="row form-row links-cont">
															<div class="col-12 col-md-11">
																<div class="form-group form-placeholder d-flex">
																	<button class="btn social-icon">
																		<i class="feather-youtube"></i>
																	</button>
																	<input type="text" class="form-control" placeholder="https://www.youtube.com">
																</div> 
															</div>
															<div class="col-12 col-md-1">
																<a href="javascript:void(0);" class="btn trash">
																	<i class="feather-trash-2"></i>
																</a>
															</div>
														</div>
													</div>
													<div class="links-info">
														<div class="row form-row links-cont">
															<div class="col-12 col-md-11">
																<div class="form-group form-placeholder d-flex">
																	<button class="btn social-icon">
																		<i class="feather-linkedin"></i>
																	</button>
																	<input type="text" class="form-control" placeholder="https://www.linkedin.com">
																</div> 
															</div>
															<div class="col-12 col-md-1">
																<a href="javascript:void(0);" class="btn trash">
																	<i class="feather-trash-2"></i>
																</a>
															</div>

														</div>
													</div>
												</div>
												<div class="form-group">
													<a href="javascript:void(0);" class="btn add-links">
														<i class="fas fa-plus me-1"></i> Add More
													</a>
												</div>
												<div class="form-group mb-0">
													<div class="settings-btns">
														<button type="submit" class="btn btn-orange">Submit</button>
														<button type="submit" class="btn btn-grey">Cancel</button>
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
			<!-- /Page Wrapper -->
			
        </div>
		<!-- /Main Wrapper -->
</template>
<script>
    import Vue from 'vue'
    export default {
      data() {
      return {
        timezone: ["(UTC +5:30) Antarctica/Palmer", "(UTC+05:30) India"],
        dateformat: ["15 May 2016", "15/05/2016", "15.05.2016", "15-05-2016", "05/15/2016", "2016/05/15","2016-05-15"],
        timeformat: ["12 Hours", "24 Hours", "36 Hours", "48 Hours", "60 Hours"],
        currency: ["$", "₹", "£", "€"]
      }
      },
      components: {
     
      },
      mounted() {
        $(".settings-form").on('click','.trash', function () {
		$(this).closest('.links-cont').remove();
		return false;
    });
    
    $(document).on("click",".add-links",function () {
		var experiencecontent = '<div class="row form-row links-cont">' +
			'<div class="col-12 col-md-11">' +
				'<div class="form-group d-flex">' +
					'<button class="btn social-icon"><i class="feather-github"></i></button>' +
					'<input type="text" class="form-control" placeholder="Social Link">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-1 col-lg-1"><a href="javascript:void(0);" class="btn trash"><i class="feather-trash-2"></i></a></div>' +
		'</div>';
		
        $(".settings-form").append(experiencecontent);
        return false;
    });
    
    },
    }
  </Script>
