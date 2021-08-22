
import * as React from "react";
import {
	BrowserRouter as Router,
	Route,
	Link,
} from "react-router-dom";

export interface IRoute {
  path: string;
  component: (props: {routes?: IRoute[]}) => React.ReactElement;
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