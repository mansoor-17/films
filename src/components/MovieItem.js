import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function MovieItem({ film }) {
	return (
		<Fragment>
			<tr>
				<td>{film.name}</td>
				<td>{film.date}</td>
				<td>{film.director}</td>
			</tr>
		</Fragment>
	);
}

MovieItem.propTypes = {
	film: PropTypes.object.isRequired
};
