import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { useStateValue } from "../data-layer/StateProvider";

function Profile() {
	const [{ restaurantData }, dispatch] = useStateValue();
	const tempData = [];

	const { name, id } = restaurantData?.user;
	const {
		order_id,
		restaurant: { street, city },
	} = restaurantData;

	return (
		<Container>
			<Row>
				<Section className="flexed">
					<li> {name} </li>

					<li> {street} </li>
				</Section>
			</Row>
		</Container>
	);
}

export default Profile;

const Section = styled.section`
	min-height: calc(100vh - 50px);
`;

const UserWrap = styled.div``;

// <UserWrap className="mx-auto">the name is {item.name}</UserWrap>
