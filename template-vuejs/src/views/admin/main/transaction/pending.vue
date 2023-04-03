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
					<div class="page-header subscribe-head border-bottom-0">
						<div class="row align-items-center">
							<div class="col">
								<h3 class="page-title">Transactions</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link></li>
									
									<li class="breadcrumb-item active">Transactions</li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->

					<div class="row">
						<div class="col-sm-12">
							<div class="subscribe-employe users-list">
								<ul>
									<li ><router-link to="/admin/transaction">All Transaction </router-link></li>
									<li><router-link to="/admin/transaction-deposit">Deposit</router-link></li>
									<li><router-link to="/admin/transaction-withdraw">Withdraw</router-link></li>
									<li class="active"><router-link to="/admin/transaction-pending">Pending</router-link></li>
									<li><router-link to="/admin/transaction-onhold">Onhold</router-link></li>
									<li><router-link to="/admin/transaction-completed">Completed</router-link></li>
								</ul>
							</div>
							
							<!-- Active User Header -->
							<div class="page-header user-active">
								<div class="row align-items-center">
									<div class="col">
										<h3 class="page-title">Pending</h3>
										<p>Total <span>57</span> Transaction</p>
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
												<th>Order</th>
												<th>User</th>	
												<th>Details</th>	
												<th>Tnx By</th>	
												<th>Amount</th>	
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
												<td>#24586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-13.jpg" alt="User Image"></router-link>
														<div>
															<h5><a href="javascript:void(0);">Janet Paden</a></h5>
															<p>	georgewells@example.com</p>
														</div>	
													</div>
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5>Withdraw Funds</h5>
															<p>	Apr 25, 2022</p>
														</div>
													</div>
												</td>
												<td class="content-user"><p>PayPal</p></td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-danger">- 5,165,000 USD</h5>
															<p>	Balance : 6,335.006 USD</p>
														</div>
													</div>
												</td>
												<td>
													<a href="javascript:void(0);" class="pending">Pending</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<router-link class="dropdown-item" to="/admin/user-profile"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-05.svg" alt=""> User Profile</router-link>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-06.svg" alt=""> Approve</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-07.svg" alt=""> Reject </a>
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
												<td>#44586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-11.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Floyd Lewis</router-link></h5>
																<p> floydlewis@example.com</p>
															</div>
													</div>
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5>Deposit Funds</h5>
															<p>	Jun 15, 2012</p>
														</div>
													</div>
												</td>
												<td class="content-user"><p>PayPal</p></td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-success">+ 3,335.006 USD</h5>
															<p>	Balance : 2,335.006 USD</p>
														</div>
													</div>
												</td>
												<td>
													<a href="javascript:void(0);" class="pending">Pending</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<router-link class="dropdown-item" to="/admin/user-profile"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-05.svg" alt=""> User Profile</router-link>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-06.svg" alt=""> Approve</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-07.svg" alt=""> Reject </a>
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
												<td>#14586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-16.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Andrew Glover</router-link></h5>
																<p>Andrewglover@example.com</p>
															</div>
													</div>
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5>Withdraw Funds</h5>
															<p>	May 21, 2022</p>
														</div>
													</div>
												</td>
												<td class="content-user"><p>Bank Transfer</p></td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-danger">- 5,165,000 USD</h5>
															<p>	Balance : 6,335.006 USD</p>
														</div>
													</div>
												</td>
												<td>
													<a href="javascript:void(0);" class="pending">Pending</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<router-link class="dropdown-item" to="/admin/user-profile"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-05.svg" alt=""> User Profile</router-link>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-06.svg" alt=""> Approve</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-07.svg" alt=""> Reject </a>
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
												<td>#24586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-14.jpg" alt="User Image"></router-link>
														<div>
															<h5><a href="javascript:void(0);">Janet Paden</a></h5>
															<p>	georgewells@example.com</p>
														</div>	
													</div>
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5>Withdraw Funds</h5>
															<p>	Apr 25, 2022</p>
														</div>
													</div>
												</td>
												<td class="content-user"><p>PayPal</p></td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-danger">- 5,165,000 USD</h5>
															<p>	Balance : 6,335.006 USD</p>
														</div>
													</div>
												</td>
												<td>
													<a href="javascript:void(0);" class="pending">Pending</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<router-link class="dropdown-item" to="/admin/user-profile"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-05.svg" alt=""> User Profile</router-link>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-06.svg" alt=""> Approve</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-07.svg" alt=""> Reject </a>
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
												<td>#44586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-15.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Floyd Lewis</router-link></h5>
																<p> floydlewis@example.com</p>
															</div>
													</div>
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5>Deposit Funds</h5>
															<p>	Jun 15, 2012</p>
														</div>
													</div>
												</td>
												<td class="content-user"><p>PayPal</p></td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-success">+ 3,335.006 USD</h5>
															<p>	Balance : 2,335.006 USD</p>
														</div>
													</div>
												</td>
												<td>
													<a href="javascript:void(0);" class="pending">Pending</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<router-link class="dropdown-item" to="/admin/user-profile"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-05.svg" alt=""> User Profile</router-link>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-06.svg" alt=""> Approve</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-07.svg" alt=""> Reject </a>
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
												<td>#14586414</td>
												<td>
													<div class="table-avatar user-profile">
														<router-link to="/admin/profile"><img class="avatar-img rounded-circle " src="../../../../assets/admin-img/profiles/avatar-16.jpg" alt="User Image"></router-link>
															<div>
																<h5><router-link to="/admin/profile">Andrew Glover</router-link></h5>
																<p>Andrewglover@example.com</p>
															</div>
													</div>
												</td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5>Withdraw Funds</h5>
															<p>	May 21, 2022</p>
														</div>
													</div>
												</td>
												<td class="content-user"><p>Bank Transfer</p></td>
												<td>
													<div class="table-avatar content-user">
														<div>
															<h5 class="text-danger">- 5,165,000 USD</h5>
															<p>	Balance : 6,335.006 USD</p>
														</div>
													</div>
												</td>
												<td>
													<a href="javascript:void(0);" class="pending">Pending</a>
												</td>
												<td class="text-end three-dots">
													<a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown"><i class="fas fa-ellipsis-v"></i></a>
													<div class="dropdown-menu user-menu-list">
														<a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#transaction-category"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-01.svg" alt=""> View Details</a>
														<router-link class="dropdown-item" to="/admin/user-profile"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-05.svg" alt=""> User Profile</router-link>
														<a class="dropdown-item" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-06.svg" alt=""> Approve</a>
														<a class="dropdown-item mb-0" href="javascript:void(0);"><img class="me-2 " src="../../../../assets/admin-img/icon/icon-07.svg" alt=""> Reject </a>
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
							<router-link to="/admin/profile"><img class="exchange case-icon" src="../../../../assets/admin-img/icon/icon-15.svg" alt="">
								<div>
									<h5>200.00 USDT</h5>
									<p class="receive-date">Apr 25, 2022 11:01 AM</p>
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
											<p> Freelancer Investment </p>
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
										</div>
									</div>
								</div>
								<div class="col-md-12">
									<div class="basic-info additional-detail">
										<h4 class="mt-0">Additional Details</h4>
										<div class="row">
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Transaction Type</p>
													<h5>Deposit</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p> Payment Gateway</p>
													<h5>Paypal </h5>
												</div>
											</div>
											<div class="col-lg-6 col-md-6">
												<div class="additional-info">
													<p>Payment To</p>
													<h5> usdttest87i2UK3JUWzR7iy6z5eRrxbAeT</h5>
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
