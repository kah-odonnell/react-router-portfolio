/* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from "react";
import {
	Route
} from "react-router-dom";

export interface IRoute {
	path: string;
	component: React.FC<any>;
	routes?: IRoute[];
	exact?: boolean | undefined;
}

export default function RouteWithSubRoutes(route: IRoute): React.ReactElement {
	return (
		<Route path={route.path} exact={route.exact}>
			<route.component routes={route.routes} />
		</Route>
	);
}