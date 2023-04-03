<template>
<div class="dashboard-page">
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
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Employee</li>
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
						
						<!-- sidebar -->
						<layout-employeesidebar></layout-employeesidebar>
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<div class="page-title">
								<h3>Manage Projects</h3>
							</div>
							
							<projecttab></projecttab>
							
							<!-- project list -->
							<div class="my-projects-list" v-for="item in cancelledproject" :key="item.id">
								<div class="row">
									<div class="col-lg-12">
										<div class="projects-delete-details align-items-center">
											<div class="project-info">
												<span>{{item.name}}</span>
												<h2>{{item.name1}} </h2>
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
													<a href="javascript:void(0);" class="projects-btn">{{item.name10}} </a>
													<h4 class="mb-0"><a href="javascript:void(0);" class="cancelled-badge">{{item.name11}}</a></h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<!-- project list -->
							
							<!-- pagination -->
							<div class="row">
								<div class="col-md-12">
									<ul class="paginations list-pagination">
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
	import cancelledproject from '../../../../../assets/json/frontend/employer/cancelledproject.json'
	const images = require.context('../../../../../assets/img', false, /\.png$|\.jpg$/)
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
				cancelledproject: cancelledproject
			}
		}
	}
	</script>