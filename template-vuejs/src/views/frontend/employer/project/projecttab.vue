<template>
<nav class="user-tabs project-tabs">
								<ul class="nav nav-tabs nav-tabs-bottom nav-justified">
									<li class="nav-item">
										<router-link class="nav-link" to="/manage-projects">All Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/pending-projects">Pending Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/ongoing-projects">Ongoing Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/completed-projects">Completed Projects</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link" to="/cancelled-projects">Cancelled Projects</router-link>
									</li>
								</ul>
							</nav>
</template>