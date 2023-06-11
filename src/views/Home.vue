<template>
	<div class="flex items-center h-full">
		<div class="hero min-h-screen mx-auto">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<h1 class="text-5xl font-bold my-9">50 proyectos en 50 dias</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="h-screen pt-10 grid grid-cols-4 gap-4 mx-36">
		<CardProject title="Expanding Cards" desc="" />
	</div>
</template>

<script setup>
import CardProject from "../components/CardProject.vue";
</script>
