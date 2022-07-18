import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

import { HomePage } from './pages/HomePage';
import { MoviePage } from './pages/MoviePage';
import { TvPage } from './pages/TvPage';
import { ActorPage } from './pages/ActorPage';
import { SearchPage } from './pages/SearchPage';

export default function App() {
	return (
		<Router basename='/what-to-watch/'>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/movie/:movieId' component={MoviePage} />
				<Route exact path='/tv/:tvId' component={TvPage} />
				<Route exact path='/people/:personId' component={ActorPage} />
				<Route exact path='/search' component={SearchPage} />
				<Redirect to='/' />
			</Switch>
			<Footer />
		</Router>
	);
}
