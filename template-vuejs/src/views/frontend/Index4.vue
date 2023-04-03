<template>
<div class="home-page body-four">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
		
        <!-- Header -->
			<header class="header header-four">
				<nav class="navbar navbar-expand-lg header-nav">
					<div class="container">
						<div class="navbar-header">
							<a id="mobile_btn" href="javascript:void(0);">
								<span class="bar-icon">
									<span></span>
									<span></span>
									<span></span>
								</span>
							</a>
							<router-link to="/index" class="navbar-brand logo">
								<img src="../../assets/img/logo-four.png" class="img-fluid" alt="Logo">
                            </router-link>
						</div>
						<div class="main-menu-wrapper">
							<div class="menu-header">
								<router-link to="/index" class="menu-logo">
									<img src="../../assets/img/logo-four.png" class="img-fluid" alt="Logo">
                                </router-link>
								<a id="menu_close" class="menu-close" href="javascript:void(0);">
									<i class="fas fa-times"></i>
								</a>
							</div>
							<ul class="main-nav">
								<li class="active has-submenu">
									<router-link to="/index">Home <i class="fas fa-chevron-down"></i></router-link>
									<ul class="submenu">
										<li><router-link to="/index">Home</router-link></li>
										<li><router-link to="/index-two">Home 2</router-link></li>
										<li><router-link to="/index-three">Home 3</router-link></li>
										<li class="active"><router-link to="/index-four">Home 4</router-link></li>
										<li><router-link to="/index-five">Home 5</router-link></li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="">For Employers<i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li class="has-submenu">
											<a href="javascript:void(0);">Freelancer</a>
											<ul class="submenu">
												<li><router-link to="/developer">Freelancer</router-link></li>
												<li><router-link to="/developer-details">Freelancer Details</router-link></li>
											</ul>
										</li>
										<li><router-link to="/dashboard">Dashboard</router-link></li>	
										<li><router-link to="/company-profile">My Profile</router-link></li>	
										<li><router-link to="/company-details">Company Details</router-link></li>	
										<li><router-link to="/manage-projects">Projects</router-link></li>
										<li><router-link to="/favourites">Favourites</router-link></li>
										<li><router-link to="/membership-plans">Membership</router-link></li>
										<li><router-link to="/milestones">Milestones</router-link></li>
										<li><router-link to="/chats">Chats</router-link></li>
										<li><router-link to="/review">Review</router-link></li>			
										<li><router-link to="/deposit-funds">Payments</router-link></li>							
										<li><router-link to="/verify-identity">Verify Identity</router-link></li>								
										<li><router-link to="/profile-settings">Settings</router-link></li>								
									</ul>
								</li>
								<li class="has-submenu">
									<a href="">For Freelancer<i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li class="has-submenu">
											<a href="javascript:void(0);">Projects</a>
											<ul class="submenu">
												<li><router-link to="/project">Projects</router-link></li>
												<li><router-link to="/project-details">Project Details</router-link></li>
											</ul>
										</li>
										<li><router-link to="/freelancer-dashboard">Dashboard</router-link></li>	
										<li><router-link to="/developer-profile">My Profile</router-link></li>	
										<li><router-link to="/developer-details">Freelancer Details</router-link></li>
										<li><router-link to="/freelancer-project-proposals">Projects</router-link></li>
										<li><router-link to="/freelancer-favourites">Favourites</router-link></li>
										<li><router-link to="/freelancer-membership">Membership</router-link></li>
										<li><router-link to="/freelancer-change-password">Change Password</router-link></li>
										<li><router-link to="/freelancer-chats">Chats</router-link></li>
										<li><router-link to="/freelancer-review">Review</router-link></li>			
										<li><router-link to="/freelancer-withdraw-money">Payments</router-link></li>							
										<li><router-link to="/freelancer-verify-identity">Verify Identity</router-link></li>				
										<li><router-link to="/freelancer-profile-settings">Settings</router-link></li>				
									</ul>
								</li>
								<li class="has-submenu">
									<a href="">Pages <i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li><router-link to="/about">About us</router-link></li>
										<li><router-link to="/blank-page">Starter Page</router-link></li>
										<li><router-link to="/404-page">404 Page</router-link></li>
										<li class="has-submenu">
											<router-link to="/invoices">Invoices</router-link>
											<ul class="submenu">
												<li><router-link to="/freelancer-invoices">Invoices</router-link></li>
												<li><router-link to="/view-invoice">Invoice View</router-link></li>
											</ul>
										</li>
										<li><router-link to="/login">Login</router-link></li>
										<li><router-link to="/register">Register</router-link></li>
										<li><router-link to="/onboard-screen">Onboard Screen</router-link></li>
										<li><router-link to="/forgot-password">Forgot Password</router-link></li>
										<li><router-link to="/change-password">Change Password</router-link></li>									
									</ul>
								</li>
								<li class="has-submenu">
									<a href="">Blog <i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li><router-link to="/blog-list">Blog List</router-link></li>
										<li><router-link to="/blog-grid">Blog Grid</router-link></li>
										<li><router-link to="/blog-details">Blog Details</router-link></li>
									</ul>
								</li>
							</ul>
						</div>		
						<ul class="nav header-navbar-rht sign-page">
							<li><router-link to="/register" class="reg-btn"> Sign In</router-link></li>
							<li><img src="../../assets/img/key-01.png"  alt="Logo"></li>
							<li><router-link to="/login" class="log-btn"> Sign Up</router-link></li>
						</ul>						
						<ul class="nav header-navbar-rht text-center">	
							<li><router-link to="/post-project" class="btn login-btn">Post a Project </router-link></li>
						</ul>
					</div>
				</nav>
			</header>
			<!-- /Header -->		

			<!-- Home Banner -->
			<section class="section home-banner row-middle home-four">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-10 col-lg-8">
							<div class="market-place d-flex align-items-center">
								<div class="banner-content aos" data-aos="fade-up">
									<p>With the world's #1 Developers marketplace</p>
									<h1>Get the perfect <span class="orange-text">Developers & Projects</span> every time</h1>
									<form class="form"  name="store" id="store" action="project">
										<div class="form-inner">
											<div class="input-group">
												<div class="category-project">
													<label>Category</label>
													<span class="drop-detail">
														<select class="form-control select" name="storeID">
															<option value="project">Projects</option>
															<option value="developer">Freelancers</option>
														</select>
													</span>
												</div>
												<div class="what-search">
													<label>What</label>
													<input type="email" class="form-control" placeholder="Job title, keywords, or company">
												</div>
												<button class="btn btn-primary sub-btn" type="submit">Search Now</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->
	
			<!-- Our Feature -->
			<section class="section feature feature-four">
				<div class="container">
					<div class="row justify-content-center">					
								
						<!-- Feature Item -->
						<div class="col-xl-4 col-lg-6 col-md-6 d-flex">
							<div class="feature-item freelance-count aos" data-aos="fade-up">
								<div class="row">
									<div class="col">
										<div class="feature-content">
											<p>Freelance Developers</p>
											<h3>919,207</h3>
										</div>
									</div>
									<div class="col">
										<div class="feature-icon">
											<img src="../../assets/img/icon/feature-icon-04.png" class="img-fluid" alt="">
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- /Feature Item -->
						
						<!-- Feature Item -->
						<div class="col-xl-4 col-lg-6 col-md-6 d-flex">
							<div class="feature-item aos" data-aos="fade-up">
								<div class="row">
									<div class="col">
										<div class="feature-content">
											<p>Developers  per project</p>
											<h3>25 - 100+</h3>
										</div>
									</div>
									<div class="col ">
										<div class="feature-icon">
											<img src="../../assets/img/icon/feature-icon-04.svg" class="img-fluid" alt="">
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- /Feature Item -->
						
						<!-- Feature Item -->
						<div class="col-xl-4 col-lg-6 col-md-6 d-flex">
							<div class="feature-item comp-project aos" data-aos="fade-up">
								<div class="row">
									<div class="col">
										<div class="feature-content">
											<p>Completed Projects</p>
											<h3>388,615</h3>
										</div>
									</div>
									<div class="col ">
										<div class="feature-icon">
											<img src="../../assets/img/icon/feature-icon-05.svg" class="img-fluid" alt="">
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- /Feature Item -->									
												
					</div>
				</div>
			</section>	
			<!-- /Our Feature -->			
			
			<!--- Developed Project  -->
			<section class="section most-hired-four">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-6 d-flex">
							<div class="hired-group-four aos" data-aos="fade-up">
								<h2>I NEED A DEVELOPED PROJECT</h2>
								<div class="row">
									<div class="col-lg-6">
										<div class="perfect-four">
											<p>Get the perfect Developed project for your budget from our creative community.</p>
											<div class="more-learn">
												<router-link to="/project" class="btn btn-primary">Learn More</router-link>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="img-perfect">
											<img src="../../assets/img/project-04.png"  alt="">
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-6 col-md-6 d-flex">
							<div class="hired-group-four want-to-work aos" data-aos="fade-up">
								<h2>I WANT TO WORK</h2>
								<div class="row">
									<div class="col-lg-6">
										<div class="perfect-four">
											<p>Get the perfect Developed project for your budget from our creative community.</p>
											<div class="more-learn">
												<router-link to="/developer" class="btn btn-primary">Learn More</router-link>
											</div>
										</div>
									</div>
									<div class="col-lg-6">
										<div class="img-perfect">
											<img src="../../assets/img/project-05.png"  alt="">
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--- /Developed Project  -->
			
			<!-- Projects -->
			<section class="section projects projects-two projects-four">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-12 mx-auto">
							<ul class="dot-head aos" data-aos="fade-up">
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
							</ul>
							<div class="section-header section-header-two text-left aos" data-aos="fade-up">
								<h2 class="header-title">Get Inspired<br> By Development Projects</h2>
								<div class="browse-all d-flex align-items-center">
									<router-link to="/project" class="btn btn-primary">Browse All Projects <i class="fas fa-angle-right"></i></router-link>
								</div>
							</div>
							<div class="section-text aos" data-aos="fade-up">
								<p>High Performing Solutions To Your</p>
							</div>
						</div>
					</div>
					<div class="row">
						
						<!--- Project Item  -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-15.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">ANGULAR</router-link></h5>
											<div class="count-number count-pink">
												<h4><i class="fas fa-folder"></i>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">DEVELOPER</router-link></h5>
											<div class="count-number count-sky">
												<h4><i class="fas fa-user-friends"></i>30</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-16.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">JAVA</router-link></h5>
											<div class="count-number count-pink">
												<h4><i class="fas fa-folder"></i>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">DEVELOPER</router-link></h5>
											<div class="count-number count-sky">
												<h4><i class="fas fa-user-friends"></i>30</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project-Item  -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-17.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">PHP</router-link></h5>
											<div class="count-number count-pink">
												<h4><i class="fas fa-folder"></i>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">DEVELOPER</router-link></h5>
											<div class="count-number count-sky">
												<h4><i class="fas fa-user-friends"></i>30</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-17.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">REACT</router-link></h5>
											<div class="count-number count-pink">
												<h4><i class="fas fa-folder"></i>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">DEVELOPER</router-link></h5>
											<div class="count-number count-sky">
												<h4><i class="fas fa-user-friends"></i>30</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-18.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">LARAVEL</router-link></h5>
											<div class="count-number count-pink">
												<h4><i class="fas fa-folder"></i>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">DEVELOPER</router-link></h5>
											<div class="count-number count-sky">
												<h4><i class="fas fa-user-friends"></i>30</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-4 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-16.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">ANDROID APPS</router-link></h5>
											<div class="count-number count-pink">
												<h4><i class="fas fa-folder"></i>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project">DEVELOPER</router-link></h5>
											<div class="count-number count-sky">
												<h4><i class="fas fa-user-friends"></i>30</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
					</div>
				</div>
			</section>
			<!-- /Projects -->
		
			<!-- Subscribe -->
			<section class="section subscribe subscribe-four">
				<div class="container">
					<div class="discount-four aos" data-aos="fade-up">					
						<div class="row align-items-center">
							<div class="col-md-7"> 
								<div class="aos" data-aos="fade-up"> 
									<h3>Subscribe To Get Discounts, Updates & More</h3>
									<p>Monthly product updates, industry news and more!</p>
									<form action="#" method="POST">
										<div class="form-inner">
											<div class="input-group">
												<input type="email" class="form-control" placeholder="Enter Email Address">
												<button class="btn btn-primary sub-btn" type="submit">Search Now</button>
											</div>
										</div>
									</form>
								</div>
							</div>
							<div class="col-md-5"> 
								<div class="subscribe-image text-center aos" data-aos="fade-up">
									<img src="../../assets/img/subscribe-01.png" class="img-fluid" alt="subscribe">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- End Subscribe -->	
			
			<!-- Top Instructor -->
			<section class="section developer developer-four">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-12 mx-auto">
							<ul class="dot-head aos" data-aos="fade-up">
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
							</ul>
							<div class="section-header section-header-two text-left aos" data-aos="fade-up">
								<h2 class="header-title">Most Hired <br> Developers</h2>
								<div class="browse-all developer-all d-flex align-items-center">
									<router-link to="/developer-details" class="btn btn-primary">Browse All Developers <i class="fas fa-angle-right"></i></router-link>
								</div>
							</div>
							<div class="section-text aos" data-aos="fade-up">
								<p>Work with talented people at the most affordable price</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex ">
										<router-link to="/developer-details" class="sky"><i class="fas fa-circle"></i> Web design</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><router-link to="/developer-details">George Wells <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">UI/UX Designer</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-1.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$25</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex ">
										<router-link to="/developer-details" class="pink"><i class="fas fa-circle"></i> Angular</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><router-link to="/developer-details">Timothy Smith <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">PHP Developer</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-2.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$45</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex ">
										<router-link to="/developer-details" class="orange"><i class="fas fa-circle"></i> Node js</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><router-link to="/developer-details">Janet Paden <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">Graphic Designer</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Illinois, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-3.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$23</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex ">
										<router-link to="/developer-details" class="sky"><i class="fas fa-circle"></i> Web design</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><router-link to="/developer-details">James Douglas <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">iOS Developer</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Missouri, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star "></i>
											<i class="fas fa-star "></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">3.7 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-4.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$45</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex">
										<router-link to="/developer-details" class="sky"><i class="fas fa-circle"></i> Web design</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><router-link to="/developer-details">Floyd Lewis <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">SEO Developer</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.9 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-5.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$34</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex ">
										<router-link to="/developer-details" class="pink"><i class="fas fa-circle"></i> Angular</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><a href="javascript:void(0);">Jacqueline Daye  <i class="fas fa-check-circle"></i></a></h3>
										<div class="freelance-specific">SM Developer</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>California, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star "></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.2 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-6.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$45</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex ">
										<router-link to="/developer-details" class="orange"><i class="fas fa-circle"></i> Node js</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><a href="javascript:void(0);">Tony Ingle  <i class="fas fa-check-circle"></i></a></h3>
										<div class="freelance-specific">Business Analyst</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Missouri, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star "></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.3 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-7.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$15</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="freelance-widget aos" data-aos="fade-up">
								<div class="freelance-content">
									<div class="designation d-flex">
										<router-link to="/developer-details" class="sky"><i class="fas fa-circle"></i> Web design</router-link>
										<div class="mark-book d-flex align-items-center"><i class="far fa-bookmark"></i></div>
									</div>
									<div class="freelance-info">
										<h3><a href="javascript:void(0);">Kathleen Kaiser <i class="fas fa-check-circle"></i></a></h3>
										<div class="freelance-specific">UI/UX Designer</div>
										<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Kansas, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
									<div class="develop-bottom d-flex">
										<div class="user-four">
											<router-link to="/developer-details"><img src="../../assets/img/user/avatar-8.jpg" class="img-fluid" alt="subscribe"></router-link>
										</div>
										<h5><span>$25</span> Hourly</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>	
			</section>	
			<!-- /Top Instructor -->
			
			<!-- Say Review -->
			<section class="review-four">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<ul class="dot-head aos" data-aos="fade-up">
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
							</ul>
							<div class="section-header section-header-two text-left aos" data-aos="fade-up">
								<h2 class="header-title">Top Review</h2>
							</div>
							<div class="section-text aos" data-aos="fade-up">
								<p>High Performing Developers To Your</p>
							</div>
						</div>
					</div>
					<div class="slider say-about slider-for aos " data-aos="fade-up">
						<div>
							<div class="testimonial-all d-flex justify-content-center">
								<div class="row">
									<div class="col-lg-3">
										<div class="img-reviews">
											<div class="review-quote">
												<img src="../../assets/img/quote-01.svg" alt="">
											</div>
											<img src="../../assets/img/user/avatar-1.jpg" alt="">
										</div>
									</div>
									<div class="col-lg-9">
										<div class="testimonial-two-head ">
											<h3>George Wells</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu</p>
											<div class="review-date">
												<span >May 8, 2020</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div class="testimonial-all d-flex justify-content-center">
								<div class="row">
									<div class="col-lg-3">
										<div class="img-reviews">
											<div class="review-quote">
												<img src="../../assets/img/quote-01.svg" alt="">
											</div>
											<img src="../../assets/img/user/avatar-2.jpg" alt="">
										</div>
									</div>
									<div class="col-lg-9">
										<div class="testimonial-two-head ">
											<h3>Timothy Smith</h3>
											<p>Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. </p>
											<div class="review-date">
												<span >Jun 18, 2022</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>	
						<div>
							<div class="testimonial-all d-flex justify-content-center">
								<div class="row">
									<div class="col-lg-3">
										<div class="img-reviews">
											<div class="review-quote">
												<img src="../../assets/img/quote-01.svg" alt="">
											</div>
											<img src="../../assets/img/user/avatar-3.jpg" alt="">
										</div>
									</div>
									<div class="col-lg-9">
										<div class="testimonial-two-head ">
											<h3>Janet Paden</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu</p>
											<div class="review-date">
												<span >May 20, 2021</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>	
						<div>
							<div class="testimonial-all d-flex justify-content-center">
								<div class="row">
									<div class="col-lg-3">
										<div class="img-reviews">
											<div class="review-quote">
												<img src="../../assets/img/quote-01.svg" alt="">
											</div>
											<img src="../../assets/img/user/avatar-4.jpg" alt="">
										</div>
									</div>
									<div class="col-lg-9">
										<div class="testimonial-two-head ">
											<h3>James Douglas</h3>
											<p>Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. . Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu</p>
											<div class="review-date">
												<span >Jan 10, 2020</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>	
						<div>
							<div class="testimonial-all d-flex justify-content-center">
								<div class="row">
									<div class="col-lg-3">
										<div class="img-reviews">
											<div class="review-quote">
												<img src="../../assets/img/quote-01.svg" alt="">
											</div>
											<img src="../../assets/img/user/avatar-5.jpg" alt="">
										</div>
									</div>
									<div class="col-lg-9">
										<div class="testimonial-two-head ">
											<h3>Timothy Smith</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu</p>
											<div class="review-date">
												<span >May 8, 2020</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
				    </div>
					<div class=" slider client-img slider-nav aos " data-aos="fade-up">
						<div class="testimonial-thumb">
							<img src="../../assets/img/user/avatar-1.jpg" alt="">
						</div>
						<div class="testimonial-thumb">
							<img src="../../assets/img/user/avatar-2.jpg" alt="">
						</div>
						<div class="testimonial-thumb">
							<img src="../../assets/img/user/avatar-3.jpg" alt="">
						</div>
						<div class="testimonial-thumb">
							<img src="../../assets/img/user/avatar-4.jpg" alt="">
						</div>
						<div class="testimonial-thumb">
							<img src="../../assets/img/user/avatar-5.jpg" alt="">
						</div>
					</div>
				</div>
			</section> 
			<!-- /Say Review Two -->
		
			<!-- News -->
			<section class="section news news-four">
				<div class="container">				
					<div class="row">
						<div class="col-12">
							<ul class="dot-head aos" data-aos="fade-up">
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
								<li><i class="fas fa-circle"></i></li>
							</ul>
							<div class="section-header section-header-two text-left aos" data-aos="fade-up">
								<h2 class="header-title">Feature Blog</h2>
								<div class="browse-all all-browse d-flex align-items-center">
									<router-link to="/blog-details" class="btn btn-primary">Browse All <i class="fas fa-angle-right"></i></router-link>
								</div>
							</div>
							<div class="section-text aos" data-aos="fade-up">
								<p>High Performing Developers To Your</p>
							</div>
						</div>
					</div>
					<div>	
						<div class="row blog-grid-row">
							<div class="col-lg-3 col-md-6 d-flex">
							
								<!-- Blog Post -->
								<div class="blog grid-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-01.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<div class="designation d-flex">
											<a href="javascript:void(0);" class="sky"><i class="fas fa-circle"></i> Web design</a>
										</div>
										<h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here</router-link></h3>
										<ul class="entry-meta meta-item">
											<li> Aug 23, 2021</li>
										</ul>
										<div class="blog-read">
											<router-link to="/blog-details" class="btn btn-primary">Read More <i class="fas fa-angle-right"></i></router-link>
										</div>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>
							<div class="col-lg-3 col-md-6 d-flex">
							
								<!-- Blog Post -->
								<div class="blog grid-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-02.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<div class="designation d-flex">
											<a href="javascript:void(0);" class="pink"><i class="fas fa-circle"></i>Ui Design</a>
										</div>
										<h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here</router-link></h3>
										<ul class="entry-meta meta-item">
											<li> Aug 23, 2021</li>
										</ul>
										<div class="blog-read">
											<router-link to="/blog-details" class="btn btn-primary">Read More <i class="fas fa-angle-right"></i></router-link>
										</div>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>
							<div class="col-lg-3 col-md-6 d-flex">
							
								<!-- Blog Post -->
								<div class="blog grid-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-03.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<div class="designation d-flex">
											<a href="javascript:void(0);" class="orange"><i class="fas fa-circle"></i> Node js</a>
										</div>
										<h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here</router-link></h3>
										<ul class="entry-meta meta-item">
											<li> Aug 23, 2021</li>
										</ul>
										<div class="blog-read">
											<router-link to="/blog-details" class="btn btn-primary">Read More <i class="fas fa-angle-right"></i></router-link>
										</div>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>	
							<div class="col-lg-3 col-md-6">
							
								<!-- Blog Post -->
								<div class="blog grid-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-02.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<div class="designation d-flex">
											<a href="javascript:void(0);" class="sky"><i class="fas fa-circle"></i> Web design</a>
										</div>
										<h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here</router-link></h3>
										<ul class="entry-meta meta-item">
											<li> Aug 23, 2021</li>
										</ul>
										<div class="blog-read">
											<router-link to="/blog-details" class="btn btn-primary">Read More <i class="fas fa-angle-right"></i></router-link>
										</div>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>	
						</div>			
					</div>
				</div>
			</section>
			<!-- / News -->
			
			<!-- Footer -->	
			<footer class="footer footer-four">
				<div class="footer-top aos" data-aos="fade-up">
					<div class="container">

						<div class="row">
							<div class="col-lg-3 col-md-6">
								<div class="logo-footer">
									<router-link to="/index" class="navbar-brand logo">
										<img src="../../assets/img/logo-footer.png" class="img-fluid" alt="Logo">
                                    </router-link>
								</div>
								<div class="footer-address">
									<div class="off-address">
										<p class="mb-2">New York, USA (HQ)</p>
										<address class="mb-0">750 Sing Sing Rd, Horseheads, NY, 14845</address>
										<p><a href="javascript:void(0);"><span>469-537-2410</span> (Toll-free)</a> </p>
									</div>
									<div class="off-address">
										<p class="mb-2">Sydney, Australia </p>
										<address class="mb-0">24 Farrar Parade COOROW WA 6515</address>
										<p><a href="javascript:void(0);"><span>(08) 9064 9807</span> (Toll-free)</a> </p>
									</div>
								</div>
								<div class="social-icon">
									<ul>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-linkedin-in"></i> </a></li>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-twitter"></i> </a></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-2 col-md-6">
								<div class="footer-widget footer-menu">
									<h2 class="footer-title">Useful Links</h2>
									<ul>
										<li><router-link to="/about">About Us</router-link></li>
										<li><router-link to="/blog-list">Blog</router-link></li>
										<li><router-link to="/login">Login</router-link></li>
										<li><router-link to="/register">Register</router-link></li>
										<li><router-link to="/forgot-password">Forgot Password</router-link></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-2 col-md-6">
								<div class="footer-widget footer-menu">
									<h2 class="footer-title">Help & Support</h2>
									<ul>
										<li><router-link to="/chats">Chat</router-link></li>
										<li><router-link to="/faq">Faq</router-link></li>
										<li><router-link to="/review">Reviews</router-link></li>
										<li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
										<li><router-link to="/term-condition">Terms of use</router-link></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-2 col-md-6">
								<div class="footer-widget footer-menu">
									<h2 class="footer-title">Other Links</h2>
									<ul>
										<li><router-link to="/freelancer-dashboard">Freelancers</router-link></li>
										<li><router-link to="/freelancer-portfolio">Freelancer Details</router-link></li>
										<li><router-link to="/project">Project</router-link></li>
										<li><router-link to="/project-details">Project Details</router-link></li>
										<li><router-link to="/post-project">Post Project</router-link></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
								<div class="footer-widget footer-menu">
									<h2 class="footer-title">Mobile Application</h2>
									<p>Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
									<div class="row g-2">
										<div class="col">
											<a href="javascript:void(0);"><img class="img-fluid" src="../../assets/img/app-store.svg" alt="app-store"></a>
										</div>
										<div class="col">
											<a href="javascript:void(0);"><img class="img-fluid" src="../../assets/img/google-play.svg" alt="google-play"></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /Footer Top -->
				
				<!-- Footer Bottom -->
                <div class="footer-bottom">
					<div class="container">
					
						<!-- Copyright -->
						<div class="copyright">
							<div class="row">
								<div class="col-md-12 col-lg-12">
									<div class="copyright-text text-center">
										<p class="mb-0">&copy; 2022 All Rights Reserved</p>
									</div>
								</div>
							</div>
						</div>
						<!-- /Copyright -->						
					</div>
				</div>
				<!-- /Footer Bottom -->				
			</footer>
			<!-- /Footer -->

        </div>
        <!-- /Main Wrapper -->
        </div>
</template>
<script>
    import AOS from 'aos';
export default {
     mounted() {
        if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}
    if($('.say-about.slider-for').length > 0) {
		$('.say-about.slider-for').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.client-img.slider-nav'
		});																										
	}
    if($('.client-img.slider-nav').length > 0) {
		$('.client-img.slider-nav').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.say-about.slider-for',
			dots: false,
			arrows: false,
			centerMode: true,
			focusOnSelect: true
			
		});
	}
    if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}

        $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header").removeClass("sticky");
        } else {
            $(".header").addClass("sticky");
        }
    });   
    $('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});

        $(document).on('click', '#mobile_btn', function() {
            $('main-wrapper').toggleClass('slide-nav');
            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            return false;
	    });
	
        $(document).on('click', '.sidebar-overlay', function() {
            $('html').removeClass('menu-opened');
            $(this).removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
        $('.main-nav > li .submenu li.sub-menu').on('click', function(e) {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
		$('.main-nav li .home-nav').click(function(){
            $("html").removeClass('menu-opened');         
            $(".sidebar-overlay").removeClass('opened');
        }); 
        $(".categories_title").on("click", function() {
            $(this).toggleClass('active');
            $('.categories_menu_toggle').slideToggle('medium');
        });
        $(document).on('click', '#menu_close', function() {
            $('html').removeClass('menu-opened');
            $('.sidebar-overlay').removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
    
    },
}
</script>