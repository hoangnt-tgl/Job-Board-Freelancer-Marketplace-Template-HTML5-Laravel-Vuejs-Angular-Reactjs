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
								<h3>Manage Projects</h3>
							</div>
							
                            <nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-project-proposals">My Proposals</router-link>
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
							
							<!-- project list -->
							<div class="my-projects-list">
								<div class="row">
									<div class="col-lg-12 flex-wrap">
										<div class="projects-cancelled-card flex-fill">
											<div class="card-body">
												<div class="projects-details align-items-center">
													<div class="project-info project">
														<span>Dreamguystech</span>
														<h2>Website Designer Required For Directory Theme</h2>
														<div class="proposal-client">
															<h4 class="title-info">Client Price</h4>
															<div class="d-flex">
																<h3 class="client-price me-2">$599.00</h3>
																<p class="amnt-type">( FIXED )</p>
															</div>
														</div>
													</div>
													<div class="project-hire-info project">
														<div class="content-divider"></div>
														<div class="proposer-info project">
															<div class="proposer-img">
																<img src="../../../../assets/img/developer/developer-01.jpg" alt="" class="img-fluid">
															</div>
															<div class="proposer-detail">
																<h4>Hannah Finn</h4>
																<ul class="proposal-details">
																	<li> October 15, 2021</li>
																	<li><i class="fas fa-star text-primary"></i> 4 Reviews</li>
																</ul>
															</div>
														</div>
														<div class="content-divider"></div>
														<div class="projects-action text-center project">
															<a href="javascript:void(0);" class="projects-btn">Remove Project</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /project list -->
							
							<!-- project list -->
							<div class="my-projects-list">
								<div class="row">
									<div class="col-lg-12 flex-wrap">
										<div class="projects-cancelled-card flex-fill">
											<div class="card-body">
												<div class="projects-details align-items-center">
													<div class="project-info project">
														<span>Dreamguystech</span>
														<h2>PHP Laravel Developer Required (Contractual Employement)</h2>
														<div class="proposal-client">
															<h4 class="title-info">Client Price</h4>
															<div class="d-flex">
																<h3 class="client-price me-2">$350.00</h3>
																<p class="amnt-type">( FIXED )</p>
															</div>
														</div>
													</div>
													<div class="project-hire-info project">
														<div class="content-divider"></div>
														<div class="proposer-info project">
															<div class="proposer-img">
																<img src="../../../../assets/img/developer/developer-02.jpg" alt="" class="img-fluid">
															</div>
															<div class="proposer-detail">
																<h4>James Douglas</h4>
																<ul class="proposal-details">
																	<li> October 20, 2021</li>
																	<li><i class="fas fa-star text-primary"></i> 4 Reviews</li>
																</ul>
															</div>
														</div>
														<div class="content-divider"></div>
														<div class="projects-action text-center project">
															<a href="javascript:void(0);" class="projects-btn">Remove Project</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /project list -->
							
							<!-- project list -->
							<div class="my-projects-list">
								<div class="row">
									<div class="col-lg-12 flex-wrap">
										<div class="projects-cancelled-card flex-fill">
											<div class="card-body">
												<div class="projects-details align-items-center">
													<div class="project-info project">
														<span>Dreamguystech</span>
														<h2>Laravel Backend Developer to finish ongoing project</h2>
														<div class="proposal-client">
															<h4 class="title-info">Client Price</h4>
															<div class="d-flex">
																<h3 class="client-price me-2">$500.00</h3>
																<p class="amnt-type">( FIXED )</p>
															</div>
														</div>
													</div>
													<div class="project-hire-info project">
														<div class="content-divider"></div>
														<div class="proposer-info project">
															<div class="proposer-img">
																<img src="../../../../assets/img/developer/developer-03.jpg" alt="" class="img-fluid">
															</div>
															<div class="proposer-detail">
																<h4>Tony Ingle</h4>
																<ul class="proposal-details">
																	<li> October 26, 2021</li>
																	<li><i class="fas fa-star text-primary"></i> 4 Reviews</li>
																</ul>
															</div>
														</div>
														<div class="content-divider"></div>
														<div class="projects-action text-center project">
															<a href="javascript:void(0);" class="projects-btn">Remove Project</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- /project list -->
							
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