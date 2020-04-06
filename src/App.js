import React, { useState } from 'react';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Hobbies from './components/Hobbies';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/movies" render={() => <Movies films={films} />} />
					<Route exact path="/books" component={Books} />
					<Route exact path="/hobbies" component={Hobbies} />
					<Route exact path="/" component={Home} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
