import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { useStateValue } from "../data-layer/StateProvider";

function Profile() {
	const [{ restaurantData }, dispatch] = useStateValue();

	return (
		<Container>
			<Row>
				<Section className="">
					the profile page
					{restaurantData}
				</Section>
			</Row>
		</Container>
	);
}

export default Profile;

const Section = styled.section``;
