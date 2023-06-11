import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ExpandingCards from "./views/ExpandingCards.vue";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/expanding-cards",
		component: ExpandingCards,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
