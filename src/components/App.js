import React, { Fragment } from "react";
import "../styles/App.css";
import CreateLink from "./CreateLink";
import LinkList from "./LinkList";

function App() {
	return (
		<Fragment>
			<CreateLink />
			<LinkList />
		</Fragment>
	);
}

export default App;
