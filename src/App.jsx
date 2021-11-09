import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';

import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { MoviePage } from './pages/MoviePage';
import { Footer } from './components/Footer';

export default function App() {
	return (
		<Router basename='/what-to-see/'>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/movie/:movieId' element={<MoviePage />} />
				<Route element={<Navigate to='/' />} />
			</Routes>
			<Footer />
		</Router>
	);
}
