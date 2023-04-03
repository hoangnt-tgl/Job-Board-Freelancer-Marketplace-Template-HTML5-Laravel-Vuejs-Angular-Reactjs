<template>
<div>
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-header></layout-header>
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
										<li class="breadcrumb-item" aria-current="page">Employers</li>
										<li class="breadcrumb-item active" aria-current="page">COMPANY PROFILE</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
			<!-- Profile Banner -->
			<companydetailbanner></companydetailbanner>
			<!-- Profile Banner -->
			
			<!-- Page Content -->
			<div class="content">
				<div class="container">	
					
					<div class="row">
						<div class="col-lg-8 col-md-12">
							
							<div class="pro-view">
								
								<!-- Tab Detail -->
								<nav class="provider-tabs mb-4 abouts-view">
									<ul class="nav nav-tabs nav-tabs-solid nav-justified">
										<li class="nav-item">
											<router-link class="nav-link" to="/company-profile">
												<img src="../../../../assets/img/icon/tab-icon-13.png"  alt="User Image">
												<p class="bg-red">About Us</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/company-project">
												<img src="../../../../assets/img/icon/tab-icon-09.png"  alt="User Image">
												<p >Projects</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/company-gallery">
												<img src="../../../../assets/img/icon/tab-icon-10.png"  alt="User Image">
												<p>Gallery</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link active-about" to="/company-review">
												<img src="../../../../assets/img/icon/tab-icon-15.png"  alt="User Image">
												<p>Reviews</p>
											</router-link>
										</li>
									</ul>
								</nav>
								<!-- /Tab Detail -->
								
								<!-- Reviews Tab Content -->
								<div class="pro-post widget-box company-post" >
									<h3 class="pro-title">Reviews</h3>
									<div class="reviews company-review">
										<companyreviewcontent></companyreviewcontent>	
										<companyreviewcontent1></companyreviewcontent1>	
										<companyreviewcontent2></companyreviewcontent2>	
										<div class="col-md-12 text-center">
											<a href="javascript:void(0);" class="btn more-btn"><img src="../../../../assets/img/loader-icon.svg" height="24" alt="User Image">Load More </a>
										</div>
									</div>
								</div>
								<!-- /Reviews Tab Content -->
								
								<!-- Post a comment -->
								<reviewcomment></reviewcomment>
								<!-- /Post a comment -->
								
							</div>
						</div>
					
						<!-- profile Sidebar -->
						<companydetail1></companydetail1>
						<!-- /Profile Sidebar -->
						
					</div>
				</div>
			</div>		
			<!-- /Page Content -->
           
            <!-- Footer -->
            <layout-footer></layout-footer>
            <!-- /Footer -->
        </div>
        <!-- /Main Wrapper -->
        <employeemodal></employeemodal>
        </div>
</template>