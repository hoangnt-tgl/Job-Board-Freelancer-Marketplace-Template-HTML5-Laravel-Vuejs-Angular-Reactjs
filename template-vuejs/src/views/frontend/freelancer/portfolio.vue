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
										<li class="breadcrumb-item" aria-current="page">Portfolio</li>
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
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/freelancer-profile"><img alt="profile image" src="../../../assets/img/user/avatar-1.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<h3 class="mb-0"><router-link to="/freelancer-profile">George Wells</router-link></h3>
										<p class="mb-0">@georgewell</p>
									</div>
								</div>
								<div class="settings-menu">
									<ul>
										<li class="nav-item">
											<router-link to="/freelancer-dashboard" class="nav-link">
												<i class="material-icons">verified_user</i> Dashboard
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-project-proposals" class="nav-link">
												<i class="material-icons">business_center</i> Projects
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-favourites" class="nav-link">
												<i class="material-icons">local_play</i> Favourites
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-review" class="nav-link">
												<i class="material-icons">record_voice_over</i> Reviews
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-portfolio" class="nav-link active">
												<i class="material-icons">pie_chart</i> Portfolio
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-chats" class="nav-link">
												<i class="material-icons">chat</i> Messages
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-membership" class="nav-link">
												<i class="material-icons">person_add</i> Membership
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-verify-identity" class="nav-link">
												<i class="material-icons">person_pin</i> Verify Identity
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-withdraw-money" class="nav-link">
												<i class="material-icons">wifi_tethering</i> Payments
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-profile-settings" class="nav-link">
												<i class="material-icons">settings</i>  Settings
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/" class="nav-link">
												<i class="material-icons">power_settings_new</i> Logout
                                            </router-link>
										</li>
									</ul>
								</div>
							</div>
                            </div>					
						</div>	
						<div class="col-xl-9 col-md-8">
							<div class="portfolio-item">
								<div class="pro-head p-0 pb-4">
									<h3 class="mb-0">Portfolio</h3>
									<a class="btn btn-primary back-btn br-0" data-bs-toggle="modal" href="#portfolio">+ Add Portfolio</a>
								</div>
								<div class="pro-content pt-4 pb-4">
									<div class="row">
										<div class="col-sm-6 col-lg-4">
											<div class="project-widget">
												<div class="portfolio-img">
													<img class="img-fluid" alt="User Image" src="../../../assets/img/project-1.jpg">
													<div class="portfolio-live">
													<div class="portfolio-content">
														<a data-bs-toggle="modal" href="#portfolio-edit" class="port-icon me-1"><i class="fas fa-pen"></i></a>
														<a href="javascript:void(0);" class="port-icon"><i class="fas fa-trash-alt"></i></a>
													</div>
													</div>
												</div>
												<div class="portfolio-detail">
													<h3 class="pro-name">Razor Website Design</h3>
												</div>
											</div>
										</div>
										<div class="col-sm-6 col-lg-4">
											<div class="project-widget">
												<div class="portfolio-img">
													<img class="img-fluid" alt="User Image" src="../../../assets/img/project-2.jpg">
													<div class="portfolio-live">
													<div class="portfolio-content">
														<a data-bs-toggle="modal" href="#portfolio-edit" class="port-icon me-1"><i class="fas fa-pen"></i></a>
														<a href="javascript:void(0);" class="port-icon"><i class="fas fa-trash-alt"></i></a>
													</div>
													</div>
												</div>
												<div class="portfolio-detail">
													<h3 class="pro-name">Transport Website</h3>
												</div>
											</div>
										</div>
										<div class="col-sm-6 col-lg-4">
											<div class="project-widget">
												<div class="portfolio-img">
													<img class="img-fluid" alt="User Image" src="../../../assets/img/project-3.jpg">
													<div class="portfolio-live">
													<div class="portfolio-content">
														<a data-bs-toggle="modal" href="#portfolio-edit" class="port-icon me-1"><i class="fas fa-pen"></i></a>
														<a href="javascript:void(0);" class="port-icon"><i class="fas fa-trash-alt"></i></a>
													</div>
													</div>
												</div>
												<div class="portfolio-detail">
													<h3 class="pro-name">Wordpress Website</h3>
												</div>
											</div>
										</div>
										<div class="col-sm-6 col-lg-4">
											<div class="project-widget">
												<div class="portfolio-img">
													<img class="img-fluid" alt="User Image" src="../../../assets/img/project-4.jpg">
													<div class="portfolio-live">
													<div class="portfolio-content">
														<a data-bs-toggle="modal" href="#portfolio-edit" class="port-icon me-1"><i class="fas fa-pen"></i></a>
														<a href="javascript:void(0);" class="port-icon"><i class="fas fa-trash-alt"></i></a>
													</div>
													</div>
												</div>
												<div class="portfolio-detail">
													<h3 class="pro-name">Mobile App</h3>
												</div>
											</div>
										</div>
										<div class="col-sm-6 col-lg-4">
											<div class="project-widget">
												<div class="portfolio-img">
													<img class="img-fluid" alt="User Image" src="../../../assets/img/project-5.jpg">
													<div class="portfolio-live">
													<div class="portfolio-content">
														<a data-bs-toggle="modal" href="#portfolio-edit" class="port-icon me-1"><i class="fas fa-pen"></i></a>
														<a href="javascript:void(0);" class="port-icon"><i class="fas fa-trash-alt"></i></a>
													</div>
													</div>
												</div>
												<div class="portfolio-detail">
													<h3 class="pro-name">Healthcare Website</h3>
												</div>
											</div>
										</div>
										<div class="col-sm-6 col-lg-4">
											<div class="project-widget">
												<div class="portfolio-img">
													<img class="img-fluid" alt="User Image" src="../../../assets/img/project-6.jpg">
													<div class="portfolio-live">
													<div class="portfolio-content">
														<a data-bs-toggle="modal" href="#portfolio-edit" class="port-icon me-1"><i class="fas fa-pen"></i></a>
														<a href="javascript:void(0);" class="port-icon"><i class="fas fa-trash-alt"></i></a>
													</div>
													</div>
												</div>
												<div class="portfolio-detail">
													<h3 class="pro-name">Injury Website</h3>
												</div>
											</div>
										</div>
									</div>
									<div class="col-md-12">
										<ul class="paginations">
											<li><a href="javascript:void(0);"> <i class="fas fa-angle-left"></i> Previous</a></li>
											<li><a href="javascript:void(0);">1</a></li>
											<li><a href="javascript:void(0);" class="active">2</a></li>
											<li><a href="javascript:void(0);">3</a></li>
											<li><a href="javascript:void(0);">4</a></li>
											<li><a href="javascript:void(0);">Next <i class="fas fa-angle-right"></i></a></li>
										</ul>
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
        <employeemodal></employeemodal>
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