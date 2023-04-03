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
										<li class="breadcrumb-item" aria-current="page">Payments</li>
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
											<router-link to="/freelancer-withdraw-money" class="nav-link active">
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
										<router-link class="nav-link" to="/freelancer-withdraw-money">Withdraw Funds</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link active" to="/freelancer-invoices"> Invoices</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-transaction-history"> Transaction History</router-link>
									</li>
								</ul>
							</nav>	
							<div class="transaction-table card">
								<div class="card-header">
									<div class="row justify-content-between align-items-center">
										<div class="col">
											<h5 class="card-title">All Invoices</h5>
										</div>
										<div class="col-auto d-flex align-items-center flex-wrap transaction-shortby">
												<div class="sort-by sort-show">
													<span class="sort-title">Show</span>
													<span class="sortby-fliter">
														<select class="select">
															<option>5</option>
															<option class="sorting">4</option>
															<option class="sorting">3</option>
															<option class="sorting">6</option>
															<option class="sorting">3</option>
														</select>
													</span>
												</div>
												<div class="export-item sort-show sort-by"><i class="fas fa-download"></i> Export</div>
										</div>
									</div>
								</div>
								<div class="card-body">
									<div class="table-responsive table-box">
										<table class="table datatable" id="freelancerinvoices">
											<thead>
												<tr class="thead-pink">
													<th>Invoice Number</th>
													<th>Client Name</th>
													<th>Created Date</th>
													<th>Amount</th>
													<th>Due Date</th>
													<th>Status</th>
													<th>Paid On</th>
												</tr>
											</thead>
											<tbody class="table table-hover table-center">

												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-5622</router-link></td>
													<td>Amaze Tech</td>
													<td>16 Sep 2021</td>
													<td>$150</td>
													<td>22 Oct 2021</td>
													<td><span class="badge bg-success-light">Paid</span></td>
													<td>22 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-4545</router-link></td>
													<td>Park Inc</td>
													<td>12 Sep 2021</td>
													<td>$150</td>
													<td>25 Oct 2021</td>
													<td><span class="badge bg-warning-light">Partially Paid</span></td>
													<td>25 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-2254</router-link></td>
													<td>Tech Zone </td>
													<td>10 Sep 2021</td>
													<td>$150</td>
													<td>15 Oct 2021</td>
													<td><span class="badge bg-success-light">Paid</span></td>
													<td>10 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-1582</router-link></td>
													<td>Abc Software</td>
													<td>13 Sep 2021</td>
													<td>$150</td>
													<td>28 Oct 2021</td>
													<td><span class="badge bg-danger-light">Overdue</span></td>
													<td>13 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-1526</router-link></td>
													<td>Host Technologies</td>
													<td>12 Sep 2021</td>
													<td>$150</td>
													<td>29 Oct 2021</td>
													<td><span class="badge bg-warning-light">Partially Paid</span></td>
													<td>29 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-1200</router-link></td>
													<td>Alfred Tech </td>
													<td>05 Sep 2021</td>
													<td>$150</td>
													<td>15 Oct 2021</td>
													<td><span class="badge bg-warning-light">Partially Paid</span></td>
													<td>15 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-1212</router-link></td>
													<td>Kind Softwares </td>
													<td>02 Sep 2021</td>
													<td>$150</td>
													<td>22 Oct 2021</td>
													<td><span class="badge bg-success-light">Paid</span></td>
													<td>22 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-1456</router-link></td>
													<td>Tech Zone </td>
													<td>10 Sep 2021</td>
													<td>$150</td>
													<td>15 Oct 2021</td>
													<td><span class="badge bg-danger-light">Overdue</span></td>
													<td>10 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-1236</router-link></td>
													<td>Abc Software</td>
													<td>13 Sep 2021</td>
													<td>$150</td>
													<td>28 Oct 2021</td>
													<td><span class="badge bg-danger-light">Overdue</span></td>
													<td>13 Oct 2021, 10:45pm</td>
												</tr>
												<tr>
													<td><router-link to="/view-invoice" class="invoice-id">INV-1566</router-link></td>
													<td>Park Inc</td>
													<td>12 Sep 2021</td>
													<td>$150</td>
													<td>25 Oct 2021</td>
													<td><span class="badge bg-success-light">Paid</span></td>
													<td>25 Oct 2021, 10:45pm</td>
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
            util.datatable('#freelancerinvoices')
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