import React from "react";
import styled from "styled-components";

function Summary({ items }) {
	return (
		<Wrap className="p-4 col-lg-6 col-md-8 col-sm-10">
			<h4 className="header mb-3 text-center">Summary</h4>
			<div className="flex-btw mx-auto p-2">
				<p className="mb-0 total__tag">Total Items: </p>
			</div>

			<div className="flex-btw mx-auto p-2">
				<p className="mb-0 total__tag">Total Items: </p>
			</div>

			<div className="flex-btw mx-auto p-2">
				<p className="mb-0 total__tag">Total Items: </p>
			</div>
		</Wrap>
	);
}

export default Summary;

const Wrap = styled.div`
	background: #fff;
	/* .header {
		color: yellow;
	} */
`;
