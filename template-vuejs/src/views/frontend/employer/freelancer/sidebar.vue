<template>
<div class="col-md-12 col-lg-4 col-xl-3 theiaStickySidebar">
                            <div class="stickyside">
							<!-- Search Filter -->
							<div class="card search-filter">
								<div class="card-header d-flex justify-content-between">
									<h4 class="card-title mb-0">FILTERS</h4>
									<a href="javascript:void(0);">Clear All</a>
								</div>
								<div class="card-body">							
								<div class="filter-widget">
									<h4>Keywords</h4>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Enter Keywords">
									</div>
								</div>
								<div class="filter-widget">
									<h4>Location</h4>
									<div class="form-group">
										<input type="text" class="form-control" placeholder="Enter Location">
									</div>
								</div>
								
								<div class="filter-widget">
									<h4>Category</h4>
									<div class="form-group">
										<vue-select :options="category" />
									</div>
								</div>
								<div class="filter-widget">
									<h4>Completed Projects</h4>
									<div class="form-group">
										<vue-select :options="completedproject" />
									</div>
								</div>
								<div class="filter-widget">
									<h4>Pricing Type</h4>
									<div class="form-group">
										<vue-select :options="filterwidget" />
									</div>
								</div>
								<div class="filter-widget">
									<h4>Add Skills</h4>
									<div class="form-group">
										<span class="badge badge-pill badge-skill">+ Web Design</span><span class="badge badge-pill badge-skill">+ UI Design</span><span class="badge badge-pill badge-skill">+ Node Js</span><span class="badge badge-pill badge-skill">+ Angular</span><span class="badge badge-pill badge-skill">+ Wordpress</span>
										<input type="text" class="form-control">
									</div>
								</div>	
								<div class="filter-widget">
									<h4>Avalability</h4>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_time" checked>
											<span class="checkmark"></span> Hourly 
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_time">
											<span class="checkmark"></span> Part Time
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_time">
											<span class="checkmark"></span>  Full Time
										</label>
									</div>
								</div>
								<div class="filter-widget">
									<h4>Experience</h4>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_specialist">
											<span class="checkmark"></span>  0-1 years
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_exp" checked>
											<span class="checkmark"></span> 2-5 years
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_exp">
											<span class="checkmark"></span>  5-8 years
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_exp">
											<span class="checkmark"></span>  9-12 years
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_exp">
											<span class="checkmark"></span>  Mastered
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="select_exp">
											<span class="checkmark"></span> Professional
										</label>
									</div>
								</div>	
								<div class="filter-widget">
									<h4>Hourly Rate</h4>
									<div id="slider-range"></div>
									<div class="row slider-labels">
										<div class="col-xs-12 caption">
											<span id="slider-range-value1"></span> - <span id="slider-range-value2"></span>
										</div>
									</div>
									<div class="row">
										<div class="col-sm-12">
										<form>
											<input type="hidden" name="min-value" value="">
											<input type="hidden" name="max-value" value="">
										</form>
										</div>
									</div>
								</div>	
								<div class="filter-widget">
									<h4>Currency</h4>
									<div class="form-group">
										<vue-select :options="currency" />
									</div>
								</div>								
								<div class="filter-widget">
									<h4>Profile type</h4>
									<div class="form-group">
										<select class="form-control select">
											<option>Individual</option>
											<option>Individual</option>
											<option>Individual</option>
										</select>
									</div>
								</div>																
								<div class="filter-widget">
									<h4>Reviews</h4>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="pro_ratings">
											<span class="checkmark"></span>
											<span class="rating mapgridrating1">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<span class="average-rating">(5)</span>
											</span>
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="pro_ratings">
											<span class="checkmark"></span>
											<span class="rating mapgridrating1">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="far fa-star"></i>
												<span class="average-rating">(4)</span>
											</span>
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="pro_ratings">
											<span class="checkmark"></span>
											<span class="rating mapgridrating1">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="far fa-star"></i>
												<i class="far fa-star"></i>
												<span class="average-rating">(6)</span>
											</span>
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="pro_ratings">
											<span class="checkmark"></span>
											<span class="rating mapgridrating1">
												<i class="fas fa-star filled"></i>
												<i class="fas fa-star filled"></i>
												<i class="far fa-star"></i>
												<i class="far fa-star"></i>
												<i class="far fa-star"></i>
												<span class="average-rating">(7)</span>
											</span>
										</label>
									</div>
									<div>
										<label class="custom_check">
											<input type="checkbox" name="pro_ratings">
											<span class="checkmark"></span>
											<span class="rating mapgridrating1">
												<i class="fas fa-star filled"></i>
												<i class="far fa-star"></i>
												<i class="far fa-star"></i>
												<i class="far fa-star"></i>
												<i class="far fa-star"></i>
												<span class="average-rating">(8)</span>
											</span>
										</label>
									</div>
								</div>
									<div class="btn-search">
										<button type="button" class="btn btn-block">Search</button>
									</div>	
								</div>
							</div>
							<!-- /Search Filter -->
							</div>
						</div>
</template>
<script>
	export default {
	mounted() {
	},
    data() {
        return {
            category: ["Select category", "Developer", "UI Developer", "React Developer", ".Net Developer"],
			completedproject: ["Select Projects", "Node Projects", "UI Projects"],
			filterwidget: ["Hourly Rate", "Full Day Rate", "Half Day Rate"],
			currency: ["USD", "EURO"]
        }
    }
	}
	</script>
