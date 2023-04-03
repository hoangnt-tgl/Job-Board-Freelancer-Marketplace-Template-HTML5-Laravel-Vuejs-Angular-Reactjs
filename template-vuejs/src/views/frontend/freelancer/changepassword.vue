<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-freelancerprojectheader></layout-freelancerprojectheader>
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
										<li class="breadcrumb-item" aria-current="page">Freelancer</li>
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
						<layout-freelancerprojectsidebar></layout-freelancerprojectsidebar>	
						<div class="col-xl-9 col-md-8">
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-profile-settings">Profile Settings</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link active" to="/freelancer-change-password">Change Password</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-delete-account">Delete Account</router-link>
									</li>
								</ul>
							</nav>
							
							<!-- Password Content -->
							<div class="account-content setting-content">
								<div class="pro-card">
									<div class="pro-head">
										<h3 class="pro-title without-border mb-0">Change Password</h3>
									</div>
									<div class="pro-body">
										<div class="row">
											<div class="col-md-8">
												<form>
													<div class="form-group">
														<label>Old Password</label>
														<input type="password" class="form-control">
													</div>
													<div class="form-group">
														<label>New Password</label>
														<input type="password" class="form-control">
													</div>
													<div class="form-group">
														<label>Confirm Password</label>
														<input type="password" class="form-control">
													</div>													
													<div class="row">
														<div class="col-md-12">
                                                            <router-link to="/login">
															<button class="btn btn-primary click-btn btn-plan" type="submit">Update</button>
                                                        </router-link>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /Password Content -->	
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
        computed: {
            currentPath() {
                return this.$route.name;
            }
    
        },  
        data() {
        return {
          activeClass: 'active',
        };
                //  isactive : true
      },
	}
	</script>