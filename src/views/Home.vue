<template>
	<div class="flex items-center h-full">
		<div class="hero min-h-screen mx-auto">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<h1 class="text-5xl font-bold my-9">50 proyectos en 50 dias</h1>
					<a
						href="#proyectos"
						class="ease-in duration-300"
						@click="scrollToDiv"
						>Proyectos</a
					>
				</div>
			</div>
		</div>
	</div>
	<div
		class="h-screen pt-10 grid grid-cols-4 gap-4 mx-36 ease-in duration-300"
		id="proyectos"
	>
		<CardProject
			to="/expanding-cards"
			title="Expanding Cards"
			desc=""
			imagen="../../public/ss/expcards.png"
		/>
		<CardProject
			to="/split-landing-page"
			title="Split Landing Page"
			desc=""
			imagen=""
		/>
		<CardProject to="rotating-nav" title="Rotating Navigation Animation" />
		<CardProject to="/hidden-search" title="Hidden Search Input" />
	</div>
</template>

<script setup>
import CardProject from "../components/CardProject.vue";
</script>
