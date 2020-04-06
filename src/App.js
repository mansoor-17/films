import React from 'react';
import Movies from './components/Movies';
import NavBar from './components/NavBar';
import Books from './components/Books';
import Hobbies from './components/Hobbies';
import NotFound from './components/NotFound';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import MoviesState Context Component
import MoviesState from './context/Movies/moviesState';

function App() {
	return (
		<MoviesState>
			<Router>
				<div>
					<NavBar />
					<Switch>
						<Route exact path="/movies" component={Movies} />
						<Route exact path="/books" component={Books} />
						<Route exact path="/hobbies" component={Hobbies} />
						<Route exact path="/" component={Home} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		</MoviesState>
	);
}

export default App;
