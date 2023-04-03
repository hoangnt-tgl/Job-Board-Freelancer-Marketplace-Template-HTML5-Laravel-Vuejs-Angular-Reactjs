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
											<router-link class="nav-link active-about" to="/company-project">
												<img src="../../../../assets/img/icon/tab-icon-12.png"  alt="User Image">
												<p>Projects</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/company-gallery">
												<img src="../../../../assets/img/icon/tab-icon-10.png"  alt="User Image">
												<p >Gallery</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/company-review">
												<img src="../../../../assets/img/icon/tab-icon-11.png"  alt="User Image">
												<p >Reviews</p>
											</router-link>
										</li>
									</ul>
								</nav>
								<!-- /Tab Detail -->
								
								<!-- Projects Tab Content -->
								<div class="pro-post widget-box company-post" >
									<h3 class="pro-title">Projects</h3>
									<div class="projects-card flex-fill project-company" v-for="item in companyproject" :key="item.id">
										<div class="card-body">
											<div class="projects-details align-items-center">
												<div class="project-info">
													<span>{{item.name}}</span>
													<h2>{{item.name1}}</h2>
													<div class="customer-info">
														<ul class="list-details">
															<li>
																<div class="slot">
																	<p>{{item.name2}}</p>
																	<h5>{{item.name3}}</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>{{item.name4}}</p>
																	<h5><img :src="loadImg(item.img)" height="13" alt="Lang"> {{item.name5}}</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>{{item.name6}}</p>
																	<h5>{{item.name7}}</h5>
																</div>
															</li>
														</ul>
													</div>
												</div>
												<div class="project-hire-info">
													<div class="content-divider"></div>
													<div class="projects-amount">
														<h3>{{item.name8}}</h3>
														<h5>{{item.name9}}</h5>
													</div>
													<div class="content-divider"></div>
													<div class="projects-action text-center">
														<router-link to="/view-project-detail" class="projects-btn">{{item.name10}}</router-link>
														<a href="javascript:void(0);" class="hired-detail">{{item.name11}}</a>
													</div>
												</div>
											</div>
										</div>
									</div>
									
									<!-- Pagination -->
									<div class="row">
										<div class="col-md-12">
											<ul class="paginations list-pagination">
												<li><a href="javascript:void(0);"><i class="fas fa-angle-left"></i> Previous</a></li>
												<li><a href="javascript:void(0);">1</a></li>
												<li><a href="javascript:void(0);" class="active">2</a></li>
												<li><a href="javascript:void(0);">3</a></li>
												<li><a href="javascript:void(0);">4</a></li>
												<li><a href="javascript:void(0);">Next <i class="fas fa-angle-right"></i></a></li>
											</ul>
										</div>
									</div>
									<!-- /Pagination -->
									
								</div>
								<!-- /Projects Tab Content -->
								
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
<script>
	import companyproject from '../../../../assets/json/frontend/employer/companyproject.json'
	const images = require.context('../../../../assets/img', false, /\.png$|\.jpg$/)
	export default {
		 mounted() {
		
		},
		methods:{
			loadImg(imgPath) {
				return images('./' + imgPath).default
			},
		},
		data() {
			return {
				companyproject: companyproject
			}
		}
	}
	</script>