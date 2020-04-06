import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import MovieItem from './MovieItem';
function Movies({ films, blogMsg, blogMessage }) {
	return (
		<Fragment>
			<center>
				<h1>{blogMessage}</h1>
				<button onClick={blogMsg}> Hit Me</button> <br />
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

Movies.propTypes = {
	films: PropTypes.array.isRequired
};
export default Movies;
