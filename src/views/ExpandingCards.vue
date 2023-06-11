<template>
	<div class="h-screen flex flex-col">
		<RetHomeBar title="Expanding Cards" />
		<div class="overflow-hidden flex-grow w-screen container">
			<div
				v-for="(panel, index) in panels"
				:key="index"
				class="panel"
				:class="{ active: panel.active }"
				@click="toggleActive(index)"
				:style="{ backgroundImage: panel.backgroundImage }"
			>
				<h3>{{ panel.title }}</h3>
			</div>
		</div>
	</div>
</template>

<script setup>
import RetHomeBar from "../components/RetHomeBar.vue";
import { ref } from "vue";

const panels = ref([
	{
		backgroundImage:
			"url('https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)'",
		active: true,
		title: "Explore The World",
	},
	{
		backgroundImage:
			"url('https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
		active: false,
		title: "Wild Forest",
	},
	{
		backgroundImage:
			"url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80')",
		active: false,
		title: "Sunny Beach",
	},
	{
		backgroundImage:
			"url('https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')",
		active: false,
		title: "City on Winter",
	},
	{
		backgroundImage:
			"url('https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')",
		active: false,
		title: "Mountains - Clouds",
	},
]);
function toggleActive(index) {
	panels.value.forEach((panel, i) => {
		panel.active = i === index && !panel.active;
	});
}
const props = defineProps({
	titleP: String,
});
</script>

<style>
.container {
	display: flex;
	width: 90vw;
}

.panel {
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 80vh;
	border-radius: 50px;
	color: #fff;
	cursor: pointer;
	flex: 0.5;
	margin: 10px;
	position: relative;
	-webkit-transition: all 700ms ease-in;
}

.panel h3 {
	font-size: 24px;
	position: absolute;
	bottom: 20px;
	left: 20px;
	margin: 0;
	opacity: 0;
}

.panel.active {
	flex: 5;
}

.panel.active h3 {
	opacity: 1;
	transition: opacity 0.3s ease-in 0.4s;
}

@media (max-width: 480px) {
	.container {
		width: 100vw;
	}

	.panel:nth-of-type(4),
	.panel:nth-of-type(5) {
		display: none;
	}
}
</style>
