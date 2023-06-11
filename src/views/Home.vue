<template>
	<div class="flex items-center h-screen">
		<div class="hero min-h-screen mx-auto">
			<div class="hero-content text-center">
				<div class="max-w-md">
					<h1 class="text-5xl font-bold my-9">50 proyectos en 50 dias</h1>
				</div>
			</div>
		</div>
	</div>
	<div class="my-28 grid grid-cols-4 gap-4 mx-36">
		<RouterLink to="/expanding-cards" class="card w-52 rounded-sm shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Expanding Cards</h2>
				<p>Imagen aqui</p>
			</div>
		</RouterLink>

		<div class="card w-52 rounded-sm bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title">Card</h2>
				<p>Imagen aqui</p>
			</div>
		</div>
	</div>
</template>

<script setup></script>
