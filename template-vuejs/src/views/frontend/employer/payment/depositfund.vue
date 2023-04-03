<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-employeeheader />
			<!-- /Header -->

            <!-- Breadcrumb -->
			<!-- Breadcrumb -->
			<div class="bread-crumb-bar">
				<div class="container">
					<div class="row align-items-center inner-banner">
						<div class="col-md-12 col-12 text-center">
							<div class="breadcrumb-list">
								<nav aria-label="breadcrumb" class="page-breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../../assets/img/home-icon.svg" alt="Post Author"> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Employee</li>
										<li class="breadcrumb-item" aria-current="page">Payments</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			<!-- /Breadcrumb -->
			
			<!-- Page Content -->
			<div class="content content-page">
				<div class="container-fluid">
					<div class="row">
						
						<!-- sidebar -->
						<layout-employeesidebar></layout-employeesidebar>
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<paymentwidget></paymentwidget>	
							<div class="transaction-table card">
								<div class="card-header">
									<div class="row justify-content-between align-items-center">
										<div class="col">
											<h5 class="card-title">Transaction History</h5>
										</div>
									</div>
								</div>
								<div class="card-body">
									<paymenttable></paymenttable>
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
        <employeemodal></employeemodal>
        </div>
</template>