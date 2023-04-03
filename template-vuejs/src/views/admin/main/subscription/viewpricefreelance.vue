<template>
    <div>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
				
					<!-- Page Header -->
					<div class="page-header subscribe-head">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Subscriber List</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link></li>
									
									<li class="breadcrumb-item active">Subscriber List</li>
								</ul>
							</div>
							<div class="col-auto">
								<router-link to="/admin/employe-list" class="btn add-button me-2">
									Subscription List
                                </router-link>
								<a class="btn filter-btn" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-plan-freelance">
									New Subscription
								</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					<div class="row">
						<div class="col-sm-12">
							<div class="subscribe-employe">
								<ul>
									<li ><router-link to="/admin/view-price-employe">Employer </router-link></li>
									<li class="active"><router-link to="/admin/view-price-freelance">Freelancer</router-link></li>
								</ul>
							</div>
							
							<!-- Pricing Plans -->
							<div class="price-plan" >
								<div class="heading-price text-center" >
									<h2>Choose Your Plan </h2>
									<p>If you need more info about our pricing, please check <a href="javascript:void(0);">Pricing Guidelines</a></p>
								</div>
								<div class="plan-price">
									<ul class="nav nav-pills price-list" role="tablist">
										<li class="nav-item" role="presentation">
											<button class="btn-plan active" id="pills-Monthly-tab" data-bs-toggle="pill" data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-client" aria-selected="false">Monthly</button>
										</li>
										<li class="nav-item" role="presentation">
											<button class="btn-plan " id="pills-annual-tab" data-bs-toggle="pill" data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-client" aria-selected="false">Annual</button>
										</li>
									</ul>
									<div class="tab-content" id="pills-tabContent">
										<div class="tab-pane fade active show" id="pills-1" role="tabpanel" aria-labelledby="pills-Monthly-tab">
											<div class="row justify-content-center">
												<div class="col-lg-4 col-md-6 d-flex">
													<div class="clockfie-plan">
														<div class="basic-plan text-center">
															<h2>Basic</h2>
															<p>Optimal for 10+ team size & new <br>startup</p>
															<div class="price-start text-center">
																<h2>$39.00 <span>/month</span></h2>
															</div>
														</div>
														<div class="credit-project">
															<ul class="credit-list">
																<li>20 prroject Credit <i class='fas fa-check-circle'></i></li>
																<li>10 Projects <i class='fas fa-check-circle'></i></li>
																<li>25 Project Visibility  <i class="fas fa-times-circle wrong-credit"></i></li>
																<li>20 Featured Services  <i class="fas fa-times-circle wrong-credit"></i></li>
															</ul>
															<div class="subscribe-now text-center">
																<a href="javascript:void(0);" class="btn btn-primary">Edit</a>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 d-flex">
													<div class="clockfie-plan">
														<div class="basic-plan text-center">
															<h2>Professional</h2>
															<p>Optimal for 10+ team size & new <br>startup</p>
															<div class="price-start text-center">
																<h2>$94.00 <span>/month</span></h2>
															</div>
														</div>
														<div class="credit-project">
															<ul class="credit-list">
																<li>50 prroject Credit <i class='fas fa-check-circle'></i></li>
																<li>25 Projects <i class='fas fa-check-circle'></i></li>
																<li>50 Project Visibility  <i class='fas fa-check-circle'></i></li>
																<li>50 Featured Services  <i class="fas fa-times-circle wrong-credit"></i></li>
															</ul>
															<div class="subscribe-now text-center">
																<a href="javascript:void(0);" class="btn btn-primary">Edit</a>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 d-flex">
													<div class="clockfie-plan">
														<div class="basic-plan text-center">
															<h2>Enterprise</h2>
															<p>Optimal for 10+ team size & new <br>startup</p>
															<div class="price-start text-center">
																<h2>$199.00 <span>/month</span></h2>
															</div>
														</div>
														<div class="credit-project">
															<ul class="credit-list">
																<li>100 prroject Credit <i class='fas fa-check-circle'></i></li>
																<li>120 Projects <i class='fas fa-check-circle'></i></li>
																<li>100 Project Visibility  <i class='fas fa-check-circle'></i></li>
																<li>100 Featured Services  <i class='fas fa-check-circle'></i></li>
															</ul>
															<div class="subscribe-now text-center">
																<a href="javascript:void(0);" class="btn btn-primary">Edit</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-annual-tab">
											<div class="row justify-content-center">
												<div class="col-lg-4 col-md-6 d-flex">
													<div class="clockfie-plan">
														<div class="basic-plan text-center">
															<h2>Basic</h2>
															<p>Optimal for 10+ team size & new <br>startup</p>
															<div class="price-start text-center">
																<h2>$50.00 <span>/month</span></h2>
															</div>
														</div>
														<div class="credit-project">
															<ul class="credit-list">
																<li>30 prroject Credit <i class='fas fa-check-circle'></i></li>
																<li>10 Projects <i class='fas fa-check-circle'></i></li>
																<li>30 Project Visibility  <i class="fas fa-times-circle wrong-credit"></i></li>
																<li>30 Featured Services  <i class="fas fa-times-circle wrong-credit"></i></li>
															</ul>
															<div class="subscribe-now text-center">
																<a href="javascript:void(0);" class="btn btn-primary">Edit</a>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 d-flex">
													<div class="clockfie-plan">
														<div class="basic-plan text-center">
															<h2>Professional</h2>
															<p>Optimal for 10+ team size & new <br>startup</p>
															<div class="price-start text-center">
																<h2>$120.00 <span>/month</span></h2>
															</div>
														</div>
														<div class="credit-project">
															<ul class="credit-list">
																<li>80 prroject Credit <i class='fas fa-check-circle'></i></li>
																<li>25 Projects <i class='fas fa-check-circle'></i></li>
																<li>80 Project Visibility  <i class='fas fa-check-circle'></i></li>
																<li>80 Featured Services  <i class="fas fa-times-circle wrong-credit"></i></li>
															</ul>
															<div class="subscribe-now text-center">
																<a href="javascript:void(0);" class="btn btn-primary">Edit</a>
															</div>
														</div>
													</div>
												</div>
												<div class="col-lg-4 col-md-6 d-flex">
													<div class="clockfie-plan">
														<div class="basic-plan text-center">
															<h2>Enterprise</h2>
															<p>Optimal for 10+ team size & new <br>startup</p>
															<div class="price-start text-center">
																<h2>$1999.00 <span>/month</span></h2>
															</div>
														</div>
														<div class="credit-project">
															<ul class="credit-list">
																<li>140 prroject Credit <i class='fas fa-check-circle'></i></li>
																<li>120 Projects <i class='fas fa-check-circle'></i></li>
																<li>140 Project Visibility  <i class='fas fa-check-circle'></i></li>
																<li>140 Featured Services  <i class='fas fa-check-circle'></i></li>
															</ul>
															<div class="subscribe-now text-center">
																<a href="javascript:void(0);" class="btn btn-primary">Edit</a>
															</div>
														</div>
													</div>
												</div>
											</div>					
										</div>
									</div>
								</div>
							</div>
							<!-- /Pricing Plans -->
							
						</div>			
					</div>
					
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
        
       <!-- Add Modal -->
		<div class="modal fade custom-modal" id="add-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<div class="modal-header flex-wrap">
						<div class="text-center w-100 mb-3">
							<img src="../../../../assets/admin-img/logo-small.png" alt="">
						</div>
						<h4 class="modal-title">Add New User</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>

					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Full Name</label>
								<input type="text" class="form-control">
							</div>
							<div class="form-group">
								<label>Email</label>
								<input type="email" class="form-control">
							</div>
							<div class="form-group">
								<label>Password</label>
								<input type="password" class="form-control">
							</div>
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="password" class="form-control">
							</div>
							<div class="form-group">
								<label>User Type</label>
								<select class="form-control form-select">
									<option>Select</option>
									<option>Frontend Developer</option>
									<option>Graphic Designer</option>
								</select>
							</div>
							<div class="mt-4">
								<button type="submit" class="btn btn-primary btn-block">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- Add Modal -->
		
		<!-- Add Modal -->
		<div class="modal fade custom-modal" id="add-plan-freelance">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header flex-wrap add-plan-head">
						<h4 class="modal-title">Add Plan</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>
					<div class="modal-body add-plan">
						<form>
							<div class="row">
								<div class="col-lg-6">
									<div class="form-group">
										<label>Plan Name <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>Plan Type <span>*</span></label>
										<select class="form-control form-select">
											<option>Select</option>
											<option>Frontend Developer</option>
											<option>Graphic Designer</option>
										</select>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<label>Plan Amount <span>*</span></label>
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>Bidding Credits <span>*</span></label>
										<select class="form-control form-select">
											<option>Select</option>
											<option>Frontend Developer</option>
											<option>Graphic Designer</option>
										</select>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>No of Projects <span>*</span></label>
										<select class="form-control form-select">
											<option>Select</option>
											<option>Frontend Developer</option>
											<option>Graphic Designer</option>
										</select>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>Bidding  visibility <span>*</span></label>
										<select class="form-control form-select">
											<option>Select</option>
											<option>Frontend Developer</option>
											<option>Graphic Designer</option>
										</select>
									</div>
								</div>
								<div class="col-lg-6">
									<div class="form-group">
										<label>Featured Service <span>*</span></label>
										<select class="form-control form-select">
											<option>Select</option>
											<option>Frontend Developer</option>
											<option>Graphic Designer</option>
										</select>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<label>Plan Description <span>*</span></label>
										<textarea class="form-control" rows="5" id="comment" name="text"></textarea>
									</div>
								</div>
								<div class="col-lg-12">
									<div class="form-group">
										<label>Status <span>*</span></label>
										<div class="status-toggle d-flex justify-content-between align-items-center">
											<input type="checkbox" id="status_1" class="check" checked>
											<label for="status_1" class="checktoggle"></label>
										</div>
									</div>
								</div>
							</div>
							<div class="plan-btn text-center">
								<button type="submit" class="btn btn-primary remove-form">Close</button>
								<button type="submit" class="btn btn-primary save-form">Save Plan</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- Add Modal -->

		<!-- Delete Modal -->
		<div class="modal custom-modal fade" id="delete_category" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body">
						<div class="form-header">
							<h3>Delete</h3>
							<p>Are you sure want to delete?</p>
						</div>
						<div class="modal-btn delete-action">
							<div class="row">
								<div class="col-6">
									<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
								</div>
								<div class="col-6">
									<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Delete Modal -->

    </div>
</template>
<script>
	export default {
		 mounted() {
	if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
		},
		methods:{
		},
		data() {
			return {
			}
		}
	}
	</script>