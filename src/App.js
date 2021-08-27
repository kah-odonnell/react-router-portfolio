import * as React from "react";
import rootReducer from "./redux/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppView from "./redux/containers/AppView";

export default function App() {
	const store = createStore(rootReducer);
	return (
		<Provider store={store}>
			<AppView />
		</Provider>
	);
}