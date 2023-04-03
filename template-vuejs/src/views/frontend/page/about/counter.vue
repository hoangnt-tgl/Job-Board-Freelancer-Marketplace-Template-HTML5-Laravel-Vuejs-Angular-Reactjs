<template>
    <section class="section job-counter">
        <div class="container">
            <div class="row">
                <div class="col-md-3" v-for="item in counter" :key="item.id">
                    <div class="counter">
                        <h2>{{item.no}}</h2>
                        <h4>{{item.title}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
	import counter from '../../../../assets/json/frontend/about/counter.json'
	export default {
	mounted() {
    },
	data() {
        return {
            counter: counter
        }
    }
	}
	</script>
