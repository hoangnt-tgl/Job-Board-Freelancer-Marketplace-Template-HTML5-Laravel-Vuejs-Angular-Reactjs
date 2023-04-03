<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-employeeheader />
			<!-- /Header -->

           <!-- Page Content -->
			<div class="content bookmark">					
				<div class="container-fluid">					
					<div class="row">
						
						<!-- sidebar -->
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/user-account-details"><img alt="profile image" src="../../../assets/img/img-04.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<router-link to="/user-account-details"><h3 class="mb-0">John Danie S.</h3></router-link>
										<p class="mb-0">@johndaniee</p>
									</div>
								</div>
								<div class="settings-menu">
									<ul>
										<li class="nav-item">
											<router-link to="/dashboard" class="nav-link">
												<i class="material-icons">verified_user</i> Dashboard
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/manage-projects" class="nav-link">
												<i class="material-icons">business_center</i> Projects
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/favourites" class="nav-link active">
												<i class="material-icons">local_play</i> Favourites
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/review" class="nav-link">
												<i class="material-icons">record_voice_over</i> Reviews
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/chats" class="nav-link">
												<i class="material-icons">chat</i> Messages
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/memebership-plans" class="nav-link">
												<i class="material-icons">person_add</i> Membership
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/milestones" class="nav-link">
												<i class="material-icons">pie_chart</i> Milestones
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/verify-identity" class="nav-link">
												<i class="material-icons">person_pin</i> Verify Identity
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/deposit-funds" class="nav-link">
												<i class="material-icons">wifi_tethering</i> Payments
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/profile-settings" class="nav-link">
												<i class="material-icons">settings</i> Settings
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/index" class="nav-link">
												<i class="material-icons">power_settings_new</i> Logout
                                            </router-link>
										</li>
									</ul>
								</div>
							</div>		
                            </div>			
						</div>
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/favourites">Bookmarked Freelancers</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link active" to="/invaited-favourites">Invited Freelancers</router-link>
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
													<li><router-link to="/invaited-list" class="favour-active"><i class="fas fa-list"></i></router-link></li>
													<li><router-link to="/invaited-favourites"><i class="fas fa-th-large"></i></router-link></li>
												</ul>
											</div>
											<div class="freelance-box">
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
														<div class="card list-develop-group">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<img class="img-fluid" alt="" src="../../../assets/img/img-02.jpg">
																			<span class="verified"><i class="fas fa-check-circle"></i></span>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><a href="javascript:void(0);">Akshay Handge</a></h3>
																			<div class="freelance-specific">UI/UX Designer</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">4.7 (32)</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">$25 Hourly</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
																	</div>
																</div>
															</div>
														</div>
														<div class="card list-develop-group">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<img class="img-fluid" alt="" src="../../../assets/img/img-03.jpg">
																			<span class="verified"><i class="fas fa-check-circle"></i></span>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><a href="javascript:void(0);">George Wells</a></h3>
																			<div class="freelance-specific">UI/UX Designer</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">4.7 (32)</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite "><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">$25 Hourly</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
																	</div>
																</div>
															</div>
														</div>
														<div class="card list-develop-group">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<img class="img-fluid" alt="" src="../../../assets/img/img-04.jpg">
																			<span class="verified"><i class="fas fa-check-circle"></i></span>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><a href="javascript:void(0);">Richard Wilson</a></h3>
																			<div class="freelance-specific">UI/UX Designer</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">4.7 (32)</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">$25 Hourly</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
																	</div>
																</div>
															</div>
														</div>
														<div class="card list-develop-group">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<img class="img-fluid" alt="" src="../../../assets/img/img-05.jpg">
																			<span class="verified"><i class="fas fa-check-circle"></i></span>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><a href="javascript:void(0);">Timothy Smith</a></h3>
																			<div class="freelance-specific">UI/UX Designer</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">4.7 (32)</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite "><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">$25 Hourly</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
																	</div>
																</div>
															</div>
														</div>
														<div class="card list-develop-group">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<img class="img-fluid" alt="" src="../../../assets/img/img-03.jpg">
																			<span class="verified"><i class="fas fa-check-circle"></i></span>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><a href="javascript:void(0);">Akshay Handge</a></h3>
																			<div class="freelance-specific">UI/UX Designer</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">4.7 (32)</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">$25 Hourly</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
																	</div>
																</div>
															</div>
														</div>
														<div class="card list-develop-group">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<img class="img-fluid" alt="" src="../../../assets/img/img-02.jpg">
																			<span class="verified"><i class="fas fa-check-circle"></i></span>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><a href="javascript:void(0);">Richard Wilson</a></h3>
																			<div class="freelance-specific">UI/UX Designer</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">4.7 (32)</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite "><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">$25 Hourly</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
																	</div>
																</div>
															</div>
														</div>
														<div class="card list-develop-group">
															<div class="about-author d-flex align-items-center">
																<div class="about-list-author d-flex align-items-center">
																	<div class="about-author-img">
																		<div class="author-img-wrap">
																			<img class="img-fluid" alt="" src="../../../assets/img/img-04.jpg">
																			<span class="verified"><i class="fas fa-check-circle"></i></span>
																		</div>
																	</div>
																	<div class="author-details">
																		<div class="freelance-info">
																			<h3><a href="javascript:void(0);">Timothy Smith</a></h3>
																			<div class="freelance-specific">UI/UX Designer</div>
																			<div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
																			<div class="rating mapgridrating1">
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star filled"></i>
																				<i class="fas fa-star "></i>
																				<i class="fas fa-star"></i>
																				<span class="average-rating">4.7 (32)</span>
																			</div>
																			<div class="freelance-tags">
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design me-1">Web Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design">UI Design</span></a>
																				<a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
																			</div>
																		</div>
																	</div>
																</div>
																<div class="develop-list-pro">
																	<a data-bs-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
																	<div class="freelancers-price">$25 Hourly</div>
																	<div class="cart-hover">
																		<router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
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
       
		<!-- The Modal -->
		<div class="modal fade" id="bookmark">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">INVITE FREELANCER</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form>
							<div class="modal-info">
								<div class="row">
									<div class="col-md-12">
										<div class="average-bids mb-4">
											<p>Contact <span class="text-highlight">John Doe </span>  about your Project</p>
										</div>
										<div class="form-group">
											<label>Invite title</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Send a private message</label>
											<textarea class="form-control" rows="5">Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat.</textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio me-2">
														<input type="radio" value="fix" checked>
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="fix">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio me-2">
														<input type="radio" value="rate" checked>
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="rate">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-7">
														<div class="input-group">
															<div class="input-group-prepend bg-pink d-flex">
																 <span class="input-group-text" id="basic-addon1">$</span>
															</div>
															<input type="text" class="form-control" placeholder="20.00">
														</div>
													</div>
													<div class="col-5">
														<select class="form-control select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-sm-7">
														<div class="input-group form-inline mb-2">
															<div class="input-group-prepend bg-pink d-flex">
																 <span class="input-group-text" id="basic-add">$</span>
															</div>
															<input type="text" class="form-control me-1" placeholder="20.00"> 
															<label class="invited-freelancer-label">/ hr</label>
														</div>
													</div>
													<div class="col-sm-5">
														<select class="form-control select form-select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<label>Project</label>
												<select class="form-control select form-select">
													<option value="0">3D Renders and Amazon Product Store images/Video</option>
													<option value="0">3D Renders and Amazon Product Store Video</option>
													<option value="0">3D Renders and Amazon Product Store images</option>
												</select>
											</div>
										</div>
									</div>
								</div>
                                <router-link to="/invited-freelancer">
								<div class="submit-section text-end">
									<button type="submit" class="btn btn-primary submit-btn">Send Invite</button>
								</div>
                                </router-link>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /The Modal -->
        </div>
</template>
<script>
	export default {
		 mounted() {
		
		},
	}
	</script>