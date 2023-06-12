<template>
	<div class="navbar bg-base-200">
		<RouterLink to="/" class="btn btn-accent normal-case text-3xl">
			<i class="fa-solid fa-house"></i>
		</RouterLink>
		<div class="navbar-end">
			<a class="normal-case text-xl font-semibold">{{ title }}</a>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: String,
});
</script>
