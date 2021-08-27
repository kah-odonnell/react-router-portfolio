import React from "react";
import { connect } from "react-redux";
import { openApp, closeApp } from "../actions/appcontrol";
import AppViewComponent from "../../components/AppViewComponent";

const AppView = ({ app }) => (
	<AppViewComponent app={app} />
);

const getVisibleApp = (app) => {
	return app;
};

const mapStateToProps = state => ({
	app: getVisibleApp(state.appcontrol)
});

const mapDispatchToProps = dispatch => ({
	openApp: type => dispatch(openApp(type)),
	closeApp: type => dispatch(closeApp(type))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AppView);
