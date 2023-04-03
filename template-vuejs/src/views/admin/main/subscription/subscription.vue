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
								<router-link to="/admin/view-price-employe" class="btn add-button me-2">
									View Pricing
                                </router-link>
								<a class="btn filter-btn" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-plan-employe">
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
									<li class="active"><router-link to="/admin/subscription">Employer </router-link></li>
									<li><router-link to="/admin/subscripe-freelancer">Freelancer</router-link></li>
								</ul>
							</div>
							<div class="card ">
								<div class="table-responsive">
									<table class="table table-center table-hover mb-0 employe-tables">
										<thead>
											<tr>
												<th>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" id="select-all">
													  <label class="form-check-label" for="customCheck1"></label>
													</div>
												</th>
												<th>Name</th>
												<th>Plan Name</th>	
												<th>Plan Type</th>	
												<th>Payment Method</th>	
												<th>Create Date</th>	
												<th>End Date</th>	
												<th>Status</th>	
												<th class="text-end">Actions</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" id="customCheck1">
													  <label class="form-check-label" for="customCheck1"></label>
													</div>
												</td>
												<td><a href="javascript:void(0);">Mark</a></td>
												<td><a href="javascript:void(0);">Professional</a></td>
												<td>Monthly</td>
												<td>Credit card</td>
												<td>25/03/20022</td>
												<td>25/03/20022</td>
												<td>
													<button class="btn active-btn">Active</button>
												</td>
												<td class="text-end subscription-end">
													<a href="javascript:void(0);" class="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
													<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" id="customCheck1">
													  <label class="form-check-label" for="customCheck1"></label>
													</div>
												</td>
												<td><a href="javascript:void(0);">Steawart</a></td>
												<td><a href="javascript:void(0);">Enterprise</a></td>
												<td>Yearly</td>
												<td>Paypal</td>
												<td>28-02-2022</td>
												<td>28-02-2022</td>
												<td>
													<button class="btn active-btn">Active</button>
												</td>
												<td class="text-end subscription-end">
													<a href="javascript:void(0);" class="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
													<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" id="customCheck1">
													  <label class="form-check-label" for="customCheck1"></label>
													</div>
												</td>
												<td><a href="javascript:void(0);">Hendry</a></td>
												<td><a href="javascript:void(0);">Basic</a></td>
												<td>Monthly</td>
												<td>Paypal</td>
												<td>28-02-2022</td>
												<td>28-02-2022</td>
												<td>
													<button class="btn inactive-btn">Inactive</button>
												</td>
												<td class="text-end subscription-end">
													<a href="javascript:void(0);" class="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
													<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>			
					</div>
					
				</div>			
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
        
       <!-- Add Modal -->
		<div class="modal fade custom-modal" id="add-plan-employe">
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
										<label>Project Credits <span>*</span></label>
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
										<label>Project Visibility <span>*</span></label>
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
								<div class="form-group">
									<label>Status <span>*</span></label>
									<div class="status-toggle d-flex justify-content-between align-items-center">
										<input type="checkbox" id="status_1" class="check" checked>
										<label for="status_1" class="checktoggle"></label>
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
		
		<!-- Add Modal -->
		<div class="modal fade custom-modal" id="edit-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<div class="modal-header flex-wrap">
						<div class="text-center w-100 mb-3">
							<img src="../../../../assets/admin-img/logo-small.png" alt="">
						</div>
						<h4 class="modal-title">Edit User</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>

					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Full Name</label>
								<input type="text" class="form-control" value=" George Wells">
							</div>
							<div class="form-group">
								<label>Email</label>
								<input type="email" class="form-control" value="georgewells@example.com">
							</div>
							<div class="form-group">
								<label>Password</label>
								<input type="password" class="form-control" value="*******">
							</div>
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="password" class="form-control" value="********">
							</div>
							<div class="form-group">
								<label>User Type</label>
								<select class="form-control form-select">
									<option>Select</option>
									<option selected>Frontend Developer</option>
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