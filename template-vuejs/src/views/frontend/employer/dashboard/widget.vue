<template>
<div class="row">
									<div class="col-md-6 col-lg-4">
										<div class="dash-widget">
											<div class="dash-info">
												<div class="dash-widget-info">Projects Posted</div>
												<div class="dash-widget-count">30</div>
											</div>
											<div class="dash-widget-more">
												<router-link to="/manage-projects" class="d-flex">View Details <i class="fas fa-arrow-right ms-auto"></i></router-link>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-4">
										<div class="dash-widget">
											<div class="dash-info">
												<div class="dash-widget-info">Ongoing Projects</div>
												<div class="dash-widget-count">5</div>
											</div>
											<div class="dash-widget-more">
												<router-link to="/ongoing-projects" class="d-flex">View Details <i class="fas fa-arrow-right ms-auto"></i></router-link>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-4">
										<div class="dash-widget">
											<div class="dash-info">
												<div class="dash-widget-info">Completed Projects</div>
												<div class="dash-widget-count">25</div>
											</div>
											<div class="dash-widget-more">
												<router-link to="/completed-projects" class="d-flex">View Details <i class="fas fa-arrow-right ms-auto"></i></router-link>
											</div>
										</div>
									</div>
								</div>
</template>