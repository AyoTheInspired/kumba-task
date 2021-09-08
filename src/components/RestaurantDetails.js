import React from "react";
import styled from "styled-components";
import { useStateValue } from "../data-layer/StateProvider";

function RestaurantDetails() {
	const [{ restaurantData }] = useStateValue();
	const restaurant = restaurantData?.restaurant;

	return (
		<Wrap>
			<h5 className="mb-3 header text-center">Restaurant Details</h5>
			<p className="restaurant__value my-1 mb-0">
				<span className="restaurant__tag">Name: </span>
				{restaurant.name}.
			</p>

			<p className="restaurant__value mb-0 my-3">
				<span className="restaurant__tag">Address: </span>

				{`${restaurant.street}, ${restaurant.city}, ${restaurant.state}.`}
			</p>

			<p className="restaurant__value mt-3 mb-0">
				<span className="restaurant__tag">Zipcode: </span>
				{restaurant.zipcode}.
			</p>
		</Wrap>
	);
}

export default RestaurantDetails;

const Wrap = styled.div`
	padding: 10px 15px;
	background-color: #eee;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.8);
	border-radius: 10px;

	.restaurant__tag {
		font-weight: bold;
		font-size: 15px;
	}
`;
