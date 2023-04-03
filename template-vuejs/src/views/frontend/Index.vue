<template>
<div class="home-page">
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-header />
			<!-- /Header -->
			
            <!-- Home Banner -->
            <section class="section home-banner row-middle">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8 col-lg-7">
                            <div class="banner-content aos" data-aos="fade-up">
                                <div class="rating d-flex mapgridrating1">
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <i class="fas fa-star checked"></i>
                                    <h5>Trused by over 2M+ users</h5> 
                                </div>
                                <h1>Get the perfect <span class="orange-text">Developers & Projects</span></h1>
                                <p>With the world's #1 Developers marketplace</p>
                                
                                <form class="form"  name="store" id="store" action="project">
                                    <div class="form-inner">
                                        <div class="input-group">
                                            <span class="drop-detail">
                                                <select class="form-control select" name="storeID">
                                                    <option value="project">Projects</option>
                                                    <option value="developer">Freelancers</option>
                                                </select>
                                            </span>
                                            <input type="email" class="form-control" placeholder="Search here">
                                            <button class="btn btn-primary sub-btn" type="submit">Search Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-4 col-lg-5">
                            <div class="banner-img aos" data-aos="fade-up">
                                <img src="../../assets/img/banner-img.png" class="img-fluid" alt="banner">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- /Home Banner -->
    
            <!-- Our Feature -->
            <section class="section feature">
                <div class="container">
                    <div class="row">                   
                                
                        <!-- Feature Item -->
                        <div class="col-md-4">
                            <div class="feature-item freelance-count aos" data-aos="fade-up">
                                <div class="feature-icon">
                                    <img src="../../assets/img/icon/icon-01.png" class="img-fluid" alt="">
                                </div>
                                <div class="feature-content">
                                    <h3>919,207</h3>
                                    <p>freelance Developers</p>
                                </div>
                            </div>
                        </div>
                        <!-- /Feature Item -->
                        
                        <!-- Feature Item -->
                        <div class="col-md-4">
                            <div class="feature-item aos" data-aos="fade-up">
                                <div class="feature-icon">
                                    <img src="../../assets/img/icon/icon-02.png" class="img-fluid" alt="">
                                </div>
                                <div class="feature-content">
                                    <h3>25 - 100+</h3>
                                    <p>Developers  per project</p>
                                </div>
                            </div>
                        </div>
                        <!-- /Feature Item -->
                        
                        <!-- Feature Item -->
                        <div class="col-md-4">
                            <div class="feature-item comp-project aos" data-aos="fade-up">
                                <div class="feature-icon">
                                    <img src="../../assets/img/icon/icon-03.png" class="img-fluid" alt="">
                                </div>
                                <div class="feature-content">
                                    <h3>388,615</h3>
                                    <p>completed projects</p>
                                </div>
                            </div>
                        </div>
                        <!-- /Feature Item -->                                  
                                                
                    </div>
                </div>
            </section>  
            <!-- /Our Feature -->           
            
            <!--- Developed Project  -->
            <section class="section work">
                <div class="container-fluid">
                    <div class="row">                   
                                
                        <!-- Feature Item -->
                        <div class="col-md-6 work-box bg1">
                            <div class="work-content aos" data-aos="fade-up">
                                <h2>I need a Developed <span>Project</span></h2>
                                <p>Get the perfect Developed project for your budget from our creative community.</p>
                                <router-link to="/project"><i class="fas fa-long-arrow-alt-right long-arrow"></i></router-link>
                            </div>
                        </div>
                        <!-- /Feature Item -->
                        
                        <div class="col-md-6 work-box bg2">
                            <div class="work-content aos" data-aos="fade-up">
                                <h2>I want to <span>work</span></h2>
                                <p>Do you want to earn money, find unlimited clients and build your freelance career?</p>
                                <router-link to="/developer"><i class="fas fa-long-arrow-alt-right long-arrow"></i></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!--- /Developed Project  -->
            
            <!-- Projects -->
            <section class="section projects">
                <div class="container">
                <div class="row">
                    <div class="col-12 col-md-12 mx-auto">
                        <div class="section-header text-center aos" data-aos="fade-up">	   
                            <div class="section-line"></div>
                            <h2 class="header-title">Get Inspired<br> By Development Projects</h2>
                            <p>High Performing Solutions To Your</p>
                        </div>
                    </div>
                </div>
                    
                <div class="row">
                    
                    <!--- Project Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-01.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>ANDROID APPS</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                    <!--- Project Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-02.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>LARAVEL</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                    <!--- Project-Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-03.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>React</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                    <!--- Project Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-04.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>GOLANG</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                    <!--- Project Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-01.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>.NET</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                    <!--- Project Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-04.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>JAVA</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                    <!--- Project Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-03.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>PYTHON</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                    <!--- Project-Item  -->
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="project-item aos" data-aos="fade-up">
                            <div class="project-img">
                                <router-link to="/project"><img src="../../assets/img/project/project-01.jpg" alt="" class="img-fluid"></router-link>
                            </div>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="project-content">
                                    <h4>45</h4>
                                    <h5>ANGULAR</h5>
                                </div>
                                <div class="pro-icon">
                                    <div class="project-icon">
                                    </div>
                                </div>
                                <div class="project-content">
                                    <h4>20</h4>
                                    <h5>Developers</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--- /Project Item  -->
                    
                </div>
                
                <div class="row">
                    <div class="col-md-12 text-center">
                        <div class="see-all aos" data-aos="fade-up"> 
                            <router-link to="/project" class="btn all-btn">SEE ALL PROJECT</router-link>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <!-- /Projects -->
        
            <!-- Subscribe -->
            <section class="section subscribe">
                <div class="container">
                    <div class="row align-items-center aos" data-aos="fade-up">		                    
                        <div class="col-md-4"> 
                            <img src="../../assets/img/subscribe.png" class="img-fluid" alt="subscribe">
                        </div>
                        <div class="col-md-6"> 
                            <h3>Subscribe To Get Discounts, Updates & More</h3>
                            <p>Monthly product updates, industry news and more!</p>
                            <form action="#" method="POST">
                                <div class="form-inner">
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Enter Email Address">
                                        <button class="btn btn-primary sub-btn" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <!-- End Subscribe -->  
        
            <section class="section developer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 col-sm-12 col-12 mx-auto">
                            <div class="section-header text-center aos" data-aos="fade-up">
                                <div class="section-line"></div>
                                <h2 class="header-title">Most Hired Developers</h2>
                                <p>Work with talented people at the most affordable price</p>
                            </div>
                        </div>
                    </div>
                <div id="testimonial-slider" class="testimonial-slider aos" data-aos="fade-up">
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/user/avatar-1.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">George Wells</a></h3>
                                <div class="freelance-specific">UI/UX Designer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.7 (32)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">$25 Hourly</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/user/avatar-2.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">Timothy Smith</a></h3>
                                <div class="freelance-specific">PHP Developer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Illinois, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">3.5 (25)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">Free</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/user/avatar-3.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">Janet Paden</a></h3>
                                <div class="freelance-specific">Graphic Designer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>New York, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.1 (30)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">$27 Hourly</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/img-03.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">James Douglas</a></h3>
                                <div class="freelance-specific">iOS Developer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Florida, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.3 (31)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">$23 Hourly</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/img-03.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">Richard Wilson</a></h3>
                                <div class="freelance-specific">UI/UX Designer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.7 (32)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">$25 Hourly</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/img-03.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">Richard Wilson</a></h3>
                                <div class="freelance-specific">UI/UX Designer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.7 (32)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">$25 Hourly</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/img-03.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">Richard Wilson</a></h3>
                                <div class="freelance-specific">UI/UX Designer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.7 (32)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">$25 Hourly</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/img-03.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">Richard Wilson</a></h3>
                                <div class="freelance-specific">UI/UX Designer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.7 (32)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">$25 Hourly</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite favourited"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/img-04.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                    <h3><a href="javascript:void(0);">Richard Wilson</a></h3>
                                    <div class="freelance-specific">UI/UX Designer</div>
                                    <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
                                    <div class="rating mapgridrating1">
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star filled"></i>
                                        <i class="fas fa-star"></i>
                                        <span class="average-rating">4.8 (55)</span>
                                    </div>
                                    <div class="freelance-tags">
                                        <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                        <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                        <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                    </div>
                                    <div class="freelancers-price">$25 Hourly</div>
                                </div>
                            </div>
                                <div class="cart-hover">
                                    <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                                </div>
                    </div>
                    <div class="freelance-widget freelancerslide">
                        <div class="freelance-content">
                            <a data-toggle="modal" href="#rating" class="favourite"><i class="fas fa-star"></i></a>
                            <div class="freelance-img">
                                <a href="javascript:void(0);">
                                    <img src="../../assets/img/img-03.jpg" alt="User Image">
                                    <span class="verified"><i class="fas fa-check-circle"></i></span>
                                </a>
                            </div>
                            <div class="freelance-info">
                                <h3><a href="javascript:void(0);">Richard Wilson</a></h3>
                                <div class="freelance-specific">UI/UX Designer</div>
                                <div class="freelance-location"><i class="fas fa-map-marker-alt me-1"></i>Alabama, USA</div>
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">5.0 (4)</span>
                                </div>
                                <div class="freelance-tags">
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design">Web Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">UI Design</span></a>
                                    <a href="javascript:void(0);"><span class="badge badge-pill badge-design ms-1">Node Js</span></a>
                                </div>
                                <div class="freelancers-price">Free</div>
                            </div>
                        </div>
                        <div class="cart-hover">
                            <router-link to="/developer-details" class="btn-cart" tabindex="-1">View Profile</router-link>
                        </div>
                    </div>
                </div>
                
                </div>
            </section>
        
            <!-- Review -->
            <section class="section testimonial-section review">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="section-header text-center aos" data-aos="fade-up">
                                <div class="section-line"></div>
                                <h2 class="header-title">Top Reviews</h2>
                                <p>High Performing Developers To Your</p>
                            </div>
                        </div>
                    </div>
                <div id="developer-slider" class="developer-slider aos" data-aos="fade-up">
                            
                    <!-- Review Widget -->
                    <div class="review-blog">
                        <div class="review-top d-flex align-items-center">
                            <div class="review-img">
                                <router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-01.jpg" alt="Post Image"></router-link>
                            </div>
                            <div class="review-info">
                                <h3>Davis Payerf</h3>
                                <h5>CEO</h5>                                
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.7</span>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                        </div>
                    </div>
                    <!-- / Review Widget -->
                    
                    <!-- Review Widget -->
                    <div class="review-blog">
                        <div class="review-top d-flex align-items-center">
                            <div class="review-img">
                                <router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-02.jpg" alt="Post Image"></router-link>
                            </div>
                            <div class="review-info">
                                <h3>Davis Payerf</h3>
                                <h5>PROJECT LEAD</h5>                               
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">4.8</span>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                        </div>
                    </div>
                    <!-- /Review Widget -->
                    
                    <!-- Review Widget -->
                    <div class="review-blog">
                        <div class="review-top d-flex align-items-center">
                            <div class="review-img">
                                <router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-03.jpg" alt="Post Image"></router-link>
                            </div>
                            <div class="review-info">
                                <h3>Davis Payerf</h3>
                                <h5>TEAM LEAD</h5>                              
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">5.0</span>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                        </div>
                    </div>
                    <!-- /Review Widget -->
                    
                    <!-- Review Widget -->
                    <div class="review-blog">
                        <div class="review-top d-flex align-items-center">
                            <div class="review-img">
                                <router-link to="/review"><img class="img-fluid" src="../../assets/img/review/review-02.jpg" alt="Post Image"></router-link>
                            </div>
                            <div class="review-info">
                                <h3>Davis Payerf</h3>
                                <h5>PROJECT LEAD</h5>                               
                                <div class="rating mapgridrating1">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star"></i>
                                    <span class="average-rating">3.2</span>
                                </div>
                            </div>
                        </div>
                        <div class="review-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat orci enim, mattis nibh aliquam dui, nibh faucibus aenean.</p>
                        </div>
                    </div>
                    <!-- /Review Widget -->
                </div>
                
                </div>
            </section>
            <!-- / Review -->
        
            <!-- News -->
            <section class="section news">
                <div class="container">             
                    <div class="row">
                        <div class="col-12">
                            <div class="section-header text-center aos" data-aos="fade-up">
                                <div class="section-line"></div>
                                <h2 class="header-title">Feature Blog</h2>
                                <p>High Performing Developers To Your</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>   
                        <div class="row blog-grid-row aos" data-aos="fade-up">
                            <div class="col-md-4">
                            
                                <!-- Blog Post -->
                                <div class="blog grid-blog aos" data-aos="fade-up">
                                    <div class="blog-image">
                                        <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-01.jpg" alt="Post Image"></router-link>
                                    </div>
                                    <div class="blog-content">
                                        <ul class="entry-meta meta-item">
                                            <li>
                                                <div class="post-author">
                                                    <router-link to="/developer-details"><img src="../../assets/img/img-02.jpg" alt="Post Author"> <span> David Lee</span></router-link>
                                                </div>
                                            </li>
                                            <li><i class="far fa-clock"></i> 4 Oct 2021</li>
                                        </ul>
                                        <h3 class="blog-title"><router-link to="/blog-details">Your next job starts right here</router-link></h3>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                                <!-- /Blog Post -->
                                
                            </div>
                            <div class="col-md-4">
                            
                                <!-- Blog Post -->
                                <div class="blog grid-blog aos" data-aos="fade-up">
                                    <div class="blog-image">
                                        <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-02.jpg" alt="Post Image"></router-link>
                                    </div>
                                    <div class="blog-content">
                                        <ul class="entry-meta meta-item">
                                            <li>
                                                <div class="post-author">
                                                    <router-link to="/developer-details"><img src="../../assets/img/img-03.jpg" alt="Post Author"> <span> Deborah Angel</span></router-link>
                                                </div>
                                            </li>
                                            <li><i class="far fa-clock"></i> 10 Oct 2021</li>
                                        </ul>
                                        <h3 class="blog-title"><router-link to="/blog-details">People who completed NAND?</router-link></h3>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                                <!-- /Blog Post -->
                                
                            </div>
                            <div class="col-md-4">
                            
                                <!-- Blog Post -->
                                <div class="blog grid-blog aos" data-aos="fade-up">
                                    <div class="blog-image">
                                        <router-link to="/blog-details"><img class="img-fluid" src="../../assets/img/blog/blog-03.jpg" alt="Post Image"></router-link>
                                    </div>
                                    <div class="blog-content">
                                        <ul class="entry-meta meta-item">
                                            <li>
                                                <div class="post-author">
                                                    <router-link to="/developer-details"><img src="../../assets/img/img-04.jpg" alt="Post Author"> <span>Darren Elder</span></router-link>
                                                </div>
                                            </li>
                                            <li><i class="far fa-clock"></i> 3 Nov 2021</li>
                                        </ul>
                                        <h3 class="blog-title"><router-link to="/blog-details">Kofejob - How to get job through online?</router-link></h3>
                                        <p class="mb-0">Lorem ipsum dolor sit amet, consectetur em adipiscing elit, sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                                <!-- /Blog Post -->
                                
                            </div>                  
                        </div>          
                    </div>
                </div>
            </section>
            <!-- / News -->
           
            <!-- Footer -->
                <layout-footer />
            <!-- /Footer -->
        </div>
        <!-- /Main Wrapper -->
        </div>
</template>
<script>
    import AOS from 'aos';
export default {
     mounted() {

        if($('.main-wrapper .aos').length > 0) {
	    AOS.init({
		  duration: 1200,
		  once: true,
		});
	}


$(document).on('click', '.searchbar .fa-search', function() {
        $(".togglesearch").toggle();
        $(".top-search").focus();
    });
var maxLength = 100;
    $('#review_desc').on('keyup change', function () {
        var length = $(this).val().length;
         length = maxLength-length;
        $('#chars').text(length);
    });
if($('.floating').length > 0 ){
        $('.floating').on('focus blur', function (e) {
        $(this).parents('.form-focus').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
    }
// Add More Hours
    
    $(".hours-info").on('click','.trash', function () {
        $(this).closest('.hours-cont').remove();
        return false;
    });

    $(".add-hours").on('click', function () {
        
        var hourscontent = '<div class="row form-row hours-cont">' +
            '<div class="col-12 col-md-10">' +
                '<div class="row form-row">' +
                    '<div class="col-12 col-md-6">' +
                        '<div class="form-group">' +
                            '<label>Start Time</label>' +
                            '<select class="form-control">' +
                                '<option>-</option>' +
                                '<option>12.00 am</option>' +
                                '<option>12.30 am</option>' + 
                                '<option>1.00 am</option>' +
                                '<option>1.30 am</option>' +
                            '</select>' +
                        '</div>' +
                    '</div>' +
                    '<div class="col-12 col-md-6">' +
                        '<div class="form-group">' +
                            '<label>End Time</label>' +
                            '<select class="form-control">' +
                                '<option>-</option>' +
                                '<option>12.00 am</option>' +
                                '<option>12.30 am</option>' +
                                '<option>1.00 am</option>' +
                                '<option>1.30 am</option>' +
                            '</select>' +
                        '</div>' +
                    '</div>' +
                '</div>' +
            '</div>' +
            '<div class="col-12 col-md-2"><label class="d-md-block d-sm-none d-none">&nbsp;</label><a href="javascript:void(0);" class="btn btn-danger trash"><i class="far fa-trash-alt"></i></a></div>' +
        '</div>';
        
        $(".hours-info").append(hourscontent);
        return false;
    });
function resizeInnerDiv() {
        var height = $(window).height();    
        var header_height = $(".header").height();
        var footer_height = $(".footer").height();
        var setheight = height - header_height;
        var trueheight = setheight - footer_height;
        $(".content").css("min-height", trueheight);
    }
    
    if($('.content').length > 0 ){
        resizeInnerDiv();
    }

    $(window).on('resize', function(){
        if($('.content').length > 0 ){
            resizeInnerDiv();
        }
    });
var chatAppTarget = $('.chat-window');
    (function() {
        if ($(window).width() > 991)
            chatAppTarget.removeClass('chat-slide');
        
        $(document).on("click",".chat-window .chat-users-list a.media",function () {
            if ($(window).width() <= 991) {
                chatAppTarget.addClass('chat-slide');
            }
            return false;
        });
        $(document).on("click","#back_user_list",function () {
            if ($(window).width() <= 991) {
                chatAppTarget.removeClass('chat-slide');
            }   
            return false;
        });
    })();
$(document).on('click', '.select-group .select-item .service-item', function() {
        $('.selected .service-item .fa').removeClass('fa-check');
        $('.select-item .service-item').removeClass('selected');
        $(this).addClass('selected');
    });
$(document).on('click', '.readmore', function() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    });
if($('#store').length > 0) {
        document.getElementById('store').storeID.onchange = function() {
            var newaction = this.value;
            document.getElementById('store').action = newaction;
        }
    };
// Edit Experiance

    $('#edit_experiance').on('click',function(){
        $('.pro-new').css('display','block');
        $('.pro-text').css('display','none');
    });

    $('.profile-cancel-btn').on('click',function(){
       $('.pro-new').css('display','none');
       $('.pro-text').css('display','block');
    });
   
    // Overview
    $('#edit_overview').on('click',function(){
       $('.pro-new1').css('display','block');
       $('.pro-text1').css('display','none');
    });

    $('.profile-cancel-btn').on('click',function(){
       $('.pro-new1').css('display','none');
       $('.pro-text1').css('display','block');
    });
   
    // Overview

    $('#edit_education').on('click',function(){
       $('.pro-new2').css('display','block');
       $('.pro-text2').css('display','none');
    });

    $('.profile-cancel-btn').on('click',function(){
       $('.pro-new2').css('display','none');
       $('.pro-text2').css('display','block');
    });

    $('#edit_name').on('click',function(){
        $('.pro-new3').css('display','block');
        $('.pro-text3').css('display','none');
    });

    $('.profile-cancel-btn').on('click',function(){
        $('.pro-new3').css('display','none');
        $('.pro-text3').css('display','block');
    });

           if($('.testimonial-slider').length > 0) {
    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
              breakpoint: 800,
              settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }         
            ]
        });
    }


       if($('.developer-slider').length > 0) {
    $('.developer-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
              breakpoint: 800,
              settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }         
            ]
        });
    }








     if ($('.datatable').length > 0) {
        $('.datatable').DataTable({
            "bInfo" : false,
            "bSort" : false
        });
    }
    if($('.select').length > 0) {
        $('.select').select2({
            minimumResultsForSearch: -1,
            width: '100%'
        });
    }
        $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 100) {
            $(".header").removeClass("sticky");
        } else {
            $(".header").addClass("sticky");
        }
    });   
    
    },
}
</script>