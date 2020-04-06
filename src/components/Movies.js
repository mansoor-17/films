import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import MovieItem from './MovieItem';
function Movies({ films }) {
	return (
		<Fragment>
			<center>
				<h1>Avengers Movies</h1>
				<table>
					<thead>
						<tr>
							<th>Film Name</th>
							<th>Release date</th>
							<th>Director</th>
						</tr>
					</thead>
					<tbody>{films.map((film) => <MovieItem film={film} key={film.id} />)}</tbody>
				</table>
			</center>
		</Fragment>
	);
}

Movies.propTypes = {
	films: PropTypes.array.isRequired
};
export default Movies;
