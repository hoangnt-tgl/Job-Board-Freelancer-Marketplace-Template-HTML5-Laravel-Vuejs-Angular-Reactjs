<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-freelancerprojectheader></layout-freelancerprojectheader>
			<!-- /Header -->

            <!-- Breadcrumb -->
			<div class="bread-crumb-bar">
				<div class="container">
					<div class="row align-items-center inner-banner">
						<div class="col-md-12 col-12 text-center">
							<div class="breadcrumb-list">
								<nav aria-label="breadcrumb" class="page-breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Freelancer</li>
										<li class="breadcrumb-item" aria-current="page">Settings</li>
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
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/freelancer-profile"><img alt="profile image" src="../../../assets/img/user/avatar-1.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<h3 class="mb-0"><router-link to="/freelancer-profile">George Wells</router-link></h3>
										<p class="mb-0">@georgewell</p>
									</div>
								</div>
								<div class="settings-menu">
									<ul>
										<li class="nav-item">
											<router-link to="/freelancer-dashboard" class="nav-link">
												<i class="material-icons">verified_user</i> Dashboard
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-project-proposals" class="nav-link">
												<i class="material-icons">business_center</i> Projects
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-favourites" class="nav-link">
												<i class="material-icons">local_play</i> Favourites
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-review" class="nav-link">
												<i class="material-icons">record_voice_over</i> Reviews
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-portfolio" class="nav-link">
												<i class="material-icons">pie_chart</i> Portfolio
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-chats" class="nav-link">
												<i class="material-icons">chat</i> Messages
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-membership" class="nav-link">
												<i class="material-icons">person_add</i> Membership
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-verify-identity" class="nav-link">
												<i class="material-icons">person_pin</i> Verify Identity
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-withdraw-money" class="nav-link">
												<i class="material-icons">wifi_tethering</i> Payments
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/freelancer-profile-settings" class="nav-link active">
												<i class="material-icons">settings</i>  Settings
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/" class="nav-link">
												<i class="material-icons">power_settings_new</i> Logout
                                            </router-link>
										</li>
									</ul>
								</div>
							</div>	
                        </div>		
						</div>	
						<div class="col-xl-9 col-md-8">
							<div class="pro-pos">
								<nav class="user-tabs mb-4">
									<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
										<li class="nav-item">
											<router-link class="nav-link active" to="/freelancer-profile-settings">Profile Settings</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/freelancer-change-password">Change Password</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/freelancer-delete-account">Delete Account</router-link>
										</li>
									</ul>
								</nav>
								<div class="setting-content">																		
									<form>
										<div class="card">
											<div class="pro-head">
												<h3 class="pro-title without-border mb-0">Profile Basics </h3>
											</div>	
											<div class="pro-body">
												<div class="row">
													<div class="form-group col-md-6">
														<label>Username</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Email Address</label>
														<input type="email" class="form-control">

													</div>
													<div class="form-group col-md-6">
														<label>Dispaly Name</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Designation</label>
														<input type="email" class="form-control">

													</div>
													<div class="form-group col-md-6">
														<label>Hourly Rate</label>
														<input type="text" class="form-control">
														<p class="light-pink-text mb-0">Provide your hourly rate without currency symbol</p>
													</div>
													<div class="form-group col-md-6">
														<label>Contact Number</label>
														<input type="email" class="form-control">

													</div>
													<div class="form-group col-md-6">
														<label>Gender</label>
														<select name="price" class="form-control select">
															<option value="0">Male</option>
															<option value="1" >Female</option>
														</select>
													</div>
													<div class="form-group col-md-6">
														<label>Type</label>
														<select name="price" class="form-control select">
															<option value="0">Select Freelancer Type</option>
															<option value="1" >Freelancer</option>
														</select>
													</div>
													<div class="form-group col-md-6">
														<label>Language </label>
														<input type="text" class="form-control">
													</div>
												</div>												
												<div class="form-row pro-pad pt-0">
													<div class="form-group col-md-6 pro-pic">
														<label>Profile Picture</label>
														<div class="d-flex align-items-center">														
															<div class="upload-images">
																<img src="../../../assets/img/img-02.jpg" alt="Image">
																<a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i class="far fa-trash-alt"></i></a>
															</div>
															<label class="file-upload image-upbtn ms-3">
																Change Image <input type="file">
															</label>
														</div>
														<p>Image size 300*300</p>
													</div>
													<div class="form-group col-md-6 pro-pic">
														<label>Banner Image</label>
														<div class="d-flex align-items-center">														
															<div class="upload-images">
																<img src="../../../assets/img/img-02.jpg" alt="Image">
																<a href="javascript:void(0);" class="btn btn-icon btn-danger btn-sm"><i class="far fa-trash-alt"></i></a>
															</div>
															<label class="file-upload image-upbtn ms-3">
																Change Image <input type="file">
															</label>
														</div>
														<p>Image size 1024*100</p>
													</div>
												</div>
											</div>
										</div>
									
										<div class="card">
											<div class="pro-head">
												<h3 class="pro-title without-border mb-0">Location</h3>
											</div>
											<div class="pro-body">
												<div class="row">
													<div class="form-group col-md-12">
														<label>Address</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>State</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Zipcode</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Country</label>
														<select name="price" class="form-control select">
															<option value="0">India</option>
															<option value="1" >China</option>
															<option value="2">Japan</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										
										<div class="card">
											<div class="pro-head">
												<h3 class="pro-title without-border mb-0">Overview</h3>
											</div>
											<div class="pro-body">
												<div class="row">
													<div class="form-group col-md-12">
														<textarea class="form-control" rows="5"></textarea>
													</div>
												</div>
											</div>
										</div>
										
										<div class="form-row">
											<div class="col-md-12 col-xl-4 d-flex">
												<div class="pro-card flex-fill mb-3">
													<div class="pro-head">
														<h3 class="pro-title without-border mb-0">Skills</h3>
														<a href="javascript:void(0);" class="btn fund-btn skill-add">Add More</a>
													</div>
													<div class="pro-body skill-info">
														<div class="form-row align-items-center skill-cont">
															<div class="form-group col-md-10">
																<input type="text" class="form-control" value="Front End Developer">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center skill-cont">
															<div class="form-group col-md-10">
																<input type="text" class="form-control" value="Front End Developer">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center skill-cont">
															<div class="form-group col-md-10">
																<input type="text" class="form-control" value="Front End Developer">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center skill-cont">
															<div class="form-group col-md-10">
																<input type="text" class="form-control" value="Front End Developer">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center skill-cont">
															<div class="form-group col-md-10">
																<input type="text" class="form-control" value="Front End Developer">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center skill-cont">
															<div class="form-group col-md-10">
																<input type="text" class="form-control" value="Front End Developer">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
													</div>
												</div>
											</div>
											
											<div class="col-md-12 col-xl-8">
												<div class="card">
													<div class="pro-head">
														<h3 class="pro-title without-border mb-0">Awards / Certificates</h3>
														<a href="javascript:void(0);" class="btn fund-btn add-award">Add More</a>
													</div>
													<div class="pro-body  award-info">
														<div class="form-row align-items-center award-cont">
															<div class="form-group col-md-2">
																<img alt="profile image" src="../../../assets/img/img.jpg" class="avatar-medium">
															</div>
															<div class="form-group col-md-5">
																<input type="text" class="form-control" value="Best Game Designer">
															</div>
															<div class="form-group col-md-3">
																<input type="text" class="form-control datetimepicker" value="05/10/2020">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center award-cont">
															<div class="form-group col-md-2">
																<img alt="profile image" src="../../../assets/img/img.jpg" class="avatar-medium">
															</div>
															<div class="form-group col-md-5">
																<input type="text" class="form-control" value="Best Game Designer">
															</div>
															<div class="form-group col-md-3">
																<input type="text" class="form-control datetimepicker" value="05/10/2020">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center award-cont">
															<div class="form-group col-md-2">															
																<img alt="profile image" src="../../../assets/img/img.jpg" class="avatar-medium">
															</div>
															<div class="form-group col-md-5">
																<input type="text" class="form-control" value="Best Game Designer">
															</div>
															<div class="form-group col-md-3">
																<input type="text" class="form-control datetimepicker" value="05/10/2020">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
													</div>
												</div>
												
												<div class="card">
													<div class="pro-head">
														<h3 class="pro-title without-border mb-0">Languages</h3>
														<a href="javascript:void(0);" class="btn fund-btn add-lang">Add More</a>
													</div>
													<div class="pro-body  lang-info">
														<div class="form-row align-items-center lang-cont">
															<div class="form-group col-md-7">
																<input type="text" class="form-control" value="English">
															</div>
															<div class="form-group col-md-3">
																<input type="text" class="form-control" value="100">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center lang-cont">
															<div class="form-group col-md-7">
																<input type="text" class="form-control" value="Russian">
															</div>
															<div class="form-group col-md-3">
																<input type="text" class="form-control" value="90">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
														<div class="form-row align-items-center lang-cont">
															<div class="form-group col-md-7">
																<input type="text" class="form-control" value="Germany">
															</div>
															<div class="form-group col-md-3">
																<input type="text" class="form-control" value="90">
															</div>
															<div class="form-group col-md-2">
																<a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a>
															</div>
														</div>
													</div>
												</div>											
											</div>										
										</div>
										
										<div class="card">
											<div class="pro-head">
												<h3 class="pro-title without-border mb-0">Experience</h3>
												<a href="javascript:void(0);" class="btn fund-btn add-exp">Add More</a>
											</div>
											<div class="pro-body">
												<div class="exp-info">
													<div class="row exp-cont">
														<div class="form-group col-md-6">
															<label>Title</label>
															<input type="text" class="form-control">
														</div>
														<div class="form-group col-md-6">
															<label>Company name</label>
															<input type="text" class="form-control">
														</div>
														<div class="form-group col-md-6">
															<label>Start date</label>
															<input type="text" class="form-control datetimepicker" placeholder="Select Date">
														</div>
														<div class="form-group col-md-6">
															<label>End Date</label>
															<input type="text" class="form-control datetimepicker" placeholder="Select Date">
														</div>
														<div class="form-group col-md-12">
															<label class="custom_check">
																<input type="checkbox" name="rem_password">
																<span class="checkmark"></span> I'm currently working here
															</label>
														</div>
														<div class="form-group col-md-12">
															<label>Summary</label>
															<textarea class="form-control" rows="5"></textarea>
														</div>
													</div>
												</div>
											</div>
										</div>
										
										<div class="card">
											<div class="pro-head">
												<h3 class="pro-title without-border mb-0">Educational Details</h3>
												<a href="javascript:void(0);" class="btn fund-btn">Add More Skills</a>
											</div>
											<div class="pro-body">
												<div class="row">
													<div class="form-group col-md-12">
														<label>Degree Title</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>University/College</label>
														<select name="price" class="form-control select">
															<option value="0">Select University/College </option>
															<option value="1" >University</option>
															<option value="2">University</option>
														</select>
													</div>
													<div class="form-group col-md-6">
														<label>Start year</label>
														<input type="text" class="form-control datetimepicker">
													</div>
													<div class="form-group col-md-6">
														<label>End year</label>
														<input type="text" class="form-control datetimepicker">
													</div>
													<div class="form-group col-md-12">
														<label>Summary</label>
														<textarea class="form-control" rows="5"></textarea>
													</div>
												</div>
											</div>
										</div>
										
										<div class="card">
											<div class="pro-head">
												<h3 class="pro-title without-border mb-0">Social Links</h3>
											</div>
											<div class="pro-body">
												<div class="row">
													<div class="form-group col-md-6">
														<label>Facebook</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Dribble</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Twitter</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>LinkedIn</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Behance</label>
														<input type="text" class="form-control">
													</div>
													<div class="form-group col-md-6">
														<label>Behance</label>
														<input type="text" class="form-control">
													</div>
												</div>
											</div>
										</div>
										
										<div class="card text-end">
											<div class="pro-body">
												<button class="btn btn-secondary click-btn btn-plan">Cancel</button>
                                                <router-link to="/freelancer-profile">
												<button class="btn btn-primary click-btn btn-plan" type="submit">Update</button>
                                            </router-link>
											</div>
										</div>
									</form>
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
        </div>
</template>
<script>
	export default {
		 mounted() {
            $('#member_id input[name="member"]').on('click', function() {
		if ($(this).val() == 'individual'){
			$('#member_no').hide();
		}
		if ($(this).val() == 'company') {
			$('#member_no').hide();
		}		
		if ($(this).val() == 'developers') {
			$('#member_no').show();
		}
		else {
		}
	});
	
	
	$('#work_type input[name="work"]').on('click', function() {
		if ($(this).val() == 'distant') {
			$('#distant').show();
			$('#local').hide();
		}
		if ($(this).val() == 'local') {
			$('#distant').hide();
			$('#local').show();
		}		
		if ($(this).val() == 'upload') {
			$('#distant').hide();
			$('#local').hide();
		}
		else {
		}
	});
	
	$('#job_type input[name="job"]').on('change', function() {
		if ((this.checked == true) && ($(this).val() == 'job_2')) {
			$('#job_date').show();
		}
		else if ((this.checked == false) && ($(this).val() == 'job_2')){
			$('#job_date').hide();
		}
	});
	
	$('#price_type').on('change', function() {
		if ($(".price-cont select option:selected").val() == '1') {
			$('#price_id').show();
			$('#hour_id').hide();
		}
		else if ($(".price-cont select option:selected").val() == '2') {
			$('#price_id').hide();
			$('#hour_id').show();
		}		
		else if ($(".price-cont select option:selected").val() == '3') {
			$('#price_id').hide();
			$('#hour_id').hide();
		}		
		else if ($("select option:selected").val() == '0') {
			$('#price_id').hide();
			$('#hour_id').hide();
		}
	});
	
	$('#pro_period input[name="period"]').on('click', function() {
		if ($(this).val() == 'period') {
			$('#period_date').hide();
		}
		else if ($(this).val() == 'job') {
			$('#period_date').show();
		}	
	});
	
	// Education Add More
	
    $(".billing-method").on('click','.trash', function () {
		$(this).closest('.education-cont').remove();
		return false;
    });

    $(".add-bill").on('click', function () {
		
		var billingcontent = '<div class="row form-row education-cont">' +
			'<div class="col-12 col-md-10 col-lg-11">' +
				'<div class="row form-row">' +
					'<div class="col-12 col-md-12">' +
						'<div class="form-group">' +
							'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
							'<input type="text" class="form-control">' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".billing-method").append(billingcontent);
        return false;
    });
	
	// Experience Add More
	
    $(".links-info").on('click','.trash', function () {
		$(this).closest('.links-cont').remove();
		return false;
    });

    $(".add-links").on('click', function () {
		
		var experiencecontent = '<div class="row form-row links-cont">' +
			'<div class="col-12 col-md-11 col-lg-11">' +
				'<div class="form-group">' +
					'<label>Add</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-1 col-lg-1"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".links-info").append(experiencecontent);
        return false;
    });
	
	// Award Add 
	
    $(".award-info").on('click','.trash-icon', function () {
		$(this).closest('.award-cont').remove();
		return false;
    });

    $(".add-award").on('click', function () {
		
		var awardcontent = '<div class="form-row align-items-center award-cont">' +
			'<div class="form-group col-md-2">' +
				'<label class="award-upload image-upbtn">' +
				'<i class="fas fa-plus"></i> <input type="file">' +
				'</label>' +
			'</div>' +
			'<div class="form-group col-md-5">' +
				'<input type="text" class="form-control">' +
			'</div>' +
			'<div class="form-group col-md-3">' +
				'<input type="text" class="form-control datetimepicker">' +
			'</div>' +
			'<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".award-info").append(awardcontent);
        return false;
    });
	
	// Add Language 
	
    $(".lang-info").on('click','.trash-icon', function () {
		$(this).closest('.award-cont').remove();
		return false;
    });

    $(".add-lang").on('click', function () {
		
		var langcontent = '<div class="form-row align-items-center lang-cont">' +
			'<div class="form-group col-md-7">' +
				'<input type="text" class="form-control">' +
			'</div>' +
			'<div class="form-group col-md-3">' +
				'<input type="text" class="form-control">' +
			'</div>' +
			'<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".lang-info").append(langcontent);
        return false;
    });
	
	// Add skill 
	
    $(".skill-info").on('click','.trash-icon', function () {
		$(this).closest('.skill-cont').remove();
		return false;
    });

    $(".skill-add").on('click', function () {
		
		var skillcontent = '<div class="form-row align-items-center skill-cont">' +
			'<div class="form-group col-md-10">' +
				'<input type="text" class="form-control">' +
			'</div>' +
			'<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".skill-info").append(skillcontent);
        return false;
    });
	
	// Add Experience 
	
    $(".exp-info").on('click','.trash-icon', function () {
		$(this).closest('.exp-cont').remove();
		return false;
    });

    $(".add-exp").on('click', function () {
		
		var expcontent = '<div class="form-row align-items-center exp-cont">' +
			'<div class="form-group col-md-6">' +				
				'<label>Title</label>' +
				'<input type="text" class="form-control">' +
			'</div>' +
			'<div class="form-group col-md-6">' +				
				'<label>Company name</label>' +
				'<input type="text" class="form-control">' +
			'</div>' +
			'<div class="form-group col-md-6">' +			
				'<label>Start date</label>' +
				'<input type="text" class="form-control datetimepicker">' +
			'</div>' +
			'<div class="form-group col-md-6">' +			
				'<label>End date</label>' +
				'<input type="text" class="form-control datetimepicker">' +
			'</div>' +
			'<div class="form-group col-md-12">' +			
				'<label class="custom_check">' +
				'<input type="checkbox" name="rem_password">' +
				'<span class="checkmark"></span> Im currently working here' +
				'</label>' +
			'</div>' +
			'<div class="form-group col-md-12">' +			
				'<label>Summary</label>' +
				'<textarea class="form-control" rows="5"></textarea>' +
			'</div>' +
			'<div class="form-group col-md-2"><a href="javascript:void(0);" class="btn trash-icon"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".exp-info").append(expcontent);
        return false;
    });
	
	// Tax Add More
	
    $(".tax-info").on('click','.trash', function () {
		$(this).closest('.tax-cont').remove();
		return false;
    });

    $(".add-tax").on('click', function () {
	
		var taxcontent = '<div class="form-row tax-cont">' +
			'<div class="col-12 col-md-3 col-lg-3">' +
				'<div class="form-group">' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-4 col-lg-4">' +
				'<div class="form-group">' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-4 col-lg-4">' +
				'<div class="form-group">' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-1 col-lg-1"><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
		'</div>';
		
        $(".tax-info").append(taxcontent);
        return false;
    });
	
	// Awards Add More
	
    $(".awards-info").on('click','.trash', function () {
		$(this).closest('.awards-cont').remove();
		return false;
    });

    $(".add-award").on('click', function () {

        var regcontent = '<div class="row form-row awards-cont">' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Awards</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Year</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2">' +
				'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
				'<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
			'</div>' +
		'</div>';
		
        $(".awards-info").append(regcontent);
        return false;
    });
	
	// Membership Add More
	
    $(".membership-info").on('click','.trash', function () {
		$(this).closest('.membership-cont').remove();
		return false;
    });

    $(".add-membership").on('click', function () {

        var membershipcontent = '<div class="row form-row membership-cont">' +
			'<div class="col-12 col-md-10 col-lg-5">' +
				'<div class="form-group">' +
					'<label>Memberships</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2 col-lg-2">' +
				'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
				'<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
			'</div>' +
		'</div>';
		
        $(".membership-info").append(membershipcontent);
        return false;
    });
	
	// Registration Add More
	
    $(".registrations-info").on('click','.trash', function () {
		$(this).closest('.reg-cont').remove();
		return false;
    });

    $(".add-reg").on('click', function () {

        var regcontent = '<div class="row form-row reg-cont">' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Registrations</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-5">' +
				'<div class="form-group">' +
					'<label>Year</label>' +
					'<input type="text" class="form-control">' +
				'</div>' +
			'</div>' +
			'<div class="col-12 col-md-2">' +
				'<label class="d-md-block d-sm-none d-none">&nbsp;</label>' +
				'<a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a>' +
			'</div>' +
		'</div>';
		
        $(".registrations-info").append(regcontent);
        return false;
    });
	
	$(".badge").on('click','[data-role=remove]', function () {
		$(this).closest('.badge').remove();
		return false;
    });
		},
        computed: {
            currentPath() {
                return this.$route.name;
            }
    
        },  
        data() {
        return {
          activeClass: 'active',
        };
                //  isactive : true
      },
	}
	</script>