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
										<li class="breadcrumb-item" aria-current="page">Dashboard</li>
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
						<layout-freelancerprojectsidebar></layout-freelancerprojectsidebar>	
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<div class="dashboard-sec">
								
                                <div class="row">
									<div class="col-md-6 col-lg-4">
										<div class="dash-widget">
											<div class="dash-info">
												<div class="dash-widget-info">Completed Jobs</div>
												<div class="dash-widget-count">30</div>
											</div>
											<div class="dash-widget-more">
												<router-link to="/freelancer-completed-projects" class="d-flex">View Details <i class="fas fa-arrow-right ms-auto"></i></router-link>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-4">
										<div class="dash-widget">
											<div class="dash-info">
												<div class="dash-widget-info">Task Completed</div>
												<div class="dash-widget-count">5</div>
											</div>
											<div class="dash-widget-more">
												<router-link to="/freelancer-completed-projects" class="d-flex">View Details <i class="fas fa-arrow-right ms-auto"></i></router-link>
											</div>
										</div>
									</div>
									<div class="col-md-6 col-lg-4">
										<div class="dash-widget">
											<div class="dash-info">
												<div class="dash-widget-info">Reviews</div>
												<div class="dash-widget-count">25</div>
											</div>
											<div class="dash-widget-more">
												<router-link to="/freelancer-review" class="d-flex">View Details <i class="fas fa-arrow-right ms-auto"></i></router-link>
											</div>
										</div>
									</div>
								</div>
								
								<!-- Chart Content -->
								<div class="row">
									<div class="col-xl-8 d-flex">
										<div class="card flex-fill">
											<div class="card-header">
												<div class="d-flex justify-content-between align-items-center">
													<h5 class="card-title">Profile Views</h5>
													<div class="dropdown">
														<button class="btn btn-white btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															Monthly
														</button>
														<div class="dropdown-menu dropdown-menu-start">
															<a href="javascript:void(0);" class="dropdown-item">Weekly</a>
															<a href="javascript:void(0);" class="dropdown-item">Monthly</a>
															<a href="javascript:void(0);" class="dropdown-item">Yearly</a>
														</div>
													</div>
												</div>
											</div>
											<div class="card-body">									
                                                <apexchart
                                                type="line"
                                                :options="chartOptions3"
                                                :series="series1"
                                              ></apexchart>
                                          
											</div>
										</div>
									</div>
									<div class="col-xl-4 d-flex">
										<div class="card flex-fill">
											<div class="card-header">
												<div class="d-flex justify-content-between align-items-center">
													<h5 class="card-title">Static Analytics</h5>
													<div class="dropdown">
														<button class="btn btn-white btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
															Monthly
														</button>
														<div class="dropdown-menu dropdown-menu-start">
															<a href="javascript:void(0);" class="dropdown-item">Weekly</a>
															<a href="javascript:void(0);" class="dropdown-item">Monthly</a>
															<a href="javascript:void(0);" class="dropdown-item">Yearly</a>
														</div>
													</div>
												</div>
											</div>
											<div class="card-body">									
												<apexchart type="radialBar" height="250" :options="chartOptions" :series="series"></apexchart> 
												<ul class="static-list">
													<li><span><i class="fas fa-circle text-violet me-1"></i> Applied Jobs</span> <span class="sta-count">30</span></li>
													<li><span><i class="fas fa-circle text-pink me-1"></i> Active Proposals</span> <span class="sta-count">30</span></li>
													<li><span><i class="fas fa-circle text-yellow me-1"></i> Applied Proposals</span> <span class="sta-count">30</span></li>
													<li><span><i class="fas fa-circle text-blue me-1"></i> Bookmarked Projects</span> <span class="sta-count">30</span></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<!-- /Chart Content -->
								
								<div class="row">
									<!-- Plan  Details-->
									<div class="col-xl-6 d-flex">					
										<div class="card flex-fill">
											<div class="pro-head">
												<h2>Membership Plan Details</h2>
												<div><i class="fas fa-check-circle verified orange-text fa-2x"></i></div>
											</div>
											<div class="pro-body">
												<div class="row">
													<div class="col-md-6 col-sm-6">
														<div class="plan-details">
															<h4>The Ultima</h4>
															<div class="yr-amt">Anually Price</div>
															<h3>$1200</h3>
															<div class="yr-duration">Duration: One Year</div>
															<div class="expiry">Expiry: 24 JAN 2022</div>
															<router-link to="/freelancer-membership" class="btn btn-primary btn-plan">Change Plan</router-link>
														</div>
													</div>
													<div class="col-md-6 col-sm-6">
														<div class="plan-feature">
															<ul>
																<li>12 Project Credits</li>
																<li>10 Allowed Services</li>
																<li>20 Days visibility</li>
																<li>5 Featured Services</li>
																<li>20 Days visibility</li>
																<li>30 Days Package Expiry</li>
																<li>Profile Featured</li>
															</ul>
															<router-link to="/freelancer-membership">View Details</router-link>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- /Plan  Details -->
									
									<!-- Ongoing Projects -->
									<div class="col-xl-6 d-flex">					
										<div class="card flex-fill">
											<div class="pro-head">
												<h2>Ongoing Projects</h2>
												<router-link to="/freelancer-ongoing-projects" class="btn fund-btn">View All</router-link>
											</div>
											<div class="pro-body p-0">
												<div class="on-project">
													<h5>Web Scraping</h5>
													<p>I need some data to be scraped from various social media....</p>
													<div class="pro-info">
														<ul class="list-details">
															<li>
																<div class="slot">
																	<p>Job Type</p>
																	<h5>Hourly</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Project Price</p>
																	<h5>$120</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Location</p>
																	<h5>3 Received</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Expiry</p>
																	<h5>4 Days Left</h5>
																</div>
															</li>
														</ul>
													</div>
												</div>
												<div class="on-project">
													<h5>New Service</h5>
													<p>I need some data to be scraped from various social media....</p>
													<div class="pro-info">
														<ul class="list-details">
															<li>
																<div class="slot">
																	<p>Job Type</p>
																	<h5>Hourly</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Project Price</p>
																	<h5>$90</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Location</p>
																	<h5>3 Received</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Expiry</p>
																	<h5>5 Days Left</h5>
																</div>
															</li>
														</ul>
													</div>
												</div>
												<div class="on-project">
													<h5>Website Layout changes</h5>
													<p>I need some data to be scraped from various social media....</p>
													<div class="pro-info">
														<ul class="list-details">
															<li>
																<div class="slot">
																	<p>Job Type</p>
																	<h5>Hourly</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Project Price</p>
																	<h5>$70</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Location</p>
																	<h5>3 Received</h5>
																</div>
															</li>
															<li>
																<div class="slot">
																	<p>Expiry</p>
																	<h5>7 Days Left</h5>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									<!-- /Ongoing Projects -->
								</div>
								
								<!-- Past Earnings -->
								<div class="row">
									<div class="col-md-12">
										<div class="card mb-4">
											<div class="pro-head">
												<h2>Past Earnings</h2>
												<router-link to="/freelancer-payment" class="btn fund-btn">View All</router-link>
											</div>
											<div class="pro-body p-0">
												<div class="earn-feature">
													<div class="row align-items-center">
														<div class="col-lg-7 col-md-6">
															<div class="earn-info">
																<p>I want some customization and installation on wordpress</p>
																<div class="date">October 5, 2021</div>
															</div>
														</div>
														<div class="col-lg-5 col-md-6">
															<div class="earn-img">
																<span><img src="../../../assets/img/user/avatar-1.jpg" alt="logo" class="img-fluid avatar-md rounded-circle"> George Wells</span>
																<div class="price">$90</div>
															</div>
														</div>
													</div>
												</div>
												<div class="earn-feature">
													<div class="row align-items-center">
														<div class="col-lg-7 col-md-6">
															<div class="earn-info">
																<p>I want simple Joomla 4 component development </p>
																<div class="date">October 12, 2021</div>
															</div>
														</div>
														<div class="col-lg-5 col-md-6">
															<div class="earn-img">
																<span><img src="../../../assets/img/user/avatar-2.jpg" alt="logo" class="img-fluid avatar-md rounded-circle"> Timothy Smith</span>
																<div class="price">$150</div>
															</div>
														</div>
													</div>
												</div>
												<div class="earn-feature">
													<div class="row align-items-center">
														<div class="col-lg-7 col-md-6">
															<div class="earn-info">
																<p>I want migrate Wordpress website </p>
																<div class="date">October 15, 2021</div>
															</div>
														</div>
														<div class="col-lg-5 col-md-6">
															<div class="earn-img">
																<span><img src="../../../assets/img/user/avatar-3.jpg" alt="logo" class="img-fluid avatar-md rounded-circle"> Janet Paden</span>
																<div class="price">$70</div>
															</div>
														</div>
													</div>
												</div>
												<div class="earn-feature">
													<div class="row align-items-center">
														<div class="col-lg-7 col-md-6">
															<div class="earn-info">
																<p>I want Landing Page Redesign / Sales Page Redesign</p>
																<div class="date">October 20, 2021</div>
															</div>
														</div>
														<div class="col-lg-5 col-md-6">
															<div class="earn-img">
																<span><img src="../../../assets/img/user/avatar-4.jpg" alt="logo" class="img-fluid avatar-md rounded-circle"> James Douglas</span>
																<div class="price">$120</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- /Past Earnings -->

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
    import VueApexCharts from "vue3-apexcharts";
    export default {
        components: {
        apexchart: VueApexCharts,
      },
         mounted() {        
        },
         data: function() {
        return {
             series: [85, 75, 60, 40],
              chartOptions: {
                chart: {
                  width: 297,
                  height: 250,
                  type: 'radialBar',
                },
                plotOptions: {
                  radialBar: {
                    dataLabels: {
                      name: {
                        fontSize: '22px',
                      },
                      value: {
                        fontSize: '16px',
                      },
                      total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w) {
                          // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                          return 249
                        }
                      }
                    }
                  }
                },
                colors: ['#7B46BE', '#FA6CA4', '#FACD3A', '#24C0DC'],
            labels: ['Applied Jobs', 'Messenger', 'Facebook', 'LinkedIn'],
              },
            chartOptions3: {
               
               chart: {
              height: 360,
              type: 'line',       
              toolbar: {
                show: false
              },
              zoom: {
                enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            colors: ["#FF5B37"],
            stroke: {
              curve: 'straight',
              width: [1]
            },
            markers: {
              size: 4,
              colors: ["#FF5B37"],
              strokeColors: "#FF5B37",
              strokeWidth: 1,
              hover: {
                size: 7,
              }
            },
            grid: {
                position: 'front',
                borderColor: '#ddd',
                strokeDashArray: 7,
                xaxis: {
                    lines: {
                      show: true
                    }
                }
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              lines: {
                show: false,
              }
            },
            yaxis: {
              lines: {
                show: true,
              }
            } 
         
              },
         series1: [{
               name: "profile view",
                data: [100, 150, 200, 250, 200, 250, 200, 200, 200, 200, 300, 350]
            }],
    
    
    
        chartOptions4: {
               
             chart: {         
              toolbar: {
                show: false
              },
              height: 250,
              type: 'radialBar',
            },
            plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: '50%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#7B46BE', '#FA6CA4', '#FACD3A', '#24C0DC'],
        labels: ['Applied Jobs', 'Messenger', 'Facebook', 'LinkedIn'],
        legend: {
          show: false,
          floating: true,
          fontSize: '16px',
          position: 'bottom',
          offsetX: 160,
          offsetY: 15,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
          },
          itemMargin: {
            vertical: 3
          }
        },
        responsive: [{
          breakpoint: 480,
          options: {
            legend: {
                show: false
            }
          }
        }]
              },
         series2: [{
               series: [85, 75, 60, 40]
            }],
    
    
        }
    }
    }
    </script>
    