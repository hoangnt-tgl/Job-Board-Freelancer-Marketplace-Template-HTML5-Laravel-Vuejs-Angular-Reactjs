<template>
    <div>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>
			
			<!-- Page Wrapper -->
			<div class="page-wrapper">
				<div class="content container-fluid">
				
					<div class="page-header">
						<div class="row">
							<div class="col-sm-6">
								<h3 class="page-title">Settings</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link>
									</li>
									<li class="breadcrumb-item active">Delete Account</li>
								</ul>
							</div>
						</div>
					</div>
					
					<div class="row">
						<div class="col-xl-3 col-md-4">
						
							<!-- Settings Menu -->
							<div class="widget settings-menu">
								<ul>
									<li class="nav-item">
										<router-link to="/admin/settings" class="nav-link">
											<i class="far fa-user"></i> <span>Profile Settings</span>
                                        </router-link>
									</li>
									<li class="nav-item">
										<router-link to="/admin/tax-types" class="nav-link">
											<i class="far fa-check-square"></i> <span>Tax Types</span>
                                        </router-link>
									</li>
									<li class="nav-item">
										<router-link to="/admin/change-password" class="nav-link">
											<i class="fas fa-unlock-alt"></i> <span>Change Password</span>
                                        </router-link>
									</li>
									<li class="nav-item">
										<router-link to="/admin/delete-account" class="nav-link active">
											<i class="fas fa-ban"></i> <span>Delete Account</span>
                                        </router-link>
									</li>
								</ul>
							</div>
							<!-- /Settings Menu -->
							
						</div>
						
						<div class="col-xl-9 col-md-8">
							<div class="card">
								<div class="card-body pt-0">
									<div class="card-header mb-4">
										<h5 class="card-title">Delete your account</h5>
									</div>
								
									<!-- Form -->
									<form>
										<p class="card-text">When you delete your account, you lose access to Kanakku account services, and we permanently delete your personal data.</p>
										<p class="card-text">Are you sure you want to close your account?</p>

										<div class="form-group">
											<div class="form-check form-checkbox">
												<input type="checkbox" class="form-check-input" id="delete_account">
												<label class="form-check-label text-danger" for="delete_account">Confirm that I want to delete my account.</label>
											</div>
										</div>

										<div class="text-end">
											<button type="submit" class="btn btn-primary">Save Changes</button>
										</div>
									</form>
									<!-- /Form -->
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->

    </div>
</template>
