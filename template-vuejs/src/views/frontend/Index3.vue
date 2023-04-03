<template>
<div class="home-page body-three">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
		
        <!-- Start Navigation -->
			<!-- Header -->
			<header class="header header-three">
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
								<img src="../../assets/img/logo-three.png" class="img-fluid" alt="Logo">
                            </router-link>
						</div>
						<div class="main-menu-wrapper">
							<div class="menu-header">
								<router-link to="/index" class="menu-logo">
									<img src="../../assets/img/logo-three.png" class="img-fluid" alt="Logo">
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
										<li class="active"><router-link to="/index-three">Home 3</router-link></li>
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
							<li><router-link to="/register" class="reg-btn"> Register</router-link></li>
							<li><router-link to="/login" class="log-btn btn">Login</router-link></li>
							<li><router-link to="/post-project" class="login-btn btn">Post a Project </router-link></li>
						</ul>
					</div>
				</nav>
			</header>
			<!-- /Header -->		

			<!-- Home Banner -->
			<section class="section home-banner row-middle home-three">
				<div class="container">
					<div class="row align-items-center">
						<div class="col-md-8 col-lg-7 ">
							<div class="get-the-project d-flex align-items-center">
								<div class="banner-content aos" data-aos="fade-up">
									<div class="rating d-flex mapgridrating1">
										<i class="fas fa-star checked"></i>
										<i class="fas fa-star checked"></i>
										<i class="fas fa-star checked"></i>
										<i class="fas fa-star checked"></i>
										<i class="fas fa-star checked"></i>
									</div>
									<h5>TRUSTED BY OVER 2M+ USERS</h5> 
									<h1>Get the perfect <span class="orange-text">Developers & Projects</span></h1>
									<form class="form"  name="store" id="store" action="project">
										<div class="form-inner">
											<div class="input-group">
												<span class="drop-detail">
													<select class="form-control select" name="storeID">
														<option value="project">Projects</option>
														<option value="developer">Freelancers</option>
													</select>
												</span>
												<input type="email" class="form-control" placeholder="Search here">
												<button class="btn btn-primary sub-btn" type="submit">Search</button>
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
	
			<!--- Developed Project  -->
			<section class="work-three">
				<div class="need-position">
					<div class="container">
						<div class="work-three-widget">
							<div class="row">
								<div class="col-lg-3 col-md-6">
									<div class="perfect-group aos" data-aos="fade-up">
										<h2>I NEED A DEVELOPED PROJECT</h2>
										<p>Get the perfect Developed project for your budget from our creative community.</p>
										<div class="view-face">
											<router-link to="/project" class="btn btn-primary"><i class='fas fa-arrow-right'></i></router-link>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 d-flex align-items-end">
									<div class="perfect-img aos" data-aos="fade-up">
										<img src="../../assets/img/project-02.png"  alt="">
									</div>
								</div>
								<div class="col-lg-3 col-md-6">
									<div class="perfect-group work-to aos" data-aos="fade-up">
										<h2>I WANT TO WORK</h2>
										<p>Do you want to earn money, find unlimited clients and build your freelance career?</p>
										<div class="view-work">
											<router-link to="/developer" class="btn btn-primary"><i class='fas fa-arrow-right'></i></router-link>
										</div>
									</div>
								</div>
								<div class="col-lg-3 col-md-6 d-flex align-items-end">
									<div class="perfect-img aos" data-aos="fade-up">
										<img src="../../assets/img/project-03.png"  alt="">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!--- /Developed Project  -->
			
			<!-- Our Feature -->
			<section class="section feature feature-three">
				<div class="container">
					<div class="section-header section-three text-center aos" data-aos="fade-up">
						<h2 class="header-title">Strength in <span>Numbers</span></h2>
					</div>
					<div class="row justify-content-center">					
								
						<!-- Feature Item -->
						<div class="col-lg-4 col-md-6 d-flex">
							<div class="feature-item freelance-count aos" data-aos="fade-up">
								<div class="feature-icon">
									<i class="fas fa-laptop-code"></i>
								</div>
								<div class="feature-content">
									<h3>919,207</h3>
									<p>freelance Developers</p>
								</div>
							</div>
						</div>
						<!-- /Feature Item -->
						
						<!-- Feature Item -->
						<div class="col-lg-4 col-md-6 d-flex">
							<div class="feature-item aos" data-aos="fade-up">
								<div class="feature-icon">
									<i class="fas fa-project-diagram"></i>
								</div>
								<div class="feature-content">
									<h3>25 - 100+</h3>
									<p>Developers  per project</p>
								</div>
							</div>
						</div>
						<!-- /Feature Item -->
						
						<!-- Feature Item -->
						<div class="col-lg-4 col-md-6 d-flex">
							<div class="feature-item comp-project aos" data-aos="fade-up">
								<div class="feature-icon">
									<i class="fas fa-list"></i>
								</div>
								<div class="feature-content">
									<h3>388,615</h3>
									<p>completed projects</p>
								</div>
							</div>
						</div>
						<!-- /Feature Item -->									
												
					</div>
				</div>
			</section>	
			<!-- /Our Feature -->
			
			<!-- Projects -->
			<section class="section projects projects-three">
				<div class="project-back">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-12 mx-auto">
								<div class="section-header section-three text-center aos" data-aos="fade-up">	
									<h2 class="header-title">Get Inspired By <span> Development Projects</span></h2>
									<p>High Performing Solutions To Your</p>
								</div>
							</div>
						</div>
						<div class="row">
							
							<!--- Project Item  -->
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="project-item aos" data-aos="fade-up">
									<div class="project-img">
										<router-link to="/project"><img src="../../assets/img/project/project-12.jpg" alt="" class="img-fluid"></router-link>
									</div>
									<div class="develop-role d-flex justify-content-between align-items-center">
										<div class="project-content">
											<h4>45</h4>
											<h5><router-link to="/project">ANDROID </router-link></h5>
										</div>
										<div class="pro-icon">
											<div class="project-icon">
											</div>
										</div>
										<div class="project-content">
											<h4>20</h4>
											<h5><router-link to="/project">Developers</router-link></h5>
										</div>
									</div>
								</div>
							</div>
							<!--- /Project Item  -->
							
							<!--- Project Item  -->
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="project-item aos" data-aos="fade-up">
									<div class="project-img">
										<router-link to="/project"><img src="../../assets/img/project/project-13.jpg" alt="" class="img-fluid"></router-link>
									</div>
									<div class="develop-role apps-color d-flex justify-content-between align-items-center">
										<div class="project-content">
											<h4>45</h4>
											<h5><router-link to="/project">LARAVEL</router-link></h5>
										</div>
										<div class="pro-icon">
											<div class="project-icon">
											</div>
										</div>
										<div class="project-content">
											<h4>20</h4>
											<h5><router-link to="/project">Developers</router-link></h5>
										</div>
									</div>
								</div>
							</div>
							<!--- /Project Item  -->
							
							<!--- Project-Item  -->
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="project-item aos" data-aos="fade-up">
									<div class="project-img">
										<router-link to="/project"><img src="../../assets/img/project/project-14.jpg" alt="" class="img-fluid"></router-link>
									</div>
									<div class="develop-role d-flex justify-content-between align-items-center">
										<div class="project-content">
											<h4>45</h4>
											<h5><router-link to="/project">React</router-link></h5>
										</div>
										<div class="pro-icon">
											<div class="project-icon">
											</div>
										</div>
										<div class="project-content">
											<h4>20</h4>
											<h5><router-link to="/project">Developers</router-link></h5>
										</div>
									</div>
								</div>
							</div>
							<!--- /Project Item  -->
							
							<!--- Project Item  -->
							<div class="col-lg-3 col-md-6 col-sm-6">
								<div class="project-item aos" data-aos="fade-up">
									<div class="project-img">
										<router-link to="/project"><img src="../../assets/img/project/project-12.jpg" alt="" class="img-fluid"></router-link>
									</div>
									<div class="develop-role apps-color d-flex justify-content-between align-items-center">
										<div class="project-content">
											<h4>45</h4>
											<h5><router-link to="/project">GOLANG</router-link></h5>
										</div>
										<div class="pro-icon">
											<div class="project-icon">
											</div>
										</div>
										<div class="project-content">
											<h4>20</h4>
											<h5><router-link to="/project">Developers</router-link></h5>
										</div>
									</div>
								</div>
							</div>
							<!--- /Project Item  -->
							
						</div>
						<div class="row">
							<div class="col-md-12 text-center">
								<div class="see-all btn-three aos" data-aos="fade-up"> 
									<router-link to="/project" class="btn all-btn">SEE ALL PROJECT <i class="fas fa-arrow-right"></i></router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Projects -->
		
			<!-- Most Hired -->
			<section class="hired-developer hire-developer-three">
				<div class="position-three">
					<div class="container">
						<div class="section-header section-three aos" data-aos="fade-up">	
							<h2 class="header-title">Most <span> Hired Developers</span></h2>
							<p>Work with talented people at the most affordable price</p>
						</div>
						<div class="row">
							<div class="col-lg-8 col-md-7">
								<div id="developers-slider-three" class="slider developers-slider-three aos" data-aos="fade-up">
									<div class="freelance-widget widget-three">
										<div class="freelance-content free-one">
											<a class="favourite"><i class="far fa-bookmark"></i></a>
											<div class="freelance-img">
												<router-link to="/developer-details">
													<img src="../../assets/img/user/avatar-1.jpg" alt="User Image">
													<span class="verified"><i class="fas fa-check-circle"></i></span>
                                                </router-link>
											</div>
											<div class="freelance-info">
												<h3><router-link to="/developer-details">George Wells</router-link></h3>
												<div class="freelance-specific">UI/UX Designer</div>
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
												</div>
											</div>
											<div class="develop-footer d-flex align-items-center">
												<h4>$25 Hourly</h4>
												<div class="blue-view">
													<router-link to="/developer-details" class="btn btn-primary">View Profile</router-link>
												</div>
											</div>
										</div>
									</div>
									<div class="freelance-widget freelance-group widget-three">
										<div class="freelance-content free-two">
											<a  class="favourite"><i class="far fa-bookmark"></i></a>
											<div class="freelance-img">
												<router-link to="/developer-details">
													<img src="../../assets/img/user/avatar-2.jpg" alt="User Image">
													<span class="verified"><i class="fas fa-check-circle"></i></span>
                                                </router-link>
											</div>
											<div class="freelance-info">
												<h3><router-link to="/developer-details">Timothy Smith</router-link></h3>
												<div class="freelance-specific">PHP Developer</div>
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<i class="fas fa-star"></i>
												</div>
											</div>
											<div class="develop-footer d-flex align-items-center">
												<h4>$25 Hourly</h4>
												<div class="green-view">
													<router-link to="/developer-details" class="btn btn-primary">View Profile</router-link>
												</div>
											</div>
										</div>
									</div>
									<div class="freelance-widget widget-three">
										<div class="freelance-content free-one">
											<a class="favourite"><i class="far fa-bookmark"></i></a>
											<div class="freelance-img">
												<router-link to="/developer-details">
													<img src="../../assets/img/user/avatar-3.jpg" alt="User Image">
													<span class="verified"><i class="fas fa-check-circle"></i></span>
                                                </router-link>
											</div>
											<div class="freelance-info">
												<h3><router-link to="/developer-details">Janet Paden</router-link></h3>
												<div class="freelance-specific">Graphic Designer</div>
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
												</div>
											</div>
											<div class="develop-footer d-flex align-items-center">
												<h4>$25 Hourly</h4>
												<div class="blue-view">
													<router-link to="/developer-details" class="btn btn-primary">View Profile</router-link>
												</div>
											</div>
										</div>
									</div>
									<div class="freelance-widget freelance-group widget-three">
										<div class="freelance-content free-two">
											<a  class="favourite"><i class="far fa-bookmark"></i></a>
											<div class="freelance-img">
												<router-link to="/developer-details">
													<img src="../../assets/img/img-03.jpg" alt="User Image">
													<span class="verified"><i class="fas fa-check-circle"></i></span>
                                                </router-link>
											</div>
											<div class="freelance-info">
												<h3><router-link to="/developer-details">James Douglas</router-link></h3>
												<div class="freelance-specific">iOS Developer</div>
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
												</div>
											</div>
											<div class="develop-footer d-flex align-items-center">
												<h4>$25 Hourly</h4>
												<div class="green-view">
													<router-link to="/developer-details" class="btn btn-primary">View Profile</router-link>
												</div>
											</div>
										</div>
									</div>
									<div class="freelance-widget widget-three">
										<div class="freelance-content free-one">
											<a  class="favourite"><i class="far fa-bookmark"></i></a>
											<div class="freelance-img">
												<router-link to="/developer-details">
													<img src="../../assets/img/img-03.jpg" alt="User Image">
													<span class="verified"><i class="fas fa-check-circle"></i></span>
                                                </router-link>
											</div>
											<div class="freelance-info">
												<h3><router-link to="/developer-details">Richard Wilson</router-link></h3>
												<div class="freelance-specific">UI/UX Designer</div>
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
												</div>
											</div>
											<div class="develop-footer d-flex align-items-center">
												<h4>$25 Hourly</h4>
												<div class="blue-view">
													<router-link to="/developer-details" class="btn btn-primary">View Profile</router-link>
												</div>
											</div>
										</div>
									</div>
									<div class="freelance-widget widget-three">
										<div class="freelance-content free-two">
											<a  class="favourite"><i class="far fa-bookmark"></i></a>
											<div class="freelance-img">
												<router-link to="/developer-details">
													<img src="../../assets/img/img-03.jpg" alt="User Image">
													<span class="verified"><i class="fas fa-check-circle"></i></span>
                                                </router-link>
											</div>
											<div class="freelance-info">
												<h3><router-link to="/developer-details">Janet Paden</router-link></h3>
												<div class="freelance-specific">iOS Developer</div>
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
												</div>
											</div>
											<div class="develop-footer d-flex align-items-center">
												<h4>$25 Hourly</h4>
												<div class="green-view">
													<router-link to="/developer-details" class="btn btn-primary">View Profile</router-link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-5">
								<div class="developer-image aos" data-aos="fade-up">
									<img src="../../assets/img/developer-01.png" alt="Image">
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<!-- /Most Hired -->	
			
			<!-- Review -->
			<!-- <section class="review-three">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 col-md-6">
							<div class="review-develop aos" data-aos="fade-up">
								<img src="../../assets/img/review-01.png" alt="Image">
							</div>
						</div>
						<div class="col-lg-6 col-md-6 d-flex align-items-center">
							<div id="testimonial-slider-three" class="owl-carousel owl-theme testimonial-slider-three aos" data-aos="fade-up">
							

								<div class="review-blog">
									<div class="review-content">
										<p>Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget </p>
									</div>
									<div class="review-top d-flex align-items-center">
										<div class="review-img">
											<router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-01.jpg" alt="Post Image"></router-link>
										</div>
										<div class="review-info">
											<h3>Janet Paden</h3>
											<h5>iOS Developer</h5>	
										</div>
									</div>
									<div class="rating mapgridrating1">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
									</div>
								</div>

								<div class="review-blog">
									<div class="review-content">
										<p>Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget </p>
									</div>
									<div class="review-top d-flex align-items-center">
										<div class="review-img">
											<router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-01.jpg" alt="Post Image"></router-link>
										</div>
										<div class="review-info">
											<h3>Davis Payerf</h3>
											<h5>CEO</h5>	
										</div>
									</div>
									<div class="rating mapgridrating1">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
									</div>
								</div>

								<div class="review-blog">
									<div class="review-content">
										<p>Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget Eget aenean accumsan Search School, OLorem ipsum dolor sit amet, consectetur adipiscing elit. Eget aenean accumsan Eget </p>
									</div>
									<div class="review-top d-flex align-items-center">
										<div class="review-img">
											<router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-01.jpg" alt="Post Image"></router-link>
										</div>
										<div class="review-info">
											<h3>Timothy Smith</h3>
											<h5>PHP Developer</h5>	
										</div>
									</div>
									<div class="rating mapgridrating1">
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star filled"></i>
										<i class="fas fa-star"></i>
									</div>
								</div>

								
							</div>
						</div>
					</div>
				</div>
			</section> -->
			<!-- /Review -->	
		
			<!-- News -->
			<section class="section news news-three">
				<div class="container">				
					<div class="row">
						<div class="col-12">
							<div class="section-header section-three text-center aos" data-aos="fade-up">
								<h2 class="header-title">Latest <span> Blog</span></h2>
								<p>Have a Look Our Blog</p>
							</div>
						</div>
					</div>
					<div>	
						<div class="row blog-grid-row justify-content-center">
							<div class="col-lg-4 col-md-6">
							
								<!-- Blog Post -->
								<div class="blog grid-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-10.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here starts right here</router-link></h3>
										<ul class="entry-meta meta-item">
											<li> 3 Nov 2021 <i class="fas fa-calendar-week"></i></li>
										</ul>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>
							<div class="col-lg-4 col-md-6">
							
								<!-- Blog Post -->
								<div class="blog grid-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-11.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content blog-blue">
										<h3 class="blog-title"><router-link to="/blog-details">Kofejob - How to get job through online?</router-link></h3>
										<ul class="entry-meta meta-item">
											<li>3 Nov 2021 <i class="fas fa-calendar-week"></i></li>
										</ul>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>
							<div class="col-lg-4 col-md-6">
							
								<!-- Blog Post -->
								<div class="blog grid-blog aos" data-aos="fade-up">
									<div class="blog-image">
										<router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-10.jpg" alt="Post Image"></router-link>
									</div>
									<div class="blog-content">
										<h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here starts right here</router-link></h3>
										<ul class="entry-meta meta-item">
											<li> 3 Nov 2021 <i class="fas fa-calendar-week"></i></li>
										</ul>
									</div>
								</div>
								<!-- /Blog Post -->
								
							</div>					
						</div>			
					</div>
				</div>
			</section>
			<!-- / News -->
			
			<!--  Subscribe -->
			<section class="subscribe-three">
				<div class="container">
					<div class="discount-more ">
						<div class="section-header section-three text-center aos" data-aos="fade-up">
							<h2 class="header-title">Subscribe To Get Discounts,<span> Updates & More</span></h2>
							<p>HMonthly product updates, industry news and more!</p>
						</div>
						<div class="banner-content aos" data-aos="fade-up">
							<form class="form"  name="store"  id="store" action="project">
								<div class="form-inner">
									<div class="input-group">
										<input type="email" class="form-control" placeholder="Enter Email Address">
										<button class="btn btn-primary sub-btn" type="submit">Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
			<!--  /Subscribe -->
			
			<!-- Footer -->	
			<footer class="footer footer-three">
				<div class="footer-top aos" data-aos="fade-up">
					<div class="container">
						<div class="row">
							<div class="col-lg-3 col-md-6">
								<div class="logo-footer">
									<router-link to="/index" class="navbar-brand logo">
										<img src="../../assets/img/logo-footer.png" class="img-fluid" alt="Logo">
                                    </router-link>
								</div>
								<div class="text-footer">
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
								<div class="social-icon">
									<ul>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-facebook"></i> </a></li>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-instagram"></i> </a></li>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-linkedin-in"></i> </a></li>
										<li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-twitter"></i> </a></li>
									</ul>
								</div>
							</div>
							<div class="col-lg-3 col-md-6">
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
							<div class="col-lg-3 col-md-6">
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
									<h2 class="footer-title">Address</h2>
									<ul class="address-box">
										<li><i class="fas fa-map-marker-alt"></i> 3556 Beech Street, San Francisco, California, CA 94108.</li>
										<li><i class="fas fa-phone-alt"></i> +154 6546 5640</li>
										<li><i class="far fa-envelope"></i>Kofejob@gmail.com</li>
									</ul>
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
								<div class="col-md-6 col-lg-6">
									<div class="copyright-text">
										<p class="mb-0">&copy; 2022 All Rights Reserved</p>
									</div>
								</div>
								<div class="col-md-6 col-lg-6 right-text">
									<div class="social-icon footer-policy">
										<ul>
											<li><a href="javascript:void(0);"  target="_blank">Terms and Conditions </a></li>
											<li><a href="javascript:void(0);"  target="_blank">Policy </a></li>
										</ul>
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
        if($('.developers-slider-three').length > 0) {
		$('.developers-slider-three').slick({
			autoplay:false,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 992,
					settings: {
						slidesToShow: 2
				  	}
			},
			{
				breakpoint: 800,
					settings: {
						slidesToShow: 2
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
						slidesToShow: 0
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