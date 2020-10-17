import React, { useState } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const CreateLink = () => {
	const [description, setDescription] = useState("");
	const [url, setUrl] = useState("");

	const POST_MUTATION = gql`
		mutation PostMutation($description: String!, $url: String!) {
			post(description: $description, url: $url) {
				id
				createdAt
				url
				description
			}
		}
	`;

	return (
		<div>
			<div className="flex flex-column mt3">
				<input
					type="text"
					className="mb2"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					placeholder="A description for the link"
				/>
				<input
					type="text"
					className="mb2"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
					placeholder="The URL for the link"
				/>
			</div>
			<Mutation mutation={POST_MUTATION} variables={{ description, url }}>
				{(postMutation) => <button onClick={postMutation}>Submit</button>}
			</Mutation>
		</div>
	);
};

export default CreateLink;
