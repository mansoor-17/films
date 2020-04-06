import React, { Fragment, useContext, useEffect } from 'react';
import '../App.css';
import MoviesContext from '../context/Movies/MoviesContext';
import MovieItem from './MovieItem';
function Movies() {
	const moviesContext = useContext(MoviesContext);
	const { films, blogMessage, getMovies, setMessage } = moviesContext;

	useEffect(() => {
		getMovies();
		//eslint-disable-next-line
	}, []);

	return (
		<Fragment>
			<center>
				<h1>{blogMessage}</h1>
				<button onClick={setMessage}> Hit Me</button> <br />
				<table>
					<thead>
						<tr>
							<th> Id</th>
							<th>Title</th>
							<th>Content</th>
						</tr>
					</thead>
					<tbody>{films.map((film) => <MovieItem film={film} key={film.id} />)}</tbody>
				</table>
			</center>
		</Fragment>
	);
}

export default Movies;
