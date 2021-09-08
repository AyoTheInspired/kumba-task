import React from "react";
import styled from "styled-components";
import { Container, Row } from "react-bootstrap";

function Profile() {
	return (
		<Container>
			<Row>
				<Section className="">the profile page</Section>
			</Row>
		</Container>
	);
}

export default Profile;

const Section = styled.section``;
