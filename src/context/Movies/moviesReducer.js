import { GET_MOVIES, SET_MESSAGE } from '../types';
export default (state, action) => {
	switch (action.type) {
		case GET_MOVIES:
			return {
				...state,
				films: action.payload
			};
		case SET_MESSAGE:
			return {
				...state,
				blogMessage: 'These are all new Blog Posts'
			};
		default:
			return state;
	}
};
