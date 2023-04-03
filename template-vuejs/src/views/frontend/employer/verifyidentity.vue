<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-accountheader></layout-accountheader>
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
										<li class="breadcrumb-item" aria-current="page">Verify Identity</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
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
											<router-link to="/verify-identity" class="nav-link active">
												<i class="material-icons">person_pin</i> Verify Identity
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/deposit-funds" class="nav-link">
												<i class="material-icons">wifi_tethering</i> Payments
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/profile-settings" class="nav-link">
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
						
						<!-- Verification Details -->
						<div class="col-xl-9 col-md-8">
							<div class="card">
								<div class="payment-list wallet card-body">
									<h3>Verification Details</h3>
									<form>
										<div class="row">
											<div class="col-md-6">
												<div class="form-group">
													<label for="first_name">Your Name</label>
													<input class="form-control" id="first_name" type="text">
												</div>
											</div>
											<div class="col-md-6">
												<div class="form-group">
													<label for="last_name">Contact Number</label>
													<input class="form-control" id="last_name" type="text">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label for="card_number">CNIC / Passport / NIN / SSN</label>
													<input class="form-control" id="card_number" type="text">
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label>Upload Document</label>
													<div class="uplod">
														<label class="file-upload image-upbtn mb-0">
															Select Document <input type="file">
														</label>
													</div>
												</div>
											</div>
											<div class="col-md-12">
												<div class="form-group">
													<label for="comment">Address</label>
													<textarea class="form-control" rows="5" id="comment"></textarea>
													<p class="mt-2">Your account information should match with the document that you are providing.</p>
												</div>
											</div>
                                            <router-link to="/dashboard">
											<div class="col-md-12 text-end">
												<a href="javascript:void(0);" class="btn btn-primary click-btn">Submit verification</a>
											</div>
                                            </router-link>
										</div>
									</form>
								</div>			
							</div>				
						</div>
						<!-- /Verification Details -->
						
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
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#milestones')
		},
		methods:{
		},
		data() {
			return {
			}
		}
	}
	</script>