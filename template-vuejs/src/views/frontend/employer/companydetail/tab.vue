<template>
<nav class="provider-tabs abouts-view">
									<ul class="nav nav-tabs nav-tabs-solid nav-justified">
										<li class="nav-item">
											<router-link class="nav-link" to="/company-profile" :class="currentPath == 'company-details' ? 'active' : 'notactive'">
												<img src="../../../../assets/img/icon/tab-icon-01.png"  alt="User Image">
												<p>About Us</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link to="/company-project" class="nav-link">
												<img src="../../../../assets/img/icon/tab-icon-09.png"  alt="User Image">
												<p >Projects</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/company-gallery">
												<img src="../../../../assets/img/icon/tab-icon-10.png"  alt="User Image">
												<p>Gallery</p>
											</router-link>
										</li>
										<li class="nav-item">
											<router-link class="nav-link" to="/company-review">
												<img src="../../../../assets/img/icon/tab-icon-11.png"  alt="User Image">
												<p>Reviews</p>
											</router-link>
										</li>
									</ul>
								</nav>
</template>
<script>
    export default {
        computed: {
            currentPath() {
                return this.$route.name;
            }
    
        },  
    mounted() {
      },
    data() {
        return {
          activeClass: 'active',
        };
                //  isactive : true
      },
    }
    </script>
