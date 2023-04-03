<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-employeeheader />
			<!-- /Header -->

            <!-- Breadcrumb -->
			<div class="bread-crumb-bar">
				<div class="container">
					<div class="row align-items-center inner-banner">
						<div class="col-md-12 col-12 text-center">
							<div class="breadcrumb-list">
								<nav aria-label="breadcrumb" class="page-breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Employee</li>
										<li class="breadcrumb-item" aria-current="page">Settings</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
			<!-- Page Content -->			
			<div class="content content-page">
				<div class="container-fluid">
					<div class="row">
						
						<!-- sidebar -->
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/user-account-details"><img alt="profile image" src="../../../assets/img/img-04.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<router-link to="/user-account-details"><h3 class="mb-0">John Danie S.</h3></router-link>
										<p class="mb-0">@johndaniee</p>
									</div>
								</div>
								<div class="settings-menu">
									<ul>
										<li class="nav-item">
											<router-link to="/dashboard" class="nav-link">
												<i class="material-icons">verified_user</i> Dashboard
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/manage-projects" class="nav-link">
												<i class="material-icons">business_center</i> Projects
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/favourites" class="nav-link">
												<i class="material-icons">local_play</i> Favourites
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/review" class="nav-link">
												<i class="material-icons">record_voice_over</i> Reviews
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/chats" class="nav-link">
												<i class="material-icons">chat</i> Messages
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/membership-plans" class="nav-link">
												<i class="material-icons">person_add</i> Membership
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/milestones" class="nav-link">
												<i class="material-icons">pie_chart</i> Milestones
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/verify-identity" class="nav-link">
												<i class="material-icons">person_pin</i> Verify Identity
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/deposit-funds" class="nav-link">
												<i class="material-icons">wifi_tethering</i> Payments
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/profile-settings" class="nav-link active">
												<i class="material-icons">settings</i> Settings
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/index" class="nav-link">
												<i class="material-icons">power_settings_new</i> Logout
                                            </router-link>
										</li>
									</ul>
								</div>
							</div>	
                            </div>				
						</div>
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<div class="pro-pos">
								<nav class="user-tabs mb-4">
									<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
										<li class="nav-item">
											<router-link class="nav-link active" to="/profile-settings">Basic Settings</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/change-password">Change Password</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/delete-account">Delete Account</router-link>
										</li>
									</ul>
								</nav>
								<div class="setting-content">
									<div class="card">
										<div class="pro-head">
											<h3 class="pro-title without-border mb-0">Profile Basics </h3>
										</div>										
										<form>
											<div class="pro-body p-0">
												<div class="form-row pro-pad">
													<div class="form-group col-md-6">
														<label>Username</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Email Address</label>
														<input type="email" class="form-control">

													</div>
													<div class="form-group col-md-6">
														<label>Dispaly Name</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Tagline</label>
														<input type="email" class="form-control">

													</div>
													<div class="form-group col-md-6">
														<label>Contact Number</label>
														<input type="email" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Category</label>
														<select class="form-control select">
															<option value="0">Male</option>
															<option value="1" >Female</option>
														</select>
													</div>
													<div class="form-group col-md-6">
														<label>Gender</label>
														<select class="form-control select">
															<option value="0">Male</option>
															<option value="1" >Female</option>
														</select>
													</div>
													<div class="form-group col-md-6">
														<label>Language </label>
														<input type="text" class="form-control">
													</div>
												</div>												
												<div class="form-row pro-pad pt-0">
													<div class="form-group col-md-6 pro-pic">
														<label>Profile Picture</label>
														<div class="d-flex align-items-center">														
															<div class="upload-images">
																<img src="../../../assets/img/img-02.jpg" alt="Image">
																<a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i class="far fa-trash-alt"></i></a>
															</div>
															<label class="file-upload image-upbtn ms-3">
																Change Image <input type="file">
															</label>
														</div>
														<p>Image size 300*300</p>
													</div>
												</div>
											</div>
										</form>
									</div>
									
									<div class="card">
										<div class="pro-head">
											<h3 class="pro-title without-border mb-0">Location</h3>
										</div>
										<div class="pro-body">
											<div class="row">
												<div class="form-group col-md-12">
													<label>Address</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>State</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>Zipcode</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>Country</label>
													<select class="form-control select">
														<option value="0">India</option>
														<option value="1" >China</option>
														<option value="2">Japan</option>
													</select>
												</div>
											</div>
										</div>
									</div>
									
									<div class="card">
										<div class="pro-head">
											<h3 class="pro-title without-border mb-0">Overview</h3>
										</div>
										<div class="pro-body">
											<div class="row">
												<div class="form-group col-md-12">
													<textarea class="form-control" rows="5"></textarea>
												</div>
											</div>
										</div>
									</div>
									
									<div class="card">
										<div class="pro-head">
											<h3 class="pro-title without-border mb-0">Social Links</h3>
										</div>
										<div class="pro-body">
											<div class="row">
												<div class="form-group col-md-6">
													<label>Facebook</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>Dribble</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>Twitter</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>LinkedIn</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>Behance</label>
													<input type="text" class="form-control">
												</div>
												<div class="form-group col-md-6">
													<label>Behance</label>
													<input type="text" class="form-control">
												</div>
											</div>
										</div>
									</div>
									
									<div class="card">
										<div class="text-end">
											<div class="pro-body">
												<button class="btn btn-secondary click-btn btn-plan me-1" type="submit">Cancel</button>
												<button class="btn btn-primary click-btn btn-plan" type="submit">Update</button>
											</div>
										</div>
									</div>
								</div>
							</div>
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
            if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
		}, 
        data() {
        return {
        };
                //  isactive : true
      },
	}
	</script>