<template>
<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-project-proposals">My Proposals</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-ongoing-projects">Ongoing Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-completed-projects">Completed Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/freelancer-cancelled-projects">Cancelled Projects</router-link>
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