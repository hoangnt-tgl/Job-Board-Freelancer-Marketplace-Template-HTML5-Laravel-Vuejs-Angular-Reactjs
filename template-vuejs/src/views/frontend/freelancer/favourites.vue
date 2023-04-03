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
										<li class="breadcrumb-item" aria-current="page">Favourites</li>
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
										<router-link class="nav-link active" to="/freelancer-favourites">Bookmarked Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-invitations">Invitations</router-link>
									</li>
								</ul>
							</nav>
							<!-- project list -->
							<!-- project list -->
							<div class="my-projects-view favourite-group">
								<div class="row">
									<div class="col-lg-12">
										<div class="card">
											<div class="card-header d-flex">
												<h5 class="card-title">Bookmarked Projects</h5>
												<ul class="list-grid d-flex align-items-center">
													<li><router-link to="/freelancer-favourites"><i class="fas fa-list"></i></router-link></li>
													<li><router-link to="/freelancer-favourites" class="favour-active"><i class="fas fa-th-large"></i></router-link></li>
												</ul>
											</div>
											<div class="freelance-box book-mark bookmark-projects">
												<div class="row">
													<div class="col-md-12 col-lg-12 col-xl-12">
														<div class="relavance-result d-flex align-items-center">
															<h4>Found 455 Results</h4>
															<div class="relavance-rate d-flex justify-content-sm-end">
															   <div class="sort-by">
																  <label>Sort By: </label>
																  <select class="custom-select form-select">
																	 <option>Relevance</option>
																	 <option>Rating</option>
																	 <option>Popular</option>
																	 <option>Latest</option>
																	 <option>Free</option>
																  </select>
															   </div>
															</div>
														</div>
													</div>
													<!-- Project Content -->
													<div class="col-md-6 col-lg-12 col-xl-3">
													
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-1.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Amaze Tech </router-link></div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">UI/UX Developer</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted Just Now</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$40-$500</div>
															</div>
															<div class="counter-stats">
																	<ul>
																		<li>
																			<h5>Expiry</h5>
																			<h3 class="counter-value">4 Days Left</h3>
																		</li>
																		<li>
																			<h5>Proposals</h5>
																			<h3 class="counter-value">15</h3>
																		</li>
																		<li>
																			<h5>Job Type</h5>
																			<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																		</li>
																	</ul>
																</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													<div class="col-md-6 col-lg-12 col-xl-3">
													
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-2.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Park INC </router-link></div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">PHP Developer</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 1 min ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>California, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$30-$300</div>
															</div>
															<div class="counter-stats">
																	<ul>
																		<li>
																			<h5>Expiry</h5>
																			<h3 class="counter-value">5 Days Left</h3>
																		</li>
																		<li>
																			<h5>Proposals</h5>
																			<h3 class="counter-value">15</h3>
																		</li>
																		<li>
																			<h5>Job Type</h5>
																			<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																		</li>
																	</ul>
																</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													<div class="col-md-6 col-lg-12 col-xl-3">
													
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-3.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Tech Zone</router-link> </div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">Graphic Designer</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 30 mins ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>New York, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$15-$500</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">4 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">15</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													
													<div class="col-md-6 col-lg-12 col-xl-3">
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-4.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">ABC Software</router-link> </div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">iOS Developer</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 1 day ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Florida, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$25-$250</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">1 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">13</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													
													<div class="col-md-6 col-lg-12 col-xl-3">
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-5.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Host Technologies</router-link></div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">SEO Developer</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 3 days ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Texas, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$50-$700</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">6 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">18</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													
													<div class="col-md-6 col-lg-12 col-xl-3">
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-6.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Alfred Tech</router-link> </div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">SM Developer</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 1 week ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Virginia, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$42-$100</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">2 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">15</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													
													<div class="col-md-6 col-lg-12 col-xl-3">
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-7.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Kind Softwares</router-link> </div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">Network Engineer</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 3 weeks ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Delaware, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$12-$320</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">5 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">24</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													
													<div class="col-md-6 col-lg-12 col-xl-3">
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-8.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Particles INC </router-link></div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">Business Analyst</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 1 month ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Kentucky, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$35-$520</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">4 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">15</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													
													<div class="col-md-6 col-lg-12 col-xl-3">
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-9.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">Soft Technologies</router-link> </div>
																</div>
																<div class="freelance-info">
																	<h3><router-link to="/project-details">IT Project Manager</router-link></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 2 months ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Kansas, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$10-$300</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">1 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">12</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
													
													<div class="col-md-6 col-lg-12 col-xl-3">
														<div class="freelance-widget widget-author">
															<div class="freelance-content">
															<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
															<div class="author-heading">
																<div class="profile-img">
																	<router-link to="/project-details">
																		<img src="../../../assets/img/company/img-10.png" alt="author">
																		<span class="project-verified"><i class="fas fa-check-circle"></i></span>
                                                                    </router-link>
																</div>
																<div class="profile-name">
																	<div class="author-location"><router-link to="/project-details">System Info </router-link></div>
																</div>
																<div class="freelance-info">
																	<h3><a href="javascript:void(0);">Software Architect</a></h3>
																	<div class="freelance-location post-now mb-1"><i class="fas fa-clock"></i> Posted 1 year ago</div>
																	<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Minnesota, USA</div>
																</div>
																<div class="freelance-tags">
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																	<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																</div>
																<div class="freelancers-price">$22-$600</div>
															</div>
															<div class="counter-stats">
																<ul>
																	<li>
																		<h5>Expiry</h5>
																		<h3 class="counter-value">2 Days Left</h3>
																	</li>
																	<li>
																		<h5>Proposals</h5>
																		<h3 class="counter-value">10</h3>
																	</li>
																	<li>
																		<h5>Job Type</h5>
																		<h3 class="counter-value"><span class="jobtype">Full Time</span></h3>
																	</li>
																</ul>
															</div>
															</div>
															<div class="cart-hover">
																<router-link to="/project-details" class="btn-cart" tabindex="-1">View Profile</router-link>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- project list -->
							
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