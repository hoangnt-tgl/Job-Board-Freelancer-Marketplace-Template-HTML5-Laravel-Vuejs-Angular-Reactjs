<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-accountheader></layout-accountheader>
			<!-- /Header -->

           <!-- Page Content -->
			<div class="content">
				<div class="container">
					
					<div class="row">
						<div class="col-md-8 offset-md-2">
							
							<!-- Post A job -->
							<div class="empty-content text-center pt-0 pb-4">
									<h2>Please <span class="orange-text">Login</span> to Post A job </h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat mauris </p>
									<div class="btn-item">
										<router-link class="btn get-btn" to="/index">Cancel</router-link>
										<router-link class="btn courses-btn" to="/login">GO TO Login</router-link>
									</div>
							</div>
							<!-- /Post A job -->
								
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
    