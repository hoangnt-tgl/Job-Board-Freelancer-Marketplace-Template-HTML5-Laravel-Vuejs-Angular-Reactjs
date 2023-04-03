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
										<li class="active"><router-link to="/admin/user-profile"><img class="me-2" src="../../../../assets/admin-img/icon/icon-12.svg" alt="">Personal </router-link></li>
										<li><router-link to="/admin/profile-transactions"><img class="me-2" src="../../../../assets/admin-img/icon/icon-10.svg" alt="">Transactions </router-link></li>
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
										<div class="col-12">
											<h3 class="page-title">Personal Information</h3>
											<p> Basic info, like name and address etc that used on platform.</p>
										</div>
									</div>
								</div>
								<!-- /Active Profile Header -->
								
								<!-- Basic Information -->
								<div class="row">
									<div class="col-md-6">
										<div class="basic-info">
											<h4>BASIC INFORMATION</h4>
											<ul class="information-list">
												<li>Username <span>William</span></li>
												<li>Email Address <span>william@example.com</span></li>
												<li>Full Name <span>William Cooper</span></li>
												<li>Display Name <span>Ishtiyak</span></li>
												<li>Mobile Number <span>707 229 8991</span></li>
												<li>Date of Birth <span>Jan 08, 1997</span></li>
												<li >Gender <span>Not updated yet</span></li>
											</ul>
										</div>
									</div>
									<div class="col-md-6">
										<div class="basic-info">
											<h4>RESIDENTIAL ADDRESS</h4>
											<ul class="information-list">
												<li>Address Line <span>Not updated yet</span></li>
												<li>City<span>Not updated yet</span></li>
												<li>State / Province<span>Not updated yet</span></li>
												<li>Zip / Postal Code<span>Not updated yet</span></li>
												<li>Country <span>Us</span></li>
											</ul>
										</div>
									</div>
									<div class="col-md-12">
										<div class="basic-info additional-space">
											<h4>ADDITIONAL INFORMATION</h4>
										</div>	
										<div class="row">
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Join Date </p>
													<h5>May 20, 2021</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Reg Method</p>
													<h5>By Email</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info">
													<p>Email Verified At</p>
													<h5>May 20, 2021 04:53 AM</h5>
												</div>
											</div>
											<div class="col-lg-3 col-md-6">
												<div class="additional-info mb-0">
													<p>Save Activity Logs</p>
													<h5>Enabled</h5>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- /Basic Information -->
								
							</div>			
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