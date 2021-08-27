import * as React from "react";
import MainMenu from "./porfolio/MainMenu";
import Encyclopedia from "./encyclopedia/Encyclopedia";

interface IAppViewProps {
	app: { type: string };
}

const AppViewComponent: React.FC<IAppViewProps> = (props: IAppViewProps) => {
	if (!props.app) return <h1>{"It's broke"}</h1>;


	return <React.Fragment>
		{(props.app.type === "MAIN_MENU") ? <MainMenu /> : null}
		{(props.app.type === "ENCYCLOPEDIA") ? <Encyclopedia /> : null}
	</React.Fragment>;
};

export default AppViewComponent;