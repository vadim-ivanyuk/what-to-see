import { lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Home = lazy(() => import('./home'));
const Search = lazy(() => import('./search'));

export default function Routing() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/search' component={Search} />
			<Redirect to='/' />
		</Switch>
	);
}
