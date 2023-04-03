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
								<h3 class="page-title">Freelancer</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link></li>
									
									<li class="breadcrumb-item active">Freelancer</li>
								</ul>
							</div>
							<div class="col-auto">
								<a class="btn  add-user" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#add-category">
									<i class="fas fa-plus "></i> Add Freelancer
								</a>
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					<div class="row">
						<div class="col-sm-12">
							<div class="subscribe-employe users-list">
								<ul>
									<li class="active"><router-link to="/admin/users">All Freelancer </router-link></li>
									<li><router-link to="/admin/user-active">Active Freelancer</router-link></li>
									<li><router-link to="/admin/user-inactive">Inactive Freelancer</router-link></li>
									<li><router-link to="/admin/user-suspended">Suspended</router-link></li>
									<li><router-link to="/admin/user-administrator">Administrator</router-link></li>
								</ul>
							</div>
							
							<!-- Active User Header -->
							<div class="page-header user-active">
								<div class="row align-items-center">
									<div class="col">
										<h3 class="page-title">All Freelancer</h3>
										<p>Total <span>57</span> Freelancer account</p>
									</div>
									<div class="col-auto">
										<a href="javascript:void(0);" class="btn export-btn me-1" >
											<img src="../../../../assets/admin-img/export.svg" alt=""> Export
										</a>
										<a class="btn filter-btn" href="javascript:void(0);" id="filter_search">
											<i class="fas fa-filter"></i>
										</a>
									</div>
								</div>
							</div>
							<!-- /Active User Header -->

							<!-- Search Filter -->
							<div class="card filter-card" id="filter_inputs">
								<div class="card-body pb-0">
									<form action="#" method="post">
										<div class="row filter-row">
											<div class="col-sm-6 col-md-3">
												<div class="form-group">
													<label>Name</label>
													<input class="form-control" type="text">
												</div>
											</div>
											<div class="col-sm-6 col-md-3">
												<div class="form-group">
													<label>Email</label>
													<input type="email" class="form-control">										
												</div>
											</div>
											<div class="col-sm-6 col-md-3">
												<div class="form-group">
													<label>Expertise</label>
													<input type="text" class="form-control">
												</div>
											</div>
											<div class="col-sm-6 col-md-3">
												<div class="form-group">
													<button class="btn btn-primary btn-block" type="submit">Submit</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
							<!-- /Search Filter -->
							
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
												<th>Freelancer</th>
												<th>Expertise</th>	
												<th>Verified</th>	
												<th>Account Balance </th>	
												<th>Joined Date</th>	
												<th>Last Login</th>	
												<th>Status</th>	
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
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-14.jpg" alt="User Image"></router-link>
														<div>
															<h5><a href="javascript:void(0);">Janet Paden</a></h5>
															<p>	georgewells@example.com</p>
														</div>	
													</div>
												</td>
												<td>Frontend Developer</td>
												<td class="verify-mail"><i data-feather="check-circle" class="me-1 text-success"></i>Email</td>
												<td>$7,763.05</td>
												<td>21 April 2022</td>
												<td>10 May 2022</td>
												<td>
													<a href="javascript:void(0);" class="user-active-btn">Active</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-02.svg" alt=""> Transaction</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-03.svg" alt=""> Reset Password</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-04.svg" alt=""> Suspend user</a>
														<a class="dropdown-item" href="javascript:void(0);"><i data-feather="edit" class="me-2"></i> Edit</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><i data-feather="trash-2" class="me-2 text-danger"></i> Delete</a>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" >
													  <label class="form-check-label" ></label>
													</div>
												</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-15.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Floyd Lewis</router-link></h5>
																<p> floydlewis@example.com</p>
															</div>
													</div>
												</td>
												<td>Graphic Designer</td>
												<td class="verify-mail"><i data-feather="check-circle" class="me-1 email-check"></i>Email</td>
												<td>$6,763.05</td>
												<td>11 Jun 2022</td>
												<td>25 Sep 2021</td>
												<td>
													<a href="javascript:void(0);" class="user-active-btn">Active</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<a class="dropdown-item" href="javascript:void(0)"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-02.svg" alt=""> Transaction</a>
														<a class="dropdown-item" href="javascript:void(0)"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-03.svg" alt=""> Reset Password</a>
														<a class="dropdown-item" href="javascript:void(0)"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-04.svg" alt=""> Suspend user</a>
														<a class="dropdown-item" href="javascript:void(0)"><i data-feather="edit" class="me-2"></i> Edit</a>
														<a class="dropdown-item mb-0" href="javascript:void(0)"><i data-feather="trash-2" class="me-2 text-danger"></i> Delete</a>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" >
													  <label class="form-check-label" ></label>
													</div>
												</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-10.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Andrew Glover</router-link></h5>
																<p>Andrewglover@example.com</p>
															</div>
													</div>
												</td>
												<td>PHP Developer</td>
												<td class="verify-mail"><i data-feather="check-circle" class="me-1 text-success"></i>Email</td>
												<td>$2,763.05</td>
												<td>01 April 2022</td>
												<td>28 Dec 2022</td>
												<td>
													<a href="javascript:void(0);" class="user-inactive-btn">Inactive</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-02.svg" alt=""> Transaction</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-03.svg" alt=""> Reset Password</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-04.svg" alt=""> Suspend user</a>
														<a class="dropdown-item" href="javascript:void(0);"><i data-feather="edit" class="me-2"></i> Edit</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><i data-feather="trash-2" class="me-2 text-danger"></i> Delete</a>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" >
													  <label class="form-check-label" ></label>
													</div>
												</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-14.jpg" alt="User Image"></router-link>
														<div>
															<h5><a href="javascript:void(0);">Janet Paden</a></h5>
															<p>	georgewells@example.com</p>
														</div>	
													</div>
												</td>
												<td>Frontend Developer</td>
												<td class="verify-mail"><i data-feather="check-circle" class="me-1 text-success"></i>Email</td>
												<td>$7,763.05</td>
												<td>21 April 2022</td>
												<td>10 May 2022</td>
												<td>
													<a href="javascript:void(0);" class="user-active-btn">Active</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-02.svg" alt=""> Transaction</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-03.svg" alt=""> Reset Password</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-04.svg" alt=""> Suspend user</a>
														<a class="dropdown-item" href="javascript:void(0);"><i data-feather="edit" class="me-2"></i> Edit</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><i data-feather="trash-2" class="me-2 text-danger"></i> Delete</a>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" >
													  <label class="form-check-label" ></label>
													</div>
												</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-13.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Floyd Lewis</router-link></h5>
																<p> floydlewis@example.com</p>
															</div>
													</div>
												</td>
												<td>Graphic Designer</td>
												<td class="verify-mail"><i data-feather="check-circle" class="me-1 email-check"></i>Email</td>
												<td>$6,763.05</td>
												<td>11 Jun 2022</td>
												<td>25 Sep 2021</td>
												<td>
													<a href="javascript:void(0);" class="user-active-btn">Active</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<a class="dropdown-item" href="javascript:void(0)"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-02.svg" alt=""> Transaction</a>
														<a class="dropdown-item" href="javascript:void(0)"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-03.svg" alt=""> Reset Password</a>
														<a class="dropdown-item" href="javascript:void(0)"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-04.svg" alt=""> Suspend user</a>
														<a class="dropdown-item" href="javascript:void(0)"><i data-feather="edit" class="me-2"></i> Edit</a>
														<a class="dropdown-item mb-0" href="javascript:void(0)"><i data-feather="trash-2" class="me-2 text-danger"></i> Delete</a>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div class="form-check custom-checkbox">
													  <input type="checkbox" class="form-check-input" >
													  <label class="form-check-label" ></label>
													</div>
												</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-16.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Andrew Glover</router-link></h5>
																<p>Andrewglover@example.com</p>
															</div>
													</div>
												</td>
												<td>PHP Developer</td>
												<td class="verify-mail"><i data-feather="check-circle" class="me-1 text-success"></i>Email</td>
												<td>$2,763.05</td>
												<td>01 April 2022</td>
												<td>28 Dec 2022</td>
												<td>
													<a href="javascript:void(0);" class="user-inactive-btn">Inactive</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-02.svg" alt=""> Transaction</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-03.svg" alt=""> Reset Password</a>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-04.svg" alt=""> Suspend user</a>
														<a class="dropdown-item" href="javascript:void(0);"><i data-feather="edit" class="me-2"></i> Edit</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><i data-feather="trash-2" class="me-2 text-danger"></i> Delete</a>
													</div>
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
											<p> Freelancer Account </p>
											<h5>UID00003</h5>
										</div>
										<div class="additional-info">
											<p> Freelancer Email </p>
											<h5>william@example.com</h5>
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
		<div class="modal fade custom-modal" id="add-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<div class="modal-header flex-wrap">
						<div class="text-center w-100 mb-3">
							<img src="../../../../assets/admin-img/logo-small.png" alt="">
						</div>
						<h4 class="modal-title">Add New Freelancer</h4>
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
								<label>Freelancer Type</label>
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
            $(document).on('click', '#filter_search', function() {
		$('#filter_inputs').slideToggle("slow");
	});
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