import * as React from "react";
import {
	Link
} from "react-router-dom";
import RouteWithSubRoutes, { IRoute } from "../RouteWithSubRoutes";

const Showcase = ({ routes }: {routes: IRoute[]}): React.ReactElement =>
	<div>
		<h2>Showcase</h2>
		<ul>
			<li><Link to="/showcase/bus">Bus</Link></li>
			<li><Link to="/showcase/cart">Cart</Link></li>
		</ul>

		{routes.map((route: IRoute) => (
			<RouteWithSubRoutes key={route.path} {...route} />
		))}
	</div>;

export default Showcase;

export const Cart = (): React.ReactElement => <h3>Cart</h3>;
export const Bus = (): React.ReactElement => <h3>Bus</h3>;