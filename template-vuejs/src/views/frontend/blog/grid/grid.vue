<template>
<div>
       <!-- Main Wrapper -->
        <div class="main-wrapper">
			<!-- Header -->
                <layout-header />
			<!-- /Header -->

            <!-- Breadcrumb -->
			<div class="bread-crumb-bar">
				<div class="container">
					<div class="row align-items-center inner-banner">
						<div class="col-md-12 col-12 text-center">
							<div class="breadcrumb-list">
								<nav aria-label="breadcrumb" class="page-breadcrumb">
									<ol class="breadcrumb">
										<li class="breadcrumb-item"><router-link to="/index"><img src="../../../../assets/img/home-icon.svg" alt=""> Home</router-link></li>
										<li class="breadcrumb-item" aria-current="page">Blog Grid</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- /Breadcrumb -->
			
			<!-- Page Content -->
			<div class="content">
				<div class="container">
				
					<div class="row">
						<div class="col-lg-8 col-md-12">
						
							<div class="row blog-grid-row">
								<div class="col-md-6 col-sm-12" v-for="item in bloggrid" :key="item.id">
								
									<!-- Blog Post -->
									<div class="blog grid-blog">
										<div class="blog-image">
											<router-link to="/blog-details"><img class="img-fluid" :src="loadImg(item.img)" alt="Post Image"></router-link>
										</div>
										<div class="blog-content">
											<ul class="entry-meta meta-item">
												<li>
													<div class="post-author">
														<router-link to="/developer-details"><img :src="loadImg1(item.img1)" alt="Post Author"> <span> {{item.name}}</span></router-link>
													</div>
												</li>
												<li><i class="far fa-clock"></i> {{item.date}}</li>
											</ul>
											<h3 class="blog-title"><router-link to="/blog-details">{{item.description}}</router-link></h3>
											<p class="mb-0">{{item.description1}}</p>
										</div>
									</div>
									<!-- /Blog Post -->
									
								</div>
							</div>
							
							<!-- Blog Pagination -->
							<div class="row pb-4">
								<div class="col-md-12">
									<div class="blog-pagination text-center">
										<ul class="paginations">
											<li><a href="javascript:void(0);"> <i class="fas fa-angle-left"></i> Previous</a></li>
											<li><a href="javascript:void(0);">1</a></li>
											<li><a href="javascript:void(0);" class="active">2</a></li>
											<li><a href="javascript:void(0);">3</a></li>
											<li><a href="javascript:void(0);">4</a></li>
											<li><a href="javascript:void(0);">Next <i class="fas fa-angle-right"></i></a></li>
										</ul>
									</div>
								</div>
							</div>
							<!-- /Blog Pagination -->
							
						</div>
						
						<!-- Blog Sidebar -->
						<blogsidebar></blogsidebar>
						<!-- /Blog Sidebar -->
						
					</div>
				</div>
			</div>	
			<!-- /Page Content -->
           
            <!-- Footer -->
                <layout-footer />
            <!-- /Footer -->
        </div>
        <!-- /Main Wrapper -->
        </div>
</template>
<script>
import bloggrid from '../../../../assets/json/frontend/blog/bloggrid.json'
const images = require.context('../../../../assets/img/blog', false, /\.png$|\.jpg$/)
const images1 = require.context('../../../../assets/img', false, /\.png$|\.jpg$/)
export default {
     mounted() {
    
    },
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
        loadImg1(img1Path) {
            return images1('./' + img1Path).default
        },
    },
    data() {
        return {
            bloggrid: bloggrid
        }
    }
}
</script>