<template>
    <div class="header">
			
        <!-- Logo -->
        <div class="header-left">
            <router-link to="/admin/index" class="logo">
                <img src="../../assets/admin-img/logo.png" alt="Logo">
            </router-link>
            <router-link to="/admin/index" class="logo logo-small">
                <img src="../../assets/admin-img/logo-small.png" alt="Logo" width="30" height="30">
            </router-link>
            <!-- Sidebar Toggle -->
            <a href="javascript:void(0);" id="toggle_btn">
                <i class="feather-chevrons-left"></i>
            </a>
            <!-- /Sidebar Toggle -->
            
            <!-- Mobile Menu Toggle -->
            <a class="mobile_btn" id="mobile_btn">
                <i class="feather-chevrons-left"></i>
            </a>
            <!-- /Mobile Menu Toggle -->
        </div>
        <!-- /Logo -->
        
        <!-- Search -->
        <div class="top-nav-search">
            <form>
                <input type="text" class="form-control" placeholder="Start typing your Search...">
                <button class="btn" type="submit"><i class="feather-search"></i></button>
            </form>
        </div>
        <!-- /Search -->
        
        <!-- Header Menu -->
        <ul class="nav user-menu">

            <!-- Notifications -->
            <li class="nav-item dropdown">
                <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                    <i class="feather-bell"></i> <span class="badge badge-pill">5</span>
                </a>
                <div class="dropdown-menu notifications">
                    <div class="topnav-dropdown-header">
                        <span class="notification-title">Notifications</span>
                        <a href="javascript:void(0)" class="clear-noti"> Clear All</a>
                    </div>
                    <div class="noti-content">
                        <ul class="notification-list">
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <span class="avatar avatar-sm flex-shrink-0">
                                            <img class="avatar-img rounded-circle" alt="" src="../../assets/admin-img/profiles/avatar-02.jpg">
                                        </span>
                                        <div class="media-body flex-grow-1">
                                            <p class="noti-details"><span class="noti-title">Brian Johnson</span> paid the invoice <span class="noti-title">#DF65485</span></p>
                                            <p class="noti-time"><span class="notification-time">4 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <span class="avatar avatar-sm flex-shrink-0">
                                            <img class="avatar-img rounded-circle" alt="" src="../../assets/admin-img/profiles/avatar-03.jpg">
                                        </span>
                                        <div class="media-body flex-grow-1">
                                            <p class="noti-details"><span class="noti-title">Marie Canales</span> has accepted your estimate <span class="noti-title">#GTR458789</span></p>
                                            <p class="noti-time"><span class="notification-time">6 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <div class="avatar avatar-sm flex-shrink-0">
                                            <span class="avatar-title rounded-circle bg-primary-light"><i class="far fa-user"></i></span>
                                        </div>
                                        <div class="media-body flex-grow-1">
                                            <p class="noti-details"><span class="noti-title">New user registered</span></p>
                                            <p class="noti-time"><span class="notification-time">8 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <span class="avatar avatar-sm flex-shrink-0">
                                            <img class="avatar-img rounded-circle" alt="" src="../../assets/admin-img/profiles/avatar-04.jpg">
                                        </span>
                                        <div class="media-body flex-grow-1">
                                            <p class="noti-details"><span class="noti-title">Barbara Moore</span> declined the invoice <span class="noti-title">#RDW026896</span></p>
                                            <p class="noti-time"><span class="notification-time">12 mins ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="notification-message">
                                <a href="javascript:void(0);">
                                    <div class="media d-flex">
                                        <div class="avatar avatar-sm flex-shrink-0">
                                            <span class="avatar-title rounded-circle bg-info-light"><i class="far fa-comment"></i></span>
                                        </div>
                                        <div class="media-body flex-grow-1">
                                            <p class="noti-details"><span class="noti-title">You have received a new message</span></p>
                                            <p class="noti-time"><span class="notification-time">2 days ago</span></p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="topnav-dropdown-footer">
                        <a href="javascript:void(0);">View all Notifications</a>
                    </div>
                </div>
            </li>
            <!-- /Notifications -->
            
            <!-- User Menu -->
            <li class="nav-item dropdown has-arrow main-drop">
                <a href="javascript:void(0);" class="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                    <span class="user-img">
                        <img src="../../assets/admin-img/profiles/avatar-07.jpg" alt="">
                        <span class="status online"></span>
                    </span>
                </a>
                <div class="dropdown-menu">
                    <router-link class="dropdown-item" to="/admin/profile"><i data-feather="user" class="me-1"></i> Profile</router-link>
                    <router-link class="dropdown-item" to="/admin/settings"><i data-feather="settings" class="me-1"></i> Settings</router-link>
                    <router-link class="dropdown-item" to="/admin/login"><i data-feather="log-out" class="me-1"></i> Logout</router-link>
                </div>
            </li>
            <!-- /User Menu -->
            
        </ul>
        <!-- /Header Menu -->
        
    </div>
</template>

<script>

export default {
    mounted() {
        var $wrapper = $('.main-wrapper');
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
        $('body').append('<div class="sidebar-overlay"></div>');
	$(document).on('click', '#mobile_btn', function () {
		$wrapper.toggleClass('slide-nav');
		$('.sidebar-overlay').toggleClass('opened');
		$('html').addClass('menu-opened');
		return false;
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
           return this.$route.name == 'favourites' || this.$route.name == 'developer-list' || this.$route.name == 'delete-account' || this.$route.name == 'company-review' || this.$route.name == 'company-project' || this.$route.name == 'company-profile' || this.$route.name == 'company-gallery' || this.$route.name == 'company-details' || this.$route.name == 'developer' || this.$route.name == 'withdraw-money' || this.$route.name == 'view-project-detail' || this.$route.name == 'transaction-history' || this.$route.name == 'project-tasks' || this.$route.name == 'project-proposals'  || this.$route.name == 'project-payment' || this.$route.name == 'pending-projects' || this.$route.name == 'ongoing-projects' || this.$route.name == 'invited-freelancer' || this.$route.name == 'files' || this.$route.name == 'completed-projects' || this.$route.name == 'cancelled-projects' || this.$route.name == 'developer-details'   || this.$route.name == 'dashboard'        || this.$route.name == 'manage-projects'     || this.$route.name == 'favourites'     || this.$route.name == 'membership-plans'     || this.$route.name == 'milestones'    || this.$route.name == 'chats'    || this.$route.name == 'review'    || this.$route.name == 'deposit-funds'    || this.$route.name == 'verify-identity'    || this.$route.name == 'profile-settings';
       },
       freelancerMenu() {
           return this.$route.name == 'project' || this.$route.name == 'freelancer-invitations' || this.$route.name == 'freelancer-cancelled-projects' || this.$route.name == 'project-details'   || this.$route.name == 'freelancer-dashboard'        || this.$route.name == 'freelancer-project-proposals'     || this.$route.name == 'freelancer-favourites'     || this.$route.name == 'freelancer-membership'     || this.$route.name == 'freelancer-change-password'     || this.$route.name == 'freelancer-chats'     || this.$route.name == 'freelancer-review'     || this.$route.name == 'freelancer-withdraw-money'     || this.$route.name == 'freelancer-verify-identity'    || this.$route.name == 'freelancer-profile-settings';
       },
       pagesMenu() {
           return this.$route.name == 'about' || this.$route.name == 'blank-page'    || this.$route.name == '404-page'   || this.$route.name == 'user-account-details'        || this.$route.name == 'login'     || this.$route.name == 'register'     || this.$route.name == 'forgot-password'         || this.$route.name == 'change-password';
       },
       BlogMenu() {
           return this.$route.name == 'blog-list' || this.$route.name == 'blog-grid'   || this.$route.name == 'blog-details';
       },
   },
}
</script>