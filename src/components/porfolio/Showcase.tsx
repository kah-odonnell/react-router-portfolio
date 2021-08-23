import * as React from "react";
import {
	Link
} from "react-router-dom";
import RouteWithSubRoutes, { IRoute } from "../RouteWithSubRoutes";

const Showcase: React.FC<{ routes: IRoute[] }> = (props: { routes: IRoute[] }) =>
	<div>
		<h2>Showcase</h2>
		<ul>
			<li><Link to="/showcase/bus">Bus</Link></li>
			<li><Link to="/showcase/cart">Cart</Link></li>
		</ul>

		{props.routes.map((route: IRoute) => (
			<RouteWithSubRoutes key={route.path} {...route} />
		))}
	</div>;

export default Showcase;

export const Cart: React.FC = () => <h3>Cart</h3>;
export const Bus: React.FC = () => <h3>Bus</h3>;