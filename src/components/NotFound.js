import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
	return (
		<div>
			<h1>
				{' '}
				You are at Wrong Place. Go to <Link to="/"> </Link>
			</h1>
		</div>
	);
}
