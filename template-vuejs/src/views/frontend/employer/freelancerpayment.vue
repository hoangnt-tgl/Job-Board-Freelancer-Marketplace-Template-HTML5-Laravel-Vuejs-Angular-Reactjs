<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-accountheader></layout-accountheader>
			<!-- /Header -->

            <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">
					<div class="row">
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
                            <div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/freelancer-profile"><img alt="profile image" src="../../../assets/img/img-04.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<h3 class="mb-0"><router-link to="/freelancer-profile">John Danie S.</router-link></h3>
										<p class="mb-0">@johndaniee</p>
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
											<router-link to="/freelancer-project-proposals" class="nav-link active">
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
											<router-link to="/freelancer-profile-settings" class="nav-link">
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
							<div class="page-title">
								<h3>Manage Projects</h3>
							</div>
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-view-project-detail">Overview & Discussions</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-milestones">Milestones</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-task">Tasks</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-files">Files</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link active" to="/freelancer-payment">Payments</router-link>
									</li>
								</ul>
							</nav>
							
							<!-- project list -->
							<div class="my-projects-view">
								<div class="row">
									<div class="col-lg-12">
										<div class="card">
											<div class="project-table">                                                                                                   
												<div class="card-body">
													<h4>PAYMENTS PAID FOR THIS PROJECT</h4>
													<div class="table-responsive table-box">
														<table class="table table-center table-hover datatable" id="freelancerpayment">
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
															</tbody>
														</table>
													</div>
													<div class="text-end mt-3">
														<ul class="paginations">
															<li><a href="javascript:void(0);"> <i class="fas fa-angle-left"></i> Previous</a></li>
															<li><a href="javascript:void(0);">1</a></li>
															<li><a href="javascript:void(0);" class="active">2</a></li>
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
							<!-- project list -->
						
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
        <employeemodal></employeemodal>
        </div>
</template>
<script>
    import util from '../../../assets/utils/util'
	export default {
		mounted() {
        util.datatable('#freelancerpayment')
		},
		methods:{
		},
		data() {
			return {
			}
		}
	}
	</script>