<template>
    <div>
    <!-- Main Wrapper -->
        <div class="main-wrapper">
            <layout-adminheader></layout-adminheader>
			<layout-adminsidebar></layout-adminsidebar>
			
			<!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content report-box container-fluid">
				
					<!-- Page Header -->
					<div class="page-header page-border">
						<div class="row align-items-center">
							<div class="col-lg-6">
								<h3 class="page-title">Reports</h3>
								<ul class="breadcrumb">
									<li class="breadcrumb-item"><router-link to="/admin/index">Home</router-link></li>
									<li class="breadcrumb-item active">Reports</li>
								</ul>
							</div>
							<div class="col-lg-6 report-btns">
								<ul class="project-report">
									<li ><router-link to="/admin/reports">Projects</router-link></li>
									<li ><router-link to="/admin/project-bidding">Bidding</router-link></li>
									<li><router-link to="/admin/project-invoice">Invoices</router-link></li>
									<li class="active-project"><router-link to="/admin/project-earnings">Earnings</router-link></li>
								</ul>
							</div>
						</div>
					</div>
					<!-- /Page Header -->
					
					<!-- Project Chart -->
					<div class="project-chart">
						<div class="row">
							<div class="subscribe-employe">
								<ul>
									<li ><router-link to="/admin/project-earnings">Administrator </router-link></li>
									<li class="active"><router-link to="/admin/earning-employer">Employer</router-link></li>
									<li><router-link to="/admin/earning-freelancer">Freelancer</router-link></li>
								</ul>
							</div>	
							<div class="col-xl-12 d-flex">
								<div class="card flex-fill">
									<div class="card-header">
										<div class="d-flex justify-content-between align-items-center">
											<h5 class="card-title">Employer Report</h5>

											<div class="dropdown">
												<button class="btn btn-white btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
													2022
												</button>
												<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
													<li>
														<a href="javascript:void(0);" class="dropdown-item">2021</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">2022</a>
													</li>
													<li>
														<a href="javascript:void(0);" class="dropdown-item">2020</a>
													</li>												
												</ul>
											</div>
										</div>
									</div>
									<div class="card-body">
										<div id="chart-employee"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<!-- /Project Chart -->
					
					<!-- Project Download -->
					<div class="project-download">
						<div class="title-group d-flex">
							<h2>Employer Expense</h2>
							<div class="down-load">
								<a href="javascript:void(0);" class="btn-primary"><i class="fas fa-cloud-download-alt"></i>Download</a>
							</div>
						</div>
						<div class="select-group">
							<div class="row">
								<div class="col-lg-2 col-md-6">
									<select class="form-select">
										<option> Date</option>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
										<option>Option 4</option>
										<option>Option 5</option>
									</select>
								</div>
								<div class="col-lg-2 col-md-6">
									<select class="form-select">
										<option> Reference Number</option>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
										<option>Option 4</option>
										<option>Option 5</option>
									</select>
								</div>
								<div class="col-lg-2 col-md-6">
									<select class="form-select">
										<option> Project name</option>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
										<option>Option 4</option>
										<option>Option 5</option>
									</select>
								</div>
								<div class="col-lg-2 col-md-6">
									<select class="form-select">
										<option> Payment type</option>
										<option>Option 1</option>
										<option>Option 2</option>
										<option>Option 3</option>
										<option>Option 4</option>
										<option>Option 5</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<!-- /Project Download -->
					
					<!-- Employer Project -->
					<div class="card ">
						<div class="table-responsive">
							<table class="table table-center table-hover mb-0 employe-tables">
								<thead>
									<tr>
										<th>
											<div class="form-check custom-checkbox">
											  <input type="checkbox" class="form-check-input" id="select-all">
											  <label class="form-check-label" for="customCheck1"></label>
											</div>
										</th>
										<th>Transaction date</th>
										<th>Reference Number</th>	
										<th>Project Name</th>	
										<th>Project Value</th>	
										<th>Income</th>	
										<th>Payment type</th>
										<th class="text-end">Actions</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>
											<div class="form-check custom-checkbox">
											  <input type="checkbox" class="form-check-input" id="customCheck1">
											  <label class="form-check-label" for="customCheck1"></label>
											</div>
										</td>
										<td>25/03/20022</td>
										<td><a href="javascript:void(0);">#55454</a></td>
										<td>UI/UX Design</td>
										<td>$450.44</td>
										<td>$40.44</td>
										<td>Credit card</td>
										<td class="text-end subscription-end">
											<a href="javascript:void(0);" class="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
											<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
										</td>
									</tr>
									<tr>
										<td>
											<div class="form-check custom-checkbox">
											  <input type="checkbox" class="form-check-input" id="customCheck1">
											  <label class="form-check-label" for="customCheck1"></label>
											</div>
										</td>
										<td>25/03/20022</td>
										<td><a href="javascript:void(0);">#55454</a></td>
										<td>UI/UX Design</td>
										<td>$450.44</td>
										<td>$40.44</td>
										<td>Credit card</td>
										<td class="text-end subscription-end">
											<a href="javascript:void(0);" class="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
											<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
										</td>
									</tr>
									<tr>
										<td>
											<div class="form-check custom-checkbox">
											  <input type="checkbox" class="form-check-input" id="customCheck1">
											  <label class="form-check-label" for="customCheck1"></label>
											</div>
										</td>
										<td>25/03/20022</td>
										<td><a href="javascript:void(0);">#55454</a></td>
										<td>UI/UX Design</td>
										<td>$450.44</td>
										<td>$40.44</td>
										<td>Credit card</td>
										<td class="text-end subscription-end">
											<a href="javascript:void(0);" class="btn btn-sm btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#edit-category"><i class="far fa-edit"></i></a> 
											<a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="modal" data-bs-target="#delete_category"><i class="far fa-trash-alt"></i></a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- /Employer Project -->
					
				</div>
				<!-- /Page Wrapper -->
			</div>
			<!-- /Page Wrapper -->
		
        </div>
		<!-- /Main Wrapper -->
        <!-- The Modal -->
		<div class="modal fade custom-modal" id="add-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

				<div class="modal-header">
					<h4 class="modal-title">Edit Reports</h4>
					<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
				</div>

				<div class="modal-body">
					<form>
						<div class="form-group">
							<label>Client Name</label>
							<input type="text" class="form-control" value="Davis Payerf">
						</div>
						<div class="form-group">
							<label>Type</label>
							<input type="text" class="form-control" value="Bank Transfer, Payment Transaction ID - 643351646848">
						</div>
						<div class="form-group">
							<label>Transaction Fee</label>
							<input type="text" class="form-control" value="$ 5.00">
						</div>
						<div class="form-group">
							<label>Amount</label>
							<input type="text" class="form-control" value="$2222.00">
						</div>
						<div class="form-group">
							<label>status</label>
							<select class="form-control form-select">
								<option>Complete</option>
								<option selected>Incomplete</option>
							</select>
						</div>
						<div class="mt-4">
							<button type="submit" class="btn btn-primary btn-block">Submit</button>
						</div>
					</form>
				</div>
		    </div>
		  </div>
		</div>

		<!-- Add Modal -->
		<div class="modal fade custom-modal" id="edit-category">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">

					<div class="modal-header flex-wrap">
						<div class="text-center w-100 mb-3">
							<img src="../../../../assets/admin-img/logo-small.png" alt="">
						</div>
						<h4 class="modal-title">Edit User</h4>
						<button type="button" class="close" data-bs-dismiss="modal"><span>&times;</span></button>
					</div>

					<div class="modal-body">
						<form>
							<div class="form-group">
								<label>Full Name</label>
								<input type="text" class="form-control" value=" George Wells">
							</div>
							<div class="form-group">
								<label>Email</label>
								<input type="email" class="form-control" value="georgewells@example.com">
							</div>
							<div class="form-group">
								<label>Password</label>
								<input type="password" class="form-control" value="*******">
							</div>
							<div class="form-group">
								<label>Confirm Password</label>
								<input type="password" class="form-control" value="********">
							</div>
							<div class="form-group">
								<label>User Type</label>
								<select class="form-control form-select">
									<option>Select</option>
									<option selected>Frontend Developer</option>
									<option>Graphic Designer</option>
								</select>
							</div>
							<div class="mt-4">
								<button type="submit" class="btn btn-primary btn-block">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- Add Modal -->

		<!-- Delete Modal -->
		<div class="modal custom-modal fade" id="delete_category" role="dialog">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-body">
						<div class="form-header">
							<h3>Delete</h3>
							<p>Are you sure want to delete?</p>
						</div>
						<div class="modal-btn delete-action">
							<div class="row">
								<div class="col-6">
									<a href="javascript:void(0);" class="btn btn-primary continue-btn">Delete</a>
								</div>
								<div class="col-6">
									<a href="javascript:void(0);" data-bs-dismiss="modal" class="btn btn-primary cancel-btn">Cancel</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /Delete Modal -->
    </div>
</template>
<script>
	export default {
		 mounted() {
			 if($('.datetimepicker').length > 0 ){
		$('.datetimepicker').datetimepicker({
			format: 'DD-MM-YYYY',
			icons: {
				up: "fas fa-angle-up",
				down: "fas fa-angle-down",
				next: 'fas fa-angle-right',
				previous: 'fas fa-angle-left'
			}
		});
	}
            var chart = c3.generate({
    bindto: '#chart-employee', // id of chart wrapper
    data: {
        columns: [
            // each columns data
            ['data1', 0, 5, 5, 7, 20, 13 , 7, 21 , 10 , 7 , 10],
        ],
        type: 'spline', // default type of chart
        groups: [
            [ 'data1', 'data2']
        ],
        colors: {
            data1:'#FF5B37'
        },
        names: {
            // name of each serie
            'data1': 'Maximum'
        }
    },
    axis: {
        x: {
            type: 'category',
            // name of each category
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,'Aug', 'Sep']
        },
    },
    legend: {
          show: false, //hide legend
    },
    padding: {
        bottom: 0,
        top: 0
    },
});
		},
		methods:{
		},
		data() {
			return {
			}
		}
	}
	</script>