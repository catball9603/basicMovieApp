import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomeContainer from "Components/Home";
import TvContainer from "Components/Tv";
import SearchContainer from "Components/Search";
import DetailContainer from "Components/Detail";
import Header from "Components/Header";

function Router() {
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route path='/' exact component={HomeContainer} />
				<Route path='/tv' component={TvContainer} />
				<Route path='/search' component={SearchContainer} />
				<Route path='/movie/:id' component={DetailContainer} />
				<Route path='/tv/:id' component={DetailContainer} />
				<Redirect from='*' to='/' />
			</Switch>
		</Fragment>
	);
}

export default Router;
