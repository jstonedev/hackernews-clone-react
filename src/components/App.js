import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../styles/App.css";
import CreateLink from "./CreateLink";
import Header from "./Header";
import LinkList from "./LinkList";
import Login from "./Login";
import Search from "./Search";

function App() {
	return (
		<Fragment>
			<div className="center w85">
				<Header />
				<div className="ph3 pv1 background-gray">
					<Switch>
						<Route exact path="/">
							<Redirect to="/new/1" />
						</Route>
						<Route exact path="/create">
							<CreateLink />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/search">
							<Search />
						</Route>
						<Route exact path="/top">
							<LinkList />
						</Route>
						<Route exact path="/new/:page">
							<LinkList />
						</Route>
					</Switch>
				</div>
			</div>
		</Fragment>
	);
}

export default App;
