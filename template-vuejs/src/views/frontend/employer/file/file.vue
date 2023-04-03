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
										<li class="breadcrumb-item" aria-current="page">Milestones</li>
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
						<div class="col-xl-3 col-md-4 theiaStickySidebar">
							<div class="stickyside">
							<div class="settings-widget">
								<div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
									<router-link to="/user-account-details"><img alt="profile image" src="../../../../assets/img/img-04.jpg" class="avatar-lg rounded-circle"></router-link>
									<div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
										<p class="mb-2">Welcome,</p>
										<router-link to="/user-account-details"><h3 class="mb-0">John Danie S.</h3></router-link>
										<p class="mb-0">@johndaniee</p>
									</div>
								</div>
								<div class="settings-menu">
									<ul>
										<li class="nav-item">
											<router-link to="/dashboard" class="nav-link">
												<i class="material-icons">verified_user</i> Dashboard
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/manage-projects" class="nav-link active">
												<i class="material-icons">business_center</i> Projects
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/favourites" class="nav-link">
												<i class="material-icons">local_play</i> Favourites
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/review" class="nav-link">
												<i class="material-icons">record_voice_over</i> Reviews
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/chats" class="nav-link">
												<i class="material-icons">chat</i> Messages
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/membership-plans" class="nav-link">
												<i class="material-icons">person_add</i> Membership
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/milestones" class="nav-link">
												<i class="material-icons">pie_chart</i> Milestones
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/verify-identity" class="nav-link">
												<i class="material-icons">person_pin</i> Verify Identity
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/deposit-funds" class="nav-link">
												<i class="material-icons">wifi_tethering</i> Payments
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/profile-settings" class="nav-link">
												<i class="material-icons">settings</i> Settings
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/index" class="nav-link">
												<i class="material-icons">power_settings_new</i> Logout
											</router-link>
										</li>
									</ul>
								</div>
							</div>	
							</div>				
						</div>
						<!-- /sidebar -->
						
						<div class="col-xl-9 col-md-8">
							
                            <employeefiletab></employeefiletab>
							
							<!-- project list -->
							<div class="my-projects-view">
								<div class="row">
									<div class="col-lg-12">
										<div class="">
											<div class="card">
												<div class="card-header">
													<div class="row justify-content-between align-items-center">
														<div class="col">
															<h5 class="card-title">Files</h5>
														</div>
														<div class="col-auto">
															<a data-bs-toggle="modal" href="#file" class="btn btn-primary btn-rounded"><i class="fas fa-plus"></i> Add files</a>
														</div>
													</div>
												</div>
												<div class="card-body">
													<div class="table-responsive table-box">
														<table class="table table-center table-hover datatable" id="file">
															<thead class="thead-pink">
																<tr>
																	<th>File Preview</th>
																	<th>Title</th>
																	<th>Description</th>
																	<th>Type</th>
																	<th>Size</th>
																	<th>Action</th>
																</tr>
															</thead>
															<tbody>
																<tr v-for="item in file" :key="item.id">
																	<td><img :src="loadImg(item.img)" class="img-fluid" alt="Logo"></td>
																	<td> {{item.name}}  </td>
																	<td><p class="mb-0">{{item.name1}}</p>
																		<a href="javascript:void(0);" class="read-text">{{item.name2}}</a>
																	</td>
																	<td>{{item.name3}}</td>
																	<td>{{item.name4}}</td>
																	<td>
																		<div class="action">
																			<a href="javascript:void(0);" class="file-circle me-2"><i class="fas fa-cloud-download-alt"></i></a>
																			<a data-bs-toggle="modal" href="#edit-file" class="file-circle me-2"><i class="fas fa-pen"></i></a>
																			<a href="javascript:void(0);" class="file-circle"><i class="fas fa-trash-alt"></i></a>
																		</div>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
													<div class="text-end mt-3">
														<ul class="paginations">
															<li><a href="javascript:void(0);"> <i class="fas fa-angle-left"></i> Previous</a></li>
															<li><a href="javascript:void(0);">1</a></li>
															<li><a href="javascript:void(0);" class="active">2</a></li>
															<li><a href="javascript:void(0);">3</a></li>
															<li><a href="javascript:void(0);">4</a></li>
															<li><a href="javascript:void(0);">Next <i class="fas fa-angle-right"></i></a></li>
														</ul>
													</div>
												</div>
											</div>
										</div>	
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
        <!-- The Modal -->
		<div class="modal fade" id="file">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="mb-0">Add Files</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form action="files.html">
							<div class="modal-info">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Title</label>
											<input type="text" class="form-control">
										</div>
										<div class="form-group">
											<label>Link</label>
											<input type="text" class="form-control">
										</div>
										<label class="br-0 file-upload image-upbtn">
											upload Files <input type="file">
										</label>
									</div>
								</div>
							</div>
							<div class="submit-section text-end">
								<button type="submit" class="btn btn-primary submit-btn">Submit</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /The Modal -->
		
		<!-- Edit Modal -->
		<div class="modal fade" id="edit-file">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="mb-0">Edit Files</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form>
							<div class="modal-info">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Title</label>
											<input type="text" class="form-control" value="Image for Section background">
										</div>
										<div class="form-group">
											<label>Link</label>
											<input type="text" class="form-control" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit">
										</div>
										<div class="d-flex align-items-center">
											<img src="../../../../assets/img/file-logo.png" class="img-fluid me-2" alt="Logo">
											<label class="br-0 file-upload image-upbtn">
												upload Files <input type="file">
											</label>
										</div>
									</div>
								</div>
							</div>
							<router-link to="/files">
							<div class="submit-section text-end">
								<button type="submit" class="btn btn-primary submit-btn">Submit</button>
							</div>
							</router-link>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /Edit Modal -->
        </div>
</template>
<script>
	import file from '../../../../assets/json/frontend/employer/file.json'
    import util from '../../../../assets/utils/util'
	const images = require.context('../../../../assets/img', false, /\.png$|\.jpg$|\.svg$/)
	export default {
		 mounted() {
            util.datatable('#file')
		},
		methods:{
			loadImg(imgPath) {
				return images('./' + imgPath).default
			},
		},
		data() {
			return {
				file: file
			}
		}
	}
	</script>