import React, { useState } from "react";

import { ContentWrapper } from "../../styled-components/ContentWrapper";

const HomeContent = (props) => {
	const [isAdmin, setIsAdmin] = useState(false);

	return (
		<ContentWrapper>
			{isAdmin && <button>Edit Content</button>}

			<h1>{props.title}</h1>
			<h3>{props.text}</h3>
			<small>{props.subtitle}</small>
			<p>
				{" "}
				<a href={props.url}>Ver mas</a>
			</p>
		</ContentWrapper>
	);
};

export default HomeContent;
