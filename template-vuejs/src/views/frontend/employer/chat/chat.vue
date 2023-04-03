<template>
<div class="chat-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
            <layout-accountheader></layout-accountheader>
			<!-- /Header -->

            <!-- Content -->
			<div class="content" style="min-height: 220.7px !important;">
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-12 back-text">
							<router-link to="/dashboard" class="btn btn-primary back-btn"><i class="fa fa-chevron-left"></i> Back </router-link>
						</div>
						<div class="col-md-12">
							
							<div class="chat-window">
							
								<!-- Chat Left -->
								<chatleft></chatleft>
								<!-- /Chat Left -->
							
								<!-- Chat Right -->
								<chatright></chatright>
								<!-- /Chat Right -->
								
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
<script>
export default {
     mounted() {
    
    },
}
</script>