import React from "react";
import styled from "styled-components";
import { useStateValue } from "../data-layer/StateProvider";

function BottomDiv() {
	const [{ restaurantData }, dispatch] = useStateValue();
	const user = restaurantData?.user;

	return (
		<Wrap className="user__bottom mt-3 py-3 flex-btw flex-wrap col-10 bg-success">
			<div className="user__likes mx-auto flex-col col">
				<h4 className="header">Likes</h4>
				<div className="flexed">
					{user.likes.map((like) => (
						<p className="mb-0"> {like} &nbsp;</p>
					))}
				</div>
			</div>

			<div className="user__dislikes mx-auto flex-col col">
				<h4 className="header">Dislikes</h4>
				<div className="flexed">
					{user.dislikes.map((like, index) => (
						<p key={index} className="mb-0">
							{like} &nbsp;{" "}
						</p>
					))}
				</div>
			</div>
		</Wrap>
	);
}

export default BottomDiv;

const Wrap = styled.div``;
