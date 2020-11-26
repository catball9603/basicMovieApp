import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from 'Components/pages/Home';
import Tv from 'Components/pages/Tv';
import Search from 'Components/pages/Search';
import Detail from 'Components/pages/Detail';

function Router() {
	return (
		<Switch>
			<Route path='/' exact component={Home} />
			<Route path='/tv' component={Tv} />
			<Route path='/search' component={Search} />
			<Route path='detail' component={Detail} />
			<Redirect from='*' to='/' />
		</Switch>
	);
}

export default Router;
