import * as React from "react";
import {
	BrowserRouter as Router,
	Link,
} from "react-router-dom";
import RouteWithSubRoutes from "./components/RouteWithSubRoutes";
import { routes } from "./routes/routes";

export default function App() {
	return (
		<Router>
			<div>
				<ul>
					<li><Link to="/aboutme">About Me</Link></li>
					<li><Link to="/resume">Resume</Link></li>
					<li><Link to="/showcase">Showcase</Link></li>
				</ul>

				{routes.map((route) => (
					<RouteWithSubRoutes key={route.path} {...route} />
				))}
			</div>
		</Router>
	);
}