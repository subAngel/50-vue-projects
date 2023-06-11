<template>
	<RouterLink to="/expanding-cards" class="card w-52 rounded-sm shadow-xl h-44">
		<div class="card-body">
			<h2 class="card-title">{{ title }}</h2>
			<p>{{ desc }}</p>
		</div>
	</RouterLink>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
	title: String,
	desc: String,
});
</script>
