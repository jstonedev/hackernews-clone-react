import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import CreateLink from "./CreateLink";
import Header from "./Header";
import LinkList from "./LinkList";

function App() {
	return (
		<Fragment>
			<div className="center w85">
				<Header />
				<div className="ph3 pv1 background-gray">
					<Switch>
						<Route exact path="/">
							<LinkList />
						</Route>
						<Route exact path="/create">
							<CreateLink />
						</Route>
					</Switch>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
