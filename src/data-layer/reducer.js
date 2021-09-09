export const initialState = {
	restaurantData: null,
};

export const actionTypes = {
	GET_DATA: "GET_DATA",
};

const reducer = (state, action) => {
	switch (action.type) {
		case actionTypes.GET_DATA:
			return {
				...state,
				restaurantData: action.payload,
			};

		default:
			return state;
	}
};

export default reducer;
