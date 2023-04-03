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
						<layout-freelancerprojectsidebar></layout-freelancerprojectsidebar>	
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
										<router-link a class="nav-link" to="/freelancer-ongoing-projects">Ongoing Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link active" to="/freelancer-completed-projects">Completed Projects</router-link>
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
										<div class="projects-card flex-fill">
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
																	<li> October 20, 2021</li>
																	<li><i class="fas fa-star text-primary"></i> 4 Reviews</li>
																</ul>
															</div>
														</div>
														<div class="content-divider"></div>
														<div class="projects-action text-center project">
															<router-link to="/freelancer-view-project-detail" class="projects-btn">View Details </router-link>
															<h4 class="completed-badge"><span><i class="fas fa-medal me-2"></i></span>Completed</h4>
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
										<div class="projects-card flex-fill">
											<div class="card-body">
												<div class="projects-details align-items-center">
													<div class="project-info project">
														<span>Dreamguystech</span>
														<h2>PHP Laravel Developer Required (Contractual Employement)</h2>
														<div class="proposal-client">
															<h4 class="title-info">Client Price</h4>
															<div class="d-flex">
																<h3 class="client-price me-2">$300.00</h3>
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
																	<li> October 24, 2021</li>
																	<li><i class="fas fa-star text-primary"></i> 4 Reviews</li>
																</ul>
															</div>
														</div>
														<div class="content-divider"></div>
														<div class="projects-action text-center project">
															<router-link to="/freelancer-view-project-detail" class="projects-btn">View Details </router-link>
															<h4 class="completed-badge"><span><i class="fas fa-medal me-2"></i></span>Completed</h4>
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
										<div class="projects-card flex-fill">
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
															<router-link to="/freelancer-view-project-detail" class="projects-btn">View Details </router-link>
															<h4 class="completed-badge"><span><i class="fas fa-medal me-2"></i></span>Completed</h4>
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