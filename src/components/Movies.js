import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
function Movies({films}) {
	return (
		<Fragment>
			<center>
				<h1>Avengers Movies</h1>
				<table>
					<tr>
						<th>Film Name</th>
						<th>Release date</th>
						<th>Director</th>
					</tr>
					<tr>
						<td>Iron Man</td>
						<td>May 2, 2008</td>
						<td>Jon Favreau</td>
					</tr>
					<tr>
						<td>The Incredible Hulk</td>
						<td>June 13, 2008</td>
						<td>Louis Leterrier</td>
					</tr>
					<tr>
						<td>Thor</td>
						<td> May 6, 2011</td>
						<td>Kenneth Branagh</td>
					</tr>
					<tr>
						<td>Captain America: The First Avenger</td>
						<td>July 22, 2011</td>
						<td>Joe Johnston</td>
					</tr>
					<tr>
						<td>Guardians of the Galaxy</td>
						<td>August 1, 2014</td>
						<td>James Gunn</td>
					</tr>
					<tr>
						<td>Ant-Man</td>
						<td>July 17, 2015</td>
						<td>Peyton Reed</td>
					</tr>
				</table>
			</center>
		</Fragment>
	);
}

Movies.propTypes = {
	films: PropTypes.array.isRequired
};
export default Movies;
