import React from "react";
import styled from "styled-components";
import { useStateValue } from "../data-layer/StateProvider";

function BottomDiv() {
	const [{ restaurantData }] = useStateValue();
	const user = restaurantData?.user;

	return (
		<Wrap className="user__bottom mt-3 py-3 flex-btw flex-wrap col-10">
			<div className="user__likes mx-auto flex-col col">
				<h4 className="header">Likes</h4>
				<p className="flexed">{user.likes.toString()}</p>
			</div>

			<div className="user__dislikes mx-auto flex-col col">
				<h4 className="header">Dislikes</h4>
				<p className="flexed">{user.dislikes.toString()}</p>
			</div>
		</Wrap>
	);
}

export default BottomDiv;

const Wrap = styled.div`
	.header {
		font-size: 18px;
	}

	.user__likes {
		border-right: 1px solid var(--pry-clr-3);
	}

	@media (max-width: 500px) {
		.user__likes {
			border-right: none;
		}
	}
`;
