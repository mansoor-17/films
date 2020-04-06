import React from 'react';
import { Link } from 'react-router-dom';
export default function NavBar() {
	return (
		<ul>
			<li>
				<Link to="/" className="active">
					Home
				</Link>
			</li>
			<li>
				<Link to="/movies">Blogs</Link>
			</li>
			<li>
				<Link to="/books">Books</Link>
			</li>
			<li>
				<Link to="/hobbies">Hobbies</Link>
			</li>
		</ul>
	);
}
