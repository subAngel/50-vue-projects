<template>
	<div class="navbar bg-base-200">
		<RouterLink to="/" class="btn btn-ghost normal-case text-xl"
			>Home</RouterLink
		>
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
