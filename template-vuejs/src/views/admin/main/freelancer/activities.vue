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
										<li ><router-link to="/admin/profile-transactions"><img class="me-2" src="../../../../assets/admin-img/icon/icon-10.svg" alt="">Transactions </router-link></li>
										<li class="active"><router-link to="/admin/activities"><img class="me-2" src="../../../../assets/admin-img/icon/icon-14.svg" alt="">Activities</router-link></li>
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
										<div class="col-12">
											<h3 class="page-title">Login Activities </h3>
											<p> The activities of login for the user.</p>
										</div>
									</div>
								</div>
								<!-- /Active Profile Header -->
								
								<div class="card ">
								<div class="table-responsive">
									<table class="table table-center table-hover mb-0 user-tables user-activities">
										<thead>
											<tr>
												<th>Name</th>
												<th>Event Info</th>	
												<th>Detection IP</th>	
												<th>Detection Time</th>	
											</tr>
										</thead>
										<tbody>
											<tr>
												<td class="name-user"><a href="javascript:void(0);">User Login</a></td>
												<td>Login to “System/Administrator”</td>
												<td>116.165.159.125</td>
												<td>Apr 22, 2022 05:24 AM</td>
											</tr>
											<tr>
												<td class="name-user"><a href="javascript:void(0);">Task Updation</a></td>
												<td>Change task “Inprrogress” to “Completed”</td>
												<td>104.165.159.125</td>
												<td>May 26, 2022 05:14 AM</td>
											</tr>
											<tr>
												<td class="name-user"><a href="javascript:void(0);">User Logoff</a></td>
												<td>Logoff  “System/Administrator”</td>
												<td>123.165.159.125</td>
												<td>Jun 12, 2022 03:54 AM</td>
											</tr>
											<tr>
												<td class="name-user"><a href="javascript:void(0);">Task Updation</a></td>
												<td>Change task “Inprrogress” to “Completed”</td>
												<td>104.165.159.125</td>
												<td>Dec 16, 2022 02:24 AM</td>
											</tr>
											<tr>
												<td class="name-user"><a href="javascript:void(0);">User Logoff</a></td>
												<td>Logoff  “System/Administrator”</td>
												<td>123.165.159.125</td>
												<td>Feb 10, 2022 04:44 AM</td>
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
        <adminmodal></adminmodal>
    </div>
</template>
