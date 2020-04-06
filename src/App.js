import React, { useState, useEffect } from 'react';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Hobbies from './components/Hobbies';
import NotFound from './components/NotFound';
import Home from './components/Home';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	const [ films, setFilms ] = useState([]);
	const [ blogMessage, setBlogMsg ] = useState('Default Blog Posts');

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
			setFilms(res.data);
		};
		fetchData();
	}, []);

	const blogMsg = () => {
		setBlogMsg("These are new Blog Posts");
	};
	return (
		<Router>
			<div>
				<NavBar />
				<Switch>
					<Route exact path="/movies" render={() => <Movies films={films} blogMsg={blogMsg} blogMessage={blogMessage} />} />
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
