<template>
<!-- Voice Call Modal -->
		<div class="modal fade call-modal" id="voice_call">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<!-- Outgoing Call -->
						<div class="call-box incoming-box">
							<div class="call-wrapper">
								<div class="call-inner">
									<div class="call-user">
										<img alt="User Image" src="../../../assets/img/img-05.jpg" class="call-avatar">
										<h4>Darren Elder</h4>
										<span>Connecting...</span>
									</div>							
									<div class="call-items">
										<a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
										<router-link to="/voice-call" class="btn call-item call-start"><i class="material-icons">call</i></router-link>
									</div>
								</div>
							</div>
						</div>
						<!-- Outgoing Call -->
					</div>
				</div>
			</div>
		</div>
		<!-- /Voice Call Modal -->
		
		<!-- Video Call Modal -->
		<div class="modal fade call-modal" id="video_call">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
					
						<!-- Incoming Call -->
						<div class="call-box incoming-box">
							<div class="call-wrapper">
								<div class="call-inner">
									<div class="call-user">
										<img class="call-avatar" src="../../../assets/img/img-05.jpg" alt="User Image">
										<h4>Darren Elder</h4>
										<span>Calling ...</span>
									</div>							
									<div class="call-items">
										<a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
										<router-link to="/video-call" class="btn call-item call-start"><i class="material-icons">videocam</i></router-link>
									</div>
								</div>
							</div>
						</div>
						<!-- /Incoming Call -->
						
					</div>
				</div>
			</div>
		</div>
		<!-- Video Call Modal -->
		<!-- The Modal -->
		<div class="modal fade custom-modal" id="hire">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content bg-modal">
					<div class="modal-header">
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="text-center pt-0 mb-4">
							<img src="../../../assets/img/logo-01.png" alt="logo" class="img-fluid mb-1">
							<h5 class="modal-title">Discuss your project with David</h5>
						</div>
						<form>
							<div class="modal-info">
								<div class="row">
									<div class="col-12 col-md-12">
										<div class="form-group">
											<input type="text" name="name" class="form-control" placeholder="First name & Lastname">
										</div> 
										<div class="form-group">
											<input type="email" name="name" class="form-control" placeholder="Email Address">
										</div> 
										<div class="form-group">
											<input type="text" name="name" class="form-control" placeholder="Phone Number">
										</div> 
										<div class="form-group">
											<textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
										</div> 
										<div class="form-group row">
											<div class="col-12 col-md-4 pr-0">
												<label class="file-upload">
													Add Attachment <input type="file" />
												</label>
											</div>											
											<div class="col-12 col-md-8">
												<p class="mb-1">Allowed file types: zip, pdf, png, jpg</p>
												<p>Max file size: 50 MB</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<router-link to="/dashboard">
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary btn-block submit-btn">Hire Now</button>
							</div>
							</router-link>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /The Modal -->
		<div class="modal fade wallet-rupee" id="wallet">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<div class="payment-list wallet card-body wallet-list">
							<div class="wallet-head text-center">
								<img class="img-fluid" src="../../../assets/img/logo-01.png" alt="app-store">
								<h2>Add wallet</h2>
							</div>
							<div class="form-group profile-group">
								<div class="input-group">
									<div class="input-group-prepend">
										<button class="dol-btn" type="submit">$</button>
									</div>
									<input type="text" class="form-control">										
								</div>
							</div>
							<label class="radio-inline custom_radio me-4">
								<input type="radio" name="optradio" checked>
								<span class="checkmark"></span> Paypal
							</label>
							<label class="radio-inline custom_radio">
								<input type="radio" name="optradio">
								<span class="checkmark"></span> Card
							</label>
							<div class="bootstrap-tags text-start ps-0">
								<span class="badge badge-pill badge-skills">$50</span> 
								<span class="badge badge-pill badge-skills">$100</span> 
								<span class="badge badge-pill badge-skills">$150</span> 
							</div>
											
							<div class="row">
								<div class="col-md-12">
									<div class="form-group">
										<label for="card_number">Card Number</label>
										<input class="form-control" id="card_number" type="text">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="first_name">First Name</label>
										<input class="form-control" id="first_name" type="text">
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="last_name">Last Name</label>
										<input class="form-control" id="last_name" type="text">
									</div>
								</div>
								<div class="col-md-8">
									<div class="form-group">
										<label for="expiry_on">Expires on</label>
										<input class="form-control" id="expiry_on" type="text">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label for="cvv">CVV (Security Code) </label>
										<input class="form-control" id="cvv" type="text">
									</div>
								</div>
								<div class="col-md-8 btn-pad">
									<a href="javascript:void(0);" class="click-btn btn-primary">Continue</a>
								</div>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		<div class="modal fade custom-modal" id="delete-acc">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-body del-modal">
						<form>
							<div class="text-center pt-0 mb-5">
								<i class="fas fa-exclamation-triangle fa-3x"></i>
								<h3>Are you sure? Want to delete Account</h3>
							</div>
							<div class="submit-section text-center">
								<button data-bs-dismiss="modal" class="btn btn-primary black-btn click-btn btn-plan">Cancel</button>
                                <router-link to="/index">
								<button type="submit" class="btn btn-primary click-btn btn-plan ms-1">Submit</button>
                                </router-link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div class="modal fade" id="rating">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header d-block b-0 pb-0">
						<span class="modal-close float-end"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form>
							<div class="modal-info">
								<div class="text-center pt-0 mb-5">
									<h3>Please login to Favourite Freelancer</h3>
								</div>
								<div class="submit-section text-center">
									<button  data-bs-dismiss="modal" class="btn btn-primary black-btn click-btn">Cancel</button>
									<router-link to="/project">
									<button type="submit" class="btn btn-primary click-btn ms-1">Submit</button>
									</router-link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

        <div class="modal fade" id="rating">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header d-block b-0 pb-0">
						<span class="modal-close float-end"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form>
							<div class="modal-info">
								<div class="text-center pt-0 mb-5">
									<h3>Please login to Favourite Freelancer</h3>
								</div>
								<div class="submit-section text-center">
									<button  data-bs-dismiss="modal" class="btn btn-primary black-btn click-btn">Cancel</button>
									<router-link to="/project">
									<button type="submit" class="btn btn-primary click-btn">Submit</button>
									</router-link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- The Modal -->
		<div class="modal fade custom-modal" id="hire">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content bg-modal">
					<div class="modal-header">
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">×</span>
						</button>
					</div>
					<div class="modal-body">
						<div class="text-center pt-0 mb-4">
							<img src="../../../assets/img/logo-01.png" alt="logo" class="img-fluid mb-1">
							<h5 class="modal-title">Discuss your project with David</h5>
						</div>
						<form>
							<div class="modal-info">
								<div class="row">
									<div class="col-12 col-md-12">
										<div class="form-group">
											<input type="text" name="name" class="form-control" placeholder="First name & Lastname">
										</div> 
										<div class="form-group">
											<input type="email" name="name" class="form-control" placeholder="Email Address">
										</div> 
										<div class="form-group">
											<input type="text" name="name" class="form-control" placeholder="Phone Number">
										</div> 
										<div class="form-group">
											<textarea class="form-control" name="message" rows="5" placeholder="Message"></textarea>
										</div> 
										<div class="form-group row">
											<div class="col-12 col-md-4 pr-0">
												<label class="file-upload">
													Add Attachment <input type="file" />
												</label>
											</div>											
											<div class="col-12 col-md-8">
												<p class="mb-1">Allowed file types: zip, pdf, png, jpg</p>
												<p>Max file size: 50 MB</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<router-link to="/dashboard">
							<div class="submit-section text-center">
								<button type="submit" class="btn btn-primary btn-block submit-btn">Hire Now</button>
							</div>
							</router-link>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /The Modal -->
		
		<!-- The Modal -->
		<div class="modal fade" id="file">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">SEND PROPOSALS</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">	
						<div class="modal-info">
							<form>
								<div class="feedback-form">
									<div class="row">
										<div class="col-md-6 form-group">
											<input type="text" class="form-control" placeholder="Your Price">
										</div>
										<div class="col-md-6 form-group">
											<input type="email" class="form-control" placeholder="Estimated Hours">
										</div>
										<div class="col-md-12 form-group">
											<textarea rows="5" class="form-control" placeholder="Cover Letter"></textarea>
										</div>
									</div>
								</div>
								<div class="proposal-features">
									<div class="proposal-widget proposal-success">
										<label class="custom_check">
											<input type="checkbox" name="select_time"><span class="checkmark"></span>
											<span class="proposal-text">Stick this Proposal to the Top</span>
											<span class="proposal-text float-end">$12.00</span>
										</label>
										<p>The sticky proposal will always be displayed on top of all the proposals.</p>
									</div>
									<div class="proposal-widget proposal-light">
										<label class="custom_check">
											<input type="checkbox" name="select_time"><span class="checkmark"></span>
											<span class="proposal-text">$ Make Sealed Proposal</span>
											<span class="proposal-text float-end">$7.00</span>
										</label>
										<p>The sealed proposal will be sent to the project author only it will not be visible publically.</p>
									</div>
									<div class="proposal-widget proposal-danger">
										<label class="custom_check">
											<input type="checkbox" name="select_time"><span class="checkmark"></span>
											<span class="proposal-text">$ Make Sealed Proposal</span>
											<span class="proposal-text float-end">$15.00</span>								
										</label>
										<p>The featured proposal will have a distinctive color and popped up between other proposals to get the author's attention.</p>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 submit-section">
										<label class="custom_check">
											<input type="checkbox" name="select_time">
											<span class="checkmark"></span> I agree to the Terms And Conditions
										</label>
									</div>
									<router-link to="/freelancer-project-proposals">
									<div class="col-md-12 submit-section text-end">
										<button class="btn btn-primary submit-btn" type="submit">SUBMIT PROPOSAL</button>
									</div>
									</router-link>
								</div>											
							</form>		
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /The Modal -->

		<!-- The Modal -->
		<div class="modal fade" id="bookmark">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">INVITE FREELANCER</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form>
							<div class="modal-info">
								<div class="row">
									<div class="col-md-12">
										<div class="average-bids mb-4">
											<p>Contact <span class="text-highlight">John Doe </span>  about your Project</p>
										</div>
										<div class="form-group">
											<label>Invite title</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Send a private message</label>
											<textarea class="form-control" rows="5">Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat.</textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio me-2">
														<input type="radio" value="fix" checked>
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="fix">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio me-2">
														<input type="radio" value="rate" checked>
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="rate">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-7">
														<div class="input-group">
															<div class="input-group-prepend bg-pink d-flex">
																 <span class="input-group-text" id="basic-addon1">$</span>
															</div>
															<input type="text" class="form-control" placeholder="20.00">
														</div>
													</div>
													<div class="col-5">
														<select class="form-control select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-sm-7">
														<div class="input-group form-inline mb-2">
															<div class="input-group-prepend bg-pink d-flex">
																 <span class="input-group-text" id="basic-add">$</span>
															</div>
															<input type="text" class="form-control me-1" placeholder="20.00"> 
															<label class="invited-freelancer-label">/ hr</label>
														</div>
													</div>
													<div class="col-sm-5">
														<select class="form-control select form-select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<label>Project</label>
												<select class="form-control select form-select">
													<option value="0">3D Renders and Amazon Product Store images/Video</option>
													<option value="0">3D Renders and Amazon Product Store Video</option>
													<option value="0">3D Renders and Amazon Product Store images</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<router-link to="/invited-freelancer">
								<div class="submit-section text-end">
									<button type="submit" class="btn btn-primary submit-btn">Send Invite</button>
								</div>
								</router-link>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /The Modal -->
			
			<!-- The Modal -->
			<div class="modal fade" id="rating">
				<div class="modal-dialog modal-dialog-centered modal-md">
					<div class="modal-content">
						<div class="modal-header d-block b-0 pb-0">
							<span class="modal-close float-end"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
						</div>
						<div class="modal-body">		
							<form>
								<div class="modal-info">
									<div class="text-center pt-0 mb-5">
										<h3>Please login to Favourite Freelancers</h3>
									</div>
									<div class="submit-section text-center">
										<button  data-bs-dismiss="modal" class="btn btn-primary black-btn click-btn">Cancel</button>
										<router-link to="/project">
										<button type="submit" class="btn btn-primary click-btn">Submit</button>
										</router-link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /The Modal -->

			<!-- The Modal -->
		<div class="modal fade" id="bookmark">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">INVITE FREELANCER</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form>
							<div class="modal-info">
								<div class="row">
									<div class="col-md-12">
										<div class="average-bids mb-4">
											<p>Contact <span class="text-highlight">John Doe </span>  about your Project</p>
										</div>
										<div class="form-group">
											<label>Invite title</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Send a private message</label>
											<textarea class="form-control" rows="5">Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat.</textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio me-2">
														<input type="radio" value="fix" checked>
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="fix">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio me-2">
														<input type="radio" value="rate" checked>
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="rate">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-7">
														<div class="input-group">
															<div class="input-group-prepend bg-pink d-flex">
																 <span class="input-group-text" id="basic-addon1">$</span>
															</div>
															<input type="text" class="form-control" placeholder="20.00">
														</div>
													</div>
													<div class="col-5">
														<select class="form-control select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-sm-7">
														<div class="input-group form-inline mb-2">
															<div class="input-group-prepend bg-pink d-flex">
																 <span class="input-group-text" id="basic-add">$</span>
															</div>
															<input type="text" class="form-control me-1" placeholder="20.00"> 
															<label class="invited-freelancer-label">/ hr</label>
														</div>
													</div>
													<div class="col-sm-5">
														<select class="form-control select form-select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<label>Project</label>
												<select class="form-control select form-select">
													<option value="0">3D Renders and Amazon Product Store images/Video</option>
													<option value="0">3D Renders and Amazon Product Store Video</option>
													<option value="0">3D Renders and Amazon Product Store images</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<router-link to="/invited-freelancer">
								<div class="submit-section text-end">
									<button type="submit" class="btn btn-primary submit-btn">Send Invite</button>
								</div>
								</router-link>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /The Modal -->
			
			<!-- The Modal -->
			<div class="modal fade" id="rating">
				<div class="modal-dialog modal-dialog-centered modal-md">
					<div class="modal-content">
						<div class="modal-header d-block b-0 pb-0">
							<span class="modal-close float-end"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
						</div>
						<div class="modal-body">		
							<form>
								<div class="modal-info">
									<div class="text-center pt-0 mb-5">
										<h3>Please login to Favourite Freelancers</h3>
									</div>
									<div class="submit-section text-center">
										<button  data-bs-dismiss="modal" class="btn btn-primary black-btn click-btn">Cancel</button>
										<router-link to="/project">
										<button type="submit" class="btn btn-primary click-btn">Submit</button>
										</router-link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /The Modal -->
			<!-- Voice Call Modal -->
		<div class="modal fade call-modal" id="voice_call">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
						<!-- Outgoing Call -->
						<div class="call-box incoming-box">
							<div class="call-wrapper">
								<div class="call-inner">
									<div class="call-user">
										<img alt="User Image" src="../../../assets/img/img-05.jpg" class="call-avatar">
										<h4>Darren Elder</h4>
										<span>Connecting...</span>
									</div>							
									<div class="call-items">
										<a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
										<router-link to="/voice-call" class="btn call-item call-start"><i class="material-icons">call</i></router-link>
									</div>
								</div>
							</div>
						</div>
						<!-- Outgoing Call -->
					</div>
				</div>
			</div>
		</div>
		<!-- /Voice Call Modal -->
		
		<!-- Video Call Modal -->
		<div class="modal fade call-modal" id="video_call">
			<div class="modal-dialog modal-dialog-centered" role="document">
				<div class="modal-content">
					<div class="modal-body">
					
						<!-- Incoming Call -->
						<div class="call-box incoming-box">
							<div class="call-wrapper">
								<div class="call-inner">
									<div class="call-user">
										<img class="call-avatar" src="../../../assets/img/img-05.jpg" alt="User Image">
										<h4>Darren Elder</h4>
										<span>Calling ...</span>
									</div>							
									<div class="call-items">
										<a href="javascript:void(0);" class="btn call-item call-end" data-bs-dismiss="modal" aria-label="Close"><i class="material-icons">call_end</i></a>
										<router-link to="/video-call" class="btn call-item call-start"><i class="material-icons">videocam</i></router-link>
									</div>
								</div>
							</div>
						</div>
						<!-- /Incoming Call -->
						
					</div>
				</div>
			</div>
		</div>
		<!-- Video Call Modal -->

		<!-- The Modal -->
		<div class="modal fade" id="bookmark">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">INVITE FREELANCER</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">		
						<form action="#">
							<div class="modal-info">
								<div class="row">
									<div class="col-md-12">
										<div class="average-bids">
											<p>Contact <span class="text-highlight">John Doe </span>  about your Project</p>
										</div>
										<div class="form-group">
											<label>Invite title</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Send a private message</label>
											<textarea class="form-control" rows="5">Hi  John Doe, I noticed your profile and would like to offer you my project. We can discuss any details over chat.</textarea>
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio">
														<input type="radio" value="fix" name="fix" checked>
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="fix" name="fix">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Hire for</label>
												<div class="radio">
													<label class="custom_radio">
														<input type="radio" value="fix" name="fix">
														<span class="checkmark"></span>  Fixed Price
													</label>
													<label class="custom_radio">
														<input type="radio" value="fix" name="fix">
														<span class="checkmark"></span>  Hourly Rate
													</label>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-6">
														<div class="input-group">
															<div class="input-group-prepend bg-pink">
																 <span class="input-group-text" id="basic-add">$</span>
															</div>
															<input type="text" class="form-control" placeholder="20.00">
														</div>
													</div>
													<div class="col-6">
														<select class="form-control select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label>Budget</label>
												<div class="form-row">												
													<div class="col-6">
														<div class="input-group form-inline">
															<div class="input-group-prepend bg-pink">
																 <span class="input-group-text" id="basic-addon">$</span>
															</div>
															<input type="text" class="form-control me-1" placeholder="20.00"> <label>/ hr</label>
														</div>
													</div>
													<div class="col-6">
														<select class="form-control select">
															<option value="0">USD</option>
															<option value="0">USD</option>
														</select>
													</div>
												</div>
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<label>Project</label>
												<select class="form-control select">
													<option value="0">3D Renders and Amazon Product Store images/Video</option>
													<option value="0">3D Renders and Amazon Product Store Video</option>
													<option value="0">3D Renders and Amazon Product Store images</option>
												</select>
											</div>
										</div>
									</div>
								</div>
								<div class="submit-section text-end">
									<button type="submit" class="btn btn-primary submit-btn">Send Invite</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /The Modal -->
			
			<!-- The Modal -->
			<div class="modal fade" id="rating">
				<div class="modal-dialog modal-dialog-centered modal-md">
					<div class="modal-content">
						<div class="modal-header d-block b-0 pb-0">
							<span class="modal-close float-end"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
						</div>
						<div class="modal-body">		
							<form>
								<div class="modal-info">
									<div class="text-center pt-0 mb-5">
										<h3>Please login to Favourite Freelancers</h3>
									</div>
									<div class="submit-section text-center">
										<button  data-bs-dismiss="modal" class="btn btn-primary black-btn click-btn">Cancel</button>
										<router-link to="/project">
										<button type="submit" class="btn btn-primary click-btn">Submit</button>
										</router-link>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<!-- /The Modal -->
			<!-- The Modal -->
		<div class="modal fade" id="portfolio">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4>Add Portfolio</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">
						<div class="port-title">
							<h3>Simple & Best Way To Showcase Your Work</h3>
						</div>						
						<form>
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
							<div class="submit-section text-right">
								<a data-bs-dismiss="modal" class="btn btn-primary black-btn submit-btn">Cancel</a>
								<router-link to="/freelancer-portfolio">
								<button type="submit" class="btn btn-primary submit-btn">Submit</button>
								</router-link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		
		<!-- The Modal -->
		<div class="modal fade" id="portfolio-edit">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">Add Portfolio</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle orange-text"></i></a></span>
					</div>
					<div class="modal-body">
						<div class="port-title">
							<h3>Simple & Best Way To Showcase Your Work</h3>
						</div>						
						<form>
							<div class="modal-info">
								<div class="row">
									<div class="col-md-12">
										<div class="form-group">
											<label>Title</label>
											<input type="text" class="form-control" value="Portfolio Name">
										</div>
										<div class="form-group">
											<label>Link</label>
											<input type="text" class="form-control" value="Http://www.example.com//john...">
										</div>
										<label class="br-0 file-upload image-upbtn">
											upload Files <input type="file">
										</label>
									</div>
								</div>
							</div>
							<div class="submit-section text-right">
								<a data-bs-dismiss="modal" class="btn btn-primary black-btn submit-btn">Cancel</a>
								<router-link to="/freelancer-portfolio" class="btn btn-primary submit-btn">Submit</router-link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- The Modal -->
		<div class="modal fade" id="file">
			<div class="modal-dialog modal-dialog-centered modal-md">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">EDIT PROPOSAL</h4>
						<span class="modal-close"><a href="javascript:void(0);" data-bs-dismiss="modal" aria-label="Close"><i class="far fa-times-circle"></i></a></span>
					</div>
					<div class="modal-body">		
						<form action="#">
							<div class="modal-info">
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>Cost</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Days</label>
											<input type="text" class="form-control">
										</div>
									</div>
									<div class="col-md-12">
										<div class="form-group">
											<label>Description</label>
											<textarea class="form-control summernote" rows="5"></textarea>
										</div>
									</div>
								</div>
							</div>
							<div class="submit-section text-end">
								<button type="submit" class="btn btn-primary submit-btn">Save Proposal</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /The Modal -->
		<!-- The Modal -->
		<div class="modal fade" id="file">
			<div class="modal-dialog modal-dialog-centered modal-lg">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">SEND PROPOSALS</h4>
					</div>
					<div class="modal-body">	
						<div class="modal-info mb-5">
							<form>
								<div class="feedback-form">
									<div class="row">
										<div class="col-md-6 form-group">
											<input type="text" class="form-control" placeholder="Your Price">
										</div>
										<div class="col-md-6 form-group">
											<input type="email" class="form-control" placeholder="Estimated Hours">
										</div>
										<div class="col-md-12 form-group">
											<textarea rows="5" class="form-control" placeholder="Cover Letter"></textarea>
										</div>
									</div>
								</div>
								<div class="proposal-features">
									<div class="proposal-widget proposal-success">
										<label class="custom_check">
											<input type="checkbox" name="select_time"><span class="checkmark"></span>
											<span class="proposal-text">Stick this Proposal to the Top</span>
											<span class="proposal-text float-end">$12.00</span>
										</label>
										<p>The sticky proposal will always be displayed on top of all the proposals.</p>
									</div>
									<div class="proposal-widget proposal-light">
										<label class="custom_check">
											<input type="checkbox" name="select_time"><span class="checkmark"></span>
											<span class="proposal-text">$ Make Sealed Proposal</span>
											<span class="proposal-text float-end">$7.00</span>
										</label>
										<p>The sealed proposal will be sent to the project author only it will not be visible publically.</p>
									</div>
									<div class="proposal-widget proposal-danger">
										<label class="custom_check">
											<input type="checkbox" name="select_time"><span class="checkmark"></span>
											<span class="proposal-text">$ Make Sealed Proposal</span>
											<span class="proposal-text float-end">$15.00</span>								
										</label>
										<p>The featured proposal will have a distinctive color and popped up between other proposals to get the author's attention.</p>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12 submit-section">
										<label class="custom_check">
											<input type="checkbox" name="select_time">
											<span class="checkmark"></span> I agree to the Terms And Conditions
										</label>
									</div>
									<router-link to="/freelancer-project-proposals">
									<div class="col-md-12 submit-section right-text">
										<button class="btn btn-primary submit-btn" type="submit">SUBMIT PROPOSAL</button>
									</div>
									</router-link>
								</div>											
							</form>		
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- /The Modal -->
		<!-- add skills Modal -->
		<div class="modal fade add-skills" id="add-skills" data-backdrop="static" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered modal-xl">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
						</button>
						<img src="../../../assets/img/logo-01.png" alt="" class="img-fluid mb-3">
						<h3 class="modal-title text-center">Select your skills and expertise</h3>
					</div>
					<div class="modal-body profile-edit-form">
						<form>
							<div class="row">
								<div class="col-12">
									<div class="form-group profile-group mb-2">
										<label>Select your skills and expertise</label>
										<div class="input-group">
											<input type="text" class="form-control" placeholder="Search project">
											<div class="input-group-append">
												<button type="submit" class="bg-none"><i class="fa fa-search orange-text me-2"></i></button>
											</div>
										</div>
									</div>
									<hr class="hr-text" data-content="or">
									<div class="row">
										<div class="col-md-4">
										    <div class="card">
										        <div class="card-header bg-primary">
										            <h4 class="card-title text-white">Select A Category</h4>
										        </div>
										        <div class="card-body p-0">
										            <div class="nav flex-column nav-pills list-group scrollable" id="v-pills-tab" role="tablist" aria-orientation="vertical">
										                <a class="nav-link list-group-item list-group-item-action active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"><i class="fa fa-circle f-7 me-2 text-primary"></i><span>Writing & Content</span> <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>
										                <a class="nav-link list-group-item list-group-item-action" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false"><i class="fa fa-circle f-7 me-2 text-primary"></i> Design, Media & Architecture<span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>
										                <a class="nav-link list-group-item list-group-item-action" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false"><i class="fa fa-circle f-7 me-2 text-primary"></i> Data Entry & Admin<span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>
										                <a class="nav-link list-group-item list-group-item-action" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"><i class="fa fa-circle f-7 me-2 text-primary"></i> Engineering & Science<span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span></a>
										            </div>
										        </div>
										    </div>
										</div>
										<div class="col-md-4">
										    <div class="card">
										        <div class="card-header bg-primary">
										            <h4 class="card-title text-white">Select Sub Category</h4>
										        </div>
										        <div class="card-body p-0 scrollable">
										            <div class="tab-content p-0" id="v-pills-tabContent">
										                <div class="tab-pane fade show active  list-group" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> PHP 
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> 
											                    HTML
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    Software Architecture
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    JavaScript
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                </div>
										                <div class="tab-pane fade list-group" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> PHP 
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> 
											                    HTML
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    Software Architecture
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    JavaScript
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                </div>
										                <div class="tab-pane fade list-group" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> PHP 
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> 
											                    HTML
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    Software Architecture
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    JavaScript
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                </div>
										                <div class="tab-pane fade list-group" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> PHP 
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i> 
											                    HTML
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    Software Architecture
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                    <button type="button" class="list-group-item list-group-item-action">
											                    <i class="fa fa-circle f-7 me-2 text-primary"></i>
											                    JavaScript
											                    <span class="ms-2 text-primary">(3729 jobs)</span>
											                    <span class="float-end"><i class="fa fa-caret-right" aria-hidden="true"></i></span>
										                    </button>
										                </div>
										            </div>
										        </div>
										    </div>
										</div>
										<div class="col-md-4">
											<div class="card">
												<div class="card-header">
													<h4 class="card-title">1 out of 20 skills selected</h4>
												</div>
												<div class="card-body scrollable">
													<a href="javascript:void(0);" class="btn btn-outline-primary rounded-pill">Primary
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-lg-12 text-end">
									<a href="javascript:void(0);" class="btn btn-primary profile-update-btn" data-bs-dismiss="modal">Update</a>
									<a href="javascript:void(0);" class="btn btn-light profile-cancel-btn"  data-bs-dismiss="modal">Cancel</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
		<!-- /add skills Modal -->
</template>