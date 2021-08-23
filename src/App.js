import * as React from "react";
import {
	BrowserRouter as Router
} from "react-router-dom";
import MainMenu from "./components/porfolio/MainMenu";

export default function App() {
	return (
		<Router>
			<MainMenu />
		</Router>
	);
}