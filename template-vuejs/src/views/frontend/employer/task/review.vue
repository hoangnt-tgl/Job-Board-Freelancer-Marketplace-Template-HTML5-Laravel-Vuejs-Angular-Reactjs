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
										<li class="breadcrumb-item" aria-current="page">Reviews</li>
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
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/user-account-details"><img alt="profile image" src="../../../../assets/img/img-04.jpg" class="avatar-lg rounded-circle"></router-link>
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
											<router-link to="/favourites" class="nav-link">
												<i class="material-icons">local_play</i> Favourites
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/review" class="nav-link active">
												<i class="material-icons">record_voice_over</i> Reviews
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/chats" class="nav-link">
												<i class="material-icons">chat</i> Messages
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/membership-plans" class="nav-link">
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
							<div class="card ">
								<div class="card-header review-heading">
									<h3 class="pro-title without-border">Reviews</h3>
								</div>
								<div class="card-body">
									<div class="reviews company-review">
										<div class="review-content no-padding">		
											<h4>Fast and clear. </h4>
											<p class="mb-0">Fast and clear. European visual concepts. Easy to communicate TOP</p>
											<div class="review-top tab-reviews d-flex align-items-center">
												<div class="review-img">
													<router-link to="/developer-details"><img class="img-fluid" src="../../../../assets/img/review/review-01.jpg" alt="Post Image"></router-link>
												</div>
												<div class="review-info">
													<h3><router-link to="/developer-details">javiervalino</router-link></h3>
													<h5>Today • 09:35 PM</h5>	
												</div>					
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="average-rating">4.7</span>
												</div>
											</div>
										</div>	
										<div class="review-content no-padding">		
											<h4>This seller was great overall. </h4>
											<p class="mb-0">This seller was great overall. One thing I noticed was that there was one logo out of the 4 I got that stood out amongst the others. Now I loved that one logo but the other ones did not look like much thought were put into them and they were a little disappointing. It is understandable for the price for them to only put effort into one logo, which like I said I loved. I think it would be better to tell this seller to make one good logo and to provide 3 other logos that work off the one good logo. Maybe make that one good logo and then change colors and fonts for the other 3. But overall this seller was great!</p>
											<div class="review-top tab-reviews d-flex align-items-center">
												<div class="review-img">
													<router-link to="/developer-details"><img class="img-fluid" src="../../../../assets/img/review/review-02.jpg" alt="Post Image"></router-link>
												</div>
												<div class="review-info">
													<h3><router-link to="/developer-details">trentburns</router-link></h3>
													<h5>Yesterday • 09:35 PM</h5>	
												</div>					
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="average-rating">4.7</span>
												</div>
											</div>
										</div>		
										<div class="review-content no-padding">		
											<h4>Great help given and work</h4>
											<p class="mb-0">Great help given and work was done as asked on time! :)</p>
											<div class="review-top tab-reviews d-flex align-items-center">
												<div class="review-img">
													<router-link to="/developer-details"><img class="img-fluid" src="../../../../assets/img/review/review-03.jpg" alt="Post Image"></router-link>
												</div>
												<div class="review-info">
													<h3><router-link to="/developer-details">mabdz</router-link></h3>
													<h5>Sep 3 • 6:57 AM</h5>	
												</div>					
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="average-rating">4.7</span>
												</div>
											</div>
										</div>	
										<div class="review-content no-padding">		
											<h4>very quick &amp; smart.</h4>
											<p class="mb-0">very quick &amp; smart. Recommend him for any web related work</p>
											<div class="review-top tab-reviews d-flex align-items-center">
												<div class="review-img">
													<router-link to="/developer-details"><img class="img-fluid" src="../../../../assets/img/review/review-02.jpg" alt="Post Image"></router-link>
												</div>
												<div class="review-info">
													<h3><router-link to="/developer-details">creativerr</router-link></h3>
													<h5>Aug 12 • 9:37 AM</h5>	
												</div>					
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="average-rating">4.7</span>
												</div>
											</div>
										</div>	
										<div class="review-content no-padding">		
											<h4>always amaze me with his skills</h4>
											<p class="mb-0">always amaze me with his skills. Recommend this top rated seller for anyone. Absolute best of best</p>
											<div class="review-top tab-reviews d-flex align-items-center">
												<div class="review-img">
													<router-link to="/developer-details"><img class="img-fluid" src="../../../../assets/img/review/review-1.jpg" alt="Post Image"></router-link>
												</div>
												<div class="review-info">
													<h3><router-link to="/developer-details">adirajulk</router-link></h3>
													<h5>Aug 3 • 6:57 AM</h5>	
												</div>					
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="average-rating">4.7</span>
												</div>
											</div>
										</div>	
										<div class="review-content no-padding">		
											<h4>They delivered great work! The delivery was prompt and the communication was excellent. </h4>
											<p class="mb-0">They delivered great work! The delivery was prompt and the communication was excellent. I will be using them in the future and recommend them to anyone who needs their services!</p>
											<div class="review-top tab-reviews d-flex align-items-center">
												<div class="review-img">
													<router-link to="/developer-details"><img class="img-fluid" src="../../../../assets/img/review/review-03.jpg" alt="Post Image"></router-link>
												</div>
												<div class="review-info">
													<h3><router-link to="/developer-details">james</router-link></h3>
													<h5>Aug 2 • 7:57 AM</h5>	
												</div>					
												<div class="rating mapgridrating1">
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star filled"></i>
													<i class="fas fa-star"></i>
													<span class="average-rating">4.7</span>
												</div>
											</div>
										</div>	
										<div class="col-md-12 text-center">
											<a href="javascript:void(0);" class="btn more-btn"><img src="../../../../assets/img/loader-icon.svg" height="24" alt="User Image">Load More </a>
										</div>
									</div>
								</div>
							</div>

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
		<div class="modal fade custom-modal" id="review">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="text-center pt-0 mb-4">
							<h5 class="modal-title">Leave a Review</h5>
							<p class="modal-subtitle">Rate <span class="orange-text">Peter Valentín</span> for the project <span class="orange-text">Adsense Expert</span></p>
						</div>
						<form>
							<div class="modal-info">
								<div class="row form-row">
									<div class="col-12 col-md-12">
										<div class="form-group">
											<p class="mb-2">Was this delivered on budget?</p>
											<label class="custom_radio">
												<input type="radio" name="budget" value="Yes" checked>
												<span class="checkmark"></span> Yes
											</label>
											<label class="custom_radio">
												<input type="radio" name="budget" value="No">
												<span class="checkmark"></span> No
											</label>
										</div> 
										<div class="form-group">
											<p class="mb-2">Was this delivered on time?</p>
											<label class="custom_radio">
												<input type="radio" name="time" value="Yes" checked>
												<span class="checkmark"></span> Yes
											</label>
											<label class="custom_radio">
												<input type="radio" name="time" value="No">
												<span class="checkmark"></span> No
											</label>
										</div> 
										<div class="form-group">
											<p class="mb-2">Your Rating</p>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
											</div>
										</div>
										<div class="form-group">
											<textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
										</div>  
									</div>
								</div>
							</div>
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary btn-block submit-btn">Leave a Review</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		
		<!-- The Modal -->
		<div class="modal fade custom-modal" id="editreview">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="text-center pt-0 mb-4">
							<h5 class="modal-title">Leave a Review</h5>
							<p class="modal-subtitle">Rate <span class="orange-text">Peter Valentín</span> for the project <span class="orange-text">Adsense Expert</span></p>
						</div>
						<form>
							<div class="modal-info">
								<div class="row form-row">
									<div class="col-12 col-md-12">
										<div class="form-group">
											<p class="mb-2">Was this delivered on budget?</p>
											<label class="custom_radio">
												<input type="radio" name="budget" value="Yes" checked>
												<span class="checkmark"></span> Yes
											</label>
											<label class="custom_radio">
												<input type="radio" name="budget" value="No">
												<span class="checkmark"></span> No
											</label>
										</div> 
										<div class="form-group">
											<p class="mb-2">Was this delivered on time?</p>
											<label class="custom_radio">
												<input type="radio" name="time" value="Yes" checked>
												<span class="checkmark"></span> Yes
											</label>
											<label class="custom_radio">
												<input type="radio" name="time" value="No">
												<span class="checkmark"></span> No
											</label>
										</div> 
										<div class="form-group">
											<p class="mb-2">Your Rating</p>
											<div class="rating">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
											</div>
										</div>
										<div class="form-group">
											<textarea class="form-control" name="message" rows="5" placeholder="Message">Great clarity in specification and communication. I got payment really fast. Really recommend this employer for his professionalism. I will work for him again with pleasure.</textarea>
										</div>  
									</div>
								</div>
							</div>
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary btn-block submit-btn">Leave a Review</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
            </div>
    </template>
    <script>
		import util from '../../../../assets/utils/util'
        export default {
             mounted() {
				util.datatable('#task')
            }
        }
        </script>