<template>
	<div class="h-screen flex flex-col">
		<RetHomeBar title="Split Landing Page" />
		<div class="overflow-hidden flex-grow mx-auto">
			<div class="container w-full" :class="containerClasses">
				<div
					class="split left"
					@mouseenter="addHoverLeft"
					@mouseleave="removeHoverLeft"
				>
					<h1
						class="text-7xl text-white absolute left-1/2 top-20 transform -translate-x-1/2 whitespace-nowrap"
					>
						PlayStation 5
					</h1>
					<a
						href="#"
						class="btn absolute flex items-center justify-center left-1/2 top-40 transform -translate-x-1/2 text-white border-white border-2 font-bold text-sm uppercase, w-60 px-6"
						>Buy Now</a
					>
				</div>
				<div
					class="split right"
					@mouseenter="addHoverRight"
					@mouseleave="removeHoverRight"
				>
					<h1
						class="text-7xl text-white absolute left-1/2 top-20 transform -translate-x-1/2 whitespace-nowrap"
					>
						Xbox Series X
					</h1>
					<a
						href="#"
						class="btn absolute flex items-center justify-center left-1/2 top-40 transform -translate-x-1/2 text-white border-white border-2 font-bold text-sm uppercase, w-60 px-6"
						>Buy Now</a
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import RetHomeBar from "../components/RetHomeBar.vue";

const containerClasses = ref("");

const addHoverLeft = () => {
	containerClasses.value = "hover-left";
};

const removeHoverLeft = () => {
	containerClasses.value = "";
};

const addHoverRight = () => {
	containerClasses.value = "hover-right";
};
const removeHoverRight = () => {
	containerClasses.value = "";
};
</script>

<style scoped>
.split.left .btn:hover {
	background-color: rgba(87, 84, 236, 1);
	border-color: rgba(87, 84, 236, 1);
}

.split.right .btn:hover {
	background-color: rgba(28, 122, 28, 1);
	border-color: rgba(28, 122, 28, 1);
}

.container {
	position: relative;
	width: 100vw;
	height: 100%;
	background: #333;
}

.split {
	position: absolute;
	width: 50%;
	height: 100%;
	overflow: hidden;
}

.split.left {
	left: 0;
	background: url("../../public/images/ps.jpg");
	background-repeat: no-repeat;
	background-size: cover;
}

.split.left::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(87, 84, 236, 0.7);
}

.split.right {
	right: 0;
	background: url("../../public/images/xbox.jpg");
	background-repeat: no-repeat;
	background-size: cover;
}

.split.right::before {
	content: "";
	position: absolute;
	width: 100%;
	height: 100%;
	background-color: rgba(43, 43, 43, 0.8);
}

.split.right,
.split.left,
.split.right::before,
.split.left::before {
	transition: all 1000ms ease-in-out;
}

.hover-left .left {
	width: 75%;
}

.hover-left .right {
	width: 25%;
}

.hover-right .right {
	width: 75%;
}

.hover-right .left {
	width: 25%;
}

@media (max-width: 800px) {
	h1 {
		font-size: 2rem;
		top: 30%;
	}

	.btn {
		padding: 1.2rem;
		width: 12rem;
	}
}
</style>
