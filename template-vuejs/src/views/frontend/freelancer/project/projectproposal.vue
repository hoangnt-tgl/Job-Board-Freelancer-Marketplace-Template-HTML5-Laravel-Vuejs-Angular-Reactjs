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
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Freelancer</li>
										<li class="breadcrumb-item" aria-current="page">Projects</li>
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
									<router-link to="/freelancer-profile"><img alt="profile image" src="../../../../assets/img/user/avatar-1.jpg" class="avatar-lg rounded-circle"></router-link>
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
											<router-link to="/freelancer-project-proposals" class="nav-link active">
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
											<router-link to="/freelancer-portfolio" class="nav-link">
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
							<div class="page-title">
								<h3>Proposals</h3>
							</div>
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link active" to="/freelancer-project-proposals">My Proposals</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-ongoing-projects">Ongoing Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-completed-projects">Completed Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-cancelled-projects">Cancelled Projects</router-link>
									</li>
								</ul>
							</nav> 
							
							<!-- Proposals list -->
							<div class="proposals-section">
								<h3 class="page-subtitle">My Proposals</h3>
								
								<!-- Proposals -->
								<div class="freelancer-proposals">
									<div class="project-proposals align-items-center freelancer">
										<div class="proposals-info">
											<div class="proposals-detail">
												<h3 class="proposals-title">3D Renders and Amazon Product Store images/Video</h3>
												<div class="proposals-content">
													<div class="proposal-img">
														<div class="text-md-center">
															<img src="../../../../assets/img/developer/developer-01.jpg" alt="" class="img-fluid">
															<h4>John Doe</h4>
															<span class="info-btn">client</span>
														</div>
													</div>
													<div class="proposal-client">
														<h4 class="title-info">Client Price</h4>
														<h2 class="client-price">$599.00</h2>
														<span class="price-type">( FIXED )</span>
													</div>
													<div class="proposal-type">
														<h4 class="title-info">Job Type</h4>
														<h3>Hourly</h3>
													</div>
												</div>
											</div>
											<div class="project-hire-info">
												<div class="content-divider-1"></div>
												<div class="projects-amount">
													<p>Your Price</p>
													<h3>$500.00</h3>
													<h5>in 12 Days</h5>
												</div>
												<div class="content-divider-1"></div>
												<div class="projects-action text-center">
													<a data-bs-toggle="modal" href="#file" class="projects-btn">Edit Proposals </a>
													<router-link to="/freelancer-view-project-detail" class="projects-btn">View Project</router-link>
													<a href="javascript:void(0);" class="proposal-delete">Delete Proposal</a>
												</div>
											</div> 
										</div>
										<div class="description-proposal">
											<h5 class="desc-title">Description</h5>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam sit erat et eros. Et cursus tellus viverra adipiscing suspendisse. Semper arcu est eget eleifend. Faucibus elit massa sollicitudin elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur netus laoreet. In tortor neque sapien praesent porttitor cursus sed cum....<a href="javascript:void(0);" class="text-primary font-bold">Readmore</a></p>
										</div>
									</div>
								</div>
								<!-- Proposals --> 
								
								<!-- Proposals -->
								<div class="freelancer-proposals">
									<div class="project-proposals align-items-center freelancer">
										<div class="proposals-info">
											<div class="proposals-detail">
												<h3 class="proposals-title">Landing Page Redesign / Sales Page Redesign (Not Entire Web)</h3>
												<div class="proposals-content">
													<div class="proposal-img">
														<div class="text-md-center">
															<img src="../../../../assets/img/developer/developer-01.jpg" alt="" class="img-fluid">
															<h4>John Doe</h4>
															<span class="info-btn">client</span>
														</div>
													</div>
													<div class="proposal-client">
														<h4 class="title-info">Client Price</h4>
														<h2 class="client-price">$320.00</h2>
														<span class="price-type">( FIXED )</span>
													</div>
													<div class="proposal-type">
														<h4 class="title-info">Job Type</h4>
														<h3>Hourly</h3>
													</div>
												</div>
											</div>
											<div class="project-hire-info">
												<div class="content-divider-1"></div>
												<div class="projects-amount">
													<p>Your Price</p>
													<h3>$300.00</h3>
													<h5>in 15 Days</h5>
												</div>
												<div class="content-divider-1"></div>
												<div class="projects-action text-center">
													<a data-bs-toggle="modal" href="#file" class="projects-btn">Edit Proposals </a>
													<router-link to="/freelancer-view-project-detail" class="projects-btn">View Project</router-link>
													<a href="javascript:void(0);" class="proposal-delete">Delete Proposal</a>
												</div>
											</div> 
										</div>
										<div class="description-proposal">
											<h5 class="desc-title">Description</h5>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam sit erat et eros. Et cursus tellus viverra adipiscing suspendisse. Semper arcu est eget eleifend. Faucibus elit massa sollicitudin elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur netus laoreet. In tortor neque sapien praesent porttitor cursus sed cum....<a href="javascript:void(0);" class="text-primary font-bold">Readmore</a></p>
										</div>
									</div>
								</div>
								<!-- Proposals --> 
								
								<!-- Proposals -->
								<div class="freelancer-proposals">
									<div class="project-proposals align-items-center freelancer">
										<div class="proposals-info">
											<div class="proposals-detail">
												<h3 class="proposals-title">WooCommerce Product Page Back Up Restoration</h3>
												<div class="proposals-content">
													<div class="proposal-img">
														<div class="text-md-center">
															<img src="../../../../assets/img/developer/developer-01.jpg" alt="" class="img-fluid">
															<h4>John Doe</h4>
															<span class="info-btn">client</span>
														</div>
													</div>
													<div class="proposal-client">
														<h4 class="title-info">Client Price</h4>
														<h2 class="client-price">$500.00</h2>
														<span class="price-type">( FIXED )</span>
													</div>
													<div class="proposal-type">
														<h4 class="title-info">Job Type</h4>
														<h3>Hourly</h3>
													</div>
												</div>
											</div>
											<div class="project-hire-info">
												<div class="content-divider-1"></div>
												<div class="projects-amount">
													<p>Your Price</p>
													<h3>$450.00</h3>
													<h5>in 18 Days</h5>
												</div>
												<div class="content-divider-1"></div>
												<div class="projects-action text-center">
													<a data-bs-toggle="modal" href="#file" class="projects-btn">Edit Proposals </a>
													<router-link to="/freelancer-view-project-detail" class="projects-btn">View Project</router-link>
													<a href="javascript:void(0);" class="proposal-delete">Delete Proposal</a>
												</div>
											</div> 
										</div>
										<div class="description-proposal">
											<h5 class="desc-title">Description</h5>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At diam sit erat et eros. Et cursus tellus viverra adipiscing suspendisse. Semper arcu est eget eleifend. Faucibus elit massa sollicitudin elementum ut feugiat nunc ac. Turpis quam sed in sed curabitur netus laoreet. In tortor neque sapien praesent porttitor cursus sed cum....<a href="javascript:void(0);" class="text-primary font-bold">Readmore</a></p>
										</div>
									</div>
								</div>
								<!-- Proposals --> 
								
							</div>
							<!-- /Proposals list -->
							
							<!-- pagination -->
							<div class="row">
								<div class="col-md-12">
									<ul class="paginations freelancer">
										<li><a href="javascript:void(0);"> <i class="fas fa-angle-left"></i> Previous</a></li>
										<li><a href="javascript:void(0);">1</a></li>
										<li><a href="javascript:void(0);" class="active">2</a></li>
										<li><a href="javascript:void(0);">3</a></li>
										<li><a href="javascript:void(0);">4</a></li>
										<li><a href="javascript:void(0);">Next <i class="fas fa-angle-right"></i></a></li>
									</ul>
								</div>
							</div>
							<!-- /pagination -->
							
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