import React, { Fragment } from "react";
import Router from "Routes";
import { GlobalStyle } from "./GlobalStyles";

function App() {
	return (
		<Fragment>
			<GlobalStyle />
			<Router />
		</Fragment>
	);
}

export default App;
