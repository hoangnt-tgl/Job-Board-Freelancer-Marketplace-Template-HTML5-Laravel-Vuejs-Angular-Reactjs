<template>

<!-- Footer -->	
<footer class="footer">
    <div class="footer-top aos" data-aos="fade-up">
        <div class="container">

            <div class="row">
                <div class="col-md-3">
                    <h2 class="footer-title">Office Address</h2>
                    <div class="footer-address">
                        <div class="off-address">
                            <p class="mb-2">New York, USA (HQ)</p>
                            <address class="mb-0">750 Sing Sing Rd, Horseheads, NY, 14845</address>
                            <p>Call: <a href="javascript:void(0);"><u>469-537-2410</u> (Toll-free)</a> </p>
                        </div>
                        <div class="off-address">
                            <p class="mb-2">Sydney, Australia </p>
                            <address class="mb-0">24 Farrar Parade COOROW WA 6515</address>
                            <p>Call: <a href="javascript:void(0);"><u>(08) 9064 9807</u> (Toll-free)</a> </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="footer-widget footer-menu">
                        <h2 class="footer-title">Useful Links</h2>
                        <ul>
                            <li><router-link to="/about">About Us</router-link></li>
                            <li><router-link to="/blog-list">Blog</router-link></li>
                            <li><router-link to="/login">Login</router-link></li>
                            <li><router-link to="/register">Register</router-link></li>
                            <li><router-link to="/forgot-password">Forgot Password</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="footer-widget footer-menu">
                        <h2 class="footer-title">Help & Support</h2>
                        <ul>
                            <li><router-link to="/chats">Chat</router-link></li>
                            <li><router-link to="/faq">Faq</router-link></li>
                            <li><router-link to="/review">Reviews</router-link></li>
                            <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
                            <li><router-link to="/term-condition">Terms of use</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2">
                    <div class="footer-widget footer-menu">
                        <h2 class="footer-title">Other Links</h2>
                        <ul>
                            <li><router-link to="/freelancer-dashboard">Freelancers</router-link></li>
                            <li><router-link to="/freelancer-portfolio">Freelancer Details</router-link></li>
                            <li><router-link to="/project">Project</router-link></li>
                            <li><router-link to="/project-details">Project Details</router-link></li>
                            <li><router-link to="/post-project">Post Project</router-link></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-widget footer-menu">
                        <h2 class="footer-title">Mobile Application</h2>
                        <p>Download our App and get the latest Breaking News Alerts and latest headlines and daily articles near you.</p>
                        <div class="row g-2">
                            <div class="col">
                                <a href="javascript:void(0);"><img class="img-fluid" src="../../assets/img/app-store.svg" alt="app-store"></a>
                            </div>
                            <div class="col">
                                <a href="javascript:void(0);"><img class="img-fluid" src="../../assets/img/google-play.svg" alt="google-play"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- /Footer Top -->
    
    <!-- Footer Bottom -->
    <div class="footer-bottom">
        <div class="container">
        
            <!-- Copyright -->
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 col-lg-6">
                        <div class="copyright-text">
                            <p class="mb-0">&copy; 2021 All Rights Reserved</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 right-text">
                        <div class="social-icon">
                            <ul>
                                <li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-instagram"></i> </a></li>
                                <li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-linkedin-in"></i> </a></li>
                                <li><a href="javascript:void(0);" class="icon" target="_blank"><i class="fab fa-twitter"></i> </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /Copyright -->						
        </div>
    </div>
    <!-- /Footer Bottom -->				
</footer>
<!-- /Footer -->

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
		}, 
        data() {
        return {
        };
                //  isactive : true
      },
	}
	</script>