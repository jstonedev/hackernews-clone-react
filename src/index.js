import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";

// Apollo dependencies
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

// connect ApolloClient
const httpLink = createHttpLink({
	uri: "http://localhost:4000",
});

// Instantiate ApolloClient
const client = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById("root")
);
