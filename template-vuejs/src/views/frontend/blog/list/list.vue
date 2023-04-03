<template>
<div>
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-header />
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
										<li class="breadcrumb-item" aria-current="page">Blog List</li>
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
							<div class="blog-view">
							
								<!-- Blog Post -->
								<div class="blog-single-post pro-post widget-box">
									<div class="blog-image">
										<router-link to="/blog-details"><img alt="" src="../../../../assets/img/blog/blog-01.jpg" class="img-fluid"></router-link>
									</div>
									<h3 class="blog-title">Your next job starts right here</h3>
									<div class="blog-info clearfix">
										<div class="post-left">
											<ul>
												<li>
													<div class="post-author">
														<router-link to="/developer-details"><img src="../../../../assets/img/img-02.jpg" alt="Post Author"> <span>John Doe</span></router-link>
													</div>
												</li>
												<li><i class="far fa-calendar"></i>4 May 2021</li>
												<li><i class="far fa-comments"></i>12 Comments</li>
												<li><i class="fas fa-tags"></i>job Tips</li>
											</ul>
										</div>
									</div>
									<div class="blog-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<router-link to="/blog-details" class="read-more">Read More</router-link>
									</div>
								</div>
								<!-- /Blog Post -->
								
								<!-- Blog Post -->
								<div class="blog-single-post pro-post widget-box">
									<div class="blog-image">
										<router-link to="/blog-details"><img alt="" src="../../../../assets/img/blog/blog-02.jpg" class="img-fluid"></router-link>
									</div>
									<h3 class="blog-title">What are the benefits of applying job Online?</h3>
									<div class="blog-info clearfix">
										<div class="post-left">
											<ul>
												<li>
													<div class="post-author">
														<router-link to="/developer-details"><img src="../../../../assets/img/img-03.jpg" alt="Post Author"> <span>Nick Joe</span></router-link>
													</div>
												</li>
												<li><i class="far fa-calendar"></i>4 May 2021</li>
												<li><i class="far fa-comments"></i>12 Comments</li>
												<li><i class="fas fa-tags"></i>Job Tips</li>
											</ul>
										</div>
									</div>
									<div class="blog-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<router-link to="/blog-details" class="read-more">Read More</router-link>
									</div>
								</div>
								<!-- /Blog Post -->
								
								<!-- Blog Post -->
								<div class="blog-single-post pro-post widget-box">
									<div class="blog-image">
									<div class="video">
										<iframe src="https://www.youtube.com/embed/ExJZAegsOis" width="940"></iframe>
									</div>
								</div>
									<h3 class="blog-title">Mock job interview to get a job</h3>
									<div class="blog-info clearfix">
										<div class="post-left">
											<ul>
												<li>
													<div class="post-author">
														<router-link to="/developer-details"><img src="../../../../assets/img/img-03.jpg" alt="Post Author"> <span>Nick Joe</span></router-link>
													</div>
												</li>
												<li><i class="far fa-calendar"></i>4 May 2021</li>
												<li><i class="far fa-comments"></i>12 Comments</li>
												<li><i class="fas fa-tags"></i>Job Tips</li>
											</ul>
										</div>
									</div>
									<div class="blog-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris ullamco laborisut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
										<router-link to="/blog-details" class="read-more">Read More</router-link>
									</div>
								</div>
								<!-- /Blog Post -->
								
								<!-- Blog Pagination -->
								<div class="row pb-4">
									<div class="col-md-12">
										<div class="blog-pagination text-center">
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
								<!-- /Blog Pagination -->
								
							</div>
						</div>
					
						<!-- Blog Sidebar -->
						<blogsidebar></blogsidebar>
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
        </div>
</template>