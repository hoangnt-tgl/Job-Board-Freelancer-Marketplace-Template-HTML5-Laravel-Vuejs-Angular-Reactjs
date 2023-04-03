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
			<companyprofilebanner></companyprofilebanner>
			<!-- Profile Banner -->
			
			<!-- Page Content -->
			<div class="content">
				<div class="container">	
					
					<div class="row">
						<div class="col-lg-8 col-md-12">
							
							<div class="pro-view">
								
								<!-- Tab Detail -->
								<nav class="provider-tabs abouts-view">
									<ul class="nav nav-tabs nav-tabs-solid nav-justified">
										<li class="nav-item">
											<router-link class="nav-link active-about" to="/company-profile">
												<img src="../../../../assets/img/icon/tab-icon-01.png"  alt="User Image">
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
											<router-link class="nav-link" to="/company-review">
												<img src="../../../../assets/img/icon/tab-icon-11.png"  alt="User Image">
												<p>Reviews</p>
											</router-link>
										</li>
									</ul>
								</nav>
								<!-- /Tab Detail -->
								
								<!-- About Tab Content -->
								<div class="pro-post widget-box company-post abouts-detail" >
									<h3 class="pro-title">About US</h3>
									<div class="pro-content">
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.</p>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. </p>
										<p>Objectively pursue diverse catalysts for change for interoperable meta-services. Distinctively re-engineer revolutionary meta-services and premium architectures. Intrinsically incubate intuitive opportunities and real-time potentialities. Appropriately communicate one-to-one technology.</p>
										<p>Intrinsically incubate intuitive opportunities and real-time potentialities Appropriately communicate one-to-one technology.</p>
										<p>Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.</p>
									</div>
								</div>
								<!-- /About Tab Content -->
								
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