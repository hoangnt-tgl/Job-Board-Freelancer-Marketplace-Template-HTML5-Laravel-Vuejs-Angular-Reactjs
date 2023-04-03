<template>
<div>
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
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../../assets/img/home-icon.svg" alt=""> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Developer details</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
			<!-- Page Content -->
			<div class="content">
				<div class="container">	
					<div class="row">
						<div class="col-lg-8 col-md-12">
							<div class="developer-box head-develop">
								<div class="developer-profile-img">
									<img src="../../../../assets/img/profile-bg.jpg" alt="" class="img-fluid" >
									<div class="img-profile">
										<img src="../../../../assets/img/img-04.jpg" alt="" class="img-fluid" >
									</div>
								</div>
								<h2>John Danie S <i class="fas fa-check-circle"></i></h2>
								<p>iOS Expert + Node Dev <span>Full time</span></p>
								<ul class="develope-list-rate">
									<li>
										<div class="rating">	
											<span class="average-rating">4.6 </span>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
										</div>
									</li>
									<li>Member Since,Aug 5, 2018</li>
									<li class="bl-0"><img src="../../../../assets/img/flags/pl.png" alt="" height="16"> Poland</li>
									<li class="emp-edit"><a href="javascript:void(0);"><i class="fas fa-pencil-alt"></i> Edit</a></li>
								</ul>
								<div class="proposal-box">
									<div class="proposal-value">
										<h4>$20.00</h4>
										<span>( Per Hour )</span>
									</div>
								</div>
								<ul class="feed-back-detail">
									<li>Recommended<span>89%</span></li>
									<li>Completed Projects<span>22</span></li>
									<li>Clients<span>48</span></li>
									<li>Ongoing Projects<span>2</span></li>
									<li>Feedbacks<span>5</span></li>
									<li>Rehired<span>12</span></li>
								</ul>
							</div>
							<div class="pro-view develop-view">
								<!-- Tab Detail -->
								<nav class="provider-tabs mb-4 abouts-view">
									<ul class="nav nav-tabs nav-tabs-solid nav-justified">
										<li class="nav-item">
											<a class="nav-link active-about" href="#overview">
												<img src="../../../../assets/img/icon/tab-icon-21.svg"  alt="User Image">
												<p class="bg-red">Overview</p>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#project">
												<img src="../../../../assets/img/icon/tab-icon-16.svg"  alt="User Image">
												<p class="bg-blue">Projects</p>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#experience">
												<img src="../../../../assets/img/icon/tab-icon-17.svg"  alt="User Image">
												<p class="bg-violet">Experience</p>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#education">
												<img src="../../../../assets/img/icon/tab-icon-18.svg"  alt="User Image">
												<p class="bg-yellow">Education</p>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#skill">
												<img src="../../../../assets/img/icon/tab-icon-19.svg"  alt="User Image">
												<p class="bg-pink">Skills</p>
											</a>
										</li>
										<li class="nav-item">
											<a class="nav-link" href="#feedback">
												<img src="../../../../assets/img/icon/tab-icon-20.svg"  alt="User Image">
												<p class="bg-green">Feedbacks</p>
											</a>
										</li>
									</ul>
								</nav>
								<!-- /Tab Detail -->
								
								<!-- Overview Tab Content -->
								<div class="pro-post widget-box" id="overview">
									<h3 class="pro-title">Overview</h3>
									<div class="pro-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus.</p>
										<div class="mt-4">
											<h4 class="widget-title">My services include:</h4>
											<ul class="pro-list">
												<li>Cross-platform games</li>
												<li>Game concept and level designing</li>
												<li>Multiplayer integration</li>
												<li>Re-skin</li>
												<li>Ads and in-app purchase (Maximize your Revenue)</li>
												<li>Game Optimisations</li>
												<li>2D/3D Animation</li>
											</ul>
										</div>
										<p>Graphic DesigningSocial Network IntegrationVirtual Reality (VR)Augmented Reality (AR)Game con promotional graphics and video app store and Playstore publishing </p>
									</div>
								</div>
								<!-- /Overview Tab Content -->
								
								<!-- Project Tab Content -->								
								<div class="pro-post project-widget widget-box project-gallery" id="project">
									<h3 class="pro-title">PROJECTS</h3>
									<div class="pro-content">
										<div class="row">
											<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
												<div class="project-widget">
													<div class="pro-image">		
														<a class="fancystyle" data-fancybox="gallery2">
															<img class="img-fluid" alt="User Image" src="../../../../assets/img/project-8.jpg">
														</a>
													</div>
													<div class="project-footer">
														<div class="d-flex align-items-center">
															<div class="pro-detail">
																<h3 class="pro-name">
																	Education
																</h3>
																<p class="pro-designation">Web design</p>
															</div>
															<div class="view-image">
																<router-link to="/project"><i class="fas fa-arrow-right"></i></router-link>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
												<div class="project-widget">
													<div class="pro-image">		
														<a class="fancystyle" data-fancybox="gallery2">
															<img class="img-fluid" alt="User Image" src="../../../../assets/img/project-9.jpg">
														</a>
													</div>
													<div class="project-footer">
														<div class="d-flex align-items-center">
															<div class="pro-detail">
																<h3 class="pro-name">
																	Photoshoot 
																</h3>
																<p class="pro-designation">Web design</p>
															</div>
															<div class="view-image">
																<router-link to="/project"><i class="fas fa-arrow-right"></i></router-link>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
												<div class="project-widget">
													<div class="pro-image">		
														<a class="fancystyle" data-fancybox="gallery2">
															<img class="img-fluid" alt="User Image" src="../../../../assets/img/project-10.jpg">
														</a>
													</div>
													<div class="project-footer">
														<div class="d-flex align-items-center">
															<div class="pro-detail">
																<h3 class="pro-name">
																	Electrical 
																</h3>
																<p class="pro-designation">Web design</p>
															</div>
															<div class="view-image">
																<router-link to="/project"><i class="fas fa-arrow-right"></i></router-link>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-sm-6 col-md-6 col-lg-4 col-xl-3">
												<div class="project-widget">
													<div class="pro-image">		
														<a class="fancystyle" data-fancybox="gallery2">
															<img class="img-fluid" alt="User Image" src="../../../../assets/img/project-11.jpg">
														</a>
													</div>
													<div class="project-footer">
														<div class="d-flex align-items-center">
															<div class="pro-detail">
																<h3 class="pro-name">
																	Project name 
																</h3>
																<p class="pro-designation">Web design</p>
															</div>
															<div class="view-image">
																<router-link to="/project"><i class="fas fa-arrow-right"></i></router-link>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div class="col-md-12">
												<router-link to="/project" class="btn more-btn">View more </router-link>
											</div>
										</div>
									</div>
								</div>
								<!-- /Project Tab Content -->
								
								<!-- Experience Tab Content -->
								<div class="pro-post project-widget widget-box develop-experiance" id="experience">
									<h3 class="pro-title">Experience</h3>
									<div class="pro-content">
										<div class="row">
											<div class="col-lg-4 col-md-6 d-flex">
												<div class="experiance-list">
													<div class="experiance-logo d-flex align-items-center justify-content-center">
														<img class="img-fluid" alt="" src="../../../../assets/img/icon/icon-10.png">
													</div>
													<h4>Logo Designer</h4>
													<h5>Techline <br> July 9, 2018 - March 18, 2021</h5>
													<p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 d-flex">
												<div class="experiance-list">
													<div class="experiance-logo d-flex align-items-center justify-content-center">
														<img class="img-fluid" alt="" src="../../../../assets/img/icon/icon-10.png">
													</div>
													<h4>UI Designer</h4>
													<h5>Techline <br> May 10, 2020 - March 10, 2022</h5>
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
												</div>
											</div>
											<div class="col-lg-4 col-md-6 d-flex">
												<div class="experiance-list">
													<div class="experiance-logo d-flex align-items-center justify-content-center">
														<img class="img-fluid" alt="" src="../../../../assets/img/icon/icon-10.png">
													</div>
													<h4>UX Designer</h4>
													<h5>Techline <br> Sep 10, 2018 - Jan 18, 2020</h5>
													<p>Lorem ipsum dolor sit amet ,nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- /Experience Tab Content -->
								
								<!-- Educational Tab Content -->
								<div class="pro-post project-widget widget-box" id="education">
									<h3 class="pro-title">Educational Details</h3>
									<div class="pro-content">
										<div class="row">
											<div class="col-lg-6 col-md-6 d-flex">
												<div class="experiance-list">
													<div class="experiance-logo logo-bg d-flex align-items-center justify-content-center">
														<img class="img-fluid" alt="" src="../../../../assets/img/icon/icon-11.png">
													</div>
													<h4>Bachelor of Science in Game Programming & Development</h4>
													<h5>Hampshire University January 12, 2015 - January 19, 2019</h5>
													<p>Graphic Designing artworks through making plans and utilizing the helpful analysis of companions, educators, and bosses to improve those plans. Careful discipline brings about promising results, and the capacity to acknowledge and gain from analysis from peers and even the purchaser everywhere is pivotal for accomplishment in this field.</p>
												</div>
											</div>
											<div class="col-lg-6 col-md-6 d-flex">
												<div class="experiance-list">
													<div class="experiance-logo logo-bg d-flex align-items-center justify-content-center">
														<img class="img-fluid" alt="" src="../../../../assets/img/icon/icon-11.png">
													</div>
													<h4>Master in Gaming STudi Design</h4>
													<h5>Techline  July 9, 2018 - March 18, 2021</h5>
													<p>I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- /Educational Tab Content -->
								
								<!-- Technical Tab Content -->
								<div class="pro-post project-widget widget-box technical-skill" id="skill">
									<h3 class="pro-title">Technical Skills</h3>
									<div class="pro-content">
										<div class="tags">
										<span class="badge badge-pill badge-skills">+ Web Design</span>
										<span class="badge badge-pill badge-skills">+ UI Design</span>
										<span class="badge badge-pill badge-skills">+ Node Js</span>
										<span class="badge badge-pill badge-skills">+ Javascript</span>
										</div>
									</div>
								</div>								
								<!-- /Technical Tab Content -->
								
								<!-- Feedback Tab Content -->
								<div class="pro-post author-widget clearfix develop-feedback" id="feedback">
									<div class="widget-title-box clearfix d-flex">
										<h3 class="pro-title mb-0">Feedbacks</h3>
										<router-link to="/review" class="feedback-view">View All</router-link>
									</div>
									<div class="about-author">
										<div class="about-author-img">
											<div class="author-img-wrap">
												<router-link to="/company-profile"><img class="img-fluid" alt="" src="../../../../assets/img/img-03.jpg"></router-link>
											</div>
										</div>
										<div class="author-details">
											<router-link to="/company-profile" class="blog-author-name">Logo Designer</router-link>
											<h6>Techline  July 9, 2018 - March 18, 2021</h6>
											<p class="mb-0">I am a professional graphic designer. I have more than 10-years of experience in graphics design. If you are looking for any graphic related work, contact me, I'll glad to help you.</p>
										</div>
									</div>
									<div class="about-author">
										<div class="about-author-img">
											<div class="author-img-wrap">
												<router-link to="/company-profile"><img class="img-fluid" alt="" src="../../../../assets/img/img-02.jpg"></router-link>
											</div>
										</div>
										<div class="author-details">
											<router-link to="/company-profile" class="blog-author-name">Web Designer</router-link>
											<h6>Techline  July 9, 2018 - March 18, 2021</h6>
											<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
										</div>
									</div>
									<div class="about-author">
										<div class="about-author-img">
											<div class="author-img-wrap">
												<router-link to="/company-profile"><img class="img-fluid" alt="" src="../../../../assets/img/img-03.jpg"></router-link>
											</div>
										</div>
										<div class="author-details">
											<router-link to="/company-profile" class="blog-author-name">UX Designer</router-link>
											<h6>Techline  July 9, 2018 - March 18, 2021</h6>
											<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
										</div>
									</div>
									<div class="about-author">
										<div class="about-author-img">
											<div class="author-img-wrap">
												<router-link to="/company-profile"><img class="img-fluid" alt="" src="../../../../assets/img/img-04.jpg"></router-link>
											</div>
										</div>
										<div class="author-details">
											<router-link to="/company-profile" class="blog-author-name">Php Developer</router-link>
											<h6>Techline  July 9, 2018 - March 18, 2021</h6>
											<p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis</p>
										</div>
									</div>
								</div>								
								<!-- /Feedback Tab Content -->
								
							</div>
						</div>
					
						<!-- Blog Sidebar -->
						<freelancerdevelopersidebar></freelancerdevelopersidebar>
						<!-- /Blog Sidebar -->
						
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