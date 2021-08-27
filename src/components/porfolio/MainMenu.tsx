
import * as React from "react";
import {
	Link,
	BrowserRouter as Router
} from "react-router-dom";
import RouteWithSubRoutes, { IRoute } from "../RouteWithSubRoutes";
import { routes } from "../../routes/routes";

const MainMenu: React.FC = () =>
	<Router>
		<div>
			<ul>
				<li><Link to="/aboutme">About Me</Link></li>
				<li><Link to="/resume">Resume</Link></li>
				<li><Link to="/showcase">Showcase</Link></li>
			</ul>

			{routes.map((route: IRoute) => (
				<RouteWithSubRoutes key={route.path} {...route} />
			))}
		</div>
	</Router>;

export default MainMenu;