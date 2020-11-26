import React, { Fragment } from 'react';
import Router from 'Routes';
import { GlobalStyle } from './GlobalStyles';
import Header from './Header';

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<Header />
			<Router />
		</Fragment>
	);
}

export default App;
