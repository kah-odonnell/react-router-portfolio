import AboutMe from "../components/porfolio/AboutMe";
import Resume from "../components/porfolio/Resume";
import Showcase, { Bus, Cart} from "../components/porfolio/Showcase";

export const routes = [
	{
		path: "/aboutme",
		component: AboutMe
	},
	{
		path: "/resume",
		component: Resume
	},
	{
		path: "/showcase",
		component: Showcase,
		routes: [
			{
				path: "/showcase/bus",
				component: Bus
			},
			{
				path: "/showcase/cart",
				component: Cart
			}
		]
	}
];