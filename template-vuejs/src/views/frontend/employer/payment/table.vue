<template>
<div class="table-responsive table-box wallet-history">

										<table class="table">
											<thead>
												<tr class="thead-pink">
													<th>Date</th>
													<th>Recipient</th>
													<th>Transaction Id</th>
													<th>Status</th>
													<th>Amount</th>
												</tr>
											</thead>
											<tbody class="table table-hover table-center">

												<tr v-for="item in deposittable" :key="item.id">
													<td>{{item.date}}<br><span>{{item.date1}}</span></td>
													<td>{{item.name}}</td>
													<td>{{item.date2}}<br><span>{{item.date3}}</span></td>
													<td><i class="fas fa-check-circle"></i> {{item.name1}}</td>
													<td> {{item.name2}}</td>
												</tr>
											</tbody>
										</table>
									</div>
</template>
<script>
	import deposittable from '../../../../assets/json/frontend/employer/deposittable.json'
	export default {
		 mounted() {
		
		},
		data() {
			return {
				deposittable: deposittable
			}
		}
	}
	</script>