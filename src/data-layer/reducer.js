export const initialState = {
	restaurantData: null,
	loading: false,
	isError: false,
	errorMsg: null,
};

export const actionTypes = {
	GET_DATA: "GET_DATA",
	SET_LOADING: "SET_LOADING",
	IS_ERROR: "IS_ERROR",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.GET_DATA:
			return {
				...state,
				loading: false,
				restaurantData: action.payload,
			};

		case actionTypes.IS_ERROR:
			return {
				...state,
				isError: true,
				errorMsg: action.error,
			};

		default:
			return state;
	}
};

export default reducer;
