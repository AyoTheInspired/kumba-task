import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import RestaurantDetails from "../components/RestaurantDetails";
import { useStateValue } from "../data-layer/StateProvider";
import UserDetails from "../components/UserDetails";
import ItemsOrdered from "../components/ItemsOrdered";
import Summary from "../components/Summary";

function Orders() {
	const [{ restaurantData }] = useStateValue();
	// console.log(restaurantData?.items);

	return (
		<Container>
			<Row>
				<Section className="flex-col p-4 ">
					{!restaurantData ? (
						<p className="mb-0 wait__alert">No Data...</p>
					) : (
						<>
							<RestaurantDetails />
							<UserDetails />
							<p className="items__ordered text-center mb-0">Items Ordered</p>
							<ItemsOrdered items={restaurantData?.items} />
							{/* <p className="items__ordered text-center mb-0"></p> */}
							<Summary items={restaurantData?.items} />
						</>
					)}
				</Section>
			</Row>
		</Container>
	);
}

export default Orders;

const Section = styled.section`
	min-height: calc(100vh - 50px);
	/* box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8); */

	.wait__alert {
		font-size: 30px;
		color: yellow;
	}

	.items__ordered {
		font-size: 25px;
		color: yellow;
	}
`;
