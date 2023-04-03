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
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Employee</li>
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
			<div class="content content-page bookmark">					
				<div class="container-fluid">					
					<div class="row">
						
						<!-- sidebar -->
						<layout-employeesidebar></layout-employeesidebar>
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item" :class="{'active': currentPath === '/favourites-list'}">
										<router-link class="nav-link" to="/favourites" :class="currentPath == 'favourites-list' ? 'active' : 'notactive'">Bookmarked Freelancers</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/invaited-favourites">Invited Freelancers</router-link>
									</li>
								</ul>
							</nav>
							<!-- project list -->
							<div class="my-projects-view favourite-group">
								<div class="row">
									<div class="col-lg-12">
										<div class="card">
											<div class="card-header d-flex">
												<h5 class="card-title">Bookmarked Freelancers</h5>
												<ul class="list-grid d-flex align-items-center">
													<li><router-link to="/favourites-list" class="favour-active"><i class="fas fa-list"></i></router-link></li>
													<li><router-link to="/favourites"><i class="fas fa-th-large"></i></router-link></li>
												</ul>
											</div>
											<div class="freelance-box list-book-mark book-mark favour-book">
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
													<div class="col-lg-12">

														<div class="card list-develop-group" v-for="item in favouritelist" :key="item.id">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<router-link to="/developer-details">
																				<img class="img-fluid" alt="" :src="loadImg(item.img)">
																				<span class="verified"><i class="fas fa-check-circle"></i></span>
                                                                            </router-link>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><router-link to="/developer-details">{{item.name}}</router-link></h3>
																			<div class="freelance-specific">{{item.name1}}</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>{{item.name2}}</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">{{item.rating}}</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">{{item.name3}}</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">{{item.name4}}</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">{{item.name5}}</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">{{item.name6}}</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">{{item.name7}}</router-link>
																	</div>
																</div>
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
	import favouritelist from '../../../../assets/json/frontend/employer/favouritelist.json'
	const images = require.context('../../../../assets/img', false, /\.png$|\.jpg$|\.svg$/)
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
				favouritelist: favouritelist,
                activeClass: 'active'
			}
		},
        computed: {
            currentPath() {
                return this.$route.name;
            }
    
        },
	}
	</script>