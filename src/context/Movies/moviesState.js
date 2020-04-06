import React, { useReducer } from 'react';
import axios from 'axios';
import MoviesReducer from './moviesReducer';
import MoviesContext from './MoviesContext';

import { GET_MOVIES, SET_MESSAGE } from '../types';

const MoviesState = (props) => {
	const initialState = {
		films: [],
		blogMessage: 'Default Blog Posts'
	};
	const [ state, dispatch ] = useReducer(MoviesReducer, initialState);

	//GetMovies
	const getMovies = async () => {
		const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
		dispatch({
			type: GET_MOVIES,
			payload: res.data
		});
	};

	//Set Message
	const setMessage = () => {
		dispatch({
			type: SET_MESSAGE
		});
	};

	return (
		<MoviesContext.Provider
			value={{
				films: state.films,
				blogMessage: state.blogMessage,
				getMovies,
				setMessage
			}}
		>
			{props.children}
		</MoviesContext.Provider>
	);
};

export default MoviesState;
