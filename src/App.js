import React, { useState } from 'react';
import Movies from './components/Movies';

function App() {
	const [ films ] = useState([
		{
			id: '1',
			name: 'Iron Man',
			date: 'May 2, 2008',
			director: 'Jon Favreau'
		},
		{
			id: '2',
			name: 'The Incredible Hulk',
			date: 'June 13, 2008',
			director: 'Louis Leterrier'
		},
		{
			id: '3',
			name: 'Thor',
			date: ' May 6, 2011',
			director: 'Kenneth Branagh'
		},
		{
			id: '4',
			name: 'Captain America: The First Avenger',
			date: 'July 22, 2011',
			director: 'Joe Johnston'
		},
		{
			id: '5',
			name: 'Guardians of the Galaxy',
			date: 'August 1, 2014',
			director: 'James Gunn'
		},
		{
			id: '6',
			name: 'Ant-Man',
			date: 'July 17, 2015',
			director: 'Peyton Reed'
		},
		{
			id: '7',
			name: 'Titanic',
			date: 'July 11, 2002',
			director: 'James Cameroon'
		}
	]);

	return (
		<div>
			<Movies films={films} />
		</div>
	);
}

export default App;
