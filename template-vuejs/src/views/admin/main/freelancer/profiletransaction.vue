<template>
    <div>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content report-box container-fluid">
				
					<!-- Page Header -->
					<div class="page-header subscribe-head">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Freelancer Profile</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link></li>
									<li class="breadcrumb-item active">Freelancer Profile</li>
								</ul>
							</div>
							<div class="col-auto">
								<router-link class="btn  back-user" to="/admin/users">
									<img src="../../../../assets/admin-img/icon/icon-08.svg" alt=""> Back to list
                                </router-link>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- User Profile -->
					<div class="profile-status">
						<div class="row">
							<div class="col-lg-6 col-md-6">
								<div class="profile-user-box">
									<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-16.jpg" alt="User Image"></router-link>
									<div class="profile-name-box">
										<h2><router-link to="/admin/profile">William Cooper</router-link></h2>
										<p>Date of Join: 22 May 2021 </p>
									</div>
								</div>
							</div>
							<div class="col-lg-2 col-md-2">
								<div class="additional-info">
									<p>Freelancer ID</p>
									<h5>UID00003</h5>
								</div>
							</div>
							<div class="col-lg-2 col-md-2">
								<div class="additional-info">
									<p>Email </p>
									<h5 class="verify-mail"><i data-feather="check-circle" class="me-1 text-success"></i> Verified </h5>
								</div>
							</div>
							<div class="col-lg-2 col-md-2">
								<div class="additional-info">
									<p>Account Status</p>
									<h5 class="text-danger">Active</h5>
								</div>
							</div>
						</div>
					</div>
					<!-- /User Profile -->

					<div class="row">
						<div class="col-sm-12">
							<div class="card profile-home">
								<div class="subscribe-employe users-list transaction-list">
									<ul>
										<li ><router-link to="/admin/user-profile"><img class="me-2" src="../../../../assets/admin-img/icon/icon-09.svg" alt="">Personal </router-link></li>
										<li class="active"><router-link to="/admin/profile-transactions"><img class="me-2" src="../../../../assets/admin-img/icon/icon-13.svg" alt="">Transactions </router-link></li>
										<li><router-link to="/admin/activities"><img class="me-2" src="../../../../assets/admin-img/icon/icon-11.svg" alt="">Activities</router-link></li>
									</ul>
									<div class="profile-icon-group">
										<div class="d-flex">
											<a href="javascript:void(0);" class="reset-icon me-1">
												<img src="../../../../assets/admin-img/icon/icon-03.svg" alt="">
											</a>
											<a class="suspend-icon" href="javascript:void(0);">
												<img src="../../../../assets/admin-img/icon/icon-04.svg" alt="">
											</a>
										</div>
									</div>
								</div>
								
								<!-- Active Profile Header -->
								<div class="page-header profile-information">
									<div class="row align-items-center">
										<div class="col">
											<h3 class="page-title">Recent Transaction</h3>
											<p> All the recent transaction made by user.</p>
										</div>
									</div>
								</div>
								<!-- /Active Profile Header -->
								
								<div class="card ">
								<div class="table-responsive">
									<table class="table table-center table-hover mb-0 user-tables">
										<thead>
											<tr>
												<th>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" id="select-all">
													  <label class="form-check-label" ></label>
													</div>
												</th>
												<th>Order</th>
												<th>Type</th>	
												<th>Details</th>	
												<th>Reference</th>	
												<th>Amount</th>	
												<th></th>	
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
														<input type="checkbox" class="form-check-input" >
														<label class="form-check-label" ></label>
													</div>
												</td>
												<td>#24586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><i class="fas fa-exchange-alt exchange"></i></router-link>
														<div>
															<h5><router-link to="/admin/profile">Received from Investment Account</router-link></h5>
															<p class="receive-date">	Mar 13, 2022<span>Completed</span></p>
														</div>
													</div>
												</td>
												<td ><button class="btn received-btn">Recieved</button></td>
												<td>
													151410331 
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-success">+ 4,335.006 USD</h5>
															<p>	Balance : 1,335.006 USD</p>
														</div>
													</div>
												</td>
												<td class="text-end complete-show">
													<a href="javascript:void(0);" ><i class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
														<input type="checkbox" class="form-check-input" >
														<label class="form-check-label" ></label>
													</div>
												</td>
												<td>#34586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><i class="fas fa-undo-alt refresh"></i></router-link>
														<div>
															<h5><router-link to="/admin/profile">Received from Investment Account</router-link></h5>
															<p class="receive-date">	Jun 13, 2022<span>Completed</span></p>
														</div>
													</div>
												</td>
												<td ><button class="btn withdraw-btn text-danger">Withdrawn</button></td>
												<td>
													261410331 
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-danger">- 5,335.006 USD</h5>
															<p>	Balance : 1,335.006 USD</p>
														</div>
													</div>
												</td>
												<td class="text-end complete-show">
													<a href="javascript:void(0);" ><i class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
														<input type="checkbox" class="form-check-input" >
														<label class="form-check-label" ></label>
													</div>
												</td>
												<td>#34586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><i class="fas fa-exchange-alt exchange"></i></router-link>
														<div>
															<h5><router-link to="/admin/profile">Received from Investment Account</router-link></h5>
															<p class="receive-date">	Mar 13, 2022<span>Completed</span></p>
														</div>
													</div>
												</td>
												<td ><button class="btn received-btn">Recieved</button></td>
												<td>
													341410331 
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-success">+ 4,335.006 USD</h5>
															<p>	Balance : 1,335.006 USD</p>
														</div>
													</div>
												</td>
												<td class="text-end complete-show">
													<a href="javascript:void(0);" ><i class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
														<input type="checkbox" class="form-check-input" >
														<label class="form-check-label" ></label>
													</div>
												</td>
												<td>#34586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><i class="fas fa-undo-alt refresh"></i></router-link>
														<div>
															<h5><router-link to="/admin/profile">Received from Investment Account</router-link></h5>
															<p class="receive-date">	Jun 13, 2022<span>Completed</span></p>
														</div>
													</div>
												</td>
												<td ><button class="btn withdraw-btn text-danger">Withdrawn</button></td>
												<td>
													261410331 
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-danger">- 5,335.006 USD</h5>
															<p>	Balance : 1,335.006 USD</p>
														</div>
													</div>
												</td>
												<td class="text-end complete-show">
													<a href="javascript:void(0);" ><i class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
														<input type="checkbox" class="form-check-input" >
														<label class="form-check-label" ></label>
													</div>
												</td>
												<td>#24586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><i class="fas fa-exchange-alt exchange"></i></router-link>
														<div>
															<h5><router-link to="/admin/profile">Received from Investment Account</router-link></h5>
															<p class="receive-date">	Mar 13, 2022<span>Completed</span></p>
														</div>
													</div>
												</td>
												<td ><button class="btn received-btn">Recieved</button></td>
												<td>
													151410331 
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-success">+ 4,335.006 USD</h5>
															<p>	Balance : 1,335.006 USD</p>
														</div>
													</div>
												</td>
												<td class="text-end complete-show">
													<a href="javascript:void(0);" ><i class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
														<input type="checkbox" class="form-check-input" >
														<label class="form-check-label" ></label>
													</div>
												</td>
												<td>#34586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><i class="fas fa-undo-alt refresh"></i></router-link>
														<div>
															<h5><router-link to="/admin/profile">Received from Investment Account</router-link></h5>
															<p class="receive-date">	Jun 13, 2022<span>Completed</span></p>
														</div>
													</div>
												</td>
												<td ><button class="btn withdraw-btn text-danger">Withdrawn</button></td>
												<td>
													261410331 
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-danger">- 5,335.006 USD</h5>
															<p>	Balance : 1,335.006 USD</p>
														</div>
													</div>
												</td>
												<td class="text-end complete-show">
													<a href="javascript:void(0);" ><i class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></a>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
														<input type="checkbox" class="form-check-input" >
														<label class="form-check-label" ></label>
													</div>
												</td>
												<td>#34586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><i class="fas fa-exchange-alt exchange"></i></router-link>
														<div>
															<h5><router-link to="/admin/profile">Received from Investment Account</router-link></h5>
															<p class="receive-date">	Mar 13, 2022<span>Completed</span></p>
														</div>
													</div>
												</td>
												<td ><button class="btn received-btn">Recieved</button></td>
												<td>
													341410331 
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-success">+ 4,335.006 USD</h5>
															<p>	Balance : 1,335.006 USD</p>
														</div>
													</div>
												</td>
												<td class="text-end complete-show">
													<a href="javascript:void(0);" ><i class="fas fa-arrow-right" data-bs-toggle="modal" data-bs-target="#transaction-category"></i></a>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div class="row">
								<div class="col-md-12">
									<ul class="paginations list-pagination text-end mb-4">
										<li><a href="javascript:void(0);"><i class="fas fa-angle-left"></i> Previous</a></li>
										<li><a href="javascript:void(0);" class="active">1</a></li>
										<li><a href="javascript:void(0);" >2</a></li>
										<li><a href="javascript:void(0);">3</a></li>
										<li><a href="javascript:void(0);">4</a></li>
										<li><a href="javascript:void(0);">Next <i class="fas fa-angle-right"></i></a></li>
									</ul>
								</div>
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
		<div class="modal fade transaction-modal" id="transaction-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<div class="modal-header flex-wrap">
						<div class="transaction-group">
							<div class="head-transaction">
								<h4>Transaction</h4>
								<p> #TNX24586414</p>
							</div>
							<div class="complete-btn">
								<a href="" class="btn btn-primary">Completed</a>
							</div>
						</div>
					</div>

					<div class="modal-body">
						<div class="table-avatar user-profile invest-acount">
							<router-link to="/admin/profile"><i class="fas fa-exchange-alt exchange"></i>
								<div>
									<h5>Received from Investment Account</h5>
									<p class="receive-date">	Mar 13, 2022<span>Completed</span></p>
								</div>
							</router-link>
						</div>
						<div class="acount-transaction">
							<div class="row">
								<div class="col-md-6">
									<div class="basic-info ">
										<h4>IN ACCOUNT</h4>
										<div class="additional-info">
											<p> Amount </p>
											<h5>6,335.006 USD</h5>
										</div>
										<div class="additional-info">
											<p>Fees </p>
											<h5>0.00 USD</h5>
										</div>
										<div class="additional-info">
											<p> Total Investment </p>
											<h5>6,335.006 USD</h5>
										</div>
									</div>
								</div>
								<div class="col-md-6">
									<div class="basic-info">
										<h4>IN TRANSACTION</h4>
										<div class="additional-info">
											<p> Amount </p>
											<h5>6,335.006 USD</h5>
										</div>
										<div class="additional-info">
											<p>Fees </p>
											<h5>0.00 USD</h5>
										</div>
										<div class="additional-info">
											<p> Total Investment </p>
											<h5>6,335.006 USD</h5>
										</div>
										<div class="additional-info">
											<p> User Account </p>
											<h5>UID00003</h5>
										</div>
										<div class="additional-info">
											<p> User Email </p>
											<h5>abu...com</h5>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="basic-info additional-detail top-border">
										<h4>Order Details</h4>
										<div class="row">
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Order Date</p>
													<h5>Mar 13, 2022</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p> Placed By</p>
													<h5>UID00001 </h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Completed At</p>
													<h5> Mar 13, 2022 07:00 PM</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Completed By</p>
													<h5> Super Admin</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="basic-info additional-detail">
										<h4 class="mt-0">Additional Details</h4>
										<div class="row">
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Transaction</p>
													<h5>Mar 13, 2022</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p> Payment Gateway</p>
													<h5>Paypal </h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Payment From</p>
													<h5> Dean Jones</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Payment To</p>
													<h5> Main Account</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="basic-info additional-detail">
										<div class="row">
											<div class="col-lg-12">
												<div class="additional-info">
													<p>Updated Balance</p>
													<h5 class="active-balance">13,144.626 USD</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="basic-info additional-detail ">
										<div class="row">
											<div class="col-lg-12">
												<div class="additional-info mb-0">
													<p>Transaction Details</p>
													<h5 > Received from Investment Account</h5>
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