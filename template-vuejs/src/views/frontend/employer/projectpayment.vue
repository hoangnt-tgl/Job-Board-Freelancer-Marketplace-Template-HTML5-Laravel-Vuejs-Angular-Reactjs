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
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Employee</li>
										<li class="breadcrumb-item" aria-current="page">Milestones</li>
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
									<router-link to="/user-account-details"><img alt="profile image" src="../../../assets/img/img-04.jpg" class="avatar-lg rounded-circle"></router-link>
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
											<router-link to="/manage-projects" class="nav-link active">
												<i class="material-icons">business_center</i> Projects
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/favourites" class="nav-link">
												<i class="material-icons">local_play</i> Favourites
                                            </router-link>
										</li>
										<li class="nav-item">
											<router-link to="/review" class="nav-link">
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
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/view-project-detail">Overview & Discussions</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/milestones">Milestones</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/tasks">Tasks</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/files">Files</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link active" to="/project-payment">Payments</router-link>
									</li>
								</ul>
							</nav>
							
							<!-- project list -->
							<div class="my-projects-view">
								<div class="row">
									<div class="col-lg-12">
										<div class="">
											<div class="card">
												<div class="card-header">
													<h5 class="card-title">Payments</h5>
												</div>
												<div class="card-body">
													<div class="table-responsive table-box">
														<table class="table table-center table-hover datatable" id="projectpayment">
															<thead class="thead-pink">
																<tr>
																	<th>Client </th>
																	<th>Name </th>
																	<th>Type of Payment</th>
																	<th>Payment</th>
																	<th>Status  </th>
																	<th>Date Paid</th>
																	<th>Invoice</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>
																	<div class="d-flex align-items-center"><span><img src="../../../assets/img/company/img-1.png" class="img-fluid avatar-md rounded-circle me-2" alt="Logo"></span> <span>Amaze Tech</span></div></td>
																	<td>Research</td>
																	<td><span class="badge badge-pill bg-outline-red">Milestone</span></td>
																	<td>$54</td>
																	<td><span class="badge badge-pill bg-outline-green">Completed</span></td>
																	<td>  20th October 2018</td>
																	<td><a href="javascript:void(0);" class="file-circle"><i class="far fa-copy"></i></a>
																	</td>
																</tr>
																<tr>
																	<td>
																	<div class="d-flex align-items-center"><span><img src="../../../assets/img/company/img-2.png" class="img-fluid avatar-md rounded-circle me-2" alt="Logo"></span> <span>Park Inc</span></div></td>
																	<td>Design</td>
																	<td><span class="badge badge-pill bg-outline-red">Milestone</span></td>
																	<td>$52</td>
																	<td><span class="badge badge-pill bg-outline-green">Completed</span></td>
																	<td>  25th October 2018</td>
																	<td><a href="javascript:void(0);" class="file-circle"><i class="far fa-copy"></i></a>
																	</td>
																</tr>
																<tr>
																	<td>
																	<div class="d-flex align-items-center"><span><img src="../../../assets/img/company/img-3.png" class="img-fluid avatar-md rounded-circle me-2" alt="Logo"></span> <span>Tech Zone</span></div></td>
																	<td>Development</td>
																	<td><span class="badge badge-pill bg-outline-red">Milestone</span></td>
																	<td>$40</td>
																	<td><span class="badge badge-pill bg-outline-green">Completed</span></td>
																	<td>  28th October 2018</td>
																	<td><a href="javascript:void(0);" class="file-circle"><i class="far fa-copy"></i></a>
																	</td>
																</tr>
																<tr>
																	<td>
																	<div class="d-flex align-items-center"><span><img src="../../../assets/img/company/img-4.png" class="img-fluid avatar-md rounded-circle me-2" alt="Logo"></span> <span>Abc Software</span></div></td>
																	<td>Research</td>
																	<td><span class="badge badge-pill bg-outline-red">Milestone</span></td>
																	<td>$25</td>
																	<td><span class="badge badge-pill bg-outline-green">Completed</span></td>
																	<td>  29th October 2018</td>
																	<td><a href="javascript:void(0);" class="file-circle"><i class="far fa-copy"></i></a>
																	</td>
																</tr>
																<tr>
																	<td>
																	<div class="d-flex align-items-center"><span><img src="../../../assets/img/company/img-5.png" class="img-fluid avatar-md rounded-circle me-2" alt="Logo"></span> <span>Host Technologies</span></div></td>
																	<td>Development</td>
																	<td><span class="badge badge-pill bg-outline-red">Milestone</span></td>
																	<td>$32</td>
																	<td><span class="badge badge-pill bg-outline-green">Completed</span></td>
																	<td>  24th October 2018</td>
																	<td><a href="javascript:void(0);" class="file-circle"><i class="far fa-copy"></i></a>
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
    import util from '../../../assets/utils/util'
	export default {
		 mounted() {
            util.datatable('#projectpayment')
		},
		methods:{
		},
		data() {
			return {
			}
		}
	}
	</script>