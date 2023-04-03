<template>
<div class="home-page body-two">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
		
        <!-- Start Navigation -->
			
        <!-- Header -->
			<header class="header header-two">
				<nav class="navbar navbar-expand-lg header-nav">
					<div class="container head-border">
						<div class="navbar-header">
							<a id="mobile_btn" href="javascript:void(0);">
								<span class="bar-icon">
									<span></span>
									<span></span>
									<span></span>
								</span>
							</a>
							<router-link to="/index" class="navbar-brand logo">
								<img src="../../assets/img/logo-two.png" class="img-fluid" alt="Logo">
                            </router-link>
						</div>
						<div class="main-menu-wrapper">
							<div class="menu-header">
								<router-link to="/index" class="menu-logo">
									<img src="../../assets/img/logo-two.png" class="img-fluid" alt="Logo">
                                </router-link>
								<a id="menu_close" class="menu-close" href="javascript:void(0);">
									<i class="fas fa-times"></i>
								</a>
							</div>
							<ul class="main-nav main-two">
								<li class="active has-submenu">
									<router-link to="/index">Home <i class="fas fa-chevron-down"></i></router-link>
									<ul class="submenu">
										<li><router-link to="/index">Home</router-link></li>
										<li class="active"><router-link to="/index-two">Home 2</router-link></li>
										<li><router-link to="/index-three">Home 3</router-link></li>
										<li><router-link to="/index-four">Home 4</router-link></li>
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
						<ul class="nav header-navbar-rht">												
							<li><router-link to="/register" class="reg-btn d-flex align-items-center"><div class="register-bg"><i class="fas fa-user"></i></div> Register</router-link></li>
							<li><router-link to="/login" class="log-btn d-flex align-items-center"><div class="login-bg"><i class="fas fa-lock"></i></div> Login</router-link></li>
							<li ><router-link to="/post-project" class="login-btn btn">Post a Project </router-link></li>
						</ul>
					</div>
				</nav>
			</header>
			<!-- /Header -->		

			<!-- Home Banner -->
			<section class="section home-banner row-middle home-two">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-8 col-lg-7">
							<div class="banner-content aos" data-aos="fade-up">
								<h1>Get the perfect <span class="orange-text">Developers & Projects</span> every time</h1>
								<p>With the world's #1 Developers marketplace</p>
								<form class="form"  name="store" id="store" action="project">
									<div class="form-inner">
										<div class="input-group">
											<i class='fas fa-search icon-search'></i>
											<input type="email" class="form-control" placeholder="Search here">
											<span class="drop-detail">
												<select class="form-control select" name="storeID">
													<option value="developer">Freelancers</option>
													<option value="project">Projects</option>
												</select>
											</span>
											<button class="btn btn-primary sub-btn" type="submit">Search Now</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div class="col-md-4 col-lg-5">
							<div class="banner-img aos" data-aos="fade-up">
								<img src="../../assets/img/object-02.png" class="img-fluid" alt="banner">
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Home Banner -->
	
			<!-- Our Feature -->
			<section class="section feature feature-two">
				<div class="feature-position">
					<div class="container">
						<div class="row justify-content-center">					
									
							<!-- Feature Item -->
							<div class="col-lg-4 col-md-6">
								<div class="feature-item freelance-count aos" data-aos="fade-up">
									<div class="feature-group d-flex align-items-center justify-content-center">
										<div class="feature-icon">
											<img src="../../assets/img/icon/feature-icon-01.svg" class="img-fluid" alt="">
										</div>
										<div class="feature-content">
											<h3>919,207</h3>
										</div>
									</div>
									<div class="feature-bottom">
										<p>freelance Developers</p>
									</div>
								</div>
							</div>
							<!-- /Feature Item -->
							
							<!-- Feature Item -->
							<div class="col-lg-4 col-md-6">
								<div class="feature-item feature-bg aos" data-aos="fade-up">
									<div class="feature-group d-flex align-items-center justify-content-center">
										<div class="feature-icon">
											<img src="../../assets/img/icon/feature-icon-02.svg" class="img-fluid" alt="">
										</div>
										<div class="feature-content">
											<h3>25 - 100+</h3>
										</div>
									</div>
									<div class="feature-bottom feature-border">
										<p>Developers per project</p>
									</div>
								</div>
							</div>
							<!-- /Feature Item -->
							
							<!-- Feature Item -->
							<div class="col-lg-4 col-md-6">
								<div class="feature-item comp-project aos" data-aos="fade-up">
									<div class="feature-group d-flex align-items-center justify-content-center">
										<div class="feature-icon">
											<img src="../../assets/img/icon/feature-icon-03.svg" class="img-fluid" alt="">
										</div>
										<div class="feature-content">
											<h3>388,615</h3>
										</div>
									</div>
									<div class="feature-bottom">
										<p>completed projects</p>
									</div>
								</div>
							</div>
							<!-- /Feature Item -->									
													
						</div>
					</div>
				</div>
			</section>	
			<!-- /Our Feature -->			
			
			<!--- Developed Project  -->
			<section class="section develope-project">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-md-6 d-flex align-items-center">
							<div class="need-project aos" data-aos="fade-up">
								<h2>I NEED A <span>DEVELOPED</span> PROJECT</h2>
								<p>Get the perfect Developed project for your budget from our creative community.</p>
								<div class="learn-more">
									<router-link to="/project" class="btn btn-primary">Learn More</router-link>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="pro-ject-img aos" data-aos="fade-up">
								<img src="../../assets/img/project-01.png" alt="">
								<div class="project-position">
									<div class="rating mapgridrating1">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
									</div>
									<span>5.0</span>
									<p>TRUSED BY OVER <br> 2M+ USERS</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 d-flex align-items-center">
							<div class="need-project want-work aos" data-aos="fade-up">
								<h2>I WANT <span>TO Work</span></h2>
								<p>Do you want to earn money, find unlimited clients and build your freelance career?</p>
								<div class="learn-more">
									<router-link to="/developer" class="btn btn-primary">Learn More</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--- /Developed Project  -->
			
			<!-- Projects -->
			<section class="section projects projects-two">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-12 mx-auto">
							<div class="section-header section-header-two text-left aos" data-aos="fade-up">
								<h2 class="header-title">Get Inspired<br> By <span>Development</span> Projects</h2>
								<div class="all-see project-all d-flex align-items-center">
									<router-link to="/project" class="btn btn-primary">See All Projects</router-link>
								</div>
							</div>
							<div class="section-text aos" data-aos="fade-up">
								<p>High Performing Solutions To Your</p>
							</div>
						</div>
					</div>
					<div class="row">
						
						<!--- Project Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-06.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>ANDROID APPS</router-link></h5>
											<div class="count-number">
												<h4>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>ANDROID APPS</router-link></h5>
											<div class="count-number">
												<h4>30</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-07.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>LARAVEL</router-link></h5>
											<div class="count-number">
												<h4>45</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>DEVELOPERS</router-link></h5>
											<div class="count-number">
												<h4>15</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project-Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-08.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>REACT</router-link></h5>
											<div class="count-number">
												<h4>20</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>DEVELOPERS</router-link></h5>
											<div class="count-number">
												<h4>12</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-09.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>GOLANG</router-link></h5>
											<div class="count-number">
												<h4>22</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>DEVELOPERS</router-link></h5>
											<div class="count-number">
												<h4>10</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-10.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>.NET</router-link></h5>
											<div class="count-number">
												<h4>14</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>DEVELOPERS</router-link></h5>
											<div class="count-number">
												<h4>14</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-11.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>JAVA</router-link></h5>
											<div class="count-number">
												<h4>24</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>DEVELOPERS</router-link></h5>
											<div class="count-number">
												<h4>21</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-06.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>ANGULAR</router-link></h5>
											<div class="count-number">
												<h4>45</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>DEVELOPERS</router-link></h5>
											<div class="count-number">
												<h4>20</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Project Item  -->
						
						<!--- Project-Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6">
							<div class="project-item aos" data-aos="fade-up">
								<div class="project-img">
									<router-link to="/project"><img src="../../assets/img/project/project-07.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center">
									<div class="develope-group">
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-folder"></i>PYTHON</router-link></h5>
											<div class="count-number">
												<h4>35</h4>
											</div>
										</div>
										<div class="inspired-group d-flex">
											<h5><router-link to="/project"><i class="fas fa-user-friends"></i>DEVELOPERS</router-link></h5>
											<div class="count-number">
												<h4>23</h4>
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
		
			<!-- Most Hired Developers -->
			<section class="section projects most-hired">
				<div class="container">
					<div class="row">
						<div class="col-12 col-md-12 mx-auto">
							<div class="section-header section-header-two text-left aos" data-aos="fade-up">
								<h2 class="header-title">Most Hired <br><span>Developers</span></h2>
								<div class="all-see develop-all d-flex align-items-center">
									<router-link to="/developer-details" class="btn btn-primary">See All Developers</router-link>
								</div>
							</div>
							<div class="section-text aos" data-aos="fade-up">
								<p>Work with talented people at the most affordable price</p>
							</div>
						</div>
					</div>
					<div class="row">
						
						<!--- Developers Team  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-13.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$30 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><router-link to="/developer-details">George Wells <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">UI/UX Designer</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Alabama, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
						<!--- Developers Team  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-14.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$45 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><router-link to="/developer-details">Timothy Smith <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">PHP Developer</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Illinois, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star "></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.3 (22)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
						<!--- Developers Team  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-15.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$25 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><router-link to="/developer-details">Janet Paden <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">Graphic Designer</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Alabama, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
						<!--- Developers Team  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-16.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$30 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><router-link to="/developer-details">James Douglas <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">iOS Developer</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>iOS Developer</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star "></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.2 (32)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
						<!--- Project Item  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-17.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$15 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><a href="javascript:void(0);">Floyd Lewis <i class="fas fa-check-circle"></i></a></h3>
										<div class="freelance-specific">SEO Developer</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Alabama, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
						<!--- Developers Team  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-18.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$34 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><router-link to="/developer-details">Jacqueline Daye <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">SM Developer</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>California, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<span class="average-rating">4.9 (34)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
						<!--- Developers Team  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-19.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$65 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><router-link to="/developer-details">Tony Ingle <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">Business Analyst</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Missouri, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star "></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">3.7 (22)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
						<!--- Developers Team  -->
						<div class="col-lg-3 col-md-6 col-sm-6 d-flex">
							<div class="project-item group-project aos" data-aos="fade-up">
								<a href="#rating" class="favourite team-star"><i class="fas fa-star"></i></a>
								<div class="project-img">
									<router-link to="/developer-details"><img src="../../assets/img/user/avatar-20.jpg" alt="" class="img-fluid"></router-link>
								</div>
								<div class="d-flex justify-content-between align-items-center hour-position">
									<div class="hour-price">
										<h5>$23 <span>Hourly</span></h5>
									</div>
									<div class="freelance-info team-group">
										<h3><router-link to="/developer-details">Kathleen Kaiser <i class="fas fa-check-circle"></i></router-link></h3>
										<div class="freelance-specific">IT Project Manager</div>
										<div class="freelance-location"><svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>Kansas, USA</div>
										<div class="rating mapgridrating1">
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star filled"></i>
											<i class="fas fa-star"></i>
											<span class="average-rating">4.7 (32)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!--- /Developers Team  -->
						
					</div>
				</div>
			</section>
			<!-- /Most Hired Developer -->
		
			<!-- Review -->
			<section class="section testimonial-section review review-two">
				<div class="container">
					<div class="row">
						<div class="col-12">
							<div class="section-header review-head text-left aos" data-aos="fade-up">
								<h2 class="header-title">Top <span>Reviews</span></h2>
								<p>High Performing Developers To Your</p>
							</div>
						</div>
					</div>

				<div id="testimonial-two" class="testimonial-two testimonial-slider1 slider  aos" data-aos="fade-up">
							
					<!-- Review Widget -->
					<div class="review-blog review-two-blog">
						<div class="row">
							<div class="col-lg-3 col-md-3">
								<div class="review-img">
									<router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-01.jpg" alt="Post Image"></router-link>
								</div>
							</div>
							<div class="col-lg-9 col-md-9">
								<div class="review-info">
									<h3><router-link to="/review">Hannah Schmitt</router-link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>
									<span>May 8, 2020</span>
								</div>
							</div>
						</div>
					</div>
					<!-- / Review Widget -->
					
					<!-- Review Widget -->
					<div class="review-blog review-two-blog">
						<div class="row">
							<div class="col-lg-3 col-md-3">
								<div class="review-img">
									<router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-02.jpg" alt="Post Image"></router-link>
								</div>
							</div>
							<div class="col-lg-9 col-md-9">
								<div class="review-info">
									<h3><router-link to="/review">Davis Payerf</router-link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>
									<span>Jun 18, 2022</span>
								</div>
							</div>
						</div>
					</div>
					<!-- /Review Widget -->
					
					<!-- Review Widget -->
					<div class="review-blog review-two-blog">
						<div class="row">
							<div class="col-lg-3 col-md-3">
								<div class="review-img">
									<router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-03.jpg" alt="Post Image"></router-link>
								</div>
							</div>
							<div class="col-lg-9 col-md-9">
								<div class="review-info">
									<h3><router-link to="/review">Hannah Schmitt</router-link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>
									<span>May 10, 2021</span>
								</div>
							</div>
						</div>
					</div>
					<!-- /Review Widget -->
					
					<!-- Review Widget -->
					<div class="review-blog review-two-blog">
						<div class="row">
							<div class="col-lg-3 col-md-3">
								<div class="review-img">
									<router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-02.jpg" alt="Post Image"></router-link>
								</div>
							</div>
							<div class="col-lg-9 col-md-9">
								<div class="review-info">
									<h3><router-link to="/review">Davis Payerf</router-link></h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse </p>
									<span>Feb 20, 2022</span>
								</div>
							</div>
						</div>
					</div>
					<!-- /Review Widget -->
				</div>
				
				</div>
			</section>
			<!-- / Review -->
		
			<!-- News -->
			<section class="section news news-two">
				<div class="container">				
					<div class="row">
						<div class="col-12">
							<div class="section-header section-header-two text-left aos" data-aos="fade-up">
								<h2 class="header-title">Feature <span>Blog</span></h2>
								<div class="all-see blogs-all d-flex align-items-center">
									<router-link to="/blog-details" class="btn btn-primary">See All Blogs</router-link>
								</div>
							</div>
							<div class="section-text aos" data-aos="fade-up">
								<p>High Performing Developers To Your</p>
							</div>
						</div>
					</div>
					<div>	
						<div class="row blog-grid-row justify-content-center">
							<div class="col-lg-4 col-md-6 d-flex">
							
								<!-- Blog Post -->
								<div class="blog group-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-07.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<div class="hour-price">
											<h5><i class='far fa-clock'></i> 10 Oct 2021</h5>
										</div>
										<h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here</router-link></h3>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
										<div class="all-see more-read">
											<router-link to="/blog-details" class="btn btn-primary">Readmore</router-link>
										</div>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>
							<div class="col-lg-4 col-md-6 d-flex">
							
								<!-- Blog Post -->
								<div class="blog group-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-08.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<div class="hour-price">
											<h5><i class='far fa-clock'></i> 30 Jun 2021</h5>
										</div>
										<h3 class="blog-title"><router-link to="/blog-details">People who completed NAND?</router-link></h3>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
										<div class="all-see more-read">
											<router-link to="/blog-details" class="btn btn-primary">Readmore</router-link>
										</div>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>
							<div class="col-lg-4 col-md-6 d-flex">
							
								<!-- Blog Post -->
								<div class="blog group-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-09.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<div class="hour-price">
											<h5><i class='far fa-clock'></i> 20 Feb 2021</h5>
										</div>
										<h3 class="blog-title"><router-link to="/blog-details">Kofejob - How to get job through online?</router-link></h3>
										<p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
										<div class="all-see more-read">
											<router-link to="/blog-details" class="btn btn-primary">Readmore</router-link>
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
			
			<!-- Subscibe -->	
			<section class="get-discount">
				<div class="container">
					<div class="discount-group">
						<div class="row">
							<div class="col-lg-8 d-flex align-items-center justify-content-center">
								<div class="head-subscibe aos" data-aos="fade-up">
									<h2>Subscribe To Get Discounts, Updates & More</h2>
									<p>Monthly product updates, industry news and more!</p>
									<div class="banner-content discount-box">
										<form class="form">
											<div class="form-inner">
												<div class="input-group all-see">
													<input type="email" class="form-control" placeholder="Enter Email Address">
                                                    <router-link to="/project">
													<button class="btn btn-primary sub-btn" type="submit">Search Now</button>
                                                </router-link>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="discount-img aos" data-aos="fade-up">
									<img src="../../assets/img/discount.png"  alt="Logo">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Subscibe -->	
			
			<!-- Footer -->	
			<footer class="footer footer-two">
				<div class="footer-top aos" data-aos="fade-up">
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-md-6">
								<div class="logo-footer">
									<router-link to="/index" class="navbar-brand logo">
										<img src="../../assets/img/logo-two.png" class="img-fluid" alt="Logo">
                                    </router-link>
								</div>
								<div class="footer-address">
									<div class="off-address">
										<p >New York, USA (HQ)</p>
										<address class="mb-0"><i class="fas fa-map-marker-alt"></i>750 Sing Sing Rd, Horseheads, NY, 14845</address>
										<p><i class="fas fa-phone-alt"></i><a href="javascript:void(0);"><span>469-537-2410</span> (Toll-free)</a> </p>
									</div>
									<div class="off-address">
										<p>Sydney, Australia </p>
										<address class="mb-0"><i class="fas fa-map-marker-alt"></i>24 Farrar Parade COOROW WA 6515</address>
										<p><i class="fas fa-phone-alt"></i><a href="javascript:void(0);"><span>(08) 9064 9807</span> (Toll-free)</a> </p>
									</div>
								</div>
								<div class="social-icon one-icon">
									<ul>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-instagram"></i> </a></li>
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
								<div class="col-md-12">
									<div class="copyright-text">
										<p class="mb-0"> © 2021-2022, All Rights Reserved</p>
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
        if($('.select').length > 0) {
		$('.select').select2({
			minimumResultsForSearch: -1,
			width: '100%'
		});
	}
        if($('.testimonial-slider1').length > 0) {
		$('.testimonial-slider1').slick({
			autoplay:false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 776,
					settings: {
						slidesToShow: 1
				  	}
			},
			{
				breakpoint: 567,
					settings: {
						slidesToShow: 1
					}
			}]
		});
	}

        if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
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