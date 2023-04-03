<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-header />
			<!-- /Header -->

            <!-- Page Content -->
			<div class="content">
				<div class="container-fluid">					
					<div class="row">
						<div class="col-md-8 offset-md-2">
							
							<!-- Page Not Found -->
							<div class="empty-content text-center">
								<img src="../../../assets/img/404.png" alt="logo" class="img-fluid">
								<h2>Page not <span class="orange-text">found</span></h2>
								<p>Oops! Looks like you followed a bad link.</p>
								<p>If you think this is a problem with us, please tell us.</p>
								<div class="btn-item">
									<router-link class="btn get-btn" to="/">GO TO HOME</router-link>
									<a class="btn courses-btn" href="javascript:void(0);">BACK</a>
								</div>
							</div>
							<!-- / Page Not Found -->
								
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
    
    },
}
</script>