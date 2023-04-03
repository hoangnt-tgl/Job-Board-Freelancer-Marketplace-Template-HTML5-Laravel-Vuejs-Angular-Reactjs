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
									<router-link to="freelancer-profile"><img alt="profile image" src="../../../assets/img/img-04.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<h3 class="mb-0"><router-link to="freelancer-profile">John Danie S.</router-link></h3>
										<p class="mb-0">@johndaniee</p>
									</div>
								</div>
								<div class="settings-menu">
									<ul>
										<li class="nav-item">
											<router-link to="freelancer-dashboard" class="nav-link">
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
							<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-view-project-detail">Overview & Discussions</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link active" to="/freelancer-milestones">Milestones</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-task">Tasks</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-files">Files</router-link>
									</li>
									<li class="nav-item">
										<router-link a class="nav-link" to="/freelancer-payment">Payments</router-link>
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
													<h4>MILESTONES</h4>
													<div class="table-responsive table-box">
														<table class="table table-center table-hover datatable" id="milestones">
															<thead class="thead-pink">
																<tr>
																	<th>Name</th>
																	<th>Budget</th>
																	<th>Progress</th>
																	<th>Date to start</th>
																	<th>Date to end</th>
																	<th>Status</th>
																</tr>
															</thead>
															<tbody>
																<tr>
																	<td>Research</td>
																	<td>$60</td>
																	<td>
																		<p class="mb-0 orange-text text-center">25%</p>
																		<div class="progress progress-md mb-0">
																			<div class="progress-bar bg-danger" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																	</td>
																	<td>20th Oct 2021</td>
																	<td>29th Oct 2021</td>
																	<td><span class="badge badge-pill bg-success-dark">Paid</span></td>
																</tr>
																<tr>
																	<td>Design</td>
																	<td>$60</td>
																	<td>
																		<p class="mb-0 orange-text text-center">50%</p>
																		<div class="progress progress-md mb-0">
																			<div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																	</td>
																	<td>21st Oct 2021</td>
																	<td>25th Oct 2021</td>
																	<td><span class="badge badge-pill bg-success-dark">Paid</span></td>
																</tr>
																<tr>
																	<td>Research</td>
																	<td>$60</td>
																	<td>
																		<p class="mb-0 orange-text text-center">75%</p>
																		<div class="progress progress-md mb-0">
																			<div class="progress-bar bg-danger" role="progressbar" style="width: 75%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																	</td>
																	<td>19th Oct 2021</td>
																	<td>29th Oct 2021</td>
																	<td><span class="badge badge-pill bg-grey-dark">UnPaid</span></td>
																</tr>
																<tr>
																	<td>Design</td>
																	<td>$55</td>
																	<td>
																		<p class="mb-0 orange-text text-center">50%</p>
																		<div class="progress progress-md mb-0">
																			<div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																	</td>
																	<td>21st Oct 2021</td>
																	<td>25th Oct 2021</td>
																	<td><span class="badge badge-pill bg-success-dark">Paid</span></td>
																</tr>
																<tr>
																	<td>Testing</td>
																	<td>$52</td>
																	<td>
																		<p class="mb-0 orange-text text-center">35%</p>
																		<div class="progress progress-md mb-0">
																			<div class="progress-bar bg-danger" role="progressbar" style="width: 35%" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																	</td>
																	<td>20th Oct 2021</td>
																	<td>29th Oct 2021</td>
																	<td><span class="badge badge-pill bg-grey-dark">UnPaid</span></td>
																</tr>
																<tr>
																	<td>Development</td>
																	<td>$26</td>
																	<td>
																		<p class="mb-0 orange-text text-center">42%</p>
																		<div class="progress progress-md mb-0">
																			<div class="progress-bar bg-danger" role="progressbar" style="width: 42%" aria-valuenow="42" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																	</td>
																	<td>12th Oct 2021</td>
																	<td>22th Oct 2021</td>
																	<td><span class="badge badge-pill bg-success-dark">Paid</span></td>
																</tr>
																<tr>
																	<td>Design</td>
																	<td>$55</td>
																	<td>
																		<p class="mb-0 orange-text text-center">50%</p>
																		<div class="progress progress-md mb-0">
																			<div class="progress-bar bg-danger" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																	</td>
																	<td>15th Oct 2021</td>
																	<td>18th Oct 2021</td>
																	<td><span class="badge badge-pill bg-grey-dark">UnPaid</span></td>
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
        util.datatable('#milestones')
		},
		methods:{
		},
		data() {
			return {
			}
		}
	}
	</script>