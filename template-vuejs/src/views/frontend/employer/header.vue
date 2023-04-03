<template>
<header class="header" v-if="currentPath == 'user-account-details'">
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <router-link to="/index" class="navbar-brand logo">
                    <img src="../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                </router-link>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <router-link to="/index" class="menu-logo">
                        <img src="../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                    </router-link>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav">
                    <li class="has-submenu" :class="homeMenu ? 'active' : 'notactive'">
                        <a>Home <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li :class="currentPath == '/index' ? 'active' : 'notactive'"><router-link to="/index">Home</router-link></li>
                            <li :class="currentPath == 'index-two' ? 'active' : 'notactive'"><router-link to="/index-two">Home 2</router-link></li>
                            <li :class="currentPath == 'index-three' ? 'active' : 'notactive'"><router-link to="/index-three">Home 3</router-link></li>
                            <li :class="currentPath == 'index-four' ? 'active' : 'notactive'"><router-link to="/index-four">Home 4</router-link></li>
                            <li :class="currentPath == 'index-five' ? 'active' : 'notactive'"><router-link to="/index-five">Home 5</router-link></li>
                        </ul>
                    </li>
                    <li class="has-submenu" :class="patientsMenu ? 'active' : 'notactive'">
                        <a href="">For Employers<i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li class="has-submenu" :class="currentPath == 'developer' ? 'active' : 'notactive'">
                                <a href="javascript:void(0);">Freelancer</a>
                                <ul class="submenu">
                                    <li :class="currentPath == 'developer' ? 'active' : 'notactive'"><router-link to="/developer">Freelancer</router-link></li>
                                    <li><router-link to="/developer-details">Freelancer Details</router-link></li>
                                </ul>
                            </li>
                            <li :class="currentPath == 'dashboard' ? 'active' : 'notactive'"><router-link to="/dashboard">Dashboard</router-link></li>	
                            <li :class="currentPath == 'company-profile' ? 'active' : 'notactive'"><router-link to="/company-profile">My Profile</router-link></li>	
                            <li :class="currentPath == 'company-details' ? 'active' : 'notactive'"><router-link to="/company-details">Company Details</router-link></li>	
                            <li :class="currentPath == 'manage-projects' || currentPath == 'cancelled-projects' || currentPath == 'completed-projects' ? 'active' : 'notactive'"><router-link to="/manage-projects">Projects</router-link></li>
                            <li :class="currentPath == 'invaited-list' || currentPath == 'favourites' || currentPath == 'favourites-list' ? 'active' : 'notactive'"><router-link to="/favourites">Favourites</router-link></li>
                            <li :class="currentPath == 'membership-plans' ? 'active' : 'notactive'"><router-link to="/membership-plans">Membership</router-link></li>
                            <li :class="currentPath == 'tasks' || currentPath == 'milestones' || currentPath == 'change-password' || currentPath == 'view-project-detail' ? 'active' : 'notactive'"><router-link to="/milestones">Milestones</router-link></li>
                            <li :class="currentPath == 'chats' ? 'active' : 'notactive'"><router-link to="/chats">Chats</router-link></li>
                            <li :class="currentPath == 'review' ? 'active' : 'notactive'"><router-link to="/review">Review</router-link></li>			
                            <li :class="currentPath == 'deposit-funds' || currentPath == 'withdraw-money' ? 'active' : 'notactive'"><router-link to="/deposit-funds">Payments</router-link></li>							
                            <li :class="currentPath == 'verify-identity' ? 'active' : 'notactive'"><router-link to="/verify-identity">Verify Identity</router-link></li>								
                            <li :class="currentPath == 'profile-settings' || currentPath == 'delete-account' ? 'active' : 'notactive'"><router-link to="/profile-settings"  :class="currentPath == 'profile-settings' || currentPath == 'delete-account' ? 'active' : 'notactive'">Settings</router-link></li>
                        </ul>
                    </li>
                    <li class="has-submenu" :class="freelancerMenu ? 'active' : 'notactive'">
                        <a href="">For Freelancer<i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li class="has-submenu" :class="currentPath == 'project' || currentPath == 'project-details' ? 'active' : 'notactive'">
                                <a href="javascript:void(0);">Projects</a>
                                <ul class="submenu">
                                    <li :class="currentPath == 'project' ? 'active' : 'notactive'"><router-link to="/project">Projects</router-link></li>
                                    <li :class="currentPath == 'project-details' ? 'active' : 'notactive'"><router-link to="/project-details">Project Details</router-link></li>
                                </ul>
                            </li>
                            <li :class="currentPath == 'freelancer-dashboard' ? 'active' : 'notactive'"><router-link to="/freelancer-dashboard">Dashboard</router-link></li>
                            <li :class="currentPath == 'developer-profile' ? 'active' : 'notactive'"><router-link to="/developer-profile">My Profile</router-link></li>	
                            <li :class="currentPath == 'developer-details' ? 'active' : 'notactive'"><router-link to="/developer-details">Freelancer Details</router-link></li>
                            <li :class="currentPath == 'freelancer-project-proposals' ? 'active' : 'notactive'"><router-link to="/freelancer-project-proposals">Projects</router-link></li>
                            <li :class="currentPath == 'freelancer-favourites' ? 'active' : 'notactive'"><router-link to="/freelancer-favourites">Favourites</router-link></li>
                            <li :class="currentPath == 'freelancer-membership' ? 'active' : 'notactive'"><router-link to="/freelancer-membership">Membership</router-link></li>
                            <li :class="currentPath == 'freelancer-change-password' ? 'active' : 'notactive'"><router-link to="/freelancer-change-password">Change Password</router-link></li>
                            <li :class="currentPath == 'freelancer-chats' ? 'active' : 'notactive'"><router-link to="/freelancer-chats">Chats</router-link></li>
                            <li :class="currentPath == 'freelancer-review' ? 'active' : 'notactive'"><router-link to="/freelancer-review">Review</router-link></li>			
                            <li :class="currentPath == 'freelancer-withdraw-money' ? 'active' : 'notactive'"><router-link to="/freelancer-withdraw-money">Payments</router-link></li>							
                            <li :class="currentPath == 'freelancer-verify-identity' ? 'active' : 'notactive'"><router-link to="/freelancer-verify-identity">Verify Identity</router-link></li>				
                            <li :class="currentPath == 'freelancer-profile-settings' ? 'active' : 'notactive'"><router-link to="/freelancer-profile-settings">Settings</router-link></li>				
                        </ul>
                    </li>
                    <li class="has-submenu" :class="pagesMenu ? 'active' : 'notactive'">
                        <a href="">Pages <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li :class="currentPath == 'about' ? 'active' : 'notactive'"><router-link to="/about">About us</router-link></li>
                            <li :class="currentPath == 'blank-page' ? 'active' : 'notactive'"><router-link to="/blank-page">Starter Page</router-link></li>
                            <li :class="currentPath == '404-page' ? 'active' : 'notactive'"><router-link to="/404-page">404 Page</router-link></li>
                            <li class="has-submenu" :class="currentPath == 'freelancer-invoices' || currentPath == 'view-invoice' ? 'active' : 'notactive'">
                                <a>Invoices</a>
                                <ul class="submenu">
                                    <li :class="currentPath == 'freelancer-invoices' ? 'active' : 'notactive'"><router-link to="/freelancer-invoices">Invoices</router-link></li>
                                    <li :class="currentPath == 'view-invoice' ? 'active' : 'notactive'"><router-link to="/view-invoice">Invoice View</router-link></li>
                                </ul>
                            </li>
                            <li :class="currentPath == 'login' ? 'active' : 'notactive'"><router-link to="/login">Login</router-link></li>
                            <li :class="currentPath == 'register' ? 'active' : 'notactive'"><router-link to="/register">Register</router-link></li>
                            <li :class="currentPath == 'onboard-screen' ? 'active' : 'notactive'"><router-link to="/onboard-screen">Onboard Screen</router-link></li>
                            <li :class="currentPath == 'forgot-password' ? 'active' : 'notactive'"><router-link to="/forgot-password">Forgot Password</router-link></li>
                            <li><router-link to="/change-password">Change Password</router-link></li>									
                        </ul>
                    </li>
                    <li class="has-submenu" :class="BlogMenu ? 'active' : 'notactive'">
                        <a href="">Blog <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li :class="currentPath == 'blog-list' ? 'active' : 'notactive'"><router-link to="/blog-list">Blog List</router-link></li>
                            <li :class="currentPath == 'blog-grid' ? 'active' : 'notactive'"><router-link to="/blog-grid">Blog Grid</router-link></li>
                            <li :class="currentPath == 'blog-details' ? 'active' : 'notactive'"><router-link to="/blog-details">Blog Details</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/admin/login" target="_blank">Admin</router-link>
                    </li>
                </ul>
            </div>		 
            <ul class="nav header-navbar-rht">	
                <!-- User Menu -->
                <li class="nav-item dropdown has-arrow main-drop account-item">
                    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <img src="../../../assets/img/img-04.jpg" alt="">
                        </span>
                        <span>John</span>
                    </a>
                    <div class="dropdown-menu emp">
                        <div class="drop-head">Account Details</div>	
                        <router-link class="dropdown-item" to="/user-account-details"><i class="material-icons">verified_user</i> View profile</router-link>
                        <div class="drop-head">Projects Settings</div>	
                        <router-link class="dropdown-item" to="/manage-projects"><i class="material-icons">business_center</i> Projects</router-link>
                        <router-link class="dropdown-item" to="/favourites"><i class="material-icons">local_play</i> Favourites</router-link>
                        <router-link class="dropdown-item" to="/review"><i class="material-icons">pie_chart</i> Reviews</router-link>
                        <div class="drop-head">Account Details</div>
                        <router-link class="dropdown-item" to="/profile-settings"> <i class="material-icons">settings</i> Profile Settings</router-link>
                        <router-link class="dropdown-item" to="/"><i class="material-icons">power_settings_new</i> Logout</router-link>
                    </div>
                </li>
                <!-- /User Menu -->
                <li><router-link to="/post-project" class="login-btn">Post a Project </router-link></li>
            </ul>
        </nav>
    </header>
    <header class="header header-bg" v-else>
        <nav class="navbar navbar-expand-lg header-nav">
            <div class="navbar-header">
                <a id="mobile_btn" href="javascript:void(0);">
                    <span class="bar-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </a>
                <router-link to="/index" class="navbar-brand logo">
                    <img src="../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                </router-link>
            </div>
            <div class="main-menu-wrapper">
                <div class="menu-header">
                    <router-link to="/index" class="menu-logo">
                        <img src="../../../assets/img/logo.png" class="img-fluid" alt="Logo">
                    </router-link>
                    <a id="menu_close" class="menu-close" href="javascript:void(0);">
                        <i class="fas fa-times"></i>
                    </a>
                </div>
                <ul class="main-nav">
                    <li class="has-submenu" :class="homeMenu ? 'active' : 'notactive'">
                        <a>Home <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li :class="currentPath == '/index' ? 'active' : 'notactive'"><router-link to="/index">Home</router-link></li>
                            <li :class="currentPath == 'index-two' ? 'active' : 'notactive'"><router-link to="/index-two">Home 2</router-link></li>
                            <li :class="currentPath == 'index-three' ? 'active' : 'notactive'"><router-link to="/index-three">Home 3</router-link></li>
                            <li :class="currentPath == 'index-four' ? 'active' : 'notactive'"><router-link to="/index-four">Home 4</router-link></li>
                            <li :class="currentPath == 'index-five' ? 'active' : 'notactive'"><router-link to="/index-five">Home 5</router-link></li>
                        </ul>
                    </li>
                    <li class="has-submenu" :class="patientsMenu ? 'active' : 'notactive'">
                        <a href="">For Employers<i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li class="has-submenu" :class="currentPath == 'developer' ? 'active' : 'notactive'">
                                <a href="javascript:void(0);">Freelancer</a>
                                <ul class="submenu">
                                    <li :class="currentPath == 'developer' ? 'active' : 'notactive'"><router-link to="/developer">Freelancer</router-link></li>
                                    <li><router-link to="/developer-details">Freelancer Details</router-link></li>
                                </ul>
                            </li>
                            <li :class="currentPath == 'dashboard' ? 'active' : 'notactive'"><router-link to="/dashboard">Dashboard</router-link></li>	
                            <li :class="currentPath == 'company-profile' ? 'active' : 'notactive'"><router-link to="/company-profile">My Profile</router-link></li>	
                            <li :class="currentPath == 'company-details' ? 'active' : 'notactive'"><router-link to="/company-details">Company Details</router-link></li>	
                            <li :class="currentPath == 'manage-projects' || currentPath == 'cancelled-projects' || currentPath == 'completed-projects' ? 'active' : 'notactive'"><router-link to="/manage-projects">Projects</router-link></li>
                            <li :class="currentPath == 'invited-favourites' || currentPath == 'favourites' || currentPath == 'favourites-list' ? 'active' : 'notactive'"><router-link to="/favourites">Favourites</router-link></li>
                            <li :class="currentPath == 'membership-plans' ? 'active' : 'notactive'"><router-link to="/membership-plans">Membership</router-link></li>
                            <li :class="currentPath == 'project-payment' || currentPath == 'tasks' || currentPath == 'milestones' || currentPath == 'change-password' || currentPath == 'view-project-detail' ? 'active' : 'notactive'"><router-link to="/milestones">Milestones</router-link></li>
                            <li :class="currentPath == 'chats' ? 'active' : 'notactive'"><router-link to="/chats">Chats</router-link></li>
                            <li :class="currentPath == 'review' ? 'active' : 'notactive'"><router-link to="/review">Review</router-link></li>			
                            <li :class="currentPath == 'deposit-funds' || currentPath == 'withdraw-money' ? 'active' : 'notactive'"><router-link to="/deposit-funds">Payments</router-link></li>							
                            <li :class="currentPath == 'verify-identity' ? 'active' : 'notactive'"><router-link to="/verify-identity">Verify Identity</router-link></li>								
                            <li :class="currentPath == 'profile-settings' || currentPath == 'delete-account' ? 'active' : 'notactive'"><router-link to="/profile-settings"  :class="currentPath == 'profile-settings' || currentPath == 'delete-account' ? 'active' : 'notactive'">Settings</router-link></li>
                        </ul>
                    </li>
                    <li class="has-submenu" :class="freelancerMenu ? 'active' : 'notactive'">
                        <a href="">For Freelancer<i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li class="has-submenu" :class="currentPath == 'project' || currentPath == 'project-details' ? 'active' : 'notactive'">
                                <a href="javascript:void(0);">Projects</a>
                                <ul class="submenu">
                                    <li :class="currentPath == 'project' ? 'active' : 'notactive'"><router-link to="/project">Projects</router-link></li>
                                    <li :class="currentPath == 'project-details' ? 'active' : 'notactive'"><router-link to="/project-details">Project Details</router-link></li>
                                </ul>
                            </li>
                            <li :class="currentPath == 'freelancer-dashboard' ? 'active' : 'notactive'"><router-link to="/freelancer-dashboard">Dashboard</router-link></li>
                            <li :class="currentPath == 'developer-profile' ? 'active' : 'notactive'"><router-link to="/developer-profile">My Profile</router-link></li>	
                            <li :class="currentPath == 'developer-details' ? 'active' : 'notactive'"><router-link to="/developer-details">Freelancer Details</router-link></li>
                            <li :class="currentPath == 'freelancer-project-proposals' ? 'active' : 'notactive'"><router-link to="/freelancer-project-proposals">Projects</router-link></li>
                            <li :class="currentPath == 'freelancer-favourites' ? 'active' : 'notactive'"><router-link to="/freelancer-favourites">Favourites</router-link></li>
                            <li :class="currentPath == 'freelancer-membership' ? 'active' : 'notactive'"><router-link to="/freelancer-membership">Membership</router-link></li>
                            <li :class="currentPath == 'freelancer-change-password' ? 'active' : 'notactive'"><router-link to="/freelancer-change-password">Change Password</router-link></li>
                            <li :class="currentPath == 'freelancer-chats' ? 'active' : 'notactive'"><router-link to="/freelancer-chats">Chats</router-link></li>
                            <li :class="currentPath == 'freelancer-review' ? 'active' : 'notactive'"><router-link to="/freelancer-review">Review</router-link></li>			
                            <li :class="currentPath == 'freelancer-withdraw-money' ? 'active' : 'notactive'"><router-link to="/freelancer-withdraw-money">Payments</router-link></li>							
                            <li :class="currentPath == 'freelancer-verify-identity' ? 'active' : 'notactive'"><router-link to="/freelancer-verify-identity">Verify Identity</router-link></li>				
                            <li :class="currentPath == 'freelancer-profile-settings' ? 'active' : 'notactive'"><router-link to="/freelancer-profile-settings">Settings</router-link></li>				
                        </ul>
                    </li>
                    <li class="has-submenu" :class="pagesMenu ? 'active' : 'notactive'">
                        <a href="">Pages <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li :class="currentPath == 'about' ? 'active' : 'notactive'"><router-link to="/about">About us</router-link></li>
                            <li :class="currentPath == 'blank-page' ? 'active' : 'notactive'"><router-link to="/blank-page">Starter Page</router-link></li>
                            <li :class="currentPath == '404-page' ? 'active' : 'notactive'"><router-link to="/404-page">404 Page</router-link></li>
                            <li class="has-submenu" :class="currentPath == 'freelancer-invoices' || currentPath == 'view-invoice' ? 'active' : 'notactive'">
                                <a>Invoices</a>
                                <ul class="submenu">
                                    <li :class="currentPath == 'freelancer-invoices' ? 'active' : 'notactive'"><router-link to="/freelancer-invoices">Invoices</router-link></li>
                                    <li :class="currentPath == 'view-invoice' ? 'active' : 'notactive'"><router-link to="/view-invoice">Invoice View</router-link></li>
                                </ul>
                            </li>
                            <li :class="currentPath == 'login' ? 'active' : 'notactive'"><router-link to="/login">Login</router-link></li>
                            <li :class="currentPath == 'register' ? 'active' : 'notactive'"><router-link to="/register">Register</router-link></li>
                            <li :class="currentPath == 'onboard-screen' ? 'active' : 'notactive'"><router-link to="/onboard-screen">Onboard Screen</router-link></li>
                            <li :class="currentPath == 'forgot-password' ? 'active' : 'notactive'"><router-link to="/forgot-password">Forgot Password</router-link></li>
                            <li><router-link to="/change-password">Change Password</router-link></li>									
                        </ul>
                    </li>
                    <li class="has-submenu" :class="BlogMenu ? 'active' : 'notactive'">
                        <a href="">Blog <i class="fas fa-chevron-down"></i></a>
                        <ul class="submenu">
                            <li :class="currentPath == 'blog-list' ? 'active' : 'notactive'"><router-link to="/blog-list">Blog List</router-link></li>
                            <li :class="currentPath == 'blog-grid' ? 'active' : 'notactive'"><router-link to="/blog-grid">Blog Grid</router-link></li>
                            <li :class="currentPath == 'blog-details' ? 'active' : 'notactive'"><router-link to="/blog-details">Blog Details</router-link></li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/admin/login" target="_blank">Admin</router-link>
                    </li>
                </ul>
            </div>		 
            <ul class="nav header-navbar-rht">	
                <!-- User Menu -->
                <li class="nav-item dropdown has-arrow main-drop account-item">
                    <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                        <span class="user-img">
                            <img src="../../../assets/img/img-04.jpg" alt="">
                        </span>
                        <span>John</span>
                    </a>
                    <div class="dropdown-menu emp">
                        <div class="drop-head">Account Details</div>	
                        <router-link class="dropdown-item" to="/user-account-details"><i class="material-icons">verified_user</i> View profile</router-link>
                        <div class="drop-head">Projects Settings</div>	
                        <router-link class="dropdown-item" to="/manage-projects"><i class="material-icons">business_center</i> Projects</router-link>
                        <router-link class="dropdown-item" to="/favourites"><i class="material-icons">local_play</i> Favourites</router-link>
                        <router-link class="dropdown-item" to="/review"><i class="material-icons">pie_chart</i> Reviews</router-link>
                        <div class="drop-head">Account Details</div>
                        <router-link class="dropdown-item" to="/profile-settings"> <i class="material-icons">settings</i> Profile Settings</router-link>
                        <router-link class="dropdown-item" to="/"><i class="material-icons">power_settings_new</i> Logout</router-link>
                    </div>
                </li>
                <!-- /User Menu -->
                <li><router-link to="/post-project" class="login-btn">Post a Project </router-link></li>
            </ul>
        </nav>
    </header>

</template>

<script>

export default {
    mounted() {
        $(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$(".header").removeClass("sticky");
		} else {
			$(".header").addClass("sticky");
		}
	});
        // Search Bar
    
    $(document).ready(function() {
        $(".searchbar .fa-search").click(function() {
            $(".togglesearch").toggle();
            $(".top-search").focus();
        });
    });
        // Sticky Menu
    
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
            if (scroll > 70) {
                $(".min-header").addClass("sticky");
            }
            else{
                $(".min-header").removeClass("sticky");     
            }
    })

        $('.main-nav a').on('click', function(e) {
			if($(this).parent().hasClass('has-submenu')) {
				e.preventDefault();
			}
			if(!$(this).hasClass('submenu')) {
				$('ul', $(this).parents('ul:first')).slideUp(350);
				$('a', $(this).parents('ul:first')).removeClass('submenu');
				$(this).next('ul').slideDown(350);
				$(this).addClass('submenu');
			} else if($(this).hasClass('submenu')) {
				$(this).removeClass('submenu');
				$(this).next('ul').slideUp(350);
			}
		});

        $(document).on('click', '#mobile_btn', function() {
            $('main-wrapper').toggleClass('slide-nav');
            $('.sidebar-overlay').toggleClass('opened');
            $('html').addClass('menu-opened');
            return false;
	    });
	
        $(document).on('click', '.sidebar-overlay', function() {
            $('html').removeClass('menu-opened');
            $(this).removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
        $('.main-nav > li .submenu li.sub-menu').on('click', function(e) {
			$('html').removeClass('menu-opened');
			$('.sidebar-overlay').removeClass('opened');
			$('main-wrapper').removeClass('slide-nav');
		});
		$('.main-nav li .home-nav').click(function(){
            $("html").removeClass('menu-opened');         
            $(".sidebar-overlay").removeClass('opened');
        }); 
        $(".categories_title").on("click", function() {
            $(this).toggleClass('active');
            $('.categories_menu_toggle').slideToggle('medium');
        });
        $(document).on('click', '#menu_close', function() {
            $('html').removeClass('menu-opened');
            $('.sidebar-overlay').removeClass('opened');
            $('main-wrapper').removeClass('slide-nav');
        });
    },
    computed: {
       currentPath() {
           return this.$route.name
       },
       homeMenu() {
           return this.$route.name == 'index' || this.$route.name == 'index-two' || this.$route.name == 'index-three' || this.$route.name == 'index-four' || this.$route.name == 'index-five';
       },
       patientsMenu() {
           return this.$route.name == 'invited-favourites' || this.$route.name == 'invaited-list' || this.$route.name == 'project-payment' || this.$route.name == 'tasks' || this.$route.name == 'view-project-detail' || this.$route.name == 'withdraw-money' || this.$route.name == 'favourites-list' || this.$route.name == 'delete-account' || this.$route.name == 'completed-projects' || this.$route.name == 'change-password' || this.$route.name == 'cancelled-projects' || this.$route.name == 'developer' || this.$route.name == 'withdraw-money' || this.$route.name == 'view-project-detail' || this.$route.name == 'transaction-history' || this.$route.name == 'project-tasks' || this.$route.name == 'project-proposals'  || this.$route.name == 'project-payment' || this.$route.name == 'pending-projects' || this.$route.name == 'ongoing-projects' || this.$route.name == 'invited-freelancer' || this.$route.name == 'files' || this.$route.name == 'completed-projects' || this.$route.name == 'cancelled-projects' || this.$route.name == 'dashboard'  || this.$route.name == 'manage-projects'     || this.$route.name == 'favourites'     || this.$route.name == 'membership-plans'     || this.$route.name == 'milestones'    || this.$route.name == 'chats'    || this.$route.name == 'review'    || this.$route.name == 'deposit-funds'    || this.$route.name == 'verify-identity'    || this.$route.name == 'profile-settings';
       },
       freelancerMenu() {
           return this.$route.name == 'developer-profile' || this.$route.name == 'developer-details' || this.$route.name == 'project' || this.$route.name == 'freelancer-cancelled-projects' || this.$route.name == 'project-details'   || this.$route.name == 'freelancer-dashboard'        || this.$route.name == 'freelancer-project-proposals'     || this.$route.name == 'freelancer-favourites'     || this.$route.name == 'freelancer-membership'     || this.$route.name == 'freelancer-change-password'     || this.$route.name == 'freelancer-chats'     || this.$route.name == 'freelancer-review'     || this.$route.name == 'freelancer-withdraw-money'     || this.$route.name == 'freelancer-verify-identity'    || this.$route.name == 'freelancer-profile-settings';
       },
       pagesMenu() {
           return this.$route.name == 'about' || this.$route.name == 'blank-page'    || this.$route.name == '404-page'   || this.$route.name == 'user-account-details'        || this.$route.name == 'login'     || this.$route.name == 'register'     || this.$route.name == 'forgot-password';
       },
       BlogMenu() {
           return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid'   || this.$route.name == 'blog-details';
       },
   },
}
</script>