<template>
<div class="dashboard-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-employeeheader />
			<!-- /Header -->

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
						<layout-employeesidebar></layout-employeesidebar>
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							<div class="dashboard-sec">
								
                                <dashboardwidget></dashboardwidget>
								
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
								
								<!-- Past Earnings -->
								<earningdashboard></earningdashboard>
								<!-- /Past Earnings -->
								
								<div class="row">
									<!-- Plan  Details-->
									<plandetaildashboard></plandetaildashboard>
									<!-- /Plan  Details -->
									
									<!-- Notifications -->
									<notificationdashboard></notificationdashboard>
									<!-- /Notifications -->
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
    