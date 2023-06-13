<template>
	<div class="h-screen flex flex-col">
		<RetHomeBar title="Hidden Search Input" />
		<div class="bg-success h-full flex justify-center items-center">
			<div id="search" class="join">
				<input
					type="text"
					class="input rounded-none transition-all duration-300 ease-linear"
					placeholder="search"
					:class="{
						'w-1 bg-neutral-content': !isActive,
						'w-52': isActive,
					}"
					@focus="isActive = true"
					@blur="isActive = false"
				/>
				<div
					class="btn rounded-none transition-transform duration-300 ease-in bg-neutral-content border-0"
					:class="{
						'translate-x-0': !isActive,
						'translate-x-198': isActive,
					}"
				>
					<i class="fas fa-search"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import RetHomeBar from "../components/RetHomeBar.vue";

import { ref, reactive } from "vue";

const isActive = ref(false);
</script>
