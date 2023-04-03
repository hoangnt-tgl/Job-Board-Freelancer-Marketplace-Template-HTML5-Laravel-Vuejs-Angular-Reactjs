<template>
<div class="chat-cont-right">
									<div class="chat-header">
										<a id="back_user_list" href="javascript:void(0)" class="back-user-list">
											<i class="material-icons">chevron_left</i>
										</a>
										<div class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-online">
													<img src="../../../../assets/img/img-05.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div class="user-name">Doris Brown </div>
												<div class="user-status">online</div>
											</div>
										</div>
										<div class="chat-options">
											<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#voice_call">
												<i class="material-icons icon-grey">local_phone</i>
											</a>
											<a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#video_call">
												<i class="material-icons icon-grey">videocam</i>
											</a>
											<a href="javascript:void(0)">
												<i class="material-icons">more_vert</i>
											</a>
										</div>
									</div>
									<div class="chat-body">
										<div class="chat-scroll">
											<ul class="list-unstyled">
												<li class="media received d-flex">
													<div class="avatar flex-shrink-0">
														<img src="../../../../assets/img/img-02.jpg" alt="User Image" class="avatar-img rounded-circle">
													</div>
													<div class="media-body flex-grow-1">
														<div class="msg-box">
															<div>
																<p>Good morning.....</p>
																<ul class="chat-msg-info">
																	<li>
																		<div class="chat-time">
																			<span>10:00 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li class="media sent d-flex">
													<div class="avatar flex-shrink-0">
														<img src="../../../../assets/img/img-05.jpg" alt="User Image" class="avatar-img rounded-circle">
													</div>
													<div class="media-body flex-grow-1">
														<div class="msg-box">
															<div>
																<p>Good morning, How are you? What about our next meeting?</p>
																<ul class="chat-msg-info">
																	<li>
																		<div class="chat-time">
																			<span>10:02 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</li>
												<li class="media received d-flex">
													<div class="avatar flex-shrink-0">
														<img src="../../../../assets/img/img-02.jpg" alt="User Image" class="avatar-img rounded-circle">
													</div>
													<div class="media-body flex-grow-1">
														<div class="msg-box">
															<div>
																<p>I am good thanks</p>
																<ul class="chat-msg-info">
																	<li>
																		<div class="chat-time">
																			<span>10:03 AM</span>
																		</div>
																	</li>
																</ul>
															</div>
														</div>
													</div>
												</li>												
											</ul>
										</div>
									</div>
									<div class="chat-footer">
										<div class="input-group">
											<div class="avatar">
												<img src="../../../../assets/img/img-05.jpg" alt="User Image" class="avatar-img rounded-circle">
											</div>
											<input type="text" class="input-msg-send form-control" placeholder="Reply...">
											<div class="btn-file btn">
												<i class="far fa-grin fa-1x"></i>
											</div>
											<div class="btn-file btn">
												<i class="fa fa-paperclip"></i>
												<input type="file">
											</div>
											<button type="button" class="btn btn-primary msg-send-btn rounded-pill"><i class="fab fa-telegram-plane"></i></button>
										</div>
									</div>
								</div>
</template>