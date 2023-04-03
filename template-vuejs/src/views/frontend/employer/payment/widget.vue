<template>
<div class="transaction-table card">
								<div class="card-header">
									<div class="row justify-content-between align-items-center">
										<div class="col">
											<h5 class="card-title">Wallet</h5>
										</div>
										<div class="col-auto d-flex align-items-center flex-wrap transaction-shortby wallet-btn">
											<a data-bs-toggle="modal" href="#wallet" class="btn btn-primary"><i class="fas fa-plus"></i> ADD WALLET</a>
										</div>
									</div>
								</div>

								<div class="card-body">
									<div class="row">
										<div class="col-lg-4 col-md-12 d-flex" v-for="item in depositwidget" :key="item.id">
											<div class="wallet-group d-flex align-items-center">
												<div class="wallet-img">
													<img class="img-fluid" :src="loadImg(item.img)" alt="">
												</div>
												<div class="balance-total">
													<h3>{{item.name}}</h3>
													<h2>{{item.amt}}</h2>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
</template>
<script>
	import depositwidget from '../../../../assets/json/frontend/employer/depositwidget.json'
	const images = require.context('../../../../assets/img', false, /\.png$|\.jpg$|\.svg$/)
	export default {
		 mounted() {
		
		},
		methods:{
			loadImg(imgPath) {
				return images('./' + imgPath).default
			},
		},
		data() {
			return {
				depositwidget: depositwidget
			}
		}
	}
	</script>