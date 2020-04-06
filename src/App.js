import React, { useState } from 'react';
import Movies from './components/Movies';

function App() {
	const [ films, setFilms ] = useState([
		{
			name: 'Iron Man',
			date: 'May 2, 2008',
			director: 'Jon Favreau'
		},
		{
			name: 'The Incredible Hulk',
			date: 'June 13, 2008',
			director: 'Louis Leterrier'
		},
		{
			name: 'Thor',
			date: ' May 6, 2011',
			director: 'Kenneth Branagh'
		},
		{
			name: 'Captain America: The First Avenger',
			date: 'July 22, 2011',
			director: 'Joe Johnston'
		},
		{
			name: 'Guardians of the Galaxy',
			date: 'August 1, 2014',
			director: 'James Gunn'
		},
		{
			name: 'Ant-Man',
			date: 'July 17, 2015',
			director: 'Peyton Reed'
		}
	]);
	
	return (
		<div>
			<Movies films={films} />
		</div>
	);
}

export default App;
