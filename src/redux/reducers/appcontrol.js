// eslint-disable-next-line no-unused-vars
const initialState = {
	type: "MAIN_MENU"
};

const appcontrol = (state = initialState, action) => {
	switch (action.type) {
	case "MAIN_MENU":
		return {
			type: "MAIN_MENU"
		};
	default:
		return state;
	}
};

export default appcontrol;
