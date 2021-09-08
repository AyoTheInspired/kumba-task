import React from "react";
import { FiSmartphone } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useStateValue } from "../data-layer/StateProvider";
import styled from "styled-components";

function UserTop() {
	const [{ restaurantData }] = useStateValue();
	const user = restaurantData?.user;

	return (
		<Wrap>
			<div className="user__mid flex-btw mx-auto col-10 flex-wrap">
				<p className="text-center mx-auto my-1 user__name col-sm-6">
					<span className="user__tag">Name: </span> {user.name}
				</p>

				<p className="text-center mx-auto my-1 user__id col-sm-6">
					<span className="user__tag">ID: </span> {user.id}
				</p>
			</div>

			<p className="text-center mb-0 my-2">
				<span className="user__icon">
					<FiSmartphone />
				</span>
				{user.phone}
			</p>

			<p className="text-center mb-0 my-2">
				<span className="user__icon">
					<GoLocation />
				</span>
				{user.address}
			</p>

			<p className="text-center mb-0 my-2">
				<span className="user__tag">Bio: </span>
				{user.about}
			</p>
		</Wrap>
	);
}

export default UserTop;

const Wrap = styled.div`
	background: #ddd;
	margin-top: 5px;
	padding: 10px 20px;
	border-radius: 10px;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

	.user__tag {
		font-weight: bold;
		font-size: 15px;
	}

	.user__icon {
		font-size: 20px;
		font-weight: bold;
		color: var(--pry-clr-1);
		margin-right: 5px;
	}
`;
