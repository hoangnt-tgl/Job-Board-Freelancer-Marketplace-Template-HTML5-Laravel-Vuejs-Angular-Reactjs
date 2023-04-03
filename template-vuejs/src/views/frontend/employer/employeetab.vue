<template>

<nav class="user-tabs mb-4">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/view-project-detail">Overview & Discussions</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/milestones">Milestones</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/tasks">Tasks</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/files">Files</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/project-payment">Payments</router-link>
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