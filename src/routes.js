import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ExpandingCards from "./views/ExpandingCards.vue";
import SplitLandingPage from "./views/SplitLandingPage.vue";
import RotatingNav from "./views/RotatingNavAnimation.vue";
const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/expanding-cards",
		component: ExpandingCards,
	},
	{
		path: "/split-landing-page",
		component: SplitLandingPage,
	},
	{
		path: "/rotating-nav",
		component: RotatingNav,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
