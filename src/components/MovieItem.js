import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function MovieItem({ film }) {
	return (
		<Fragment>
			<tr>
				<td>{film.id}</td>
				<td>{film.title}</td>
				<td>{film.body}</td>
			</tr>
		</Fragment>
	);
}

MovieItem.propTypes = {
	film: PropTypes.object.isRequired
};
